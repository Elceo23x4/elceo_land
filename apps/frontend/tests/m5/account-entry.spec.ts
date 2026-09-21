import { test, expect } from '@playwright/test';
const origin = 'http://127.0.0.1:3102';

test.beforeEach(async ({ context }) => {
  await context.addCookies([{ name: 'm5-test-state', value: 'signed-out', url: origin, httpOnly: true, sameSite: 'Lax' }]);
});

for (const width of [360, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
  test(`Google-only account entry at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/login', '/signup']) {
      expect((await page.goto(origin + path))?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.getByRole('button', { name: 'Continue with Google' })).toBeVisible();
      await expect(page.locator('input[type=email], input[type=password]')).toHaveCount(0);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.getByRole('button', { name: 'Continue with Google' }).evaluate(el => el.getBoundingClientRect().height)).toBeGreaterThanOrEqual(44);
      if (width === 390 || width === 1440) {
        const screenshot = testInfo.outputPath(`${path.slice(1)}-${width}.png`);
        await page.screenshot({ path: screenshot, fullPage: true });
        await testInfo.attach(`${path}-${width}`, { path: screenshot, contentType: 'image/png' });
      }
    }
  });
}

test('canonical CSRF challenge and same-origin native Google POST use the unchanged relay', async ({ page, request }) => {
  await page.goto(`${origin}/login?callbackUrl=${encodeURIComponent('/workspace?view=current')}`);
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await expect(page).toHaveURL(`${origin}/m1-proof?m5=controlled-signin`);
  expect(await (await request.get('http://127.0.0.1:4010/__m5/last-signin')).json()).toEqual({
    callbackUrl: '/workspace?view=current', csrfVerified: true, origin,
  });
});

test('missing provider and invalid CSRF fail safely without submitting', async ({ page }) => {
  let posts = 0;
  page.on('request', request => { if (request.url().includes('/signin/google') && request.method() === 'POST') posts++; });
  await page.route('**/api/auth/providers', route => route.fulfill({ json: {} }));
  await page.goto(`${origin}/signup`);
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await expect(page.getByRole('status')).toContainText('unavailable');
  await expect(page.getByRole('button', { name: 'Continue with Google' })).toBeEnabled();
  await page.unroute('**/api/auth/providers');
  await page.route('**/api/auth/csrf', route => route.fulfill({ json: { unexpected: true } }));
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await expect(page.getByRole('status')).toContainText('unavailable');
  expect(posts).toBe(0);
});

test('callback injection is rejected and provider errors are not reflected verbatim', async ({ page }) => {
  await page.goto(`${origin}/login?callbackUrl=https://external.invalid/&error=UNTRUSTED_ERROR_TEXT`);
  await expect(page.locator('input[name=callbackUrl]')).toHaveValue('/dashboard');
  await expect(page.getByRole('alert')).toContainText('Sign-in could not be completed');
  await expect(page.getByRole('alert')).not.toContainText('UNTRUSTED_ERROR_TEXT');
});

test('signed-in presentation comes from canonical session resolution', async ({ page, context }) => {
  await context.clearCookies();
  await page.goto(`${origin}/login`);
  await expect(page.getByRole('heading', { name: 'You’re signed in.' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continue with Google' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Continue', exact: false }).filter({ hasText: /^Continue/ })).toHaveAttribute('href', '/dashboard');
});
