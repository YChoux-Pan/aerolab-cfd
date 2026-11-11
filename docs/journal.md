# Engineering journal

Reverse-chronological. Record decisions, evidence, and unresolved risks.

## 2026-11-11 — AeroLab CFD v1.0.0 from the V2 requirements

**Decision:** replace the previous AeroFlow presentation with a new DSH Web UI
plugin that follows the AeroLab CFD desktop concept: project tree, boundary
conditions, mesh/solve workflow, streamlines/contours, force cards, residual
chart and pressure map.

**Scope boundary:** the MD specifies Qt + OpenFOAM + VTK for a real solver. The
user explicitly requested a **visualization plugin, not software**. Therefore:

- Qt/C++/OpenFOAM are not bundled;
- the browser implements the complete interaction workflow;
- force values use the documented algebraic preview model;
- residuals and solver progress are deterministic preview state;
- the UI and report state “preview” and “not validated CFD”.

**3D:** Three.js test section, procedural mid-engine car, 220 batched thick
streamlines via `LineSegments2`, a depth-tested slice shader for velocity /
pressure / vorticity, and orbit camera presets. A standalone Edge/SwiftShader
harness confirmed the streamlines and both contour slices render without shader
errors.

**UI:** the first full-size headless component render matched the concept image's
information architecture. It exposed a residual chart issue (residuals bunched
near 1e+01); the decay constant was changed from 1650 to 300 so the curves fall
through 1e−3 at the demo iteration.

**Known limitations:**

- imported geometry is not watertight-checked or CFD-simplified;
- no actual volume mesh or Navier–Stokes solve;
- no rotating wheels or moving-ground physics;
- pressure distribution map is a visual preview;
- DSH page visual acceptance is still manual.
