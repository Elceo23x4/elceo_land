import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { assertRepositoryBoundaries } from './m5-boundary-lib.mjs';
import './m5-boundaries.test.mjs';
const read = p => readFileSync(p, 'utf8');
const originalM1Base = '55485325ea086c02fc45f0e37b4128e8bf3937af';
const m4PhaseBase = '2a6d34cda00c5979581b3d3eb4eb192830945803';
function walk(p) { return readdirSync(p,{withFileTypes:true}).flatMap(e => e.name === '.next' || e.name === 'node_modules' ? [] : e.isDirectory() ? walk(`${p}/${e.name}`) : [`${p}/${e.name}`]); }
test('original M1 implementation and frozen authorities remain byte unchanged', () => {
 assert.equal(execFileSync('git',['diff',originalM1Base,'--','src','vite.config.ts','index.html','tsconfig.json','contracts/backend','docs/backend-contract'],{encoding:'utf8'}),'');
});
test('all original reference files remain byte unchanged; approved additions are exact and hash-pinned', () => {
 const original = execFileSync('git',['ls-tree','-r','--name-only',originalM1Base,'--','docs/design/references'],{encoding:'utf8'}).trim().split('\n');
 assert(original.length && original.every(p=>p.startsWith('docs/design/references/')));
 assert.equal(execFileSync('git',['diff',originalM1Base,'--',...original],{encoding:'utf8'}),'');
 const additions=JSON.parse(read('docs/design/M5_LANDING_ASSET_PREFLIGHT.json')).assets;
 assert.equal(additions.length,12);
 const paths=additions.map(a=>a.repository_path);
 assert.equal(new Set(paths).size,paths.length);
 assert.deepEqual(walk('docs/design/references').sort(),[...original,...paths].sort(),'Unregistered reference addition/removal');
 for(const asset of additions) {
  assert(/^docs\/design\/references\/m5-landing\/(?:layer-sources\/)?[a-z0-9-]+\.png$/.test(asset.repository_path));
  const bytes=readFileSync(asset.repository_path);
  assert.equal(bytes.length,asset.bytes);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256,asset.repository_path);
 }
});
test('legacy public tree remains byte unchanged from the accepted M4 phase base', () => {
 assert.equal(execFileSync('git',['diff',m4PhaseBase,'--','public'],{encoding:'utf8'}),'');
});
test('source SVG URL proof preserves exact original bytes', () => {
 assert.deepEqual(readFileSync('apps/frontend/public/m1-assets/arrow-up.svg'),readFileSync('src/assets/source/dashboard/arrows/elceo-svg-14-arrow-up.svg'));
});
test('candidate keeps reviewed client ownership and only reviewed frontend mediation routes', () => {
 assertRepositoryBoundaries();
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
 assertRepositoryBoundaries();
});
