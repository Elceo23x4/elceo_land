import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const width of [390,768,1024,1440])test(`commercial account evidence at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});await page.goto(origin+'/settings/billing');await expect(page.getByRole('heading',{name:'Know where your plan stands.'})).toBeVisible();await expect(page.getByText('The outcome needs reconciliation. Do not start another payment to resolve this uncertainty.')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`settings-billing-${width}.png`),fullPage:true});
 await page.getByRole('link',{name:'Access & usage',exact:true}).click();await expect(page.getByRole('heading',{name:'Understand your access.'})).toBeVisible();await expect(page.getByText('workspace.read',{exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if(width===390)await page.screenshot({path:testInfo.outputPath('settings-access-390.png'),fullPage:true});
});
test('legacy provider return routes to canonical billing without granting success',async({page})=>{
 await page.goto(origin+'/settings?billing=sandbox_success');await expect(page).toHaveURL(origin+'/settings/billing');await expect(page.getByText('The outcome needs reconciliation. Do not start another payment to resolve this uncertainty.')).toBeVisible();await expect(page.getByText('Payment is recorded as succeeded.',{exact:false})).toHaveCount(0);
});
test('portal needs an explicit request and returns only a safe provider link',async({page})=>{
 await page.goto(origin+'/settings/billing');await expect(page.getByRole('link',{name:/Continue to billing/})).toHaveCount(0);await page.getByRole('button',{name:'Request billing management'}).click();await expect(page.getByRole('link',{name:'Continue to billing.example.test ↗'})).toHaveAttribute('href','https://billing.example.test/controlled-session');
});
test('malformed billing is not no-subscription and unsafe portal URL is rejected',async({page,context})=>{
 await context.addCookies([{name:'m5-billing',value:'malformed',url:origin}]);await page.goto(origin+'/settings/billing');await expect(page.getByRole('heading',{name:'The response could not be displayed safely.'})).toBeVisible();await page.route('**/api/billing/portal',r=>r.fulfill({status:200,contentType:'application/json',body:'{"portalUrl":"javascript:alert(1)"}'}));await page.getByRole('button',{name:'Request billing management'}).click();await expect(page.locator('section').filter({has:page.getByRole('heading',{name:'Billing management',exact:true})}).getByRole('status')).toContainText('not available');await expect(page.locator('a[href^="javascript:"]')).toHaveCount(0);
});
