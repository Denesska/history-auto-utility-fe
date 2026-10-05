/**
 * Public entry point for the organization feature. Other features and the
 * shell must import organization only through this barrel — never via a
 * deep `@hau/features/organization/**` path. See "Feature boundaries" in
 * CLAUDE.md.
 */
export { OrganizationApiService } from './organization-api.service';
export { type MyOrganizationDto } from './organization.model';
export { provideOrganizationNav } from './organization.nav';
