import { test, expect } from '@playwright/test';
const origin = 'http://127.0.0.1:3102';

for (const width of [360, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
  test(`public reading and native disclosure at ${width}px`, async ({ browser }, testInfo) => {
    const context = await browser.newContext({ viewport: { width, height: 900 }, hasTouch: width < 768, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of ['/about','/faq','/help']) {
      expect((await page.goto(`${origin}${route}`))?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      expect(await page.locator('main').count()).toBe(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.locator('main p').first().evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(14);
      if (width === 390 || width === 1440) {
        const screenshot = testInfo.outputPath(`${route.slice(1)}-${width}.png`);
        await page.screenshot({ path: screenshot, fullPage: true });
        await testInfo.attach(`${route}-${width}`, { path: screenshot, contentType: 'image/png' });
      }
    }
    await page.goto(`${origin}/faq`);
    const question = page.locator('summary').filter({ hasText: 'What is ELCEO?' });
    await question.press('Enter');
    await expect(page.getByText('A market-intelligence and decision-support workspace.', { exact: false })).toBeVisible();
    const cookies = page.getByRole('button', { name: 'Cookies', exact: true });
    await cookies.click();
    const dialog = page.getByRole('dialog', { name: 'Your cookie choices' });
    await expect(dialog).toBeVisible();
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
    }
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Shift+Tab');
      expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
    }
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(cookies).toBeFocused();
    if (width < 768) {
      await page.getByText('Menu', { exact: true }).click();
      await expect(page.getByRole('navigation', { name: 'Mobile main' })).toBeVisible();
      expect(await page.getByRole('navigation', { name: 'Mobile main' }).getByRole('link', { name: 'About', exact: true }).evaluate(el => el.getBoundingClientRect().height)).toBeGreaterThanOrEqual(44);
    }
    expect(errors).toEqual([]);
    await context.close();
  });
}

test('client navigation from public UI retains exact protected dashboard geometry and typography', async ({ page }) => {
  const signature = () => page.locator('.dashboard-precision-viewport').evaluate(el => {
    const nodes = [el, ...el.querySelectorAll('h3, button, .dashboard-panel-group')];
    return nodes.map(node => {
      const r = node.getBoundingClientRect(); const s = getComputedStyle(node);
      return { box: [r.x,r.y,r.width,r.height].map(n => Math.round(n * 100) / 100), family: s.fontFamily, size: s.fontSize, lineHeight: s.lineHeight };
    });
  });
  await page.goto(`${origin}/dashboard`, { waitUntil: 'networkidle' });
  await expect(page.locator('.dashboard-precision-viewport')).toBeVisible();
  const before = await signature();
  await page.goto(`${origin}/about`);
  await page.getByRole('link', { name: 'Open workspace', exact: true }).click();
  await expect(page.locator('.dashboard-precision-viewport')).toBeVisible();
  await expect.poll(signature).toEqual(before);
  await expect(page.locator('[data-elceo-ui]')).toHaveCount(0);
});
