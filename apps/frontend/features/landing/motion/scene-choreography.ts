import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

/** Sole cinematic owner. Never imported by an application/dashboard graph. */
export function mountLandingMotion(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);

  const cleanup: Array<() => void> = [];
  const ownedTriggers: ScrollTrigger[] = [];
  const desktop = window.matchMedia('(min-width: 761px)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const context = gsap.context(() => {
    const scene = (name: string) => root.querySelector<HTMLElement>(`[data-landing-scene="${name}"]`);
    const scenes = [...root.querySelectorAll<HTMLElement>('section[data-landing-scene]')];
    const revealer = root.querySelector<HTMLElement>('[data-landing-revealer]');

    /* The temporary transparent transition object starts each chapter at centre,
       descends with scroll, then dissolves before the following scene takes over. */
    if (revealer) {
      gsap.set(revealer, { opacity: 0.82, y: 0, rotation: 0, scale: 0.92 });

      scenes.forEach((chapter, index) => {
        const trigger = ScrollTrigger.create({
          trigger: chapter,
          start: 'top top',
          end: 'bottom top',
          onEnter: () => gsap.set(revealer, { y: 0, rotation: index * 31, opacity: 0.82 }),
          onEnterBack: () => gsap.set(revealer, { y: 0, rotation: index * 31, opacity: 0.82 }),
          onUpdate: self => {
            const progress = clamp01(self.progress);
            const edgeFade = Math.min(clamp01(progress / 0.08), clamp01((1 - progress) / 0.14));
            gsap.set(revealer, {
              y: progress * window.innerHeight * 0.34,
              rotation: index * 31 + progress * (88 + index * 7),
              scale: 0.88 + Math.sin(progress * Math.PI) * 0.14,
              opacity: 0.82 * edgeFade,
            });
          },
        });
        ownedTriggers.push(trigger);
      });
    }

    /* 01 → 02: spatial dissolve. */
    const hero = scene('section-01-hero');
    if (hero) {
      const world = hero.querySelector<HTMLElement>('[data-landing-world]');
      const content = [...hero.children].filter((node): node is HTMLElement => node instanceof HTMLElement && node !== world);

      if (world) {
        gsap.to(world, {
          scale: 0.76,
          yPercent: 20,
          opacity: 0.42,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: '45% top', end: 'bottom top', scrub: 0.8 },
        });
      }

      gsap.to(content, {
        y: -34,
        opacity: 0,
        filter: 'blur(14px)',
        stagger: 0.035,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: '67% top', end: 'bottom top', scrub: 0.72 },
      });
    }

    /* 02: centred aperture reveal, then a split-direction exit. */
    const depth = scene('section-02-depth');
    if (depth) {
      const parts = [...depth.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
      gsap.fromTo(parts,
        { opacity: 0, y: 34, clipPath: 'inset(0 48% 0 48%)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0% 0 0%)',
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: { trigger: depth, start: 'top 92%', end: 'top 16%', scrub: 0.72 },
        },
      );
      parts.forEach((part, index) => {
        gsap.to(part, {
          x: index % 2 === 0 ? -82 : 82,
          opacity: 0,
          skewX: index % 2 === 0 ? -5 : 5,
          ease: 'none',
          scrollTrigger: { trigger: depth, start: '68% top', end: 'bottom top', scrub: 0.72 },
        });
      });
    }

    /* 03: paper opens from its torn centre instead of scaling like a generic card. */
    const aperture = scene('section-03-blind-spots');
    if (aperture) {
      const paper = aperture.querySelector<HTMLElement>('[data-scene-media="torn-paper-strip"]');
      const heading = aperture.querySelector<HTMLElement>('h2')?.parentElement;
      const problems = [...aperture.querySelectorAll<HTMLElement>('li')];

      if (paper) {
        gsap.fromTo(paper,
          { clipPath: 'polygon(0 46%, 100% 38%, 100% 62%, 0 54%)', opacity: 0.64 },
          {
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: aperture, start: 'top 94%', end: 'top 22%', scrub: 0.78 },
          },
        );
        gsap.to(paper, {
          clipPath: 'polygon(0 12%, 100% 4%, 100% 88%, 0 96%)',
          opacity: 0.64,
          ease: 'none',
          scrollTrigger: { trigger: aperture, start: '75% top', end: 'bottom top', scrub: 0.7 },
        });
      }

      if (heading) {
        gsap.fromTo(heading, { x: -58, opacity: 0 }, {
          x: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: aperture, start: 'top 86%', end: 'top 30%', scrub: 0.65 },
        });
      }

      gsap.fromTo(problems, { y: 42, opacity: 0 }, {
        y: 0,
        opacity: 1,
        stagger: 0.045,
        ease: 'none',
        scrollTrigger: { trigger: aperture, start: 'top 74%', end: 'top 14%', scrub: 0.65 },
      });

      const lens = aperture.querySelector<HTMLElement>('[data-landing-lens]');
      if (finePointer && lens) {
        let bounds = aperture.getBoundingClientRect();
        const x = gsap.quickTo(lens, 'x', { duration: 0.65, ease: 'power2.out' });
        const y = gsap.quickTo(lens, 'y', { duration: 0.65, ease: 'power2.out' });
        const opacity = gsap.quickTo(lens, 'opacity', { duration: 0.25 });
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

    /* 04: cards reveal by pointer proximity and stay discovered once the user reaches them. */
    const principles = scene('section-04-principles');
    if (principles) {
      const cards = [...principles.querySelectorAll<HTMLElement>('[data-landing-placard]')];
      const headings = [...principles.querySelectorAll<HTMLElement>(':scope > p, :scope > h2')];

      gsap.fromTo(headings, { x: -36, opacity: 0 }, {
        x: 0,
        opacity: 1,
        stagger: 0.07,
        ease: 'none',
        scrollTrigger: { trigger: principles, start: 'top 90%', end: 'top 26%', scrub: 0.65 },
      });

      if (finePointer) {
        const discovered = cards.map(() => 0.16);
        let rects = cards.map(card => card.getBoundingClientRect());

        const renderCard = (card: HTMLElement, progress: number) => {
          const p = clamp01(progress);
          gsap.to(card, {
            y: (1 - p) * 42,
            opacity: 0.28 + p * 0.72,
            clipPath: `inset(0 0 ${(1 - p) * 52}% 0)`,
            filter: `brightness(${0.58 + p * 0.48}) saturate(${0.68 + p * 0.54})`,
            duration: 0.68,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        };

        cards.forEach((card, index) => renderCard(card, discovered[index]));

        const measure = () => { rects = cards.map(card => card.getBoundingClientRect()); };
        const move = (event: PointerEvent) => {
          cards.forEach((card, index) => {
            const rect = rects[index];
            const centreX = rect.left + rect.width / 2;
            const centreY = rect.top + rect.height / 2;
            const dx = (event.clientX - centreX) / Math.max(rect.width * 1.35, 1);
            const dy = (event.clientY - centreY) / Math.max(rect.height * 1.15, 1);
            const proximity = clamp01(1 - Math.hypot(dx, dy));
            const next = Math.max(discovered[index], proximity);
            discovered[index] = next > 0.84 ? 1 : next;
            renderCard(card, discovered[index]);
          });
        };

        principles.addEventListener('pointerenter', measure);
        principles.addEventListener('pointermove', move);
        window.addEventListener('resize', measure, { passive: true });
        cleanup.push(() => {
          principles.removeEventListener('pointerenter', measure);
          principles.removeEventListener('pointermove', move);
          window.removeEventListener('resize', measure);
        });
      } else {
        cards.forEach((card, index) => {
          gsap.fromTo(card, { y: 44 + index * 5, opacity: 0.38 }, {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top 94%', end: 'top 54%', scrub: 0.6 },
          });
        });
      }

      gsap.to(cards, {
        y: 68,
        opacity: 0.08,
        filter: 'blur(6px) saturate(.7)',
        stagger: 0.035,
        ease: 'none',
        scrollTrigger: { trigger: principles, start: '76% top', end: 'bottom top', scrub: 0.7 },
      });
    }

    /* 05: desktop is a pinned perspective chapter. Scroll advances one card at a time;
       hover can recall any card, but the observer remains in the foreground stacking plane. */
    const perspective = scene('section-05-perspective');
    if (perspective) {
      const field = perspective.querySelector<HTMLElement>('[data-landing-planes]');
      const planes = field ? [...field.querySelectorAll<HTMLElement>('[data-landing-plane]')] : [];

      if (desktop && field && planes.length) {
        const base = [
          { z: -220, ry: 22, scale: 0.88 },
          { z: -95, ry: 11, scale: 0.94 },
          { z: 34, ry: 0, scale: 1 },
          { z: -95, ry: -11, scale: 0.94 },
          { z: -220, ry: -22, scale: 0.88 },
        ];
        let scrollIndex = 0;
        let hoverIndex: number | null = null;

        planes.forEach(plane => {
          plane.style.transition = 'transform 620ms cubic-bezier(.2,.8,.2,1), filter 420ms ease, opacity 420ms ease';
        });

        const applyPlaneState = (activeIndex: number) => {
          planes.forEach((plane, index) => {
            const distance = Math.abs(index - activeIndex);
            const active = index === activeIndex;
            const state = base[index];
            const transform = active
              ? 'translateY(-2.5%) translateZ(150px) rotateY(0deg) scale(1.08)'
              : `translateY(${Math.min(distance * 1.4, 4)}%) translateZ(${state.z - distance * 18}px) rotateY(${state.ry}deg) scale(${Math.max(0.82, state.scale - distance * 0.018)})`;
            plane.style.setProperty('transform', transform, 'important');
            plane.style.opacity = active ? '1' : String(Math.max(0.48, 0.76 - distance * 0.08));
            plane.style.filter = active ? 'brightness(1.08) saturate(1.16)' : `brightness(${Math.max(0.5, 0.78 - distance * 0.07)}) saturate(.82)`;
            plane.querySelectorAll<HTMLElement>(':scope > span, :scope > p').forEach(text => {
              text.style.opacity = active ? '1' : '0.34';
            });
          });
        };

        applyPlaneState(0);

        const depthTrigger = ScrollTrigger.create({
          trigger: perspective,
          start: 'top top',
          end: () => `+=${Math.max(window.innerHeight * 3.8, 2200)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            const next = Math.min(planes.length - 1, Math.floor(Math.min(0.9999, self.progress) * planes.length));
            if (next !== scrollIndex) {
              scrollIndex = next;
              if (hoverIndex === null) applyPlaneState(scrollIndex);
            }
          },
          onLeave: () => { scrollIndex = planes.length - 1; if (hoverIndex === null) applyPlaneState(scrollIndex); },
          onEnterBack: () => { if (hoverIndex === null) applyPlaneState(scrollIndex); },
        });
        ownedTriggers.push(depthTrigger);

        planes.forEach((plane, index) => {
          const enter = () => { hoverIndex = index; applyPlaneState(index); };
          const leave = () => { hoverIndex = null; applyPlaneState(scrollIndex); };
          plane.addEventListener('pointerenter', enter);
          plane.addEventListener('pointerleave', leave);
          cleanup.push(() => {
            plane.removeEventListener('pointerenter', enter);
            plane.removeEventListener('pointerleave', leave);
            plane.style.removeProperty('transform');
            plane.style.removeProperty('filter');
            plane.style.removeProperty('opacity');
            plane.style.removeProperty('transition');
            plane.querySelectorAll<HTMLElement>(':scope > span, :scope > p').forEach(text => text.style.removeProperty('opacity'));
          });
        });
      } else if (planes.length) {
        planes.forEach(plane => {
          gsap.fromTo(plane, { opacity: 0.45, y: 26 }, {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: { trigger: plane, start: 'top 92%', end: 'top 58%', scrub: 0.55 },
          });
        });
      }
    }

    /* 06: asymmetric mosaic converges rather than repeating the earlier wipes. */
    const workspace = scene('section-06-workspace');
    if (workspace) {
      const mosaic = workspace.querySelector<HTMLElement>(':scope > div');
      const tiles = mosaic ? [...mosaic.children].filter((node): node is HTMLElement => node instanceof HTMLElement) : [];
      tiles.forEach((tile, index) => {
        gsap.fromTo(tile,
          {
            x: index % 2 === 0 ? 110 : -92,
            y: index < 2 ? -52 : 64,
            rotation: index % 2 === 0 ? 3.5 : -3.5,
            opacity: 0.14,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: workspace, start: 'top 90%', end: 'top 22%', scrub: 0.68 },
          },
        );
      });
      gsap.to(tiles, {
        x: index => index % 2 === 0 ? -54 : 54,
        y: index => index < 2 ? 24 : -24,
        opacity: 0.12,
        ease: 'none',
        scrollTrigger: { trigger: workspace, start: '72% top', end: 'bottom top', scrub: 0.68 },
      });
    }

    /* 07: planetary field expands radially; the footer then rises from below it. */
    const entry = scene('section-07-entry');
    if (entry) {
      const field = entry.querySelector<HTMLElement>('[data-scene-media="planetary-field"]');
      const content = [...entry.children].filter((node): node is HTMLElement => node instanceof HTMLElement && node !== field);

      if (field) {
        gsap.fromTo(field, { clipPath: 'circle(7% at 50% 52%)', opacity: 0.58 }, {
          clipPath: 'circle(82% at 50% 52%)',
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: entry, start: 'top 94%', end: 'top 28%', scrub: 0.72 },
        });
        gsap.to(field, {
          clipPath: 'circle(42% at 50% 86%)',
          opacity: 0.5,
          ease: 'none',
          scrollTrigger: { trigger: entry, start: '78% top', end: 'bottom top', scrub: 0.72 },
        });
      }

      gsap.fromTo(content, { y: 42, opacity: 0 }, {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        ease: 'none',
        scrollTrigger: { trigger: entry, start: 'top 84%', end: 'top 24%', scrub: 0.68 },
      });
      gsap.to(content, {
        y: -24,
        opacity: 0.22,
        stagger: 0.025,
        ease: 'none',
        scrollTrigger: { trigger: entry, start: '80% top', end: 'bottom top', scrub: 0.65 },
      });
    }

    const footer = root.querySelector<HTMLElement>('footer[data-landing-scene="section-08-footer"]');
    if (footer) {
      gsap.fromTo(footer, { yPercent: 100 }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: footer, start: 'top 104%', end: 'top 82%', scrub: 0.72 },
      });
    }

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    cleanup.push(() => window.cancelAnimationFrame(refreshFrame));
  }, root);

  return () => {
    cleanup.forEach(dispose => dispose());
    ownedTriggers.forEach(trigger => trigger.kill());
    context.revert();
  };
}
