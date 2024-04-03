import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cars-wrapper',
  templateUrl: 'cars-wrapper.component.html',
  styleUrls: ['./cars-wrapper.component.scss'],
  imports: [IonRouterOutlet],
  standalone: true,
})
export class CarsWrapperComponent { }