import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormFieldComponent } from '@hau/shared/component/form-field/form-field.component';
import { revealInvalidFields } from '@hau/shared/utils/form-validation';
import { AlertController, IonIcon, IonToggle } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  pencilOutline,
  refreshOutline,
  addOutline,
  trashOutline,
  swapHorizontalOutline,
  waterOutline,
  buildOutline,
  discOutline,
  colorFilterOutline,
  constructOutline,
  shieldCheckmarkOutline,
  batteryChargingOutline,
  listOutline,
  flashOutline,
  carOutline,
  checkmarkCircleOutline,
  closeOutline,
  funnelOutline,
  filterOutline,
  settingsOutline,
  thermometerOutline,
  snowOutline,
  syncOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  CarDto,
  MaintenanceProfileDto,
  MaintenanceSettingDto,
  PlanItemKey,
} from '@hau/autogenapi/models';
import {
  CarMaintenanceSettingsService,
  UpdateMaintenanceSettingPayload,
} from '@hau/features/maintenance/car-maintenance-settings.service';
import { CarMaintenanceProfilesService } from '@hau/features/maintenance/car-maintenance-profiles.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';
import {
  engineOilKmFor,
  getPlanItemDefinitions,
  OIL_VISCOSITIES,
  PLAN_ITEM_CONFIG,
  PlanItemDefinition,
} from '@hau/shared/config/plan-item.catalog';
import {
  DropdownComponent,
  DropdownOption,
} from '@hau/shared/component/dropdown/dropdown.component';
import { BootstrapActions } from '@hau/shared/state/bootstrap/bootstrap.actions';
import { CarService } from '@hau/autogenapi/services';
import { Store } from '@ngxs/store';

/**
 * Per-car, per-user maintenance tracking settings: turn a category's progress bar
 * on/off, and optionally override its interval, within one named maintenance
 * profile. Opened from the Plan page, next to the profile picker — that's where
 * the resulting progress bars are shown.
 *
 * Editing while a built-in profile (Normal/Intensive/Ocazional) is active has no
 * profile to write into yet — the first write auto-creates one ("Profilul meu")
 * and promotes it to active via `activeProfileIdChange`, which is exactly the
 * "switch to a custom profile the moment you edit something" behavior the Plan
 * page's dropdown reacts to.
 */
interface SettingsEntry {
  def: PlanItemDefinition;
  row: MaintenanceSettingDto;
  label: string;
  hint: string;
  icon: string;
}

@UntilDestroy()
@Component({
  selector: 'app-car-maintenance-settings-panel',
  templateUrl: 'car-maintenance-settings-panel.component.html',
  styleUrls: ['./car-maintenance-settings-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    CommonModule,
    FormsModule,
    IonIcon,
    IonToggle,
    TranslocoPipe,
    FullscreenPanelComponent,
    DropdownComponent,
    FormFieldComponent,
  ],
})
export class CarMaintenanceSettingsPanelComponent implements OnInit {
  private readonly _elRef = inject(ElementRef);
  @Input({ required: true }) carId!: number;
  /** Opened from a long-press on a specific plan item card: jumps straight into edit mode for that item. */
  @Input() focusItem: PlanItemKey | null = null;
  @Input() set activeProfileId(v: number | null) {
    this._activeProfileId$.next(v);
  }
  get activeProfileId(): number | null {
    return this._activeProfileId$.value;
  }

  get activeProfile(): MaintenanceProfileDto | undefined {
    return this.customProfiles.find(p => p.id === this.activeProfileId);
  }

  @Output() closed = new EventEmitter<void>();
  @Output() activeProfileIdChange = new EventEmitter<number | null>();

  readonly viscosityOptions: DropdownOption[] = OIL_VISCOSITIES.map(v => ({
    value: v,
    label: v,
  }));
  rows: MaintenanceSettingDto[] = [];
  customProfiles: MaintenanceProfileDto[] = [];
  loading = true;

