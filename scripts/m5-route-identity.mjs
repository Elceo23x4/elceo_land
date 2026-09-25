import assert from 'node:assert/strict';
import path from 'node:path';
export function routeFromPage(file, root='apps/frontend/app') {
  const relative=path.posix.relative(root,path.posix.dirname(file));
  assert(!relative.startsWith('..'), 'Page outside app root');
  return '/' + relative.split('/').filter(s=>s && !/^\(.+\)$/.test(s)).join('/');
}
export function collectRouteFiles(files, canonicalRoutes, root='apps/frontend/app') {
  const routes=new Map(), shapes=new Set();
  for(const file of files) {
    const route=routeFromPage(file,root);
    assert(canonicalRoutes.has(route) || route==='/m1-proof', `Route outside canonical product inventory: ${route}`);
    const shape=route.replace(/\[[^\]]+\]/g,'[]');
    assert(!routes.has(route) && !shapes.has(shape), `Duplicate or ambiguous route files: ${route}`);
    routes.set(route,file);shapes.add(shape);
  }
  return routes;
}
