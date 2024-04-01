import { Routes } from "@angular/router";
import { HAU_ROUTES } from "@hau/app.routes.const";
import { CarsWrapperComponent } from "@hau/features/cars/cars-wrapper/cars-wrapper.component";

export const carRoutes: Routes = [
  {
    path: HAU_ROUTES.cars.path,
    component: CarsWrapperComponent
  }
]