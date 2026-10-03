/**
 * Public entry point for the documents feature. Other features and the
 * shell must import documents only through this barrel — never via a deep
 * `@hau/features/documents/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Route arrays (documents.routes.ts) and lazy-loaded pages are NOT exported
 * here — the shell lazy-loads them by relative path (loadChildren).
 */
export { DOCUMENTS_ROUTES } from './documents.routes.const';
export { DocumentsFacade } from './state/documents.facade';
export { DocumentsState } from './state/documents.state';
export { provideDocumentsCarPage } from './documents.car-page';
