import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsFormComponent } from '@hau/features/cars/component/cars-form/cars-form.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-cars-edit',
  template: `<app-cars-form [currentCar]="currentCar$ | async"></app-cars-form>`,
  imports: [CarsFormComponent, AsyncPipe]
})
export class CarsEditComponent implements OnInit {
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });
  }
}
