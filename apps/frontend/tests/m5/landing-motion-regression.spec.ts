import { test, expect } from '@playwright/test';

const origin = 'http://127.0.0.1:3102';

async function settle(page: import('@playwright/test').Page) {
  await page.waitForTimeout(140);
  await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
}

async function bringSceneToTop(page: import('@playwright/test').Page, name: string, extra = 0) {
  const target = page.locator(`[data-landing-scene="${name}"]`);
  await target.waitFor();
  await page.evaluate(({ sceneName, delta }) => {
    const element = document.querySelector<HTMLElement>(`[data-landing-scene="${sceneName}"]`);
    if (!element) throw new Error(`Missing landing scene: ${sceneName}`);
    // Sticky offsetTop follows the current scroll position. Measure the normal-flow
    // chapter origin from preceding siblings, independently of presentation transforms.
    const root = element.parentElement!;
    let top = root.getBoundingClientRect().top + scrollY;
    for (const sibling of Array.from(root.children)) {
      if (sibling === element) break;
      const style = getComputedStyle(sibling);
      if (style.position === 'absolute' || style.position === 'fixed') continue;
      top += (sibling as HTMLElement).offsetHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }
    window.scrollTo({ top: top + delta, behavior: 'instant' });
  }, { sceneName: name, delta: extra });
  await settle(page);
  return target;
}

