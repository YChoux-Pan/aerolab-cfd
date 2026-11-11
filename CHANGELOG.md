# Changelog

All notable changes to AeroLab CFD are recorded here. The installable plugin
uses semantic versioning.

## [1.0.1] — 2026-11-11

### Fixed

- Client activation failed with `en is not defined` because the locale
  dictionaries were not imported in `client.jsx`. This prevented every slot from
  registering, so the launcher never appeared.
- Added a committed activation smoke test that loads `client.js` in a
  browser-like VM, calls the DSH module loader and `plugin.apply()`, and asserts
  both slot registrations. CI and the release workflow now run it.
- Updated the displayed version to 1.0.1 and the release instructions.

## [1.0.0] — 2026-11-11

### Added

- New DSH Web UI plugin `aerolab-cfd` with a full-frame CFD workspace.
- Desktop-style layout: title bar, menus, toolbar, project tree, simulation
  settings, 3D viewport, visualization rail, results and status bar.
- Procedural mid-engine demo car and imported mesh treatment.
- STL, OBJ, GLB and embedded glTF import up to 25 MB.
- Streamline, velocity, pressure and vorticity visualization modes.
- Thick batched streamlines with speed colour mapping.
- Depth-tested velocity/pressure/vorticity slice shader.
- Boundary settings: inlet velocity, outlet pressure, density, temperature,
  turbulence model, mesh type/level, iterations and ground mode.
- Deterministic preview mesh sizing, quality state, solve progress, ETA and five
  residual series.
- Drag, downforce, Cd, Cl, power and Reynolds readouts.
- Wall-pressure preview map.
- Project JSON save/open, Markdown report export, solve logs, view presets and
  responsive layout.
- CI, release workflow, install helpers, verification and runtime packaging.

### Notes

- This is a reduced-order interactive preview, not OpenFOAM and not a validated
  CFD result. See `docs/preview-model.md`.

[1.0.1]: https://github.com/YChoux-Pan/aerolab-cfd/releases/tag/v1.0.1
[1.0.0]: https://github.com/YChoux-Pan/aerolab-cfd/releases/tag/v1.0.0
