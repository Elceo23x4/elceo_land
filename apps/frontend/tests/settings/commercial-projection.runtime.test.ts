import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {billingProjection,entitlementProjection,intentionProjection,safeCommercialUrl} from '../../features/settings/commercial-projection.ts';
const fixture=(name:string)=>JSON.parse(readFileSync(new URL(`../../../../contracts/backend/mocks/${name}.json`,import.meta.url),'utf8'));
test('canonical billing and entitlement snapshots remain separate truths',()=>{
 const billing=billingProjection(fixture('account-billing').data.snapshot),entitlement=entitlementProjection(fixture('account-entitlements').data);assert.ok(billing);assert.equal(billing.subscription?.state,'active');assert.equal(entitlement?.plan,'premium');assert.ok(entitlement?.allowed.includes('workspace.read'));assert.equal(billingProjection({}),null);assert.equal(entitlementProjection({}),null);
});
test('payment success never implies entitlement and unknown state stays unknown',()=>{
 const value={intention:{operationId:'controlled',paymentState:'succeeded',subscriptionState:null,commercialAccessActive:false,checkoutContinuationAvailable:false,checkoutUrl:null,reconciliationRequired:true,newIntentionAllowed:false,billingManagementRequired:false}};
 const v=intentionProjection(value);assert.equal(v?.kind,'recorded');if(v?.kind==='recorded'){assert.equal(v.commercialAccessActive,false);assert.equal(v.reconciliationRequired,true);}
 value.intention.paymentState='unrecognized';const unknown=intentionProjection(value);assert.equal(unknown?.kind==='recorded'&&unknown.paymentState,'unrecognized');assert.equal(intentionProjection({intention:null}),null);
});
test('commercial navigation rejects script, credentials and insecure URLs',()=>{
 for(const url of ['javascript:alert(1)','http://billing.example.test','https://user:secret@billing.example.test','//billing.example.test'])assert.equal(safeCommercialUrl(url),null);
 assert.equal(safeCommercialUrl('https://billing.example.test/session'),'https://billing.example.test/session');
});
