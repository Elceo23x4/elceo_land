'use client';

import { useId, useRef, type KeyboardEvent, type ReactNode } from 'react';
import styles from './Modal.module.css';

/** Native top layer supplies an inert background and Escape; wrap Tab explicitly. */
export function Modal({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  function containFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'))
      .filter(element => element.getClientRects().length > 0 && !element.closest('[inert]'));
    const first = controls[0]; const last = controls.at(-1);
    if (!first || !last) { event.preventDefault(); event.currentTarget.focus(); return; }
    if (event.shiftKey && (event.target === first || event.target === event.currentTarget)) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && event.target === last) { event.preventDefault(); first.focus(); }
  }
  return <>
    <button ref={trigger} type="button" className={styles.trigger} onClick={() => dialog.current?.showModal()}>{label}</button>
    <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId} onKeyDown={containFocus} onClose={() => trigger.current?.focus()}>
      <div className={styles.heading}><h2 id={titleId}>{title}</h2><button type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label={`Close ${title}`}>Close</button></div>
      <div className={styles.content}>{children}</div>
    </dialog>
  </>;
}