  editingItem: PlanItemKey | null = null;
  editKm: number | null = null;
  editMonths: number | null = null;
  editOilChanges: number | null = null;

  /** Armed by a long-press on the profile name — see onProfileNamePointerDown — to jump straight into rename. */
  profileNamePressing = false;

  private readonly _activeProfileId$ = new BehaviorSubject<number | null>(null);
  private _car: CarDto | null = null;
  private _focusApplied = false;
  private _profileNamePressStart: { x: number; y: number } | null = null;
  private _profileNameLongPressTimer: ReturnType<typeof setTimeout> | null =
    null;
  private static readonly LONG_PRESS_MS = 500;
  private static readonly LONG_PRESS_MOVE_TOLERANCE_PX = 10;

  constructor(
    private readonly _settingsService: CarMaintenanceSettingsService,
    private readonly _profilesService: CarMaintenanceProfilesService,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
    private readonly _carService: CarService,
    private readonly _store: Store,
  ) {
    addIcons({
      pencilOutline,
      refreshOutline,
      addOutline,
      trashOutline,
      swapHorizontalOutline,
      waterOutline,
      buildOutline,
      discOutline,
      colorFilterOutline,
      constructOutline,
      shieldCheckmarkOutline,
      batteryChargingOutline,
      listOutline,
      flashOutline,
      carOutline,
      checkmarkCircleOutline,
      closeOutline,
      funnelOutline,
      filterOutline,
      settingsOutline,
      thermometerOutline,
      snowOutline,
      syncOutline,
    });
  }

