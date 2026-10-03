/**
 * Public entry point for the main feature (the app shell / composition
 * root). Other features must import main only through this barrel — never
 * via a deep `@hau/features/main/**` path. See "Feature boundaries" in
 * CLAUDE.md.
 *
 * MainComponent and main.routes.ts stay internal to the shell — they are
 * wired directly from app.routes.ts by relative/deep path, not re-exported.
 */
export { scopeDataOf, type ContextScopeData } from './context-scope.guard';
export { AccountDetailsComponent } from './account-details/account-details.component';
