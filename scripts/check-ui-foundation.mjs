import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'AGENTS.md',
  '.agents/skills/elceo-ui/SKILL.md',
  'docs/design/README.md',
  'docs/design/ELCEO_UI_CONSTITUTION.md',
  'docs/design/ELCEO_VISUAL_LANGUAGE.md',
  'docs/design/ELCEO_LANDING_SCENE_CONTRACT.md',
  'docs/design/ELCEO_MOTION_GRAMMAR.md',
  'docs/design/ELCEO_RESPONSIVE_RULES.md',
  'docs/design/ELCEO_PERFORMANCE_BUDGET.md',
  'docs/design/ELCEO_EDITORIAL_STANDARD.md',
  'docs/design/ELCEO_LEGAL_UX_MATRIX.md',
  'docs/design/ELCEO_ASSET_REGISTER.md',
  'docs/design/NEXTJS_MIGRATION_PLAN.md',
  'docs/design/WORK_START_PROTOCOL.md',
  'docs/design/references/approved-landing-reference.webp',
  'docs/backend-contract/README.md',
  'docs/backend-contract/SOURCE.json',
  'docs/backend-contract/MIRROR_MANIFEST.json',
  'scripts/sync-backend-handoff.mjs',
  'scripts/verify-backend-handoff.mjs',
];

for (const file of requiredFiles) {
  await access(path.join(root, file));
}

const source = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SOURCE.json'), 'utf8'));
const manifest = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/MIRROR_MANIFEST.json'), 'utf8'));
if (source.sourceRepository !== 'Elceo23x4/Elceo-Mi') {
  throw new Error(`Unexpected backend contract repository: ${source.sourceRepository}`);
}
if (source.authority !== 'read-only snapshot') {
  throw new Error(`Unexpected backend contract authority: ${source.authority}`);
}
if (!/^[0-9a-f]{40}$/.test(source.sourceCommit)) {
  throw new Error('Backend contract sourceCommit must be an exact 40-character Git SHA.');
}
if (
  manifest.sourceRepository !== source.sourceRepository ||
  manifest.sourceCommit !== source.sourceCommit ||
  manifest.authority !== source.authority
) {
  throw new Error('MIRROR_MANIFEST.json is not aligned with SOURCE.json.');
}
const mirrorEntries = [...manifest.documents, ...manifest.artifacts, ...manifest.mocks];
if (mirrorEntries.length !== 27) {
  throw new Error(`Expected 27 canonical backend mirror files, found ${mirrorEntries.length}.`);
}
for (const entry of mirrorEntries) {
  if (!entry.source || !entry.destination || !/^[0-9a-f]{40}$/.test(entry.gitBlobSha)) {
    throw new Error(`Invalid mirror manifest entry: ${JSON.stringify(entry)}`);
  }
}

const textualAuthorities = [
  'AGENTS.md',
  '.agents/skills/elceo-ui/SKILL.md',
  'docs/design/ELCEO_UI_CONSTITUTION.md',
  'docs/design/ELCEO_LANDING_SCENE_CONTRACT.md',
  'docs/design/WORK_START_PROTOCOL.md',
];

const forbiddenLegacyReferenceNames = [/rev\s*111/i, /rev\s*112/i];
for (const file of textualAuthorities) {
  const text = await readFile(path.join(root, file), 'utf8');
  for (const pattern of forbiddenLegacyReferenceNames) {
    if (pattern.test(text)) {
      throw new Error(`Legacy mockup revision name found in ${file}: ${pattern}`);
    }
  }
}

const landing = await readFile(path.join(root, 'docs/design/ELCEO_LANDING_SCENE_CONTRACT.md'), 'utf8');
for (const requiredPhrase of [
  'seven narrative scenes plus footer',
  'approved-landing-reference.webp',
  'Exploded-continent choreography',
  'Do not add orange glowing borders around the cards',
  'Do not use `Continue with Google` as the primary landing CTA label',
]) {
  if (!landing.includes(requiredPhrase)) {
    throw new Error(`Landing contract lost required rule: ${requiredPhrase}`);
  }
}

console.log(`ELCEO UI foundation is present and pinned to ${source.sourceRepository}@${source.sourceCommit}.`);
