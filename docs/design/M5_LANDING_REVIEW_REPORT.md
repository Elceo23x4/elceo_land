# M5 landing checkpoint — implementation under review

PR #62 · `m5/production-ui-design-implementation` · starting head `e438103a837177590a5d9ef129dee705e44d0366`.

This is the landing-only replacement authorized on 2026-09-25. It is not full M5 completion, merge approval, or production cutover. The latest eight supplied references supersede earlier conflicting landing composition instructions. The user explicitly resolved Section 4: preserve its image's visual language but use end-to-start placement. All backend, authentication and dashboard authorities remain unchanged.

## Supplied assets

`M5_LANDING_ASSET_PREFLIGHT.json` records every original filename, semantic repository filename, classification, dimensions, byte count, complete SHA-256 and alpha census. Eight opaque reference PNGs and four original layer-source PNGs are copied without byte changes under `references/m5-landing/`. These originals are never served as page backgrounds.

`M5_ASSET_INTEGRITY.json` records all optimized runtime derivatives. Globe, paper and observer preserve real alpha; environment is deliberately opaque. PNG→WebP resizing/compression is the only processing of those supplied layers. No background was silently keyed out. Desktop/mobile pairs are independently declared in `scene-media.json`. The globe is resized to 950px desktop / 600px mobile with compression selected to stay within the existing 300/150KB image budgets; visual comparison of edge fidelity remains required.

Supplemental principle objects, perspective panels, workspace objects, CTA environment, hero letter texture and unavailable-film poster were generated from the matching supplied references, with native text and controls removed. Generated sprite sheets were mechanically separated into independent images. These are reconstructions, not pixel-identical extracted originals. The supplemental particle-material backgrounds contain measured translucent alpha, retained and recorded per derivative. Opaque black principle/workspace artwork uses explicit screen blending; this is not claimed to be alpha transparency.

Nine former M5 stills remain hash-pinned as reference-only historical evidence, with no runtime reachability claimed. All 32 new production-consumed derivatives must be reachable from the landing route. The asset check now recursively verifies the semantic directories, exact file coverage, byte/hash/dimension/decode integrity and alpha channel/range, as well as all twelve unchanged source PNGs.

## Eight scenes

Principal implementation: `apps/frontend/features/landing/LandingNarrative.tsx` and its CSS module; responsive sources: `SceneMedia.tsx` / `scene-media.json`; cinematic ownership: existing `LandingMotion.tsx` and `motion/scene-choreography.ts`.

| Scene | Implementation and layers | Responsive treatment / remaining differences |
|---|---|---|
| Hero | Native identity/navigation/candlesticks; independent supplied network globe; native textured h1; separate non-playable intro poster | Mobile rearranges identity/globe/poster. Poster/letter texture reconstructed. No real film or independent continent geometry. |
| Depth | CSS-only burgundy-to-black field; native title/divider/copy | Vertical reading composition on mobile. No scenery/raster/canvas/video. |
| Blind spots | Supplied true-alpha paper over black, native text and SVG icons, existing scoped lens | Two-column mobile problem list; paper stretches vertically to contain readable copy. Browser fibre/contrast review required. |
| Principles | Five independently colored placards, reconstructed material objects, borderless lower dissolve, no numbering | Desktop end-to-start coordinates; mobile alternating left/right sequential reading. Confirmed placement intentionally differs from reference overlap. |
| Perspective | Supplied environment; five independently transformed planes; independent supplied observer above planes; native copy | Desktop CSS perspective/translateZ/rotateY; mobile horizontal snap deck and shallower scene. Environment includes horizon in the supplied image; horizon is not separately extracted. |
| Workspace | Native left editorial plus tall object card, two upper cards and wider lower card; independent reconstructed objects | Mobile restacks tall image over paired cards and wide lower card. No dashboard screenshot. |
| Entry | Orange planetary background, native Google-entry link and three trust groups | Link goes to canonical `/signup` acquisition surface; no auth authority, session, consent or persistence added. |
| Footer | Standalone full-width black stage with logo, actual route links, existing cookie dialog and risk statement | Sparse desktop row; wrapped readable mobile navigation. Social destinations and an Insights destination are not invented; corresponding reference links remain absent pending approved URLs/routes. |

Landing-only chrome is scoped by the presence of `[data-landing-root]`; other public routes keep their existing header/footer. No global dashboard styling changes are made.

## Geometry, layering and full-width proof

The browser harness now captures each named scene at 390, 1440 and 1920, with a 1080px desktop viewport height at 1920. Captures are full-resolution artifacts; scene review exports retain up to 1920px width rather than reducing the long page to a tiny thumbnail.

Desktop Section 4 defines high top H=17vw and card height C=25vw. Low top L=H+C. Card 1 starts H−2.1vw and is C+2.1vw high. Therefore B1=B3=B5=T2=T4=L. Responsive intermediate desktop increases C to30vw. Browser assertions measure the actual five top/bottom rectangles at1440/1920 and reject any alignment error over1px. These formulas are implementation intent, not empirical browser measurements.

