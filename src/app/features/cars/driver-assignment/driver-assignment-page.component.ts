import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverAssignmentPanelComponent } from '@hau/features/cars/driver-assignment/driver-assignment-panel.component';
import { WithOrganizationId } from '@hau/features/cars/driver-assignment/driver-assignment.model';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling (session context), see ACCOUNT-CONTEXT.md
import { SessionContextService } from '@hau/features/auth/session-context.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { CarDto } from '@hau/autogenapi/models';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-driver-assignment-page',
  template: `
    @if (currentCar$ | async; as car) {
      <app-driver-assignment-panel
        [carId]="car.id"
        [carName]="car.nickname || (car.make + ' ' + car.model)"
        [organizationId]="asOrgCar(car).organization_id ?? sessionContext.activeOrgId()" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [AsyncPipe, DriverAssignmentPanelComponent],
})
export class DriverAssignmentPageComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  constructor(
    // CarDto doesn't carry organization_id; in a business session every car belongs to the active org.
    readonly sessionContext: SessionContextService,
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _headerActions: HeaderActionsService,
    private readonly _transloco: TranslocoService,
  ) {}

  asOrgCar(car: CarDto): WithOrganizationId<CarDto> {
    return car;
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });
  }

  // Ionic caches routed pages, so ngOnDestroy doesn't reliably fire on
  // back-navigation — see header-actions.service.ts.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('cars.driverAssignment.title'));
  }

  ionViewWillLeave(): void {
    this._headerActions.clear();
    this._headerActions.clearTitle();
  }
}
