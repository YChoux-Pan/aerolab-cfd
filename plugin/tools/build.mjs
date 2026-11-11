import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const pluginDir = path.resolve(here, '..');
const nodeModules = path.join(here, 'node_modules');

await build({
  absWorkingDir: pluginDir,
  entryPoints: [path.join(pluginDir, 'source', 'entry.jsx')],
  outfile: path.join(pluginDir, 'client.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome110', 'edge110'],
  jsx: 'transform',
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  external: ['react'],
  minify: true,
  legalComments: 'eof',
  nodePaths: [nodeModules],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  logLevel: 'info',
});

console.log('Built client.js');
