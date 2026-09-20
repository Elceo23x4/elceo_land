# ELCEO Frontend Performance Budget

## Goal

ELCEO may be cinematic, but it must not behave like a demo reel that overheats browsers or grows memory indefinitely. Performance is part of the design contract.

## Core Web Vitals targets

At the 75th percentile for real users, target at minimum:

- LCP <= 2.5 s
- INP <= 200 ms
- CLS <= 0.1

Public landing pages should aim comfortably inside these limits rather than merely touching them.

## Memory/GPU acceptance

The previous UI was observed consuming very high browser memory. Therefore every cinematic route must be tested through:

1. cold load;
2. idle/settled state;
3. complete scroll journey;
4. reverse scroll;
5. repeat the journey several times;
6. return to idle.

Memory may rise transiently but must settle. Repeated journeys must not produce monotonic heap/GPU growth.

## Rendering rules

- Do not use React state for high-frequency pointer animation.
- Prefer transform/opacity for high-frequency motion.
- Use CSS variables, Motion values/springs, `gsap.quickTo`, or rAF-managed mutable values.
- No blanket `transition: all`.
- Use `will-change` sparingly and remove it where long-lived promotion is unnecessary.
- Avoid multiple always-on WebGL canvases. Prefer one shared scene/canvas when that improves resource reuse.
- R3F/Three.js scenes that can rest should use demand/on-change rendering where practical.
- Pause or unmount offscreen videos/expensive canvases when safe.
- Reuse geometries/materials/textures and explicitly dispose GPU resources.
- Avoid per-frame allocations in animation loops.
- Lazy-load Three.js/R3F/GSAP-heavy route code when not needed at initial navigation.

## Asset budgets

Budgets are starting constraints, not permission to fill the allowance.

- Hero poster/still: target <= 300 KB desktop, <= 150 KB mobile where visually feasible.
- Short atmospheric video: provide modern compressed encodes, poster, and mobile/reduced-motion fallback; avoid 4K delivery by default.
- Individual UI/editorial images: normally <= 250 KB after responsive optimization.
- GLB/GLTF: aggressively compress mesh/texture data; use LODs or simplified mobile variants. Avoid multi-megabyte 3D assets unless the visual value is proven and measured.
- Textures: prefer modern GPU-friendly compression/appropriate resolution; do not ship oversized textures for objects displayed small.

## Globe/continent system

- Load 3D implementation after critical hero shell/text unless visual testing proves it can stay within LCP budget.
- Separate continent meshes must reuse materials/textures where possible.
- Avoid high-count independent draw calls; merge/instance where appropriate without losing animation control.
- Do not animate invisible continent parts.
- Reduce pixel ratio/scene complexity on constrained devices.
- Mobile and reduced-motion modes may use a pre-rendered/vector/lightweight alternative.

## Video

- `preload="metadata"` or `none` unless an immediate autoplay scene genuinely requires more.
- Pause when offscreen.
- Muted autoplay only when appropriate and policy-compatible.
- Explicitly release sources if a heavy player is destroyed and memory profiling shows retained buffers.

## Images/fonts

- Prefer AVIF/WebP where appropriate and responsive `srcset`/Next Image equivalents after migration.
- Declare dimensions/aspect ratios to prevent CLS.
- Web fonts must use WOFF2, minimal required weights/styles, and deliberate preload only for critical faces.
- Set `font-synthesis: none` where missing weights should fail visibly instead of being faked.

## Measurement

During development use browser Performance/Memory tooling and automated Lighthouse/Web Vitals checks. For 3D pages also inspect GPU/frame timing, long tasks, texture memory indicators, and retained resource graphs.

## Acceptance failure

A visually correct scene is not accepted if it leaks resources, creates persistent jank, blocks low-power/mobile users, or requires keeping expensive animation active while invisible.
