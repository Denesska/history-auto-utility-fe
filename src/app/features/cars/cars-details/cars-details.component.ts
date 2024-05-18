import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CarsFormComponent } from '@hau/features/cars/component/cars-form/cars-form.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';

@Component({
  selector: 'app-cars-details',
  templateUrl: 'cars-details.component.html',
  styleUrls: ['./cars-details.component.scss'],
  imports: [CarsFormComponent, AsyncPipe],
  standalone: true,
})
export class CarsDetailsComponent {
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  constructor(private readonly _carDetailFacade: CarDetailsFacade) { }

}