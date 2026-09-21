import { test, expect, type Browser, type Page, type TestInfo } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';

const VITE = 'http://127.0.0.1:4173/dashboard';
const NEXT = 'http://127.0.0.1:3102/dashboard';

async function openDashboard(browser: Browser, url: string, viewport: { width: number; height: number }) {
  const context = await browser.newContext({
    viewport,
    reducedMotion: 'reduce',
    colorScheme: 'dark',
  });
  const page = await context.newPage();
  const browserErrors: string[] = [];
  page.on('pageerror', (error) => browserErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') browserErrors.push(message.text());
  });
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  expect(response?.ok(), `${url} should return a successful document`).toBe(true);
  await expect(page.locator('.dashboard-precision-viewport')).toBeVisible();
  await page.waitForTimeout(300);
  return { context, page, browserErrors };
}

async function captureMetrics(page: Page) {
  const session = await page.context().newCDPSession(page);
  await session.send('Performance.enable');
  const performance = await session.send('Performance.getMetrics');
  const dom = await session.send('Memory.getDOMCounters');
  const metrics = Object.fromEntries(performance.metrics.map(({ name, value }) => [name, value]));
  await session.detach();
  return {
    jsHeapUsedBytes: metrics.JSHeapUsedSize ?? null,
    jsHeapTotalBytes: metrics.JSHeapTotalSize ?? null,
    nodes: dom.nodes,
    documents: dom.documents,
    jsEventListeners: dom.jsEventListeners,
  };
}

async function compareViewport(
  browser: Browser,
  viewport: { width: number; height: number },
  label: string,
  testInfo: TestInfo,
) {
  const vite = await openDashboard(browser, VITE, viewport);
  const next = await openDashboard(browser, NEXT, viewport);

  try {
    expect(vite.browserErrors, `${label} Vite browser errors`).toEqual([]);
    expect(next.browserErrors, `${label} Next browser errors`).toEqual([]);

    const vitePanels = await vite.page.locator('.dashboard-precision-panel-frame').count();
    const nextPanels = await next.page.locator('.dashboard-precision-panel-frame').count();
    expect(nextPanels).toBe(vitePanels);
    expect(nextPanels).toBeGreaterThan(0);

    const viteShot = await vite.page.screenshot({ animations: 'disabled' });
    const nextShot = await next.page.screenshot({ animations: 'disabled' });
    writeFileSync(testInfo.outputPath(`${label}-vite.png`), viteShot);
    writeFileSync(testInfo.outputPath(`${label}-next.png`), nextShot);

    const evidence = {
      label,
      viewport,
      vite: await captureMetrics(vite.page),
      next: await captureMetrics(next.page),
    };
    writeFileSync(testInfo.outputPath(`${label}-performance.json`), `${JSON.stringify(evidence, null, 2)}\n`);
    console.log(`M4_PERF_EVIDENCE ${JSON.stringify(evidence)}`);

    assert.equal(
      Buffer.compare(nextShot, viteShot),
      0,
      `${label} Next dashboard pixels differ from the accepted Vite dashboard`,
    );
  } finally {
    await vite.context.close();
    await next.context.close();
  }
}

test('desktop Next cockpit is pixel-identical to the accepted Vite cockpit', async ({ browser }, testInfo) => {
  await compareViewport(browser, { width: 1440, height: 900 }, 'desktop', testInfo);
});

test('mobile reduced-motion Next cockpit is pixel-identical to the accepted Vite cockpit', async ({ browser }, testInfo) => {
  await compareViewport(browser, { width: 390, height: 844 }, 'mobile-reduced-motion', testInfo);
});
