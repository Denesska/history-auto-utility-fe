/**
 * Public entry point for the reports feature. Other features and the shell
 * must import reports only through this barrel — never via a deep
 * `@hau/features/reports/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Nothing outside this feature consumes it today (the shell lazy-loads its
 * page by relative path) — this barrel exists as the boundary, ready to
 * export something the day another feature needs it.
 */
export {};
