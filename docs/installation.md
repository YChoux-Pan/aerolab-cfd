# Installation

AeroLab CFD is a **DSH Web UI bundle**, not a standalone desktop executable.

## Requirements

- DSH Web UI / DSH Desktop with client plugin support.
- A WebGL-capable browser or Electron renderer.
- Optional for development: Node.js 22+, pnpm 11+.

## Install from a release zip

1. Download `aerolab-cfd-plugin-v1.0.0.zip` from the repository Releases page.
2. Extract it. The zip contains a top-level `aerolab-cfd/` folder.
3. In DSH open **Plugins** → local bundle → select the extracted `aerolab-cfd/` folder.
4. Enable **AeroLab CFD** (`aerolab-cfd`).
5. Refresh the DSH page if the launcher does not appear immediately.

## Install from source

```bash
git clone https://github.com/YChoux-Pan/aerolab-cfd.git
cd aerolab-cfd
```

In DSH **Plugins**, select the repository's `plugin/` directory.

CLI form:

```bash
dsh plugin --profile desktop add "<absolute-path>/aerolab-cfd/plugin"
```

If the profile does not auto-select the bundle, enable it once in Plugins; a DSH restart is the safe fallback.

## Helper script

Windows:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/install-plugin.ps1
```

Linux/macOS:

```bash
bash scripts/install-plugin.sh
```

The helper clones/updates the repository, then invokes the DSH CLI. It does not hand-edit the profile.

## Updating

```bash
cd aerolab-cfd
git pull --ff-only
cd plugin/tools
pnpm install --frozen-lockfile
node build.mjs
```

Then refresh DSH. If you installed from a release zip, replace the extracted folder with the newer release and re-select it.

## Removing

In DSH **Plugins**, disable/remove **AeroLab CFD**. If you previously installed the older AeroFlow Lab plugin, disable it separately to avoid two wind-tunnel launchers.

## Troubleshooting

- **No launcher:** verify the row `aerolab-cfd` is enabled and refresh/restart DSH.
- **Blank 3D viewport:** verify WebGL is available; try a hardware-accelerated browser or DSH Desktop.
- **Model does not load:** STL/OBJ must contain triangle meshes; glTF must embed resources. Limit is 25 MB.
- **Old UI:** DSH caches client bundles; refresh the page or restart DSH after a local build.
