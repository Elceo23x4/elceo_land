import {test,expect} from '@playwright/test';
import {execFileSync} from 'node:child_process';
import {createResourceDriver} from './resource-driver';
import {evaluateResourceJourney,resourcePolicy} from '../../../../scripts/m5-resource-policy.mjs';
test('ordinary and Admin journeys settle under the unchanged resource policy',async({page,context},info)=>{
 test.setTimeout(180000);await context.addCookies([{name:'m5-admin-role',value:'super_admin',url:'http://127.0.0.1:3102'}]);await page.goto('http://127.0.0.1:3102/admin');const session=await context.newCDPSession(page);await session.send('Performance.enable');await session.send('HeapProfiler.enable');const driver=await createResourceDriver(session,'a[href]');const samples=[];
 try{for(let i=0;i<resourcePolicy.warmupJourneys+resourcePolicy.repeats;i++){
  await driver.navigate('/admin/providers','Provider capability');await driver.navigate('/admin/audit','Audit timeline');await driver.navigate('/workspace','Your working context');await driver.button('Account');await driver.close();await driver.button('Data freshness');await driver.close();await driver.navigate('/journal','Keep the reasoning.');await driver.navigate('/portfolio','Keep context beside the record.');await driver.navigate('/analytics','Review the pattern.');await driver.navigate('/coaching','Turn review into practice.');await driver.button('Account');await driver.navigate('/admin','System health');
  await page.waitForTimeout(resourcePolicy.idleMs);await session.send('HeapProfiler.collectGarbage');await driver.frames();await session.send('HeapProfiler.collectGarbage');const metrics=await session.send('Performance.getMetrics'),dom=await session.send('Memory.getDOMCounters');samples.push({heap:metrics.metrics.find(m=>m.name==='JSHeapUsedSize')?.value??0,nodes:dom.nodes,listeners:dom.jsEventListeners});
 }const result=evaluateResourceJourney(samples),evidence={head:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),documentContinuityVerified:true,samples,...result};console.log('M5_APPLICATION_RESOURCE:'+JSON.stringify(evidence));await info.attach('application-journey-resources',{body:JSON.stringify(evidence,null,2),contentType:'application/json'});expect(result.pass,JSON.stringify(result.counters)).toBe(true);
 }finally{await driver.dispose();await session.detach();}
});
