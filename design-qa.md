# M5 landing visual QA — 30 September 2026

Status: **under review** pending tablet correction recapture. Hosted authenticated access is now verified. This is not M5 acceptance or permission to expand product families.

Authority: the eight original PNGs in `docs/design/references/m5-landing/`, with the user's full-viewport and Section 4 end-to-start overrides in `docs/design/M5_LANDING_AUTHORITY.md`. Supplemental artwork is reconstructed, not an exact extraction. Film and independent continent geometry remain unavailable.

## Review evidence

The controlled Chromium production-build captures are exported by `scripts/m5-visual-evidence.mjs` and retained as original PNG artifacts with a head/hash manifest. Review exports preserve scene width up to 1920px. These are CI renderings, not hosted Vercel screenshots.

- `bd7a7e37e248d26048ac63d7dddadb766f1ac30b`: all eight scenes personally inspected at 390×900, 1440×900 and 1920×1080, including side-by-side inspection against all eight approved scene references. CI run 36588994248 passed 49 tests, but visual review rejected the defects below.
- `b3dab0ae05e12fc9b84e1e21c0ed4e5f0799d832`: focused review of Section 3 at 390/1920 and Sections 5/6 at 390. CI run 36590103589 passed all 49 tests. Perspective copy/control separation and workspace reading sizes improved; Section 3 was still rejected.
- `c08da37c029c6e74b3749321a220e7b772b00cbb`: all eight workflows pass and 49 browser tests pass. Focused 390/1440/1920 captures confirm restored desktop left anchoring and paper coverage. Mobile edge distortion still fails fidelity; follow-up uses aspect-preserving `object-fit: cover` and requires recapture.

| Finding | Severity | Correction / evidence |
|---|---|---|
| Mobile Section 3 heading outside the paper | P1 | Original picture-box test ignored transparent margins. Measured source alpha core rows 91–227/320; CSS now frames that material, and regression checks test heading/list against opaque bounds. |
| Desktop Section 3 content shifted right and labels crowded | P1 | Broad sibling rule put the 360px local lens into flex layout. Restore absolute positioning; check left heading anchor and lens position. |
| Mobile Section 5 thumbnails collide with copy | P1 | Separate copy/control/deck bands; b3 screenshot shows readable copy and non-overlapping thumbnails. Bounding-box gap test retained. |
| Mobile Section 6 labels too small | P1 | Restore 14px headings in a tall-left/three-right mosaic; b3 focused capture confirms legibility. |
| Mobile principles rail starts too low | P2 | Raised editorial rail; all five cards remain native-scroll accessible. |

## Composition and state scope

Canonical desktop is 1920×1080. Responsive automation covers widths 360, 390, 430, 768, 1024, 1280, 1440, 1920 and 2560, plus height-specific motion regression. Source pictures remain unchanged. Public presentation is deliberately static/signed-out or unavailable in controlled fixtures; screenshots do not prove a live authenticated backend.

The inherited suite retains forward/reverse motion, rapid direction changes, five-card desktop containment, small hover lift, perspective pop/pause/resume, background/observer order, native rails, footer overlap, reduced motion, breakpoint changes and repeated route/resource tests. Numerical resource budgets are unchanged. CI success does not substitute for visual review.

## Hosted inspection

The separate Git-linked `elceo-next-preview` project deploys the candidate without modifying the production Vite project. Deployment `dpl_BqutACxVmhsaHYovYBu5No2QGwwx` is READY for c08da37. Direct browser navigation reaches Vercel login. No protection setting, credential, domain, routing or production configuration was changed. Hosted visual acceptance requires authenticated access.

### 30 September 2026 — sea-green checkpoint and tablet correction

Verified head `7d047fdc7e046ebcb1b30637dc10aee6e918cd9a` passed all eight workflows (M5 run 36664759275, aggregate 36664759471) and 51 browser tests. Nine realistic viewport pairs passed the initial semantic spacing checks. Resource samples remained 200 nodes / 349 listeners throughout; warm-to-final heap growth 295184 bytes, late growth 113192 bytes, slope 29484.4 bytes/journey, all within unchanged limits. The sea-green body is exactly 90% on both axes; split/reverse/fade and reduced-motion checks pass.

Hosted access is resolved: deployment `dpl_HfEMe4LSpiDbCEXQocP3inFjmrCk` is READY, and direct authenticated browser inspection showed the assembled sea-green candle and separating halves on the actual candidate page. No protection or production configuration was changed.

Visual review nevertheless rejected the 768/1024 principles captures: the older `> div:last-child` full-height rule outranked the tablet rail selector, causing card/heading overlap. This follow-up increases only that tablet selector's specificity so its existing 43svh height wins. The semantic overlap check now includes the entire tablet/phone principles rail against its heading and body. Desktop end-to-start geometry, assets and mobile placement remain unchanged. Follow-up exact-head results must be read from CI; this entry does not predeclare success or full M5 acceptance.
