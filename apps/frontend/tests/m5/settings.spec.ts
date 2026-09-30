import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const width of [360,390,768,1024,1440,1920])test(`account settings are readable at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});await page.goto(origin+'/settings/profile');
 await expect(page.getByRole('heading',{name:'Identity & continuity.'})).toBeVisible();
 await expect(page.getByText('m4-parity@example.test',{exact:true})).toBeVisible();
 await expect(page.locator('input:not([type="hidden"])')).toHaveCount(0);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`settings-profile-${width}.png`),fullPage:true});
 await page.getByRole('link',{name:'Account security',exact:true}).click();await expect(page.getByRole('heading',{name:'Keep access deliberate.'})).toBeVisible();
 await page.goto(origin+'/onboarding');await expect(page.getByRole('heading',{name:'Compliance review is not ready.'})).toBeVisible();
 await expect(page.getByRole('checkbox')).toHaveCount(0);await expect(page.getByRole('button',{name:/complete/i})).toHaveCount(0);
 if(width===390)await page.screenshot({path:testInfo.outputPath('onboarding-390.png'),fullPage:true});
});
test('signout uses the canonical CSRF/native POST relay',async({page})=>{
 await page.goto(origin+'/settings/security');await page.getByText('Sign out of ELCEO',{exact:true}).click();
 await page.getByRole('button',{name:'Confirm sign out'}).click();await expect(page).toHaveURL(/\/login\?m5=controlled-signout$/);
});
test('signout does not claim success if the CSRF service fails',async({page})=>{
 await page.route('**/api/auth/csrf',route=>route.fulfill({status:503,body:'{}',contentType:'application/json'}));
 await page.goto(origin+'/settings/security');await page.getByText('Sign out of ELCEO',{exact:true}).click();await page.getByRole('button',{name:'Confirm sign out'}).click();await expect(page.getByRole('status')).toContainText('session status has not been changed');
});
