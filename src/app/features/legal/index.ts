/**
 * Public entry point for the legal feature. Other features and the shell
 * must import it only through this barrel — never via a deep
 * `@hau/features/legal/**` path. See "Feature boundaries" in the frontend CLAUDE.md.
 */
export { LEGAL_ROUTES } from './legal.routes.const';
export type { LegalDocType } from './legal.routes.const';
