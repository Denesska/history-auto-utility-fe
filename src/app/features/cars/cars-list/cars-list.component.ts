import { Component } from '@angular/core';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [IonCardContent, IonCardHeader, IonLabel, IonItem, IonList, IonCard, CarsListItemComponent],
  standalone: true,
})
export class CarsListComponent { }