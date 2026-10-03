import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { workspace, envelope, agenda } from '../../features/workspace/projection.ts';
const fixture=JSON.parse(readFileSync(new URL('../../../../contracts/backend/mocks/workspace-current.json',import.meta.url),'utf8'));
test('canonical workspace projection renders supplied truth without recalculation',()=>{
 const view=workspace(envelope(fixture)?.snapshot);assert(view);assert.equal(view.generatedAt,fixture.data.snapshot.summary.generatedAt);assert.equal(view.healthState,fixture.data.snapshot.summary.healthState);assert.deepEqual(view.portfolio,{activeWatchlistCount:4,activePositionCount:1,openActionCount:2,criticalActionCount:0});assert.equal(view.agenda.length,fixture.data.snapshot.summary.agenda.length);
});
test('missing or wrong-type projections remain invalid rather than empty or zero',()=>{
 assert.equal(workspace({}),null);assert.equal(envelope({ok:false,data:{}}),null);assert.equal(agenda([{}]),null);
 const changed=structuredClone(fixture.data.snapshot);changed.summary.portfolio.activePositionCount='1';assert.equal(workspace(changed),null);
});
