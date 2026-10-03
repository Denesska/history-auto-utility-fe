/**
 * Public entry point for the reports feature. Other features and the shell
 * must import reports only through this barrel — never via a deep
 * `@hau/features/reports/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Route arrays (reports.car-tab.routes.ts) and lazy-loaded pages are NOT
 * exported here — the shell lazy-loads them by relative path (loadChildren).
 */
export { provideReportsCarPage } from './reports.car-page';
