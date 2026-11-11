# Engineering journal

Reverse-chronological. Record decisions, evidence, and unresolved risks.

## 2026-11-11 — v1.0.1 activation hotfix

- DSH web boot reported `aerolab-cfd: failed` and no launcher appeared.
- Root cause: `client.jsx` registered `en`/`zh` but never imported the locale
  JSON names. The component harness had called `buildComponents` directly and
  bypassed `plugin.apply`, so the undefined activation symbols were invisible.
- Fix: import `../locale/en.json` and `../locale/zh.json`; bump to 1.0.1.
- Added `plugin/tools/activation-smoke.mjs`, which runs the built bundle in a
  browser-like VM, calls the module-loader factory and `plugin.apply()`, and
  asserts both slot registrations. Wired into CI and release.
- Verified locally: `ACTIVATED 2 conversation.input.dock:aerolab-cfd-launcher,
  shell.overlay:aerolab-cfd-app`.
- CI run `42983596205` passed, including the new activation smoke step.
- Release run `42983691527` published `v1.0.1` with
  `aerolab-cfd-plugin-v1.0.1.zip` (202,393 bytes).
- Action: refresh DSH; if the web boot already failed, restart DSH so the fixed
  client bundle is loaded.

## 2026-11-11 — v1.0.0 shipped

- Repository: <https://github.com/YChoux-Pan/aerolab-cfd>
- Release: <https://github.com/YChoux-Pan/aerolab-cfd/releases/tag/v1.0.0>
- Asset: `aerolab-cfd-plugin-v1.0.0.zip` (201,933 bytes)
- CI: run `42980764039` passed.
- Release workflow: run `42981032172` passed.
- New plugin row `aerolab-cfd` installed and active in the local `desktop`
  profile; the previous `aeroflow-lab` row was disabled.
- A headless React + Edge/SwiftShader render of the actual workspace components
  produced `docs/images/aerolab-cfd-workspace.png`. The same harness exercised
  streamlines and velocity/pressure slices.
- Automated repository verification: 45/45 checks.

**Remaining manual check:** refresh DSH and inspect the actual slot layout,
keyboard/focus behavior and GPU cost. The component harness validates rendering,
not the host page's auth/session environment.

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
