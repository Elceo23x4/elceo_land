import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {journalAnalyticsProjection,journalInfluenceProjection} from '../../features/journal/analysis-projection.ts';
import {journalReplayProjection} from '../../features/journal/projection.ts';
import {parseAction,actionsByStatus} from '../../features/journal/lifecycle.ts';
const fixture=(name:string)=>JSON.parse(readFileSync(new URL(`./fixtures/${name}.json`,import.meta.url),'utf8'));
const canonical=JSON.parse(readFileSync(new URL('../../../../contracts/backend/mocks/journal-cases-list.json',import.meta.url),'utf8')).data.cases[0];
test('dedicated legacy analytics preserves service units/order/zero and rejects envelope substitution',()=>{
 const raw=fixture('analytics'),v=journalAnalyticsProjection(raw);assert.ok(v);assert.equal(v.totals.winRate,50);assert.equal(v.worstMonth,null);assert.equal(v.biasViolationRate,0);assert.equal(journalAnalyticsProjection({ok:true,data:raw}),null);
 for(const value of [null,undefined,'0',NaN]){const bad=structuredClone(raw);bad.performance.totalTrades=value;assert.equal(journalAnalyticsProjection(bad),null);}
 const empty=structuredClone(raw);empty.performance.totalTrades=0;empty.performance.bestMonth=null;assert.equal(journalAnalyticsProjection(empty)?.totals.totalTrades,0);
});
test('influence null averages survive; private identity and unknown payloads do not project',()=>{
 const raw=fixture('influence'),v=journalInfluenceProjection(raw);assert.ok(v);assert.equal(v.directions[0].winRate,null);assert.equal(v.setups[0].avgRMultiple,null);assert.equal(v.setups[0].influenceScore,0);assert.ok(!JSON.stringify(v).includes('private-subject'));
 for(const key of ['avgRMultiple','sampleCount']){const bad=structuredClone(raw);delete bad.summary.setupPatterns[0][key];assert.equal(journalInfluenceProjection(bad),null);}
 const bad=structuredClone(raw);bad.summary.setupPatterns[0].executionQualityBreakdown={disciplined:'1'};assert.equal(journalInfluenceProjection(bad),null);assert.equal(journalInfluenceProjection(null),null);
});
test('replay projects returned history only; does not expose raw actor or snapshot data',()=>{
 const revision={revisionId:'r1',caseId:canonical.identity.caseId,revisionType:'planned',previousStatus:'draft',nextStatus:'planned',changedAt:'2026-09-30T10:00:00Z',summary:'Recorded plan',changedById:'private-actor',snapshotJson:'private-snapshot'};
 const raw={caseData:canonical,revisions:[revision]};const v=journalReplayProjection(raw,canonical.identity.caseId);assert.ok(v);assert.equal(v[0].summary,'Recorded plan');assert.ok(!JSON.stringify(v).includes('private'));assert.equal(journalReplayProjection(raw,'another-owner-case'),null);assert.deepEqual(journalReplayProjection({...raw,revisions:[]},canonical.identity.caseId),[]);assert.equal(journalReplayProjection({...raw,revisions:[{}]},canonical.identity.caseId),null);
});
const form=(values:Record<string,string>)=>{const data=new FormData();for(const [k,v]of Object.entries(values))data.set(k,v);return data;};
test('lifecycle parser preserves explicit zero/negative numbers, UTC and lists; omits blank and injected authority',()=>{
 assert.deepEqual(parseAction('execute',form({openedAt:'2026-09-30T10:25',entryPriceExecuted:'0',positionSize:'',subjectId:'attacker'})),{openedAt:'2026-09-30T10:25Z',entryPriceExecuted:0});
 assert.deepEqual(parseAction('close',form({closedAt:'2026-09-30T12:00',outcome:'loss',pnlAmount:'-120'})),{closedAt:'2026-09-30T12:00Z',outcome:'loss',pnlAmount:-120});
 assert.deepEqual(parseAction('review',form({reviewedAt:'2026-09-30T14:00',lessons:'Wait\nReview',caseId:'invented'})),{reviewedAt:'2026-09-30T14:00Z',lessons:['Wait','Review']});
 assert.deepEqual(parseAction('plan',form({takeProfitPlanned:'2300\n2400'})),{takeProfitPlanned:[2300,2400]});
});
test('required times/closed outcome and finite fields cannot be bypassed',()=>{
 assert.throws(()=>parseAction('execute',form({})));assert.throws(()=>parseAction('review',form({reviewedAt:'yesterday'})));assert.throws(()=>parseAction('close',form({closedAt:'2026-09-30T12:00',outcome:'open'})));assert.throws(()=>parseAction('adjust',form({positionSize:'Infinity'})));assert.throws(()=>parseAction('plan',form({direction:'other'})));
});
test('display eligibility exactly mirrors frozen transitions, without inventing a next action',()=>{
 assert.deepEqual(actionsByStatus.draft,['plan','cancel']);assert.deepEqual(actionsByStatus.planned,['execute','cancel']);assert.deepEqual(actionsByStatus.executed,['adjust','partial-close','close']);assert.deepEqual(actionsByStatus.partially_closed,['adjust','close']);assert.deepEqual(actionsByStatus.closed,['review']);assert.deepEqual(actionsByStatus.canceled,['review']);assert.deepEqual(actionsByStatus.reviewed,[]);assert.equal(actionsByStatus.unknown,undefined);
});
