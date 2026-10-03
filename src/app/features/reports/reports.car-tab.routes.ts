import { Routes } from '@angular/router';

/**
 * Reports' own car-tab route — Rapoarte — mounted by the shell at the same `cars/details`
 * prefix the cars feature mounts under (see `features/maintenance/maintenance.car-tab.routes.ts`
 * for the full rationale: one combined `:id/rapoarte` route keeps `id` directly on its own
 * `paramMap`, which `ReportsComponent` and `NavigationHistoryService`'s `navTab` grouping need).
 */
export const reportsCarTabRoutes: Routes = [
  {
    path: ':id/rapoarte',
    data: { navTab: 'car', scope: ['personal', 'business'], feature: 'reports' },
    loadComponent: () => import('./reports.component').then(mod => mod.ReportsComponent),
  },
];
