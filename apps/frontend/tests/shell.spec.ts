import { test, expect } from '@playwright/test';
test('server routing, source SVGs and scoped portal inheritance', async ({ page, request }) => {
 for (const path of ['/', '/api/session']) expect((await request.get(path)).status()).toBe(404);
 // M5 now authors public account entry. The absent alternative session endpoint
 // and fail-closed protected navigation below remain unchanged.
 for (const path of ['/login', '/signup']) {
   const entry = await request.get(path);
   expect(entry.status()).toBe(200);
   expect(await entry.text()).toContain('Continue with Google');
 }
 // M3 adds a fail-closed document guard before protected pages exist. With the
 // engineering server's deliberately absent auth topology, protected paths must
 // not fall through as anonymously accessible pages.
 for (const path of ['/dashboard', '/settings', '/admin']) expect((await request.get(path)).status()).toBe(503);
 const response=await request.get('/m1-proof');
 expect(response.status()).toBe(200);
 expect(await response.text()).toContain('Mediation:');
 expect((await request.head('/m1-proof')).status()).toBe(200);
 const errors:string[]=[]; page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/m1-proof');
 await expect(page.getByTestId('portal-text')).toBeVisible();
 await expect(page.getByTestId('portal-text')).toHaveCSS('color','rgb(20, 40, 60)');
 await expect(page.getByTestId('public-fixture')).toHaveCSS('color','rgb(100, 20, 20)');
 await expect(page.getByTestId('portal-text')).toHaveCSS('font-family','Arial, sans-serif');
 await expect(page.locator('svg[aria-label="Source-safe SVG component fixture"]')).toBeVisible();
 expect(await page.locator('img').evaluate((el: HTMLImageElement)=>el.complete && el.naturalWidth>0)).toBe(true);
 expect(errors).toEqual([]);
});
