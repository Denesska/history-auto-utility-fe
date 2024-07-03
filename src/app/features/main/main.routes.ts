import { importProvidersFrom } from "@angular/core";
import { Routes } from "@angular/router";
import { HAU_ROUTES } from "@hau/app.routes.const";
import { CarDetailsFacade } from "@hau/features/cars/state/car-details/car-details.facade";
import { CarDetailsState } from "@hau/features/cars/state/car-details/car-details.state";
import { CarListFacade } from "@hau/features/cars/state/car-list/car-list.facade";
import { CarListState } from "@hau/features/cars/state/car-list/car-list.state";
import { MainComponent } from "@hau/features/main/main.component";
import { NgxsModule } from "@ngxs/store";

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: HAU_ROUTES.cars.path,
        loadChildren: () => import('../cars/cars.routes').then(mod => mod.carRoutes),
        providers: [CarListFacade, CarDetailsFacade, importProvidersFrom(NgxsModule.forFeature([CarListState, CarDetailsState]))],
      },
      {
        path: '**',
        redirectTo: HAU_ROUTES.cars.path
      }
    ]
  },

]