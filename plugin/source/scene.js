import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { createDemoCar, disposeObject } from './models.js';

const TAU = Math.PI * 2;
const COLOR_STOPS = [
  [0.0, new THREE.Color('#163dff')],
  [0.26, new THREE.Color('#00b8ff')],
  [0.48, new THREE.Color('#00f2d0')],
  [0.7, new THREE.Color('#d9ff3d')],
  [0.86, new THREE.Color('#ff8b26')],
  [1.0, new THREE.Color('#ff3158')],
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function mulberry32(seed) {
  let value = seed >>> 0;
  return function random() {
    value += 0x6D2B79F5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function colorFor(value) {
  const t = clamp(value, 0, 1);
  for (let index = 1; index < COLOR_STOPS.length; index += 1) {
    if (t <= COLOR_STOPS[index][0]) {
      const [start, startColor] = COLOR_STOPS[index - 1];
      const [end, endColor] = COLOR_STOPS[index];
      return startColor.clone().lerp(endColor, (t - start) / Math.max(0.0001, end - start));
    }
  }
  return COLOR_STOPS[COLOR_STOPS.length - 1][1].clone();
}

function makeEnvironment() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  const sky = context.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0, '#08121c');
  sky.addColorStop(0.35, '#182a38');
  sky.addColorStop(0.5, '#68818f');
  sky.addColorStop(0.62, '#0c1821');
  sky.addColorStop(1, '#020508');
  context.fillStyle = sky;
  context.fillRect(0, 0, 1024, 512);
  const overhead = context.createRadialGradient(500, 70, 4, 500, 70, 280);
  overhead.addColorStop(0, 'rgba(255,255,255,.98)');
  overhead.addColorStop(0.18, 'rgba(220,245,255,.55)');
  overhead.addColorStop(1, 'rgba(120,180,210,0)');
  context.fillStyle = overhead;
  context.fillRect(0, 0, 1024, 512);
  const blue = context.createRadialGradient(180, 260, 4, 180, 260, 200);
  blue.addColorStop(0, 'rgba(34,126,255,.5)');
  blue.addColorStop(1, 'rgba(2,22,50,0)');
  context.fillStyle = blue;
  context.fillRect(0, 0, 1024, 512);
  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.25, 'rgba(255,255,255,.65)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createCfdScene({ canvas, container, initialViz, onReady, onError }) {
  let disposed = false;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (error) {
    onError?.(error);
    return null;
  }
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x050a10, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050a10);
  scene.fog = new THREE.FogExp2(0x07111a, 0.018);
  const environment = makeEnvironment();
  scene.environment = environment;
  scene.environmentIntensity = 1.02;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const home = new THREE.Vector3(-6.4, 2.95, 6.7);
  camera.position.copy(home);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.enablePan = false;
  controls.minDistance = 4;
  controls.maxDistance = 20;
  controls.minPolarAngle = 0.12;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.target.set(0, 1.05, 0);
  controls.update();

  const lights = new THREE.Group();
  lights.add(new THREE.HemisphereLight(0xe8f7ff, 0x020509, 1.55));
  const key = new THREE.DirectionalLight(0xffffff, 3.0);
  key.position.set(-5, 9, 6);
  lights.add(key);
  const rim = new THREE.DirectionalLight(0x4d9dff, 2.0);
  rim.position.set(6, 4, -7);
  lights.add(rim);
  const fill = new THREE.DirectionalLight(0xb8e4ff, 0.9);
  fill.position.set(-8, 3, -3);
  lights.add(fill);
  const top = new THREE.PointLight(0xffffff, 8, 18, 2);
  top.position.set(0, 7, 0);
  lights.add(top);
  scene.add(lights);

  const overhead = new THREE.Mesh(
    new THREE.BoxGeometry(11, 0.06, 0.2),
    new THREE.MeshBasicMaterial({ color: 0xe7fbff, transparent: true, opacity: 0.45, toneMapped: false, depthWrite: false }),
  );
  overhead.position.set(0, 5.3, -2.8);
  scene.add(overhead);

  // Wind-tunnel test section.
  const tunnel = new THREE.Group();
  tunnel.name = 'WindTunnel';
  const tunnelSize = new THREE.Vector3(18, 4, 6);
  const boxGeo = new THREE.BoxGeometry(tunnelSize.x, tunnelSize.y, tunnelSize.z);
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(boxGeo),
    new THREE.LineBasicMaterial({ color: 0x3ea6d8, transparent: true, opacity: 0.42, toneMapped: false, depthWrite: false }),
  );
  edges.position.set(0, tunnelSize.y / 2, 0);
  tunnel.add(edges);
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(tunnelSize.x, tunnelSize.y, tunnelSize.z),
    new THREE.MeshPhysicalMaterial({
      color: 0x2b8db8,
      transparent: true,
      opacity: 0.025,
      roughness: 0.16,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  glass.position.set(0, tunnelSize.y / 2, 0);
  tunnel.add(glass);
  const stripMaterial = new THREE.LineBasicMaterial({ color: 0x377e9a, transparent: true, opacity: 0.17, toneMapped: false, depthWrite: false });
  for (let x = -8; x <= 8; x += 4) {
    const points = [
      x, 0.015, -3, x, 0.015, 3,
      x, 0.015, -3, x, 4, -3,
      x, 0.015, 3, x, 4, 3,
      x, 4, -3, x, 4, 3,
    ];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    tunnel.add(new THREE.LineSegments(geometry, stripMaterial));
  }
  const inlet = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 4),
    new THREE.MeshBasicMaterial({ color: 0x2e91d8, transparent: true, opacity: 0.055, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  inlet.rotation.y = Math.PI / 2;
  inlet.position.set(-9.01, 2, 0);
  tunnel.add(inlet);
  scene.add(tunnel);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(18, 6),
    new THREE.MeshStandardMaterial({ color: 0x060c11, metalness: 0.55, roughness: 0.52 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0.006;
  scene.add(ground);
  const grid = new THREE.GridHelper(18, 28, 0x2d6c88, 0x1a303b);
  grid.position.y = 0.012;
  grid.material.transparent = true;
  grid.material.opacity = 0.24;
  grid.material.depthWrite = false;
  scene.add(grid);
  const groundGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(19, 7),
    new THREE.MeshBasicMaterial({ color: 0x0d2230, transparent: true, opacity: 0.025, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  groundGlow.rotation.x = -Math.PI / 2;
  groundGlow.position.y = 0.004;
  scene.add(groundGlow);

  let car = null;
  let carBox = new THREE.Box3(new THREE.Vector3(-2, 0, -0.9), new THREE.Vector3(2, 1.2, 0.9));
  let carGroup = null;

  function mountCar(next, demo = false) {
    if (car) {
      scene.remove(car);
      disposeObject(car);
    }
    car = next.group || next;
    carGroup = next.group || next;
    carGroup.name = demo ? 'Car_Body' : 'Imported_Car';
    scene.add(carGroup);
    carGroup.updateMatrixWorld(true);
    carBox = new THREE.Box3().setFromObject(carGroup);
    regenerateFlow();
  }

  function setVehicle(next) {
    mountCar(next, false);
  }

  function setDemoVehicle() {
    mountCar(createDemoCar(), true);
  }

  // Thick, colored streamlines batched into one draw call.
  let lineObject = null;
  let lineMaterial = null;
  let lineSegmentCount = 0;
  let paths = [];
  let flowTime = 0;

  function flowVelocity(x, y, z) {
    let vx = 4.8;
    let vy = 0;
    let vz = 0;
    const dx = (x + 0.1) / 2.55;
    const dy = (y - 0.82) / 0.82;
    const dz = z / 1.12;
    const ellipsoid = dx * dx + dy * dy + dz * dz;
    const proximity = Math.exp(-ellipsoid * 1.45);
    if (ellipsoid < 2.3) {
      vx *= 1 - 0.36 * proximity;
      vy += Math.sign(y - 0.82 || 1) * proximity * 1.5;
      vz += z * proximity * 1.6;
    }
    const wakeX = x - 1.3;
    if (wakeX > 0) {
      const wake = Math.exp(-wakeX / 3.1) * Math.exp(-Math.abs(z) / 1.7) * Math.exp(-Math.abs(y - 0.8) / 1.1);
      vz += Math.sin(wakeX * 2.2 - flowTime * 2.2) * wake * 2.4 * Math.sign(z || 1);
      vy += Math.cos(wakeX * 1.75 - flowTime * 1.9) * wake * 0.9;
    }
    if (y < 0.14) vy += (0.14 - y) * 6;
    if (y > 4.2) vy -= (y - 4.2) * 6;
    if (z < -3.5) vz += (-3.5 - z) * 4;
    if (z > 3.5) vz -= (z - 3.5) * 4;
    return [vx, vy, vz];
  }

  function regenerateFlow() {
    const random = mulberry32(20261111);
    paths = [];
    const baseCount = window.innerWidth < 900 ? 120 : 220;
    for (let index = 0; index < baseCount; index += 1) {
      let x = -8.7;
      let y = 0.22 + random() * 3.6;
      let z = -2.75 + random() * 5.5;
      const points = [];
      for (let step = 0; step < 46; step += 1) {
        const speed = Math.hypot(...flowVelocity(x, y, z));
        const dx = (x + 0.1) / 2.55;
        const dy = (y - 0.82) / 0.82;
        const dz = z / 1.12;
        const body = Math.exp(-(dx * dx + dy * dy + dz * dz) * 1.25);
        const wake = x > 1.2 ? Math.exp(-(x - 1.2) / 3.2) * Math.exp(-Math.abs(z) / 1.7) : 0;
        const color = colorFor(0.27 + (speed / 11.5) * 0.34 + body * 0.25 + wake * 0.11);
        points.push({ x, y, z, color });
        const [vx, vy, vz] = flowVelocity(x, y, z);
        x += vx * 0.16;
        y += vy * 0.16;
        z += vz * 0.16;
        if (x > 8.8 || Math.abs(z) > 3.7 || y < 0.03 || y > 4.4) break;
      }
      if (points.length > 3) paths.push(points);
    }

    if (lineObject) {
      scene.remove(lineObject);
      lineObject.geometry.dispose();
      lineMaterial.dispose();
    }
    const positions = [];
    const colors = [];
    for (const path of paths) {
      for (let index = 0; index < path.length - 1; index += 1) {
        const a = path[index];
        const b = path[index + 1];
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        colors.push(a.color.r, a.color.g, a.color.b, b.color.r, b.color.g, b.color.b);
      }
    }
    const geometry = new LineSegmentsGeometry();
    geometry.setPositions(positions);
    geometry.setColors(colors);
    lineSegmentCount = geometry.attributes.instanceStart?.count || 0;
    lineMaterial = new LineMaterial({
      color: 0xffffff,
      linewidth: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: initialViz?.opacity ?? 0.76,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NormalBlending,
      toneMapped: false,
      resolution: new THREE.Vector2(1, 1),
    });
    lineObject = new LineSegments2(geometry, lineMaterial);
    lineObject.frustumCulled = false;
    lineObject.renderOrder = 3;
    scene.add(lineObject);
  }

  const initialCar = createDemoCar();
  mountCar(initialCar, true);

  // Slice/contour plane shared by velocity, pressure and vorticity views.
  const sliceMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uMode: { value: 0 },
      uTime: { value: 0 },
      uOpacity: { value: 0.68 },
      uMin: { value: 0 },
      uMax: { value: 40 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uMode;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uMin;
      uniform float uMax;
      vec3 ramp(float t) {
        t = clamp(t, 0.0, 1.0);
        vec3 c0 = vec3(0.03, 0.15, 1.0);
        vec3 c1 = vec3(0.0, 0.78, 1.0);
        vec3 c2 = vec3(0.0, 1.0, 0.62);
        vec3 c3 = vec3(0.92, 1.0, 0.18);
        vec3 c4 = vec3(1.0, 0.45, 0.06);
        vec3 c5 = vec3(1.0, 0.06, 0.18);
        if (t < 0.2) return mix(c0, c1, t / 0.2);
        if (t < 0.4) return mix(c1, c2, (t - 0.2) / 0.2);
        if (t < 0.62) return mix(c2, c3, (t - 0.4) / 0.22);
        if (t < 0.82) return mix(c3, c4, (t - 0.62) / 0.2);
        return mix(c4, c5, (t - 0.82) / 0.18);
      }
      void main() {
        vec2 p = vUv * vec2(14.0, 4.0) - vec2(7.0, 2.0);
        float cx = (p.x + 0.1) / 2.7;
        float cy = (p.y - 0.72) / 0.72;
        float car = exp(-(cx * cx + cy * cy) * 1.5);
        float wave = sin(p.x * 1.6 - uTime * 0.9 + p.y * 2.1) * 0.5 + 0.5;
        float stream = sin(p.x * 3.4 + p.y * 2.4 + uTime) * 0.04;
        float base = clamp((p.x + 7.0) / 14.0 + (p.y / 4.0) * 0.23 + stream, 0.0, 1.0);
        vec3 color;
        if (uMode < 0.5) {
          float speed = (uMax - uMin) * clamp(base * 0.76 + car * 0.6 + wave * 0.12, 0.0, 1.0) + uMin;
          color = ramp((speed - uMin) / max(1.0, uMax - uMin));
        } else if (uMode < 1.5) {
          float pressure = 0.55 - car * 0.85 + (p.x + 7.0) * 0.018 + wave * 0.06;
          color = ramp(clamp(pressure, 0.0, 1.0));
        } else {
          float vort = exp(-abs(p.x - 2.1) * 0.7) * (0.5 + 0.5 * sin(p.y * 5.4 + p.x * 2.2 - uTime * 1.4));
          color = ramp(clamp(vort * 0.8 + base * 0.25, 0.0, 1.0));
        }
        float alpha = uOpacity * (0.35 + 0.65 * smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x));
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    depthTest: true,
    toneMapped: false,
    blending: THREE.NormalBlending,
  });
  const slice = new THREE.Mesh(new THREE.PlaneGeometry(14, 4), sliceMaterial);
  slice.position.set(0, 2, 0);
  slice.visible = false;
  slice.renderOrder = 4;
  scene.add(slice);

  function setMode(mode) {
    const contour = mode === 'velocity' || mode === 'pressure' || mode === 'vorticity';
    if (lineObject) lineObject.visible = mode === 'streamlines';
    slice.visible = contour || Boolean(initialViz?.showSlice);
    sliceMaterial.uniforms.uMode.value = mode === 'pressure' ? 1 : mode === 'vorticity' ? 2 : 0;
    sliceMaterial.uniforms.uOpacity.value = contour ? 0.55 : 0.3;
    if (contour) {
      lineObject.visible = true;
      lineMaterial.opacity = 0.22;
    }
    if (!contour) lineMaterial.opacity = initialViz?.opacity ?? 0.8;
  }

  function setViz(viz) {
    if (!viz) return;
    setMode(viz.mode);
    if (lineObject && lineMaterial) {
      lineMaterial.opacity = viz.mode === 'streamlines' ? viz.opacity : 0.18;
      lineMaterial.linewidth = 1.4 + viz.density * 0.8;
      lineMaterial.resolution.set(container.clientWidth, container.clientHeight);
      lineObject.geometry.instanceCount = Math.max(40, Math.floor(lineSegmentCount * clamp(viz.density / 2, 0.2, 1)));
    }
    slice.visible = viz.showSlice || viz.mode !== 'streamlines';
    slice.position.z = viz.slicePosition * 2.2;
    sliceMaterial.uniforms.uOpacity.value = viz.showSlice ? 0.6 : 0.48;
    sliceMaterial.uniforms.uMin.value = viz.colorMin;
    sliceMaterial.uniforms.uMax.value = viz.colorMax;
    if (car) car.visible = viz.showCar;
    tunnel.visible = viz.showTunnel;
    ground.visible = viz.showGround;
    grid.visible = viz.showGrid;
  }

  function setView(view) {
    if (view === 'side') {
      camera.position.set(0.01, 2.4, 15.5);
      controls.target.set(0, 1.1, 0);
    } else if (view === 'top') {
      camera.position.set(0.01, 13.2, 0.8);
      controls.target.set(0, 0.5, 0);
    } else if (view === 'front') {
      camera.position.set(-13.5, 3.2, 0.01);
      controls.target.set(0, 1.05, 0);
    } else {
      camera.position.copy(home);
      controls.target.set(0, 1.05, 0);
    }
    controls.update();
  }

  let frame = 0;
  let clock = 0;
  let last = performance.now();
  let firstFrame = true;

  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (lineMaterial) lineMaterial.resolution.set(width, height);
  }
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();

  function animate(now) {
    if (disposed) return;
    frame = requestAnimationFrame(animate);
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    clock += dt;
    flowTime = clock;
    controls.update();
    if (slice.visible) sliceMaterial.uniforms.uTime.value = clock;
    renderer.render(scene, camera);
    if (firstFrame) {
      firstFrame = false;
      onReady?.();
    }
  }
  frame = requestAnimationFrame(animate);

  return {
    setVehicle,
    setDemoVehicle,
    setViz,
    setView,
    resize,
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) {
            for (const value of Object.values(material)) {
              if (value && value.isTexture) value.dispose();
            }
            material.dispose();
          }
        }
      });
      renderer.dispose();
      scene.clear();
      environment.dispose();
    },
  };
}
