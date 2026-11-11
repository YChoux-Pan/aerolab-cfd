#!/usr/bin/env bash
set -euo pipefail

INSTALL_DIR="${1:-$HOME/AeroLabCFD/aerolab-cfd}"
PROFILE="${DSH_PROFILE:-desktop}"
REPO="https://github.com/YChoux-Pan/aerolab-cfd.git"

if [ ! -d "$INSTALL_DIR/.git" ]; then
  mkdir -p "$(dirname "$INSTALL_DIR")"
  git clone "$REPO" "$INSTALL_DIR"
else
  git -C "$INSTALL_DIR" pull --ff-only
fi

PLUGIN="$INSTALL_DIR/plugin"
if [ ! -f "$PLUGIN/client.js" ]; then
  echo "Plugin runtime not found: $PLUGIN/client.js" >&2
  exit 1
fi

if ! command -v dsh >/dev/null 2>&1; then
  echo "The dsh CLI was not found. Open DSH -> Plugins and add the local bundle: $PLUGIN" >&2
  exit 1
fi

dsh plugin --profile "$PROFILE" add "$PLUGIN"
echo
echo "AeroLab CFD plugin package added."
echo "If it is not selected, open DSH -> Plugins and enable 'AeroLab CFD' (aerolab-cfd)."
echo "Plugin path: $PLUGIN"
