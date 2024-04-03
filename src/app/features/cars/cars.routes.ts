import { Routes } from "@angular/router";

export const carRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cars-list/cars-list.component').then(mod => mod.CarsListComponent)
  }
]