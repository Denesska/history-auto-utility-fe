import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { IonContent, IonFab, IonFabButton, IonIcon, IonList, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [IonFabButton, IonIcon, IonFab, IonList, CarsListItemComponent, AsyncPipe, IonContent],
  standalone: true,
})
export class CarsListComponent implements OnInit {
  readonly carList$ = this._carListFacade.carList$;

  constructor(
    private readonly _carListFacade: CarListFacade,
    private readonly _navCtrl: NavController,
  ) {
    addIcons({ add });
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  navigateToAddCar(): void {
    this._navCtrl.navigateForward(CARS_ROUTES.create.fullPath, {
      animated: false,
    });
  }

  navigateToCarDetails(car: CarDto): void {
    this._navCtrl.navigateForward(`${CARS_ROUTES.details.fullPath}/${car.id}`, {
      animated: false,
    });
  }
}
