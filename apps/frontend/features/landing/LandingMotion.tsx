'use client';
import { useEffect } from 'react';
import styles from './LandingMotion.module.css';

/** Narrow, presentation-only controller. Every scene remains readable without it. */
export function LandingMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-landing-root]');
    if (!root) return;

    const condition = window.matchMedia('(prefers-reduced-motion: no-preference)');
    let epoch = 0;
    let dispose: (() => void) | undefined;

    const update = () => {
      const current = ++epoch;
      dispose?.();
      dispose = undefined;
      if (!condition.matches) return;

      void import('./motion/scene-choreography').then(({ mountLandingMotion }) => {
        if (current === epoch && root.isConnected && condition.matches) {
          dispose = mountLandingMotion(root);
        }
      }).catch(() => {
        /* The static narrative remains the complete reduced-motion/error fallback. */
      });
    };

    condition.addEventListener('change', update);
    update();

    return () => {
      epoch++;
      condition.removeEventListener('change', update);
      dispose?.();
    };
  }, []);

  return <div className={styles.scope} data-landing-revealer aria-hidden="true">
    <span className={styles.axis} />
    <span className={styles.ringOuter} />
    <span className={styles.ringInner} />
    <span className={styles.core} />
    <span className={styles.spark} />
  </div>;
}
