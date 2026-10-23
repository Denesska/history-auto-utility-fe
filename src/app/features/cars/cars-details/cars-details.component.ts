import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  Component,
  Injector,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { FeatureService } from '@hau/core/features/feature.service';
import { ActivatedRoute } from '@angular/router';
import { CarDto, CarPhotoDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CarService } from '@hau/autogenapi/services';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { getCarSubtitle, ownerDisplayName } from '@hau/features/cars/cars.utils';
import { daysAgo } from '@hau/shared/utils/date-math.util';
import { formatDate, formatMileage, formatMileageDriven } from '@hau/shared/utils/formatting.util';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { CarAccessFacade } from '@hau/features/cars/state/car-access/car-access.facade';
import {
  PhotoCarouselComponent,
  PhotoItem,
} from '@hau/shared/component/photo-carousel/photo-carousel.component';
import { CountryTagComponent } from '@hau/shared/component/country-flag/country-tag.component';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';
import { VehicleSilhouetteComponent } from '@hau/shared/component/vehicle-silhouette/vehicle-silhouette.component';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { OrganizationApiService } from '@hau/features/organization';
import {
  applyManualOrder,
  CarDeadlineItem,
} from '@hau/shared/utils/deadline-items.util';
import { DeadlineOrderService } from '@hau/core/deadline-order.service';
import {
  CarActionContribution,
  CarTabContribution,
} from '@hau/core/car-page/car-page.contributions';
import { CarPageContributionsService } from '@hau/core/car-page/car-page-contributions.service';
import { NavigationPreferencesService } from '@hau/core/navigation/navigation-preferences.service';
import { FavoriteStarComponent } from '@hau/shared/component/favorite-star/favorite-star.component';
import { SingleCarService } from '@hau/core/navigation/single-car.service';
import { FabActionService } from '@hau/core/fab-action.service';
import {
  UpdateMileageSheetComponent,
  UPDATE_MILEAGE_SHEET_OPTIONS,
} from '@hau/features/cars/update-mileage-sheet/update-mileage-sheet.component';
import {
  AlertController,
  IonContent,
  IonIcon,
  IonicSafeString,
  IonSpinner,
  ModalController,
  NavController,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { ReminderMuteService } from '@hau/core/reminder-mute.service';
import { ReminderMuteActionsService } from '@hau/core/reminder-mute-actions.service';
import { Store } from '@ngxs/store';
import { combineLatest, map, take } from 'rxjs';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { addIcons } from 'ionicons';
import {
  pencilOutline,
  chevronDown,
  chevronUp,
  reorderThreeOutline,
  refreshOutline,
  addCircleOutline,
  cloudUploadOutline,
  carOutline,
  chevronForward,
  ellipsisHorizontal,
  shareSocialOutline,
  exitOutline,
  logOutOutline,
  checkmarkCircleOutline,
  closeOutline,
  trashOutline,
  flameOutline,
  flashOutline,
  personOutline,
  informationCircleOutline,
  cameraOutline,
  copyOutline,
  checkmarkOutline,
  star,
  starOutline,
  notificationsOutline,
  notificationsOffOutline,
  gitCompareOutline,
  waterOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HAU_ROUTES } from '@hau/app.routes.const';
import {
  FUEL_PUMP_ICON_NAME,
  FUEL_PUMP_ICON_SRC,
} from '@hau/shared/icons/fuel-pump.icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

export interface MileageUpdateInfo {
  key: string;
  params?: Record<string, unknown>;
}

const MILEAGE_JUMP_WARNING_KM = 10000;

/** Dismissing the private-nickname notice is permanent, app-wide, across every car — same convention as cars-form's QUICK_TIPS_DISMISSED_KEY. */
const NICKNAME_NOTICE_DISMISSED_KEY =
  'hau_car_details_nickname_notice_dismissed';

@UntilDestroy()
@Component({
  selector: 'app-cars-details',
  templateUrl: 'cars-details.component.html',
  styleUrls: ['./cars-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    AsyncPipe,
    FavoriteStarComponent,
    DecimalPipe,
    IonContent,
    IonIcon,
    RemoveCarPanelComponent,
    PhotoCarouselComponent,
    TranslocoPipe,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    CdkDragPlaceholder,
    CountryTagComponent,
    VehicleSilhouetteComponent,
    ImageUrlPipe,
    FullscreenPanelComponent,
    IonSpinner,
    OverlayBackDirective,
  ],
})
export class CarsDetailsComponent
  implements OnInit, ViewWillEnter, ViewWillLeave
{
  readonly currentCar$ = this._carDetailFacade.currentCar$;

  removePanelOpen = false;
  moreMenuOpen = false;
  readonly muteSvc = inject(ReminderMuteService);
  readonly muteActions = inject(ReminderMuteActionsService);

  /** Explains that a car's name (see cars-form's nickname field) is private to the viewer — not shared with anyone else who can see this car. One-time, dismissed forever once closed. */
  nicknameNoticeDismissed =
    localStorage.getItem(NICKNAME_NOTICE_DISMISSED_KEY) === 'true';

  soldDetailsExpanded = false;
  overviewExpanded = false;

  readonly currentYear = new Date().getFullYear();

  /** Hub grid tiles, from whatever's registered/enabled right now — see core/car-page/FEATURE.md. */
  hubTabs: CarTabContribution[] = [];
  /** `tab.count()` results, keyed by tab id (Plan/Documente/Rapoarte have none — see CarTabContribution.count's doc). */
  tabCounts = new Map<string, number | null>();
  /** `tab.subLabel()` results, keyed by tab id — currently only Documente (see CarTabContribution.subLabel's doc). */
  subLabels = new Map<string, { text: string; danger?: boolean } | null>();
  /** "…" sheet actions (add-maintenance, add-document) — add-fuel-entry is rendered separately, as the quick button below. */
  sheetActions: CarActionContribution[] = [];
  fuelAction: CarActionContribution | undefined;

  private readonly _contributions = inject(CarPageContributionsService);
  private readonly _injector = inject(Injector);
  readonly navPrefs = inject(NavigationPreferencesService);
  private readonly _singleCar = inject(SingleCarService);
  private readonly _fabAction = inject(FabActionService);

  /** Documents + maintenance in one list, already in the order the user sees them — see core/car-page/FEATURE.md's deadline sources. */
  deadlines: CarDeadlineItem[] = [];
  deadlinesExpanded = false;
  hasManualOrder = false;

  /**
   * Armed by a long-press on any card (not a plain tap — see onCardPointerDown),
   * so a scroll gesture that happens to start on a card never accidentally drags
   * it. While active: drag handles (left side) and dismiss (X) badges show on
   * every card, and the section wiggles to make that obvious.
   */
  reorderModeActive = false;

  // Shell header title: only the SOLD/archived branch shows one (a secondary,
  // breadcrumbed page) — the active hub root deliberately never sets one, its
  // hero photo overlay header stays title-less (see HeaderActionsService).
  private _viewActive = false;
  private _lastCar: CarDto | null = null;

  private _carId: number | null = null;
  private _deadlineOrder: string[] = [];
  /** Document-kind deadline keys the user dismissed (maintenance uses `tracked` instead). */
  private _dismissedKeys: string[] = [];
  private _pressStart: { x: number; y: number } | null = null;
  private _longPressTimer: ReturnType<typeof setTimeout> | null = null;
  private static readonly LONG_PRESS_MS = 500;
  private static readonly LONG_PRESS_MOVE_TOLERANCE_PX = 10;

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

  /** Display name of the owner when the open car is shared with me, else null. */
  readonly sharedOwnerName$ = combineLatest([
    this.currentCar$,
    this._store.select(CarListState.sharedCarList),
  ]).pipe(
    map(([car, sharedList]) => {
      const entry = car ? sharedList.find(e => e.car.id === car.id) : undefined;
      return entry?.owner ? ownerDisplayName(entry.owner) : null;
    }),
  );

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly formatMileageDriven = formatMileageDriven;
  protected readonly getCarSubtitle = getCarSubtitle;

  /** Personal sharing UI is personal-only; driver assignment is business-only (see ACCOUNT-CONTEXT.md). */
  readonly sessionContext = inject(SessionContextService);
  /** Gates the "Sofer" mobile sheet item below — the desktop hub tile already goes through CarTabContribution.feature, but this one is a hand-rolled duplicate for mobile (see cars.car-page.ts). */
  readonly features = inject(FeatureService);

  /** Business header thumbnail opens this larger view (update / delete image underneath). */
  photoViewerOpen = false;
  /** True while a photo delete request is in flight (uploads are tracked by `submitting$`). */
  photoDeleting = false;

  /** The car's default/first photo (what the thumbnail shows), or undefined -> silhouette. */
  getPrimaryPhoto(car: CarDto): CarPhotoDto | undefined {
    return [...(car.photos ?? [])].sort(
      (a, b) => (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0),
    )[0];
  }

  /**
   * Same write rule as `PUT /car` and the photo endpoints (USER or above).
   * A business DRIVER resolves to MAINTENANCE on the backend, but the client-side
   * role defaults to OWNER for org cars, so the org role is checked explicitly.
   */
  canEditPhoto(role: CarAccessRole | null): boolean {
    if (
      this.sessionContext.isBusiness() &&
      this.sessionContext.activeOrgRole() === 'DRIVER'
    )
      return false;
    return role === 'OWNER' || role === 'FULL' || role === 'USER';
  }

  openPhotoViewer(): void {
    this.photoViewerOpen = true;
  }
  closePhotoViewer(): void {
    this.photoViewerOpen = false;
  }

  async confirmDeletePhoto(car: CarDto, photoId: number): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(
        'cars.details.deleteImageConfirm.title',
      ),
      message: this._transloco.translate(
        'cars.details.deleteImageConfirm.message',
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('cars.details.deleteImage'),
          role: 'destructive',
          handler: () => this._deletePhoto(car, photoId),
        },
      ],
    });
    await alert.present();
  }

  private _deletePhoto(car: CarDto, photoId: number): void {
    this.photoDeleting = true;
    this._carApi
      .carControllerDeletePhoto({ photoId })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.photoDeleting = false;
          // Refetch so the thumbnail and viewer fall back to the next photo / silhouette.
          this._carDetailFacade.loadCurrentCar(String(car.id));
        },
        error: () => {
          this.photoDeleting = false;
        },
      });
  }

  /** True while the business header's thumbnail upload is in flight. */
  readonly photoSubmitting$ = this._carDetailFacade.submitting$;

  /**
   * Business header thumbnail: a picked file becomes the car's new default
   * photo through the normal update call (same multipart endpoint the edit
   * form uses), staying on the hub instead of navigating away.
   */
  async onThumbnailPicked(event: Event, car: CarDto): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    // Clearing lets the same file be picked again and still fire `change`.
    input.value = '';
    if (!file || !file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) return;
    try {
      const resized = await resizeImage(file, 1920, 0.8);
      this._carDetailFacade.udpateCar(
        {
          id: car.id,
          files: [resized],
          default_new_photo_index: 0,
        } as unknown as CarDto,
        false,
      );
    } catch {
      // Unreadable image: nothing to upload, the thumbnail simply stays as it was.
    }
  }

  private readonly _navHistory = inject(NavigationHistoryService);

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _carAccessFacade: CarAccessFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _store: Store,
    private readonly _alertCtrl: AlertController,
    private readonly _modalCtrl: ModalController,
    private readonly _transloco: TranslocoService,
    private readonly _deadlineOrderService: DeadlineOrderService,
    private readonly _headerActions: HeaderActionsService,
    private readonly _organizationApi: OrganizationApiService,
    private readonly _carApi: CarService,
  ) {
    addIcons({
      gitCompareOutline,
      waterOutline,
      pencilOutline,
      addCircleOutline,
      cloudUploadOutline,
      carOutline,
      chevronForward,
      ellipsisHorizontal,
      shareSocialOutline,
      exitOutline,
      logOutOutline,
      checkmarkCircleOutline,
      chevronDown,
      chevronUp,
      reorderThreeOutline,
      refreshOutline,
      closeOutline,
      flameOutline,
      flashOutline,
      personOutline,
      informationCircleOutline,
      cameraOutline,
      trashOutline,
      copyOutline,
      checkmarkOutline,
      star,
      starOutline,
      notificationsOutline,
      notificationsOffOutline,
    });
    // Custom icon (Ionicons has no gas-pump glyph) — see fuel-pump.icon.ts.
    addIcons({ [FUEL_PUMP_ICON_NAME]: FUEL_PUMP_ICON_SRC });
  }

  vinCopied = false;

  copyVin(vin: string | null | undefined): void {
    if (!vin) return;
    navigator.clipboard.writeText(vin).then(() => {
      this.vinCopied = true;
      setTimeout(() => (this.vinCopied = false), 1500);
    });
  }

  async confirmLeaveSharedCar(): Promise<void> {
    this.moreMenuOpen = false;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(
        'cars.details.leaveAccessConfirm.title',
      ),
      message: this._transloco.translate(
        'cars.details.leaveAccessConfirm.message',
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate(
            'cars.details.leaveAccessConfirm.confirm',
          ),
          role: 'destructive',
          handler: () => this._leaveSharedCar(),
        },
      ],
    });
    await alert.present();
  }

  private _leaveSharedCar(): void {
    if (this._carId == null) return;
    this._carAccessFacade
      .leaveAccess(this._carId)
      .pipe(take(1))
      .subscribe({
        next: () =>
          this._navHistory.backAfterDelete(
            `${CARS_ROUTES.details.fullPath}/${this._carId}`,
            {
              fallback: HAU_ROUTES.cars.fullPath,
            },
          ),
        error: err => console.error('Could not leave shared car:', err),
      });
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      const carId = params['id'];
      this._carId = Number(carId);
      this._carDetailFacade.loadCurrentCar(carId);
      this._loadHubTabs(this._carId);
      this._loadDeadlineOrder(this._carId);
      this._loadDismissedKeys(this._carId);

      // Deadlines are derived, never stored: whichever documents/maintenance sources are
      // currently enabled (see core/car-page/FEATURE.md) re-run the whole list on their own
      // data changing — cars itself no longer loads or even knows the shape of what feeds it.
      this._contributions
        .deadlines$(this._carId)
        .pipe(untilDestroyed(this))
        .subscribe(items => {
          this.deadlines = this._applyDismissed(applyManualOrder(items, this._deadlineOrder));
        });
    });

    this.currentCar$
      .pipe(untilDestroyed(this))
      .subscribe(car => this._pushHeaderTitle(car));
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — this Ionic lifecycle hook does.
  ionViewWillEnter(): void {
    this._viewActive = true;
    this._pushHeaderTitle(this._lastCar);
    // The hub root is one of the routes the shell's centre FAB can now be visible on (single-
    // car mode keeps the bottom bar, see "Bottom bar visibility on car-scoped routes" in
    // core/navigation/FEATURE.md) — registered unconditionally, same convention as every other
    // car-page tab; whether the FAB itself ever renders is entirely down to MainComponent's
    // hideBottomNav. Opens the same "…" action sheet the header button does.
    this._fabAction.set({ run: () => this.openMoreMenu(), ariaLabelKey: 'nav.fab.carActions' });
  }

  ionViewWillLeave(): void {
    this._viewActive = false;
    // Defensive: this page projects no action buttons, but clearing both
    // slots on leave keeps the invariant that no page ever inherits
    // another's — a lingering *start* template would hide the back button.
    this._headerActions.clear();
    this._headerActions.clearTitle();
    this._headerActions.setHeroOverlay(false);
    this._fabAction.clear();
  }

  /** Closes the "…" sheet and opens the shared mute-duration sheet (see ReminderMuteActionsService.chooseAndMute). */
  openMuteChoice(car: CarDto): void {
    this.moreMenuOpen = false;
    void this.muteActions.chooseAndMute(car.id);
  }

  async unmuteReminders(car: CarDto): Promise<void> {
    this.moreMenuOpen = false;
    await this.muteActions.unmute(car.id);
  }

  /** "…" sheet trigger — shared by the header's own button and the shell's centre FAB. */
  openMoreMenu(): void {
    this.moreMenuOpen = true;
  }

  private _pushHeaderTitle(car: CarDto | null | undefined): void {
    this._lastCar = car ?? null;
    if (!this._viewActive) return;
    this._headerActions.setTitle(
      car && car.status === 'SOLD' ? `${car.make} ${car.model}` : null,
    );
    // Overlay header only while a hero photo exists to bleed under it.
    // Business has no hero photo (compact header card instead), so never the overlay there.
    this._headerActions.setHeroOverlay(
      !!car &&
        car.status !== 'SOLD' &&
        !this.sessionContext.isBusiness() &&
        this.getSortedPhotos(car).length > 0,
    );
  }

  private _loadDeadlineOrder(carId: number): void {
    this._deadlineOrderService
      .getOrder(carId)
      .pipe(take(1))
      .subscribe(order => {
        this._deadlineOrder = order;
        this.hasManualOrder = order.length > 0;
        this.deadlines = applyManualOrder(this.deadlines, order);
      });
  }

  private _loadDismissedKeys(carId: number): void {
    this._deadlineOrderService
      .getDismissed(carId)
      .pipe(take(1))
      .subscribe(dismissed => {
        this._dismissedKeys = dismissed;
        this.deadlines = this._applyDismissed(this.deadlines);
      });
  }

  // Maintenance-kind dismissal goes through CarMaintenanceSetting.tracked instead (the
  // maintenance deadline source's own `dismiss`) — this only needs to hide document-kind
  // items, the one case with no source-specific mechanism (see CarDeadlineSource.dismiss's doc).
  private _applyDismissed(items: CarDeadlineItem[]): CarDeadlineItem[] {
    return items.filter(
      item =>
        !(item.kind === 'document' && this._dismissedKeys.includes(item.key)),
    );
  }

  // The hub grid's tiles and the "…" sheet/quick-button actions come from whatever
  // features registered (and have enabled) via core/car-page/car-page.contributions.ts —
  // see core/car-page/FEATURE.md. Each tab's own `count` (notes saved, active wishes,
  // journal entries, maintenance records) is resolved by its owning feature, not here.
  private _loadHubTabs(carId: number): void {
    this._contributions
      .visibleTabs$(carId)
      .pipe(untilDestroyed(this))
      .subscribe(tabs => {
        this.hubTabs = tabs;
        this._loadTabCounts(tabs, carId);
        this._loadSubLabels(tabs, carId);
      });
    this._contributions
      .visibleActions$()
      .pipe(untilDestroyed(this))
      .subscribe(actions => {
        // "add-vehicle" has no per-car visibility gate of its own (CarActionContribution has
        // no CarTabContribution.hubVisible equivalent) — it's a session-wide condition
        // (single-car mode), filtered here instead. See core/navigation/FEATURE.md.
        this.sheetActions = actions.filter(
          action =>
            action.id !== 'add-fuel-entry' &&
            (action.id !== 'add-vehicle' || this._singleCar.isSingleCarMode()),
        );
        this.fuelAction = actions.find(action => action.id === 'add-fuel-entry');
      });
  }

  /**
   * The "Favourite car" sheet row's current-state badge — not part of CarActionContribution's
   * static shape, so rendered as a small, action-id-keyed template exception instead (same
   * convention as Rapoarte's current-year sub-label — see core/car-page/FEATURE.md).
   */
  isFavoriteAction(action: CarActionContribution): boolean {
    return action.id === 'toggle-favorite';
  }

  private _loadTabCounts(tabs: CarTabContribution[], carId: number): void {
    tabs
      .filter(tab => tab.count)
      .forEach(tab => {
        this._contributions
          .countOf(tab, carId)
          .pipe(untilDestroyed(this))
          .subscribe(count => this.tabCounts.set(tab.id, count));
      });
  }

  private _loadSubLabels(tabs: CarTabContribution[], carId: number): void {
    tabs
      .filter(tab => tab.subLabel)
      .forEach(tab => {
        this._contributions
          .subLabelOf(tab, carId)
          .pipe(untilDestroyed(this))
          .subscribe(sub => this.subLabels.set(tab.id, sub));
      });
  }

  navigateToEdit(car: CarDto): void {
    this.moreMenuOpen = false;
    this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.edit.path}`,
      { animated: false },
    );
  }

  // Istoric/Documente/Rapoarte/Notițe/Wishlist/Plan hub tiles navigate through
  // whatever CarTabContribution.link() the owning feature registered — see goToTab() below.
  /** Hub grid: navigates through the tab's own `link(carId)` — see core/car-page/FEATURE.md. */
  goToTab(tab: CarTabContribution, car: CarDto): void {
    const { commands, queryParams } = tab.link(car.id);
    void this._navCtrl.navigateForward(
      commands[0] as string,
      queryParams ? { queryParams } : undefined,
    );
  }

  navigateToSharing(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.partajare.path}`,
    );
  }

  navigateToDriverAssignment(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.sofer.path}`,
    );
  }

  /**
   * Driver assignment only applies to organization-owned cars — `organization_id`
   * isn't on the generated `CarDto` (additive backend field, not regenerated
   * through the client, same as elsewhere — see driver-assignment.model.ts).
   */
  isOrgCar(car: CarDto): boolean {
    return (
      (car as CarDto & { organization_id?: number | null }).organization_id !=
      null
    );
  }

  private _orgIdOf(car: CarDto): number | null {
    return (
      (car as CarDto & { organization_id?: number | null }).organization_id ??
      null
    );
  }

  async confirmRemoveFromOrganization(car: CarDto): Promise<void> {
    this.moreMenuOpen = false;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(
        'cars.details.removeFromOrgConfirm.title',
      ),
      message: this._transloco.translate(
        'cars.details.removeFromOrgConfirm.message',
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate(
            'cars.details.removeFromOrgConfirm.confirm',
          ),
          role: 'destructive',
          handler: () => this._removeCarFromOrganization(car),
        },
      ],
    });
    await alert.present();
  }

  private _removeCarFromOrganization(car: CarDto): void {
    const organizationId = this._orgIdOf(car);
    if (organizationId == null) return;
    this._organizationApi
      .removeCar(organizationId, car.id)
      .pipe(take(1))
      .subscribe({
        next: () =>
          this._navHistory.backAfterDelete(
            `${CARS_ROUTES.details.fullPath}/${car.id}`,
            {
              fallback: HAU_ROUTES.cars.fullPath,
            },
          ),
        error: () =>
          this._showGenericError(
            this._transloco.translate('organization.errors.removeCar'),
          ),
      });
  }

  private async _showGenericError(message: string): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('common.error'),
      message,
      buttons: [
        { text: this._transloco.translate('common.gotIt'), role: 'cancel' },
      ],
    });
    await alert.present();
  }

  /** "…" sheet: add-maintenance/add-document, whichever features registered them. */
  runSheetAction(action: CarActionContribution, car: CarDto): void {
    this.moreMenuOpen = false;
    action.run(car.id, this._injector);
  }

  /**
   * The quick fuel/charge button next to the car's name — fuel-ups happen every few days
   * (unlike RCA/ITP, which are yearly), so this shortcut skips the "…" menu entirely. Runs
   * the maintenance feature's add-fuel-entry action (see core/car-page/FEATURE.md); absent
   * when maintenance is disabled for the organization, same as every other contribution.
   */
  runFuelAction(car: CarDto): void {
    this.fuelAction?.run(car.id, this._injector);
  }

  dismissNicknameNotice(): void {
    this.nicknameNoticeDismissed = true;
    localStorage.setItem(NICKNAME_NOTICE_DISMISSED_KEY, 'true');
  }

  openRemovePanel(): void {
    this.moreMenuOpen = false;
    this.removePanelOpen = true;
  }

  onMarkAsSold(car: CarDto): void {
    this.removePanelOpen = false;
    this._carDetailFacade.markAsSold(String(car.id));
  }

  onRestoreCar(car: CarDto): void {
    this.removePanelOpen = false;
    this._carDetailFacade.restoreCar(String(car.id));
  }

  async onDeletePermanently(car: CarDto): Promise<void> {
    this.removePanelOpen = false;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.deleteAlert.header'),
      message: new IonicSafeString(
        this._transloco.translate('cars.details.deleteAlert.message', {
          name: `${car.make} ${car.model}`,
        }),
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._carDetailFacade.deleteCar(String(car.id)),
        },
      ],
    });
    await alert.present();
  }

  getSortedPhotos(car: CarDto): PhotoItem[] {
    if (!car.photos?.length) return [];
    return [...car.photos]
      .sort((a, b) => (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0))
      .map(p => ({ url: p.url, isDefault: p.is_default }));
  }

  /**
   * The alert banner's soonest expiring RCA/ITP/ROV, if within 60 days — derived generically
   * from `this.deadlines`' `alert` flag (set by the documents source; see
   * `CarDeadlineItem.alert`'s doc), so cars never needs to know which document types exist.
   */
  getNextExpiry(): CarDeadlineItem | null {
    const candidates = this.deadlines
      .filter(item => item.alert && item.daysLeft != null && item.daysLeft > 0)
      .sort((a, b) => a.daysLeft! - b.daysLeft!);

    if (!candidates.length) return null;
    const soonest = candidates[0];
    return soonest.daysLeft! < 60 ? soonest : null;
  }

  getFuelLabel(fuel: CarDto['fuel_type']): string {
    const map: Record<string, string> = {
      PETROL: 'Petrol',
      DIESEL: 'Diesel',
      HYBRID: 'Hybrid',
      PLUGIN_HYBRID: 'Plug-in Hybrid',
      ELECTRIC: 'Electric',
      LPG: 'LPG',
    };
    return fuel ? (map[fuel] ?? fuel) : '—';
  }

  getTransmissionLabel(t: CarDto['transmission']): string {
    const map: Record<string, string> = {
      MANUAL: 'Manual',
      AUTOMATIC: 'Automatic',
      SEMI_AUTOMATIC: 'Semi-automatic',
    };
    return t ? (map[t] ?? t) : '—';
  }

  // The dark km card tracks *actual* mileage (updated over time from the hub),
  // kept separate from `current_mileage`, which is the initial/purchase-time
  // value set once in the car form. Falls back to the initial value until the
  // owner records a real update.
  // ── Stare & scadențe ───────────────────────────────────────────────
  // Collapsed shows just the first 3 items (whatever order they're already
  // in — manual order or by urgency); expanded shows everything and is the
  // only place rows can be dragged, since the collapsed list is a truncated
  // subset and its indices don't map onto the full order.
  //
  // With 3 items or fewer there's nothing worth folding away — collapsing a
  // 1-item list just adds an extra tap to see the one thing that's there — so
  // below that threshold the section always renders as if already expanded,
  // and the toggle button doesn't show at all. `deadlinesExpanded` still
  // tracks the user's own toggle for when there ARE enough items for it to
  // matter.

  private static readonly DEADLINES_COLLAPSE_THRESHOLD = 3;

  /** True once collapsing would actually hide something worth revealing. */
  get showDeadlinesToggle(): boolean {
    return (
      this.deadlines.length > CarsDetailsComponent.DEADLINES_COLLAPSE_THRESHOLD
    );
  }

  /** Whether the section is rendering its full, draggable list right now. */
  get isDeadlinesExpanded(): boolean {
    return this.deadlinesExpanded || !this.showDeadlinesToggle;
  }

  /** What the section renders right now. */
  get visibleDeadlines(): CarDeadlineItem[] {
    return this.isDeadlinesExpanded
      ? this.deadlines
      : this.deadlines.slice(
          0,
          CarsDetailsComponent.DEADLINES_COLLAPSE_THRESHOLD,
        );
  }

  toggleDeadlines(): void {
    this.deadlinesExpanded = !this.deadlinesExpanded;
  }

  onDeadlineDrop(event: CdkDragDrop<CarDeadlineItem[]>): void {
    if (event.previousIndex === event.currentIndex) return;

    const reordered = [...this.deadlines];
    moveItemInArray(reordered, event.previousIndex, event.currentIndex);

    this.deadlines = reordered;
    this._deadlineOrder = reordered.map(item => item.key);
    this.hasManualOrder = true;

    if (this._carId != null)
      this._deadlineOrderService.saveOrder(this._carId, this._deadlineOrder);
  }

  resetDeadlineOrder(): void {
    this._deadlineOrder = [];
    this.hasManualOrder = false;
    this.deadlines = applyManualOrder(this.deadlines, null);

    if (this._carId != null) this._deadlineOrderService.clearOrder(this._carId);
  }

  // ── Long-press-to-reorder ────────────────────────────────────────────
  // A plain tap/scroll must never arm reorder mode — only a press that's held
  // in place for LONG_PRESS_MS does. onCardPointerMove cancels the pending
  // timer the moment the finger travels past the tolerance, which is exactly
  // what a scroll gesture does within the first few pixels.

  onCardPointerDown(event: PointerEvent): void {
    if (!this.isDeadlinesExpanded || this.reorderModeActive) return;
    this._pressStart = { x: event.clientX, y: event.clientY };
    this._longPressTimer = setTimeout(
      () => this._enterReorderMode(),
      CarsDetailsComponent.LONG_PRESS_MS,
    );
  }

  onCardPointerMove(event: PointerEvent): void {
    if (!this._pressStart) return;
    const dx = Math.abs(event.clientX - this._pressStart.x);
    const dy = Math.abs(event.clientY - this._pressStart.y);
    if (
      dx > CarsDetailsComponent.LONG_PRESS_MOVE_TOLERANCE_PX ||
      dy > CarsDetailsComponent.LONG_PRESS_MOVE_TOLERANCE_PX
    ) {
      this._cancelLongPress();
    }
  }

  onCardPointerUp(): void {
    this._cancelLongPress();
  }

  onCardPointerCancel(): void {
    this._cancelLongPress();
  }

  exitReorderMode(): void {
    this.reorderModeActive = false;
  }

  private _cancelLongPress(): void {
    if (this._longPressTimer) {
      clearTimeout(this._longPressTimer);
      this._longPressTimer = null;
    }
    this._pressStart = null;
  }

  private async _enterReorderMode(): Promise<void> {
    this._pressStart = null;
    this._longPressTimer = null;
    this.reorderModeActive = true;
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {
      // No native haptics support (web/PWA without the plugin) — the wiggle
      // animation alone still communicates that reorder mode is active.
    }
  }

  // ── Dismiss (X) ──────────────────────────────────────────────────────
  // Maintenance items are "dismissed" by turning off tracking (CarMaintenanceSetting),
  // which already has its own undo UI (⚙ Setări mentenanță); document items have no
  // such setting, so they go through the separate dismissed-keys list instead.

  async confirmDismiss(item: CarDeadlineItem): Promise<void> {
    const label =
      this._transloco.translate(item.labelKey) +
      (item.countryCode ? ` ${item.countryCode}` : '');
    const isMaintenance = item.kind === 'maintenance';

    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(
        isMaintenance
          ? 'cars.details.hub.deadlines.confirmDismissMaintenanceTitle'
          : 'cars.details.hub.deadlines.confirmDismissDocumentTitle',
      ),
      message: this._transloco.translate(
        isMaintenance
          ? 'cars.details.hub.deadlines.confirmDismissMaintenanceMessage'
          : 'cars.details.hub.deadlines.confirmDismissDocumentMessage',
        { label },
      ),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.confirm'),
          handler: () => this._dismissItem(item),
        },
      ],
    });
    await alert.present();
  }

  private _dismissItem(item: CarDeadlineItem): void {
    if (this._carId == null) return;
    const carId = this._carId;

    this.deadlines = this.deadlines.filter(d => d.key !== item.key);

    // Delegates to the item's own source (maintenance: turns tracking off) — or, when that
    // source has no `dismiss` (documents), falls back to the generic dismissed-keys list.
    const dismissed = this._contributions.dismissDeadlineItem(item, this._injector);
    if (dismissed) {
      dismissed.pipe(take(1)).subscribe();
    } else {
      this._dismissedKeys = [...this._dismissedKeys, item.key];
      this._deadlineOrderService.saveDismissed(carId, this._dismissedKeys);
    }
  }

  /** The big right-hand number: days or km, positive until it goes overdue. */
  getDeadlineRemaining(item: CarDeadlineItem): {
    key: string;
    params: Record<string, unknown>;
    isOverdue: boolean;
  } {
    if (item.trackingUnit === 'km' && item.kmRemaining != null) {
      const isOverdue = item.kmRemaining < 0;
      return {
        key: isOverdue
          ? 'cars.details.hub.upcoming.overdueKm'
          : 'cars.details.hub.upcoming.remainingKm',
        params: { km: Math.abs(item.kmRemaining).toLocaleString() },
        isOverdue,
      };
    }

    const days = item.daysLeft ?? 0;
    const isOverdue = days < 0;
    return {
      key: isOverdue
        ? 'cars.details.hub.upcoming.overdueDays'
        : 'cars.details.hub.upcoming.remainingDays',
      params: { count: Math.abs(days) },
      isOverdue,
    };
  }

  /** The small line under the bar — where the item comes from, in its own terms. */
  getDeadlineDetail(item: CarDeadlineItem): {
    key: string;
    params: Record<string, unknown>;
  } {
    if (item.kind === 'document') {
      return item.fromDate
        ? {
            key: 'cars.details.hub.deadlines.validBetween',
            params: {
              from: formatDate(item.fromDate),
              to: formatDate(item.dueDate),
            },
          }
        : {
            key: 'cars.details.hub.deadlines.validUntil',
            params: { date: formatDate(item.dueDate) },
          };
    }

    if (item.trackingUnit === 'km' && item.lastMileage != null) {
      return {
        key: 'cars.details.hub.deadlines.lastAtMileage',
        params: {
          date: formatDate(item.fromDate),
          km: formatMileage(item.lastMileage),
        },
      };
    }

    return {
      key: 'cars.details.hub.upcoming.lastDone',
      params: { date: formatDate(item.fromDate) },
    };
  }

  /** Documents get a "renew" / "schedule" shortcut; maintenance gets "log it". */
  /**
   * Tapping the card itself: delegates to the item's own source — see `CarDeadlineSource.open`,
   * which already implements "view the record if there is one, else fall back to the same
   * target the footer action button uses" for its own kind.
   */
  openDeadline(item: CarDeadlineItem): void {
    if (this.reorderModeActive) return;
    this._contributions.openDeadlineItem(item, this._injector);
  }

  /**
   * The footer action button ("renew"/"schedule"/"log it"): for a document, always the car's
   * Documents tab (never the specific document — that's `openDeadline`'s job); for maintenance,
   * always "add a record". Both targets already exist as other contributions (the hub's own
   * "documents" tile, the "…" sheet's "add-maintenance" action), so this stays feature-agnostic
   * — no document/maintenance import needed, just `item.kind`.
   */
  onDeadlineAction(item: CarDeadlineItem, car: CarDto): void {
    if (item.kind === 'document') {
      const tab = this.hubTabs.find(t => t.id === 'documents');
      if (tab) this.goToTab(tab, car);
    } else {
      this.sheetActions.find(a => a.id === 'add-maintenance')?.run(car.id, this._injector);
    }
  }

  getDisplayMileage(car: CarDto): number | null {
    return car.actual_mileage ?? car.current_mileage ?? null;
  }

  getMileageUpdateInfo(car: CarDto): MileageUpdateInfo {
    const days = daysAgo(car.actual_mileage_updated_at);
    if (days === null) return { key: 'cars.details.hub.km.neverUpdated' };
    if (days <= 0) return { key: 'cars.details.hub.km.updatedToday' };
    if (days === 1) return { key: 'cars.details.hub.km.updatedYesterday' };
    return {
      key: 'cars.details.hub.km.updatedDaysAgo',
      params: { count: days },
    };
  }

  async openUpdateMileageDialog(car: CarDto): Promise<void> {
    const modal = await this._modalCtrl.create({
      component: UpdateMileageSheetComponent,
      componentProps: { currentMileage: this.getDisplayMileage(car) },
      ...UPDATE_MILEAGE_SHEET_OPTIONS,
    });
    await modal.present();
    const { data, role } = await modal.onDidDismiss<{ mileage: number }>();
    if (role === 'confirm' && data)
      this._handleMileageUpdate(car, data.mileage);
  }

  private _handleMileageUpdate(car: CarDto, newMileage: number): void {
    const reference = this.getDisplayMileage(car) ?? 0;
    const delta = newMileage - reference;
    if (delta < 0) {
      void this._confirmMileageAnomaly(
        car,
        newMileage,
        'cars.details.hub.km.warnDecrease',
      );
      return;
    }
    if (delta > MILEAGE_JUMP_WARNING_KM) {
      void this._confirmMileageAnomaly(
        car,
        newMileage,
        'cars.details.hub.km.warnJump',
      );
      return;
    }
    this._saveMileage(car, newMileage);
  }

  private async _confirmMileageAnomaly(
    car: CarDto,
    newMileage: number,
    messageKey: string,
  ): Promise<void> {
    const alert = await this._alertCtrl.create({
      message: this._transloco.translate(messageKey),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.confirm'),
          handler: () => this._saveMileage(car, newMileage),
        },
      ],
    });
    await alert.present();
  }

  private _saveMileage(car: CarDto, newMileage: number): void {
    // Partial payload on purpose: the API only needs id + actual_mileage, and
    // spreading the full CarDto would also serialize `photos`/`user_id` into the
    // update request's FormData, which the backend doesn't expect.
    // navigateOnSuccess: false — this is a quick inline update from the details/
    // preview screen, unlike the full car-edit form, so stay on this screen.
    this._carDetailFacade.udpateCar(
      { id: car.id, actual_mileage: newMileage } as CarDto,
      false,
    );
  }
}
