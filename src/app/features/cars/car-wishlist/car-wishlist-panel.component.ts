import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarWishDto, ServiceType } from '@hau/autogenapi/models';
import { CarWishesFacade } from '@hau/features/cars/state/car-wishes/car-wishes.facade';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { SERVICE_TYPE_CONFIG, serviceTypeConfig } from '@hau/features/maintenance/service-type.config';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { AlertController, IonContent, IonFab, IonFabButton, IonIcon, IonicSafeString, IonReorder, IonReorderGroup, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline, arrowUpOutline, checkmarkCircleOutline, checkmarkOutline, closeOutline,
  heartOutline, reorderThreeOutline, trashOutline, walletOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs';

/** Ionic's reorder payload, typed structurally so this file doesn't depend on @ionic/core's type paths. */
interface ReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | unknown[]) => unknown;
}

/**
 * One active wish plus everything the budget line needs: the running total of
 * every wish at or above it, and whether the line is drawn against this row.
 */
export interface WishRow {
  wish: CarWishDto;
  cumulative: number;
  aboveLine: boolean;
  /** Dashed budget line drawn under this row (the last one that still fits). */
  edgeBelow: boolean;
  /** Drawn above this row instead, when the budget doesn't even cover the first wish. */
  edgeAbove: boolean;
}

interface WishForm {
  title: string;
  notes: string;
  estimated_cost: number | null;
  service_type: ServiceType | '';
}

// A fill-up is never something you wish for, so the wishlist offers the other
// four types only.
const WISH_SERVICE_TYPES = SERVICE_TYPE_CONFIG.filter(c => c.value !== 'ALIMENTARE');

@UntilDestroy()
@Component({
  selector: 'app-car-wishlist-panel',
  templateUrl: './car-wishlist-panel.component.html',
  styleUrls: ['./car-wishlist-panel.component.scss'],
  // Sizes this host as a flex child of the routed page's `.ion-page`, so the
  // <ion-content> inside it gets a height — see `.hau-page-panel` in global.scss.
  host: { class: 'hau-page-panel' },
  imports: [
    DecimalPipe, FormsModule, DropdownComponent,
    IonContent, IonFab, IonFabButton, IonIcon, IonReorder, IonReorderGroup, IonSpinner, TranslocoPipe,
  ],
})
export class CarWishlistPanelComponent implements OnChanges, AfterViewInit {
  // Registered into the shared shell header by the routed parent — see
  // syncHeaderActions() and car-wishlist-page.component.ts.
  @ViewChild('headerStartActionsTpl') readonly headerStartActionsTpl!: TemplateRef<unknown>;
  @ViewChild('headerActionsTpl') readonly headerActionsTpl!: TemplateRef<unknown>;

  @Input() carId!: number;
  @Input() carName!: string;
  @Input() canEdit = false;

  wishes: CarWishDto[] = [];
  budget: number | null = null;
  loading = false;
  saving = false;
  error: string | null = null;

  // Derived once per store emission rather than from template getters — the
  // template reads these several times per change-detection pass, and the
  // budget line's cumulative walk shouldn't be redone on each read.
  activeWishes: CarWishDto[] = [];
  doneWishes: CarWishDto[] = [];
  rows: WishRow[] = [];
  totalEstimated = 0;
  fittingCount = 0;
  fittingTotal = 0;
  budgetRemaining = 0;
  everythingFits = false;

  formOpen = false;
  editingWish: CarWishDto | null = null;
  form: WishForm = { title: '', notes: '', estimated_cost: null, service_type: '' };

  budgetEditOpen = false;
  budgetDraft: number | null = null;

  doneExpanded = false;

  constructor(
    private readonly _facade: CarWishesFacade,
    private readonly _transloco: TranslocoService,
    private readonly _alertCtrl: AlertController,
    private readonly _headerActions: HeaderActionsService,
    private readonly _router: Router,
  ) {
    addIcons({
      addOutline, arrowUpOutline, checkmarkCircleOutline, checkmarkOutline, closeOutline,
      heartOutline, reorderThreeOutline, trashOutline, walletOutline,
    });
  }