Section5 ordering: background z=−1 inside isolated scene; planes z=1 with1100px desktop perspective; observer z=3; copy/controls z=4. Observer ignores pointer events, allowing the scene behind it to receive intentional input. Panels have different resting Z and rotateY values, retained on pointer leave. Browser evidence records computed transforms and stacking order.

All eight canvases are checked for x=0, viewport width, continuity and no horizontal page overflow at nine widths. Each source image is required to decode. Mobile/desktop source-selection assertions now cover all five active pairs. Actual browser measurements/captures are pending; none are fabricated here.

## Inherited assertions evolved for this authorization

| Original assertion | Why obsolete | Replacement protection |
|---|---|---|
| Landing consumes old world/depth/horizon pairs | New authority supplies different independent assets; Scene2 prohibits images | Verify all five actual responsive pairs, opposite-variant download rejection, complete runtime reachability and alpha/source integrity. |
| Landing includes labelled dashboard screenshot | User explicitly removed dashboard imagery from Scene6 | Assert no dashboard-preview image in landing; preserve independent dashboard capture/parity tests. |
| Seven-scene resource traversal | Footer is now an explicit eighth canvas | Traverse and validate all eight canvases, retaining forward/reverse, pointer fields, navigation, GC and fixed sample counts. |
| Old CTA wording | Approved reference now explicitly says Continue with Google | Assert approved wording links to canonical signup; M3 auth checks unchanged. |
| Single shared public chrome locator | Landing now owns reference-specific chrome | Check visible route chrome and current-destination semantics; resource driver rejects absent/hidden navigation. |

No M1–M4 assertion or resource numeric tolerance is relaxed. Original threshold policy and leak rejection tests remain unchanged. No new client module or broad client route family is introduced.

## Resource and regression status

Starting-head history: M1/M2/M3/M4/foundation/Vite passed; M5 and aggregate failed on heap late growth. That is historical evidence only. Fresh final-head resource/CI evidence remains required. No runtime leak fix or acceptance result is claimed yet.

Local pre-publication checks: asset coverage/hash/decode/alpha/source checks passed; all17 existing hardening rejection tests passed. Clean Node22.23.2 npm ci, Vite build, Next production build, Next typecheck, M1 (16 tests), M2 runtime/contracts, M3 (15 tests), M4 static (5 tests), deterministic generation and both browser-authority bundle scans passed locally. Browser parity/resource and exact-head CI results remain pending. The first local Next attempt failed on a stale generated cache database; rebuilding after isolating that cache passed. M1 was rerun after the build completed, preserving its required nonempty production-bundle assertion.

## Vercel blocker

Connected Vercel `list_teams` returned no teams. Requesting `list_projects` for the known organization `elceo23x4s-projects` returned403 Forbidden: “Not authorized: Trying to access resource under scope elceo23x4s-projects. You must re-authenticate to this scope or use a token with access to this scope.” Reported team ID: `team_SSDvFY8cn36WkNWEcsQO82p8`.

No candidate project/deployment was created, and no existing production/Vite project, framework, domain, routing or environment configuration was modified. A browser-accessible Next candidate URL cannot be claimed until organization access is restored.

## Remaining blockers and recommendation

Final-head browser scene review, resource result (and differential controls if needed), inherited regression result, and separately hosted Next preview remain required. Supplemental generated objects/panels are not exact source extractions. Real intro film, social URLs, Insights destination, final legal publication copy and broader M5 families remain outstanding. Do not merge or expand product families. This checkpoint is not yet accepted for visual closure.

## First published candidate CI diagnosis

Candidate `6ae7de1a01fdfc26079af3bbc364c84c530ee1f9`: UI Foundation, Vite production and M2 workflows passed. M1 failed solely because its directory-wide reference diff rejected the twelve authorized additions. M3/M4/M5 stopped at that inherited M1 test; browser/resource tests did not run. The aggregate correctly failed closed. Local pre-publication M1 had not detected new untracked reference files; the published-head failure exposed that limitation.

Original assertion: `git diff <M1 base> -- docs/design/references` must be empty. This encoded the temporary assumption that no new design authority could be approved. Replacement: enumerate every reference present at the original M1 base and require its exact unchanged bytes; require current reference files to equal those originals plus exactly the twelve reviewed manifest paths; reject duplicates, invalid paths, missing/extra files, byte-count changes and SHA-256 changes. The original approved PNG remains independently fully decoded/CRC-checked. The M5 asset gate additionally decodes all twelve new sources and verifies alpha. Frozen backend/dashboard assertions are unchanged.

This is a narrow evolution of a phase-specific topology assertion, explicitly authorized by the user's inherited-gate principle. It does not exempt or remove any historical authority file.
