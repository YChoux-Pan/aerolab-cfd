# Deployment and cross-machine installation

## Repository-based deployment

On another computer with DSH:

```bash
git clone https://github.com/YChoux-Pan/aerolab-cfd.git
cd aerolab-cfd
```

Open DSH **Plugins** → add local bundle → select `plugin/`.

CLI:

```bash
dsh plugin --profile desktop add "<absolute-path>/aerolab-cfd/plugin"
```

The profile installs a link to the checked-out plugin. A `git pull` updates the
source; rebuild `plugin/client.js` when source files change and refresh DSH.

## Release-based deployment

Download `aerolab-cfd-plugin-v1.0.0.zip` from Releases. Extract it and select the
extracted `aerolab-cfd/` folder in DSH Plugins. The zip contains only runtime
files: `client.js`, `package.json`, `cordis.patch.yml`, `index.js`, locale JSON,
icon and notices.

## What is intentionally not deployed

- No OpenFOAM, Qt, C++ toolchain, CUDA or native service.
- No network API and no telemetry upload.
- No user project data leaves the browser; save/open is a local JSON download/file.
- No server is started by this repository.

## Requirements for maintainers

- Node.js 22+ and pnpm 11+ to build.
- A WebGL-capable DSH renderer to use the workspace.
- GitHub Actions is used for CI and tagged releases.

## Updating an installed copy

```bash
cd aerolab-cfd
git pull --ff-only
cd plugin/tools
pnpm install --frozen-lockfile
node build.mjs
```

Then refresh/restart DSH. If the bundle row is disabled, enable it in Plugins.

## Removing

Disable/remove `aerolab-cfd` in DSH Plugins. If an older AeroFlow Lab bundle is
still enabled, disable it separately so only one wind-tunnel launcher appears.
