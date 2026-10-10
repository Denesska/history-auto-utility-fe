/**
 * Public entry point for the maintenance feature. Other features and the
 * shell must import maintenance only through this barrel — never via a deep
 * `@hau/features/maintenance/**` path. See "Feature boundaries" in CLAUDE.md.
 *
 * Route arrays (maintenance.routes.ts) and lazy-loaded pages are NOT exported
 * here — the shell lazy-loads them by relative path (loadChildren/loadComponent).
 */
export { MAINTENANCE_ROUTES } from './maintenance.routes.const';
export { SERVICE_TYPE_CONFIG, serviceTypeConfig } from './service-type.config';
export { CarMaintenanceSettingsService } from './car-maintenance-settings.service';
export { CarMaintenanceProfilesService } from './car-maintenance-profiles.service';
export { MaintenanceFacade } from './state/maintenance.facade';
export { MaintenanceState } from './state/maintenance.state';
export { provideMaintenanceCarPage } from './maintenance.car-page';
export { provideMaintenanceNav } from './maintenance.nav';
