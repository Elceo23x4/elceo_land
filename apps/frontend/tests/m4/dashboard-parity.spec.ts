import { test, expect, type Browser, type Page, type TestInfo } from '@playwright/test';
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
  await session.send('HeapProfiler.enable');
  await session.send('HeapProfiler.collectGarbage');
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

async function captureParitySignature(page: Page) {
  return page.evaluate(() => {
    const rect = (element: Element | null) => {
      if (!element) return null;
      const bounds = element.getBoundingClientRect();
      return [bounds.x, bounds.y, bounds.width, bounds.height].map((value) => Math.round(value * 100) / 100);
    };
    const viewport = document.querySelector('.dashboard-precision-viewport');
    const panels = Array.from(document.querySelectorAll('.dashboard-panel-group'));
    return {
      viewport: rect(viewport),
      board: rect(document.querySelector('.dashboard-precision-board')),
      chart: rect(document.querySelector('.dashboard-precision-chart-display')),
      panels: panels.map((panel) => ({
        className: panel.className,
        rect: rect(panel),
        title: panel.querySelector('h3')?.textContent?.trim() ?? '',
      })),
      text: viewport?.textContent?.replace(/\s+/gu, ' ').trim() ?? '',
      rootClientWidth: document.documentElement.clientWidth,
      rootScrollWidth: document.documentElement.scrollWidth,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      runningAnimations: document.getAnimations().filter((animation) => animation.playState === 'running').length,
    };
  });
}

async function compareRenderedPixels(page: Page, viteShot: Buffer, nextShot: Buffer) {
  return page.evaluate(async ({ viteSource, nextSource }) => {
    const load = (source: string) => new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Unable to decode parity screenshot'));
      image.src = source;
    });
    const [viteImage, nextImage] = await Promise.all([load(viteSource), load(nextSource)]);
    if (viteImage.width !== nextImage.width || viteImage.height !== nextImage.height) {
      throw new Error('Parity screenshots have different dimensions');
    }
    const canvas = document.createElement('canvas');
    canvas.width = viteImage.width;
    canvas.height = viteImage.height;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) throw new Error('Unable to create parity comparison canvas');
    context.drawImage(viteImage, 0, 0);
    const vitePixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(nextImage, 0, 0);
    const nextPixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let changedPixels = 0;
    let absoluteError = 0;
    for (let index = 0; index < vitePixels.length; index += 4) {
      let largestChannelDelta = 0;
      for (let channel = 0; channel < 4; channel += 1) {
        const delta = Math.abs(vitePixels[index + channel] - nextPixels[index + channel]);
        absoluteError += delta;
        largestChannelDelta = Math.max(largestChannelDelta, delta);
      }
      if (largestChannelDelta > 12) changedPixels += 1;
    }
    const pixelCount = canvas.width * canvas.height;
    return {
      width: canvas.width,
      height: canvas.height,
      changedPixels,
      changedPixelRatio: changedPixels / pixelCount,
      meanAbsoluteError: absoluteError / (vitePixels.length * 255),
    };
  }, {
    viteSource: `data:image/png;base64,${viteShot.toString('base64')}`,
    nextSource: `data:image/png;base64,${nextShot.toString('base64')}`,
  });
}

