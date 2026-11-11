# AeroLab CFD — DSH plugin

A persistent DSH Web UI plugin that provides an interactive virtual wind tunnel
and CFD preview workspace.

Part of the [AeroLab CFD repository](../README.md). Install using
[`../docs/installation.md`](../docs/installation.md).

## Runtime

- **Launcher**: compact strip above the message composer.
- **Workspace**: fixed full-frame overlay with a desktop CFD layout.
- **3D**: WebGL wind tunnel, procedural demo car, thick streamlines and a
  velocity/pressure/vorticity slice.
- **Workflow**: import → mesh → solve preview → results → project/report export.

## Import support

| Format | Notes |
|---|---|
| STL | Binary/ASCII; display mesh; 25 MB limit |
| OBJ | Geometry only; AeroLab material treatment |
| GLB | Preserved glTF PBR materials |
| glTF | Must embed buffers/textures |

Draco, Meshopt, KTX2 and external glTF resources are rejected with a readable
error.

## Build

```powershell
cd tools
pnpm install --frozen-lockfile
node build.mjs
node --check ..\client.js
```

React is external; Three.js is bundled. The committed `client.js` is the runtime.

## Truth boundary

The solve is a **reduced-order preview** used for interaction design and demos.
It does not run OpenFOAM or solve Navier–Stokes. The UI labels this explicitly.
