# Security policy

## Supported versions

| Version | Supported |
|---|---|
| 1.0.x | Yes |
| < 1.0 | No |

## Reporting a vulnerability

Report suspected code-execution, credential, import-parser or WebGL issues
privately through GitHub's **Security → Report a vulnerability** flow. Do not
include secrets in a public issue.

Include the affected version, DSH version, install path, a minimal reproduction,
and whether any local file was read, written or executed.

## Runtime safety

- AeroLab CFD uses no remote asset service and no CDN at runtime.
- Imported STL/OBJ/GLB/glTF files are parsed locally and never executed.
- glTF files that require external resources or a decoder are rejected.
- The plugin does not run OpenFOAM or any subprocess.
- Project save/open is local JSON; report export is a local download.
- 3D geometry is untrusted input; browser/WebGL vulnerabilities are outside this
  repository's control but are still useful to report if they affect import.

## Truthful claims

The solver is a reduced-order preview. Do not use it for engineering decisions or
safety-critical analysis. See `docs/preview-model.md`.
