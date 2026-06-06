import { DatePipe, DecimalPipe, NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline, chevronDownOutline, pinOutline, searchOutline,
  ellipsisHorizontalOutline, optionsOutline, createOutline,
  bookmarkOutline, trashOutline, chevronForwardOutline,
  carOutline, constructOutline, mapOutline, waterOutline, flashOutline,
  shieldCheckmarkOutline, alertCircleOutline,
} from 'ionicons/icons';
import { CarService } from '@hau/autogenapi/services';
import { CarDto } from '@hau/autogenapi/models';
import { BlogEntryDto, BlogTagDto } from '@hau/autogenapi/models';
import { BlogFacade } from '@hau/features/blog/state/blog.facade';
import {
  VehicleEntryCategory, VEHICLE_ENTRY_CATEGORY_LABELS,
  VEHICLE_ENTRY_CATEGORIES, VEHICLE_CATEGORY_CHIPS_PRIMARY,
  carGradient,
} from '@hau/features/blog/models/blog.model';

type SortOrder = 'newest' | 'oldest';

export interface CarTab {
  key: string;
  label: string;
  carId: number | null;
}

@Component({
  selector: 'app-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  imports: [IonContent, IonIcon, DatePipe, DecimalPipe, NgStyle],
})
export class BlogListComponent implements OnInit {
  readonly VEHICLE_ENTRY_CATEGORY_LABELS = VEHICLE_ENTRY_CATEGORY_LABELS;
  readonly VEHICLE_ENTRY_CATEGORIES = VEHICLE_ENTRY_CATEGORIES;
  readonly VEHICLE_CATEGORY_CHIPS_PRIMARY = VEHICLE_CATEGORY_CHIPS_PRIMARY;

  // ── Tab state ────────────────────────────────────────────────────
  tabs: CarTab[] = [];
  activeTabKey = 'personal';
  cars: CarDto[] = [];

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
    private readonly carService: CarService,
  ) {
    addIcons({
      addOutline, chevronDownOutline, pinOutline, searchOutline,
      ellipsisHorizontalOutline, optionsOutline, createOutline,
      bookmarkOutline, trashOutline, chevronForwardOutline,
      carOutline, constructOutline, mapOutline, waterOutline, flashOutline,
      shieldCheckmarkOutline, alertCircleOutline,
    });
  }

  ngOnInit(): void {
    // Load cars to build tabs
    this.carService.carControllerGetAllCars().subscribe(cars => {
      this.cars = cars;
      this.tabs = [
        { key: 'personal', label: 'Personal', carId: null },
        ...cars.map(c => ({ key: `car-${c.id}`, label: `${c.make} ${c.model}`, carId: c.id })),
      ];
    });

    // Load all blog entries, then apply local filters
    this.blogFacade.loadEntries();
    this.blogFacade.entries$.subscribe(entries => {
      this.allEntries = entries;
      this.applyFilters();
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
  onTagChange(event: Event): void {
    this.selectedTag = (event.target as HTMLSelectElement).value;
    this.applyFilters();
  }

  onSortChange(event: Event): void {
    this.sortOrder = (event.target as HTMLSelectElement).value as SortOrder;
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
