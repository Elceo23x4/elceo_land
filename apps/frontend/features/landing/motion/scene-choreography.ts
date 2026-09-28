import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const range = (value: number, start: number, end: number) => clamp01((value - start) / Math.max(end - start, 0.0001));

type SceneName =
  | 'section-01-hero'
  | 'section-02-depth'
  | 'section-03-blind-spots'
  | 'section-04-principles'
  | 'section-05-perspective'
  | 'section-06-workspace'
  | 'section-07-entry';

type TransitionOptions = {
  roller?: boolean;
  exitY?: number;
  exitBlur?: number;
  revealTo?: gsap.TweenVars;
};

/**
 * Sole cinematic owner for the landing page.
 *
 * Design invariant: one scroll timeline owns a scene transition. No second tween is
 * allowed to leave the same opacity/filter/transform property in an intermediate
 * state. Desktop chapters pin while the following scene reaches the viewport, then
 * reveal it only near the end of the pin. Mobile uses lighter reversible entrances.
 */
export function mountLandingMotion(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);

  const cleanup: Array<() => void> = [];
  const ownedTriggers: ScrollTrigger[] = [];
  const desktop = window.matchMedia('(min-width: 761px)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const context = gsap.context(() => {
    const scene = (name: SceneName) => root.querySelector<HTMLElement>(`[data-landing-scene="${name}"]`);
    const directChildren = (element: HTMLElement) => [...element.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
    const revealer = root.querySelector<HTMLElement>('[data-landing-revealer]');

    const hero = scene('section-01-hero');
    const depth = scene('section-02-depth');
    const aperture = scene('section-03-blind-spots');
    const principles = scene('section-04-principles');
    const perspective = scene('section-05-perspective');
    const workspace = scene('section-06-workspace');
    const entry = scene('section-07-entry');

    if (revealer) gsap.set(revealer, { opacity: 0, y: 0, rotation: 0, scale: 0.9 });

    const addPinnedTransition = (
      current: HTMLElement,
      next: HTMLElement,
      revealFrom: gsap.TweenVars,
      options: TransitionOptions = {},
    ) => {
      const currentContent = directChildren(current);
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: current,
          start: 'top top',
          end: () => `+=${window.innerHeight}`,
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* The following scene travels behind the pinned scene but stays concealed until
         most of its viewport is physically in place. This removes the generic
         "next section rising from below" look. */
      timeline.fromTo(next,
        { ...revealFrom, opacity: 0.04 },
        {
          ...(options.revealTo ?? { clipPath: 'inset(0% 0% 0% 0%)' }),
          opacity: 1,
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          duration: 0.26,
          immediateRender: false,
        },
        0.74,
      );

      timeline.fromTo(currentContent,
        { opacity: 1, y: 0, filter: 'blur(0px)' },
        {
          opacity: 0,
          y: options.exitY ?? -26,
          filter: `blur(${options.exitBlur ?? 10}px)`,
          duration: 0.34,
          stagger: 0.012,
          immediateRender: false,
        },
        0.58,
      );

      timeline.fromTo(current,
        { opacity: 1 },
        { opacity: 0, duration: 0.16, immediateRender: false },
        0.84,
      );

      /* The transition object is deliberately exclusive to Hero → Section 2. It acts
         as the roller that drives the first scene change, then disappears permanently. */
      if (options.roller && revealer) {
        timeline.fromTo(revealer,
          { opacity: 0, y: () => -window.innerHeight * 0.36, rotation: -28, scale: 0.74 },
          { opacity: 0.72, y: () => window.innerHeight * 0.25, rotation: 52, scale: 1.02, duration: 0.27, immediateRender: false },
          0.65,
        );
        timeline.to(revealer, { opacity: 0, scale: 0.82, duration: 0.08 }, 0.92);
      }
    };

    if (desktop) {
      if (hero && depth) {
        addPinnedTransition(
          hero,
          depth,
          { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.025 },
          { roller: true, exitY: -20, exitBlur: 12, revealTo: { clipPath: 'inset(0% 0% 0% 0%)' } },
        );
      }
      if (depth && aperture) {
        addPinnedTransition(
          depth,
          aperture,
          { clipPath: 'polygon(0 48%, 100% 43%, 100% 57%, 0 52%)', scale: 1.012 },
          { exitY: -18, exitBlur: 9, revealTo: { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' } },
        );
      }
      if (aperture && principles) {
        addPinnedTransition(
          aperture,
          principles,
          { clipPath: 'inset(0% 49% 0% 49%)', scale: 1.015 },
          { exitY: -22, exitBlur: 8, revealTo: { clipPath: 'inset(0% 0% 0% 0%)' } },
        );
      }
      if (principles && perspective) {
        addPinnedTransition(
          principles,
          perspective,
          { clipPath: 'polygon(0 100%, 100% 66%, 100% 100%, 0 100%)', scale: 1.018 },
          { exitY: -18, exitBlur: 11, revealTo: { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' } },
        );
      }

      /* Section 05 owns its own pin because its information planes progress through
         depth continuously. Its final quarter also reveals Section 06. */
      if (perspective && workspace) {
        const field = perspective.querySelector<HTMLElement>('[data-landing-planes]');
        const planes = field ? [...field.querySelectorAll<HTMLElement>('[data-landing-plane]')] : [];
        const horizon = perspective.querySelector<HTMLElement>('[data-scene-media="world-environment"]');
        const fadeTargets = directChildren(perspective).filter(child => child !== horizon && child !== field);

        if (field && planes.length) {
          const planeText = planes.map(plane => [...plane.querySelectorAll<HTMLElement>(':scope > span, :scope > p')]);

          const render = (progress: number) => {
            const p = clamp01(progress);
            const deckProgress = range(p, 0, 0.78);
            const active = deckProgress * (planes.length - 1);
            const middle = (planes.length - 1) / 2;
            const fieldShift = (middle - active) * 7.5;
            field.style.transform = `translate3d(${fieldShift}%,0,0)`;

            planes.forEach((plane, index) => {
              const signed = index - active;
              const distance = Math.abs(signed);
              const z = 92 - Math.min(distance, 2.6) * 92;
              const y = Math.min(distance * 1.55, 4.4);
              const rotation = Math.max(-20, Math.min(20, -signed * 8.5));
              const scale = Math.max(0.86, 1.035 - distance * 0.055);
              const opacity = Math.max(0.42, 1 - distance * 0.17);
              const brightness = Math.max(0.54, 1.06 - distance * 0.14);
              const saturation = Math.max(0.74, 1.08 - distance * 0.08);

              /* Existing M5 CSS intentionally gives the static perspective transforms
                 !important. Inline important keeps this continuous runtime state as the
                 sole active owner without weakening the static/reduced-motion fallback. */
              plane.style.setProperty('transform', `translate3d(0,${y}%,${z}px) rotateY(${rotation}deg) scale(${scale})`, 'important');
              plane.style.opacity = String(opacity);
              plane.style.filter = `brightness(${brightness}) saturate(${saturation})`;
              planeText[index].forEach(text => { text.style.opacity = String(Math.max(0.32, 1 - distance * 0.38)); });
            });

            const exit = range(p, 0.66, 1);
            const reveal = range(p, 0.73, 1);
            const fadeOpacity = String(1 - exit * 0.96);
            const blur = `blur(${exit * 9}px)`;

            fadeTargets.forEach(target => {
              target.style.opacity = fadeOpacity;
              target.style.filter = blur;
            });
            if (horizon) {
              horizon.style.opacity = String(1 - exit * 0.74);
              horizon.style.filter = `blur(${exit * 5}px)`;
            }
            field.style.opacity = String(1 - exit * 0.9);

            workspace.style.opacity = String(reveal);
            workspace.style.clipPath = `polygon(0 ${100 - reveal * 100}%, 100% ${Math.max(0, 72 - reveal * 72)}%, 100% 100%, 0 100%)`;
          };

          const trigger = ScrollTrigger.create({
            trigger: perspective,
            start: 'top top',
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => render(self.progress),
            onRefresh: self => render(self.progress),
          });
          ownedTriggers.push(trigger);
          render(trigger.progress);

          cleanup.push(() => {
            field.style.removeProperty('transform');
            field.style.removeProperty('opacity');
            planes.forEach((plane, index) => {
              plane.style.removeProperty('transform');
              plane.style.removeProperty('opacity');
              plane.style.removeProperty('filter');
              planeText[index].forEach(text => text.style.removeProperty('opacity'));
            });
            fadeTargets.forEach(target => {
              target.style.removeProperty('opacity');
              target.style.removeProperty('filter');
            });
            horizon?.style.removeProperty('opacity');
            horizon?.style.removeProperty('filter');
            workspace.style.removeProperty('opacity');
            workspace.style.removeProperty('clip-path');
          });
        }
      }

      if (workspace && entry) {
        addPinnedTransition(
          workspace,
          entry,
          { clipPath: 'circle(4% at 50% 54%)', scale: 1.028 },
          { exitY: -20, exitBlur: 9, revealTo: { clipPath: 'circle(78% at 50% 54%)' } },
        );
      }
    } else {
      /* Mobile remains cinematic but avoids desktop pinning/perspective ownership.
         Every state is reversible and tied directly to scroll position. */
      const mobileScenes = [depth, aperture, principles, perspective, workspace, entry].filter((item): item is HTMLElement => Boolean(item));
      mobileScenes.forEach((chapter, index) => {
        const content = directChildren(chapter);
        gsap.fromTo(content,
          { opacity: 0.48, y: 24 + (index % 2) * 6 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.018,
            ease: 'none',
            immediateRender: false,
            scrollTrigger: {
              trigger: chapter,
              start: 'top 96%',
              end: 'top 48%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    }

    /* Section 03 ambient lens is independent of scroll and is deliberately omitted on
       coarse pointers. It never owns the paper/content transform state. */
    if (aperture) {
      const lens = aperture.querySelector<HTMLElement>('[data-landing-lens]');
      if (finePointer && lens) {
        let bounds = aperture.getBoundingClientRect();
        const x = gsap.quickTo(lens, 'x', { duration: 0.62, ease: 'power2.out' });
        const y = gsap.quickTo(lens, 'y', { duration: 0.62, ease: 'power2.out' });
        const opacity = gsap.quickTo(lens, 'opacity', { duration: 0.22, ease: 'power1.out' });
        const enter = () => { bounds = aperture.getBoundingClientRect(); opacity(0.34); };
        const move = (event: PointerEvent) => { x(event.clientX - bounds.left); y(event.clientY - bounds.top); };
        const leave = () => { opacity(0); };
        aperture.addEventListener('pointerenter', enter);
        aperture.addEventListener('pointermove', move);
        aperture.addEventListener('pointerleave', leave);
        cleanup.push(() => {
          aperture.removeEventListener('pointerenter', enter);
          aperture.removeEventListener('pointermove', move);
          aperture.removeEventListener('pointerleave', leave);
        });
      }
    }

    /* Footer is visible by construction. Only its internal content receives a subtle
       lift, so a missed/partial ScrollTrigger can never hide the legal scene itself. */
    const footer = root.querySelector<HTMLElement>('footer[data-landing-scene="section-08-footer"]');
    if (footer) {
      const footerContent = directChildren(footer);
      gsap.fromTo(footerContent,
        { y: 22, opacity: 0.62 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.035,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: { trigger: footer, start: 'top 98%', end: 'top 72%', scrub: true, invalidateOnRefresh: true },
        },
      );
    }

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    cleanup.push(() => window.cancelAnimationFrame(refreshFrame));
  }, root);

  return () => {
    cleanup.forEach(dispose => dispose());
    ownedTriggers.forEach(trigger => trigger.kill());
    context.revert();

    /* GSAP can leave an identity transform behind after reverting a tweened image.
       Reduced-motion and breakpoint remounts must restore the genuine static DOM, not
       a matrix(1,0,0,1,0,0) residue that changes later layout/acceptance semantics. */
    const world = root.querySelector<HTMLElement>('[data-landing-world]');
    world?.style.removeProperty('transform');
    world?.style.removeProperty('filter');
    world?.style.removeProperty('opacity');
  };
}
