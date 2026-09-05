import { DatePipe, DecimalPipe, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { IonContent, IonIcon, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline, chevronDownOutline, pinOutline, searchOutline,
  ellipsisHorizontalOutline, optionsOutline, createOutline,
  bookmarkOutline, trashOutline, chevronForwardOutline,
  carOutline, constructOutline, mapOutline, waterOutline, flashOutline,
  shieldCheckmarkOutline, alertCircleOutline,
} from 'ionicons/icons';
import { CarDto } from '@hau/autogenapi/models';
import { BlogEntryDto, BlogTagDto } from '@hau/autogenapi/models';
import { BlogFacade } from '@hau/features/blog/state/blog.facade';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import {
  VehicleEntryCategory, VEHICLE_ENTRY_CATEGORY_LABELS,
  VEHICLE_ENTRY_CATEGORIES, VEHICLE_CATEGORY_CHIPS_PRIMARY,
  carGradient,
} from '@hau/features/blog/models/blog.model';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

type SortOrder = 'newest' | 'oldest';

export interface CarTab {
  key: string;
  label: string;
  carId: number | null;
}

@UntilDestroy()
@Component({
  selector: 'app-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  imports: [IonContent, IonIcon, IonRefresher, IonRefresherContent, DatePipe, DecimalPipe, NgStyle, DropdownComponent, TranslocoPipe, ImageUrlPipe],
})
export class BlogListComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

  readonly VEHICLE_ENTRY_CATEGORY_LABELS = VEHICLE_ENTRY_CATEGORY_LABELS;
  readonly VEHICLE_ENTRY_CATEGORIES = VEHICLE_ENTRY_CATEGORIES;
  readonly VEHICLE_CATEGORY_CHIPS_PRIMARY = VEHICLE_CATEGORY_CHIPS_PRIMARY;

  // ── Tab state ────────────────────────────────────────────────────
  tabs: CarTab[] = [];
  activeTabKey = 'personal';
  cars: CarDto[] = [];

  // Set when arriving via a car's own "Jurnal" tile/subnav entry (?carId=…) —
  // locks the view to that single car, no Personal tab and no switching to
  // another car, since the entry point is already car-specific.
  scopedCarId: number | null = null;
  get isScoped(): boolean { return this.scopedCarId !== null; }
  get scopedCarLabel(): string {
    const car = this.cars.find(c => c.id === this.scopedCarId);
    return car ? `${car.make} ${car.model}` : '';
  }

  get activeCarId(): number | null {
    return this.tabs.find(t => t.key === this.activeTabKey)?.carId ?? null;
  }
  get isPersonalTab(): boolean { return this.activeCarId === null; }

  // ── Filter state ─────────────────────────────────────────────────
  selectedVehicleCat: VehicleEntryCategory | 'all' = 'all';
  showMoreCats = false;
  selectedTag = '';
  sortOrder: SortOrder = 'newest';
  searchQuery = '';

  // ── Menu state ───────────────────────────────────────────────────
  showNewEntryMenu = false;
  openEntryMenuId: number | null = null;

  // ── Data ─────────────────────────────────────────────────────────
  private allEntries: BlogEntryDto[] = [];
  pinnedEntries: BlogEntryDto[] = [];
  filteredEntries: BlogEntryDto[] = [];
  availableTags: BlogTagDto[] = [];

  get activeCarGradient(): string {
    const car = this.cars.find(c => c.id === this.activeCarId);
    return car ? carGradient(car.id) : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  constructor(
    private readonly navCtrl: NavController,
    private readonly blogFacade: BlogFacade,
    private readonly _transloco: TranslocoService,
    private readonly _pullToRefresh: PullToRefreshService,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _headerActions: HeaderActionsService,
    private readonly _route: ActivatedRoute,
  ) {
    addIcons({
      addOutline, chevronDownOutline, pinOutline, searchOutline,
      ellipsisHorizontalOutline, optionsOutline, createOutline,
      bookmarkOutline, trashOutline, chevronForwardOutline,
      carOutline, constructOutline, mapOutline, waterOutline, flashOutline,
      shieldCheckmarkOutline, alertCircleOutline,
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('blog.title'));
    this._headerActions.set(this._headerActionsTpl);
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
    this._headerActions.clear();
  }

  ngOnInit(): void {
    const carIdParam = this._route.snapshot.queryParamMap.get('carId');
    this.scopedCarId = carIdParam ? Number(carIdParam) : null;

    // Cars to build tabs — already cached by BootstrapFacade, no need for a separate fetch.
    this._bootstrapFacade.ownedCars$.pipe(untilDestroyed(this)).subscribe(cars => {
      this.cars = cars;
      this.tabs = [
        { key: 'personal', label: this._transloco.translate('blog.tabs.personal'), carId: null },
        ...cars.map(c => ({ key: `car-${c.id}`, label: `${c.make} ${c.model}`, carId: c.id })),
      ];
      if (this.scopedCarId !== null) {
        this.activeTabKey = `car-${this.scopedCarId}`;
        this.applyFilters();
      }
    });

    // Load all blog entries, then apply local filters
    this.blogFacade.loadEntries();
    this.blogFacade.entries$.pipe(untilDestroyed(this)).subscribe(entries => {
      this.allEntries = entries;
      this.applyFilters();
    });
  }

  onRefresh(event: Event): void {
    this._pullToRefresh.refresh(event, {
      before: () => this.blogFacade.loadEntries(),
      after: () => {
        this._bootstrapFacade.ownedCars$.pipe(take(1)).subscribe(ownedCars => {
          this.cars = ownedCars;
          this.tabs = [
            { key: 'personal', label: this._transloco.translate('blog.tabs.personal'), carId: null },
            ...ownedCars.map(c => ({ key: `car-${c.id}`, label: `${c.make} ${c.model}`, carId: c.id })),
          ];
        });
      },
    });
  }

  // ── Tab navigation ───────────────────────────────────────────────
  setTab(tabKey: string): void {
    this.activeTabKey = tabKey;
    this.selectedVehicleCat = 'all';
    this.selectedTag = '';
    this.searchQuery = '';
    this.applyFilters();
  }

  // ── Vehicle category chip filter ─────────────────────────────────
  setVehicleCat(cat: VehicleEntryCategory | 'all'): void {
    this.selectedVehicleCat = cat;
    this.applyFilters();
  }

  toggleMoreCats(event: MouseEvent): void {
    event.stopPropagation();
    this.showMoreCats = !this.showMoreCats;
  }

  // ── Standard filters ─────────────────────────────────────────────
  get tagFilterOptions(): DropdownOption[] {
    return [
      { value: '', label: this._transloco.translate('blog.filters.allTags') },
      ...this.availableTags.map(tag => ({ value: tag.label, label: tag.label })),
    ];
  }

  get sortFilterOptions(): DropdownOption[] {
    return [
      { value: 'newest', label: this._transloco.translate('blog.filters.newestFirst') },
      { value: 'oldest', label: this._transloco.translate('blog.filters.oldestFirst') },
    ];
  }

  onTagChange(value: string | number): void {
    this.selectedTag = String(value);
    this.applyFilters();
  }

  onSortChange(value: string | number): void {
    this.sortOrder = value as SortOrder;
    this.applyFilters();
  }

  onSearchInput(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  // ── Core filter logic ────────────────────────────────────────────
  applyFilters(): void {
    let entries: BlogEntryDto[];

    if (this.isPersonalTab) {
      entries = this.allEntries.filter(e => e.category === 'PERSONAL');
    } else {
      entries = this.allEntries.filter(e =>
        e.category === 'VEHICLE' && e.car_id === this.activeCarId
      );
      if (this.selectedVehicleCat !== 'all') {
        entries = entries.filter(e => e.vehicle_category === this.selectedVehicleCat);
      }
    }

    const tagMap = new Map<string, BlogTagDto>();
    entries.forEach(e => e.tags.forEach(t => tagMap.set(t.label, t)));
    this.availableTags = Array.from(tagMap.values());

    if (this.selectedTag) {
      entries = entries.filter(e => e.tags.some(t => t.label === this.selectedTag));
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      entries = entries.filter(e =>
        e.title.toLowerCase().includes(q) || e.content.toLowerCase().includes(q)
      );
    }

    entries = [...entries].sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return this.sortOrder === 'newest' ? diff : -diff;
    });

    this.pinnedEntries = this.isPersonalTab ? entries.filter(e => e.is_pinned) : [];
    this.filteredEntries = entries;
  }

  // ── New entry menu ───────────────────────────────────────────────
  toggleNewEntryMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showNewEntryMenu = !this.showNewEntryMenu;
    this.openEntryMenuId = null;
  }

  @HostListener('document:click')
  closeMenus(): void {
    this.showNewEntryMenu = false;
    this.openEntryMenuId = null;
    this.showMoreCats = false;
  }

  navigateToNewEntry(category: 'PERSONAL' | 'VEHICLE', carId?: number): void {
    this.showNewEntryMenu = false;
    const extras = category === 'VEHICLE' && carId != null
      ? { queryParams: { category, carId } }
      : { queryParams: { category } };
    void this.navCtrl.navigateForward(['/main/blog/new'], { ...extras, animated: false });
  }

  newEntryFromCarTab(): void {
    const carId = this.activeCarId ?? undefined;
    void this.navCtrl.navigateForward(['/main/blog/new'], {
      queryParams: { category: 'VEHICLE', carId },
      animated: false,
    });
  }

  // ── Entry actions ────────────────────────────────────────────────
  viewEntry(entry: BlogEntryDto): void {
    void this.navCtrl.navigateForward(`/main/blog/${entry.id}`, { animated: false });
  }

  toggleEntryMenu(event: MouseEvent, entryId: number): void {
    event.stopPropagation();
    this.openEntryMenuId = this.openEntryMenuId === entryId ? null : entryId;
    this.showNewEntryMenu = false;
  }

  editEntry(event: MouseEvent, entry: BlogEntryDto): void {
    event.stopPropagation();
    this.openEntryMenuId = null;
    void this.navCtrl.navigateForward(`/main/blog/${entry.id}/edit`, { animated: false });
  }

  togglePin(event: MouseEvent, entry: BlogEntryDto): void {
    event.stopPropagation();
    this.openEntryMenuId = null;
    this.blogFacade.togglePin(entry.id);
  }

  deleteEntry(event: MouseEvent, entry: BlogEntryDto): void {
    event.stopPropagation();
    this.openEntryMenuId = null;
    this.blogFacade.deleteEntry(entry.id);
  }

  // ── Helpers ──────────────────────────────────────────────────────
  vehicleCategoryIcon(cat: VehicleEntryCategory | null | undefined): string {
    const map: Record<VehicleEntryCategory, string> = {
      REPAIR:        'construct-outline',
      SERVICE_VISIT: 'construct-outline',
      TRIP:          'map-outline',
      FUEL:          'water-outline',
      UPGRADE:       'flash-outline',
      INSPECTION:    'shield-checkmark-outline',
      BREAKDOWN:     'alert-circle-outline',
      OTHER:         'car-outline',
    };
    return cat ? map[cat] : 'car-outline';
  }

  entryThumb(entry: BlogEntryDto): string | null {
    return entry.cover_image_url ?? entry.images[0]?.url ?? null;
  }

  cardBg(entry: BlogEntryDto): string {
    if (!this.isPersonalTab && entry.car_id != null) {
      return carGradient(entry.car_id);
    }
    return entry.cover_gradient ?? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  get extraVehicleCats(): { value: VehicleEntryCategory; label: string }[] {
    return this.VEHICLE_ENTRY_CATEGORIES.filter(
      c => !this.VEHICLE_CATEGORY_CHIPS_PRIMARY.includes(c.value)
    );
  }
}
