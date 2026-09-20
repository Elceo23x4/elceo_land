# ELCEO Motion Grammar

## Principle

Motion is part of ELCEO's storytelling and information hierarchy. It must communicate continuity, causality, spatial relationship, or state change. Decorative animation that can be removed without loss of meaning should usually be removed.

## Ownership

- **GSAP + ScrollTrigger:** cinematic timelines, pinned/scrubbed scenes, scroll-linked transforms, multi-element choreography, globe/continent narrative.
- **Motion/Framer Motion:** dialogs, drawers, local component state, shared-layout media expansion, progressive disclosure, small layout transitions.
- **CSS:** simple hover/focus/press transitions and compositor-safe micro-interactions.
- **Three.js / R3F:** genuinely spatial 3D such as the globe/continent system when CSS/SVG/Canvas would not realistically reproduce the scene.

Never animate the same property on the same element simultaneously with two systems.

## Motion vocabulary

### Motif handoff
An object, color field, line, mask, or spatial relationship survives the boundary between scenes and becomes part of the next scene.

### Origin-preserving media expansion
Video/media expands from the exact source card into a larger player and returns to the same source geometry on close.

### Progressive text disclosure
Resting copy is compact. Hover/focus reveals richer copy through a clipped/masked region; touch uses tap or permanently visible supporting copy where necessary.

### Cursor-reactive lens
A local radial reveal/distortion/brightness/texture response inside a specific section. Keep the native pointer; do not replace it with a novelty custom cursor by default.

### Cursor-reactive parallax lightfield
Two or three ambient depth layers respond slowly/inertially to normalized pointer coordinates. Never chase the pointer 1:1.

### Spatial media depth exchange
Suspended media planes exchange front/back position with controlled translateZ, rotateY, scale, opacity, and focus hierarchy. They are informational scenery, not link cards.

### Scroll-expanded aperture
A bounded media/mask region expands as the scroll narrative advances. Do not animate a pinned parent in ways that destabilize ScrollTrigger; animate its children.

### Exploded-continent choreography
The globe separates into recognizable continent components, maintains geographic/spatial logic, participates in scene reveals, then recedes/reassembles. Avoid debris/particle-explosion language.

## Timing

- direct manipulation: ~100–180 ms;
- local state transitions: ~180–350 ms;
- drawers/modals/shared-layout transitions: ~250–550 ms;
- major scene transitions: scroll-linked rather than arbitrary fixed-duration autoplay;
- exits generally faster than entrances.

Use easing appropriate to physical weight. Large spatial objects should feel heavier and calmer than buttons or labels.

## Staging

Only one primary attention event should dominate at a time. Secondary motion should follow the primary event with controlled overlap rather than compete with it.

## Accessibility

Honor `prefers-reduced-motion`. Reduced motion must preserve information and task completion while removing long scroll scrubs, strong parallax, continuous rotation, and dramatic camera travel.

Keyboard focus must trigger equivalent information disclosure where hover reveals important content.
