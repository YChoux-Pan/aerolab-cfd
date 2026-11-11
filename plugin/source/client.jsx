import {
  DEFAULT_SPEC,
  DEFAULT_VIZ,
  DEMO_GEOMETRY,
  MESH_LEVELS,
  MESH_TYPES,
  TURBULENCE_MODELS,
  buildProject,
  computeResults,
  formatDuration,
  makeInitialSolver,
  meshCellCount,
  meshQuality,
  residualAt,
  residualSeries,
} from './solver.js';
import { createCfdScene } from './scene.js';
import { IMPORT_ACCEPT, MAX_IMPORT_BYTES, formatFromFileName, loadImportedVehicle } from './importers.js';

let React = null;
let h = null;
let Fragment = null;

export function installReact(react) {
  React = react;
  h = react.createElement;
  Fragment = react.Fragment;
}

const NS = 'aerolab-cfd';
const shared = { open: false };
const listeners = new Set();

function setLabOpen(open) {
  if (shared.open === open) return;
  shared.open = open;
  for (const listener of listeners) listener();
}

function subscribeOpen(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const MODES = [
  { id: 'streamlines', label: '流线', sub: 'STREAMLINES', icon: 'stream' },
  { id: 'velocity', label: '速度云图', sub: 'VELOCITY', icon: 'velocity' },
  { id: 'pressure', label: '压力云图', sub: 'PRESSURE', icon: 'pressure' },
  { id: 'vorticity', label: '涡量图', sub: 'VORTICITY', icon: 'vorticity' },
];

const INLET_PRESETS = [20, 40, 60];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function fmtForce(value) {
  if (!Number.isFinite(value)) return '—';
  return Math.abs(value) >= 1000 ? `${(value / 1000).toFixed(2)} kN` : `${value.toFixed(0)} N`;
}

function fmtNumber(value, digits = 0) {
  if (!Number.isFinite(value)) return '—';
  return value.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function downloadFile(name, text, type = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ac-logo-g" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#83e8ff" />
          <stop offset=".55" stopColor="#2f8cff" />
          <stop offset="1" stopColor="#1749d8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="42" height="42" rx="12" fill="#07111c" stroke="#1d5d8f" />
      <path d="M7 29.5c6.2-1.3 10.1-4.4 13.5-11l3.6-8.7 5.2 9.2c4.1 7.3 7.9 10.2 11.7 11" stroke="url(#ac-logo-g)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11 35c5-1 8.1-3.4 10.6-8.2M20 35c3.7-.7 6.1-2.5 8-6.1M30 35c3-.6 5.2-2 6.9-4.6" stroke="#8de9ff" strokeOpacity=".55" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="24" cy="9.7" r="2" fill="#c6f7ff" />
    </svg>
  );
}

function Icon({ name, size = 16 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  };
  switch (name) {
    case 'new':
      return <svg {...common}><path d="M6 3.5h7l5 5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" /><path d="M13 3.5V9h5M9 14h6M12 11v6" /></svg>;
    case 'open':
      return <svg {...common}><path d="M3.5 7.5h6l2 2h9v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Z" /><path d="M3.5 10h17" /></svg>;
    case 'save':
      return <svg {...common}><path d="M4 4h13l3 3v13H4z" /><path d="M8 4v6h8V4M8 20v-6h8v6" /></svg>;
    case 'import':
      return <svg {...common}><path d="M12 3v11m0 0 4-4m-4 4-4-4" /><path d="M4 15.5V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.5" /></svg>;
    case 'mesh':
      return <svg {...common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9M8 5.2v8.8m8-8.8v8.8" /></svg>;
    case 'play':
      return <svg {...common}><path d="M8 5.5v13L19 12 8 5.5Z" fill="currentColor" stroke="none" /></svg>;
    case 'pause':
      return <svg {...common}><rect x="7" y="5" width="3.4" height="14" rx=".6" fill="currentColor" stroke="none" /><rect x="13.6" y="5" width="3.4" height="14" rx=".6" fill="currentColor" stroke="none" /></svg>;
    case 'stop':
      return <svg {...common}><rect x="6.5" y="6.5" width="11" height="11" rx=".8" fill="currentColor" stroke="none" /></svg>;
    case 'analysis':
      return <svg {...common}><path d="M4 20V4M4 20h16M8 16v-4m4 4V8m4 8v-6m4 6V6" /></svg>;
    case 'report':
      return <svg {...common}><path d="M6 3.5h8l4 4V21H6z" /><path d="M14 3.5V8h4M9 12h6M9 16h6" /></svg>;
    case 'settings':
      return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="M19 13.5a7.5 7.5 0 0 0 0-3l2-1.4-2-3.4-2.2 1a7 7 0 0 0-2.6-1.5L14 3h-4l-.3 2.2a7 7 0 0 0-2.6 1.5l-2.2-1-2 3.4 2 1.4a7.5 7.5 0 0 0 0 3l-2 1.4 2 3.4 2.2-1a7 7 0 0 0 2.6 1.5L10 21h4l.3-2.2a7 7 0 0 0 2.6-1.5l2.2 1 2-3.4-2.1-1.4Z" /></svg>;
    case 'close':
      return <svg {...common}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case 'help':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.7 2.7 0 0 1 5.3.6c0 1.6-2.3 1.7-2.3 3.4M12.5 17h.01" /></svg>;
    case 'chevron':
      return <svg {...common}><path d="m8 10 4 4 4-4" /></svg>;
    case 'check':
      return <svg {...common}><path d="m5 12 4.2 4.2L19 6.8" /></svg>;
    case 'car':
      return <svg {...common}><path d="M3.5 15.5 5 10l3-2h8l3 2 1.5 5.5v3h-17z" /><path d="M7 15.5h10M7.5 12h9" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="16.5" cy="18.5" r="1.5" /></svg>;
    case 'tunnel':
      return <svg {...common}><path d="M3 7h18v10H3zM6 10h3v4H6zM12 10h3v4h-3z" /><path d="M3 4v3m18-3v3M3 17v3m18-3v3" /></svg>;
    case 'ground':
      return <svg {...common}><path d="M3 17h18M5 17l2-4h10l2 4M8 13V9h8v4" /></svg>;
    case 'inlet':
      return <svg {...common}><path d="M3 12h12M11 8l4 4-4 4M18 5v14" /></svg>;
    case 'outlet':
      return <svg {...common}><path d="M9 12h12m-4-4 4 4-4 4M6 5v14" /></svg>;
    case 'wall':
      return <svg {...common}><path d="M4 5h16v14H4zM4 9h16M4 13h16M8 5v4m8-4v4m-4 4v6" /></svg>;
    case 'solver':
      return <svg {...common}><path d="M5 19V5M5 19h14M8 15c2.4 0 2.1-8 4.5-8s2.1 5 4.5 5 1.8-2 3-2" /></svg>;
    case 'grid':
      return <svg {...common}><path d="M4 4h16v16H4zM4 9h16M4 15h16M9 4v16M15 4v16" /></svg>;
    case 'layers':
      return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
    case 'log':
      return <svg {...common}><path d="M4 5h16v14H4z" /><path d="m7 9 2 2-2 2M12 13h5" /></svg>;
    case 'download':
      return <svg {...common}><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" /></svg>;
    case 'upload':
      return <svg {...common}><path d="M12 16V4m0 0 4 4m-4-4L8 8M4 20h16" /></svg>;
    case 'refresh':
      return <svg {...common}><path d="M20 11a8 8 0 1 0-2.3 6.7M20 5v6h-6" /></svg>;
    case 'info':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>;
    case 'eye':
      return <svg {...common}><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6S2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.5" /></svg>;
    case 'eyeOff':
      return <svg {...common}><path d="m4 4 16 16M9.9 6.3A11.3 11.3 0 0 1 12 6c6.1 0 9.5 6 9.5 6a16 16 0 0 1-3.1 3.5M6.2 7.9A16.5 16.5 0 0 0 2.5 12s3.4 6 9.5 6a10 10 0 0 0 3.1-.5" /></svg>;
    case 'stream':
      return <svg {...common}><path d="M3 8c4 0 4-3 8-3s4 3 10 3M3 13c4 0 4 3 8 3s4-3 10-3M3 18h18" /></svg>;
    case 'velocity':
      return <svg {...common}><path d="M3 17h11a4 4 0 1 0-4-4H3M3 7h8a3 3 0 1 1-3 3" /><path d="m18 14 3 3-3 3" /></svg>;
    case 'pressure':
      return <svg {...common}><path d="M4 17a8 8 0 1 1 16 0" /><path d="m12 17 4-5M6 17h12" /><circle cx="12" cy="17" r="1.4" fill="currentColor" /></svg>;
    case 'vorticity':
      return <svg {...common}><path d="M19 9c-1-3-4-4-6.5-2.5C9 8.5 10 13 14 13c3 0 4.5-2.5 3.5-4.5" /><path d="M5 18c3 1 6-1 6-4 0-2-2-3-3.5-2" /><path d="M3 6c2-1 4-.5 5 1" /></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
  }
}

function SectionTitle({ children, aside }) {
  return (
    <div className="ac-section-title">
      <span>{children}</span>
      {aside}
    </div>
  );
}

function NumberField({ label, value, unit, min, max, step = 1, onChange }) {
  return (
    <label className="ac-field">
      <span>{label}</span>
      <div className="ac-number">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(clamp(Number(event.target.value), min, max))}
        />
        {unit ? <em>{unit}</em> : null}
      </div>
    </label>
  );
}

function SelectField({ label, value, options, onChange }) {
  return (
    <label className="ac-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
      </select>
    </label>
  );
}

function Slider({ label, value, min, max, step, display, onChange }) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <label className="ac-slider-field">
      <span className="ac-slider-head"><span>{label}</span><strong>{display}</strong></span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--ac-range': `${percent}%` }}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={checked} className={`ac-toggle${checked ? ' is-on' : ''}`} onClick={() => onChange(!checked)}>
      <span>{label}</span><i><b /></i>
    </button>
  );
}

function AxisTriad() {
  return (
    <svg className="ac-axis" viewBox="0 0 86 74" aria-hidden="true">
      <path d="M42 40V13" stroke="#62e0ff" strokeWidth="1.5" />
      <path d="m42 13-4 6h8l-4-6Z" fill="#62e0ff" />
      <text x="48" y="14" fill="#8feaff" fontSize="9">Z</text>
      <path d="M42 40 68 55" stroke="#8cff74" strokeWidth="1.5" />
      <path d="m68 55-7-1 3-6 4 7Z" fill="#8cff74" />
      <text x="70" y="59" fill="#9cff85" fontSize="9">Y</text>
      <path d="M42 40 18 52" stroke="#ff6b72" strokeWidth="1.5" />
      <path d="m18 52 7-1-2-6-5 7Z" fill="#ff6b72" />
      <text x="8" y="57" fill="#ff8a8f" fontSize="9">X</text>
      <circle cx="42" cy="40" r="2.2" fill="#b9edff" />
    </svg>
  );
}

