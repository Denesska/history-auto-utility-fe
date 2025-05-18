import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { IonCard, IonCardContent, IonCardHeader, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, NavController, IonContent, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [IonCardContent, IonFabButton, IonIcon, IonFab, IonCardHeader, IonLabel, IonItem, IonList, IonCard, CarsListItemComponent, AsyncPipe, IonContent, IonRefresher, IonRefresherContent],
  standalone: true,
})
export class CarsListComponent implements OnInit {
  readonly carList$ = this._carListFacade.carList$;
  readonly loading$ = this._carListFacade.loading$;

  constructor(private readonly _carListFacade: CarListFacade, private readonly _navCtrl: NavController) {
    addIcons({ add });
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  navigateToAddCar(): void {
    this._navCtrl.navigateForward(CARS_ROUTES.create.fullPath, { animated: false });
  }

  navigateToCarDetails(car: CarDto): void {
    this._navCtrl.navigateForward(`${CARS_ROUTES.details.fullPath}/${car.id}`, { animated: false });

  }

  async handleRefresh(event: any) {
    try {
      await this._carListFacade.loadCarList();
    } catch (error) {
      console.error('Error refreshing car list:', error);
    } finally {
      event.target.complete();
    }
  }
}