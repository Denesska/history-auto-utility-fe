import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-car-list-item',
  templateUrl: 'car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss'],
  imports: [IonCardContent, IonCardHeader, IonLabel, IonCard],
  standalone: true,
})
export class CarsListItemComponent { }