  ngOnChanges(): void {
    if (this.carId) this.loadWishlist();
  }

  ngAfterViewInit(): void {
    this.syncHeaderActions();
  }

  // The end slot swaps between "add" (list) and "save" (form) inside one
  // template, so it only ever needs setting once. The start slot has to be set
  // and cleared as the form opens/closes: while it holds a template the shell
  // renders it *instead of* the back button, and the list view still wants the
  // back button. Called from the routed parent on entry, and from every place
  // that flips `formOpen`.
  syncHeaderActions(): void {
    this._headerActions.set(this.headerActionsTpl);
    this._headerActions.setStart(this.formOpen ? this.headerStartActionsTpl : null);
  }

  loadWishlist(): void {
    this.loading = true;
    this._facade.wishlistFor(this.carId).pipe(untilDestroyed(this)).subscribe(entry => {
      this.wishes = entry.items;
      this.budget = entry.budget;
      this.loading = false;
      this._recompute();
    });
    this._facade.loadWishlist(this.carId);
  }

  // ── Derived list ────────────────────────────────────────────────

  /**
   * The budget line: wishes are walked top-down in priority order, each one
   * adding its estimate to a running total, and the line is drawn where that
   * total would pass the budget. A wish with no estimate adds nothing, so it
   * never pushes anything below the line on its own.
   */
  private _recompute(): void {
    this.activeWishes = this.wishes.filter(w => w.status === 'ACTIVE');
    this.doneWishes = this.wishes.filter(w => w.status === 'DONE');

    const budget = this.budget;
    const rows: WishRow[] = [];
    let cumulative = 0;
    let edgeIndex = -1;

    this.activeWishes.forEach((wish, index) => {
      cumulative += wish.estimated_cost ?? 0;
      const aboveLine = budget == null || cumulative <= budget;
      if (budget != null && aboveLine) edgeIndex = index;
      rows.push({ wish, cumulative, aboveLine, edgeBelow: false, edgeAbove: false });
    });

    if (budget != null && rows.length > 0 && edgeIndex !== rows.length - 1) {
      // Not drawn when everything fits — there'd be nothing below it to
      // separate; the summary reports the leftover room instead.
      if (edgeIndex < 0) rows[0].edgeAbove = true;
      else rows[edgeIndex].edgeBelow = true;
    }

    this.rows = rows;
    this.totalEstimated = cumulative;
    this.fittingCount = rows.filter(r => r.aboveLine).length;
    this.fittingTotal = this.fittingCount > 0 ? rows[this.fittingCount - 1].cumulative : 0;
    this.budgetRemaining = (budget ?? 0) - this.fittingTotal;
    this.everythingFits = budget != null && rows.length > 0 && this.fittingCount === rows.length;
  }

  typeLabelKey(wish: CarWishDto): string | null {
    return wish.service_type ? serviceTypeConfig(wish.service_type).labelKey : null;
  }

  typeChipClass(wish: CarWishDto): string {
    return wish.service_type ? serviceTypeConfig(wish.service_type).chipClass : '';
  }

  get serviceTypeOptions(): DropdownOption[] {
    return [
      { value: '', label: this._transloco.translate('cars.wishlist.form.noType') },
      ...WISH_SERVICE_TYPES.map(c => ({ value: c.value, label: this._transloco.translate(c.labelKey) })),
    ];
  }

  // ── Reordering ──────────────────────────────────────────────────

  onReorder(event: CustomEvent<ReorderEventDetail>): void {
    // Passing the array makes Ionic hand back the reordered copy without moving
    // the DOM itself — Angular re-renders it from the (optimistically updated)
    // store instead, so the row doesn't animate twice.
    const reordered = event.detail.complete([...this.activeWishes]) as CarWishDto[];
    // Done wishes keep positions after the active ones; they're not draggable,
    // but they still need a position each so the next drag has a stable base.
    const ids = [...reordered.map(w => w.id), ...this.doneWishes.map(w => w.id)];
    this._facade.reorderWishes(this.carId, ids).pipe(take(1)).subscribe();
  }

