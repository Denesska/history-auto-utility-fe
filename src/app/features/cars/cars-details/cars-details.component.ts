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
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { ActivatedRoute } from '@angular/router';
import { CarDto, CarPhotoDto, DocumentDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { BlogService, CarService } from '@hau/autogenapi/services';
import { CarNotesFacade } from '@hau/features/cars/state/car-notes/car-notes.facade';
import { CarWishesFacade } from '@hau/features/cars/state/car-wishes/car-wishes.facade';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { getCarSubtitle } from '@hau/features/cars/cars.utils';
import { daysAgo, daysUntil } from '@hau/shared/utils/date-math.util';
import { formatDate, formatMileage, formatMileageDriven } from '@hau/shared/utils/formatting.util';
import { getDocExpiry } from '@hau/shared/utils/document-status.util';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { CarAccessFacade } from '@hau/features/cars/state/car-access/car-access.facade';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import {
  PhotoCarouselComponent,
  PhotoItem,
} from '@hau/shared/component/photo-carousel/photo-carousel.component';
import { CountryTagComponent } from '@hau/shared/component/country-flag/country-tag.component';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';
import { VehicleSilhouetteComponent } from '@hau/shared/component/vehicle-silhouette/vehicle-silhouette.component';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { OrganizationApiService } from '@hau/features/organization/organization-api.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import {
  applyManualOrder,
  buildDeadlineItems,
  DeadlineItem,
} from '@hau/shared/utils/deadline-items.util';
import { DeadlineOrderService } from '@hau/core/deadline-order.service';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling, tracked in docs/architecture-audit.md
import { CarMaintenanceSettingsService } from '@hau/features/maintenance/car-maintenance-settings.service';
import { CarMaintenanceProfilesService } from '@hau/features/maintenance/car-maintenance-profiles.service';
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
import { Store } from '@ngxs/store';
import { combineLatest, map, Observable, of, switchMap, take, tap } from 'rxjs';
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
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HAU_ROUTES } from '@hau/app.routes.const';
import {
  FUEL_PUMP_ICON_NAME,
  FUEL_PUMP_ICON_SRC,
} from '@hau/shared/icons/fuel-pump.icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

export interface ExpiryInfo {
  labelKey: string;
  date: string;
  days: number;
  warning: boolean;
}

export interface MileageUpdateInfo {
  key: string;
  params?: Record<string, unknown>;
}