  ngOnInit(): void {
    this._bootstrapFacade.ownedCars$
      .pipe(untilDestroyed(this))
      .subscribe(cars => (this._car = cars.find(c => c.id === this.carId) ?? null));

    this._bootstrapFacade.maintenanceProfiles$
      .pipe(untilDestroyed(this))
      .subscribe(byCarId => {
        this.customProfiles = byCarId[this.carId] ?? [];
      });

    // Already loaded for every car at bootstrap — no separate fetch needed. Re-filters
    // whenever either the settings cache or the active profile changes.
    combineLatest([
      this._bootstrapFacade.carMaintenanceSettings$,
      this._activeProfileId$,
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([byCarId, activeProfileId]) => {
        const all = byCarId[this.carId] ?? [];
        this.rows =
          activeProfileId != null
            ? all.filter(r => r.profile_id === activeProfileId)
            : [];
        this.loading = false;

        // Only on the first emission after open — later emissions come from the
        // user's own edits (toggle/save) and must not re-trigger or re-scroll.
        if (!this._focusApplied && this.focusItem != null) {
          this._focusApplied = true;
          this.startEdit(this.settingFor(this.focusItem));
          setTimeout(() => {
            document
              .getElementById(`cms-row-${this.focusItem}`)
              ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
        }
      });
  }

  /** Applicable items for this car, each with its effective setting; tracked first, then the "Not tracked" ones. */
  get entries(): SettingsEntry[] {
    if (!this._car) return [];
    return getPlanItemDefinitions(this._car).map(def => ({
      def,
      row: this.settingFor(def.key),
      label: PLAN_ITEM_CONFIG[def.key].labelKey,
      hint: PLAN_ITEM_CONFIG[def.key].hintKey,
      icon: PLAN_ITEM_CONFIG[def.key].icon,
    }));
  }

  get trackedEntries(): SettingsEntry[] {
    return this.entries.filter(e => e.row.tracked);
  }

  get untrackedEntries(): SettingsEntry[] {
    return this.entries.filter(e => !e.row.tracked);
  }

  /** Items with an oil-change-count interval (diesel fuel filter) — and the fuel filter, which gets the field on every fuel type. */
  hasOilChangesField(def: PlanItemDefinition): boolean {
    return def.oilChanges != null || def.key === 'FUEL_FILTER';
  }

  get viscosity(): string | null {
    return this._car?.engine_oil_viscosity ?? null;
  }

  get viscosityKm(): number {
    return engineOilKmFor(this.viscosity);
  }

  onViscosityChange(value: string | number): void {
    const car = this._car;
    if (!car) return;
    const viscosity = String(value);
    if (viscosity === car.engine_oil_viscosity) return;
    this._carService
      .carControllerUpdateCar({ body: { id: car.id, engine_oil_viscosity: viscosity } })
      .pipe(take(1))
      .subscribe(updated =>
        // Folding the result into the bootstrap cache re-emits ownedCars$, which
        // refreshes the engine-oil default interval here and on the Plan page.
        this._store.dispatch(new BootstrapActions.PatchCar(updated)),
      );
  }

  /** Always resolvable — an item never customized within the active profile falls back to the car's default, not `undefined`. */
  settingFor(item: PlanItemKey): MaintenanceSettingDto {
    const row = this.rows.find(r => r.item === item);
    if (row) return row;

    const def = this._car ? getPlanItemDefinitions(this._car).find(d => d.key === item) : undefined;
    return {
      profile_id: this.activeProfileId ?? 0,
      item,
      tracked: def?.trackedByDefault ?? true,
      interval_km: def?.km ?? null,
      interval_months: def?.months ?? null,
      interval_oil_changes: def?.oilChanges ?? null,
      is_custom_km: false,
      is_custom_months: false,
      is_custom_oil_changes: false,
    };
  }

  isCustom(row: MaintenanceSettingDto): boolean {
    return row.is_custom_km || row.is_custom_months || !!row.is_custom_oil_changes;
  }

  close(): void {
    this.closed.emit();
  }

  toggleTracked(row: MaintenanceSettingDto): void {
    this._update(row.item, { tracked: !row.tracked });
  }

  startEdit(row: MaintenanceSettingDto): void {
    this.editingItem = row.item;
    this.editOilChanges = row.interval_oil_changes ?? null;
    this.editKm = row.interval_km;
    this.editMonths = row.interval_months;
  }

  cancelEdit(): void {
    this.editingItem = null;
  }

  saveEdit(row: MaintenanceSettingDto, form: NgForm): void {
    if (!revealInvalidFields(form, this._elRef)) return;
    const km = this.editKm;
    const months = this.editMonths;
    const oilChanges = this.editOilChanges;
    const item = row.item;
    this.editingItem = null;

    // A saved interval now lands in a custom profile, never overwriting the
    // recommended default — no confirmation needed, and it's a one-tap "Resetează
    // la implicit" away from being undone.
    if (
      km === row.interval_km &&
      months === row.interval_months &&
      oilChanges === (row.interval_oil_changes ?? null)
    )
      return;
    this._update(item, {
      custom_interval_km: km,
      custom_interval_months: months,
      custom_interval_oil_changes: oilChanges,
    });
  }

  resetInterval(row: MaintenanceSettingDto): void {
    this._update(row.item, {
      custom_interval_km: null,
      custom_interval_months: null,
      custom_interval_oil_changes: null,
    });
  }

  // ── Long-press-to-rename ─────────────────────────────────────────────
  // Same pattern as the Plan page's long-press-to-edit on an item card: a
  // plain tap must never open the rename prompt, only a press held in place.

  onProfileNamePointerDown(event: PointerEvent): void {
    this._profileNamePressStart = { x: event.clientX, y: event.clientY };
    this.profileNamePressing = true;
    this._profileNameLongPressTimer = setTimeout(
      () => this._onProfileNameLongPress(),
      CarMaintenanceSettingsPanelComponent.LONG_PRESS_MS,
    );
  }

  onProfileNamePointerMove(event: PointerEvent): void {
    if (!this._profileNamePressStart) return;
    const dx = Math.abs(event.clientX - this._profileNamePressStart.x);
    const dy = Math.abs(event.clientY - this._profileNamePressStart.y);
    if (
      dx > CarMaintenanceSettingsPanelComponent.LONG_PRESS_MOVE_TOLERANCE_PX ||
      dy > CarMaintenanceSettingsPanelComponent.LONG_PRESS_MOVE_TOLERANCE_PX
    ) {
      this._cancelProfileNameLongPress();
    }
  }

  onProfileNamePointerUp(): void {
    this._cancelProfileNameLongPress();
  }

  private _cancelProfileNameLongPress(): void {
    if (this._profileNameLongPressTimer) {
      clearTimeout(this._profileNameLongPressTimer);
      this._profileNameLongPressTimer = null;
    }
    this._profileNamePressStart = null;
    this.profileNamePressing = false;
  }

  private async _onProfileNameLongPress(): Promise<void> {
    this._profileNamePressStart = null;
    this._profileNameLongPressTimer = null;
    this.profileNamePressing = false;
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {
      // No native haptics support (web/PWA without the plugin) — opening the
      // rename prompt alone still communicates the long-press registered.
    }
    this.renameActiveProfile();
  }

  // ── Profile management ──────────────────────────────────────────────

  async createProfile(): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('plan.settings.createProfileTitle'),
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: this._transloco.translate(
            'plan.settings.profileNamePlaceholder',
          ),
        },
      ],
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.create'),
          handler: (data: { name?: string }) => {
            const name = data.name?.trim();
            if (!name) return false;
            this._profilesService
              .createProfile(this.carId, name)
              .pipe(take(1))
              .subscribe(created => this._setActiveProfile(created.id));
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async renameActiveProfile(): Promise<void> {
    const current = this.customProfiles.find(
      p => p.id === this.activeProfileId,
    );
    if (!current) return;

    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('plan.settings.renameProfileTitle'),
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: current.name,
          placeholder: this._transloco.translate(
            'plan.settings.profileNamePlaceholder',
          ),
        },
      ],
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.save'),
          handler: (data: { name?: string }) => {
            const name = data.name?.trim();
            if (!name) return false;
            this._profilesService
              .renameProfile(this.carId, current.id, name)
              .pipe(take(1))
              .subscribe();
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async deleteActiveProfile(): Promise<void> {
    const current = this.customProfiles.find(
      p => p.id === this.activeProfileId,
    );
    if (!current) return;

    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('plan.settings.deleteProfileTitle'),
      message: this._transloco.translate('plan.settings.deleteProfileMessage', {
        name: current.name,
      }),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () =>
            this._profilesService
              .deleteProfile(this.carId, current.id)
              .pipe(take(1))
              .subscribe(() => this._setActiveProfile(null)),
        },
      ],
    });
    await alert.present();
  }

  private _setActiveProfile(profileId: number | null): void {
    this._activeProfileId$.next(profileId);
    this.activeProfileIdChange.emit(profileId);
  }

  private _update(
    item: PlanItemKey,
    patch: UpdateMaintenanceSettingPayload,
  ): void {
    // The service folds the result back into BootstrapFacade's cache itself —
    // the carMaintenanceSettings$ subscription above picks up the change.
    this._ensureActiveProfile()
      .pipe(
        switchMap(profileId =>
          this._settingsService.updateSetting(
            this.carId,
            profileId,
            item,
            patch,
          ),
        ),
        take(1),
      )
      .subscribe();
  }

  /** A built-in profile has nothing to write an override into — auto-create+activate a default-named one first. */
  private _ensureActiveProfile(): Observable<number> {
    const current = this.activeProfileId;
    if (current != null) return of(current);

    return this._profilesService
      .createProfile(
        this.carId,
        this._transloco.translate('plan.settings.defaultProfileName'),
      )
      .pipe(
        tap(created => this._setActiveProfile(created.id)),
        map(created => created.id),
      );
  }
}
