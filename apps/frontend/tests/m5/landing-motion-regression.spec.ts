import { test, expect } from '@playwright/test';

const origin = 'http://127.0.0.1:3102';

async function settle(page: import('@playwright/test').Page) {
  await page.waitForTimeout(120);
  await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
}

async function bringSceneToTop(page: import('@playwright/test').Page, name: string) {
  const target = page.locator(`[data-landing-scene="${name}"]`);
  await target.scrollIntoViewIfNeeded();
  await page.evaluate(sceneName => {
    const element = document.querySelector<HTMLElement>(`[data-landing-scene="${sceneName}"]`);
    if (!element) throw new Error(`Missing landing scene: ${sceneName}`);
    const rect = element.getBoundingClientRect();
    window.scrollBy(0, rect.top);
  }, name);
  await settle(page);
  return target;
}

test('landing motion is reversible, contained and footer-safe on desktop', async ({ page }) => {
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

  const before = await cards.nth(0).boundingBox();
  await cards.nth(0).hover();
  await settle(page);
  const after = await cards.nth(0).boundingBox();
  expect(before).not.toBeNull();
  expect(after).not.toBeNull();
  expect(Math.abs(after!.x - before!.x)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(after!.width - before!.width)).toBeLessThanOrEqual(0.5);
  expect(after!.y - before!.y).toBeLessThanOrEqual(0);
  expect(after!.y - before!.y).toBeGreaterThanOrEqual(-5);

  await bringSceneToTop(page, 'section-06-workspace');
  await bringSceneToTop(page, 'section-04-principles');
  const reverseState = await principles.evaluate(section => {
    const title = section.querySelector('h2') as HTMLElement;
    const placards = section.querySelector('[class*="placards"]') as HTMLElement;
    return {
      titleOpacity: Number(getComputedStyle(title).opacity),
      titleFilter: getComputedStyle(title).filter,
      placardsOpacity: Number(getComputedStyle(placards).opacity),
      placardsFilter: getComputedStyle(placards).filter,
    };
  });
  expect(reverseState.titleOpacity).toBeGreaterThan(0.98);
  expect(reverseState.placardsOpacity).toBeGreaterThan(0.98);
  expect(reverseState.titleFilter === 'none' || reverseState.titleFilter.includes('blur(0px)')).toBe(true);
  expect(reverseState.placardsFilter === 'none' || reverseState.placardsFilter.includes('blur(0px)')).toBe(true);

  await bringSceneToTop(page, 'section-05-perspective');
  for (const delta of [0.05, 0.24, 0.24, 0.24]) {
    await page.evaluate(value => window.scrollBy(0, innerHeight * value), delta);
    await settle(page);
    const activePlane = await page.locator('[data-landing-plane]').evaluateAll(nodes => {
      const states = nodes.map(node => {
        const rect = node.getBoundingClientRect();
        return { left: rect.left, right: rect.right, opacity: Number(getComputedStyle(node).opacity) };
      });
      return states.sort((a, b) => b.opacity - a.opacity)[0];
    });
    expect(activePlane.left).toBeGreaterThanOrEqual(-2);
    expect(activePlane.right).toBeLessThanOrEqual(1442);
  }

  await bringSceneToTop(page, 'section-05-perspective');
  const reversePlanes = await page.locator('[data-landing-plane]').evaluateAll(nodes => nodes.map(node => {
    const rect = node.getBoundingClientRect();
    return { left: rect.left, right: rect.right, transform: getComputedStyle(node).transform };
  }));
  expect(reversePlanes.every(plane => plane.left > -100 && plane.right < 1540 && plane.transform !== 'none')).toBe(true);

  const footer = page.locator('footer[data-landing-scene="section-08-footer"]');
  await footer.scrollIntoViewIfNeeded();
  await settle(page);
  const footerState = await footer.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return {
      top: rect.top,
      bottom: rect.bottom,
      opacity: Number(style.opacity),
      visibility: style.visibility,
      transform: style.transform,
    };
  });
  expect(footerState.top).toBeLessThan(900);
  expect(footerState.bottom).toBeGreaterThan(0);
  expect(footerState.opacity).toBe(1);
  expect(footerState.visibility).toBe('visible');
  expect(footerState.transform).toBe('none');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('landing choreography cleans desktop pin state when resized to mobile', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(origin);
  await bringSceneToTop(page, 'section-05-perspective');
  await page.evaluate(() => window.scrollBy(0, innerHeight * 0.35));
  await settle(page);
  expect(await page.locator('.pin-spacer').count()).toBeGreaterThan(0);

  await page.setViewportSize({ width: 390, height: 844 });
  await settle(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await settle(page);

  expect(await page.locator('.pin-spacer').count()).toBe(0);
  const inlineTransforms = await page.locator('[data-landing-plane]').evaluateAll(nodes => nodes.map(node => (node as HTMLElement).style.getPropertyValue('transform')));
  expect(inlineTransforms.every(value => value === '')).toBe(true);
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
