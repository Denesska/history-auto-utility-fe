import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { IonIcon, IonSpinner } from '@ionic/angular';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { addIcons } from 'ionicons';
import {
  closeOutline,
  checkmarkOutline,
  refreshOutline,
  reorderThreeOutline,
} from 'ionicons/icons';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { NavDestination } from '@hau/core/navigation/nav-destinations';
import {
  ALL_CARS_SUFFIX,
  MAX_BOTTOM_BAR_ITEMS,
  NavigationPreferencesService,
  resolveBottomBarEntries,
} from '@hau/core/navigation/navigation-preferences.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';

/** One slot in the bottom-bar editor — `destId: null` means "Empty". */
interface BottomBarEditorSlot {
  /** Stable identity for `@for`'s `track` across a CDK drag reorder (not the array index, which changes). */
  key: number;
  destId: string | null;
  carId: number | null;
  /** `'<destId>:all'` — the destination's global all-cars page (only for a destination with `allLink`). */
  isAll: boolean;
}

/** `<app-dropdown>` sentinel value for "no destination chosen" — distinct from any destination id. */
const EMPTY_SLOT_VALUE = '__empty__';

/**
 * The "Customize bottom bar" sheet, opened from `SettingsComponent` (see `features/settings/
 * FEATURE.md`'s "Bottom bar" section). A dedicated component, not an inline `@if` block, purely
 * for the `<body>`-reparenting trick in `ngOnInit`/`ngOnDestroy` below — same technique and
 * same reason as `features/maintenance/add-maintenance-panel/add-maintenance-panel.component.ts`
 * (see its `ngOnInit` comment): a routed page's Ionic `.ion-page` host sets `contain: layout`,
 * which both traps `position: fixed` descendants inside that page's own box (not the true
 * viewport — so a bottom-anchored shell element like the tab bar is never actually covered) and
 * caps their stacking context at the page's own z-index, below the app shell header. Only a
 * dedicated component can reparent *itself* this way; an `@if` block inside `SettingsComponent`'s
 * own template has no element of its own to move.
 *
 * Owns the whole edit draft itself (`editorSlots`, dirty/valid checks, Save/Cancel) — the parent
 * only toggles whether this component exists at all and reacts to `(closed)`. Edits are a local
 * draft; nothing reaches `NavigationPreferencesService.setBottomBar()` until Save. A failed save
 * is surfaced by `SettingsComponent`'s own error-toast `effect()` (watching the same
 * `NavigationPreferencesService.saveError` signal this component's `save()` also writes to) —
 * this component only needs to stop its own spinner and keep the sheet open on that failure.
 */
@Component({
  selector: 'app-bottom-bar-editor-panel',
  templateUrl: './bottom-bar-editor-panel.component.html',
  styleUrls: ['./bottom-bar-editor-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    TranslocoPipe,
    IonIcon,
    IonSpinner,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    DropdownComponent,
    FullscreenPanelComponent,
  ],
})
export class BottomBarEditorPanelComponent implements OnInit, OnDestroy {
  @Output() readonly closed = new EventEmitter<void>();

  private readonly transloco = inject(TranslocoService);
  private readonly navPrefs = inject(NavigationPreferencesService);
  private readonly singleCar = inject(SingleCarService);
  readonly sessionContext = inject(SessionContextService);
  private readonly _elRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly _renderer = inject(Renderer2);

  readonly EMPTY_SLOT_VALUE = EMPTY_SLOT_VALUE;
  readonly activeCars = this.singleCar.activeCars;

  editorSlots: BottomBarEditorSlot[] = [];
  saving = false;
  private _nextSlotKey = 0;
  /** Snapshot taken at construction — compared against the current draft to drive Save's disabled state. */
  private readonly _initialEditorIds: string[];
  /**
   * True right after `reset()`, cleared by any further edit. Saving a plain "reset, untouched
   * since" draft sends `bottom_bar: null` (the real "use the defaults, always" value) rather
   * than the specific ids/cars that resolved to right now, so a later favourite-car change still
   * moves a reset car-kind slot along with it instead of leaving it pinned to whatever car Reset
   * happened to resolve at save time.
   */
  private _pendingResetToDefault = false;

