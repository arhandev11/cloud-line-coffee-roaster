#!/usr/bin/env bash
# Deploys cloudline.heybouma.com on the server: pull, install, audit, build.
# nginx serves web/out.live/ directly (static export), so there is no process to restart.
set -euo pipefail

cd "$(dirname "$0")"
export PATH="$HOME/.bun/bin:$PATH"

git pull --ff-only

cd web
bun install --frozen-lockfile

# Refuse to ship with known high/critical advisories.
bun audit --audit-level=high

# Build into a fresh directory so a failed build never leaves a half-written site live.
rm -rf .next out out.new
bun run build
mv out out.new
[ -f out.new/index.html ] && [ -f out.new/id/index.html ] || { echo "build is missing a language" >&2; exit 1; }
rm -rf out.prev
[ -d out.live ] && mv out.live out.prev
mv out.new out.live

echo "Deployed $(git rev-parse --short HEAD)"
