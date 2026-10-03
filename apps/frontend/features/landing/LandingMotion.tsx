'use client';
import { useEffect } from 'react';
import styles from './LandingMotion.module.css';
import refinement from './LandingRefinement.module.css';
import viewport from './LandingViewport.module.css';
import sticky from './LandingSticky.module.css';

/** Narrow, presentation-only controller. Every scene remains readable without it. */
export function LandingMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-landing-root]');
    if (!root) return;

    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const desktop = window.matchMedia('(min-width: 761px)');
    const finePointer = window.matchMedia('(pointer: fine)');
    const conditions = [motion, desktop, finePointer];
    let epoch = 0;
    let dispose: (() => void) | undefined;

    const update = () => {
      const current = ++epoch;
      dispose?.();
      dispose = undefined;
      if (!motion.matches) return;

      void import('./motion/scene-choreography').then(({ mountLandingMotion }) => {
        if (current === epoch && root.isConnected && motion.matches) {
          dispose = mountLandingMotion(root);
        }
      }).catch(() => {
        /* The static narrative remains the complete reduced-motion/error fallback. */
      });
    };

    conditions.forEach(condition => condition.addEventListener('change', update));
    update();

    return () => {
      epoch++;
      conditions.forEach(condition => condition.removeEventListener('change', update));
      dispose?.();
    };
  }, []);

  return <><div className={`${styles.scope} ${refinement.scope} ${viewport.viewport} ${sticky.sticky}`} data-landing-revealer aria-hidden="true">
    <span className={styles.axis} />
    <span className={styles.ringOuter} />
    <span className={styles.ringInner} />
    <span className={styles.core} />
    <span className={styles.spark} />
  </div>
    <div className={styles.splitCandle} data-landing-split-candle aria-hidden="true">
      <span className={styles.candleHalf} data-candle-half="left" />
      <span className={styles.candleHalf} data-candle-half="right" />
    </div>
  </>;
}
