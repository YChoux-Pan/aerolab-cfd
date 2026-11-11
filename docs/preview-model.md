# Preview model and limitations

AeroLab CFD deliberately separates **interaction design** from **engineering CFD**.
The plugin runs entirely in the DSH Web UI and has no OpenFOAM process, no
solver binary, no file-system case directory and no VTK reader.

## What the preview computes

For the current geometry and inlet settings:

```text
A   = width × height × areaFactor
q   = 0.5 × ρ × v²
Fd  = q × Cd × A
Fz  = q × |Cl| × A
P   = Fd × v
Re  = v × L / ν
```

Defaults for the demo car: `A = 1.353 m²`, `Cd = 0.31`, `Cl = -0.65`, sea-level
air. At 40 m/s this gives approximately 412 N drag and 862 N downforce, matching
the workspace cards.

The solver state advances a deterministic residual history:

```text
residual_i(iteration) = start_i × exp(-iteration / 300) × seed_i × wave
```

Five series (Continuity, Ux, Uy, Uz, ω) are rendered on a log axis. They are an
interaction/visualization model, not a linear-system solve.

The 3D field is a kinematic vector field:

- uniform +X inflow;
- ellipsoidal deflection around the vehicle bounds;
- ground containment;
- oscillating downstream wake;
- speed mapped to a blue → cyan → green → yellow → red colour ramp.

Contours are a 2D slice shader evaluated from position and time. They are not a
pressure or vorticity field sampled from a CFD result.

## Why this is not OpenFOAM

| Requirement | Desktop plan (Qt/OpenFOAM) | This DSH plugin |
|---|---|---|
| Geometry | STL/OBJ, CAD prep | STL/OBJ/GLB/glTF display mesh |
| Domain | blockMesh + snappyHexMesh | preview bounds |
| Mesh | millions of cells, checkMesh | cell-count estimate |
| Solver | simpleFoam / RANS | deterministic preview state |
| Results | VTK / CSV | procedural fields + force formulas |
| Runtime | native process/service | browser/WebGL |

The UI is intentionally shaped like the real workflow so a future adapter can
replace the preview:

```text
AeroLab UI
  → CfdTaskManager (future)
      → write OpenFOAM case
      → blockMesh / snappyHexMesh / simpleFoam
      → parse residuals + force coefficients
      → load VTK/VTU into Three.js or a VTK.js viewer
```

That adapter must live outside the browser plugin or behind an explicit local
service. The UI already has the correct states: mesh stale → generating → ready;
solver idle → running → paused/stopped → complete; results only refreshed after
a completed run.

## What would be required for credible CFD

1. A watertight, simplified CFD surface (not a display mesh).
2. A domain sized by blockage ratio, with inlet/outlet/wall/ground/wheel
   boundaries.
3. Volume mesh and boundary-layer resolution, with a mesh-independence study.
4. A validated RANS/LES setup, reference area and force-coordinate convention.
5. Residual and force convergence, plus comparison against a known benchmark
   (Ahmed body, NACA wing, or wind-tunnel data).
6. A report that states solver version, schemes, turbulence model and
   uncertainty.

None of those steps are claimed here. The plugin is a **visualization and
workflow prototype**, not an engineering certification tool.
