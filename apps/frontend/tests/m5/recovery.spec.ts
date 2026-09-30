import { test, expect } from '@playwright/test';
const origin = 'http://127.0.0.1:3102';
for (const width of [360,390,768,1024,1920]) test(`recovery form is readable and neutral at ${width}`, async ({page}) => {
  await page.setViewportSize({width,height:900});
  await page.goto(`${origin}/forgot-password`);
  await expect(page.getByRole('heading',{level:1})).toContainText('Find your way');
  await page.getByLabel('Account email').fill('recovery@example.test');
  await page.getByRole('button',{name:'Request recovery instructions'}).click();
  await expect(page.getByRole('status')).toContainText('does not confirm an account exists');
  await expect(page.getByRole('button',{name:'Request recovery instructions'})).toHaveCount(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
test('reset validates Unicode policy and only renders confirmed outcomes',async({page})=>{
  await page.goto(`${origin}/reset-password`);
  await expect(page.getByText('A recovery link is required')).toBeVisible();
  await page.goto(`${origin}/reset-password?token=controlled-valid`);
  await page.getByLabel('New password',{exact:true}).fill('short');
  await page.getByRole('button',{name:'Confirm new password'}).click();
  await expect(page.getByRole('status')).toContainText('15 and 256');
  await page.getByLabel('New password',{exact:true}).fill('a deliberately long password');
  await page.getByRole('button',{name:'Confirm new password'}).click();
  await expect(page.getByRole('status')).toContainText('reset has been confirmed');
  await expect(page.locator('input[type="password"]')).toHaveCount(0);
  await page.goto(`${origin}/reset-password?token=controlled-expired`);
  await page.getByLabel('New password',{exact:true}).fill('a deliberately long password');
  await page.getByRole('button',{name:'Confirm new password'}).click();
  await expect(page.getByRole('status')).toContainText('invalid or has expired');
});
test('recovery fails closed for origins and client authority',async({request})=>{
  const path=origin+'/api/auth/password-reset/request';
  for(const headers of [
    {'origin':'https://foreign.invalid','idempotency-key':'test-key'},
    {'origin':origin,'authorization':'Bearer caller','idempotency-key':'test-key'},
    {'origin':origin},
  ] as Record<string,string>[]) expect((await request.post(path,{data:{email:'test@example.test'},headers})).ok()).toBe(false);
});