test('1920x1080 chapters fill one viewport and keep core composition contained', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect((await page.goto(origin))?.status()).toBe(200);

  const chapters = page.locator('main > section[data-landing-scene]');
  await expect(chapters).toHaveCount(7);
  for (const chapter of await chapters.all()) {
    const box = await chapter.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeCloseTo(1920, 0);
    expect(box!.height).toBeCloseTo(1080, 0);
  }

  const principles = await bringSceneToTop(page, 'section-04-principles');
  const principleBox = await principles.boundingBox();
  expect(principleBox).not.toBeNull();
  for (const card of await principles.locator('[data-landing-placard]').all()) {
    const box = await card.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y).toBeGreaterThanOrEqual(-1);
    expect(box!.y + box!.height).toBeLessThanOrEqual(1081);
  }

  const perspective = await bringSceneToTop(page, 'section-05-perspective');
  const background = perspective.locator('picture[data-scene-media="world-environment"] img');
  await expect.poll(() => background.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  const backgroundState = await background.evaluate(image => {
    const box = image.getBoundingClientRect();
    return { width: box.width, height: box.height, opacity: Number(getComputedStyle(image).opacity) };
  });
  expect(backgroundState.width).toBeGreaterThanOrEqual(1918);
  expect(backgroundState.height).toBeGreaterThanOrEqual(1078);
  expect(backgroundState.opacity).toBeGreaterThan(0.95);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('landing motion is reversible, contained, hover-pausable and footer-safe on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  expect((await page.goto(origin))?.status()).toBe(200);
  await page.locator('[data-landing-revealer]').waitFor();
  await settle(page);

  const aperture = await bringSceneToTop(page, 'section-03-blind-spots');
  const paper = aperture.locator('picture[data-scene-media="torn-paper-strip"] img');
  await expect.poll(() => paper.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  const paperState = await paper.evaluate(image => {
    const imageBox = image.getBoundingClientRect();
    const sceneBox = image.closest('section')!.getBoundingClientRect();
    return {
      opacity: Number(getComputedStyle(image).opacity),
      intersects: imageBox.bottom > sceneBox.top && imageBox.top < sceneBox.bottom,
      width: imageBox.width,
      height: imageBox.height,
    };
  });
  expect(paperState.opacity).toBeGreaterThan(0.9);
  expect(paperState.intersects).toBe(true);
  expect(paperState.width).toBeGreaterThan(1000);
  expect(paperState.height).toBeGreaterThan(100);

  const principles = await bringSceneToTop(page, 'section-04-principles');
  const cards = principles.locator('[data-landing-placard]');
  await expect(cards).toHaveCount(5);
  await expect.poll(() => cards.nth(0).evaluate(card => getComputedStyle(card).borderTopWidth)).toBe('0px');
  for (const card of await cards.all()) {
    const box = await card.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y).toBeGreaterThanOrEqual(-1);
    expect(box!.y + box!.height).toBeLessThanOrEqual(901);
  }

  const before = await cards.nth(0).boundingBox();
  await cards.nth(0).hover();
  await settle(page);
  const after = await cards.nth(0).boundingBox();
  expect(before).not.toBeNull();
  expect(after).not.toBeNull();
  expect(Math.abs(after!.x - before!.x)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(after!.width - before!.width)).toBeLessThanOrEqual(0.5);
  expect(after!.y - before!.y).toBeLessThanOrEqual(0);
  expect(after!.y - before!.y).toBeGreaterThanOrEqual(-5.5);

  await bringSceneToTop(page, 'section-06-workspace');
  await bringSceneToTop(page, 'section-04-principles');
  const reverseState = await principles.evaluate(section => {
    const title = section.querySelector('h2') as HTMLElement;
    const placards = section.querySelector('[class*="placards"]') as HTMLElement;
    const sectionStyle = getComputedStyle(section);
    return {
      sectionOpacity: Number(sectionStyle.opacity),
      sectionFilter: sectionStyle.filter,
      titleOpacity: Number(getComputedStyle(title).opacity),
      titleFilter: getComputedStyle(title).filter,
      placardsOpacity: Number(getComputedStyle(placards).opacity),
      placardsFilter: getComputedStyle(placards).filter,
    };
  });
  expect(reverseState.sectionOpacity).toBeGreaterThan(0.98);
  expect(reverseState.titleOpacity).toBeGreaterThan(0.98);
  expect(reverseState.placardsOpacity).toBeGreaterThan(0.98);
  expect(reverseState.sectionFilter === 'none' || reverseState.sectionFilter.includes('blur(0px)')).toBe(true);
  expect(reverseState.titleFilter === 'none' || reverseState.titleFilter.includes('blur(0px)')).toBe(true);
  expect(reverseState.placardsFilter === 'none' || reverseState.placardsFilter.includes('blur(0px)')).toBe(true);

  const perspective = await bringSceneToTop(page, 'section-05-perspective');
  const horizon = perspective.locator('picture[data-scene-media="world-environment"]');
  expect(Number(await horizon.evaluate(element => getComputedStyle(element).opacity))).toBeGreaterThan(0.9);

  /* Five planes consume a real 2.8vh reading runway instead of racing through one
     wheel step. Foreground focus must remain monotonic and inside the canvas. */
  const activeIndices: number[] = [];
  for (const delta of [0.12, 0.55, 0.55, 0.55, 0.55]) {
    await page.evaluate(value => window.scrollBy(0, innerHeight * value), delta);
    await settle(page);
    const state = await page.locator('[data-landing-plane]').evaluateAll(nodes => {
      const states = nodes.map((node, index) => {
        const rect = node.getBoundingClientRect();
        return { index, left: rect.left, right: rect.right, opacity: Number(getComputedStyle(node).opacity) };
      });
      return states.sort((a, b) => b.opacity - a.opacity)[0];
    });
    activeIndices.push(state.index);
    expect(state.left).toBeGreaterThanOrEqual(-2);
    expect(state.right).toBeLessThanOrEqual(1442);
  }
  expect(activeIndices.every((value, index) => index === 0 || value >= activeIndices[index - 1])).toBe(true);
  expect(new Set(activeIndices).size).toBeGreaterThanOrEqual(4);
  expect(activeIndices.at(-1)).toBeGreaterThanOrEqual(3);

  await page.evaluate(() => window.scrollBy(0, innerHeight * 0.45));
  await settle(page);
  const handoffGeometry = await page.locator('[data-landing-scene="section-06-workspace"]').evaluate(element => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom };
  });
  expect(handoffGeometry.top).toBeGreaterThanOrEqual(-4);
  expect(handoffGeometry.top).toBeLessThanOrEqual(70);

  /* Hovering a perspective image pops it and freezes the scroll-derived deck state.
     Leaving resumes at the current scroll position. */
  await bringSceneToTop(page, 'section-05-perspective', 900 * 0.9);
  const planes = page.locator('[data-landing-plane]');
  const focusIndex = await planes.evaluateAll(nodes => nodes
    .map((node, index) => ({ index, opacity: Number(getComputedStyle(node).opacity) }))
    .sort((a, b) => b.opacity - a.opacity)[0].index);
  const focusPlane = planes.nth(focusIndex);
  await focusPlane.hover({ force: true, position: { x: 18, y: 18 } });
  await settle(page);
  await expect(focusPlane).toHaveAttribute('data-hovered', 'true');
  expect(Number(await focusPlane.evaluate(element => getComputedStyle(element).scale))).toBeGreaterThan(1.03);
  const pausedTransforms = await planes.evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.transform));
  await page.evaluate(() => window.scrollBy(0, innerHeight * 0.5));
  await settle(page);
  const stillPaused = await planes.evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.transform));
  expect(stillPaused).toEqual(pausedTransforms);
  await page.mouse.move(2, 2);
  await settle(page);
  await expect(focusPlane).not.toHaveAttribute('data-hovered', 'true');
  const resumed = await planes.evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.transform));
  expect(resumed).not.toEqual(pausedTransforms);

  await bringSceneToTop(page, 'section-05-perspective');
  const reversePlanes = await planes.evaluateAll(nodes => nodes.map(node => {
    const rect = node.getBoundingClientRect();
    return { left: rect.left, right: rect.right, transform: getComputedStyle(node).transform };
  }));
  expect(reversePlanes.every(plane => plane.left > -100 && plane.right < 1540 && plane.transform !== 'none')).toBe(true);
  expect(Number(await perspective.evaluate(section => getComputedStyle(section).opacity))).toBeGreaterThan(0.98);

  /* Section 07 stays a complete viewport while the footer rises over it only after the
     final scroll begins. */
  const entry = await bringSceneToTop(page, 'section-07-entry');
  const footer = page.locator('footer[data-landing-scene="section-08-footer"]');
  const atEntry = await page.evaluate(() => {
    const section = document.querySelector<HTMLElement>('[data-landing-scene="section-07-entry"]')!;
    const footer = document.querySelector<HTMLElement>('footer[data-landing-scene="section-08-footer"]')!;
    const a = section.getBoundingClientRect();
    const b = footer.getBoundingClientRect();
    return { sectionTop: a.top, sectionBottom: a.bottom, footerTop: b.top };
  });
  expect(atEntry.sectionTop).toBeCloseTo(0, 0);
  expect(atEntry.sectionBottom).toBeCloseTo(900, 0);
  expect(atEntry.footerTop).toBeGreaterThanOrEqual(895);

  await page.evaluate(() => window.scrollBy(0, innerHeight * 0.24));
  await settle(page);
  const overlap = await page.evaluate(() => {
    const section = document.querySelector<HTMLElement>('[data-landing-scene="section-07-entry"]')!;
    const footer = document.querySelector<HTMLElement>('footer[data-landing-scene="section-08-footer"]')!;
    const a = section.getBoundingClientRect();
    const b = footer.getBoundingClientRect();
    return {
      sectionTop: a.top,
      sectionBottom: a.bottom,
      footerTop: b.top,
      footerBottom: b.bottom,
      sectionZ: Number(getComputedStyle(section).zIndex),
      footerZ: Number(getComputedStyle(footer).zIndex),
    };
  });
  expect(overlap.sectionTop).toBeCloseTo(0, 0);
  expect(overlap.footerTop).toBeGreaterThan(0);
  expect(overlap.footerTop).toBeLessThan(900);
  expect(overlap.footerBottom).toBeGreaterThan(900);
  expect(overlap.footerZ).toBeGreaterThan(overlap.sectionZ);
  await expect(entry).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('native choreography tears down cleanly when desktop resizes to mobile', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(origin);
  await bringSceneToTop(page, 'section-05-perspective', 900 * 0.7);
  expect(await page.locator('.pin-spacer').count()).toBe(0);
  expect((await page.locator('[data-landing-plane]').evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.transform))).some(Boolean)).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await settle(page);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await settle(page);

  expect(await page.locator('.pin-spacer').count()).toBe(0);
  const inlineTransforms = await page.locator('[data-landing-plane]').evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.getPropertyValue('transform')));
  expect(inlineTransforms.every(value => value === '')).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('390px layout keeps the carousel and workspace inside one screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(origin);

  const chapters = page.locator('main > section[data-landing-scene]');
  for (const chapter of await chapters.all()) {
    const box = await chapter.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.height).toBeCloseTo(844, 0);
  }

  const perspective = await bringSceneToTop(page, 'section-05-perspective');
  const fieldBox = await perspective.locator('[data-landing-planes]').boundingBox();
  expect(fieldBox).not.toBeNull();
  expect(fieldBox!.height).toBeGreaterThanOrEqual(190);
  expect(fieldBox!.height).toBeLessThanOrEqual(238);
  const background = perspective.locator('picture[data-scene-media="world-environment"] img');
  expect(Number(await background.evaluate(image => getComputedStyle(image).opacity))).toBeGreaterThan(0.95);

  const workspace = await bringSceneToTop(page, 'section-06-workspace');
  const workspaceBox = await workspace.boundingBox();
  const headerBox = await workspace.locator(':scope > header').boundingBox();
  const mosaicBox = await workspace.locator('[class*="mosaic"]').boundingBox();
  expect(workspaceBox).not.toBeNull();
  expect(headerBox).not.toBeNull();
  expect(mosaicBox).not.toBeNull();
  expect(headerBox!.y).toBeGreaterThanOrEqual(workspaceBox!.y - 1);
  expect(mosaicBox!.y + mosaicBox!.height).toBeLessThanOrEqual(workspaceBox!.y + workspaceBox!.height + 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

for (const width of [768, 1024]) {
  test(`landing preserves reading integrity at ${width}px tablet width`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(origin);

    const fontSize = async (selector: string) => Number.parseFloat(await page.locator(selector).first().evaluate(element => getComputedStyle(element).fontSize));
    expect(await fontSize('[data-landing-scene="section-03-blind-spots"] li')).toBeGreaterThanOrEqual(11);
    expect(await fontSize('[data-landing-placard] h3')).toBeGreaterThanOrEqual(19);
    expect(await fontSize('[data-landing-placard] > p')).toBeGreaterThanOrEqual(9);
    expect(await fontSize('[data-landing-plane] > p')).toBeGreaterThanOrEqual(12);
    expect(await fontSize('[data-landing-scene="section-06-workspace"] article h3')).toBeGreaterThanOrEqual(15);
    expect(await fontSize('[data-landing-scene="section-07-entry"] [class*="trust"] p')).toBeGreaterThanOrEqual(12);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
