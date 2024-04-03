import { Routes } from "@angular/router";
import { HAU_ROUTES } from "@hau/app.routes.const";
import { MainComponent } from "@hau/features/main/main.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: HAU_ROUTES.cars.path,
        loadChildren: () => import('../cars/cars.routes').then(mod => mod.carRoutes)
      }
    ]
  }
]