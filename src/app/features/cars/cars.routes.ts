import { Routes } from "@angular/router";
import { CARS_ROUTES } from "@hau/features/cars/cars.routes.const";

export const carRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cars-list/cars-list.component').then(mod => mod.CarsListComponent)
  },
  {
    path: CARS_ROUTES.create.path,
    loadComponent: () => import('./cars-create/cars-create.component').then(mod => mod.CarsCreateComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id`,
    loadComponent: () => import('./cars-details/cars-details.component').then(mod => mod.CarsDetailsComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.edit.path}`,
    loadComponent: () => import('./cars-edit/cars-edit.component').then(mod => mod.CarsEditComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.documents.path}`,
    loadComponent: () => import('./car-documents/car-documents.component').then(mod => mod.CarDocumentsComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.istoric.path}`,
    loadComponent: () => import('../maintenance/maintenance.component').then(mod => mod.MaintenanceComponent),
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.istoric.path}/:recordId`,
    loadComponent: () => import('../maintenance/record-detail/maintenance-record-detail.component').then(mod => mod.MaintenanceRecordDetailComponent),
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.rapoarte.path}`,
    loadComponent: () => import('../reports/reports.component').then(mod => mod.ReportsComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.plan.path}`,
    loadComponent: () => import('../maintenance/plan/plan.component').then(mod => mod.MaintenancePlanComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.notite.path}`,
    loadComponent: () => import('./car-notes/car-notes-page.component').then(mod => mod.CarNotesPageComponent)
  },
  {
    path: `${CARS_ROUTES.details.path}/:id/${CARS_ROUTES.partajare.path}`,
    loadComponent: () => import('./car-sharing/car-sharing-page.component').then(mod => mod.CarSharingPageComponent)
  }
]