  constructor() {
    addIcons({ closeOutline, checkmarkOutline, refreshOutline, reorderThreeOutline });

    // Seed the draft from the bar's current resolved state.
    this.editorSlots = this._slotsFromEntries(this.navPrefs.resolvedBottomBar());
    this._initialEditorIds = this._serializeSlots(this.editorSlots);
  }

  ngOnInit(): void {
    // Must happen in ngOnInit, not the constructor: Angular only inserts this component's host
    // element into its real template position (inside SettingsComponent's `@if` block) *after*
    // construction, as part of the same first change-detection pass — reparenting any earlier
    // gets silently undone by that insertion. Same fix, same reason, same hook as
    // add-maintenance-panel.component.ts's own ngOnInit (see this class's doc comment above).
    this._renderer.appendChild(document.body, this._elRef.nativeElement);
  }

  ngOnDestroy(): void {
    // We reparented ourselves to <body> in ngOnInit — remove it ourselves too, since
    // Angular's own view cleanup only knows about the original insertion point (the `@if`
    // placeholder in SettingsComponent's template), not <body> — same as add-maintenance-panel's
    // ngOnDestroy.
    const el = this._elRef.nativeElement;
    if (el.parentNode === document.body) {
      this._renderer.removeChild(document.body, el);
    }
  }

  /** Cancel/backdrop: no unsaved-changes confirm — same as every other non-routed edit panel in the app (`add-maintenance-panel` et al.), which just discard; only the routed car form has that confirm, via a route CanDeactivate guard that doesn't apply here. */
  close(): void {
    this.closed.emit();
  }

  /** Save button: disabled while the draft matches what's saved, or (defensively) has nothing chosen. */
  get dirty(): boolean {
    return JSON.stringify(this._serializeSlots(this.editorSlots)) !== JSON.stringify(this._initialEditorIds);
  }

  get valid(): boolean {
    return this.editorSlots.some(s => s.destId != null);
  }

  save(): void {
    if (this.saving || !this.valid || !this.dirty) return;
    this.saving = true;
    // An untouched-since-Reset draft saves as the real `null` ("always use the defaults"), not
    // today's resolved ids/cars — see `_pendingResetToDefault`'s doc.
    const ids = this._pendingResetToDefault ? [] : this._serializeSlots(this.editorSlots);
    this.navPrefs.setBottomBar(ids.length ? ids : null).subscribe({
      next: () => {
        this.saving = false;
        this.closed.emit();
      },
      // saveError is already flipped by the service; SettingsComponent's own effect() shows
      // the toast for it. Here we just stop the spinner and leave the panel open.
      error: () => {
        this.saving = false;
      },
    });
  }

  /**
   * This slot's destination options: every available destination not already chosen in a
   * *different* slot, plus "Empty" — except when this is the only non-empty slot, since at
   * least one must stay chosen.
   */
  slotDestinationOptions(index: number): DropdownOption[] {
    const chosenElsewhere = new Set(
      this.editorSlots.filter((_, i) => i !== index).map(s => s.destId).filter((id): id is string => !!id),
    );
    const options: DropdownOption[] = this.navPrefs
      .availableDestinations()
      .filter(dest => !chosenElsewhere.has(dest.id))
      .map(dest => ({ value: dest.id, label: this.transloco.translate(dest.labelKey) }));

    const nonEmptyCount = this.editorSlots.filter(s => s.destId).length;
    const isOnlyNonEmptySlot = this.editorSlots[index].destId != null && nonEmptyCount <= 1;
    if (!isOnlyNonEmptySlot) {
      options.unshift({ value: EMPTY_SLOT_VALUE, label: this.transloco.translate('settings.bottomBar.empty') });
    }
    return options;
  }

  onSlotDestinationChange(index: number, value: string | number): void {
    const destId = value === EMPTY_SLOT_VALUE ? null : String(value);
    const dest = destId ? this._destinationById(destId) : undefined;
    this.editorSlots[index] = {
      ...this.editorSlots[index],
      destId,
      ...(dest?.kind === 'car' ? this._defaultSlotCar(dest) : { carId: null, isAll: false }),
    };
    this._pendingResetToDefault = false;
  }

