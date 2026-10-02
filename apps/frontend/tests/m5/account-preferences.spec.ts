import {test,expect} from '@playwright/test';
const origin='http://127.0.0.1:3102';
for(const width of [360,390,768,1024,1440,1920])test(`tracked market and motion settings at ${width}`,async({page},testInfo)=>{
 await page.setViewportSize({width,height:900});await page.goto(origin+'/settings/assets');await expect(page.getByRole('heading',{name:'Define your field of view.'})).toBeVisible();await expect(page.getByLabel('XAU/USD',{exact:true})).toBeChecked();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if([390,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`settings-assets-${width}.png`),fullPage:true});
 await page.getByRole('link',{name:'Preferences',exact:true}).click();await expect(page.getByRole('heading',{name:'Set your preferred pace.'})).toBeVisible();await expect(page.getByRole('radio',{name:/Medium/})).toBeChecked();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if(width===390)await page.screenshot({path:testInfo.outputPath('settings-preferences-390.png'),fullPage:true});
});
test('saving motion re-reads and preserves every current notification flag',async({page})=>{
 await page.goto(origin+'/settings/preferences');await page.getByRole('radio',{name:/Low/}).check();const requested=page.waitForRequest(r=>r.method()==='PATCH'&&r.url().endsWith('/api/account/preferences'));await page.getByRole('button',{name:'Save motion preference'}).click();const r=await requested;expect(r.headers()['idempotency-key']).toBeTruthy();expect(r.postDataJSON()).toEqual({motionIntensity:'low',notifications:{inApp:true,email:false,browserPush:false},notificationClasses:{biasChanges:true,contradictionSpikes:false,keyLevelInteractions:true,macroEventWarnings:false,postEventRegimeShift:true,journalCoaching:false}});await expect(page.getByRole('status')).toContainText('Saved motion preference: low.');
});
test('saving tracked markets is separate from portfolio and confirms returned state',async({page})=>{
 await page.goto(origin+'/settings/assets');await page.getByLabel('BTC/USD',{exact:true}).check();const requested=page.waitForRequest(r=>r.method()==='PATCH'&&r.url().endsWith('/api/account/watchlist'));await page.getByRole('button',{name:'Save tracked markets'}).click();expect((await requested).postDataJSON()).toEqual({assets:['XAU/USD','BTC/USD']});await expect(page.getByRole('status')).toContainText('Saved tracked markets: XAU/USD, BTC/USD.');
});
test('unreadable current notification flags prevent a motion write',async({page})=>{
 await page.goto(origin+'/settings/preferences');let writes=0;await page.route('**/api/account/state',r=>r.fulfill({status:200,contentType:'application/json',body:'{"ok":true,"data":{}}'}));await page.route('**/api/account/preferences',r=>{writes++;return r.abort();});await page.getByRole('button',{name:'Save motion preference'}).click();await expect(page.getByRole('status')).toContainText('No save was submitted.');expect(writes).toBe(0);
});
