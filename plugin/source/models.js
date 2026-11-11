import * as THREE from 'three';

function metal(color, metalness = 0.7, roughness = 0.25) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness,
    roughness,
    clearcoat: 0.8,
    clearcoatRoughness: 0.16,
    envMapIntensity: 0.9,
  });
}

function addMesh(parent, geometry, material, name, position = [0, 0, 0], rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  parent.add(mesh);
  return mesh;
}

function wheel(parent, x, z, radius, width, tire, rim, accent) {
  const group = new THREE.Group();
  group.name = `Wheel_${x < 0 ? 'Front' : 'Rear'}_${z < 0 ? 'Left' : 'Right'}`;
  group.position.set(x, radius, z);
  const tireMesh = addMesh(group, new THREE.CylinderGeometry(radius, radius, width, 28, 1), tire, 'Tire', [0, 0, 0], [Math.PI / 2, 0, 0]);
  tireMesh.castShadow = false;
  addMesh(group, new THREE.CylinderGeometry(radius * 0.58, radius * 0.58, width + 0.02, 20, 1), rim, 'Rim', [0, 0, 0], [Math.PI / 2, 0, 0]);
  const side = z >= 0 ? 1 : -1;
  addMesh(group, new THREE.TorusGeometry(radius * 0.58, 0.018, 5, 26), accent, 'RimRing', [0, 0, side * (width / 2 + 0.012)]);
  for (let index = 0; index < 5; index += 1) {
    const spoke = addMesh(
      group,
      new THREE.BoxGeometry(radius * 0.08, radius * 0.52, 0.018),
      rim,
      'Spoke',
      [0, radius * 0.18, side * (width / 2 + 0.018)],
    );
    spoke.rotation.z = (index / 5) * Math.PI * 2;
  }
  addMesh(group, new THREE.CylinderGeometry(radius * 0.13, radius * 0.13, 0.04, 14), accent, 'Hub', [0, 0, side * (width / 2 + 0.028)], [Math.PI / 2, 0, 0]);
  parent.add(group);
  return group;
}

export function createDemoCar() {
  const group = new THREE.Group();
  group.name = 'Car_Body';
  const silver = metal(0x98a4ab, 0.74, 0.27);
  const silverDark = metal(0x58676f, 0.64, 0.32);
  const carbon = metal(0x090e12, 0.35, 0.46);
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x07121b,
    metalness: 0.45,
    roughness: 0.06,
    transparent: true,
    opacity: 0.72,
    clearcoat: 1,
    depthWrite: false,
  });
  const tire = new THREE.MeshStandardMaterial({ color: 0x020304, roughness: 0.96, metalness: 0.02 });
  const rim = new THREE.MeshStandardMaterial({ color: 0xa6b0b5, metalness: 0.96, roughness: 0.18 });
  const accent = new THREE.MeshBasicMaterial({ color: 0x9eefff, toneMapped: false });
  const headlight = new THREE.MeshBasicMaterial({ color: 0xd5fbff, toneMapped: false });
  const tail = new THREE.MeshBasicMaterial({ color: 0xff304e, toneMapped: false });

  // Low mid-engine profile: long nose, cab-forward glass, muscular rear deck.
  const silhouette = new THREE.Shape();
  silhouette.moveTo(-2.28, 0.2);
  silhouette.lineTo(-2.3, 0.36);
  silhouette.quadraticCurveTo(-2.16, 0.55, -1.84, 0.62);
  silhouette.lineTo(-0.95, 0.72);
  silhouette.quadraticCurveTo(-0.7, 0.78, -0.54, 0.86);
  silhouette.lineTo(0.72, 0.86);
  silhouette.quadraticCurveTo(1.5, 0.84, 1.88, 0.72);
  silhouette.lineTo(2.22, 0.55);
  silhouette.quadraticCurveTo(2.3, 0.38, 2.18, 0.22);
  silhouette.lineTo(2.12, 0.18);
  silhouette.lineTo(-2.12, 0.18);
  silhouette.quadraticCurveTo(-2.28, 0.18, -2.28, 0.2);
  const bodyGeo = new THREE.ExtrudeGeometry(silhouette, {
    depth: 1.8,
    bevelEnabled: true,
    bevelThickness: 0.045,
    bevelSize: 0.05,
    bevelSegments: 3,
    curveSegments: 24,
    steps: 1,
  });
  bodyGeo.translate(0, 0, -0.9);
  addMesh(group, bodyGeo, silver, 'BodyShell');

  const cabin = new THREE.Shape();
  cabin.moveTo(-0.78, 0.86);
  cabin.quadraticCurveTo(-0.48, 1.13, -0.04, 1.2);
  cabin.lineTo(0.58, 1.17);
  cabin.quadraticCurveTo(0.94, 1.01, 1.12, 0.84);
  cabin.closePath();
  const cabinGeo = new THREE.ExtrudeGeometry(cabin, {
    depth: 1.24,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2,
    curveSegments: 18,
    steps: 1,
  });
  cabinGeo.translate(0, 0, -0.62);
  addMesh(group, cabinGeo, glass, 'GlassHouse');
  addMesh(group, new THREE.BoxGeometry(0.54, 0.025, 1.12), silverDark, 'RoofSpine', [0.22, 1.195, 0]);

  // Surfaces and aero appendages.
  addMesh(group, new THREE.BoxGeometry(0.7, 0.03, 1.95), carbon, 'FrontSplitter', [-2.3, 0.14, 0]);
  addMesh(group, new THREE.BoxGeometry(0.45, 0.24, 0.04), carbon, 'SplitterEndplateL', [-2.25, 0.25, -0.96]);
  addMesh(group, new THREE.BoxGeometry(0.45, 0.24, 0.04), carbon, 'SplitterEndplateR', [-2.25, 0.25, 0.96]);
  addMesh(group, new THREE.BoxGeometry(0.04, 0.18, 1.2), carbon, 'FrontGrille', [-2.31, 0.43, 0]);
  addMesh(group, new THREE.BoxGeometry(0.035, 0.06, 0.38), headlight, 'HeadlightL', [-2.3, 0.55, -0.57]);
  addMesh(group, new THREE.BoxGeometry(0.035, 0.06, 0.38), headlight, 'HeadlightR', [-2.3, 0.55, 0.57]);
  addMesh(group, new THREE.BoxGeometry(0.5, 0.035, 1.7), carbon, 'RearDiffuser', [2.15, 0.16, 0]);
  for (let index = -2; index <= 2; index += 1) {
    addMesh(group, new THREE.BoxGeometry(0.38, 0.12, 0.025), carbon, `DiffuserFin${index}`, [2.18, 0.24, index * 0.28]);
  }
  addMesh(group, new THREE.BoxGeometry(0.03, 0.055, 1.46), tail, 'TailLamp', [2.22, 0.57, 0]);
  addMesh(group, new THREE.BoxGeometry(0.42, 0.035, 1.7), carbon, 'RearWing', [2.06, 0.96, 0]);
  addMesh(group, new THREE.BoxGeometry(0.04, 0.22, 0.05), carbon, 'WingPylonL', [2.0, 0.84, -0.55]);
  addMesh(group, new THREE.BoxGeometry(0.04, 0.22, 0.05), carbon, 'WingPylonR', [2.0, 0.84, 0.55]);
  addMesh(group, new THREE.BoxGeometry(0.1, 0.03, 1.64), accent, 'WingGurney', [2.28, 0.98, 0]);

  for (const side of [-1, 1]) {
    addMesh(group, new THREE.BoxGeometry(0.74, 0.26, 0.04), carbon, `SideIntake${side}`, [0.48, 0.56, side * 0.912]);
    addMesh(group, new THREE.BoxGeometry(0.5, 0.012, 0.012), accent, `SideBlade${side}`, [0.17, 0.5, side * 0.918]);
    addMesh(group, new THREE.BoxGeometry(2.1, 0.07, 0.06), carbon, `SideSkirt${side}`, [-0.08, 0.2, side * 0.9]);
    addMesh(group, new THREE.BoxGeometry(0.2, 0.055, 0.15), carbon, `MirrorPod${side}`, [-0.52, 0.84, side * 0.86]);
  }

  wheel(group, -1.52, -0.9, 0.37, 0.28, tire, rim, accent);
  wheel(group, -1.52, 0.9, 0.37, 0.28, tire, rim, accent);
  wheel(group, 1.48, -0.92, 0.39, 0.32, tire, rim, accent);
  wheel(group, 1.48, 0.92, 0.39, 0.32, tire, rim, accent);

  normalizeGroup(group, 4.25, 4.6);
  return { group, update() {} };
}

