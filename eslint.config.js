const { FlatCompat } = require('@eslint/eslintrc');
const fs = require('fs');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Every feature under src/app/features/ is a boundary — see "Feature
// boundaries" in CLAUDE.md. Discovered dynamically so a new feature folder
// is covered automatically, without a hand-written block per feature.
const FEATURES_DIR = path.join(__dirname, 'src/app/features');
const features = fs
  .readdirSync(FEATURES_DIR)
  .filter((name) => fs.statSync(path.join(FEATURES_DIR, name)).isDirectory());

/**
 * Builds the `no-restricted-imports` option object that enforces "import a
 * feature only via its index.ts" for a given consumer.
 *
 * - Deep imports into any OTHER feature (`@hau/features/<other>/**`) are
 *   restricted — only the bare `@hau/features/<other>` barrel is allowed.
 * - A feature must also never import its own barrel (`ownFeature`'s own
 *   `@hau/features/<ownFeature>`), which is how A/index -> B/index -> A
 *   cycles happen — it can still reach its own files by relative path or
 *   its own deep alias.
 * - `ownFeature` is `null` for non-feature consumers (the composition root:
 *   app.component.ts, app.routes.ts, main.ts), which may depend on any
 *   feature, but only via its barrel, same as everyone else.
 *
 * Dynamic `import()` of a feature's own routes/page file (lazy loading, by
 * relative path, e.g. `import('../cars/cars.routes')`) never goes through
 * the `@hau/features/*` alias, so it's untouched by this rule — that's the
 * one allowed exception to the barrel-only rule.
 */
function entryPointRestriction(ownFeature) {
  const patterns = features
    .filter((other) => other !== ownFeature)
    .map((other) => ({
      group: [`@hau/features/${other}/*`, `@hau/features/${other}/**`],
      message: `Import '${other}' via its public entry point '@hau/features/${other}' instead of a deep path — see "Feature boundaries" in CLAUDE.md.`,
    }));

  // "paths" (exact-string match) rather than "patterns" (gitignore-style glob,
  // where a bare name like "@hau/features/maintenance" also matches nested
  // paths such as "@hau/features/maintenance/service-type.config") — the own-
  // barrel ban must only catch the exact bare import, never a feature's own
  // legitimate deep imports into itself.
  const paths = ownFeature
    ? [
        {
          name: `@hau/features/${ownFeature}`,
          message: `${ownFeature} must not import its own index.ts (that causes A/index -> B/index -> A cycles) — use a relative path or its own deep alias instead.`,
        },
        {
          name: `@hau/features/${ownFeature}/index`,
          message: `${ownFeature} must not import its own index.ts (that causes A/index -> B/index -> A cycles) — use a relative path or its own deep alias instead.`,
        },
      ]
    : [];

  // "warn", not "error": this boundary is new and should never block a build
  // while existing code migrates onto it (see "Feature boundaries" in CLAUDE.md).
  return ['warn', { paths, patterns }];
}

const featureBoundaryConfigs = features.map((feature) => ({
  files: [`src/app/features/${feature}/**/*.ts`],
  rules: {
    'no-restricted-imports': entryPointRestriction(feature),
  },
}));

// The composition root (app.component.ts, app.routes.ts, main.ts) wires
// feature routes/services together. It may depend on any feature, but only
// through that feature's public entry point, like every other consumer.
const appBoundaryConfig = {
  files: ['src/app/app.*.ts', 'src/main.ts'],
  rules: {
    'no-restricted-imports': entryPointRestriction(null),
  },
};

module.exports = [
  ...compat.config(require('./.eslintrc.json')),
  ...featureBoundaryConfigs,
  appBoundaryConfig,
];
