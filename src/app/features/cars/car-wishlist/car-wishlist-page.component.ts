import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarWishlistPanelComponent } from '@hau/features/cars/car-wishlist/car-wishlist-panel.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { Store } from '@ngxs/store';
import { TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-car-wishlist-page',
  template: `
    @if (currentCar$ | async; as car) {
      <app-car-wishlist-panel
        [carId]="car.id"
        [carName]="car.nickname || (car.make + ' ' + car.model)"
        [canEdit]="(effectiveRole$ | async) !== 'VIEWER'" />
    }
  `,
  imports: [AsyncPipe, CarWishlistPanelComponent],
})
export class CarWishlistPageComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  @ViewChild(CarWishlistPanelComponent) private panel?: CarWishlistPanelComponent;

  readonly currentCar$ = this._carDetailFacade.currentCar$;

  readonly effectiveRole$ = combineLatest([
    this.currentCar$,
    this._store.select(CarListState.sharedCarList),
  ]).pipe(
    map(([car, sharedList]) => {
      if (!car) return 'OWNER' as CarAccessRole;
      const entry = sharedList.find(e => e.car.id === car.id);
      return entry ? entry.role : ('OWNER' as CarAccessRole);
    }),
  );

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _store: Store,
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
    this._headerActions.setTitle(this._transloco.translate('cars.wishlist.title'));
    // The desktop "add" button lives in the (non-routed) panel's template —
    // re-register it here so a cached second visit gets it back too.
    this.panel?.syncHeaderActions();
  }

  ionViewWillLeave(): void {
    this._headerActions.clear();
    this._headerActions.clearTitle();
  }
}
