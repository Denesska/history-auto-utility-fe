import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareVehiclePanelComponent } from '@hau/features/cars/car-sharing/share-vehicle-panel.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { TranslocoService } from '@ngneat/transloco';
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
export class CarSharingPageComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _headerActions: HeaderActionsService,
    private readonly _transloco: TranslocoService,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });
  }

  // Ionic caches routed pages, so ngOnDestroy doesn't reliably fire on
  // back-navigation — see header-actions.service.ts.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('cars.details.shareVehicle'));
  }

  ionViewWillLeave(): void {
    // Defensive: this page projects no action buttons, but clearing both
    // slots on leave keeps the invariant that no page ever inherits
    // another's — a lingering *start* template would hide the back button.
    this._headerActions.clear();
    this._headerActions.clearTitle();
  }
}
