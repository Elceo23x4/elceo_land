import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateResources, evaluateResourceJourney } from './m5-resource-policy.mjs';
const samples = (heap, nodes = heap.map(()=>1000), listeners=heap.map(()=>80)) => heap.map((h,i)=>({heap:h*1024*1024,nodes:nodes[i],listeners:listeners[i]}));
test('old spread-safe sustained heap retention is rejected',()=>{
 assert.equal(evaluateResources(samples([100,100,100,101,102,103,104])).pass,false);
 assert.equal(evaluateResources(samples([100,100,100,100.1,100.2,100.3,100.4])).pass,false);
});
test('node and listener retention are independently rejected',()=>{
 assert.equal(evaluateResources(samples(Array(7).fill(100),[1000,1000,1000,1003,1006,1009,1012])).pass,false);
 assert.equal(evaluateResources(samples(Array(7).fill(100),undefined,[80,80,80,81,82,83,84])).pass,false);
});
test('bounded non-monotonic post-GC noise passes',()=>{
 assert.equal(evaluateResources(samples([100,100.2,99.9,100.1,100,100.05,100])).pass,true);
});
test('missing and nonfinite counters fail closed',()=>{
 assert.throws(()=>evaluateResources([]));
 assert.throws(()=>evaluateResources(samples([100,100,100,NaN,100,100,100])));
});

test('fixed warm-up cannot conceal retained resources or omit samples',()=>{
 assert.throws(()=>evaluateResourceJourney(samples(Array(8).fill(100))));
 assert.equal(evaluateResourceJourney(samples([100,103,103,103,103,103,103,103,103])).pass,false);
 assert.equal(evaluateResourceJourney(samples([100,103,100,100,100,100,100,100,100])).pass,false);
 assert.equal(evaluateResourceJourney(samples([100,100.2,100.3,100.4,100.5,100.6,100.7,100.8,100.9])).pass,false);
 assert.equal(evaluateResourceJourney(samples([100,100.3,100.5,100.55,100.5,100.54,100.52,100.55,100.53])).pass,true);
});
