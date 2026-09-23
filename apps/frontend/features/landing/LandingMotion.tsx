'use client';
import { useEffect } from 'react';

/** Narrow, presentation-only controller. Every scene remains readable without it. */
export function LandingMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-landing-root]');
    if (!root) return;
    const condition = window.matchMedia('(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let epoch = 0;
    let dispose: (() => void) | undefined;
    const update = () => {
      const current = ++epoch;
      dispose?.(); dispose = undefined;
      if (!condition.matches) return;
      void import('./motion/scene-choreography').then(({ mountLandingMotion }) => {
        if (current === epoch && root.isConnected && condition.matches) dispose = mountLandingMotion(root);
      }).catch(() => { /* Static narrative is the complete non-motion fallback. */ });
    };
    condition.addEventListener('change', update); update();
    return () => { epoch++; condition.removeEventListener('change', update); dispose?.(); };
  }, []);
  return null;
}
