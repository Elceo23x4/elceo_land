import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {journalCaseProjection} from '../../features/journal/projection.ts';
const fixture=JSON.parse(readFileSync(new URL('../../../../contracts/backend/mocks/journal-cases-list.json',import.meta.url),'utf8'));
test('canonical journal case values stay recorded values with nulls intact',()=>{
 const v=journalCaseProjection(fixture.data.cases[0]);assert.ok(v);assert.equal(v.title,'Gold real-yield continuation');assert.equal(v.closure.pnlAmount,null);assert.equal(v.plan.entryPricePlanned,2308);assert.equal(v.status,'planned');
});
test('invalid journal payloads do not become empty or synthesized cases',()=>{
 assert.equal(journalCaseProjection({}),null);const bad=structuredClone(fixture.data.cases[0]);bad.closure.pnlAmount='120';assert.equal(journalCaseProjection(bad),null);bad.closure.pnlAmount=NaN;assert.equal(journalCaseProjection(bad),null);
});
