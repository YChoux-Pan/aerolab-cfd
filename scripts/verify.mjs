#!/usr/bin/env node
/**
 * Offline repository verification for AeroLab CFD.
 * Visual/WebGL acceptance remains manual.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checks = [];
function check(name, condition, detail = '') {
  checks.push({ name, pass: Boolean(condition), detail });
}
function read(file) { return fs.readFileSync(path.join(root, file), 'utf8'); }
function exists(file) { return fs.existsSync(path.join(root, file)); }
function json(file) { return JSON.parse(read(file)); }

const required = [
  'README.md', 'LICENSE', 'CHANGELOG.md', 'ROADMAP.md', 'CONTRIBUTING.md', 'SECURITY.md',
  'docs/installation.md', 'docs/architecture.md', 'docs/preview-model.md', 'docs/deployment.md', 'docs/validation.md',
  'plugin/package.json', 'plugin/client.js', 'plugin/index.js', 'plugin/cordis.patch.yml', 'plugin/icon.svg',
  'plugin/locale/en.json', 'plugin/locale/zh.json', 'plugin/source/entry.jsx', 'plugin/source/client.jsx',
  'plugin/source/scene.js', 'plugin/source/models.js', 'plugin/source/importers.js', 'plugin/source/solver.js',
  'plugin/tools/build.mjs', 'plugin/tools/package.json', 'scripts/package-plugin.mjs',
];
for (const file of required) check(`required file: ${file}`, exists(file));

let pkg = {};
try {
  pkg = json('plugin/package.json');
  check('package name', pkg.name === 'aerolab-cfd', pkg.name);
  check('package version', /^\d+\.\d+\.\d+$/.test(pkg.version), pkg.version);
  check('package is DSH client', pkg.dsh?.client?.platform === 'web' && Boolean(pkg.dsh?.bundle?.patch));
  check('client export', pkg.exports?.['./client'] === './client.js');
  check('runtime files declared', ['client.js', 'index.js', 'cordis.patch.yml', 'locale/*.json', 'icon.svg'].every((entry) => pkg.files?.includes(entry)));
} catch (error) {
  check('package JSON parses', false, error.message);
}

let client = '';
try { client = read('plugin/client.js'); } catch { /* reported */ }
check('client bundle uses module loader', client.includes('__ModuleLoader__.load'));
check('client bundle uses AeroLab id', client.includes('aerolab-cfd'));
check('client bundle is non-trivial', client.length > 100000, `${client.length} bytes`);
check('client bundle does not inline React', !client.includes('react-dom.production') && !client.includes('react.production'));
check('client bundle contains scene code', client.includes('STEADY RANS') || client.includes('CfdScene') || client.includes('streamlines'));

let en = {};
let zh = {};
try {
  en = json('plugin/locale/en.json');
  zh = json('plugin/locale/zh.json');
  check('locale key parity', JSON.stringify(Object.keys(en).sort()) === JSON.stringify(Object.keys(zh).sort()));
  check('locale metadata', Boolean(en.meta?.title && zh.meta?.title && en.meta?.description && zh.meta?.description));
} catch (error) {
  check('locale JSON parses', false, error.message);
}

for (const src of ['plugin/source/client.jsx', 'plugin/source/scene.js', 'plugin/source/solver.js']) {
  const text = read(src);
  check(`${src} mentions preview boundary`, /preview|预览|CFD/i.test(text));
}
check('STL importer declared', read('plugin/source/importers.js').includes('STLLoader'));
check('README documents deployment', read('README.md').includes('git clone') && read('README.md').includes('plugin'));
check('docs document preview limitation', read('docs/preview-model.md').includes('not') || read('docs/preview-model.md').includes('不'));

const skip = new Set(['node_modules', '.git', 'dist']);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skip.has(entry.name)) continue;
      walk(path.join(dir, entry.name));
    } else if (/\.(md|json|js|jsx|mjs|yml|yaml|ps1|sh|txt)$/.test(entry.name)) {
      const rel = path.relative(root, path.join(dir, entry.name));
      const text = fs.readFileSync(path.join(dir, entry.name), 'utf8');
      if (/[A-Za-z]:\\\\?(DSH|Users)/i.test(text)) check(`no absolute local path: ${rel}`, false);
    }
  }
}
try { walk(root); } catch (error) { check('text path scan', false, error.message); }

const failed = checks.filter((entry) => !entry.pass);
console.log(`AeroLab CFD verification: ${checks.length - failed.length}/${checks.length} checks passed.`);
if (failed.length) {
  console.error('\nFailures:');
  for (const entry of failed) console.error(`- ${entry.name}${entry.detail ? `: ${entry.detail}` : ''}`);
  process.exitCode = 1;
} else {
  console.log('All automated checks passed. Visual/WebGL acceptance is manual.');
}
