import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarNotesPanelComponent } from '@hau/features/cars/car-notes/car-notes-panel.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { FabActionService } from '@hau/core/fab-action.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { TranslocoService } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-car-notes-page',
  template: `
    @if (currentCar$ | async; as car) {
      <app-car-notes-panel
        [carId]="car.id"
        [carName]="car.nickname || car.make + ' ' + car.model"
        [canEdit]="(effectiveRole$ | async) !== 'VIEWER'"
      />
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [AsyncPipe, CarNotesPanelComponent],
})
export class CarNotesPageComponent
  implements OnInit, ViewWillEnter, ViewWillLeave
{
  private panel?: CarNotesPanelComponent;
  private pendingAdd = false;

  // Setter instead of a plain field: the panel only exists once the car has
  // loaded, so a shell "+" tap before that is queued and replayed here.
  @ViewChild(CarNotesPanelComponent)
  private set panelRef(panel: CarNotesPanelComponent | undefined) {
    this.panel = panel;
    if (panel && this.pendingAdd) {
      this.pendingAdd = false;
      // Not inside the tap any more, so the keyboard may not open — the editor does.
      setTimeout(() => panel.openAdd());
    }
  }

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
    private readonly _fabAction: FabActionService,
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
    this._headerActions.setTitle(this._transloco.translate('cars.notes.title'));
    // The add/close/save buttons live in the (non-routed) panel's template —
    // re-register them here so a cached second visit gets them back too.
    this.panel?.syncHeaderActions();
    // Registered unconditionally (see car-documents.component.ts's same comment) — only
    // renders while Notes is a chosen bottom-bar destination for this car (see
    // core/navigation/FEATURE.md); the panel's own bottom-right fab is unaffected.
    this._fabAction.set({ run: () => this.addNote(), ariaLabelKey: 'nav.fab.addNote' });
  }

  private addNote(): void {
    if (this.panel) this.panel.openAdd();
    else this.pendingAdd = true;
  }

  ionViewWillLeave(): void {
    this.pendingAdd = false;
    this._headerActions.clear();
    this._headerActions.clearTitle();
    this._fabAction.clear();
  }
}
