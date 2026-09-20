import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const read = p => readFileSync(p, 'utf8');
const base = '55485325ea086c02fc45f0e37b4128e8bf3937af';
function walk(p) { return readdirSync(p,{withFileTypes:true}).flatMap(e => e.name === '.next' || e.name === 'node_modules' ? [] : e.isDirectory() ? walk(`${p}/${e.name}`) : [`${p}/${e.name}`]); }
test('legacy implementation and frozen authorities are byte unchanged', () => {
 assert.equal(execFileSync('git',['diff',base,'--','src','public','vite.config.ts','index.html','tsconfig.json','contracts/backend','docs/backend-contract','docs/design/references'],{encoding:'utf8'}),'');
});
test('source SVG URL proof preserves exact original bytes', () => {
 assert.deepEqual(readFileSync('apps/frontend/public/m1-assets/arrow-up.svg'),readFileSync('src/assets/source/dashboard/arrows/elceo-svg-14-arrow-up.svg'));
});
test('candidate has narrow client ownership and no backend implementation', () => {
 const files=walk('apps/frontend').filter(p=>/\.(tsx?|css)$/.test(p)&&!p.endsWith('.d.ts'));
 const client=files.filter(p=>/^[\"']use client[\"']/.test(read(p)));
 assert.deepEqual(client,[
  'apps/frontend/app/m1-proof/M2BrowserClientProof.tsx',
  'apps/frontend/components/primitives/ScopedPortal.tsx',
 ]);
 for(const p of files.filter(p=>!p.includes('/lib/contracts/generated/'))) assert.doesNotMatch(read(p),/NEXT_PUBLIC_|x-elceo-internal-token|process\.env|localStorage|fetch\(/,p);
 assert.equal(walk('apps/frontend/app/api').filter(p=>/route\.[jt]s$/.test(p)).length,0);
 assert.match(read('apps/frontend/lib/api/server.ts'),/import 'server-only'/);
 assert.doesNotMatch(read('apps/frontend/app/layout.tsx'),/src\/|providers|use client/);
});
test('production browser bundles contain no internal authority or legacy runtime', () => {
 const files=walk('apps/frontend/.next/static').filter(p=>p.endsWith('.js'));
 assert.ok(files.length);
 for (const p of files) assert.doesNotMatch(read(p),/x-elceo-internal-token|ELCEO_INTERNAL_TOKEN|M1_SECRET_SENTINEL|lightweight-charts|ScrollTrigger/,p);
});
