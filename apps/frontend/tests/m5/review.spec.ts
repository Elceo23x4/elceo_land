import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const family of ['analytics','coaching'])for(const width of [390,768,1440])test(`${family} review at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});await page.goto(`${origin}/${family}`);
 await expect(page.getByRole('heading',{name:family==='analytics'?'Review the pattern.':'Turn review into practice.'})).toBeVisible();
 await expect(page.getByText(family==='analytics'?'Sample size remains limited for setup-level conclusions.':'Require confirmation before entry',{exact:true})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:testInfo.outputPath(`${family}-${width}.png`),fullPage:true});
 await page.getByText(`Generate a new ${family} review`,{exact:true}).click();await page.getByRole('button',{name:'Request new review'}).click();await expect(page.getByRole('status')).toContainText('new snapshot was returned');await expect(page.getByRole('button',{name:'Request new review'})).toBeDisabled();
});
test('review state does not replace malformed or forbidden data with an empty result',async({page,context})=>{
 for(const [state,copy] of [['forbidden','This view is not available to your account.'],['malformed','The response could not be displayed safely.'],['empty','No analytics snapshot yet.']]) {
  await context.addCookies([{name:'m5-review',value:state,url:origin}]);await page.goto(origin+'/analytics');await expect(page.getByRole('heading',{name:copy})).toBeVisible();
 }
});
