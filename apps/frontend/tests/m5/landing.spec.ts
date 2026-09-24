import { execFileSync } from 'node:child_process';
import { evaluateResources, resourcePolicy } from '../../../../scripts/m5-resource-policy.mjs';
import { test, expect } from '@playwright/test';
const origin = 'http://127.0.0.1:3102';

for (const width of [360, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
  test(`seven-scene readable landing at ${width}px with reduced motion`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    const downloaded: string[] = [];
    page.on('request', request => {
      const url = new URL(request.url());
      const source = url.searchParams.get('url') ?? url.pathname;
      if (source.startsWith('/m5-assets/')) downloaded.push(source);
    });
    page.on('pageerror', error => errors.push(error.message));
    expect((await page.goto(origin))?.status()).toBe(200);
    await expect(page.locator('main > section')).toHaveCount(7);
    await expect(page.getByRole('heading', { level: 1, name: 'ELCEO', exact: true })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const section of await page.locator('main > section').all()) await section.scrollIntoViewIfNeeded();
    for (const image of await page.locator('main img').all()) await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    for (const heading of await page.locator('main h1, main h2, main h3').all()) {
      const box = await heading.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.x).toBeGreaterThanOrEqual(-1);
      expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
    }
    for (const section of await page.locator('main > section').all()) {
      const box = await section.boundingBox();
      expect(box!.x).toBeCloseTo(0, 0);
      expect(box!.width).toBeCloseTo(width, 0);
    }
    for (const key of ['world','depth','horizon']) {
      const selected = await page.locator(`[data-scene-media="${key}"] img`).evaluate((el: HTMLImageElement) => el.currentSrc);
      const source = new URL(selected).searchParams.get('url');
      expect(source).toContain(width <= 760 ? '-mobile.webp' : '-desktop.webp');
      const stem = key === 'world' ? 'world-context' : key === 'depth' ? 'market-depth' : 'information-horizon';
      expect(downloaded.filter(url => url.includes(stem) && url.includes(width <= 760 ? '-desktop.webp' : '-mobile.webp'))).toEqual([]);
    }
    const stages = await page.locator('main > section').evaluateAll(nodes => nodes.map(node => { const r=node.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height}; }));
    for (let i=1;i<stages.length;i++) expect(stages[i].y-(stages[i-1].y+stages[i-1].height)).toBeLessThanOrEqual(1);
    const footer = await page.locator('footer').boundingBox();
    expect(footer!.width).toBeCloseTo(width,0);
    if (width >=1440) expect((await page.locator('main figure').boundingBox())!.width).toBeLessThan(width*.65);
    if ([390,1440,1920].includes(width)) console.log(`M5_WIDTH:${JSON.stringify({width,stages,downloaded})}`);
    await testInfo.attach(`landing-width-${width}`, {body:JSON.stringify({head:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),width,stages,downloaded}),contentType:'application/json'});
    await expect(page.locator('[data-landing-world]')).not.toHaveAttribute('style', /transform/);
    await expect(page.getByText('Actual interface preview · demonstration data, not live intelligence.')).toBeVisible();
    await expect(page.getByRole('link', { name: /Start exploring ELCEO/ })).toHaveAttribute('href', '/signup');
    if (width === 390 || width === 1440 || width === 1920) {
      const file = testInfo.outputPath(`landing-${width}.png`);
      await page.screenshot({ path: file, fullPage: true });
      await testInfo.attach(`landing-${width}`, { path: file, contentType: 'image/png' });
    }
    if (width <= 430) {
      const aperture = page.locator('[data-landing-lens-scope]');
      const bottomLabel = aperture.getByText('Unreviewed pattern repetition');
      const apertureBox = await aperture.boundingBox();
      const labelBox = await bottomLabel.boundingBox();
      expect(apertureBox!.y + apertureBox!.height - labelBox!.y - labelBox!.height).toBeGreaterThanOrEqual(150);
      for (const card of await page.locator('main article').filter({ has: page.locator('h3') }).all()) {
        // The principle constellation intentionally remains staggered; product
        // cards instead preserve a full reading measure on narrow phones.
        if (await card.locator('a').count()) expect((await card.boundingBox())!.width).toBeGreaterThan(width * .8);
      }
    }
    if (width < 768) {
      const field = page.locator('[data-landing-planes]');
      await field.focus(); await page.keyboard.press('ArrowRight');
      await expect.poll(() => field.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
    }
    expect(errors).toEqual([]);
  });
}

test('desktop motion cleans up on reduced-motion changes and repeated route journeys', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(origin);
  const world = page.locator('[data-landing-world]');
  await page.getByRole('heading', { name: /Price is visible/ }).scrollIntoViewIfNeeded();
  await expect(world).toHaveAttribute('style', /transform/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(world).not.toHaveAttribute('style', /transform/);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const session = await page.context().newCDPSession(page);
  await session.send('Performance.enable');
  await session.send('HeapProfiler.enable');
  const samples: Array<{ heap: number; nodes: number; listeners: number }> = [];
  // First journey establishes the post-warmup baseline; six repeats follow.
  for (let journey = 0; journey <= resourcePolicy.repeats; journey++) {
    for (const section of await page.locator('main > section').all()) await section.scrollIntoViewIfNeeded();
    await page.getByRole('heading', { level: 1 }).scrollIntoViewIfNeeded();
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'About', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('More context');
    await page.waitForTimeout(resourcePolicy.idleMs);
    await session.send('HeapProfiler.collectGarbage');
    await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
    await session.send('HeapProfiler.collectGarbage');
    const metrics = await session.send('Performance.getMetrics');
    const dom = await session.send('Memory.getDOMCounters');
    samples.push({ heap: metrics.metrics.find(metric => metric.name === 'JSHeapUsedSize')?.value ?? 0, nodes: dom.nodes, listeners: dom.jsEventListeners });
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Home', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('ELCEO');
  }
  const result = evaluateResources(samples);
  const evidence = { head: execFileSync('git', ['rev-parse','HEAD'], { encoding: 'utf8' }).trim(), samples, ...result };
  console.log(`M5_RESOURCE:${JSON.stringify(evidence)}`);
  await testInfo.attach('landing-journey-resources', { body: JSON.stringify(evidence, null, 2), contentType: 'application/json' });
  expect(result.pass, JSON.stringify(result.counters)).toBe(true);
  await session.detach();
});