function PressureMap({ metrics }) {
  const pressure = clamp((metrics.q || 0) / 1200, 0.25, 1);
  return (
    <div className="ac-pressure-map">
      <svg viewBox="0 0 300 150" role="img" aria-label="压力分布预览">
        <defs>
          <radialGradient id="ac-p-front" cx="42%" cy="50%" r="48%">
            <stop offset="0" stopColor="#ff335c" stopOpacity={0.95 * pressure} />
            <stop offset=".35" stopColor="#ffb12d" stopOpacity={0.8 * pressure} />
            <stop offset=".7" stopColor="#2dffcb" stopOpacity={0.35 * pressure} />
            <stop offset="1" stopColor="#146dff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ac-p-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#1a42ff" stopOpacity=".25" />
            <stop offset=".45" stopColor="#00e7ff" stopOpacity=".55" />
            <stop offset="1" stopColor="#ff3866" stopOpacity=".04" />
          </linearGradient>
          <filter id="ac-p-blur"><feGaussianBlur stdDeviation="14" /></filter>
        </defs>
        <rect width="300" height="150" fill="#07111a" />
        <ellipse cx="150" cy="76" rx="130" ry="58" fill="url(#ac-p-front)" filter="url(#ac-p-blur)" />
        <path d="M58 83c8-18 28-30 54-32l22-12c12-7 25-6 38 0l26 18c16 3 27 10 34 22-12 15-33 23-62 24h-58c-26 0-43-6-54-20Z" fill="url(#ac-p-side)" stroke="#78eaff" strokeOpacity=".2" />
        <path d="M95 57h24v6H95zM183 50h20v8h-20zM104 96h84" stroke="#aff4ff" strokeOpacity=".35" strokeWidth="1.2" />
        <rect x="14" y="14" width="8" height="122" rx="3" fill="url(#ac-p-legend)" />
        <defs>
          <linearGradient id="ac-p-legend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff335c" />
            <stop offset=".3" stopColor="#ffb12d" />
            <stop offset=".55" stopColor="#35ffd0" />
            <stop offset="1" stopColor="#155cff" />
          </linearGradient>
        </defs>
        <text x="29" y="21" fill="#ffb4c0" fontSize="8">高</text>
        <text x="29" y="143" fill="#8eb9ff" fontSize="8">低</text>
      </svg>
      <div className="ac-pressure-axis"><span>压力分布 / 车身表面</span><span>预览</span></div>
    </div>
  );
}

function ResidualChart({ points, iterations, progress }) {
  const width = 760;
  const height = 126;
  const pad = { left: 34, right: 12, top: 8, bottom: 20 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const maxLog = 1;
  const minLog = -5;
  const x = (iteration) => pad.left + (iteration / Math.max(1, iterations)) * plotW;
  const y = (value) => pad.top + ((maxLog - Math.log10(Math.max(1e-7, value))) / (maxLog - minLog)) * plotH;
  const series = [
    { id: 0, color: '#4e9dff', label: 'Continuity' },
    { id: 1, color: '#ffad4d', label: 'Ux' },
    { id: 2, color: '#59e39a', label: 'Uy' },
    { id: 3, color: '#a77dff', label: 'Uz' },
    { id: 4, color: '#ff77c8', label: 'ω' },
  ];
  const ticks = [1e1, 1e-1, 1e-3, 1e-5];
  return (
    <svg className="ac-chart-svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="求解残差曲线">
      {ticks.map((tick) => (
        <g key={tick}>
          <line x1={pad.left} x2={width - pad.right} y1={y(tick)} y2={y(tick)} stroke="#1d3649" strokeWidth=".8" strokeDasharray="2 4" />
          <text x={pad.left - 7} y={y(tick) + 3} fill="#67849a" fontSize="8" textAnchor="end">{tick === 1e1 ? '1e+01' : `1e${tick === 1e-1 ? '-01' : tick === 1e-3 ? '-03' : '-05'}`}</text>
        </g>
      ))}
      {[0, 1000, 2000, 3000, 4000].map((tick) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1={pad.top} y2={height - pad.bottom} stroke="#122b3c" strokeWidth=".7" />
          <text x={x(tick)} y={height - 6} fill="#5f7d91" fontSize="8" textAnchor="middle">{tick === 0 ? '0' : tick.toLocaleString('en-US')}</text>
        </g>
      ))}
      <text x={x(iterations)} y={height - 6} fill="#5f7d91" fontSize="8" textAnchor="middle">{iterations.toLocaleString('en-US')}</text>
      {series.map((entry) => {
        const path = points.map((point, index) => `${index === 0 ? 'M' : 'L'}${x(point.iteration).toFixed(2)},${y(point.values[entry.id]).toFixed(2)}`).join(' ');
        return <path key={entry.id} d={path} fill="none" stroke={entry.color} strokeWidth="1.35" opacity=".9" />;
      })}
      <line x1={x(progress * iterations)} x2={x(progress * iterations)} y1={pad.top} y2={height - pad.bottom} stroke="#75eaff" strokeWidth="1" strokeDasharray="3 3" opacity=".7" />
      <rect x={pad.left} y={pad.top} width={plotW} height={plotH} fill="none" stroke="#1e3a4e" strokeWidth=".8" />
    </svg>
  );
}

function Modal({ title, subtitle, onClose, children, wide = false }) {
  return (
    <div className="ac-modal-wrap" role="dialog" aria-modal="true" aria-label={title}>
      <div className={`ac-modal${wide ? ' is-wide' : ''}`}>
        <div className="ac-modal-head">
          <div><h3>{title}</h3>{subtitle ? <p>{subtitle}</p> : null}</div>
          <button type="button" className="ac-icon-btn" onClick={onClose} aria-label="关闭"><Icon name="close" size={17} /></button>
        </div>
        <div className="ac-modal-body">{children}</div>
      </div>
    </div>
  );
}

