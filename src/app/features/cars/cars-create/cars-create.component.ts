import { Component, OnInit } from '@angular/core';
import { CarsFormComponent } from '@hau/features/cars/component/cars-form/cars-form.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-cars-create',
    templateUrl: 'cars-create.component.html',
    styleUrls: ['./cars-create.component.scss'],
    imports: [CarsFormComponent],
})
export class CarsCreateComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  constructor(
    private readonly _carFacade: CarDetailsFacade,
    private readonly _headerActions: HeaderActionsService,
    private readonly _transloco: TranslocoService,
  ) {}

  ngOnInit(): void {
    this._carFacade.clearCurrentCar();
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('cars.form.addVehicle'));
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
  }
}