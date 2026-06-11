import { Component, OnInit } from '@angular/core';
import { CarsFormComponent } from '@hau/features/cars/component/cars-form/cars-form.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';

@Component({
    selector: 'app-cars-create',
    templateUrl: 'cars-create.component.html',
    styleUrls: ['./cars-create.component.scss'],
    imports: [CarsFormComponent],
})
export class CarsCreateComponent implements OnInit {
  constructor(private readonly _carFacade: CarDetailsFacade) {}

  ngOnInit(): void {
    this._carFacade.clearCurrentCar();
  }
}