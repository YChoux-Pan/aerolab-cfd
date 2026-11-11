# Validation

## Automated

```bash
cd plugin/tools
pnpm install --frozen-lockfile
node build.mjs
cd ../..
node --check plugin/client.js
node scripts/verify.mjs
node scripts/package-plugin.mjs
```

CI also checks that the committed `plugin/client.js` matches a fresh build.

The verification covers:

- plugin manifest identity, DSH bundle/client shape and runtime file list;
- locale parity and metadata;
- required source modules and STL importer presence;
- absence of absolute local paths in tracked text;
- README deployment instructions and preview-limit documentation;
- installable runtime package creation.

## Local WebGL harness

During development a standalone headless Edge/SwiftShader harness loaded the
scene directly and rendered streamlines, velocity slice and pressure slice
without shader errors. It is a development aid only; it is not part of the
shipped runtime and it is not a substitute for the DSH page.

## Manual DSH checklist

### Launcher
- Strip appears above the composer without breaking layout.
- Opens/focuses the workspace; close and Escape work.

### Workspace
- 1280×720, 1440×900 and 1672×941 layouts fit without horizontal overflow.
- Left/right rails scroll; toolbar stays visible; status bar remains readable.
- All six menus open and their actions work.
- Project tree checkboxes change car/tunnel/ground visibility.
- Window close button and modal close buttons work.

### Model and mesh
- Demo car starts grounded and centered.
- STL import succeeds; OBJ import succeeds; invalid file shows a readable error.
- Import marks the mesh as stale and blocks solve until “生成网格”.
- Mesh progress reaches completion and updates the cell count/quality.

### Solver
- Start advances iteration/progress/residuals; Pause freezes; Stop changes state.
- Starting without a ready mesh is blocked with a toast.
- Progress reaches 100% and status becomes “计算完成”.
- Logs modal shows recent entries.

### Visualization
- Streamlines, velocity, pressure and vorticity modes switch without error.
- Density changes visible line thickness/count; transparency responds.
- Slice toggle and slice position change the field.
- Camera ISO/front/side/top presets frame the car.
- No blank canvas or shader error on a WebGL 2 renderer.

### Project/report
- Save downloads a JSON with the `aerolab-cfd-project` schema.
- Open restores settings and state.
- Report downloads Markdown containing conditions, metrics and the preview caveat.

### Truthfulness
- The UI keeps “preview / 预览” language visible.
- No panel claims a validated OpenFOAM result.
- The report includes the same caveat.
