/**
 * Vehicle asset importers.
 *
 * Supported formats are intentionally limited to self-contained files so the
 * wind tunnel keeps working offline inside the DSH web client:
 *   - .obj
 *   - .glb
 *   - .gltf with embedded data: URIs only
 *
 * Draco, Meshopt and KTX2 need external decoder assets and are rejected with a
 * typed error instead of failing later inside the renderer.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { buildImportedVehicle } from './models.js';

export const IMPORT_FORMATS = ['stl', 'obj', 'glb', 'gltf'];
export const IMPORT_ACCEPT = '.stl,.obj,.glb,.gltf,model/stl,model/obj,model/gltf-binary,model/gltf+json';
export const MAX_IMPORT_BYTES = 25 * 1024 * 1024;

const GLB_MAGIC = 0x46546c67;
const GLB_JSON_CHUNK = 0x4e4f534a;
const UNSUPPORTED_EXTENSIONS = new Set([
  'KHR_draco_mesh_compression',
  'EXT_meshopt_compression',
  'KHR_texture_basisu',
]);

export function formatFromFileName(name = '') {
  const extension = String(name).split('.').pop()?.toLowerCase();
  return IMPORT_FORMATS.includes(extension) ? extension : null;
}

export function makeImportError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function asArrayBuffer(data) {
  if (data instanceof ArrayBuffer) return data;
  if (ArrayBuffer.isView(data)) {
    return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
  }
  throw makeImportError('INVALID_GLTF', 'The GLB data is not binary.');
}

function readGlbJson(input) {
  const buffer = asArrayBuffer(input);
  if (buffer.byteLength < 20) {
    throw makeImportError('INVALID_GLTF', 'The GLB header is incomplete.');
  }
  const view = new DataView(buffer);
  if (view.getUint32(0, true) !== GLB_MAGIC || view.getUint32(4, true) !== 2) {
    throw makeImportError('INVALID_GLTF', 'The file is not a glTF 2.0 binary.');
  }

  let offset = 12;
  while (offset + 8 <= buffer.byteLength) {
    const chunkLength = view.getUint32(offset, true);
    const chunkType = view.getUint32(offset + 4, true);
    const chunkStart = offset + 8;
    if (chunkStart + chunkLength > buffer.byteLength) {
      throw makeImportError('INVALID_GLTF', 'The GLB chunk table is truncated.');
    }
    if (chunkType === GLB_JSON_CHUNK) {
      try {
        const bytes = new Uint8Array(buffer, chunkStart, chunkLength);
        const text = new TextDecoder().decode(bytes).replace(/\0+$/g, '').trim();
        return JSON.parse(text);
      } catch {
        throw makeImportError('INVALID_GLTF', 'The GLB JSON chunk could not be parsed.');
      }
    }
    offset = chunkStart + chunkLength;
    if (offset % 4 !== 0) offset += 4 - (offset % 4);
  }

  throw makeImportError('INVALID_GLTF', 'The GLB has no JSON chunk.');
}

function readUriGltfJson(text) {
  try {
    const clean = String(text).replace(/^\uFEFF/, '').trim();
    return JSON.parse(clean);
  } catch {
    throw makeImportError('INVALID_GLTF', 'The glTF JSON could not be parsed.');
  }
}

function inspectGltfDocument(json) {
  const required = Array.isArray(json?.extensionsRequired) ? json.extensionsRequired : [];
  const unsupported = required.filter((extension) => UNSUPPORTED_EXTENSIONS.has(extension));
  if (unsupported.length > 0) {
    throw makeImportError(
      'COMPRESSED_ASSET',
      `The model requires unsupported compression: ${unsupported.join(', ')}.`,
    );
  }

  const resources = [
    ...(Array.isArray(json?.buffers) ? json.buffers : []),
    ...(Array.isArray(json?.images) ? json.images : []),
  ];
  const external = resources.find(
    (resource) => typeof resource?.uri === 'string'
      && resource.uri.length > 0
      && !resource.uri.startsWith('data:'),
  );
  if (external) {
    throw makeImportError(
      'EXTERNAL_RESOURCES',
      'The glTF references external buffers or textures; use a GLB or embed them as data URIs.',
    );
  }
}

function inspectAsset(asset) {
  if (!asset) throw makeImportError('INVALID_GLTF', 'No imported asset was provided.');
  if (asset.format === 'glb') {
    inspectGltfDocument(readGlbJson(asset.data));
  } else if (asset.format === 'gltf') {
    inspectGltfDocument(readUriGltfJson(asset.data));
  } else if (asset.format === 'obj' || asset.format === 'stl') {
    if (!asset.data) throw makeImportError('INVALID_MESH', 'The mesh file is empty.');
  } else {
    throw makeImportError('INVALID_GLTF', 'Unsupported imported asset format.');
  }
}

function loadGltf(asset) {
  const loader = new GLTFLoader();
  const data = asset.format === 'glb' ? asArrayBuffer(asset.data) : String(asset.data);
  return new Promise((resolve, reject) => {
    loader.parse(
      data,
      '',
      (gltf) => {
        const root = gltf?.scene || gltf?.scenes?.[0];
        if (!root) {
          reject(makeImportError('NO_MESHES', 'The glTF contains no renderable scene.'));
          return;
        }
        try {
          resolve(buildImportedVehicle(root, { preserveMaterials: true }));
        } catch (error) {
          reject(error);
        }
      },
      (error) => {
        const message = error instanceof Error ? error.message : String(error);
        if (/draco|meshopt|ktx2|basisu/i.test(message)) {
          reject(makeImportError('COMPRESSED_ASSET', message));
          return;
        }
        reject(makeImportError('INVALID_GLTF', message || 'The glTF could not be parsed.'));
      },
    );
  });
}

export async function loadImportedVehicle(asset) {
  inspectAsset(asset);

  if (asset.format === 'stl') {
    try {
      const geometry = new STLLoader().parse(asArrayBuffer(asset.data));
      geometry.computeVertexNormals();
      const mesh = new THREE.Mesh(geometry);
      return buildImportedVehicle(mesh);
    } catch (error) {
      if (error?.code) throw error;
      throw makeImportError('INVALID_STL', error instanceof Error ? error.message : 'The STL could not be parsed.');
    }
  }

  if (asset.format === 'obj') {
    try {
      const object = new OBJLoader().parse(String(asset.data));
      return buildImportedVehicle(object);
    } catch (error) {
      if (error?.code) throw error;
      throw makeImportError('INVALID_OBJ', error instanceof Error ? error.message : 'The OBJ could not be parsed.');
    }
  }

  return loadGltf(asset);
}
