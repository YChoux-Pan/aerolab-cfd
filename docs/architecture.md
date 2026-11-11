# Architecture

## Runtime shape

AeroLab CFD is one DSH client plugin with an empty host half:

```text
plugin/index.js          no-op host
plugin/source/entry.jsx  window.__ModuleLoader__.load({ id: 'aerolab-cfd' })
plugin/client.js         committed browser bundle
```

The client registers two slots:

| Slot | Component | Purpose |
|---|---|---|
| `conversation.input.dock` | `Launcher` | compact entry strip above the composer |
| `shell.overlay` | `OverlayHost` | full-frame AeroLab workspace |

React is supplied by the DSH client module loader and is **external** to the bundle. Three.js and its loaders are bundled.

## UI structure

```text
OverlayHost
└── App
    ├── title bar (menus, project name, close)
    ├── toolbar (project, import, mesh, solve, post)
    ├── workspace grid
    │   ├── left rail: project tree + simulation settings + progress
    │   ├── center: WebGL viewport + residual chart
    │   └── right rail: visualization modes, display settings, forces, pressure map
    ├── status bar
    └── modals (analysis, view, logs, help, about) + toast
```

The layout is a fixed full-viewport workspace with scrollable side rails. Under 820 px the side rails collapse and the stage remains scrollable.

## State flow

```text
React state
  spec ──────────────► computeResults() ──► metrics / result cards / report
  viz ───────────────► scene.setViz() ────► streamlines/slice/visibility
  view ──────────────► scene.setView()
  imported mesh ─────► scene.setVehicle()
  solver status ─────► interval ─────────► residuals, iteration, logs, metrics
  mesh status ───────► interval ─────────► cell count, quality, stale guard
```

The Three.js scene owns rendering and particle paths; React owns project intent and readouts. The only high-frequency path back to React is the solver interval.

## 3D scene

`source/scene.js` builds:

- test-section box, ground, grid, inlet plane and overhead light;
- a procedural mid-engine demo car (or an imported mesh);
- 220 batched thick streamlines using `LineSegments2` with per-vertex speed colours;
- a depth-tested vertical slice shader for velocity, pressure and vorticity;
- orbit controls, camera presets and tunnel/car/ground visibility.

The velocity field is a deterministic visual field: uniform inflow, ellipsoidal body deflection, ground containment, downstream wake oscillation. It is **not** a solution of the Navier–Stokes equations.

## Import pipeline

```text
file input / drop
  → extension + 25 MB validation
  → STLLoader / OBJLoader / GLTFLoader
  → remove lights/cameras
  → compute normals, count triangles
  → normalize to 4.25 m display length, center X/Z, ground Y
  → scene.setVehicle()
  → mesh becomes stale; regenerate before starting
```

STL and OBJ receive the AeroLab silver material. glTF materials are preserved. Draco, Meshopt, KTX2 and external glTF resources are rejected with readable errors.

## Preview solver

`source/solver.js` contains the transparent model:

- `computeResults`: dynamic pressure, drag, downforce, Cd, Cl, power, Reynolds.
- `meshCellCount` / `meshQuality`: deterministic mesh preview.
- `residualAt` / `residualSeries`: five residual curves with iteration decay.
- `buildProject`: versioned JSON schema for save/open.
- `makeInitialSolver`: the paused demo state at 2,860 / 5,000 iterations.

The UI does not import OpenFOAM, spawn processes or perform network CFD jobs. A production adapter would replace this module and the interval loop with an asynchronous job manager.

## Failure boundaries

- WebGL failure shows a readable message; the rest of the UI remains present.
- Invalid imports leave the previous car in place and surface a localized error.
- Starting without a generated mesh is blocked.
- The workspace is a preview; no result is labelled as validated CFD.