  // ── Budget ──────────────────────────────────────────────────────

  openBudgetEdit(): void {
    this.budgetDraft = this.budget;
    this.budgetEditOpen = true;
  }

  cancelBudgetEdit(): void {
    this.budgetEditOpen = false;
  }

  saveBudget(): void {
    const value = this.budgetDraft != null && this.budgetDraft > 0 ? this.budgetDraft : null;
    this._facade.setBudget(this.carId, value).pipe(take(1)).subscribe(() => {
      this.budgetEditOpen = false;
    });
  }

  // ── Add / edit ──────────────────────────────────────────────────

  openAdd(): void {
    this.editingWish = null;
    this.form = { title: '', notes: '', estimated_cost: null, service_type: '' };
    this.error = null;
    this.formOpen = true;
    this.syncHeaderActions();
  }

  openEdit(wish: CarWishDto): void {
    if (!this.canEdit) return;
    this.editingWish = wish;
    this.form = {
      title: wish.title,
      notes: wish.notes ?? '',
      estimated_cost: wish.estimated_cost ?? null,
      service_type: wish.service_type ?? '',
    };
    this.error = null;
    this.formOpen = true;
    this.syncHeaderActions();
  }

  cancelForm(): void {
    this.formOpen = false;
    this.editingWish = null;
    this.syncHeaderActions();
  }

  onTypeChange(value: string | number): void {
    this.form.service_type = (value as ServiceType | '') || '';
  }

  save(): void {
    const title = this.form.title.trim();
    if (!title) return;

    this.saving = true;
    this.error = null;
    const notes = this.form.notes.trim();
    const dto = {
      title,
      notes: notes || null,
      estimated_cost: this.form.estimated_cost ?? null,
      service_type: this.form.service_type || null,
    };

    const save$ = this.editingWish
      ? this._facade.updateWish(this.carId, this.editingWish.id, dto)
      : this._facade.createWish(this.carId, dto);

    save$.pipe(take(1)).subscribe({
      next: () => {
        this.saving = false;
        this.formOpen = false;
        this.editingWish = null;
        this.syncHeaderActions();
      },
      error: (err) => {
        this.error = err?.error?.message ?? this._transloco.translate('cars.wishlist.form.error');
        this.saving = false;
      },
    });
  }

  // ── Completing a wish ───────────────────────────────────────────

  /**
   * A wish isn't ticked off in place — it graduates into a real maintenance
   * record. The form opens pre-filled with the wish's title, type and estimate;
   * the wish is only marked DONE once that record is actually saved, which
   * maintenance-form.component.ts does off the `wishId` query param.
   */
  completeWish(wish: CarWishDto): void {
    void this._router.navigate([MAINTENANCE_ROUTES.add.fullPath], {
      queryParams: {
        carId: this.carId,
        wishId: wish.id,
        title: wish.title,
        serviceType: wish.service_type ?? 'IMPROVEMENT',
        cost: wish.estimated_cost ?? null,
      },
    });
  }

  reactivateWish(wish: CarWishDto): void {
    this._facade.setWishStatus(this.carId, wish.id, 'ACTIVE').pipe(take(1)).subscribe();
  }

  async confirmDelete(wish: CarWishDto): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.wishlist.deleteAlert.header'),
      message: new IonicSafeString(this._transloco.translate('cars.wishlist.deleteAlert.message', { title: wish.title })),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._deleteWish(wish),
        },
      ],
    });
    await alert.present();
  }

  private _deleteWish(wish: CarWishDto): void {
    this._facade.deleteWish(this.carId, wish.id).pipe(take(1)).subscribe(() => {
      if (this.editingWish?.id === wish.id) this.cancelForm();
    });
  }
}