  /** Second dropdown only for a `kind: 'car'` slot, and only when there's a real choice to make. */
  slotShowsCarPicker(index: number): boolean {
    const destId = this.editorSlots[index]?.destId;
    if (!destId || this.activeCars().length <= 1) return false;
    return this._destinationById(destId)?.kind === 'car';
  }

  /** "All cars" first, but only for a destination that has a global all-cars page. */
  slotCarOptions(index: number): DropdownOption[] {
    const options: DropdownOption[] = this.activeCars().map(car => ({ value: car.id, label: this._carLabel(car) }));
    const dest = this._destinationById(this.editorSlots[index]?.destId ?? '');
    if (dest?.allLink) {
      options.unshift({ value: ALL_CARS_SUFFIX, label: this.transloco.translate('settings.bottomBar.allCars') });
    }
    return options;
  }

  slotCarValue(index: number): string | number | null {
    const slot = this.editorSlots[index];
    return slot.isAll ? ALL_CARS_SUFFIX : slot.carId;
  }

  onSlotCarChange(index: number, value: string | number): void {
    this.editorSlots[index] = value === ALL_CARS_SUFFIX
      ? { ...this.editorSlots[index], carId: null, isAll: true }
      : { ...this.editorSlots[index], carId: Number(value), isAll: false };
    this._pendingResetToDefault = false;
  }

  onSlotDrop(event: CdkDragDrop<BottomBarEditorSlot[]>): void {
    moveItemInArray(this.editorSlots, event.previousIndex, event.currentIndex);
    this._pendingResetToDefault = false;
  }

  /**
   * Resets only the draft — applied for real on Save, like every other edit here. The preview
   * uses the same resolution `resolvedBottomBar()` would (so a car-kind destination like
   * Journal shows its real favourite/first-car fallback here too), but saving an *untouched*
   * reset sends `null`, not these resolved ids — see `_pendingResetToDefault`.
   */
  reset(): void {
    const defaults = resolveBottomBarEntries(null, this.navPrefs.availableDestinations(), this.activeCars(), this.navPrefs.favoriteCarId());
    this.editorSlots = this._slotsFromEntries(defaults);
    this._pendingResetToDefault = true;
  }

  private _slotsFromEntries(entries: readonly { destination: NavDestination; carId: number | null; isAll: boolean }[]): BottomBarEditorSlot[] {
    return Array.from({ length: MAX_BOTTOM_BAR_ITEMS }, (_, i) => {
      const entry = entries[i];
      return {
        key: this._nextSlotKey++,
        destId: entry?.destination.id ?? null,
        carId: entry?.carId ?? null,
        isAll: entry?.isAll ?? false,
      };
    });
  }

  /**
   * Favourite car if it's still active, else "all cars" if the destination has a global page,
   * else the first active car; nothing with 0-1 cars (the picker is never shown then, and the
   * shell resolves the single car itself). Same order as `resolveBottomBarEntries`.
   */
  private _defaultSlotCar(dest: NavDestination): { carId: number | null; isAll: boolean } {
    const cars = this.activeCars();
    if (cars.length <= 1) return { carId: null, isAll: false };
    const favoriteId = this.navPrefs.favoriteCarId();
    if (favoriteId != null && cars.some(c => c.id === favoriteId)) return { carId: favoriteId, isAll: false };
    if (dest.allLink) return { carId: null, isAll: true };
    return { carId: cars[0]?.id ?? null, isAll: false };
  }

  private _destinationById(id: string): NavDestination | undefined {
    return this.navPrefs.availableDestinations().find(d => d.id === id);
  }

  private _serializeSlots(slots: BottomBarEditorSlot[]): string[] {
    return slots
      .filter((s): s is BottomBarEditorSlot & { destId: string } => !!s.destId)
      .map(s => (s.isAll ? `${s.destId}:${ALL_CARS_SUFFIX}` : s.carId != null ? `${s.destId}:${s.carId}` : s.destId));
  }

  private _carLabel(car: { nickname?: string | null; make: string; model: string; license_plate?: string | null }): string {
    const name = car.nickname || `${car.make} ${car.model}`;
    return car.license_plate ? `${name} · ${car.license_plate}` : name;
  }
}
