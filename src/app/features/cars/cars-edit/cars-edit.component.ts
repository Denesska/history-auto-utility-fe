import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarsFormComponent } from '@hau/features/cars/component/cars-form/cars-form.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoService } from '@ngneat/transloco';
import { filter } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-cars-edit',
  template: `<app-cars-form [currentCar]="currentCar$ | async"></app-cars-form>`,
  imports: [CarsFormComponent, AsyncPipe]
})
export class CarsEditComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _headerActions: HeaderActionsService,
    private readonly _transloco: TranslocoService,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });

    this.currentCar$.pipe(
      filter(car => car?.status === 'SOLD'),
      untilDestroyed(this),
    ).subscribe(car => {
      this._navCtrl.navigateRoot(
        `${CARS_ROUTES.details.fullPath}/${car!.id}`,
        { animated: false },
      );
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('cars.form.editVehicle'));
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
  }
}
