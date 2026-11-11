# Roadmap

## v1.0 — complete

- [x] DSH workspace matching the AeroLab CFD concept layout.
- [x] STL/OBJ/GLB import and procedural demo car.
- [x] Mesh/solve preview workflow with residuals, progress and logs.
- [x] Streamlines, velocity/pressure/vorticity slices, camera presets.
- [x] Force cards, pressure map and Markdown report.
- [x] Save/open project, CI and tagged releases.

## v1.1 — next

- [ ] Real geometry checks: watertightness, normals, non-manifold edges.
- [ ] Mesh refinement regions and a 3D mesh-quality view.
- [ ] Wall-pressure colouring directly on the car surface.
- [ ] Probe tool with point readouts.
- [ ] Screenshot/PNG and CSV result export.
- [ ] Compare two runs at different inlet speeds.

## v1.2 — engineering bridge

- [ ] Optional local CFD service protocol (OpenFOAM case generation, job state,
  residual streaming and VTK result loading).
- [ ] Rotating wheels and moving ground boundary controls.
- [ ] Multi-run parameter sweep.
- [ ] Benchmark validation report (Ahmed body / NACA wing).

## Non-goals

- Calling the preview a validated CFD solve.
- Shipping a native Qt/OpenFOAM application from this repository.
- Running untrusted solver code in the browser.
- Redistributing production-car geometry or team liveries.
