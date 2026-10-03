import type { Browser } from '@playwright/test';
import { createResourceDriver } from './resource-driver';
import { heapCensus } from './resource-snapshot';
import { evaluateResourceJourney, resourcePolicy } from '../../../../scripts/m5-resource-policy.mjs';

/** Diagnostic controls only. Never replace the unmodified production acceptance
 * result with these numbers or take snapshots in its measured journey. */
export async function resourceControls(browser: Browser, origin: string) {
  const results = [];
  for (const mode of ['A-static', 'B-navigation', 'C-reduced', 'D-census'] as const) {
    const context = await browser.newContext({viewport:{width:1440,height:900},reducedMotion:mode==='C-reduced'?'reduce':'no-preference'});
    const page=await context.newPage();
    try {
      await page.goto(origin+(mode==='A-static'?'/about':''));
      const session=await context.newCDPSession(page);
      await session.send('Performance.enable'); await session.send('HeapProfiler.enable');
      const driver=await createResourceDriver(session);
      const samples=[];
      const census: Awaited<ReturnType<typeof heapCensus>>[]=[];
      for(let journey=0;journey<resourcePolicy.warmupJourneys+resourcePolicy.repeats;journey++) {
        if(mode==='C-reduced'||mode==='D-census') {
          await driver.scroll();await driver.pointer('[data-landing-lens-scope]');await driver.pointer('[data-landing-planes]');await driver.scroll(true);
        }
        if(mode!=='A-static') await driver.navigate('/about','More context');
        await page.waitForTimeout(resourcePolicy.idleMs);
        await session.send('HeapProfiler.collectGarbage');await driver.frames();await session.send('HeapProfiler.collectGarbage');
        const metrics=await session.send('Performance.getMetrics'), dom=await session.send('Memory.getDOMCounters');
        samples.push({heap:metrics.metrics.find(m=>m.name==='JSHeapUsedSize')?.value??0,nodes:dom.nodes,listeners:dom.jsEventListeners});
        if(mode==='D-census'&&(journey===resourcePolicy.warmupJourneys-1||journey===resourcePolicy.warmupJourneys+resourcePolicy.repeats-1)) census.push(await heapCensus(session));
        if(mode!=='A-static') await driver.navigate('/','ELCEO');
      }
      const differences=(key:'byType'|'byClass'|'byOwner')=>census.length===2?Object.entries(census[1][key]).map(([name,v])=>({name,bytes:v.bytes-(census[0][key][name]?.bytes??0),count:v.count-(census[0][key][name]?.count??0)})).sort((a,b)=>b.bytes-a.bytes).slice(0,30):[];
      results.push({mode,snapshotPerturbed:mode==='D-census',samples,...evaluateResourceJourney(samples),census:{types:differences('byType'),classes:differences('byClass'),owners:differences('byOwner')}});
      await driver.dispose();await session.detach();
    } finally { await context.close(); }
  }
  return results;
}
