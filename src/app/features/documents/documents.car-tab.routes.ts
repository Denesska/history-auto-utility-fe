import { Routes } from '@angular/router';

/**
 * Documents' own car-tab route (the "Documente" tab) — mounted by the shell
 * (`features/main/main.routes.ts`) at the same `cars/details` prefix the cars feature itself
 * mounts under, via `loadChildren` (the one sanctioned deep/relative-import exception to the
 * barrel rule — see "Feature boundaries" in CLAUDE.md and `core/car-page/FEATURE.md`). Moved
 * out of `features/cars/cars.routes.ts` (where the component used to live, as `car-documents/`)
 * in the 3d-2 refactor, same move `maintenance.car-tab.routes.ts` already did for Istoric/Plan.
 *
 * Combines `:id` with its final segment into ONE route (`':id/documents'`, not a nested child
 * under a separate `:id` route) so the route's own `paramMap` still has `id` directly — see
 * `maintenance.car-tab.routes.ts`'s doc for why.
 *
 * A route carrying `feature` must also carry `scope` on the same data object — see the comment
 * at the top of `features/cars/cars.routes.ts`.
 */
export const documentsCarTabRoutes: Routes = [
  {
    path: ':id/documents',
    data: { navTab: 'car', scope: ['personal', 'business'], feature: 'documents' },
    loadComponent: () => import('./car-documents/car-documents.component').then(mod => mod.CarDocumentsComponent),
  },
];
