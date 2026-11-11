import plugin, { installReact } from './client.jsx';

window.__ModuleLoader__.load({
  id: 'aerolab-cfd',
  factory(require) {
    installReact(require('react'));
    return plugin;
  },
});
