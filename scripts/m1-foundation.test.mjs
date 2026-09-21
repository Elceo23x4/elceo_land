import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const read = p => readFileSync(p, 'utf8');
const originalM1Base = '55485325ea086c02fc45f0e37b4128e8bf3937af';
const m4PhaseBase = '2a6d34cda00c5979581b3d3eb4eb192830945803';
function walk(p) { return readdirSync(p,{withFileTypes:true}).flatMap(e => e.name === '.next' || e.name === 'node_modules' ? [] : e.isDirectory() ? walk(`${p}/${e.name}`) : [`${p}/${e.name}`]); }
test('original M1 implementation and frozen authorities remain byte unchanged', () => {
 assert.equal(execFileSync('git',['diff',originalM1Base,'--','src','vite.config.ts','index.html','tsconfig.json','contracts/backend','docs/backend-contract','docs/design/references'],{encoding:'utf8'}),'');
});
test('legacy public tree remains byte unchanged from the accepted M4 phase base', () => {
 assert.equal(execFileSync('git',['diff',m4PhaseBase,'--','public'],{encoding:'utf8'}),'');
});
test('source SVG URL proof preserves exact original bytes', () => {
 assert.deepEqual(readFileSync('apps/frontend/public/m1-assets/arrow-up.svg'),readFileSync('src/assets/source/dashboard/arrows/elceo-svg-14-arrow-up.svg'));
});
test('candidate keeps reviewed client ownership and only reviewed frontend mediation routes', () => {
 const files=walk('apps/frontend').filter(p=>/\.(tsx?|css)$/.test(p)&&!p.endsWith('.d.ts'));
 const client=files.filter(p=>/^[\"']use client[\"']/.test(read(p)));
 assert.deepEqual(client,[
  'apps/frontend/app/(app)/dashboard/error.tsx',
  'apps/frontend/app/m1-proof/M2BrowserClientProof.tsx',
  'apps/frontend/components/primitives/ScopedPortal.tsx',
  'apps/frontend/features/dashboard/DashboardParityClient.tsx',
  'apps/frontend/lib/api/authenticated-browser.ts',
 ]);
 for(const p of client) assert.doesNotMatch(read(p),/NEXT_PUBLIC_|x-elceo-internal-token|ELCEO_(?:BACKEND|PUBLIC|INTERNAL)|AUTH_SECRET|localStorage|sessionStorage|document\.cookie/,p);
 const apiRoutes=walk('apps/frontend/app/api').filter(p=>/route\.[jt]s$/.test(p)).sort();
 assert.deepEqual(apiRoutes,[
  'apps/frontend/app/api/[...elceo]/route.ts',
  'apps/frontend/app/api/auth/[...nextauth]/route.ts',
 ]);
 assert.match(read('apps/frontend/lib/api/server.ts'),/import 'server-only'/);
 assert.match(read('apps/frontend/lib/auth/server.ts'),/import 'server-only'/);
 assert.doesNotMatch(read('apps/frontend/app/layout.tsx'),/src\/|providers|use client/);
});
test('production browser bundles contain no internal authority', () => {
 const files=walk('apps/frontend/.next/static').filter(p=>p.endsWith('.js'));
 assert.ok(files.length);
 for (const p of files) assert.doesNotMatch(read(p),/x-elceo-internal-token|ELCEO_INTERNAL_TOKEN|M1_SECRET_SENTINEL/,p);
});
test('dashboard migration sources contain no landing-only ScrollTrigger plugin import', () => {
 const files=[...walk('apps/frontend'),...walk('src/dashboard')]
  .filter(p=>/\.[cm]?[jt]sx?$/.test(p)&&!p.includes('/.next/')&&!p.includes('/node_modules/'));
 const pluginImport=/\bfrom\s*["']gsap\/(?:dist\/)?ScrollTrigger(?:\.js)?["']|\bimport\s*["']gsap\/(?:dist\/)?ScrollTrigger(?:\.js)?["']|\bScrollTrigger\b[\s\S]{0,120}\bfrom\s*["']gsap(?:\/all)?["']/u;
 for (const p of files) assert.doesNotMatch(read(p),pluginImport,p);
});
