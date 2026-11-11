#!/usr/bin/env node
/**
 * Load the committed client bundle in a browser-like VM and call the plugin
 * activation path. This catches missing imports/undefined activation symbols
 * that a visual build alone cannot see.
 */
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const requireFromTools = createRequire(path.join(here, 'package.json'));
const React = requireFromTools('react');
let loaded = null;

const window = {
  devicePixelRatio: 1,
  innerWidth: 1400,
  addEventListener() {},
  removeEventListener() {},
  __ModuleLoader__: {
    load(definition) {
      loaded = definition;
    },
  },
};

const document = {
  createElement() {
    return {
      style: {},
      appendChild() {},
      addEventListener() {},
      getContext() {
        return {
          createRadialGradient() { return { addColorStop() {} }; },
          createLinearGradient() { return { addColorStop() {} }; },
          fillRect() {},
          clearRect() {},
          fillText() {},
        };
      },
    };
  },
  body: { appendChild() {}, removeChild() {} },
};

const context = vm.createContext({
  window,
  document,
  console,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  requestAnimationFrame: (fn) => setTimeout(() => fn(0), 16),
  cancelAnimationFrame: clearTimeout,
  URL,
  Blob: class {},
  AbortController,
  AbortSignal,
  TextEncoder,
  TextDecoder,
  performance,
  navigator: { userAgent: 'node' },
  self: window,
});

const bundle = fs.readFileSync(path.join(here, '..', 'client.js'), 'utf8');
vm.runInContext(bundle, context, { filename: 'client.js' });
if (!loaded || loaded.id !== 'aerolab-cfd') throw new Error('client entry did not call the DSH module loader');

const plugin = loaded.factory((name) => {
  if (name === 'react') return React;
  throw new Error(`Unexpected external module: ${name}`);
});
if (!plugin || typeof plugin.apply !== 'function') throw new Error('client factory did not return a plugin');

const slots = [];
const ctx = {
  effect(fn) { return fn(); },
  locale: {
    register() { return () => {}; },
    bind() { return (key) => key; },
    subscribe() { return () => {}; },
  },
  slots: {
    inject(name, fn) { fn(); },
    register(options, component) { slots.push({ options, component }); return () => {}; },
  },
};

plugin.apply(ctx);
const ids = slots.map((entry) => entry.options.id);
if (!ids.includes('aerolab-cfd-launcher') || !ids.includes('aerolab-cfd-app')) {
  throw new Error(`Unexpected slot registrations: ${ids.join(', ')}`);
}
console.log(`Activation smoke passed: ${ids.join(', ')}`);
