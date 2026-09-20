# GPT Work — First Assignment

Work only in `Elceo23x4/elceo_land` on branch `foundation/elceo-ui-work-handoff` / PR #57.

Do not implement pages, redesign the dashboard, migrate to Next.js, or change backend semantics yet.

## 1. Load project authorities

Read completely:

- `/AGENTS.md`
- `/.agents/skills/elceo-ui/SKILL.md`
- every authority indexed by `/docs/design/README.md`
- `/docs/backend-contract/README.md`
- `/docs/backend-contract/SOURCE.json`
- `/docs/backend-contract/MIRROR_MANIFEST.json`

Treat `Elceo23x4/Elceo-Mi` as backend/source-contract authority and the approved landing image in `/docs/design/references/approved-landing-reference.png` as landing visual authority.

## 2. Materialize the frozen backend snapshot

Run from the repository root:

```bash
npm run check:ui-foundation
npm run sync:backend-handoff
npm run verify:backend-handoff
```

The sync must resolve exactly the source repository/commit and source blob identities pinned by `SOURCE.json` and `MIRROR_MANIFEST.json`.

Review the generated diff. It should only materialize the documented read-only snapshot under:

- `/docs/backend-contract/` generated canonical documents + `SNAPSHOT.json`
- `/contracts/backend/` OpenAPI, route inventory, handoff manifests and mocks

Do not manually modify generated handoff contents. Commit the exact generated snapshot to this branch.

## 3. Diagnose current deployment baseline

The current foundation PR has a red primary Vercel preview. The previous accepted `main` commit had `Vercel – elceo-land` green while the secondary `Vercel – elceo-land-l353` context was already red.

Inspect actual build/deployment logs for the current branch. Determine precisely whether the primary failure is caused by this foundation branch or by external/current deployment configuration. Do not suppress the check and do not modify application semantics merely to make a deployment green.

If a tight foundation-only correction is required, implement it and prove it does not alter accepted UI behavior.

## 4. Perform M0 architecture/migration audit

Audit the existing repository without starting the migration. Cover at minimum:

- Vite/React Router topology and build/deployment configuration;
- all current routes and route responsibilities;
- current dashboard architecture and its protected visual/interaction contracts;
- dashboard CSS/token scoping and browser-only assumptions;
- existing assets and what should be preserved/migrated/deprecated;
- GSAP, Motion, Three.js/R3F/Drei and Lightweight Charts usage;
- current performance risks and memory/GPU hotspots that can be inferred/measured;
- canonical UI inventory mapping;
- public/auth/application/settings/admin route-group plan for Next.js App Router;
- Google-only signup/login integration requirements;
- browser-safe API vs trusted Next.js BFF/server-only operations;
- protection of internal admin credentials from client bundles;
- typed contract/client strategy using the frozen OpenAPI/route inventory/mocks;
- migration sequence that preserves dashboard parity and supports rollback until parity is proven;
- Vercel implications of moving from Vite to Next.js;
- test, accessibility, responsive, reduced-motion, Web Vitals and memory acceptance gates.

## 5. Stop and report

Do not start M1 Next.js migration in this assignment.

Return a structured report containing:

1. backend snapshot materialization/verification result;
2. exact generated files/count and pinned backend commit;
3. deployment/Vercel root-cause diagnosis and any minimal correction made;
4. current frontend architecture findings;
5. dashboard parity risks;
6. proposed Next.js target topology;
7. backend/BFF/auth integration boundaries;
8. performance/memory findings;
9. migration plan with explicit gates;
10. unresolved questions/blockers requiring architect/user review;
11. exact tests/commands/checks executed and results.

Do not proceed past this review gate without approval.
