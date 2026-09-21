import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { checkBoundaries, assertRepositoryBoundaries } from './m5-boundary-lib.mjs';

const client = 'apps/frontend/features/example/Disclosure.tsx';
const motion = 'apps/frontend/features/landing/motion/scenes.ts';
const boundary = path => ({ path, purpose: 'Narrow interaction.', authority: 'Presentation only; server remains authoritative.' });
const register = { clients: [boundary(client)], landingMotionOwners: [] };
const check = (entries, registry = register) => checkBoundaries(new Map(entries), registry);

test('M5 actual client boundaries and landing motion ownership remain reviewable', assertRepositoryBoundaries);
test('reviewed narrow client additions are allowed, including directives after comments', () => {
  assert.deepEqual(check([[client, '/* reviewed */\n"use client";\nexport const value = 1;']]), []);
});
test('unregistered, stale, duplicate and undocumented clients fail', () => {
  const source = [[client, '"use client";']];
  assert.match(check(source, { ...register, clients: [] }).join('\n'), /Unreviewed/);
  assert.match(check([]).join('\n'), /Stale/);
  assert.match(check(source, { ...register, clients: [boundary(client), boundary(client)] }).join('\n'), /Duplicate/);
  assert.match(check(source, { ...register, clients: [{ path: client }] }).join('\n'), /purpose and authority/);
});
test('client route families remain prohibited even when registered', () => {
  for (const name of ['page', 'layout', 'template']) {
    const file = `apps/frontend/app/(app)/${name}.tsx`;
    assert.match(check([[file, '"use client";']], { ...register, clients: [boundary(file)] }).join('\n'), /server-owned/);
  }
});
test('inherited secret, cookie and substitute authority prohibitions apply to transitive helpers', () => {
  for (const token of ['NEXT_PUBLIC_SECRET','x-elceo-internal-token','ELCEO_BACKEND_ORIGIN','ELCEO_PUBLIC_APP_ORIGIN','ELCEO_INTERNAL_API_TOKEN','AUTH_SECRET','localStorage','sessionStorage','document.cookie', 'document["cookie"]', 'cookieStore','NextAuth({})','decodeJwt','jwtDecode','authjs.session-token']) {
    assert.match(check([
      [client, '"use client"; import "./helper";'],
      ['apps/frontend/features/example/helper.ts', token.startsWith('document') ? `void ${token};` : `export const value = ${JSON.stringify(token)};`],
    ]).join('\n'), /Forbidden client authority/, token);
  }
});
test('server-only authority is forbidden through re-exports, dynamic imports and require', () => {
  for (const use of ['import "./barrel";', 'import("./barrel");', 'require("./barrel");']) {
    assert.match(check([
      [client, `"use client"; ${use}`],
      ['apps/frontend/features/example/barrel.ts', 'export * from "./secret";'],
      ['apps/frontend/features/example/secret.ts', 'import "server-only"; export const secret = 1;'],
    ]).join('\n'), /Server authority/);
  }
  assert.match(check([[client, '"use client"; import(path);']]).join('\n'), /Unreviewable/);
});
test('erased type-only references do not import a server implementation', () => {
  assert.deepEqual(check([
    [client, '"use client"; import type { Value } from "./secret"; export type { Value };'],
    ['apps/frontend/features/example/secret.ts', 'import "server-only"; export type Value = string;'],
  ]), []);
});
test('positive M5 proof: only registered landing motion may use ScrollTrigger', () => {
  const registry = { clients: [], landingMotionOwners: [{ path: motion, purpose: 'Landing scene choreography.' }] };
  assert.deepEqual(check([
    [motion, 'import { ScrollTrigger } from "gsap/ScrollTrigger"; void ScrollTrigger;'],
    ['apps/frontend/app/(public)/page.tsx', 'import "../../features/landing/motion/scenes";'],
  ], registry), []);
  assert.match(check([[motion, 'import "gsap/ScrollTrigger";']], { clients: [], landingMotionOwners: [] }).join('\n'), /outside reviewed/);
});
test('dashboard and application graphs cannot reach a registered landing owner through a barrel', () => {
  const registry = { clients: [], landingMotionOwners: [{ path: motion, purpose: 'Landing choreography.' }] };
  for (const root of ['apps/frontend/features/dashboard/bridge.ts', 'apps/frontend/app/(app)/dashboard/page.tsx','apps/frontend/features/journal/view.ts', 'apps/frontend/app/admin/page.tsx','apps/frontend/app/layout.tsx','src/dashboard/bridge.ts']) {
    const relative = path.posix.relative(path.posix.dirname(root), 'apps/frontend/shared');
    const errors = check([
      [root, `import "${relative}";`],
      ['apps/frontend/shared.ts', 'export * from "./features/landing/motion/scenes";'],
      [motion, 'import "gsap/ScrollTrigger";'],
    ], registry);
    assert.ok(errors.includes(`Non-public graph reaches ScrollTrigger: ${root} -> ${motion}`), errors.join('\n'));
  }
});
test('static, dynamic, require, re-export, dist and gsap/all imports remain forbidden outside landing', () => {
  for (const source of ['import "gsap/ScrollTrigger";', 'import("gsap/ScrollTrigger");', 'require("gsap/dist/ScrollTrigger.js");', 'export * from "gsap/ScrollTrigger";', 'import { gsap } from "gsap/all";']) {
    assert.match(check([['src/dashboard/bridge.ts', source]], { clients: [], landingMotionOwners: [] }).join('\n'), /outside reviewed/);
  }
});
