import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Sole cinematic owner. Never imported by an application/dashboard graph. */
export function mountLandingMotion(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  const cleanup: Array<() => void> = [];
  const context = gsap.context(() => {
    const world = root.querySelector<HTMLElement>('[data-landing-world]');
    if (world) gsap.to(world, { scale: .78, yPercent: 18, opacity: .55, ease: 'none', scrollTrigger: { trigger: world.parentElement, start: 'top top', end: 'bottom top', scrub: .8 } });
    root.querySelectorAll<HTMLElement>('[data-landing-placard]').forEach((card, i) => {
      gsap.fromTo(card, { y: 35 + i * 8 }, { y: 0, ease: 'none', scrollTrigger: { trigger: card, start: 'top 95%', end: 'top 48%', scrub: .7 } });
    });
    const scope = root.querySelector<HTMLElement>('[data-landing-lens-scope]');
    const lens = root.querySelector<HTMLElement>('[data-landing-lens]');
    if (scope && lens) {
      let bounds = scope.getBoundingClientRect();
      const x = gsap.quickTo(lens, 'x', { duration: .65, ease: 'power2.out' });
      const y = gsap.quickTo(lens, 'y', { duration: .65, ease: 'power2.out' });
      const opacity = gsap.quickTo(lens, 'opacity', { duration: .25 });
      const enter = () => { bounds = scope.getBoundingClientRect(); opacity(.3); };
      const move = (event: PointerEvent) => { x(event.clientX - bounds.left); y(event.clientY - bounds.top); };
      const leave = () => { opacity(0); };
      scope.addEventListener('pointerenter', enter); scope.addEventListener('pointermove', move); scope.addEventListener('pointerleave', leave);
      cleanup.push(() => { scope.removeEventListener('pointerenter', enter); scope.removeEventListener('pointermove', move); scope.removeEventListener('pointerleave', leave); });
    }
    const field = root.querySelector<HTMLElement>('[data-landing-planes]');
    if (field) {
      let bounds = field.getBoundingClientRect();
      const planes = [...field.querySelectorAll<HTMLElement>('[data-landing-plane]')].map((plane, i) => ({
        base: Number(plane.dataset.depth), direction: i - 2, rotationBase: (2 - i) * 8,
        z: gsap.quickTo(plane, 'z', { duration: 1.1, ease: 'power2.out' }),
        rotation: gsap.quickTo(plane, 'rotationY', { duration: 1.1, ease: 'power2.out' }),
      }));
      const enter = () => { bounds = field.getBoundingClientRect(); };
      const move = (event: PointerEvent) => {
        const progress = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
        planes.forEach(plane => { plane.z(plane.base + progress * plane.direction * 32); plane.rotation(plane.rotationBase + progress * -7); });
      };
      const leave = () => planes.forEach(plane => { plane.z(plane.base); plane.rotation(plane.rotationBase); });
      field.addEventListener('pointerenter', enter); field.addEventListener('pointermove', move); field.addEventListener('pointerleave', leave);
      cleanup.push(() => { field.removeEventListener('pointerenter', enter); field.removeEventListener('pointermove', move); field.removeEventListener('pointerleave', leave); });
    }
  }, root);
  return () => { cleanup.forEach(dispose => dispose()); context.revert(); };
}