const DOC_TYPE_LABEL_KEYS: Record<string, string> = {
  RCA: 'car.documents.insurance.label',
  ITP: 'car.documents.technicalInspection.label',
  ROV: 'car.documents.vignette.label',
};

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
  ],
})
export class CarsDetailsComponent
  implements OnInit, ViewWillEnter, ViewWillLeave
{
  readonly currentCar$ = this._carDetailFacade.currentCar$;
  readonly maintenanceRecords$ = this._carDetailFacade.maintenanceRecords$;
  readonly carDocuments$ = this._carDetailFacade.carDocuments$;
  readonly maintenanceIntervals$ = this._bootstrapFacade.maintenanceIntervals$;
  readonly carMaintenanceSettings$ =
    this._bootstrapFacade.carMaintenanceSettings$;
  readonly maintenanceProfiles$ = this._bootstrapFacade.maintenanceProfiles$;

  removePanelOpen = false;
  moreMenuOpen = false;

  /** Explains that a car's name (see cars-form's nickname field) is private to the viewer — not shared with anyone else who can see this car. One-time, dismissed forever once closed. */
  nicknameNoticeDismissed =
    localStorage.getItem(NICKNAME_NOTICE_DISMISSED_KEY) === 'true';

  soldDetailsExpanded = false;
  overviewExpanded = false;

  notesCount: number | null = null;
  jurnalCount: number | null = null;
  wishlistCount: number | null = null;
  readonly currentYear = new Date().getFullYear();

  /** Documents + maintenance in one list, already in the order the user sees them. */
  deadlines: DeadlineItem[] = [];
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
  // The hub always shows the 'normal' built-in profile's numbers (no profile picker
  // here, unlike the Plan page) — but a category customized by the user should still
  // reflect that here, so we fall back to their oldest/first custom profile, if any,
  // exactly like a single-profile user's one implicit profile used to work.
  private _defaultProfileId: number | null = null;
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

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly formatMileageDriven = formatMileageDriven;
  protected readonly daysUntil = daysUntil;
  protected readonly getDocExpiry = getDocExpiry;
  protected readonly getCarSubtitle = getCarSubtitle;

  /** Personal sharing UI is personal-only; driver assignment is business-only (see ACCOUNT-CONTEXT.md). */
  readonly sessionContext = inject(SessionContextService);

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
    private readonly _carNotesFacade: CarNotesFacade,
    private readonly _carWishesFacade: CarWishesFacade,
    private readonly _blogService: BlogService,
    private readonly _transloco: TranslocoService,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _deadlineOrderService: DeadlineOrderService,
    private readonly _maintenanceSettingsService: CarMaintenanceSettingsService,
    private readonly _maintenanceProfilesService: CarMaintenanceProfilesService,
    private readonly _headerActions: HeaderActionsService,
    private readonly _organizationApi: OrganizationApiService,
    private readonly _carApi: CarService,
  ) {
    addIcons({
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
      this._carDetailFacade.loadMaintenanceRecords(carId);
      this._carDetailFacade.loadCarDocuments(carId);
      this._loadNotesCount(carId);
      this._loadWishlistCount(carId);
      this._loadJurnalCount(carId);
      this._loadDeadlineOrder(this._carId);
      this._loadDismissedKeys(this._carId);
    });

    // Deadlines are derived, never stored: any change to the car's mileage, its
    // documents or its service history re-runs the whole list.
    combineLatest([
      this.currentCar$,
      this.carDocuments$,
      this.maintenanceRecords$,
      this.maintenanceIntervals$,
      this.carMaintenanceSettings$,
      this.maintenanceProfiles$,
    ])
      .pipe(untilDestroyed(this))
      .subscribe(
        ([car, docs, records, intervals, settingsByCarId, profilesByCarId]) => {
          // Oldest first (see CarMaintenanceProfilesService.getAllByUser ordering) — a
          // user with only ever the one auto-created "Profilul meu" always resolves to it.
          this._defaultProfileId = car
            ? (profilesByCarId[car.id]?.[0]?.id ?? null)
            : null;
          const allSettings = car ? (settingsByCarId[car.id] ?? []) : [];
          const settings =
            this._defaultProfileId != null
              ? allSettings.filter(s => s.profile_id === this._defaultProfileId)
              : [];
          this.deadlines = car
            ? this._applyDismissed(
                applyManualOrder(
                  buildDeadlineItems(
                    car,
                    docs,
                    records ?? [],
                    intervals ?? [],
                    'normal',
                    settings,
                  ),
                  this._deadlineOrder,
                ),
              )
            : [];
        },
      );

    this.currentCar$
      .pipe(untilDestroyed(this))
      .subscribe(car => this._pushHeaderTitle(car));
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do. Re-entering this
  // page (e.g. after adding a maintenance record from elsewhere) doesn't re-run
  // ngOnInit's route-param subscription since :id hasn't changed, so the
  // deadline widget's maintenance records would otherwise go stale.
  ionViewWillEnter(): void {
    this._viewActive = true;
    this._pushHeaderTitle(this._lastCar);
    if (this._carId != null)
      this._carDetailFacade.loadMaintenanceRecords(String(this._carId));
  }

  ionViewWillLeave(): void {
    this._viewActive = false;
    // Defensive: this page projects no action buttons, but clearing both
    // slots on leave keeps the invariant that no page ever inherits
    // another's — a lingering *start* template would hide the back button.
    this._headerActions.clear();
    this._headerActions.clearTitle();
    this._headerActions.setHeroOverlay(false);
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

  /** No custom profile yet on this car — auto-creates the same default-named one the Plan page's settings panel would. */
  private _ensureDefaultProfile(carId: number): Observable<number> {
    if (this._defaultProfileId != null) return of(this._defaultProfileId);
    return this._maintenanceProfilesService
      .createProfile(
        carId,
        this._transloco.translate('plan.settings.defaultProfileName'),
      )
      .pipe(
        tap(created => (this._defaultProfileId = created.id)),
        map(created => created.id),
      );
  }

  // Maintenance-kind dismissal goes through CarMaintenanceSetting.tracked instead
  // (it's already filtered out upstream, in buildPlanItems) — this only needs to
  // hide document-kind items, the one case with no other mechanism for it.
  private _applyDismissed(items: DeadlineItem[]): DeadlineItem[] {
    return items.filter(
      item =>
        !(item.kind === 'document' && this._dismissedKeys.includes(item.key)),
    );
  }

  private _loadNotesCount(carId: string): void {
    const id = Number(carId);
    this._carNotesFacade
      .notesFor(id)
      .pipe(untilDestroyed(this))
      .subscribe(notes => {
        this.notesCount = notes.length;
      });
    this._carNotesFacade.loadNotes(id);
  }

  // Counts only the ACTIVE wishes — a completed one already lives in the
  // history, so showing it here would double-count it against Istoric.
  private _loadWishlistCount(carId: string): void {
    const id = Number(carId);
    this._carWishesFacade
      .wishlistFor(id)
      .pipe(untilDestroyed(this))
      .subscribe(entry => {
        this.wishlistCount = entry.items.filter(
          w => w.status === 'ACTIVE',
        ).length;
      });
    this._carWishesFacade.loadWishlist(id);
  }

  private _loadJurnalCount(carId: string): void {
    this._blogService
      .getEntries({ car_id: Number(carId) })
      .pipe(take(1))
      .subscribe({
        next: entries => {
          this.jurnalCount = entries.length;
        },
        error: () => {
          this.jurnalCount = null;
        },
      });
  }

  navigateToEdit(car: CarDto): void {
    this.moreMenuOpen = false;
    this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.edit.path}`,
      { animated: false },
    );
  }

  navigateToCarDocuments(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.documents.path}`,
    );
  }

  navigateToJurnal(car: CarDto): void {
    void this._navCtrl.navigateForward(HAU_ROUTES.blog.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  navigateToReports(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.rapoarte.path}`,
    );
  }

  navigateToPlan(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.plan.path}`,
    );
  }

  navigateToMaintenanceHistory(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.istoric.path}`,
    );
  }

  navigateToNotes(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.notite.path}`,
    );
  }

  navigateToWishlist(car: CarDto): void {
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.wishlist.path}`,
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

  getExpiringDocsCount(docs: DocumentDto[]): number {
    return docs.filter(d => {
      const days = daysUntil(d.expiry_date);
      return days !== null && days <= 30;
    }).length;
  }

  navigateToAddMaintenance(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  // Fuel-ups happen every few days (unlike RCA/ITP, which are yearly), so this
  // shortcut skips the "..." menu entirely and jumps straight into the add-maintenance
  // form with Alimentare pre-selected — see MaintenanceFormComponent's `serviceType`
  // query param handling.
  navigateToAddFuelEntry(car: CarDto): void {
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
      queryParams: { carId: car.id, serviceType: 'ALIMENTARE' },
    });
  }

  navigateToUploadDocument(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath, {
      queryParams: { carId: car.id },
    });
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

  getNextExpiry(docs: DocumentDto[] | null | undefined): ExpiryInfo | null {
    const candidates = (['RCA', 'ITP', 'ROV'] as const)
      .map(type => ({ type, date: getDocExpiry(docs, type) }))
      .filter(
        (c): c is { type: 'RCA' | 'ITP' | 'ROV'; date: string } =>
          c.date != null,
      )
      .map(c => ({
        type: c.type,
        date: c.date,
        days: daysUntil(c.date) ?? 9999,
      }))
      .filter(c => c.days > 0)
      .sort((a, b) => a.days - b.days);

    if (!candidates.length) return null;
    const soonest = candidates[0];
    return {
      labelKey: DOC_TYPE_LABEL_KEYS[soonest.type],
      date: soonest.date,
      days: soonest.days,
      warning: soonest.days < 60,
    };
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
  get visibleDeadlines(): DeadlineItem[] {
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

  onDeadlineDrop(event: CdkDragDrop<DeadlineItem[]>): void {
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

  async confirmDismiss(item: DeadlineItem): Promise<void> {
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

  private _dismissItem(item: DeadlineItem): void {
    if (this._carId == null) return;
    const carId = this._carId;

    this.deadlines = this.deadlines.filter(d => d.key !== item.key);

    if (item.kind === 'maintenance' && item.planItem) {
      const category = item.planItem.category;
      // The service folds the result back into BootstrapFacade's cache itself.
      this._ensureDefaultProfile(carId)
        .pipe(
          switchMap(profileId =>
            this._maintenanceSettingsService.updateSetting(
              carId,
              profileId,
              category,
              { tracked: false },
            ),
          ),
          take(1),
        )
        .subscribe();
    } else {
      this._dismissedKeys = [...this._dismissedKeys, item.key];
      this._deadlineOrderService.saveDismissed(carId, this._dismissedKeys);
    }
  }

  /** The big right-hand number: days or km, positive until it goes overdue. */
  getDeadlineRemaining(item: DeadlineItem): {
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
  getDeadlineDetail(item: DeadlineItem): {
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
  /** Tapping the card itself: open the record behind the deadline, else the same as the action button. */
  openDeadline(item: DeadlineItem, car: CarDto): void {
    if (this.reorderModeActive) return;
    if (item.kind === 'document' && item.documentId != null) {
      void this._navCtrl.navigateForward(
        `${DOCUMENTS_ROUTES.view.fullPath}/${item.documentId}`,
      );
    } else if (
      item.kind === 'maintenance' &&
      item.maintenanceRecordId != null
    ) {
      void this._navCtrl.navigateForward(
        `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.istoric.path}/${item.maintenanceRecordId}`,
      );
    } else {
      this.onDeadlineAction(item, car);
    }
  }

  onDeadlineAction(item: DeadlineItem, car: CarDto): void {
    if (item.kind === 'document') this.navigateToCarDocuments(car);
    else this.navigateToAddMaintenance(car);
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
