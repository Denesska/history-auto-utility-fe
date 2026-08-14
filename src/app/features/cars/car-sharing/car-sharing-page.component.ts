import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareVehiclePanelComponent } from '@hau/features/cars/car-sharing/share-vehicle-panel.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-car-sharing-page',
  template: `
    @if (currentCar$ | async; as car) {
      <app-share-vehicle-panel [carId]="car.id" [carName]="car.nickname || (car.make + ' ' + car.model)" />
    }
  `,
  imports: [AsyncPipe, ShareVehiclePanelComponent],
})
export class CarSharingPageComponent implements OnInit {
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });
  }
}
