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

type RevealKind = 'curtain' | 'slit' | 'candle' | 'wedge' | 'circle';

type TransitionSpec = {
  current: HTMLElement;
  next: HTMLElement;
  kind: RevealKind;
  exitY: number;
  exitBlur: number;
  roller?: boolean;
};

const revealClip = (kind: RevealKind, progress: number) => {
  const p = smoothstep(clamp01(progress));
  const inverse = 1 - p;
  switch (kind) {
    case 'slit':
      return `polygon(0 ${48 * inverse}%, 100% ${43 * inverse}%, 100% ${57 + 43 * p}%, 0 ${52 + 48 * p}%)`;
    case 'candle': {
      const side = 49 * inverse;
      return `inset(0% ${side}% 0% ${side}%)`;
    }
    case 'wedge':
      return `polygon(0 ${100 * inverse}%, 100% ${66 * inverse}%, 100% 100%, 0 100%)`;
    case 'circle':
      return `circle(${4 + 116 * p}% at 50% 54%)`;
    case 'curtain':
    default:
      return `inset(0% 0% ${100 * inverse}% 0%)`;
  }
};

/**
 * Native landing choreography.
 *
 * The previous implementation used one ScrollTrigger instance per chapter. Those
 * instances were correct visually but retained an entire detached landing tree during
 * repeated Next route journeys. This controller owns one passive scroll listener and
 * derives every visual state directly from live geometry. Reverse travel therefore
 * cannot preserve stale blur/opacity, and teardown has no pin-spacer/plugin graph to
 * retain.
 */
