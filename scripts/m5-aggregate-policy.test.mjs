import test from 'node:test';
import assert from 'node:assert/strict';
import { requirements,evaluateAggregate } from './m5-aggregate-policy.mjs';
const head='a'.repeat(40), old='b'.repeat(40);
const fixture=()=>{
 const runs=requirements.map(([file],i)=>({id:i+1,head_sha:head,event:'pull_request',path:`.github/workflows/${file}`,status:'completed',conclusion:'success',run_attempt:1}));
 const jobs=Object.fromEntries(requirements.map(([,name,steps],i)=>[i+1,[{id:100+i,run_id:i+1,head_sha:head,name,status:'completed',conclusion:'success',steps:steps.map(name=>({name,status:'completed',conclusion:'success'}))}]]));
 return {expected:head,current:head,runs,jobs};
};
test('all seven complete exact-head jobs/steps produce evidence identities',()=>{
 const result=evaluateAggregate(fixture());assert.equal(result.state,'success');assert.equal(result.evidence.length,7);
});
test('prior SHA success and moved PR heads cannot pass',()=>{
 const f=fixture();f.runs[0].head_sha=old;assert.equal(evaluateAggregate(f).state,'pending');
 f.current=old;assert.equal(evaluateAggregate(f).state,'failure');
});
test('newer queued/failing run supersedes prior green same-head run',()=>{
 const f=fixture();f.runs.push({...f.runs[0],id:100,status:'in_progress',conclusion:null});assert.equal(evaluateAggregate(f).state,'pending');
 f.runs.at(-1).status='completed';f.runs.at(-1).conclusion='failure';assert.equal(evaluateAggregate(f).state,'failure');
});
test('skipped steps/jobs, wrong job SHA, missing jobs, and partial reruns fail closed',()=>{
 for(const mutation of [f=>f.jobs[1][0].steps[0].conclusion='skipped',f=>f.jobs[1][0].conclusion='skipped',f=>f.jobs[1][0].head_sha=old,f=>f.jobs[1]=[],f=>{f.runs[0].run_attempt=2;f.jobs[1]=[];}]) {
  const f=fixture();mutation(f);assert.equal(evaluateAggregate(f).state,'failure');
 }
});
test('push evidence or differently named workflow cannot impersonate PR validation',()=>{
 const f=fixture();f.runs[0].event='push';assert.equal(evaluateAggregate(f).state,'pending');
 f.runs[0].event='pull_request';f.runs[0].path='.github/workflows/lookalike.yml';assert.equal(evaluateAggregate(f).state,'pending');
});
