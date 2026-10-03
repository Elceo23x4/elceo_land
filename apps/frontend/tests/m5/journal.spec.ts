import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const width of [360,390,768,1024,1440,1920])test(`journal reading and authored draft at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});await page.goto(origin+'/journal');await expect(page.getByRole('heading',{name:'Keep the reasoning.'})).toBeVisible();await page.getByRole('link',{name:'Gold real-yield continuation ↗'}).click();await expect(page.getByRole('heading',{name:'The recorded plan'})).toBeVisible();await expect(page.getByText('Recorded P&L amount',{exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`journal-case-${width}.png`),fullPage:true});
 await page.getByRole('link',{name:'New draft',exact:true}).click();await expect(page.getByRole('heading',{name:'Begin with the reasoning.'})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`journal-new-${width}.png`),fullPage:true});
});
test('draft submission records explicit fields once and opens only a confirmed case',async({page})=>{
 await page.goto(origin+'/journal/new');await page.getByLabel('Market',{exact:true}).fill('XAU/USD');await page.getByLabel('Timeframe',{exact:true}).selectOption('H4');await page.getByLabel('Case title',{exact:true}).fill('Controlled new context');await page.getByLabel('Your thesis · optional').fill('Wait for the recorded confirmation.');
 const req=page.waitForRequest(r=>r.method()==='POST'&&r.url().includes('/api/journal/cases'));
 await page.getByRole('button',{name:'Record this draft ↗'}).click();const request=await req;expect(request.postDataJSON()).toMatchObject({asset:'XAU/USD',timeframe:'H4',title:'Controlled new context'});expect(request.headers()['idempotency-key']).toBeTruthy();await expect(page).toHaveURL(/\/journal\/jcase-demo-001$/);
});
test('journal empty and malformed remain distinct',async({page,context})=>{
 for(const [value,heading] of [['empty','Your case record begins here.'],['malformed','The response could not be displayed safely.']]){await context.addCookies([{name:'m5-journal',value,url:origin}]);await page.goto(origin+'/journal');await expect(page.getByRole('heading',{name:heading})).toBeVisible();}
});
test('ambiguous draft outcome never creates an automatic second submission',async({page})=>{
 let count=0;await page.route('**/api/journal/cases',route=>{count++;return route.fulfill({status:503,contentType:'application/json',body:'{}'});});await page.goto(origin+'/journal/new');await page.getByLabel('Market',{exact:true}).fill('XAU/USD');await page.getByLabel('Timeframe',{exact:true}).selectOption('H4');await page.getByLabel('Case title',{exact:true}).fill('Ambiguous context');await page.getByRole('button',{name:'Record this draft ↗'}).click();await expect(page.getByRole('status')).toContainText('unconfirmed');await expect(page.getByRole('button',{name:'Record this draft ↗'})).toBeDisabled();expect(count).toBe(1);
});
