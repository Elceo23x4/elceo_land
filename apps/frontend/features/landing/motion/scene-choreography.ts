import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const range = (value: number, start: number, end: number) => clamp01((value - start) / Math.max(end - start, 0.0001));
const smoothstep = (value: number) => {
  const p = clamp01(value);
  return p * p * (3 - 2 * p);
};

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
 * Landing-only cinematic controller.
 *
 * Every scroll-owned visual property is derived from ScrollTrigger.progress on each
 * update. There are no scrubbed GSAP timelines holding stale intermediate state, so
 * forward/reverse traversal is symmetrical and teardown can release every trigger.
 */
export function mountLandingMotion(root: HTMLElement) {
  const cleanup: Array<() => void> = [];
  const ownedTriggers: ScrollTrigger[] = [];
  const desktop = window.matchMedia('(min-width: 761px)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const scene = (name: SceneName) => root.querySelector<HTMLElement>(`[data-landing-scene="${name}"]`);
  const directChildren = (element: HTMLElement) => [...element.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
  const own = (vars: ScrollTrigger.Vars) => {
    const trigger = ScrollTrigger.create(vars);
    ownedTriggers.push(trigger);
    return trigger;
  };
  const removeProperties = (element: HTMLElement, properties: string[]) => {
    properties.forEach(property => element.style.removeProperty(property));
  };

  const hero = scene('section-01-hero');
  const depth = scene('section-02-depth');
  const aperture = scene('section-03-blind-spots');
  const principles = scene('section-04-principles');
  const perspective = scene('section-05-perspective');
  const workspace = scene('section-06-workspace');
  const entry = scene('section-07-entry');
  const revealer = root.querySelector<HTMLElement>('[data-landing-revealer]');

  if (revealer) {
    revealer.style.opacity = '0';
    revealer.style.translate = '0 0';
    revealer.style.rotate = '0deg';
    revealer.style.scale = '.9';
    cleanup.push(() => removeProperties(revealer, ['opacity', 'translate', 'rotate', 'scale']));
  }

  const addPinnedTransition = (
    current: HTMLElement,
    next: HTMLElement,
    revealFrom: gsap.TweenVars,
    options: TransitionOptions = {},
  ) => {
    const currentContent = directChildren(current);
    const fromClip = String(revealFrom.clipPath ?? 'inset(0% 0% 100% 0%)');
    const toClip = String(options.revealTo?.clipPath ?? 'inset(0% 0% 0% 0%)');
    const fromScale = Number(revealFrom.scale ?? 1);
    const exitY = Math.abs(options.exitY ?? -22);
    const exitBlur = Math.max(0, options.exitBlur ?? 8);

    const render = (progress: number) => {
      const p = clamp01(progress);
      const reveal = smoothstep(range(p, 0.72, 0.985));
      const sectionFade = smoothstep(range(p, 0.84, 1));

      next.style.opacity = String(0.04 + reveal * 0.96);
      next.style.clipPath = gsap.utils.interpolate(fromClip, toClip, reveal) as string;
      next.style.scale = String(fromScale + (1 - fromScale) * reveal);

      currentContent.forEach((node, index) => {
        const dissolve = smoothstep(range(p, 0.56 + index * 0.012, 0.86 + index * 0.012));
        node.style.opacity = String(1 - dissolve);
        node.style.filter = `blur(${dissolve * exitBlur}px)`;
        node.style.translate = `0 ${-dissolve * exitY}px`;
      });
      current.style.opacity = String(1 - sectionFade);

      if (options.roller && revealer) {
        const enter = smoothstep(range(p, 0.61, 0.78));
        const leave = smoothstep(range(p, 0.86, 0.96));
        const visible = enter * (1 - leave);
        const travel = -window.innerHeight * 0.3 + enter * window.innerHeight * 0.58;
        revealer.style.opacity = String(visible * 0.72);
        revealer.style.translate = `0 ${travel}px`;
        revealer.style.rotate = `${-28 + enter * 80}deg`;
        revealer.style.scale = String(0.74 + enter * 0.28 - leave * 0.16);
      }
    };

    const trigger = own({
      trigger: current,
      start: 'top top',
      end: () => `+=${window.innerHeight}`,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: self => render(self.progress),
      onRefresh: self => render(self.progress),
      onEnter: self => render(self.progress),
      onEnterBack: self => render(self.progress),
      onLeave: () => render(1),
      onLeaveBack: () => render(0),
    });
    render(trigger.progress);

    cleanup.push(() => {
      removeProperties(current, ['opacity']);
      currentContent.forEach(node => removeProperties(node, ['opacity', 'filter', 'translate']));
      removeProperties(next, ['opacity', 'clip-path', 'scale']);
    });
  };

  if (desktop) {
    if (hero && depth) {
      addPinnedTransition(
        hero,
        depth,
        { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.018 },
        { roller: true, exitY: -18, exitBlur: 8, revealTo: { clipPath: 'inset(0% 0% 0% 0%)' } },
      );
    }
    if (depth && aperture) {
      addPinnedTransition(
        depth,
        aperture,
        { clipPath: 'polygon(0 48%, 100% 43%, 100% 57%, 0 52%)', scale: 1.012 },
        { exitY: -16, exitBlur: 7, revealTo: { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' } },
      );
    }
    if (aperture && principles) {
      addPinnedTransition(
        aperture,
        principles,
        { clipPath: 'inset(0% 49% 0% 49%)', scale: 1.014 },
        { exitY: -18, exitBlur: 7, revealTo: { clipPath: 'inset(0% 0% 0% 0%)' } },
      );
    }
    if (principles && perspective) {
      addPinnedTransition(
        principles,
        perspective,
        { clipPath: 'polygon(0 100%, 100% 66%, 100% 100%, 0 100%)', scale: 1.014 },
        { exitY: -15, exitBlur: 8, revealTo: { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' } },
      );
    }

    /* Section 05 is a continuous depth deck. Progress is paced so each card settles
       briefly before the next interpolation, removing the old abrupt index jump and
       the delayed CSS-transition tail. */
    if (perspective && workspace) {
      const field = perspective.querySelector<HTMLElement>('[data-landing-planes]');
      const planes = field ? [...field.querySelectorAll<HTMLElement>('[data-landing-plane]')] : [];
      const horizon = perspective.querySelector<HTMLElement>('[data-scene-media="world-environment"]');
      const fadeTargets = directChildren(perspective).filter(child => child !== horizon && child !== field);

      if (field && planes.length) {
        const planeText = planes.map(plane => [...plane.querySelectorAll<HTMLElement>(':scope > span, :scope > p')]);

        const render = (progress: number) => {
          const p = clamp01(progress);
          const raw = range(p, 0.02, 0.79) * (planes.length - 1);
          const step = Math.min(planes.length - 1, Math.floor(raw));
          const fraction = raw - step;
          const pacedFraction = smoothstep(range(fraction, 0.16, 0.84));
          const active = Math.min(planes.length - 1, step + pacedFraction);
          const middle = (planes.length - 1) / 2;
          const fieldShift = (middle - active) * 4.5;
          field.style.transform = `translate3d(${fieldShift}%,0,0)`;

          planes.forEach((plane, index) => {
            const signed = index - active;
            const distance = Math.abs(signed);
            const z = 84 - Math.min(distance, 2.6) * 86;
            const y = Math.min(distance * 1.4, 4);
            const rotation = Math.max(-18, Math.min(18, -signed * 8));
            const scale = Math.max(0.87, 1.02 - distance * 0.052);
            const opacity = Math.max(0.44, 1 - distance * 0.16);
            const brightness = Math.max(0.56, 1.05 - distance * 0.135);
            const saturation = Math.max(0.76, 1.06 - distance * 0.075);

            plane.style.setProperty('transform', `translate3d(0,${y}%,${z}px) rotateY(${rotation}deg) scale(${scale})`, 'important');
            plane.style.opacity = String(opacity);
            plane.style.filter = `brightness(${brightness}) saturate(${saturation})`;
            planeText[index].forEach(text => { text.style.opacity = String(Math.max(0.34, 1 - distance * 0.36)); });
          });

          const exit = smoothstep(range(p, 0.7, 1));
          const reveal = smoothstep(range(p, 0.76, 0.995));
          fadeTargets.forEach(target => {
            target.style.opacity = String(1 - exit * 0.94);
            target.style.filter = `blur(${exit * 7}px)`;
          });
          if (horizon) {
            horizon.style.opacity = String(1 - exit * 0.72);
            horizon.style.filter = `blur(${exit * 4}px) saturate(1.22) contrast(1.15) brightness(0.72)`;
          }
          field.style.opacity = String(1 - exit * 0.88);

          workspace.style.opacity = String(reveal);
          workspace.style.clipPath = `polygon(0 ${100 - reveal * 100}%, 100% ${Math.max(0, 72 - reveal * 72)}%, 100% 100%, 0 100%)`;
        };

        const trigger = own({
          trigger: perspective,
          start: 'top top',
          end: () => `+=${window.innerHeight}`,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => render(self.progress),
          onRefresh: self => render(self.progress),
          onEnter: self => render(self.progress),
          onEnterBack: self => render(self.progress),
          onLeave: () => render(1),
          onLeaveBack: () => render(0),
        });
        render(trigger.progress);

        cleanup.push(() => {
          removeProperties(field, ['transform', 'opacity']);
          planes.forEach((plane, index) => {
            removeProperties(plane, ['transform', 'opacity', 'filter']);
            planeText[index].forEach(text => removeProperties(text, ['opacity']));
          });
          fadeTargets.forEach(target => removeProperties(target, ['opacity', 'filter']));
          if (horizon) removeProperties(horizon, ['opacity', 'filter']);
          removeProperties(workspace, ['opacity', 'clip-path']);
        });
      }
    }

    if (workspace && entry) {
      addPinnedTransition(
        workspace,
        entry,
        { clipPath: 'circle(4% at 50% 54%)', scale: 1.02 },
        { exitY: -16, exitBlur: 7, revealTo: { clipPath: 'circle(78% at 50% 54%)' } },
      );
    }
  } else {
    /* Mobile keeps motion light and fully reversible. No pin wrappers are created. */
    const mobileScenes = [depth, aperture, principles, perspective, workspace, entry].filter((item): item is HTMLElement => Boolean(item));
    mobileScenes.forEach((chapter, index) => {
      const content = directChildren(chapter);
      const render = (progress: number) => {
        const p = smoothstep(clamp01(progress));
        content.forEach((node, itemIndex) => {
          const local = smoothstep(range(p, itemIndex * 0.018, 0.86 + itemIndex * 0.018));
          node.style.opacity = String(0.56 + local * 0.44);
          node.style.translate = `0 ${(1 - local) * (22 + (index % 2) * 4)}px`;
        });
      };
      const trigger = own({
        trigger: chapter,
        start: 'top 96%',
        end: 'top 48%',
        invalidateOnRefresh: true,
        onUpdate: self => render(self.progress),
        onRefresh: self => render(self.progress),
        onEnter: self => render(self.progress),
        onEnterBack: self => render(self.progress),
        onLeave: () => render(1),
        onLeaveBack: () => render(0),
      });
      render(trigger.progress);
      cleanup.push(() => content.forEach(node => removeProperties(node, ['opacity', 'translate'])));
    });
  }

  /* Fine-pointer lens uses one rAF write per pointer frame. It owns no GSAP tween and
     therefore cannot retain the section across Next route transitions. */
  if (aperture && finePointer) {
    const lens = aperture.querySelector<HTMLElement>('[data-landing-lens]');
    if (lens) {
      let bounds = aperture.getBoundingClientRect();
      let frame = 0;
      let targetX = 0;
      let targetY = 0;
      const flush = () => {
        frame = 0;
        lens.style.translate = `${targetX}px ${targetY}px`;
      };
      const enter = () => {
        bounds = aperture.getBoundingClientRect();
        lens.style.opacity = '.34';
      };
      const move = (event: PointerEvent) => {
        targetX = event.clientX - bounds.left;
        targetY = event.clientY - bounds.top;
        if (!frame) frame = window.requestAnimationFrame(flush);
      };
      const leave = () => { lens.style.opacity = '0'; };
      lens.style.transition = 'opacity 220ms ease-out, translate 90ms linear';
      aperture.addEventListener('pointerenter', enter);
      aperture.addEventListener('pointermove', move);
      aperture.addEventListener('pointerleave', leave);
      cleanup.push(() => {
        aperture.removeEventListener('pointerenter', enter);
        aperture.removeEventListener('pointermove', move);
        aperture.removeEventListener('pointerleave', leave);
        if (frame) window.cancelAnimationFrame(frame);
        removeProperties(lens, ['opacity', 'translate', 'transition']);
      });
    }
  }

  /* Footer itself is never transformed. Only its content lifts, and reverse scroll
     restores the exact static state. */
  const footer = root.querySelector<HTMLElement>('footer[data-landing-scene="section-08-footer"]');
  if (footer) {
    const footerContent = directChildren(footer);
    const render = (progress: number) => {
      const p = smoothstep(clamp01(progress));
      footerContent.forEach((node, index) => {
        const local = smoothstep(range(p, index * 0.05, 0.9 + index * 0.05));
        node.style.opacity = String(0.64 + local * 0.36);
        node.style.translate = `0 ${(1 - local) * 18}px`;
      });
    };
    const trigger = own({
      trigger: footer,
      start: 'top 98%',
      end: 'top 72%',
      invalidateOnRefresh: true,
      onUpdate: self => render(self.progress),
      onRefresh: self => render(self.progress),
      onEnter: self => render(self.progress),
      onEnterBack: self => render(self.progress),
      onLeave: () => render(1),
      onLeaveBack: () => render(0),
    });
    render(trigger.progress);
    cleanup.push(() => footerContent.forEach(node => removeProperties(node, ['opacity', 'translate'])));
  }

  const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => {
    window.cancelAnimationFrame(refreshFrame);

    /* Kill every landing trigger with revert=true before releasing DOM references.
       This removes pin spacers and ScrollTrigger bookkeeping instead of relying on a
       context rollback that previously left detached landing trees measurable. */
    ownedTriggers.forEach(trigger => trigger.kill(true));
    cleanup.reverse().forEach(dispose => dispose());

    const world = root.querySelector<HTMLElement>('[data-landing-world]');
    if (world) removeProperties(world, ['transform', 'filter', 'opacity', 'translate', 'scale']);
  };
}
