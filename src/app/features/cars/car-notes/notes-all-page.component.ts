import { Component, computed, inject, signal, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from '@hau/autogenapi/models';
import {
  CarNotesPanelComponent,
  NotesCarOption,
} from '@hau/features/cars/car-notes/car-notes-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { FabActionService } from '@hau/core/fab-action.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { NavigationPreferencesService } from '@hau/core/navigation/navigation-preferences.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { carOutline } from 'ionicons/icons';

const ALL_CARS = 'all';

/**
 * Global "all cars" Notes page (`/main/notes`, optional `?carId=`). Reuses the per-car
 * notes panel in its all-cars mode; the car filter is a dropdown kept in sync with the URL.
 */
@Component({
  selector: 'app-notes-all-page',
  template: `
    <div class="nap-filter">
      <app-dropdown
        [options]="carOptions()"
        [value]="selected()"
        leadingIcon="car-outline"
        [fullWidth]="true"
        [ariaLabel]="'cars.notes.carFilter' | transloco"
        (valueChange)="onCarChange($event)" />
    </div>
    <app-car-notes-panel
      [allMode]="true"
      [cars]="cars()"
      [filterCarId]="filterCarId()"
      [defaultAddCarId]="defaultAddCarId()" />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: 0;
      }
      .nap-filter {
        flex-shrink: 0;
        padding: 8px 16px 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CarNotesPanelComponent, DropdownComponent, TranslocoPipe],
})
export class NotesAllPageComponent implements ViewWillEnter, ViewWillLeave {
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _store = inject(Store);
  private readonly _transloco = inject(TranslocoService);
  private readonly _headerActions = inject(HeaderActionsService);
  private readonly _fabAction = inject(FabActionService);
  private readonly _prefs = inject(NavigationPreferencesService);
  private readonly _singleCar = inject(SingleCarService);

  private panel?: CarNotesPanelComponent;
  private pendingAdd = false;
  private firstEnter = true;

  // Setter: a shell "+" tap before the panel exists is queued and replayed here.
  @ViewChild(CarNotesPanelComponent)
  private set panelRef(panel: CarNotesPanelComponent | undefined) {
    this.panel = panel;
    if (panel && this.pendingAdd) {
      this.pendingAdd = false;
      setTimeout(() => panel.openAdd());
    }
  }

  private readonly _sharedList = toSignal(this._store.select(CarListState.sharedCarList), {
    initialValue: [],
  });
  private readonly _queryCarId = toSignal(this._route.queryParamMap, {
    initialValue: this._route.snapshot.queryParamMap,
  });

  /** Active cars with the viewer's edit right (shared VIEWER cars are read-only). */
  readonly cars = computed<NotesCarOption[]>(() => {
    const viewerIds = new Set(
      this._sharedList()
        .filter(e => e.role === 'VIEWER')
        .map(e => e.car.id),
    );
    return this._singleCar.activeCars().map((c: CarDto) => ({
      id: c.id,
      label: c.nickname || `${c.make} ${c.model}`,
      canEdit: !viewerIds.has(c.id),
    }));
  });

  /** `all` or a car id (string) — from `?carId`, then kept in sync by the dropdown. */
  readonly selected = computed<string | number>(() => {
    const raw = Number(this._queryCarId().get('carId'));
    return Number.isFinite(raw) && raw > 0 ? raw : ALL_CARS;
  });

  readonly filterCarId = computed<number | null>(() => {
    const s = this.selected();
    return s === ALL_CARS ? null : Number(s);
  });

  readonly defaultAddCarId = computed<number | null>(() => this._prefs.favoriteCarId());

  readonly carOptions = computed<DropdownOption[]>(() => [
    { value: ALL_CARS, label: this._transloco.translate('cars.notes.allCars') },
    ...this.cars().map(c => ({ value: c.id, label: c.label })),
  ]);

  constructor() {
    addIcons({ carOutline });
  }

  onCarChange(value: string | number): void {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { carId: value === ALL_CARS ? null : value },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  // Ionic caches routed pages, so ngOnDestroy doesn't reliably fire on
  // back-navigation — see header-actions.service.ts.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('cars.notes.title'));
    this.panel?.syncHeaderActions();
    if (!this.firstEnter) this.panel?.refresh();
    this.firstEnter = false;
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
