import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const width of [360,390,768,1024,1440,1920])test(`notification context at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});await page.goto(origin+'/notifications');
 await expect(page.getByRole('heading',{name:'Keep the context in view.'})).toBeVisible();
 await page.getByText('Context updated for your tracked market',{exact:true}).click();await expect(page.getByText('Review the latest recorded context before your next decision.')).toBeVisible();
 await expect(page.getByText('Unread',{exact:true})).toBeVisible();await expect(page.getByText('End of the currently available list.')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 expect(await page.locator('main').textContent()).not.toContain('private-payload');
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`notifications-${width}.png`),fullPage:true});
});
test('inbox remains independent from the premium summary and malformed is not empty',async({page,context})=>{
 await context.addCookies([{name:'m5-notifications',value:'summary-forbidden',url:origin}]);await page.goto(origin+'/notifications');
 await expect(page.getByRole('heading',{name:'This view is not available to your account.'})).toBeVisible();await expect(page.getByText('Context updated for your tracked market',{exact:true})).toBeVisible();
 for(const [value,heading] of [['malformed','The response could not be displayed safely.'],['empty','Your inbox is clear.']]){await context.addCookies([{name:'m5-notifications',value,url:origin}]);await page.goto(origin+'/notifications');await expect(page.getByRole('heading',{name:heading})).toBeVisible();}
});
test('notification windows use the documented limit and invent no cursor',async({page,context})=>{
 await context.addCookies([{name:'m5-notifications',value:'window',url:origin}]);await page.goto(origin+'/notifications');await page.getByRole('link',{name:'Read a larger window'}).click();await expect(page).toHaveURL(/limit=100$/);await page.getByRole('link',{name:'Read a larger window'}).click();await expect(page).toHaveURL(/limit=200$/);await expect(page.getByRole('link',{name:'Read a larger window'})).toHaveCount(0);await expect(page.getByText('Showing the maximum 200 returned items. Older records cannot be paged through here.')).toBeVisible();
});
