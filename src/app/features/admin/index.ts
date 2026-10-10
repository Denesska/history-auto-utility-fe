/**
 * Public entry point for the admin feature. Other features and the shell
 * must import admin only through this barrel — never via a deep
 * `@hau/features/admin/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * The admin page component is lazy-loaded (loadComponent) by the shell via a
 * relative path and is NOT exported here.
 */
export { AdminApiService } from './admin-api.service';
export { adminGuard } from './admin.guard';