async function exerciseDashboard(page: Page) {
  const assetTrigger = page.getByRole('button', { name: /^Active asset:/u });
  await assetTrigger.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('listbox', { name: 'Select asset' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('listbox', { name: 'Select asset' })).toHaveCount(0);
  await assetTrigger.click();
  await page.getByRole('option', { name: /NAS100/u }).click();
  await expect(assetTrigger).toHaveAttribute('aria-label', 'Active asset: NAS100');

  const timeframeTrigger = page.getByRole('button', { name: /^Active timeframe:/u });
  await timeframeTrigger.click();
  await page.getByRole('option', { name: '4H', exact: true }).click();
  await expect(timeframeTrigger).toHaveAttribute('aria-label', 'Active timeframe: 4H');

  const zonesToggle = page.getByRole('button', { name: 'Zones', exact: true });
  await zonesToggle.click();
  await expect(zonesToggle).toHaveAttribute('aria-pressed', 'false');

  const biasPanel = page.locator('.dashboard-panel-group--directionalBiasSummary');
  await biasPanel.getByRole('tab', { name: 'Scenario', exact: true }).click();
  await expect(biasPanel.getByRole('tab', { name: 'Scenario', exact: true })).toHaveAttribute('aria-selected', 'true');

  const alertButton = biasPanel.locator('.dashboard-panel-alert-button');
  await expect(alertButton).toHaveAccessibleName(/^Arm panel alert:/u);
  await alertButton.click();
  await expect(alertButton).toHaveAttribute('aria-pressed', 'true');
  await expect(alertButton).toHaveAccessibleName(/^Turn off panel alert:/u);

  await biasPanel.getByRole('button', { name: 'Enlarge panel' }).click();
  await expect(biasPanel).toHaveClass(/\bis-expanded\b/u);
  await page.keyboard.press('Escape');
  await expect(biasPanel).not.toHaveClass(/\bis-expanded\b/u);

  await biasPanel.getByRole('button', { name: 'Expand', exact: true }).click();
  await expect(page.getByRole('dialog', { name: 'Directional Bias' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Directional Bias' })).toHaveCount(0);

  return page.evaluate(() => {
    const bias = document.querySelector('.dashboard-panel-group--directionalBiasSummary');
    return {
      assetLabel: document.querySelector('.dashboard-asset-selector__trigger')?.getAttribute('aria-label'),
      timeframeLabel: document.querySelector('.dashboard-timeframe-selector__trigger')?.getAttribute('aria-label'),
      zonesPressed: document.querySelector('.dashboard-chart-overlay-toggle')?.getAttribute('aria-pressed'),
      scenarioSelected: bias?.querySelector('[role="tab"][aria-selected="true"]')?.textContent?.trim(),
      alertPressed: bias?.querySelector('.dashboard-panel-alert-button')?.getAttribute('aria-pressed'),
      expanded: bias?.classList.contains('is-expanded'),
      dialogCount: document.querySelectorAll('[role="dialog"]').length,
      activeAssetVisible: bias?.textContent?.includes('NAS100'),
    };
  });
}

async function runSettledInteractionCycle(page: Page) {
  const biasPanel = page.locator('.dashboard-panel-group--directionalBiasSummary');
  const zonesToggle = page.getByRole('button', { name: 'Zones', exact: true });
  await zonesToggle.click();
  await zonesToggle.click();
  await biasPanel.getByRole('button', { name: 'Enlarge panel' }).click();
  await biasPanel.getByRole('button', { name: 'Restore panel' }).click();
  await biasPanel.getByRole('button', { name: 'Expand', exact: true }).click();
  await page.getByRole('button', { name: 'Close drawer' }).click();
  await biasPanel.getByRole('tab', { name: 'Scenario', exact: true }).click();
  await biasPanel.getByRole('tab', { name: 'Bias', exact: true }).click();
  await page.waitForTimeout(80);
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

    const vitePanels = await vite.page.locator('.dashboard-panel-group').count();
    const nextPanels = await next.page.locator('.dashboard-panel-group').count();
    expect(nextPanels).toBe(vitePanels);
    expect(nextPanels).toBeGreaterThan(0);

    const viteShot = await vite.page.screenshot({ animations: 'disabled' });
    const nextShot = await next.page.screenshot({ animations: 'disabled' });
    writeFileSync(testInfo.outputPath(`${label}-vite.png`), viteShot);
    writeFileSync(testInfo.outputPath(`${label}-next.png`), nextShot);

    const viteSignature = await captureParitySignature(vite.page);
    const nextSignature = await captureParitySignature(next.page);
    expect(nextSignature, `${label} DOM, content and geometry parity`).toEqual(viteSignature);
    expect(nextSignature.rootScrollWidth, `${label} should not create page-level horizontal overflow`)
      .toBeLessThanOrEqual(nextSignature.rootClientWidth + 1);

    const visual = await compareRenderedPixels(next.page, viteShot, nextShot);
    expect(visual.changedPixelRatio, `${label} materially changed pixels`).toBeLessThanOrEqual(0.04);
    expect(visual.meanAbsoluteError, `${label} normalized raster error`).toBeLessThanOrEqual(0.01);

    const evidence = {
      label,
      viewport,
      vite: await captureMetrics(vite.page),
      next: await captureMetrics(next.page),
      visual,
    };
    writeFileSync(testInfo.outputPath(`${label}-performance.json`), `${JSON.stringify(evidence, null, 2)}\n`);
    console.log(`M4_PERF_EVIDENCE ${JSON.stringify(evidence)}`);

  } finally {
    await vite.context.close();
    await next.context.close();
  }
}

test('desktop Next cockpit preserves exact structure and bounded visual parity', async ({ browser }, testInfo) => {
  await compareViewport(browser, { width: 1440, height: 900 }, 'desktop', testInfo);
});

test('mobile reduced-motion cockpit preserves exact structure and bounded visual parity', async ({ browser }, testInfo) => {
  await compareViewport(browser, { width: 390, height: 844 }, 'mobile-reduced-motion', testInfo);
});

test('Next preserves accepted dashboard interaction and keyboard state transitions', async ({ browser }) => {
  const viewport = { width: 1440, height: 900 };
  const vite = await openDashboard(browser, VITE, viewport);
  const next = await openDashboard(browser, NEXT, viewport);
  try {
    const viteState = await exerciseDashboard(vite.page);
    const nextState = await exerciseDashboard(next.page);
    expect(nextState).toEqual(viteState);
    expect(nextState).toEqual({
      assetLabel: 'Active asset: NAS100',
      timeframeLabel: 'Active timeframe: 4H',
      zonesPressed: 'false',
      scenarioSelected: 'Scenario',
      alertPressed: 'true',
      expanded: false,
      dialogCount: 0,
      activeAssetVisible: true,
    });
  } finally {
    await vite.context.close();
    await next.context.close();
  }
});

test('responsive and reduced-motion structure remains equivalent at representative widths', async ({ browser }) => {
  const viewports = [
    { width: 360, height: 800 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1920, height: 1080 },
  ];
  for (const viewport of viewports) {
    const vite = await openDashboard(browser, VITE, viewport);
    const next = await openDashboard(browser, NEXT, viewport);
    try {
      const viteSignature = await captureParitySignature(vite.page);
      const nextSignature = await captureParitySignature(next.page);
      expect(nextSignature).toEqual(viteSignature);
      expect(nextSignature.reducedMotion).toBe(true);
      expect(nextSignature.runningAnimations).toBe(viteSignature.runningAnimations);
      expect(nextSignature.rootScrollWidth).toBeLessThanOrEqual(nextSignature.rootClientWidth + 1);
    } finally {
      await vite.context.close();
      await next.context.close();
    }
  }
});

test('repeated dashboard interaction cycles settle without migration-specific retained growth', async ({ browser }, testInfo) => {
  const viewport = { width: 1440, height: 900 };
  const vite = await openDashboard(browser, VITE, viewport);
  const next = await openDashboard(browser, NEXT, viewport);
  const sample = async (page: Page) => {
    const values = [await captureMetrics(page)];
    for (let cycle = 0; cycle < 5; cycle += 1) {
      await runSettledInteractionCycle(page);
      values.push(await captureMetrics(page));
    }
    return values;
  };
  try {
    const viteSamples = await sample(vite.page);
    const nextSamples = await sample(next.page);
    const growth = (samples: Awaited<ReturnType<typeof sample>>, key: 'jsHeapUsedBytes' | 'nodes' | 'jsEventListeners') => {
      const first = samples[0][key] ?? 0;
      const last = samples.at(-1)?.[key] ?? 0;
      return Math.max(0, last - first);
    };
    const retained = {
      vite: {
        heap: growth(viteSamples, 'jsHeapUsedBytes'),
        nodes: growth(viteSamples, 'nodes'),
        listeners: growth(viteSamples, 'jsEventListeners'),
      },
      next: {
        heap: growth(nextSamples, 'jsHeapUsedBytes'),
        nodes: growth(nextSamples, 'nodes'),
        listeners: growth(nextSamples, 'jsEventListeners'),
      },
    };
    expect(retained.next.heap).toBeLessThanOrEqual(retained.vite.heap + 2_000_000);
    expect(retained.next.nodes).toBeLessThanOrEqual(retained.vite.nodes + 100);
    expect(retained.next.listeners).toBeLessThanOrEqual(retained.vite.listeners + 30);
    writeFileSync(
      testInfo.outputPath('interaction-cycle-memory.json'),
      `${JSON.stringify({ viewport, retained, viteSamples, nextSamples }, null, 2)}\n`,
    );
  } finally {
    await vite.context.close();
    await next.context.close();
  }
});
