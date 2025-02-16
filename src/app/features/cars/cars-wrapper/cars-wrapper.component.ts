import { Component } from '@angular/core';
import { IonFab, IonFabButton, IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cars-wrapper',
  templateUrl: 'cars-wrapper.component.html',
  styleUrls: ['./cars-wrapper.component.scss'],
  imports: [IonRouterOutlet, IonFab, IonFabButton, IonIcon],
  standalone: true,
})
export class CarsWrapperComponent {}
