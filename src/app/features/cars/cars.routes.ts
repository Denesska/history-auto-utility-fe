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
    path: CARS_ROUTES.details.path,
    loadComponent: () => import('./cars-details/cars-details.component').then(mod => mod.CarsDetailsComponent)
  }
]