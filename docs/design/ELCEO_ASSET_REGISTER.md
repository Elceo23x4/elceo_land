# ELCEO Asset Register

## Classification

Every asset must be classified before implementation as one of:

- **Vector-native** — SVG masks, torn edges, icons, line systems, framing geometry.
- **Raster/generated** — cinematic stills, lightfields, grain, editorial imagery.
- **Video** — only when temporal motion materially improves the story.
- **3D/GLB** — only for genuinely spatial objects/scenes.
- **Code-native** — CSS/SVG/Canvas/WebGL-generated UI geometry, gradients, cards, masks, charts.
- **Hybrid** — generated visual asset controlled through code-native masks/parallax/animation.

Origin must also be recorded as `custom-generated`, `procedural`, `licensed-sourced`, or `code-native`.

## Initial production register

| Asset / system | Primary use | Type | Origin | Split/layer requirement | Mobile/reduced-motion requirement |
|---|---|---|---|---|---|
| Approved landing visual reference | Design authority only | Raster | custom-generated | No | Reference only |
| ELCEO logo/wordmark variants | Global navigation/footer/auth | Vector | existing/custom | Separate mark + wordmark variants | Yes |
| Hero globe / continent system | Landing hero + scroll motif | 3D/GLB or procedural 3D | custom/procedural | Continents must be independently transformable | Simplified static/lightweight variant |
| Hero video-preview media | Landing hero | Video + poster | custom | Poster/video separate | Poster-first/mobile lighter encode |
| Deckled paper edges | Trader-problem aperture | Vector + optional microtexture | custom | Top/bottom edge masks separate if useful | Same visual, simplified interaction |
| Principles icons | Principles constellation | Vector | custom-generated/vector | Individual icons | Same |
| Principles card color fields | Principles constellation | Code-native/hybrid | code-native | No flattened card image | Same, recomposed layout |
| Scene-5 information planes | Spatial media field | Raster/video panels + code-native depth | custom-generated / product captures | Each plane separate | Swipe deck variant |
| Scene-6 dark mosaic imagery | Practical product preview | Raster/product capture + code-native surface | custom/product | Card imagery separate from card shell | Responsive crops |
| Cursor-reactive lightfield | Selected landing sections | Raster/hybrid | custom-generated | 2–3 transparent depth layers preferred | Static/slow ambient fallback |
| CTA atmosphere | Final conversion scene | Code-native + optional raster | code-native/custom | Keep CTA shell independent | Same, simplified |
| Product walkthrough | Public/how-it-works/auth preview | Video or image sequence | custom | Poster + media separate | Lightweight poster/image sequence |
| Application icon family | Auth/app/settings/admin | Vector | custom + approved utility library where justified | Individual SVGs | Same |
| Market charts | Dashboard/application | Code-native | Lightweight Charts | Never prerender as decorative chart images | Responsive chart rules |

## Asset production rules

- Do not flatten independently animated/parallax layers into one image.
- Do not use video for effects CSS/SVG can reproduce with materially lower cost.
- Do not use WebGL merely to make an element feel premium.
- Generated imagery must be art-directed for the exact intended crop/aspect ratio rather than stretched later.
- Every heavy asset needs an explicit poster/fallback path.
- External assets/fonts/libraries require licensing verification before production use.
- Do not commit proprietary third-party font files or copied reference-site assets.

## Status workflow

For each produced asset record: owner/source, dimensions, format, compressed size, visual scene, responsive variants, reduced-motion fallback, license/provenance, and implementation status.
