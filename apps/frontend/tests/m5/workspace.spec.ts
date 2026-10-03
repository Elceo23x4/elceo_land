import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const width of [360,390,768,1024,1440,1920])test(`workspace server snapshot at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});
 await page.goto(origin+'/workspace');
 await expect(page.getByRole('heading',{name:'Your working context.'})).toBeVisible();
 await expect(page.getByText('Watchlist entries',{exact:true})).toBeVisible();
 await expect(page.getByText('Health: attention needed')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`workspace-current-${width}.png`),fullPage:true});
 await page.getByRole('link',{name:'Agenda',exact:true}).click();
 await expect(page.getByRole('heading',{name:'What needs attention.'})).toBeVisible();
 await page.getByRole('link',{name:'History',exact:true}).click();
 await expect(page.getByRole('heading',{name:'A record of context.'})).toBeVisible();
 await page.getByText('Read this snapshot',{exact:true}).click();
 await expect(page.getByRole('heading',{name:'Portfolio context'})).toBeVisible();
});
test('workspace distinguishes empty, forbidden, malformed and unavailable',async({page,context})=>{
 for(const [state,copy] of [['empty','Your workspace has no snapshot yet.'],['forbidden','This view is not available to your account.'],['malformed','The response could not be displayed safely.'],['unavailable','The service is temporarily unavailable.']]){
  await context.addCookies([{name:'m5-workspace',value:state,url:origin}]);await page.goto(origin+'/workspace');await expect(page.getByRole('heading',{name:copy}).first()).toBeVisible();
 }
});
test('workspace refresh requires explicit action and renders partial outcome',async({page})=>{
 await page.goto(origin+'/workspace');
 await page.getByText('Refresh workspace',{exact:true}).click();
 await page.getByRole('button',{name:'Request workspace refresh'}).click();
 await expect(page.getByRole('status')).toContainText('partial success');
 await expect(page.getByRole('button',{name:'Request workspace refresh'})).toBeDisabled();
});
