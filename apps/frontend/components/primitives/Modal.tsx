'use client';

import { useId, useRef, type ReactNode } from 'react';
import styles from './Modal.module.css';

/** Native top-layer dialog supplies focus containment/inert background and Escape. */
export function Modal({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  return <>
    <button ref={trigger} type="button" className={styles.trigger} onClick={() => dialog.current?.showModal()}>{label}</button>
    <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId} onClose={() => trigger.current?.focus()}>
      <div className={styles.heading}><h2 id={titleId}>{title}</h2><button type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label={`Close ${title}`}>Close</button></div>
      <div className={styles.content}>{children}</div>
    </dialog>
  </>;
}
