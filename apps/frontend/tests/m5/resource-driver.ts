import type { CDPSession } from '@playwright/test';

/** Test-only driver: avoids measuring Playwright's lazily compiled ARIA/selector
 * engine. Real CDP mouse input still activates Next links and pointer handlers.
 * No app bundle imports this module or exposes these helpers. */
export async function createResourceDriver(session: CDPSession) {
  const evaluate = async <T>(expression: string): Promise<T> => {
    const result = await session.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(`Resource journey failed: ${result.exceptionDetails.text}`);
    return result.result.value as T;
  };
  await evaluate(`globalThis.__m5ResourceDriver = (() => {
    const origin = performance.timeOrigin;
    const frames = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const find = selector => { const element = document.querySelector(selector); if (!element) throw Error('Missing journey target: '+selector); return element; };
    return {
      async scroll(reverse) {
        const sections = [...document.querySelectorAll('[data-landing-scene]')];
        if (sections.length !== 8) throw Error('Landing scene count changed');
        for (const section of reverse ? sections.reverse() : sections) {
          section.scrollIntoView({block:'center',behavior:'instant'}); await frames();
        }
      },
      async point(selector, ratio) {
        const element = find(selector);
        element.scrollIntoView({block:'center',behavior:'instant'}); await frames();
        const box = element.getBoundingClientRect();
        return {x:box.x+box.width*ratio,y:box.y+box.height/2};
      },
      async link(path) {
        window.scrollTo({top:0,behavior:'instant'}); await frames();
        const element=[...document.querySelectorAll('nav[aria-label="Main"] a[href="'+path+'"]')].find(el=>el.getClientRects().length);
        if(!element) throw Error('Visible navigation target missing');
        const box=element.getBoundingClientRect();
        if (!box.width || !box.height) throw Error('Navigation is not visible');
        return {x:box.x+box.width/2,y:box.y+box.height/2};
      },
      async ready(text) {
        const deadline=Date.now()+5000;
        while (!document.querySelector('h1')?.textContent.includes(text)) {
          if(Date.now()>deadline) throw Error('Route failed to render: '+text);
          await new Promise(resolve=>setTimeout(resolve,25));
        }
        if(performance.timeOrigin!==origin) throw Error('Full document reload would invalidate resource evidence');
      },
      frames,
    };
  })(); true`);
  const call = <T>(method: string, ...args: unknown[]) => evaluate<T>(`globalThis.__m5ResourceDriver.${method}(${args.map(arg=>JSON.stringify(arg)).join(',')})`);
  const move = async (point: {x:number;y:number}) => session.send('Input.dispatchMouseEvent', {type:'mouseMoved',...point});
  return {
    scroll: (reverse=false) => call('scroll', reverse),
    async pointer(selector:string) {
      const from = await call<{x:number;y:number}>('point',selector,.25);
      const to = await call<{x:number;y:number}>('point',selector,.75);
      await move(from);
      for (let step=1;step<=5;step++) await move({x:from.x+(to.x-from.x)*step/5,y:from.y+(to.y-from.y)*step/5});
      await move({x:0,y:0});
    },
    async navigate(path:string, heading:string) {
      const point=await call<{x:number;y:number}>('link',path);
      await move(point);
      await session.send('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point});
      await session.send('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...point});
      await call('ready',heading);
    },
    frames: () => call('frames'),
    dispose: () => evaluate('delete globalThis.__m5ResourceDriver'),
  };
}
