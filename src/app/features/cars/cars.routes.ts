import { Routes } from "@angular/router";
import { CARS_ROUTES } from "@hau/features/cars/cars.routes.const";
import { carFormUnsavedGuard } from '@hau/features/cars/cars-form-unsaved.guard';

// Routes marked `navTab` are sibling tabs of one car: moving between them replaces the
// navigation-history entry instead of adding one (see core/navigation/FEATURE.md).
//
// Istoric/Istoric-record-detail/Rapoarte/Plan/Documente all moved out to their owning
// features' own car-tab routes files (features/maintenance/maintenance.car-tab.routes.ts,
// features/reports/reports.car-tab.routes.ts, features/documents/documents.car-tab.routes.ts),
// mounted by the shell alongside this file — see "Tab routes move to their owning feature" in
// core/car-page/FEATURE.md. Notițe/Wishlist/Partajare/Sofer stay here since their page
// components are cars' own.
//
// A route carrying `feature` must also carry `scope` on the SAME data object — the guard's
// `scopeDataOf` returns the single deepest ancestor route that declares `.scope`, so a
// `feature` on a route with no `.scope` of its own would silently never be read (it would
// resolve to this file's parent 'cars' mount's `data: BOTH` in main.routes.ts instead, which
// has no `feature`).
export const carRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cars-list/cars-list.component').then(mod => mod.CarsListComponent)
  },
  {
    path: CARS_ROUTES.create.path,
    // Business: only an org admin manages the fleet (see "Adding a car" in
    // ACCOUNT-CONTEXT.md / features/cars/FEATURE.md) — every other role is bounced
    // back to the garage by contextScopeChildGuard, enforced for real on the backend
    // (CarController.createCar's @BusinessRoles). `orgRoles` must sit on this exact
    // `data` object, not the parent `cars/` mount's — scopeDataOf only reads the
    // single deepest route declaring `.scope` (see core/car-page/FEATURE.md).
    data: { scope: ['personal', 'business'], orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'] },
    canDeactivate: [carFormUnsavedGuard],
    loadComponent: () => import('./cars-create/cars-create.component').then(mod => mod.CarsCreateComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id`,
    loadComponent: () => import('./cars-details/cars-details.component').then(mod => mod.CarsDetailsComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.edit.path}`,
    canDeactivate: [carFormUnsavedGuard],
    loadComponent: () => import('./cars-edit/cars-edit.component').then(mod => mod.CarsEditComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.notite.path}`,
    data: { navTab: 'car', scope: ['personal', 'business'], feature: 'car_notes' },
    loadComponent: () => import('./car-notes/car-notes-page.component').then(mod => mod.CarNotesPageComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.wishlist.path}`,
    data: { navTab: 'car', scope: ['personal', 'business'], feature: 'car_wishlist' },
    loadComponent: () => import('./car-wishlist/car-wishlist-page.component').then(mod => mod.CarWishlistPageComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.partajare.path}`,
    // Personal car sharing (CarUserAccess) — in business, access comes from membership/driver assignment.
    // Not behind an organization feature switch (feature: null in its CarTabContribution).
    data: { scope: ['personal'], navTab: 'car' },
    loadComponent: () => import('./car-sharing/car-sharing-page.component').then(mod => mod.CarSharingPageComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.sofer.path}`,
    data: { scope: ['business'], navTab: 'car', feature: 'driver_assignment' },
    loadComponent: () => import('./driver-assignment/driver-assignment-page.component').then(mod => mod.DriverAssignmentPageComponent)
  }
]
