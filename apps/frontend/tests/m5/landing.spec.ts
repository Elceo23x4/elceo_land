import { test, expect } from '@playwright/test';
const origin = 'http://127.0.0.1:3102';

for (const width of [360, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
  test(`seven-scene readable landing at ${width}px with reduced motion`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
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
    await expect(page.locator('[data-landing-world]')).not.toHaveAttribute('style', /transform/);
    await expect(page.getByText('Actual interface preview · demonstration data, not live intelligence.')).toBeVisible();
    await expect(page.getByRole('link', { name: /Start exploring ELCEO/ })).toHaveAttribute('href', '/signup');
    if (width === 390 || width === 1440) {
      const file = testInfo.outputPath(`landing-${width}.png`);
      await page.screenshot({ path: file, fullPage: true });
      await testInfo.attach(`landing-${width}`, { path: file, contentType: 'image/png' });
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
  for (let journey = 0; journey < 5; journey++) {
    for (const section of await page.locator('main > section').all()) await section.scrollIntoViewIfNeeded();
    await page.getByRole('heading', { level: 1 }).scrollIntoViewIfNeeded();
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'About', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('More context');
    await session.send('HeapProfiler.collectGarbage');
    const metrics = await session.send('Performance.getMetrics');
    const dom = await session.send('Memory.getDOMCounters');
    samples.push({ heap: metrics.metrics.find(metric => metric.name === 'JSHeapUsedSize')?.value ?? 0, nodes: dom.nodes, listeners: dom.jsEventListeners });
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Home', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('ELCEO');
  }
  const settled = samples.slice(2);
  // Warmed route-cache retention is allowed; repeated journeys must settle.
  expect(Math.max(...settled.map(sample => sample.heap)) - Math.min(...settled.map(sample => sample.heap))).toBeLessThan(5 * 1024 * 1024);
  expect(Math.max(...settled.map(sample => sample.listeners)) - Math.min(...settled.map(sample => sample.listeners))).toBeLessThanOrEqual(30);
  await testInfo.attach('landing-journey-resources', { body: JSON.stringify(samples, null, 2), contentType: 'application/json' });
  await session.detach();
});
