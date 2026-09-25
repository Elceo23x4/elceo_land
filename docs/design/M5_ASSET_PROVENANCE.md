# M5 asset provenance

## New presentation typography

Geist Sans variable, original unmodified `fonts/Geist/webfonts/Geist[wght].woff2` from [vercel/geist-font](https://github.com/vercel/geist-font/tree/10dc7658f13c38a474cde201bb09a4617267545b), commit `10dc7658f13c38a474cde201bb09a4617267545b`.

- Origin: licensed-sourced, official project repository.
- Licence: SIL Open Font License 1.1; original licence included at `apps/frontend/assets/fonts/OFL.txt`.
- Destination: `apps/frontend/assets/fonts/Geist-Variable.woff2`, 69,760 bytes.
- SHA-256: `2ffebe993e969069a9789d15164b7715d42491b5835516c5e3b935d5f81b05f1`.
- Weights: variable 100–900; current UI primarily 400/500/600. Normal style only; font synthesis disabled.
- Usage: new public/editorial UI, deliberately tight display tracking and restrained readable body scale; no dashboard usage.
- Loading: self-hosted `next/font/local`; one file preloaded by the public layout, `display: swap`, adjusted Arial fallback. No runtime font CDN requests.
- Fallback: Arial, sans-serif. Font class stays on new UI surface; neither root body nor dashboard receives it.

## Existing authorities

The original approved landing PNG and every dashboard source asset remain unchanged. The reference PNG is design authority, not a flattened substitute for the landing implementation. New landing raster/3D/video assets and their budgets/provenance remain pending; no provisional asset is represented as final.

## Landing stills prepared for scene implementation

Origin: custom-generated with the built-in image-generation tool on 2026-09-21; independently generated art, no copied reference-site artwork. Original generated PNGs retained separately. Production derivatives only resize and encode to WebP (quality 82, effort 6); composition is unmodified. No approved authority image is regenerated or altered.

| File under `apps/frontend/public/m5-assets/` | Dimensions | Bytes | Scene purpose |
|---|---|---|---|
| `market-depth-desktop.webp` | 1920×640 | 34,536 | Scene 2 dark burgundy mountain atmosphere |
| `market-depth-mobile.webp` | 768×256 | 7,586 | Lightweight same-composition alternative |
| `world-context-desktop.webp` | 1254×1254 | 180,920 | Hero static geographic globe / adaptive fallback |
| `world-context-mobile.webp` | 768×768 | 80,504 | Mobile/reduced-motion globe |
| `information-horizon-desktop.webp` | 1774×887 | 75,390 | Scene 5 human-scale figure and world horizon, without flattened planes |
| `information-horizon-mobile.webp` | 768×384 | 17,606 | Mobile horizon |

All are below the starting still-image budgets. Implementation/visual acceptance is pending. The globe is a geographic still, not a completed independently transformable 3D continent system; no exploded-continent parity is claimed. Scene 5 media planes must remain separate code-controlled objects. Scene 6 must use genuine application captures once implemented.

### Generation prompts

**Market depth:** “Use case: stylized-concept. Create a single production website background asset, NOT a website mockup. Wide 3:1 cinematic black and burgundy mountain landscape for ELCEO's atmospheric market-depth scene. Photoreal sculptural volcanic mountain ridges receding into a smoky deep crimson valley; jagged near-black foreground mountain rises toward upper right; low crimson backlight far center-left, nuanced claret atmospheric depth. Left foreground and upper left remain almost black with substantial calm negative space for separately rendered white page copy. Rightmost quarter also dark enough for separate supporting text. No text, no typography, no logos, no charts, no UI, no humans, no glowing lava rivers, no orange sky. Edge of image fades naturally to near-black at top and bottom to blend into a continuous black editorial website. Serious, cinematic, highly detailed rock but controlled contrast, restrained dark red illumination.”

**World context:** “Use case: stylized-concept. Production ELCEO website hero visual asset only, no website UI, no text. A richly detailed true spherical Earth occupying most of a square composition on pure black. Visible Europe, Africa and Asia, North Atlantic curving at left. The planet is near black with a brilliant warm amber-gold sunrise rim along its upper left edge, intricate burnt-orange connected city lights across realistic recognizable continental geography. Delicate sparse golden orbital ellipses and long network arcs circle it in genuine three-dimensional perspective, a few controlled bright nodal points. Oceans nearly black. Africa visibly recognisable. Serious cinematic photoreal planet render, high-end market-intelligence visual, not a generic wireframe ball, not a sci-fi gaming HUD. Rich detail at the lit upper rim, lower hemisphere recedes to darkness. Leave 8 percent calm black margin around planet and orbit arcs, do not crop circles. No stars, no text, no letters, no logos, no charts, no borders, no human figure. Black and amber palette only, extremely subtle gold atmospheric glow.”

**Information horizon:** “Use case: stylized-concept. Create a production website cinematic background asset, wide 2:1 composition. For ELCEO's spatial information field, a lone adult human silhouette seen from behind at bottom center-right, standing on a dark rugged observation ledge. Beyond them a vast curved Earth horizon with realistic faint orange-gold city network lights and a cool white atmospheric rim. Deep black void background, no stars, subtle restrained warm reflection at the feet. Person small relative to the world, occupies about 25% of image height, dark coat, no face visible. Left third mostly near-black calm negative space for separately rendered heading. Upper half mostly black and uncluttered because interactive information planes will be independently placed there in code. Photoreal, cinematic, introspective, intelligent, premium black and amber palette with quiet white highlights. Do not include panels, screens, interface, text, letters, logos, charts, arrows, spacecraft or science-fiction buildings.”

## Deckled aperture material

Built-in image generation, 2026-09-23, custom-generated. Original: `generated_images/exec-eb26799d-a656-4e58-9fb9-8ef1e6039f6d.png` in the task workspace. Production encoding uses WebP quality 80: `deckled-claret-desktop.webp` 1920×640 / 122,468 bytes and `deckled-claret-mobile.webp` 960×320 / 27,646 bytes. Text and pointer lens remain separate code layers. Mobile crops the material horizontally rather than stretching the deckled fibres into a jagged mask.

Prompt: “Use case: stylized-concept. Asset type: production website material background, not a website mockup. Create a single ultra-wide 3:1 strip of dark burgundy/claret heavyweight textured paper lying flat across pure black. The horizontal strip extends completely past left and right edges. Top and bottom edges have physically convincing irregular torn deckles, exposed ivory/off-white densely layered cellulose fibres, subtle crumpled relief, tiny loose hairs, unequal non-repeating organic contours. Interior is deep near-black crimson with fine natural pressed-paper creases and subtle material grain, calm and dark enough for separately rendered white text. The paper occupies the central 75% of the image height. Pure black visible above and below both fibrous torn edges, not transparency. Straight frontal/flat camera, no perspective tilt. Restrained tactile realism, serious cinematic editorial material. No letters, no text, no icons, no logos, no UI, no numbers, no objects, no folds cutting through the center, no regular zigzag or sawtooth contour, no orange glow. Every fibre sharp but subdued, no bright white solid border. Output one wide material asset.”

## Actual dashboard capture

`dashboard-preview.webp`, 960×600 / 81,482 bytes, captured from the actual preserved Next dashboard with the controlled M4 fixture backend. Source: PR #62 head `f44753dce2b0263d80ad118f0dde3f3a6a885c47`, [M5 run 35881853790](https://github.com/Elceo23x4/elceo_land/actions/runs/35881853790), test “capture actual preserved dashboard for clearly labelled landing preview.” Derived from the workflow's 960px JPEG visual-review export and encoded to WebP quality 85. It is visibly captioned demonstration data, not live intelligence. No dashboard source or visual asset was changed to make the capture.

## Current asset integrity and remaining dependencies

`M5_ASSET_INTEGRITY.json` records the SHA-256, byte count and dimensions of all nine committed derivatives. `check-m5-assets.mjs` fully decodes every image and enforces the starting desktop/mobile still budgets. The landing consumes these assets as independent scene layers. Next Image serves responsive sizes for the photographic layers; reduced motion keeps the same narrative without cinematic transforms.

The hero film generator returned `REQUIRES_PREMIUM`; no video was created, paid access purchased or fake video control installed. The original geographic globe PNG was uploaded as a proposed video reference (`SyncpkLUb8`); this created no film. Independent 3D continents and film expansion remain outstanding acceptance dependencies. A still is not claimed to satisfy either requirement.

## Repair checkpoint: truthful runtime consumption

All nine unchanged still files now have explicit `production-consumed` classification in `M5_ASSET_INTEGRITY.json`. `features/landing/scene-media.json` declares world/depth/horizon source pairs and exact dimensions; the server-rendered `SceneMedia` picture adapter selects mobile at <=760px and desktop above. Next's image optimizer remains in both source sets. These are the existing derivatives, not newly generated or differently cropped artwork. CSS re-composition supplies the mobile framing. Browser currentSrc/request tests and an AST/CSS/import-graph reachability gate verify consumption independently of byte integrity. The desktop/mobile deckle and wordmark texture use media-query CSS; the actual dashboard capture remains a dimensioned Next image.

## 2026-09-25 landing replacement

The nine previous stills are now reference-only, not production-consumed. Current originals and semantic paths are in `M5_LANDING_ASSET_PREFLIGHT.json`; all optimized runtime derivatives, hashes, alpha ranges and dimensions are in `M5_ASSET_INTEGRITY.json`. See `M5_LANDING_REVIEW_REPORT.md` for supplied-vs-generated provenance, sprite extraction and visual limitations.
