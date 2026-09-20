import { fileURLToPath } from 'node:url';
export default {
  poweredByHeader: false,
  turbopack: {
    root: fileURLToPath(new URL('../../', import.meta.url)),
    rules: { '*.svg': { loaders: [{ loader: '@svgr/webpack', options: { svgo: false } }], as: '*.js' } },
  },
};
