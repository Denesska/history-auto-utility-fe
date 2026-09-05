import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonContent, IonIcon, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  carOutline, waterOutline, buildOutline, discOutline,
  colorFilterOutline, constructOutline, shieldCheckmarkOutline,
  batteryChargingOutline, listOutline, flashOutline, optionsOutline,
} from 'ionicons/icons';
import { BehaviorSubject, combineLatest, map, Observable, take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { CarDto, MaintenanceProfileDto, ServiceCategory } from '@hau/autogenapi/models';
import { formatDate } from '@hau/shared/utils/formatting.util';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { buildPlanItems, PlanItem, UsageProfile } from '@hau/shared/utils/plan-items.util';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { CarMaintenanceSettingsPanelComponent } from '@hau/features/maintenance/car-maintenance-settings-panel/car-maintenance-settings-panel.component';
import { CarMaintenanceProfilesService } from '@hau/features/maintenance/car-maintenance-profiles.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';

export type { PlanItem, PlanItemState, UsageProfile } from '@hau/shared/utils/plan-items.util';

/** Sentinel dropdown value that opens the "name your profile" prompt instead of switching. */
const CREATE_PROFILE_OPTION = '__create__';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['./plan.component.scss'],
  imports: [AsyncPipe, DecimalPipe, IonContent, IonIcon, DropdownComponent, TranslocoPipe, CarMaintenanceSettingsPanelComponent],
})
export class MaintenancePlanComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

  // Plain mutated fields here would silently desync from vm$: it's built once in
  // ngOnInit via combineLatest, so a re-render only happens when a *stream* emits.
  // Both selection and profile drive what buildPlanItems computes, so they need to
  // be actual combineLatest sources, not just fields the template happens to read.
  private readonly _selectedCarId$ = new BehaviorSubject<number | null>(null);
  private readonly _profile$ = new BehaviorSubject<UsageProfile>('normal');
  /** A specific named MaintenanceProfile id, or null when a built-in profile (`_profile$`) is active instead. */
  private readonly _activeProfileId$ = new BehaviorSubject<number | null>(null);

  get selectedCarId(): number | null { return this._selectedCarId$.value; }
  get profile(): UsageProfile { return this._profile$.value; }
  get activeProfileId(): number | null { return this._activeProfileId$.value; }

  isScoped = false;
  settingsPanelOpen = false;
  focusCategory: ServiceCategory | null = null;

  /**
   * Armed by a long-press on a plan item card (not a plain tap — see
   * onItemPointerDown), so the card can still be tapped/scrolled normally.
   * While a category id sits here, its card shows a pressed state.
   */
  pressingCategory: ServiceCategory | null = null;
  private _pressStart: { x: number; y: number } | null = null;
  private _longPressTimer: ReturnType<typeof setTimeout> | null = null;
  private static readonly LONG_PRESS_MS = 500;
  private static readonly LONG_PRESS_MOVE_TOLERANCE_PX = 10;

  readonly profiles: UsageProfile[] = ['normal', 'intensive', 'occasional'];
  readonly cars$ = this._bootstrapFacade.ownedCars$;

  /** The selected car's named custom profiles, kept in sync for the dropdown's options. */
  profilesForCar: MaintenanceProfileDto[] = [];

  protected readonly formatDate = formatDate;

  vm$!: Observable<{ car: CarDto | null; items: PlanItem[] }>;

  constructor(
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _profilesService: CarMaintenanceProfilesService,
    private readonly _route: ActivatedRoute,
    private readonly _transloco: TranslocoService,
    private readonly _alertCtrl: AlertController,
    private readonly _headerActions: HeaderActionsService,
  ) {
    addIcons({
      carOutline, waterOutline, buildOutline, discOutline,
      colorFilterOutline, constructOutline, shieldCheckmarkOutline,
      batteryChargingOutline, listOutline, flashOutline, optionsOutline,
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('plan.title'));
    this._headerActions.set(this._headerActionsTpl);
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
    this._headerActions.clear();
  }

  /** Built-in profiles, then the car's named custom ones, then a trailing "+ create new" entry. */
  get profileOptions(): DropdownOption[] {
    const builtins = this.profiles.map(p => ({ value: p, label: this._transloco.translate(`plan.profiles.${p}`) }));
    const customs = this.profilesForCar.map(p => ({ value: `custom:${p.id}`, label: p.name }));
    const create = { value: CREATE_PROFILE_OPTION, label: this._transloco.translate('plan.profiles.createNew') };
    return [...builtins, ...customs, create];
  }

  /** What the dropdown should currently show as selected — encodes a custom profile id as a string token. */
  get profileDropdownValue(): string {
    return this.activeProfileId != null ? `custom:${this.activeProfileId}` : this.profile;
  }

  carOptions(cars: CarDto[]): DropdownOption[] {
    return cars.map(c => ({ value: c.id, label: `${c.make} ${c.model}` }));
  }

  onCarChange(value: string | number): void {
    this.selectCar(Number(value));
  }

  onProfileChange(value: string | number): void {
    const raw = String(value);
    if (raw === CREATE_PROFILE_OPTION) {
      this._promptCreateProfile();
      return;
    }
    if (raw.startsWith('custom:')) {
      this._applyProfileChange({ customId: Number(raw.slice('custom:'.length)) });
      return;
    }
    this._applyProfileChange({ customId: null, builtin: raw as UsageProfile });
  }

  /** Called when the settings panel auto-creates a profile (first edit under a built-in one) or falls back to none (active profile deleted). */
  onSettingsPanelProfileChange(profileId: number | null): void {
    this._applyProfileChange({ customId: profileId });
  }

  private async _promptCreateProfile(): Promise<void> {
    const carId = this.selectedCarId;
    if (carId === null) return;

    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('plan.settings.createProfileTitle'),
      inputs: [{ name: 'name', type: 'text', placeholder: this._transloco.translate('plan.settings.profileNamePlaceholder') }],
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.create'),
          handler: (data: { name?: string }) => {
            const name = data.name?.trim();
            if (!name) return false;
            this._profilesService.createProfile(carId, name).pipe(take(1)).subscribe(created => {
              this._applyProfileChange({ customId: created.id });
            });
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  ngOnInit(): void {
    // Scoped route (cars/details/:id/plan) locks the car and hides the selector;
    // the global route (/main/plan) falls back to the ?carId= query param.
    const scopedCarId = this._route.snapshot.paramMap.get('id');
    const carId = scopedCarId ?? this._route.snapshot.queryParamMap.get('carId');
    this.isScoped = scopedCarId != null;
    if (carId) this._selectedCarId$.next(Number(carId));

    // Defaults to the first owned car once the list loads, if the route didn't
    // pin one. Kept out of the vm$ pipe below on purpose: calling next() on
    // _selectedCarId$ from inside a map() that also reads _selectedCarId$ as a
    // combineLatest source would re-enter that same pipe mid-emission.
    this._bootstrapFacade.ownedCars$.pipe(untilDestroyed(this)).subscribe(cars => {
      if (this._selectedCarId$.value === null && cars.length > 0) {
        this._selectedCarId$.next(cars[0].id);
      }
    });

    combineLatest([this._bootstrapFacade.maintenanceProfiles$, this._selectedCarId$]).pipe(untilDestroyed(this)).subscribe(([byCarId, carId]) => {
      this.profilesForCar = carId !== null ? (byCarId[carId] ?? []) : [];
    });

    this.vm$ = combineLatest([
      this._bootstrapFacade.ownedCars$,
      this._bootstrapFacade.maintenance$,
      this._bootstrapFacade.maintenanceIntervals$,
      this._bootstrapFacade.carMaintenanceSettings$,
      this._selectedCarId$,
      this._profile$,
      this._activeProfileId$,
    ]).pipe(
      map(([cars, maintenanceByCarId, intervals, settingsByCarId, selectedCarId, profile, activeProfileId]) => {
        const car = cars.find(c => c.id === selectedCarId) ?? null;
        const records = car ? (maintenanceByCarId[car.id] ?? []) : [];
        const allSettings = car ? (settingsByCarId[car.id] ?? []) : [];
        // A built-in profile has no overrides of its own — only a named custom
        // profile's rows apply, and only its own rows (never another profile's).
        const settings = activeProfileId != null ? allSettings.filter(s => s.profile_id === activeProfileId) : [];
        const multiplierProfile = activeProfileId != null ? 'custom' : profile;
        return { car, items: car ? buildPlanItems(car, records, multiplierProfile, intervals, settings) : [] };
      }),
    );
  }

  openSettingsPanel(): void {
    this.focusCategory = null;
    this.settingsPanelOpen = true;
  }

  closeSettingsPanel(): void {
    this.settingsPanelOpen = false;
    this.focusCategory = null;
  }

  selectCar(carId: number): void {
    this._selectedCarId$.next(carId);
    // Custom profiles are per car — a profile id from the previous car would be
    // meaningless here. Not routed through _applyProfileChange: switching cars
    // isn't "changing the applied profile," so it must not trigger that notice.
    this._activeProfileId$.next(null);
  }

  // ── Applied profile changes ─────────────────────────────────────────
  // Whichever profile is applied to a car — built-in or a named custom one —
  // drives every interval on the Plan page. Any way that can change (dropdown
  // pick, creating a new profile, the settings panel auto-promoting to a custom
  // one on first edit, or falling back after the active one is deleted) funnels
  // through here so the user is told once, generically, that everything just
  // got recalculated — not just for whatever happens to depend on it today.

  private _appliedProfileKey(): string {
    return this.activeProfileId != null ? `custom:${this.activeProfileId}` : this.profile;
  }

  private _applyProfileChange(next: { builtin?: UsageProfile; customId?: number | null }): void {
    const prevKey = this._appliedProfileKey();
    if (next.customId !== undefined) this._activeProfileId$.next(next.customId);
    if (next.builtin !== undefined) this._profile$.next(next.builtin);
    if (this._appliedProfileKey() !== prevKey) this._notifyIntervalsRecalculated();
  }

  private async _notifyIntervalsRecalculated(): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('plan.profileChanged.title'),
      message: this._transloco.translate('plan.profileChanged.message'),
      buttons: [{ text: this._transloco.translate('common.gotIt'), role: 'cancel' }],
    });
    await alert.present();
  }

  // ── Long-press-to-edit ────────────────────────────────────────────
  // A plain tap/scroll must never open the edit panel — only a press held in
  // place for LONG_PRESS_MS does. onItemPointerMove cancels the pending timer
  // the moment the finger travels past the tolerance, which is exactly what a
  // scroll gesture does within the first few pixels.

  onItemPointerDown(category: ServiceCategory, event: PointerEvent): void {
    this._pressStart = { x: event.clientX, y: event.clientY };
    this.pressingCategory = category;
    this._longPressTimer = setTimeout(() => this._openEditFor(category), MaintenancePlanComponent.LONG_PRESS_MS);
  }

  onItemPointerMove(event: PointerEvent): void {
    if (!this._pressStart) return;
    const dx = Math.abs(event.clientX - this._pressStart.x);
    const dy = Math.abs(event.clientY - this._pressStart.y);
    if (dx > MaintenancePlanComponent.LONG_PRESS_MOVE_TOLERANCE_PX || dy > MaintenancePlanComponent.LONG_PRESS_MOVE_TOLERANCE_PX) {
      this._cancelLongPress();
    }
  }

  onItemPointerUp(): void {
    this._cancelLongPress();
  }

  onItemPointerCancel(): void {
    this._cancelLongPress();
  }

  private _cancelLongPress(): void {
    if (this._longPressTimer) {
      clearTimeout(this._longPressTimer);
      this._longPressTimer = null;
    }
    this._pressStart = null;
    this.pressingCategory = null;
  }

  private async _openEditFor(category: ServiceCategory): Promise<void> {
    this._pressStart = null;
    this._longPressTimer = null;
    this.pressingCategory = null;
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {
      // No native haptics support (web/PWA without the plugin) — opening the
      // edit panel alone still communicates the long-press registered.
    }
    this.focusCategory = category;
    this.settingsPanelOpen = true;
  }
}
