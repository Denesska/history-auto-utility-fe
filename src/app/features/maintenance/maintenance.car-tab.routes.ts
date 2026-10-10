import { Routes } from '@angular/router';

/**
 * Maintenance's own car-tab routes — Istoric, its record detail, and Plan — mounted by the
 * shell (`features/main/main.routes.ts`) at the same `cars/details` prefix the cars feature
 * itself mounts under, via `loadChildren` (the one sanctioned deep/relative-import exception
 * to the barrel rule — see "Feature boundaries" in CLAUDE.md and `core/car-page/FEATURE.md`).
 *
 * Each own route combines `:id` with its final segment into ONE route (`':id/istoric'`, not
 * nested children under a separate `:id` route) so the route's own `paramMap` still has `id`
 * directly — required both by `MaintenanceComponent`/`MaintenancePlanComponent` (which read
 * `this._route.snapshot.paramMap.get('id')`) and by `NavigationHistoryService`'s `navTab`
 * grouping (`core/navigation/FEATURE.md`), which reads the *deepest* active route's own
 * `paramMap`.
 *
 * A route carrying `feature` must also carry `scope` on the same data object — see the
 * comment at the top of `features/cars/cars.routes.ts`.
 */
export const maintenanceCarTabRoutes: Routes = [
  {
    path: ':id/istoric',
    data: { navTab: 'car', scope: ['personal', 'business'], feature: 'maintenance' },
    loadComponent: () => import('./maintenance.component').then(mod => mod.MaintenanceComponent),
  },
  {
    path: ':id/istoric/:recordId',
    loadComponent: () =>
      import('./record-detail/maintenance-record-detail.component').then(
        mod => mod.MaintenanceRecordDetailComponent,
      ),
  },
  {
    path: ':id/plan',
    data: { navTab: 'car', scope: ['personal', 'business'], feature: 'maintenance' },
    loadComponent: () => import('./plan/plan.component').then(mod => mod.MaintenancePlanComponent),
  },
];