export function mountLandingMotion(root: HTMLElement) {
  const cleanup: Array<() => void> = [];
  const desktop = window.matchMedia('(min-width: 761px)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  let frame = 0;

  const scene = (name: SceneName) => root.querySelector<HTMLElement>(`[data-landing-scene="${name}"]`);
  const directChildren = (element: HTMLElement) => [...element.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
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

  const candle = root.querySelector<HTMLElement>('[data-landing-split-candle]');
  const candleHalves = candle ? [...candle.querySelectorAll<HTMLElement>('[data-candle-half]')] : [];
  if (candle) cleanup.push(() => {
    removeProperties(candle, ['opacity', 'visibility']);
    candleHalves.forEach(half => removeProperties(half, ['transform', 'opacity']));
  });

  const transitions: TransitionSpec[] = [];
  const addTransition = (
    current: HTMLElement | null,
    next: HTMLElement | null,
    kind: RevealKind,
    exitY: number,
    exitBlur: number,
    roller = false,
  ) => {
    if (current && next) transitions.push({ current, next, kind, exitY, exitBlur, roller });
  };

  addTransition(hero, depth, 'curtain', 18, 8, true);
  addTransition(depth, aperture, 'slit', 16, 7);
  addTransition(aperture, principles, 'candle', 18, 7);
  addTransition(principles, perspective, 'wedge', 15, 8);
  addTransition(workspace, entry, 'circle', 16, 7);

  if (revealer) {
    revealer.style.opacity = '0';
    cleanup.push(() => removeProperties(revealer, ['opacity', 'translate', 'rotate', 'scale']));
  }

  const renderTransition = (spec: TransitionSpec, viewportHeight: number) => {
    const nextTop = spec.next.getBoundingClientRect().top;
    const travel = viewportHeight;
    const p = clamp01(1 - nextTop / travel);
    const dissolve = smoothstep(range(p, 0.48, 0.82));
    const reveal = smoothstep(range(p, 0.56, 0.97));
    const sectionFade = smoothstep(range(p, 0.8, 0.995));

    spec.next.style.opacity = String(reveal);
    spec.next.style.clipPath = revealClip(spec.kind, reveal);
    spec.next.style.scale = String(1.012 - reveal * 0.012);

    spec.current.style.opacity = String(1 - sectionFade);
    spec.current.style.filter = dissolve > 0.0001 ? `blur(${dissolve * spec.exitBlur}px)` : 'blur(0px)';
    spec.current.style.translate = `0 ${-dissolve * spec.exitY}px`;

    if (spec.kind === 'candle' && candle) {
      // Absolute scroll geometry is the sole clock: no retained timeline/playhead.
      const appear = smoothstep(range(p, 0.30, 0.50));
      const split = smoothstep(range(p, 0.52, 0.97));
      const fade = smoothstep(range(p, 0.73, 0.99));
      const visible = appear * (1 - fade);
      const width = candle.offsetWidth;
      const distance = split * (window.innerWidth + width) / 2;
      candle.style.visibility = visible > 0.001 ? 'visible' : 'hidden';
      candle.style.opacity = String(visible);
      candleHalves.forEach((half, index) => {
        half.style.transform = `translate3d(${index === 0 ? -distance : distance}px,0,0)`;
      });
      // The aperture follows the departing inner wick edges, not an unrelated iris.
      spec.next.style.clipPath = `inset(0 ${Math.max(0, 50 - distance / window.innerWidth * 100)}% 0)`;
      spec.next.style.opacity = String(smoothstep(range(p, 0.50, 0.70)));
      spec.next.style.scale = '1';
    }

    if (spec.current === hero) {
      const world = hero?.querySelector<HTMLElement>('[data-landing-world]');
      if (world) world.style.transform = `translate3d(0,${dissolve * 7}%,0) scale(${1 - dissolve * 0.07})`;
    }

    if (spec.roller && revealer) {
      const enter = smoothstep(range(p, 0.55, 0.75));
      const leave = smoothstep(range(p, 0.82, 0.94));
      const visible = enter * (1 - leave);
      revealer.style.opacity = String(visible * 0.7);
      revealer.style.translate = `0 ${-viewportHeight * 0.28 + enter * viewportHeight * 0.56}px`;
      revealer.style.rotate = `${-26 + enter * 76}deg`;
      revealer.style.scale = String(0.76 + enter * 0.25 - leave * 0.15);
    }
  };

  let perspectiveProgress = 0;
  let pausedPerspective: number | null = null;
  let hoveredPlane = -1;

  const renderPerspective = (viewportHeight: number) => {
    if (!perspective || !workspace) return;
    const field = perspective.querySelector<HTMLElement>('[data-landing-planes]');
    if (!field) return;
    const planes = [...field.querySelectorAll<HTMLElement>('[data-landing-plane]')];
    if (!planes.length) return;

    /* The 180svh runway means workspace travels from 2.8vh below to the top while
       Section 05 remains sticky. This gives five cards readable dwell time. */
    const workspaceTop = workspace.getBoundingClientRect().top;
    perspectiveProgress = clamp01(1 - workspaceTop / (viewportHeight * 2.8));
    const p = pausedPerspective ?? perspectiveProgress;
    const raw = range(p, 0.02, 0.79) * (planes.length - 1);
    const step = Math.min(planes.length - 1, Math.floor(raw));
    const fraction = raw - step;
    const pacedFraction = smoothstep(range(fraction, 0.16, 0.84));
    const active = hoveredPlane >= 0 ? hoveredPlane : Math.min(planes.length - 1, step + pacedFraction);
    const middle = (planes.length - 1) / 2;
    const fieldShift = (middle - active) * 4.3;
    field.style.transform = `translate3d(${fieldShift}%,0,0)`;

    planes.forEach((plane, index) => {
      const signed = index - active;
      const distance = Math.abs(signed);
      const z = 84 - Math.min(distance, 2.6) * 86;
      const y = Math.min(distance * 1.35, 3.8);
      const rotation = Math.max(-18, Math.min(18, -signed * 8));
      const cardScale = Math.max(0.87, 1.02 - distance * 0.052);
      const opacity = Math.max(0.46, 1 - distance * 0.16);
      const brightness = Math.max(0.58, 1.05 - distance * 0.13);
      const saturation = Math.max(0.78, 1.06 - distance * 0.07);
      plane.style.setProperty('transform', `translate3d(0,${y}%,${z}px) rotateY(${rotation}deg) scale(${cardScale})`, 'important');
      plane.style.opacity = String(opacity);
      plane.style.filter = `brightness(${brightness}) saturate(${saturation})`;
      const text = [...plane.querySelectorAll<HTMLElement>(':scope > span, :scope > p')];
      text.forEach(node => { node.style.opacity = String(Math.max(0.36, 1 - distance * 0.35)); });
    });

    const exit = smoothstep(range(p, 0.72, 1));
    const reveal = smoothstep(range(p, 0.78, 0.995));
    const horizon = perspective.querySelector<HTMLElement>('[data-scene-media="world-environment"]');
    const fadeTargets = directChildren(perspective).filter(child => child !== horizon && child !== field);
    fadeTargets.forEach(target => {
      target.style.opacity = String(1 - exit * 0.9);
      target.style.filter = `blur(${exit * 6}px)`;
    });
    if (horizon) {
      /* Background remains legible throughout the chapter and its handoff. */
      horizon.style.opacity = String(1 - exit * 0.34);
      horizon.style.filter = `blur(${exit * 2}px) saturate(${1.12 + exit * 0.08}) contrast(1.08) brightness(${0.82 - exit * 0.08})`;
    }
    field.style.opacity = String(1 - exit * 0.84);
    workspace.style.opacity = String(reveal);
    workspace.style.clipPath = revealClip('wedge', reveal);
    workspace.style.scale = String(1.01 - reveal * 0.01);
  };

  const renderMobileEntrances = (viewportHeight: number) => {
    if (desktop) return;
    const chapters = [depth, aperture, principles, perspective, workspace, entry].filter((item): item is HTMLElement => Boolean(item));
    chapters.forEach(chapter => {
      const top = chapter.getBoundingClientRect().top;
      const p = smoothstep(clamp01(1 - (top - viewportHeight * 0.48) / (viewportHeight * 0.48)));
      directChildren(chapter).forEach((node, index) => {
        const local = smoothstep(range(p, index * 0.018, 0.9 + index * 0.018));
        if (!node.matches('picture[data-scene-media]')) {
          node.style.opacity = String(0.62 + local * 0.38);
          node.style.translate = `0 ${(1 - local) * 18}px`;
        }
      });
    });
  };

  const render = () => {
    frame = 0;
    if (!root.isConnected) return;
    const viewportHeight = Math.max(window.innerHeight, 1);
    transitions.forEach(spec => renderTransition(spec, viewportHeight));
    if (desktop) renderPerspective(viewportHeight);
    else renderMobileEntrances(viewportHeight);
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  cleanup.push(() => {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  });

  if (perspective && desktop && finePointer) {
    const planes = [...perspective.querySelectorAll<HTMLElement>('[data-landing-plane]')];
    planes.forEach((plane, index) => {
      const enter = () => {
        pausedPerspective = perspectiveProgress;
        hoveredPlane = index;
        plane.dataset.hovered = 'true';
        schedule();
      };
      const leave = () => {
        delete plane.dataset.hovered;
        if (hoveredPlane === index) hoveredPlane = -1;
        pausedPerspective = null;
        schedule();
      };
      plane.addEventListener('pointerenter', enter);
      plane.addEventListener('pointerleave', leave);
      cleanup.push(() => {
        plane.removeEventListener('pointerenter', enter);
        plane.removeEventListener('pointerleave', leave);
        delete plane.dataset.hovered;
      });
    });
  }

  if (aperture && finePointer) {
    const lens = aperture.querySelector<HTMLElement>('[data-landing-lens]');
    if (lens) {
      let bounds = aperture.getBoundingClientRect();
      let lensFrame = 0;
      let targetX = 0;
      let targetY = 0;
      const flushLens = () => {
        lensFrame = 0;
        lens.style.translate = `${targetX}px ${targetY}px`;
      };
      const enter = () => {
        bounds = aperture.getBoundingClientRect();
        lens.style.opacity = '.34';
      };
      const move = (event: PointerEvent) => {
        targetX = event.clientX - bounds.left;
        targetY = event.clientY - bounds.top;
        if (!lensFrame) lensFrame = window.requestAnimationFrame(flushLens);
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
        if (lensFrame) window.cancelAnimationFrame(lensFrame);
        removeProperties(lens, ['opacity', 'translate', 'transition']);
      });
    }
  }

  cleanup.push(() => {
    transitions.forEach(spec => {
      removeProperties(spec.current, ['opacity', 'filter', 'translate']);
      removeProperties(spec.next, ['opacity', 'clip-path', 'scale']);
    });
    const world = hero?.querySelector<HTMLElement>('[data-landing-world]');
    if (world) removeProperties(world, ['transform', 'filter', 'opacity', 'translate', 'scale']);

    if (perspective && workspace) {
      const field = perspective.querySelector<HTMLElement>('[data-landing-planes]');
      if (field) {
        removeProperties(field, ['transform', 'opacity']);
        [...field.querySelectorAll<HTMLElement>('[data-landing-plane]')].forEach(plane => {
          removeProperties(plane, ['transform', 'opacity', 'filter']);
          [...plane.querySelectorAll<HTMLElement>(':scope > span, :scope > p')].forEach(node => removeProperties(node, ['opacity']));
          delete plane.dataset.hovered;
        });
      }
      const horizon = perspective.querySelector<HTMLElement>('[data-scene-media="world-environment"]');
      if (horizon) removeProperties(horizon, ['opacity', 'filter']);
      directChildren(perspective).forEach(child => removeProperties(child, ['opacity', 'filter', 'translate']));
      removeProperties(workspace, ['opacity', 'clip-path', 'scale', 'translate']);
    }

    if (!desktop) {
      [depth, aperture, principles, perspective, workspace, entry].filter((item): item is HTMLElement => Boolean(item)).forEach(chapter => {
        directChildren(chapter).forEach(node => removeProperties(node, ['opacity', 'translate']));
      });
    }
  });

  render();

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    cleanup.reverse().forEach(dispose => dispose());
  };
}
