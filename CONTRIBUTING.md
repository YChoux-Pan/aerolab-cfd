# Contributing to AeroLab CFD

Thanks for helping improve the DSH virtual wind-tunnel plugin. This repository is
a browser visualization/workflow project, not a solver distribution.

## Development setup

```bash
git clone https://github.com/YChoux-Pan/aerolab-cfd.git
cd aerolab-cfd
cd plugin/tools
pnpm install --frozen-lockfile
node build.mjs
cd ../..
node --check plugin/client.js
node scripts/verify.mjs
```

The runtime bundle is committed at `plugin/client.js`. Rebuild it whenever
`plugin/source/` changes.

## What to edit

- UI/state: `plugin/source/client.jsx`.
- 3D scene, streamlines and slice shader: `plugin/source/scene.js`.
- Demo car and imported mesh treatment: `plugin/source/models.js`.
- STL/OBJ/glTF import: `plugin/source/importers.js`.
- Preview metrics, residuals, project schema: `plugin/source/solver.js`.
- Runtime copy: `plugin/locale/en.json` and `plugin/locale/zh.json`.
- Documentation: `README.md`, `docs/`, `CHANGELOG.md`, `ROADMAP.md`.

## Rules

- Keep React external; DSH supplies the host runtime.
- Do not add a runtime network dependency. The workspace must work offline.
- Keep the preview boundary explicit in UI, docs and reports: this is not
  OpenFOAM and not validated CFD.
- Do not represent a procedural field as a solved velocity or pressure field.
- Do not commit `node_modules`, `dist/`, or generated local profiles.
- Imported assets must be user-provided, original or licensed; no production-car
  geometry or team liveries.
- Use imperative commit subjects, update `CHANGELOG.md` for user-visible changes,
  and add a journal entry for significant decisions.

## Tests

```bash
node scripts/verify.mjs
cd plugin/tools
node build.mjs
cd ../..
node --check plugin/client.js
node scripts/package-plugin.mjs
```

CI also checks that the committed `client.js` matches a fresh build.

## Release

1. Update `CHANGELOG.md` and `plugin/package.json`.
2. Build and verify.
3. Commit and push `main`.
4. Tag `vX.Y.Z`; the release workflow attaches the runtime zip.
