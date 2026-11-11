/**
 * AeroLab CFD preview model.
 *
 * This is deliberately a reduced-order, deterministic preview — not OpenFOAM
 * and not a Navier–Stokes solution. The UI labels it as a preview so numbers
 * are useful for interaction design and demos, not engineering sign-off.
 */
export const VERSION = '1.0.0';

export const DEMO_GEOMETRY = {
  name: 'Car_Body.STL',
  length: 4.56,
  width: 2.0,
  height: 1.1,
  areaFactor: 0.615,
  wheels: 4,
};

export const TURBULENCE_MODELS = [
  { id: 'kOmegaSST', name: 'k-ω SST' },
  { id: 'kEpsilon', name: 'k-ε' },
  { id: 'spalartAllmaras', name: 'Spalart–Allmaras' },
  { id: 'laminar', name: 'Laminar' },
];

export const MESH_TYPES = [
  { id: 'polyhedral', name: '多面体网格' },
  { id: 'hexahedral', name: '六面体网格' },
  { id: 'tetrahedral', name: '四面体网格' },
];

export const MESH_LEVELS = [
  { id: 'coarse', name: '粗', factor: 0.52 },
  { id: 'medium', name: '中等', factor: 1 },
  { id: 'fine', name: '细', factor: 1.85 },
];

export const DEFAULT_SPEC = {
  inletVelocity: 40,
  outletPressure: 0,
  density: 1.225,
  temperature: 288.15,
  turbulence: 'kOmegaSST',
  meshType: 'polyhedral',
  meshLevel: 'medium',
  iterations: 5000,
  groundMode: 'fixed',
  upstream: 4,
  downstream: 10,
  side: 3,
  top: 3,
  wheels: 'fixed',
};

export const DEFAULT_VIZ = {
  mode: 'streamlines',
  density: 1.0,
  opacity: 0.8,
  showSlice: false,
  slicePosition: 0,
  colorMin: 0,
  colorMax: 40,
  showCar: true,
  showTunnel: true,
  showGround: true,
  showGrid: true,
  showAxes: true,
  vectorField: 'velocity',
};

export function frontalArea(geometry) {
  return Math.max(0.1, geometry.width * geometry.height * geometry.areaFactor);
}

export function computeResults(spec, geometry) {
  const speed = Math.max(0, Number(spec.inletVelocity) || 0);
  const rho = Math.max(0.1, Number(spec.density) || 1.225);
  const area = frontalArea(geometry);
  const q = 0.5 * rho * speed * speed;
  const meshPenalty = spec.meshLevel === 'coarse' ? 0.012 : spec.meshLevel === 'fine' ? -0.003 : 0;
  const turbulencePenalty = spec.turbulence === 'laminar' ? 0.02 : 0;
  const cd = Math.max(0.05, 0.31 + meshPenalty + turbulencePenalty);
  const cl = -0.65;
  const drag = q * cd * area;
  const downforce = q * Math.abs(cl) * area;
  const power = drag * speed;
  const reynolds = speed * geometry.length / 1.81e-5;
  return {
    speed,
    density: rho,
    area,
    q,
    cd,
    cl,
    drag,
    downforce,
    power,
    reynolds,
    cdA: cd * area,
  };
}

export function meshCellCount(spec, geometry) {
  const level = MESH_LEVELS.find((entry) => entry.id === spec.meshLevel) || MESH_LEVELS[1];
  const type = spec.meshType === 'hexahedral' ? 0.84 : spec.meshType === 'tetrahedral' ? 1.16 : 1;
  const base = 1_300_000 + frontalArea(geometry) * 1_430_000;
  return Math.round(base * level.factor * type);
}

export function meshQuality(spec) {
  if (spec.meshLevel === 'coarse') return '需检查';
  if (spec.meshType === 'tetrahedral') return '良好';
  return '合格';
}

export function initialResiduals() {
  return [
    { id: 'continuity', label: 'Continuity', color: '#4e9dff', value: 1.1e-3 },
    { id: 'ux', label: 'Ux', color: '#ffad4d', value: 8.2e-4 },
    { id: 'uy', label: 'Uy', color: '#59e39a', value: 6.1e-4 },
    { id: 'uz', label: 'Uz', color: '#a77dff', value: 4.8e-4 },
    { id: 'omega', label: 'ω', color: '#ff77c8', value: 3.2e-4 },
  ];
}

export function residualAt(iteration, index) {
  const seed = [1.1, 0.86, 0.64, 0.51, 0.35][index] || 0.5;
  const start = 10 ** (1.1 - index * 0.08);
  const decay = Math.exp(-iteration / 300);
  const wave = 1 + 0.2 * Math.sin(iteration * 0.012 + index * 1.7);
  return Math.max(1e-6, start * decay * seed * wave);
}

export function residualSeries(iteration, count = 72) {
  const max = Math.max(1, iteration);
  const points = [];
  for (let index = 0; index < count; index += 1) {
    const x = Math.round((index / (count - 1)) * max);
    points.push({
      iteration: x,
      values: [0, 1, 2, 3, 4].map((series) => residualAt(x, series)),
    });
  }
  return points;
}

export function buildProject({ name, spec, viz, geometry, importedName, mesh, solver }) {
  return {
    schema: 'aerolab-cfd-project',
    version: VERSION,
    name,
    savedAt: new Date().toISOString(),
    geometry: {
      ...geometry,
      name: importedName || geometry.name,
    },
    spec,
    viz,
    mesh: { cells: mesh.cells, quality: mesh.quality, ready: mesh.ready },
    solver: {
      status: solver.status,
      progress: solver.progress,
      iteration: solver.iteration,
      elapsedSeconds: solver.elapsedSeconds,
    },
    note: 'Preview project — not a validated OpenFOAM result.',
  };
}

export function makeInitialSolver(spec, geometry) {
  const progress = 0.572;
  const iteration = Math.round(progress * spec.iterations);
  return {
    status: 'paused',
    progress,
    iteration,
    elapsedSeconds: 168,
    etaSeconds: 83,
    residuals: initialResiduals(),
    history: residualSeries(iteration),
    logs: [
      { time: '00:00:00', text: 'AeroLab preview solver initialised.' },
      { time: '00:00:02', text: `Domain generated for ${geometry.name}.` },
      { time: '00:00:03', text: `Mesh ready: ${meshCellCount(spec, geometry).toLocaleString('en-US')} cells · ${meshQuality(spec)}.` },
      { time: '00:00:04', text: 'simpleFoam-compatible preview field · k-ω SST.' },
      { time: '00:02:48', text: `Iteration ${iteration.toLocaleString('en-US')} / ${spec.iterations.toLocaleString('en-US')} · residuals falling.` },
    ],
  };
}

export function formatDuration(seconds) {
  const safe = Math.max(0, Math.round(seconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function formatForce(value) {
  if (!Number.isFinite(value)) return '—';
  return Math.abs(value) >= 1000 ? `${(value / 1000).toFixed(2)} kN` : `${value.toFixed(0)} N`;
}

export function formatCompact(value, digits = 1) {
  if (!Number.isFinite(value)) return '—';
  if (Math.abs(value) >= 1e9) return `${(value / 1e9).toFixed(digits)}B`;
  if (Math.abs(value) >= 1e6) return `${(value / 1e6).toFixed(digits)}M`;
  if (Math.abs(value) >= 1e3) return `${(value / 1e3).toFixed(digits)}k`;
  return value.toFixed(digits);
}
