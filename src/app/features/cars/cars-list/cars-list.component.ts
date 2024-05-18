import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [IonCardContent, IonCardHeader, IonLabel, IonItem, IonList, IonCard, CarsListItemComponent, AsyncPipe],
  standalone: true,
})
export class CarsListComponent {
  readonly carList$ = this._carListFacade.carList$;

  constructor(private readonly _carListFacade: CarListFacade) { }

  ionViewDidLoad(): void {
    this._carListFacade.loadCarList();
  }
}