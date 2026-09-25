import test from 'node:test';
import assert from 'node:assert/strict';
import { collectRouteFiles,routeFromPage } from './m5-route-identity.mjs';
const allowed=new Set(['/journal/[caseId]','/journal/new','/admin/commercial/users/[userId]']);
const file=route=>'apps/frontend/app/(app)'+route+'/page.tsx';
test('canonical dynamic and static siblings remain three distinct routes',()=>{
 const map=collectRouteFiles([...allowed].map(file),allowed);
 assert.deepEqual([...map.keys()],[...allowed]);
 assert.equal(routeFromPage(file('/journal/[caseId]')),'/journal/[caseId]');
});
test('concrete fixture IDs and undocumented routes never count as canonical pages',()=>{
 for(const route of ['/journal/fixture-123','/admin/commercial/users/test-user','/admin/new-fiction']) assert.throws(()=>collectRouteFiles([file(route)],allowed),/outside canonical/);
});
test('route groups and parameter renames cannot create collisions',()=>{
 assert.throws(()=>collectRouteFiles([file('/journal/new'), 'apps/frontend/app/(public)/journal/new/page.tsx'],allowed),/Duplicate/);
 const expanded=new Set([...allowed,'/journal/[id]']);
 assert.throws(()=>collectRouteFiles([file('/journal/[caseId]'),file('/journal/[id]')],expanded),/ambiguous/);
});