export function buildComponents(ctx) {
  const { useEffect, useMemo, useRef, useState, useCallback } = React;
  const t = ctx.locale.bind(NS);

  function useOpen() {
    const [open, setOpen] = useState(shared.open);
    useEffect(() => {
      const off = subscribeOpen(() => setOpen(shared.open));
      return () => {
        if (typeof off === 'function') off();
      };
    }, []);
    return open;
  }

  function useTranslate() {
    const [, setRevision] = useState(0);
    useEffect(() => {
      const off = ctx.locale.subscribe(() => setRevision((value) => value + 1));
      return () => {
        if (typeof off === 'function') off();
      };
    }, []);
    return t;
  }

  function Launcher() {
    const tt = useTranslate();
    const open = useOpen();
    return (
      <div className="ac-dock-wrap">
        <style>{DOCK_CSS}</style>
        <div className="ac-dock">
          <span className="ac-dock-mark"><Logo size={29} /></span>
          <div className="ac-dock-copy">
            <div className="ac-dock-title">{tt('launcher.title')} <em>CFD</em></div>
            <div className="ac-dock-desc">{tt('launcher.desc')}</div>
          </div>
          <div className="ac-dock-meta">
            <span className="ac-dock-stat"><small>{tt('launcher.wind')}</small><strong>40 <em>m/s</em></strong></span>
            <span className="ac-dock-stat"><small>{tt('launcher.article')}</small><strong>Car_Body.STL</strong></span>
          </div>
          <span className="ac-dock-live"><i />{tt('launcher.live')}</span>
          <button type="button" className="ac-dock-open" onClick={() => setLabOpen(true)} aria-label={tt('launcher.open')}>
            {open ? '返回工作台' : tt('launcher.open')} <span>↗</span>
          </button>
        </div>
      </div>
    );
  }

  function App() {
    const [projectName, setProjectName] = useState('AeroLab_Demo');
    const [spec, setSpec] = useState({ ...DEFAULT_SPEC });
    const [geometry, setGeometry] = useState({ ...DEMO_GEOMETRY });
    const [viz, setViz] = useState({ ...DEFAULT_VIZ });
    const [mesh, setMesh] = useState({
      status: 'complete',
      progress: 1,
      ready: true,
      cells: meshCellCount(DEFAULT_SPEC, DEMO_GEOMETRY),
      quality: meshQuality(DEFAULT_SPEC),
    });
    const [solver, setSolver] = useState(() => makeInitialSolver(DEFAULT_SPEC, DEMO_GEOMETRY));
    const [imported, setImported] = useState(null);
    const [modelName, setModelName] = useState(DEMO_GEOMETRY.name);
    const [busyImport, setBusyImport] = useState(false);
    const [activeNode, setActiveNode] = useState('car');
    const [expanded, setExpanded] = useState({ geometry: true, boundaries: true, mesh: true, solver: true });
    const [menu, setMenu] = useState(null);
    const [modal, setModal] = useState(null);
    const [toast, setToast] = useState(null);
    const [view, setView] = useState('iso');
    const [dragOver, setDragOver] = useState(false);
    const [sceneReady, setSceneReady] = useState(false);
    const canvasRef = useRef(null);
    const stageRef = useRef(null);
    const sceneRef = useRef(null);
    const fileRef = useRef(null);
    const projectRef = useRef(null);

    const metrics = useMemo(() => computeResults(spec, geometry), [spec, geometry]);
    const residuals = solver.history || [];
    const selectedMode = MODES.find((entry) => entry.id === viz.mode) || MODES[0];

    const notify = useCallback((message, tone = 'info') => {
      setToast({ message, tone, id: Date.now() });
    }, []);

    useEffect(() => {
      if (!toast) return undefined;
      const timer = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(timer);
    }, [toast]);

    useEffect(() => {
      if (!canvasRef.current || !stageRef.current) return undefined;
      const scene = createCfdScene({
        canvas: canvasRef.current,
        container: stageRef.current,
        initialViz: viz,
        onReady: () => setSceneReady(true),
        onError: () => notify('WebGL 初始化失败，请检查显卡驱动。', 'error'),
      });
      sceneRef.current = scene;
      if (scene) {
        scene.setViz(viz);
        scene.setView(view);
      }
      return () => {
        sceneRef.current = null;
        scene?.dispose();
      };
      // The scene is created once per open workspace.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      sceneRef.current?.setViz(viz);
    }, [viz]);

    useEffect(() => {
      sceneRef.current?.setView(view);
    }, [view]);

    useEffect(() => {
      if (solver.status !== 'running') return undefined;
      const timer = setInterval(() => {
        setSolver((previous) => {
          const target = spec.iterations;
          const step = Math.max(12, Math.round(target / 330));
          const nextIteration = Math.min(target, previous.iteration + step);
          const progress = nextIteration / Math.max(1, target);
          const history = residualSeries(nextIteration, 76);
          const elapsedSeconds = previous.elapsedSeconds + 0.34;
          const logs = previous.logs.slice(-120);
          if (nextIteration >= target) {
            logs.push({ time: formatDuration(elapsedSeconds), text: 'Solver reached the preview iteration target. Results refreshed.' });
            return {
              ...previous,
              status: 'complete',
              iteration: target,
              progress: 1,
              elapsedSeconds,
              etaSeconds: 0,
              history,
              logs,
            };
          }
          if (nextIteration - previous.iteration >= Math.max(1, Math.round(target / 20))) {
            logs.push({
              time: formatDuration(elapsedSeconds),
              text: `Iteration ${nextIteration.toLocaleString('en-US')} · continuity ${residualAt(nextIteration, 0).toExponential(2)} · Ux ${residualAt(nextIteration, 1).toExponential(2)}`,
            });
          }
          return {
            ...previous,
            status: 'running',
            iteration: nextIteration,
            progress,
            elapsedSeconds,
            etaSeconds: Math.max(1, Math.round((1 - progress) * 128)),
            history,
            logs,
          };
        });
      }, 120);
      return () => clearInterval(timer);
    }, [solver.status, spec.iterations]);

    useEffect(() => {
      if (mesh.status !== 'generating') return undefined;
      const timer = setInterval(() => {
        setMesh((previous) => {
          const progress = Math.min(1, previous.progress + 0.075 + Math.random() * 0.025);
          if (progress >= 1) {
            return {
              status: 'complete',
              progress: 1,
              ready: true,
              cells: meshCellCount(spec, geometry),
              quality: meshQuality(spec),
            };
          }
          return { ...previous, progress };
        });
      }, 100);
      return () => clearInterval(timer);
    }, [mesh.status, spec, geometry]);

    useEffect(() => {
      if (mesh.status === 'complete') {
        if (solver.status === 'idle') notify(`网格生成完成 · ${meshCellCount(spec, geometry).toLocaleString('en-US')} cells`, 'success');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mesh.status]);

    useEffect(() => {
      const handleKey = (event) => {
        if (event.key !== 'Escape') return;
        if (modal) setModal(null);
        else setLabOpen(false);
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }, [modal]);

    const updateSpec = (key, value) => setSpec((previous) => ({ ...previous, [key]: value }));
    const updateViz = (key, value) => setViz((previous) => ({ ...previous, [key]: value }));

    const newProject = () => {
      setProjectName('Untitled_Project');
      setSpec({ ...DEFAULT_SPEC });
      setGeometry({ ...DEMO_GEOMETRY });
      setViz({ ...DEFAULT_VIZ });
      setImported(null);
      setModelName(DEMO_GEOMETRY.name);
      setMesh({ status: 'stale', progress: 0, ready: false, cells: 0, quality: '—' });
      setSolver({ ...makeInitialSolver(DEFAULT_SPEC, DEMO_GEOMETRY), status: 'idle', progress: 0, iteration: 0, elapsedSeconds: 0, etaSeconds: 0, history: [] });
      setView('iso');
      sceneRef.current?.setDemoVehicle();
      notify('已新建空白工程，请生成网格。', 'info');
    };

    const saveProject = () => {
      const data = buildProject({ name: projectName, spec, viz, geometry, importedName: imported ? modelName : '', mesh, solver });
      downloadFile(`${projectName || 'aerolab-project'}.json`, JSON.stringify(data, null, 2), 'application/json;charset=utf-8');
      notify('工程 JSON 已保存。', 'success');
    };

    const openProjectFile = async (file) => {
      if (!file) return;
      try {
        const parsed = JSON.parse(await file.text());
        if (parsed?.schema !== 'aerolab-cfd-project') throw new Error('不是 AeroLab CFD 工程文件。');
        const nextSpec = { ...DEFAULT_SPEC, ...(parsed.spec || {}) };
        const nextViz = { ...DEFAULT_VIZ, ...(parsed.viz || {}) };
        const nextGeometry = { ...DEMO_GEOMETRY, ...(parsed.geometry || {}) };
        setProjectName(parsed.name || file.name.replace(/\.[^.]+$/, ''));
        setSpec(nextSpec);
        setViz(nextViz);
        setGeometry(nextGeometry);
        setImported(null);
        setModelName(nextGeometry.name || DEMO_GEOMETRY.name);
        setMesh({
          status: parsed.mesh?.ready ? 'complete' : 'stale',
          progress: parsed.mesh?.ready ? 1 : 0,
          ready: Boolean(parsed.mesh?.ready),
          cells: parsed.mesh?.cells || 0,
          quality: parsed.mesh?.quality || '—',
        });
        const restored = makeInitialSolver(nextSpec, nextGeometry);
        setSolver({
          ...restored,
          status: 'paused',
          progress: parsed.solver?.progress ?? 0,
          iteration: parsed.solver?.iteration ?? 0,
          elapsedSeconds: parsed.solver?.elapsedSeconds ?? 0,
          history: residualSeries(parsed.solver?.iteration ?? 0, 76),
        });
        setView('iso');
        sceneRef.current?.setDemoVehicle();
        sceneRef.current?.setViz(nextViz);
        sceneRef.current?.setView('iso');
        notify(`工程已打开：${parsed.name || file.name}`, 'success');
      } catch (error) {
        notify(error?.message || '工程文件解析失败。', 'error');
      }
    };

    const exportReport = () => {
      const lines = [
        `# ${projectName} · AeroLab CFD 预览报告`,
        '',
        `生成时间：${new Date().toLocaleString('zh-CN')}`,
        '',
        '## 计算条件',
        `- 入口速度：${spec.inletVelocity} m/s`,
        `- 出口压力：${spec.outletPressure} Pa`,
        `- 空气密度：${spec.density} kg/m³`,
        `- 温度：${spec.temperature} K`,
        `- 湍流模型：${TURBULENCE_MODELS.find((entry) => entry.id === spec.turbulence)?.name || spec.turbulence}`,
        `- 网格：${mesh.cells.toLocaleString('en-US')} cells · ${mesh.quality} · ${MESH_TYPES.find((entry) => entry.id === spec.meshType)?.name}`,
        '',
        '## 结果',
        `- 阻力：${fmtForce(metrics.drag)}`,
        `- 下压力：${fmtForce(metrics.downforce)}`,
        `- Cd：${metrics.cd.toFixed(3)}`,
        `- Cl：${metrics.cl.toFixed(3)}`,
        `- 雷诺数：${metrics.reynolds.toExponential(3)}`,
        '',
        '## 重要说明',
        '本报告由 AeroLab CFD 的 reduced-order 交互预览模型生成，不是 OpenFOAM 求解结果，也不构成工程认证。',
        '真实 CFD 需要专用网格、边界条件、求解器设置与网格无关性验证。',
      ];
      downloadFile(`${projectName || 'aerolab'}-report.md`, lines.join('\n'), 'text/markdown;charset=utf-8');
      notify('Markdown 报告已导出。', 'success');
    };

    const generateMesh = () => {
      if (mesh.status === 'generating') return;
      setMesh({ status: 'generating', progress: 0, ready: false, cells: 0, quality: '—' });
      setSolver((previous) => ({ ...previous, status: 'idle', progress: 0, iteration: 0, history: [] }));
      notify('正在生成风洞域与表面网格…', 'info');
    };

    const startSolver = () => {
      if (!mesh.ready) {
        notify('请先生成网格，再开始计算。', 'warning');
        return;
      }
      setSolver((previous) => {
        if (previous.status === 'complete') {
          return {
            ...previous,
            status: 'running',
            progress: 0,
            iteration: 0,
            elapsedSeconds: 0,
            etaSeconds: 128,
            history: [],
            logs: [{ time: '00:00:00', text: 'New preview solve started.' }],
          };
        }
        return {
          ...previous,
          status: 'running',
          logs: [...previous.logs, { time: formatDuration(previous.elapsedSeconds), text: 'Solve resumed by user.' }].slice(-120),
        };
      });
    };

    const pauseSolver = () => {
      setSolver((previous) => previous.status === 'running'
        ? { ...previous, status: 'paused', logs: [...previous.logs, { time: formatDuration(previous.elapsedSeconds), text: 'Solve paused.' }].slice(-120) }
        : previous);
    };

    const stopSolver = () => {
      setSolver((previous) => ({
        ...previous,
        status: previous.status === 'idle' ? 'idle' : 'stopped',
        logs: [...previous.logs, { time: formatDuration(previous.elapsedSeconds), text: 'Solve stopped by user.' }].slice(-120),
      }));
    };

    const importFile = async (file) => {
      if (!file) return;
      if (file.size > MAX_IMPORT_BYTES) {
        notify(`文件超过 ${Math.round(MAX_IMPORT_BYTES / 1024 / 1024)} MB 限制。`, 'error');
        return;
      }
      const format = formatFromFileName(file.name);
      if (!format) {
        notify('仅支持 STL、OBJ、GLB 或内嵌 glTF。', 'error');
        return;
      }
      setBusyImport(true);
      try {
        const data = format === 'stl' || format === 'glb' ? await file.arrayBuffer() : await file.text();
        const next = await loadImportedVehicle({ format, data });
        const size = next.stats?.size || [4.25, 1.2, 1.8];
        const length = 4.56;
        const width = clamp((size[2] / Math.max(0.001, size[0])) * length, 0.5, 8);
        const height = clamp((size[1] / Math.max(0.001, size[0])) * length, 0.2, 5);
        const nextGeometry = { ...geometry, name: file.name, length, width, height };
        setGeometry(nextGeometry);
        setModelName(file.name);
        setImported(next);
        setMesh({ status: 'stale', progress: 0, ready: false, cells: 0, quality: '—' });
        setSolver({ ...makeInitialSolver(spec, nextGeometry), status: 'idle', progress: 0, iteration: 0, elapsedSeconds: 0, etaSeconds: 0, history: [] });
        sceneRef.current?.setVehicle(next.group);
        notify(`模型已导入：${file.name} · ${Math.round(next.stats?.triangles || 0).toLocaleString('en-US')} tris`, 'success');
      } catch (error) {
        const messages = {
          INVALID_STL: 'STL 解析失败，请检查文件是否完整。',
          INVALID_OBJ: 'OBJ 解析失败，请检查文件内容。',
          INVALID_GLTF: 'glTF/GLB 解析失败，或资源不是内嵌的。',
          COMPRESSED_ASSET: '该 glTF 使用了 Draco/Meshopt/KTX2 压缩，当前预览不支持。',
          EXTERNAL_RESOURCES: 'glTF 引用了外部 .bin/贴图，请改用 GLB 或内嵌资源。',
          NO_MESHES: '文件中没有可渲染的三角网格。',
        };
        notify(messages[error?.code] || error?.message || '模型导入失败。', 'error');
      } finally {
        setBusyImport(false);
      }
    };

    const onDrop = (event) => {
      event.preventDefault();
      setDragOver(false);
      const file = event.dataTransfer?.files?.[0];
      if (file) importFile(file);
    };

    const solverLabel = {
      idle: '等待计算',
      running: '求解中',
      paused: '已暂停',
      complete: '计算完成',
      stopped: '已停止',
    }[solver.status] || '就绪';

    const statusClass = solver.status === 'complete' ? 'is-success' : solver.status === 'running' ? 'is-running' : solver.status === 'paused' ? 'is-paused' : 'is-idle';
    const modeLabel = selectedMode.label;
    const colorbar = viz.mode === 'pressure'
      ? { min: '-500 Pa', mid: '0', max: '+300 Pa', gradient: 'linear-gradient(90deg,#1544ff,#00c8ff,#39ffbf,#ffe84a,#ff3b58)' }
      : viz.mode === 'vorticity'
        ? { min: '低', mid: '中', max: '高', gradient: 'linear-gradient(90deg,#2b4dff,#00e5ff,#b8ff35,#ff7a28,#ff334f)' }
        : { min: '0', mid: '20', max: '40 m/s', gradient: 'linear-gradient(90deg,#163dff,#00c8ff,#00f2c8,#d9ff3d,#ff8a26,#ff3158)' };

    const menuItems = [
      { id: 'project', label: '项目', items: [
        { label: '新建工程', icon: 'new', action: newProject },
        { label: '打开工程…', icon: 'open', action: () => projectRef.current?.click() },
        { label: '保存工程', icon: 'save', action: saveProject },
      ] },
      { id: 'geometry', label: '几何', items: [
        { label: '导入模型…', icon: 'import', action: () => fileRef.current?.click() },
        { label: '重建风洞域', icon: 'tunnel', action: () => notify('风洞域已按当前包围盒重新计算。', 'success') },
        { label: '检查网格质量', icon: 'mesh', action: () => notify(`网格质量：${mesh.quality} · ${mesh.cells.toLocaleString('en-US')} cells`, 'info') },
      ] },
      { id: 'mesh', label: '网格', items: [
        { label: '生成网格', icon: 'mesh', action: generateMesh },
        { label: '网格设置', icon: 'settings', action: () => notify('网格设置位于左侧仿真参数与项目树。', 'info') },
      ] },
      { id: 'solve', label: '求解', items: [
        { label: '开始计算', icon: 'play', action: startSolver },
        { label: '暂停', icon: 'pause', action: pauseSolver },
        { label: '停止', icon: 'stop', action: stopSolver },
        { label: '求解日志', icon: 'log', action: () => setModal({ type: 'logs' }) },
      ] },
      { id: 'post', label: '后处理', items: [
        { label: '结果分析', icon: 'analysis', action: () => setModal({ type: 'analysis' }) },
        { label: '导出报告', icon: 'report', action: exportReport },
      ] },
      { id: 'help', label: '帮助', items: [
        { label: '快速开始', icon: 'help', action: () => setModal({ type: 'help' }) },
        { label: '关于预览模型', icon: 'info', action: () => setModal({ type: 'about' }) },
      ] },
    ];

    const MenuDropdown = ({ entry }) => (
      <div className="ac-menu-pop" onMouseLeave={() => setMenu(null)}>
        {entry.items.map((item) => (
          <button key={item.label} type="button" onClick={() => { setMenu(null); item.action(); }}>
            <Icon name={item.icon} size={14} />{item.label}
          </button>
        ))}
      </div>
    );

    const modalView = modal ? (() => {
      if (modal.type === 'analysis') {
        return (
          <Modal title="结果分析" subtitle="Preview results · 不是 OpenFOAM 求解结果" onClose={() => setModal(null)} wide>
            <div className="ac-analysis-grid">
              <div className="ac-analysis-card"><span>阻力 Fd</span><strong>{fmtForce(metrics.drag)}</strong><small>Cd {metrics.cd.toFixed(3)} · A {metrics.area.toFixed(3)} m²</small></div>
              <div className="ac-analysis-card"><span>下压力</span><strong>{fmtForce(metrics.downforce)}</strong><small>Cl {metrics.cl.toFixed(3)} · q {metrics.q.toFixed(0)} Pa</small></div>
              <div className="ac-analysis-card"><span>阻力功率</span><strong>{(metrics.power / 1000).toFixed(1)} kW</strong><small>{spec.inletVelocity} m/s</small></div>
              <div className="ac-analysis-card"><span>雷诺数</span><strong>{metrics.reynolds.toExponential(2)}</strong><small>Lref {geometry.length.toFixed(2)} m</small></div>
            </div>
            <div className="ac-analysis-table">
              <div><span>网格单元</span><b>{mesh.cells.toLocaleString('en-US')}</b></div>
              <div><span>网格质量</span><b>{mesh.quality}</b></div>
              <div><span>湍流模型</span><b>{TURBULENCE_MODELS.find((entry) => entry.id === spec.turbulence)?.name}</b></div>
              <div><span>求解状态</span><b>{solverLabel}</b></div>
              <div><span>当前迭代</span><b>{solver.iteration.toLocaleString('en-US')} / {spec.iterations.toLocaleString('en-US')}</b></div>
            </div>
            <p className="ac-caveat">预览模型使用工程级阻力关系式与简化流场，仅用于交互展示。真实 CFD 必须设置参考面积、坐标系、地面与车轮边界，并做网格无关性验证。</p>
            <div className="ac-modal-actions"><button type="button" className="ac-btn is-primary" onClick={exportReport}><Icon name="download" size={14} />导出报告</button><button type="button" className="ac-btn" onClick={() => setModal(null)}>关闭</button></div>
          </Modal>
        );
      }
      if (modal.type === 'view') {
        return (
          <Modal title="视图设置" subtitle="相机与场景显示" onClose={() => setModal(null)}>
            <SectionTitle>相机</SectionTitle>
            <div className="ac-view-buttons">
              {[['iso', 'ISO'], ['front', '前视'], ['side', '侧视'], ['top', '俯视']].map(([id, label]) => (
                <button key={id} type="button" className={`ac-btn${view === id ? ' is-primary' : ''}`} onClick={() => setView(id)}>{label}</button>
              ))}
            </div>
            <SectionTitle>显示</SectionTitle>
            <div className="ac-toggle-grid">
              <Toggle label="风洞" checked={viz.showTunnel} onChange={(value) => updateViz('showTunnel', value)} />
              <Toggle label="地面" checked={viz.showGround} onChange={(value) => updateViz('showGround', value)} />
              <Toggle label="网格线" checked={viz.showGrid} onChange={(value) => updateViz('showGrid', value)} />
              <Toggle label="车身" checked={viz.showCar} onChange={(value) => updateViz('showCar', value)} />
            </div>
            <p className="ac-caveat">鼠标拖拽旋转，滚轮缩放。所有视图均为实时预览。</p>
          </Modal>
        );
      }
      if (modal.type === 'logs') {
        return (
          <Modal title="求解日志" subtitle="最新 120 行 · 预览求解器" onClose={() => setModal(null)} wide>
            <div className="ac-log-list">{(solver.logs || []).slice(-120).map((entry, index) => <div key={`${entry.time}-${index}`}><time>{entry.time}</time><span>{entry.text}</span></div>)}</div>
          </Modal>
        );
      }
      if (modal.type === 'about') {
        return (
          <Modal title="AeroLab CFD" subtitle="Version 1.0.0 · DSH Web UI plugin" onClose={() => setModal(null)}>
            <div className="ac-about-hero"><Logo size={58} /><div><h2>AeroLab CFD</h2><p>交互式虚拟风洞 / CFD 工作台</p></div></div>
            <p className="ac-about-copy">本项目把 MD 方案中的项目树、边界条件、网格、求解、后处理与残差诊断，做成 DSH Web UI 里的可视化插件。它不启动本地 OpenFOAM 进程，也不宣称结果是经验证的 CFD。</p>
            <div className="ac-about-tags"><span>STL / OBJ / GLB</span><span>Streamlines</span><span>Velocity / Pressure</span><span>Vorticity</span><span>CSV / Markdown report</span></div>
          </Modal>
        );
      }
      return (
        <Modal title="快速开始" subtitle="从模型到预览结果" onClose={() => setModal(null)} wide>
          <div className="ac-steps">
            <div><b>01</b><span>导入模型</span><p>使用 STL/OBJ/GLB。插件会检查三角网格并归一化显示。</p></div>
            <div><b>02</b><span>生成网格</span><p>设置入口风速、空气参数和网格精度，然后生成风洞域与表面网格。</p></div>
            <div><b>03</b><span>开始计算</span><p>预览求解器推进迭代，残差曲线和状态栏实时更新。</p></div>
            <div><b>04</b><span>查看结果</span><p>切换流线、速度云图、压力云图、涡量图；查看阻力/下压力并导出报告。</p></div>
          </div>
          <p className="ac-caveat">真实 CFD 使用 OpenFOAM 等求解器需要外部进程与网格文件。本插件定位为交互式可视化/流程演示，不替代工程求解。</p>
        </Modal>
      );
    })() : null;

    return (
      <div className="ac-root" onMouseDown={(event) => { if (event.target === event.currentTarget) setLabOpen(false); }}>
        <style>{APP_CSS}</style>
        <div className="ac-shell">
          <header className="ac-titlebar">
            <div className="ac-brand">
              <Logo size={30} />
              <div className="ac-brand-copy"><strong>AeroLab CFD</strong><span>PREVIEW WORKSPACE</span></div>
            </div>
            <nav className="ac-menu">
              {menuItems.map((entry) => (
                <div className="ac-menu-item" key={entry.id} onMouseLeave={() => setMenu(null)}>
                  <button type="button" className={menu === entry.id ? 'is-open' : ''} onClick={() => setMenu(menu === entry.id ? null : entry.id)} onMouseEnter={() => setMenu(entry.id)}>
                    {entry.label}<Icon name="chevron" size={12} />
                  </button>
                  {menu === entry.id ? <MenuDropdown entry={entry} /> : null}
                </div>
              ))}
            </nav>
            <div className="ac-title-right"><span className="ac-project-name">{projectName}</span><span className="ac-version">v1.0.0</span>
              <div className="ac-window-buttons"><button type="button" className="ac-icon-btn" aria-label="最小化"><span>—</span></button><button type="button" className="ac-icon-btn" aria-label="最大化"><span>▢</span></button><button type="button" className="ac-icon-btn is-close" onClick={() => setLabOpen(false)} aria-label="关闭"><Icon name="close" size={16} /></button></div>
            </div>
          </header>

          <div className="ac-toolbar">
            <div className="ac-tool-group">
              <ToolButton icon="new" label="新建" onClick={newProject} />
              <ToolButton icon="open" label="打开" onClick={() => projectRef.current?.click()} />
              <ToolButton icon="save" label="保存" onClick={saveProject} />
            </div>
            <div className="ac-tool-sep" />
            <div className="ac-tool-group">
              <ToolButton icon="import" label="导入模型" onClick={() => fileRef.current?.click()} />
              <ToolButton icon="mesh" label="生成网格" onClick={generateMesh} disabled={mesh.status === 'generating'} />
            </div>
            <div className="ac-tool-sep" />
            <div className="ac-tool-group">
              <button type="button" className="ac-run-btn" onClick={startSolver}><Icon name="play" size={14} />开始计算</button>
              <ToolButton icon="pause" label="暂停" onClick={pauseSolver} disabled={solver.status !== 'running'} />
              <ToolButton icon="stop" label="停止" onClick={stopSolver} disabled={solver.status === 'idle'} />
            </div>
            <div className="ac-tool-sep" />
            <div className="ac-tool-group">
              <ToolButton icon="analysis" label="结果分析" onClick={() => setModal({ type: 'analysis' })} />
              <ToolButton icon="report" label="导出报告" onClick={exportReport} />
              <ToolButton icon="settings" label="视图设置" onClick={() => setModal({ type: 'view' })} />
            </div>
            <div className="ac-toolbar-right"><span className={`ac-status-pill ${statusClass}`}><i />{solverLabel}</span><button type="button" className="ac-icon-btn" onClick={() => setModal({ type: 'logs' })} title="求解日志"><Icon name="log" size={16} /></button></div>
          </div>

          <div className="ac-main">
            <aside className="ac-left">
              <section className="ac-panel ac-tree-panel">
                <SectionTitle aside={<span className="ac-panel-count">PROJECT</span>}>项目树</SectionTitle>
                <div className="ac-tree">
                  <TreeNode active={activeNode} id="car" icon="car" label={modelName} checked={viz.showCar} onCheck={() => updateViz('showCar', !viz.showCar)} onSelect={setActiveNode} badge="STL" />
                  <TreeNode active={activeNode} id="tunnel" icon="tunnel" label="WindTunnel" checked={viz.showTunnel} onCheck={() => updateViz('showTunnel', !viz.showTunnel)} onSelect={setActiveNode} />
                  <TreeNode active={activeNode} id="ground" icon="ground" label="Ground_Plane" checked={viz.showGround} onCheck={() => updateViz('showGround', !viz.showGround)} onSelect={setActiveNode} />
                  <TreeGroup title="边界条件" icon="wind" open={expanded.boundaries} onToggle={() => setExpanded((p) => ({ ...p, boundaries: !p.boundaries }))}>
                    <TreeLeaf active={activeNode} id="inlet" icon="inlet" label="入口 (Inlet)" onSelect={setActiveNode} value={`${spec.inletVelocity} m/s`} />
                    <TreeLeaf active={activeNode} id="outlet" icon="outlet" label="出口 (Outlet)" onSelect={setActiveNode} value={`${spec.outletPressure} Pa`} />
                    <TreeLeaf active={activeNode} id="wall" icon="wall" label="壁面 (Wall)" onSelect={setActiveNode} value="no-slip" />
                    <TreeLeaf active={activeNode} id="wheel" icon="car" label="车轮 (Wheels)" onSelect={setActiveNode} value={spec.wheels === 'fixed' ? 'fixed' : 'rotating'} />
                  </TreeGroup>
                  <TreeGroup title="网格" icon="mesh" open={expanded.mesh} onToggle={() => setExpanded((p) => ({ ...p, mesh: !p.mesh }))}>
                    <TreeLeaf active={activeNode} id="mesh" icon="mesh" label="Surface_Mesh" onSelect={setActiveNode} value={mesh.ready ? `${(mesh.cells / 1e6).toFixed(2)}M` : '—'} />
                  </TreeGroup>
                  <TreeGroup title="求解任务" icon="solver" open={expanded.solver} onToggle={() => setExpanded((p) => ({ ...p, solver: !p.solver }))}>
                    <TreeLeaf active={activeNode} id="task" icon="solver" label="Steady RANS" onSelect={setActiveNode} value={solverLabel} />
                  </TreeGroup>
                </div>
              </section>

              <section className="ac-panel ac-settings-panel">
                <SectionTitle aside={<span className="ac-panel-count">BOUNDARY</span>}>仿真设置</SectionTitle>
                <div className="ac-fields">
                  <NumberField label="入口风速" value={spec.inletVelocity} unit="m/s" min={0} max={80} step={1} onChange={(value) => updateSpec('inletVelocity', value)} />
                  <div className="ac-preset-chips">{INLET_PRESETS.map((value) => <button key={value} type="button" className={spec.inletVelocity === value ? 'is-active' : ''} onClick={() => updateSpec('inletVelocity', value)}>{value}</button>)}<span>m/s</span></div>
                  <NumberField label="出口压力" value={spec.outletPressure} unit="Pa" min={-500} max={500} step={10} onChange={(value) => updateSpec('outletPressure', value)} />
                  <div className="ac-two-fields">
                    <NumberField label="空气密度" value={spec.density} unit="kg/m³" min={0.8} max={1.6} step={0.005} onChange={(value) => updateSpec('density', value)} />
                    <NumberField label="温度" value={spec.temperature} unit="K" min={220} max={340} step={0.1} onChange={(value) => updateSpec('temperature', value)} />
                  </div>
                  <SelectField label="湍流模型" value={spec.turbulence} options={TURBULENCE_MODELS} onChange={(value) => updateSpec('turbulence', value)} />
                  <div className="ac-two-fields">
                    <SelectField label="网格类型" value={spec.meshType} options={MESH_TYPES} onChange={(value) => updateSpec('meshType', value)} />
                    <SelectField label="网格精度" value={spec.meshLevel} options={MESH_LEVELS} onChange={(value) => updateSpec('meshLevel', value)} />
                  </div>
                  <div className="ac-two-fields">
                    <NumberField label="迭代步数" value={spec.iterations} unit="steps" min={500} max={10000} step={100} onChange={(value) => updateSpec('iterations', value)} />
                    <SelectField label="地面" value={spec.groundMode} options={[{ id: 'fixed', name: '固定' }, { id: 'moving', name: '移动地面' }]} onChange={(value) => updateSpec('groundMode', value)} />
                  </div>
                </div>
                <div className="ac-progress-card">
                  <div className="ac-progress-head"><span>计算进度</span><b>{(solver.progress * 100).toFixed(1)}%</b></div>
                  <div className="ac-progress-track"><i style={{ width: `${solver.progress * 100}%` }} /></div>
                  <div className="ac-progress-meta"><span>当前迭代 <strong>{solver.iteration.toLocaleString('en-US')}</strong> / {spec.iterations.toLocaleString('en-US')}</span><span>预计剩余 <strong>{formatDuration(solver.etaSeconds)}</strong></span></div>
                  <div className="ac-progress-actions">
                    <button type="button" className="ac-btn is-primary is-wide" onClick={startSolver}><Icon name="play" size={14} />开始计算</button>
                    <button type="button" className="ac-icon-btn" onClick={pauseSolver} title="暂停"><Icon name="pause" size={14} /></button>
                    <button type="button" className="ac-icon-btn" onClick={stopSolver} title="停止"><Icon name="stop" size={14} /></button>
                  </div>
                </div>
              </section>
            </aside>

            <main className="ac-center">
              <div
                className={`ac-viewport${dragOver ? ' is-dragging' : ''}`}
                ref={stageRef}
                onDragOver={(event) => { event.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
              >
                <canvas ref={canvasRef} className="ac-canvas" />
                <div className="ac-viewport-top">
                  <div className="ac-legend">
                    <div className="ac-legend-head"><span>{viz.mode === 'pressure' ? '压力 (Pa)' : viz.mode === 'vorticity' ? '涡量强度' : '速度 (m/s)'}</span><b>{modeLabel}</b></div>
                    <div className="ac-legend-bar" style={{ background: colorbar.gradient }} />
                    <div className="ac-legend-labels"><span>{colorbar.min}</span><span>{colorbar.min === '0' ? '10' : colorbar.mid}</span><span>{colorbar.min === '0' ? '20' : colorbar.max}</span><span>{colorbar.max}</span></div>
                  </div>
                  <div className="ac-viewport-axis"><AxisTriad /></div>
                </div>
                <div className="ac-viewport-tag">STEADY RANS · PREVIEW FIELD</div>
                <div className="ac-viewport-controls">
                  <span><i className="ac-dot is-blue" /> 入口</span><span><i className="ac-dot is-cyan" /> 流线</span><span><i className="ac-dot is-green" /> 尾流</span>
                  <span className="ac-view-hint">拖拽旋转 · 滚轮缩放</span>
                </div>
                {busyImport ? <div className="ac-import-overlay"><span className="ac-spinner" />正在解析模型…</div> : null}
                {!sceneReady && !busyImport ? <div className="ac-viewport-loading">正在校准风洞视窗…</div> : null}
              </div>
              <section className="ac-chart-panel">
                <div className="ac-chart-head"><div><strong>求解残差曲线</strong><span>残差 / 迭代次数</span></div><div className="ac-chart-legend"><span><i style={{ background: '#4e9dff' }} />Continuity</span><span><i style={{ background: '#ffad4d' }} />Ux</span><span><i style={{ background: '#59e39a' }} />Uy</span><span><i style={{ background: '#a77dff' }} />Uz</span><span><i style={{ background: '#ff77c8' }} />ω</span></div></div>
                <ResidualChart points={residuals} iterations={spec.iterations} progress={solver.progress} />
              </section>
            </main>

            <aside className="ac-right">
              <section className="ac-panel">
                <SectionTitle aside={<span className="ac-panel-count">VIEW</span>}>可视化选项</SectionTitle>
                <div className="ac-mode-grid">
                  {MODES.map((mode) => (
                    <button key={mode.id} type="button" className={`ac-mode${viz.mode === mode.id ? ' is-active' : ''}`} onClick={() => { updateViz('mode', mode.id); if (mode.id !== 'streamlines') updateViz('showSlice', true); }}>
                      <span className="ac-mode-icon"><Icon name={mode.icon} size={25} /></span>
                      <strong>{mode.label}</strong><small>{mode.sub}</small>
                    </button>
                  ))}
                </div>
              </section>

              <section className="ac-panel">
                <SectionTitle>显示设置</SectionTitle>
                <Slider label="流线密度" value={viz.density} min={0.2} max={2} step={0.1} display={viz.density.toFixed(1)} onChange={(value) => updateViz('density', value)} />
                <Slider label="透明度" value={viz.opacity} min={0.15} max={1} step={0.05} display={viz.opacity.toFixed(2)} onChange={(value) => updateViz('opacity', value)} />
                <div className="ac-inline-toggle"><Toggle label="显示切面" checked={viz.showSlice} onChange={(value) => updateViz('showSlice', value)} /><span className="ac-slice-readout">z = {(viz.slicePosition * 2.2).toFixed(2)} m</span></div>
                <Slider label="切面位置" value={viz.slicePosition} min={-1} max={1} step={0.05} display={`${(viz.slicePosition * 2.2).toFixed(2)} m`} onChange={(value) => updateViz('slicePosition', value)} />
              </section>

              <section className="ac-panel">
                <SectionTitle aside={<span className="ac-panel-count">FORCE</span>}>结果信息</SectionTitle>
                <div className="ac-result-grid">
                  <ResultCard label="空气阻力" value={fmtForce(metrics.drag)} sub="Drag" />
                  <ResultCard label="下压力" value={fmtForce(metrics.downforce)} sub="Downforce" accent />
                  <ResultCard label="阻力系数" value={metrics.cd.toFixed(2)} sub="Cd" />
                  <ResultCard label="升力系数" value={metrics.cl.toFixed(2)} sub="Cl" />
                </div>
              </section>

              <section className="ac-panel ac-pressure-panel">
                <SectionTitle aside={<span className="ac-panel-count">WALL</span>}>压力分布</SectionTitle>
                <PressureMap metrics={metrics} />
              </section>
            </aside>
          </div>

          <footer className="ac-statusbar">
            <div className={`ac-status-main ${statusClass}`}><i />{solverLabel}<span>·</span><span>预览模式</span></div>
            <div className="ac-status-item">耗时 <strong>{formatDuration(solver.elapsedSeconds)}</strong></div>
            <div className="ac-status-item">网格单元 <strong>{mesh.cells ? mesh.cells.toLocaleString('en-US') : '—'}</strong></div>
            <div className="ac-status-item">网格质量 <strong>{mesh.quality}</strong></div>
            <div className="ac-status-right"><button type="button" onClick={() => setModal({ type: 'logs' })}><Icon name="log" size={12} />求解日志</button><span>AeroLab CFD v1.0.0 · Preview</span></div>
          </footer>
        </div>

        {modalView}
        {toast ? <div className={`ac-toast is-${toast.tone}`}>{toast.message}</div> : null}
        <input ref={fileRef} type="file" accept={IMPORT_ACCEPT} className="ac-hidden-input" onChange={(event) => { const file = event.target.files?.[0]; event.target.value = ''; if (file) importFile(file); }} />
        <input ref={projectRef} type="file" accept=".json,application/json" className="ac-hidden-input" onChange={(event) => { const file = event.target.files?.[0]; event.target.value = ''; if (file) openProjectFile(file); }} />
      </div>
    );
  }

  function OverlayHost() {
    const open = useOpen();
    if (!open) return null;
    return <App />;
  }

  return { Launcher, OverlayHost };
}

function ToolButton({ icon, label, onClick, disabled = false }) {
  return <button type="button" className="ac-tool-btn" onClick={onClick} disabled={disabled}><Icon name={icon} size={15} /><span>{label}</span></button>;
}

function TreeNode({ active, id, icon, label, checked, onCheck, onSelect, badge }) {
  return (
    <div className={`ac-tree-row${active === id ? ' is-active' : ''}`} onClick={() => onSelect(id)}>
      <button type="button" className={`ac-check${checked ? ' is-checked' : ''}`} onClick={(event) => { event.stopPropagation(); onCheck(); }} aria-label={`显示 ${label}`}>{checked ? <Icon name="check" size={10} /> : null}</button>
      <span className="ac-tree-icon"><Icon name={icon} size={14} /></span>
      <span className="ac-tree-label">{label}</span>
      {badge ? <span className="ac-tree-badge">{badge}</span> : null}
    </div>
  );
}

function TreeLeaf({ active, id, icon, label, onSelect, value }) {
  return (
    <div className={`ac-tree-row is-leaf${active === id ? ' is-active' : ''}`} onClick={() => onSelect(id)}>
      <span className="ac-tree-check-space" />
      <span className="ac-tree-icon"><Icon name={icon} size={13} /></span>
      <span className="ac-tree-label">{label}</span>
      {value ? <span className="ac-tree-value">{value}</span> : null}
    </div>
  );
}

function TreeGroup({ title, icon, open, onToggle, children }) {
  return (
    <div className="ac-tree-group">
      <button type="button" className="ac-tree-group-row" onClick={onToggle}><Icon name="chevron" size={12} className={open ? '' : 'is-collapsed'} /><Icon name={icon} size={14} /><span>{title}</span></button>
      {open ? <div className="ac-tree-children">{children}</div> : null}
    </div>
  );
}

function ResultCard({ label, value, sub, accent }) {
  return (
    <div className={`ac-result${accent ? ' is-accent' : ''}`}>
      <span>{label}</span><strong>{value}</strong><small>{sub}</small>
    </div>
  );
}

const DOCK_CSS = `
.ac-dock-wrap { width: 100%; }
.ac-dock { display: flex; align-items: center; gap: 11px; min-height: 58px; padding: 8px 12px 8px 9px; border-radius: 9px; border: 1px solid rgba(73,147,196,.34); background: linear-gradient(110deg, rgba(7,17,28,.96), rgba(12,30,46,.9)); box-shadow: 0 8px 24px rgba(0,0,0,.18); color: #d6e8f5; }
.ac-dock-mark { display: flex; width: 36px; height: 36px; align-items: center; justify-content: center; border: 1px solid rgba(66,162,220,.35); border-radius: 9px; background: rgba(7,20,31,.8); flex: none; }
.ac-dock-copy { min-width: 142px; }
.ac-dock-title { font: 650 14px/1.2 "Bahnschrift","Segoe UI",sans-serif; letter-spacing: .05em; color: #edf9ff; }
.ac-dock-title em { margin-left: 4px; color: #6ce1ff; font: 500 8px/1 ui-monospace,monospace; letter-spacing: .12em; font-style: normal; }
.ac-dock-desc { margin-top: 4px; color: #6f8ba0; font: 500 9px/1.2 "Segoe UI",sans-serif; }
.ac-dock-meta { display: flex; gap: 16px; margin-left: auto; }
.ac-dock-stat { display: flex; flex-direction: column; gap: 4px; }
.ac-dock-stat small { color: #638096; font: 600 7px/1 ui-monospace,monospace; letter-spacing: .11em; text-transform: uppercase; }
.ac-dock-stat strong { color: #d8f2ff; font: 500 11px/1 ui-monospace,monospace; white-space: nowrap; }
.ac-dock-stat strong em { color: #6b8ba1; font-style: normal; font-size: 8px; }
.ac-dock-live { display: inline-flex; align-items: center; gap: 5px; color: #42e0b0; font: 600 8px/1 ui-monospace,monospace; letter-spacing: .08em; }
.ac-dock-live i { width: 5px; height: 5px; border-radius: 50%; background: #3ce2a8; box-shadow: 0 0 9px rgba(60,226,168,.8); }
.ac-dock-open { display: inline-flex; align-items: center; gap: 7px; min-height: 30px; padding: 0 10px; border-radius: 6px; border: 1px solid rgba(57,160,234,.5); background: rgba(26,91,145,.32); color: #c7f2ff; font: 600 9px/1 "Segoe UI",sans-serif; cursor: pointer; white-space: nowrap; }
.ac-dock-open:hover { background: rgba(38,128,190,.5); border-color: #55b9ef; }
.ac-dock-open span { font-size: 13px; color: #70e4ff; }
@media (max-width: 720px) { .ac-dock-meta { display: none; } .ac-dock-live { display: none; } .ac-dock-open { margin-left: auto; } }
`;

const APP_CSS = `
.ac-root { --ac-bg:#070c12; --ac-panel:#0b131c; --ac-panel2:#0f1924; --ac-panel3:#111f2c; --ac-line:#1a3041; --ac-line2:#28475e; --ac-text:#d8e9f4; --ac-muted:#7894a8; --ac-dim:#506b7e; --ac-blue:#2e8cff; --ac-cyan:#43d8ff; --ac-green:#3ce2ac; --ac-orange:#ffb54d; --ac-red:#ff526f;
  position: fixed; inset: 0; z-index: 80; display: flex; overflow: hidden; background: #05090d; color: var(--ac-text); font-family: "Microsoft YaHei","Segoe UI",sans-serif; font-size: 11px; pointer-events: auto; }
.ac-root * { box-sizing: border-box; }
.ac-shell { width: 100%; height: 100%; display: grid; grid-template-rows: 44px 52px minmax(0,1fr) 27px; background: linear-gradient(135deg,#071019,#050a10 70%); overflow: hidden; }
.ac-titlebar { display: flex; align-items: center; gap: 20px; padding: 0 11px; border-bottom: 1px solid var(--ac-line); background: linear-gradient(180deg,#0c1722,#08111a); }
.ac-brand { display: flex; align-items: center; gap: 8px; width: 218px; flex: none; }
.ac-brand-copy { display: flex; flex-direction: column; gap: 3px; }
.ac-brand-copy strong { color: #ebf9ff; font: 650 14px/1 "Bahnschrift","Segoe UI",sans-serif; letter-spacing: .045em; }
.ac-brand-copy span { color: #527c96; font: 600 6px/1 ui-monospace,monospace; letter-spacing: .16em; }
.ac-menu { display: flex; align-items: stretch; height: 100%; }
.ac-menu-item { position: relative; height: 100%; }
.ac-menu-item > button { display: flex; align-items: center; gap: 4px; height: 100%; padding: 0 10px; border: 0; background: transparent; color: #9db4c4; font: 500 11px/1 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-menu-item > button:hover, .ac-menu-item > button.is-open { color: #e6f8ff; background: rgba(45,131,193,.15); }
.ac-menu-pop { position: absolute; z-index: 20; top: 42px; left: 0; min-width: 152px; padding: 5px; border: 1px solid #26506a; border-radius: 5px; background: #0c1923; box-shadow: 0 12px 30px rgba(0,0,0,.4); }
.ac-menu-pop button { display: flex; width: 100%; align-items: center; gap: 8px; padding: 7px 8px; border: 0; border-radius: 3px; background: transparent; color: #b9d0df; text-align: left; font: 400 11px/1.2 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-menu-pop button:hover { background: #15334a; color: #ecfbff; }
.ac-title-right { display: flex; align-items: center; gap: 10px; margin-left: auto; min-width: 0; }
.ac-project-name { max-width: 190px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #8eacbf; font: 500 9px/1 ui-monospace,monospace; }
.ac-version { color: #4f758b; font: 500 8px/1 ui-monospace,monospace; }
.ac-window-buttons { display: flex; align-items: center; gap: 1px; }
.ac-icon-btn { display: inline-flex; align-items: center; justify-content: center; width: 27px; height: 27px; border: 0; border-radius: 3px; background: transparent; color: #7796a9; cursor: pointer; }
.ac-icon-btn:hover { background: #173145; color: #d9f5ff; }
.ac-icon-btn.is-close:hover { background: #5a2030; color: #ffd9df; }
.ac-window-buttons span { font: 500 12px/1 "Segoe UI",sans-serif; }
.ac-toolbar { display: flex; align-items: center; gap: 8px; padding: 0 12px; border-bottom: 1px solid var(--ac-line); background: #0a141e; overflow-x: auto; }
.ac-tool-group { display: flex; align-items: center; gap: 2px; flex: none; }
.ac-tool-sep { width: 1px; height: 24px; background: var(--ac-line); flex: none; margin: 0 4px; }
.ac-tool-btn { display: inline-flex; align-items: center; gap: 5px; height: 30px; padding: 0 7px; border: 1px solid transparent; border-radius: 3px; background: transparent; color: #9db8c9; font: 400 10px/1 "Microsoft YaHei",sans-serif; cursor: pointer; white-space: nowrap; }
.ac-tool-btn:hover { background: #132b3d; color: #e2f8ff; border-color: #21465d; }
.ac-tool-btn:disabled { opacity: .33; cursor: default; }
.ac-tool-btn svg { color: #79b6d7; }
.ac-run-btn { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 13px; border: 1px solid #2b86db; border-radius: 3px; background: linear-gradient(180deg,#257bd3,#1458a8); color: #f0fbff; font: 600 10px/1 "Microsoft YaHei",sans-serif; cursor: pointer; box-shadow: 0 0 14px rgba(35,128,220,.18); }
.ac-run-btn:hover { background: linear-gradient(180deg,#318ee8,#1762b9); }
.ac-toolbar-right { display: flex; align-items: center; gap: 8px; margin-left: auto; flex: none; }
.ac-status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 5px 8px; border: 1px solid #24445a; border-radius: 9px; color: #8caec0; font: 500 8px/1 ui-monospace,monospace; letter-spacing: .04em; }
.ac-status-pill i { width: 5px; height: 5px; border-radius: 50%; background: #5e7b8b; }
.ac-status-pill.is-running { color: #73e6ff; border-color: #20516a; } .ac-status-pill.is-running i { background: #3be2ff; box-shadow: 0 0 8px #3be2ff; }
.ac-status-pill.is-success { color: #6df2c0; border-color: #1c5c4a; } .ac-status-pill.is-success i { background: #39eab0; }
.ac-status-pill.is-paused { color: #ffd27b; border-color: #604925; } .ac-status-pill.is-paused i { background: #ffc34f; }
.ac-main { display: grid; grid-template-columns: 258px minmax(0,1fr) 294px; gap: 6px; min-height: 0; padding: 6px; }
.ac-left, .ac-right { min-height: 0; overflow-y: auto; overflow-x: hidden; display: flex; flex-direction: column; gap: 6px; }
.ac-left::-webkit-scrollbar, .ac-right::-webkit-scrollbar, .ac-log-list::-webkit-scrollbar { width: 3px; }
.ac-left::-webkit-scrollbar-thumb, .ac-right::-webkit-scrollbar-thumb, .ac-log-list::-webkit-scrollbar-thumb { background: #24475e; }
.ac-panel { border: 1px solid var(--ac-line); border-radius: 4px; background: linear-gradient(160deg,#0c1721,#09121a); padding: 10px; }
.ac-section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 9px; color: #c2dae8; font: 600 10px/1.2 "Microsoft YaHei",sans-serif; letter-spacing: .03em; }
.ac-panel-count { color: #47697e; font: 500 7px/1 ui-monospace,monospace; letter-spacing: .08em; }
.ac-tree { display: flex; flex-direction: column; gap: 1px; }
.ac-tree-row { display: flex; align-items: center; gap: 5px; min-height: 23px; padding: 2px 4px; border: 1px solid transparent; border-radius: 2px; cursor: pointer; color: #9cb2c1; }
.ac-tree-row:hover { background: rgba(39,104,145,.12); color: #d4edf8; }
.ac-tree-row.is-active { background: rgba(28,103,155,.24); border-color: rgba(42,121,174,.36); color: #dff8ff; }
.ac-tree-row.is-leaf { padding-left: 18px; min-height: 21px; }
.ac-check { display: inline-flex; width: 11px; height: 11px; align-items: center; justify-content: center; flex: none; border: 1px solid #3a6177; border-radius: 2px; background: #0b151d; color: #051019; padding: 0; cursor: pointer; }
.ac-check.is-checked { border-color: #479fd0; background: #3c9bd2; }
.ac-tree-check-space { width: 11px; flex: none; }
.ac-tree-icon { display: inline-flex; width: 16px; color: #5d9fc1; flex: none; }
.ac-tree-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: 400 10px/1.2 "Microsoft YaHei",sans-serif; }
.ac-tree-badge { margin-left: auto; color: #517f99; font: 500 7px/1 ui-monospace,monospace; }
.ac-tree-value { margin-left: auto; color: #557f96; font: 500 8px/1 ui-monospace,monospace; white-space: nowrap; }
.ac-tree-group { margin-top: 4px; }
.ac-tree-group-row { display: flex; width: 100%; align-items: center; gap: 4px; min-height: 23px; padding: 2px 4px; border: 0; border-radius: 2px; background: transparent; color: #84a8bb; font: 500 9px/1 "Microsoft YaHei",sans-serif; cursor: pointer; text-align: left; }
.ac-tree-group-row:hover { background: rgba(39,104,145,.1); color: #c8eafa; }
.ac-tree-group-row svg:first-child { transition: transform .15s; } .ac-tree-group-row svg.is-collapsed { transform: rotate(-90deg); }
.ac-tree-children { margin-left: 8px; padding-left: 3px; border-left: 1px solid #1b3343; }
.ac-settings-panel { padding-bottom: 8px; }
.ac-fields { display: flex; flex-direction: column; gap: 6px; }
.ac-field { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 24px; color: #7d9aab; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-number, .ac-field select { display: inline-flex; align-items: center; min-width: 104px; height: 25px; border: 1px solid #28465a; border-radius: 2px; background: #07111a; }
.ac-number input { width: 70px; height: 23px; border: 0; outline: 0; background: transparent; color: #d4f1ff; text-align: right; padding: 0 4px 0 7px; font: 500 10px/1 ui-monospace,monospace; }
.ac-number em { color: #5d8196; font: 500 8px/1 ui-monospace,monospace; font-style: normal; padding-right: 5px; white-space: nowrap; }
.ac-field select { width: 104px; padding: 0 5px; color: #c6e5f3; font: 400 9px/1 "Microsoft YaHei",sans-serif; outline: 0; }
.ac-field select option { background: #0b1821; }
.ac-two-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.ac-two-fields .ac-field { display: block; }
.ac-two-fields .ac-field > span { display: block; margin-bottom: 3px; }
.ac-two-fields .ac-number, .ac-two-fields .ac-field select { width: 100%; min-width: 0; }
.ac-two-fields .ac-number input { width: 72%; }
.ac-preset-chips { display: flex; gap: 3px; align-items: center; margin: -2px 0 1px 66px; }
.ac-preset-chips button { height: 17px; min-width: 28px; padding: 0 4px; border: 1px solid #26475b; border-radius: 2px; background: #0a161f; color: #65879b; font: 500 8px/1 ui-monospace,monospace; cursor: pointer; }
.ac-preset-chips button.is-active { border-color: #368ec1; color: #9febff; background: #113148; }
.ac-preset-chips span { margin-left: 2px; color: #4f7288; font: 500 7px/1 ui-monospace,monospace; }
.ac-progress-card { margin-top: 9px; padding: 8px; border: 1px solid #1c384a; border-radius: 3px; background: #08131b; }
.ac-progress-head { display: flex; justify-content: space-between; color: #86a8ba; font: 500 9px/1 "Microsoft YaHei",sans-serif; }
.ac-progress-head b { color: #72e6ff; font: 500 10px/1 ui-monospace,monospace; }
.ac-progress-track { height: 5px; margin: 7px 0 6px; border-radius: 4px; background: #152a38; overflow: hidden; }
.ac-progress-track i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg,#1b5cff,#2ecfff); box-shadow: 0 0 8px rgba(41,182,255,.5); transition: width .2s linear; }
.ac-progress-meta { display: flex; justify-content: space-between; gap: 4px; color: #5e8094; font: 500 7px/1.2 ui-monospace,monospace; }
.ac-progress-meta strong { color: #bcdce9; font-weight: 500; }
.ac-progress-actions { display: flex; gap: 5px; margin-top: 8px; }
.ac-btn { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 27px; padding: 0 9px; border: 1px solid #2a4d62; border-radius: 3px; background: #0d1c27; color: #a8c7d7; font: 500 9px/1 "Microsoft YaHei",sans-serif; cursor: pointer; white-space: nowrap; }
.ac-btn:hover { border-color: #3f7b9d; color: #e4faff; }
.ac-btn.is-primary { border-color: #267ac4; background: linear-gradient(180deg,#1f72c8,#13539b); color: #effbff; }
.ac-btn.is-primary:hover { background: linear-gradient(180deg,#2b87e5,#1760b0); }
.ac-btn.is-wide { flex: 1; }
.ac-center { min-width: 0; min-height: 0; display: grid; grid-template-rows: minmax(0,1fr) 154px; gap: 6px; }
.ac-viewport { position: relative; min-height: 0; overflow: hidden; border: 1px solid #1c3a4e; border-radius: 4px; background: #050a10; }
.ac-canvas { display: block; width: 100%; height: 100%; }
.ac-viewport-top { position: absolute; inset: 11px 12px auto 12px; display: flex; justify-content: space-between; align-items: flex-start; pointer-events: none; }
.ac-legend { width: 240px; padding: 7px 8px 6px; border: 1px solid rgba(42,105,139,.42); border-radius: 3px; background: rgba(5,14,22,.76); backdrop-filter: blur(5px); }
.ac-legend-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
.ac-legend-head span { color: #c4e9f5; font: 500 9px/1 "Microsoft YaHei",sans-serif; }
.ac-legend-head b { color: #6d9ab0; font: 500 7px/1 ui-monospace,monospace; letter-spacing: .05em; }
.ac-legend-bar { height: 7px; border-radius: 1px; background-size: 100% 100%; box-shadow: 0 0 10px rgba(45,188,255,.16); }
.ac-legend-labels { display: flex; justify-content: space-between; margin-top: 4px; color: #6d899c; font: 500 7px/1 ui-monospace,monospace; }
.ac-viewport-axis { width: 86px; height: 74px; opacity: .9; pointer-events: none; }
.ac-viewport-tag { position: absolute; top: 15px; left: 50%; transform: translateX(-50%); color: rgba(120,183,211,.5); font: 500 7px/1 ui-monospace,monospace; letter-spacing: .2em; pointer-events: none; }
.ac-viewport-controls { position: absolute; left: 12px; right: 12px; bottom: 10px; display: flex; align-items: center; gap: 12px; color: #6d8fa3; font: 500 8px/1 "Microsoft YaHei",sans-serif; pointer-events: none; }
.ac-viewport-controls > span { display: inline-flex; align-items: center; gap: 4px; }
.ac-dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
.ac-dot.is-blue { background: #337dff; } .ac-dot.is-cyan { background: #31e7ff; } .ac-dot.is-green { background: #3ce7a9; }
.ac-view-hint { margin-left: auto; color: #496c82; }
.ac-import-overlay, .ac-viewport-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 9px; background: rgba(4,11,17,.72); color: #9cd8ef; font: 500 11px/1 "Microsoft YaHei",sans-serif; z-index: 4; }
.ac-spinner { width: 17px; height: 17px; border: 2px solid #204b63; border-top-color: #52d9ff; border-radius: 50%; animation: ac-spin .8s linear infinite; }
@keyframes ac-spin { to { transform: rotate(360deg); } }
.ac-chart-panel { min-height: 0; padding: 7px 9px 3px; border: 1px solid #1c3a4e; border-radius: 4px; background: linear-gradient(180deg,#09151e,#071019); overflow: hidden; }
.ac-chart-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.ac-chart-head strong { display: block; color: #bcd9e8; font: 600 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-chart-head span { color: #55788e; font: 500 7px/1.2 "Microsoft YaHei",sans-serif; }
.ac-chart-legend { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; color: #6d899d; font: 500 7px/1 ui-monospace,monospace; }
.ac-chart-legend span { display: inline-flex; align-items: center; gap: 4px; }
.ac-chart-legend i { width: 10px; height: 2px; display: inline-block; }
.ac-chart-svg { width: 100%; height: 125px; display: block; }
.ac-right .ac-panel { padding: 10px; }
.ac-mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.ac-mode { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; min-height: 61px; padding: 6px 3px; border: 1px solid #1d3a4c; border-radius: 3px; background: #09141d; color: #6d91a6; cursor: pointer; }
.ac-mode:hover { border-color: #2c6989; color: #c1efff; background: #0d2130; }
.ac-mode.is-active { border-color: #2a8fd1; color: #bdf4ff; background: linear-gradient(180deg,#12344b,#0c1d2a); box-shadow: inset 0 0 18px rgba(35,142,211,.12); }
.ac-mode-icon { display: inline-flex; color: #4f9cbe; } .ac-mode.is-active .ac-mode-icon { color: #51dbff; }
.ac-mode strong { font: 500 9px/1 "Microsoft YaHei",sans-serif; }
.ac-mode small { color: #4f7288; font: 500 6px/1 ui-monospace,monospace; letter-spacing: .05em; }
.ac-slider-field { display: block; margin-bottom: 8px; }
.ac-slider-head { display: flex; justify-content: space-between; margin-bottom: 5px; color: #7c9bad; font: 400 9px/1 "Microsoft YaHei",sans-serif; }
.ac-slider-head strong { color: #bfe4f3; font: 500 9px/1 ui-monospace,monospace; }
.ac-slider-field input[type="range"] { width: 100%; height: 3px; margin: 0; appearance: none; border-radius: 3px; background: linear-gradient(90deg,#2d8cd0 var(--ac-range),#193343 var(--ac-range)); outline: 0; }
.ac-slider-field input[type="range"]::-webkit-slider-thumb { appearance: none; width: 9px; height: 9px; border-radius: 50%; background: #a8efff; border: 1px solid #3ca9dd; box-shadow: 0 0 6px rgba(58,200,255,.5); cursor: pointer; }
.ac-inline-toggle { display: flex; align-items: center; justify-content: space-between; margin: 4px 0 8px; }
.ac-slice-readout { color: #547d91; font: 500 8px/1 ui-monospace,monospace; }
.ac-toggle { display: flex; align-items: center; gap: 10px; padding: 0; border: 0; background: transparent; color: #7f9eae; font: 400 9px/1 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-toggle > i { display: flex; width: 25px; height: 13px; align-items: center; padding: 2px; border: 1px solid #2c4b5d; border-radius: 9px; background: #09151e; transition: background .15s; }
.ac-toggle > i b { display: block; width: 7px; height: 7px; border-radius: 50%; background: #547185; transition: transform .15s,background .15s; }
.ac-toggle.is-on > i { background: #1e79b2; border-color: #3a9ed3; }
.ac-toggle.is-on > i b { transform: translateX(11px); background: #d8faff; }
.ac-toggle-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
.ac-result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.ac-result { display: flex; flex-direction: column; gap: 3px; min-height: 55px; padding: 7px; border: 1px solid #1b3547; border-radius: 3px; background: #08131c; }
.ac-result span { color: #6e8d9f; font: 400 8px/1.2 "Microsoft YaHei",sans-serif; }
.ac-result strong { color: #e1f6ff; font: 500 15px/1.1 ui-monospace,monospace; }
.ac-result small { color: #4e7187; font: 500 6px/1 ui-monospace,monospace; letter-spacing: .06em; }
.ac-result.is-accent { border-color: #234f67; background: linear-gradient(135deg,#0b1b26,#102c3d); }
.ac-result.is-accent strong { color: #7ceaff; }
.ac-pressure-panel { padding-bottom: 6px; }
.ac-pressure-map { overflow: hidden; border: 1px solid #1a3648; border-radius: 3px; background: #061019; }
.ac-pressure-map svg { display: block; width: 100%; height: auto; }
.ac-pressure-axis { display: flex; justify-content: space-between; padding: 4px 5px; color: #52768a; font: 500 7px/1 ui-monospace,monospace; }
.ac-statusbar { display: flex; align-items: center; gap: 16px; padding: 0 11px; border-top: 1px solid var(--ac-line); background: #08121a; color: #587b8f; font: 500 8px/1 ui-monospace,monospace; }
.ac-status-main { display: inline-flex; align-items: center; gap: 5px; color: #82a8b9; }
.ac-status-main i { width: 5px; height: 5px; border-radius: 50%; background: #5b7a8b; }
.ac-status-main.is-success { color: #63edbd; } .ac-status-main.is-success i { background: #42e2ae; box-shadow: 0 0 7px rgba(66,226,174,.7); }
.ac-status-main.is-running { color: #65ddff; } .ac-status-main.is-running i { background: #46dcff; }
.ac-status-main.is-paused { color: #ffc963; } .ac-status-main.is-paused i { background: #ffbf4b; }
.ac-status-item { color: #55778b; } .ac-status-item strong { color: #9fc3d3; font-weight: 500; }
.ac-status-right { display: flex; align-items: center; gap: 13px; margin-left: auto; }
.ac-status-right button { display: inline-flex; align-items: center; gap: 4px; border: 0; background: transparent; color: #658ba0; font: 500 8px/1 "Microsoft YaHei",sans-serif; cursor: pointer; }
.ac-status-right button:hover { color: #c9f4ff; }
.ac-status-right span { color: #496a7e; }
.ac-hidden-input { display: none; }
.ac-toast { position: fixed; z-index: 100; left: 50%; bottom: 54px; transform: translateX(-50%); max-width: 560px; padding: 9px 15px; border: 1px solid #2a6689; border-radius: 4px; background: rgba(8,25,36,.96); color: #c8f0ff; font: 500 10px/1.3 "Microsoft YaHei",sans-serif; box-shadow: 0 10px 26px rgba(0,0,0,.4); }
.ac-toast.is-success { border-color: #1d6f58; color: #8dffdd; } .ac-toast.is-warning { border-color: #7f5a1c; color: #ffe09b; } .ac-toast.is-error { border-color: #7e2b3a; color: #ffb3c0; }
.ac-modal-wrap { position: fixed; inset: 0; z-index: 90; display: flex; align-items: center; justify-content: center; padding: 22px; background: rgba(1,6,10,.64); backdrop-filter: blur(4px); }
.ac-modal { width: min(540px,94vw); max-height: 86vh; overflow: auto; border: 1px solid #2b5b77; border-radius: 5px; background: linear-gradient(160deg,#0f202d,#08121a); box-shadow: 0 22px 70px rgba(0,0,0,.55); }
.ac-modal.is-wide { width: min(700px,94vw); }
.ac-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 13px 15px 10px; border-bottom: 1px solid #1e3a4d; }
.ac-modal-head h3 { margin: 0; color: #e5f9ff; font: 600 14px/1.2 "Microsoft YaHei",sans-serif; }
.ac-modal-head p { margin: 4px 0 0; color: #6d91a5; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-modal-body { padding: 13px 15px 15px; }
.ac-analysis-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.ac-analysis-card { display: flex; flex-direction: column; gap: 4px; padding: 9px; border: 1px solid #1c3a4d; border-radius: 3px; background: #08141e; }
.ac-analysis-card span { color: #7294a5; font: 400 9px/1 "Microsoft YaHei",sans-serif; } .ac-analysis-card strong { color: #dff8ff; font: 500 18px/1 ui-monospace,monospace; } .ac-analysis-card small { color: #4e7287; font: 500 8px/1 ui-monospace,monospace; }
.ac-analysis-table { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 12px; border: 1px solid #193448; background: #193448; }
.ac-analysis-table div { display: flex; justify-content: space-between; gap: 8px; padding: 7px 8px; background: #091620; color: #6b8da1; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; } .ac-analysis-table b { color: #b7dce9; font-weight: 500; }
.ac-caveat { margin: 11px 0 0; padding: 8px 9px; border-left: 2px solid #2c6c8e; background: #08141d; color: #62879b; font: 400 9px/1.55 "Microsoft YaHei",sans-serif; }
.ac-modal-actions { display: flex; gap: 6px; justify-content: flex-end; margin-top: 12px; }
.ac-view-buttons { display: flex; gap: 5px; margin-bottom: 13px; }
.ac-view-buttons .ac-btn { flex: 1; }
.ac-log-list { max-height: 420px; overflow: auto; padding: 4px 0; background: #061019; border: 1px solid #193347; }
.ac-log-list div { display: flex; gap: 9px; padding: 3px 7px; color: #84a5b5; font: 400 9px/1.4 ui-monospace,monospace; border-bottom: 1px solid rgba(30,60,78,.4); } .ac-log-list time { color: #477187; flex: none; } .ac-log-list span { white-space: pre-wrap; }
.ac-about-hero { display: flex; align-items: center; gap: 13px; margin-bottom: 11px; } .ac-about-hero h2 { margin: 0; color: #ecfbff; font: 600 18px/1.1 "Bahnschrift","Segoe UI",sans-serif; } .ac-about-hero p { margin: 4px 0 0; color: #6b91a6; font: 400 9px/1.2 "Microsoft YaHei",sans-serif; }
.ac-about-copy { color: #84a5b6; font: 400 10px/1.7 "Microsoft YaHei",sans-serif; }
.ac-about-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 11px; } .ac-about-tags span { padding: 4px 6px; border: 1px solid #23475b; border-radius: 2px; color: #70a8bd; font: 500 8px/1 ui-monospace,monospace; }
.ac-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.ac-steps > div { padding: 9px; border: 1px solid #1b384a; border-radius: 3px; background: #08141d; }
.ac-steps b { display: block; color: #3daee4; font: 500 10px/1 ui-monospace,monospace; } .ac-steps span { display: block; margin-top: 5px; color: #c6e7f4; font: 500 10px/1.2 "Microsoft YaHei",sans-serif; } .ac-steps p { margin: 5px 0 0; color: #688da1; font: 400 9px/1.55 "Microsoft YaHei",sans-serif; }
@media (max-width: 1260px) { .ac-main { grid-template-columns: 232px minmax(0,1fr) 270px; } .ac-dock-meta { display: none; } }
@media (max-width: 1020px) { .ac-main { grid-template-columns: 214px minmax(0,1fr) 250px; } .ac-menu-item > button { padding: 0 6px; } .ac-brand { width: 170px; } .ac-project-name { display: none; } .ac-tool-btn span { display: none; } .ac-run-btn { padding: 0 9px; } }
@media (max-width: 820px) { .ac-main { grid-template-columns: 1fr; grid-template-rows: minmax(340px,1fr) auto auto; overflow-y: auto; } .ac-left,.ac-right { display: none; } .ac-center { grid-template-rows: minmax(340px,1fr) 150px; } .ac-dock-copy { min-width: 100px; } }
`;

const plugin = {
  inject: ['slots', 'locale'],
  apply(ctx) {
    ctx.effect(() => {
      const disposeEn = ctx.locale.register(NS, 'en', en);
      const disposeZh = ctx.locale.register(NS, 'zh', zh);
      return () => {
        disposeEn();
        disposeZh();
      };
    });
    const { Launcher, OverlayHost } = buildComponents(ctx);
    ctx.slots.inject('conversation.input.dock', () => ctx.slots.register({ name: 'conversation.input.dock', id: 'aerolab-cfd-launcher', order: 29 }, Launcher));
    ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'aerolab-cfd-app', order: 29 }, OverlayHost));
  },
};

export default plugin;
