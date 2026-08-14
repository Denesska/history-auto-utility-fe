import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarNotesPanelComponent } from '@hau/features/cars/car-notes/car-notes-panel.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { Store } from '@ngxs/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-car-notes-page',
  template: `
    @if (currentCar$ | async; as car) {
      <app-car-notes-panel
        [carId]="car.id"
        [carName]="car.nickname || (car.make + ' ' + car.model)"
        [canEdit]="(effectiveRole$ | async) !== 'VIEWER'" />
    }
  `,
  imports: [AsyncPipe, CarNotesPanelComponent],
})
export class CarNotesPageComponent implements OnInit {
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
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });
  }
}
