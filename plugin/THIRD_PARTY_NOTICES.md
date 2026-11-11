# Third-party notices

AeroLab CFD bundles the following third-party software in `plugin/client.js`:

## Three.js

- Project: https://threejs.org/
- Source: https://github.com/mrdoob/three.js
- Version pinned for build: 0.180.0
- License: MIT
- Copyright: 2010-2025 Three.js Authors

The MIT license text is included in the repository `LICENSE` and in the
`plugin/LICENSE` copy. No three.js source is modified; the library is bundled by
esbuild for the DSH client runtime.

## Runtime dependencies

React and React DOM are **not** bundled. They are provided by the DSH host
module loader as `react`.

## Reference concept

The interface follows the user-provided V2 requirements and a generated UI
concept image. No source code, assets, trademarks or solver binaries from a
third-party CFD product are included.
