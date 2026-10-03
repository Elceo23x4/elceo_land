import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {analyticsProjection,coachingProjection} from '../../features/review/projection.ts';
const fixture=(name:string)=>JSON.parse(readFileSync(new URL(`../../../../contracts/backend/mocks/${name}-latest.json`,import.meta.url),'utf8')).data.snapshot;
test('canonical analytics and coaching projections preserve server values and cautions',()=>{
 const a=analyticsProjection(fixture('analytics')),c=coachingProjection(fixture('coaching'));assert(a&&c);assert.equal(a.closed,18);assert.equal(a.reviewed,16);assert.equal(a.confidence[0],'Sample size remains limited for setup-level conclusions.');assert.equal(c.focus[0].headline,'Require confirmation before entry');assert.equal(c.actions[0].successMetric,fixture('coaching').summary.actionPlan[0].successMetric);
});
test('invalid review projections do not turn into zero metrics or invented insight',()=>{
 assert.equal(analyticsProjection({}),null);assert.equal(coachingProjection(null),null);const v=fixture('analytics');v.summary.totals.closedCaseCount='18';assert.equal(analyticsProjection(v),null);
});