export function normalizeGroup(group, targetLength = 4.2, maxSpan = 4.8) {
  group.updateMatrixWorld(true);
  let box = new THREE.Box3().setFromObject(group);
  let size = box.getSize(new THREE.Vector3());
  let scale = targetLength / Math.max(0.001, size.x);
  const span = Math.max(size.x, size.z);
  if (span * scale > maxSpan) scale = maxSpan / span;
  group.scale.multiplyScalar(scale);
  group.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(group);
  group.position.x -= (box.min.x + box.max.x) * 0.5;
  group.position.z -= (box.min.z + box.max.z) * 0.5;
  group.position.y -= box.min.y;
  group.updateMatrixWorld(true);
  return new THREE.Box3().setFromObject(group);
}

export function buildImportedVehicle(object, { preserveMaterials = false } = {}) {
  const group = new THREE.Group();
  const fallback = metal(0xb7c2c8, 0.7, 0.28);
  const removable = [];
  let meshes = 0;
  let triangles = 0;
  object.traverse((child) => {
    if (child.isLight || child.isCamera) {
      removable.push(child);
      return;
    }
    if (!child.isMesh) return;
    meshes += 1;
    if (!preserveMaterials || !child.material) child.material = fallback;
    child.castShadow = false;
    child.receiveShadow = false;
    if (child.geometry) {
      child.geometry.computeVertexNormals();
      const count = child.geometry.index ? child.geometry.index.count : (child.geometry.attributes.position?.count || 0);
      triangles += count / 3;
    }
  });
  for (const child of removable) child.removeFromParent();
  if (!meshes) throw new Error('The file contains no triangle mesh.');
  group.add(object);
  const box = normalizeGroup(group, 4.25, 4.8);
  const size = box.getSize(new THREE.Vector3());
  group.userData.importStats = { meshes, triangles: Math.round(triangles), size: size.toArray() };
  return { group, update() {}, stats: group.userData.importStats };
}

export function disposeObject(root) {
  if (!root) return;
  root.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      for (const material of materials) {
        for (const value of Object.values(material)) {
          if (value && value.isTexture) value.dispose();
        }
        material.dispose();
      }
    }
  });
}
