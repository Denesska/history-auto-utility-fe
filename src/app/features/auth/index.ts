/**
 * Public entry point for the auth feature. Other features and the shell
 * must import auth only through this barrel — never via a deep
 * `@hau/features/auth/**` path. See "Feature boundaries" in CLAUDE.md.
 */
export { AuthService } from './auth.service';
export type { UserProfile, LegalStatus } from './auth.service';
export { AUTH_ROUTES } from './auth.routes.const';
export { authGuard, organizationSelectedGuard } from './auth.guard';
