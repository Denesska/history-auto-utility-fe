import { DecimalPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon, IonSpinner, NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { forkJoin, of, take } from 'rxjs';
import {
  arrowBackOutline, arrowForwardOutline, closeOutline, checkmarkCircleOutline, addOutline,
  listOutline, linkOutline, attachOutline, checkmarkOutline,
  chevronDownOutline, carOutline, banOutline,
} from 'ionicons/icons';
import { CarDto } from '@hau/autogenapi/models';
import { BlogService } from '@hau/autogenapi/services';
import { BlogFacade } from '@hau/features/blog/state/blog.facade';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import {
  BlogTag, BlogCategory, VehicleEntryCategory,
  VEHICLE_ENTRY_CATEGORIES, assignTagColor, carGradient,
} from '@hau/features/blog/models/blog.model';
import { TiptapEditorComponent } from '@hau/features/blog/components/tiptap-editor/tiptap-editor.component';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { PhotoPickerComponent, PhotoPickerItem } from '@hau/shared/component/photo-picker/photo-picker.component';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface WriteForm {
  title: FormControl<string>;
  date: FormControl<string>;
  contentJson: FormControl<Record<string, unknown> | null>;
  vehicleCategory: FormControl<VehicleEntryCategory | null>;
  km: FormControl<number | null>;
  price: FormControl<number | null>;
}

@UntilDestroy()
@Component({
  selector: 'app-blog-entry-write',
  templateUrl: 'blog-entry-write.component.html',
  styleUrls: ['./blog-entry-write.component.scss'],
  imports: [IonContent, IonIcon, IonSpinner, ReactiveFormsModule, DecimalPipe, TiptapEditorComponent, TranslocoPipe, DropdownComponent, PhotoPickerComponent],
})
export class BlogEntryWriteComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  readonly VEHICLE_ENTRY_CATEGORIES = VEHICLE_ENTRY_CATEGORIES;

  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

  isEditMode = false;
  editEntryId: number | null = null;
  activeCategory: BlogCategory = 'PERSONAL';
  tags: BlogTag[] = [];
  tagInput = '';
  draftSaved = false;
  draftTimer: ReturnType<typeof setTimeout> | null = null;

  // Cars from API
  cars: CarDto[] = [];
  selectedCar: CarDto | null = null;

  // Photos — stored locally until publish/save-draft. The one flagged
  // isDefault becomes cover_image_url on save (same principle as car photos).
  photos: PhotoPickerItem[] = [];

  // Save state
  isSaving = false;

  // Cancel confirmation overlay
  showCancelConfirm = false;

  // Mobile 2-step flow (vehicle journal only)
  mobileStep: 1 | 2 = 1;

  readonly form = new FormGroup<WriteForm>({
    title:           new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    date:            new FormControl(this._todayIso(), { nonNullable: true, validators: [Validators.required] }),
    contentJson:     new FormControl<Record<string, unknown> | null>(null),
    vehicleCategory: new FormControl<VehicleEntryCategory | null>(null),
    km:              new FormControl<number | null>(null),
    price:           new FormControl<number | null>(null),
  });

  get isVehicle(): boolean { return this.activeCategory === 'VEHICLE'; }

  get headingLabel(): string {
    return this.form.controls.title.value
      || this._transloco.translate(this.isEditMode ? 'blog.writeHeading.edit' : 'blog.writeHeading.new');
  }

  carGradient = carGradient;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private blogFacade: BlogFacade,
    private bootstrapFacade: BootstrapFacade,
    private blogService: BlogService,
    private readonly _headerActions: HeaderActionsService,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      arrowBackOutline, arrowForwardOutline, closeOutline, checkmarkCircleOutline, addOutline,
      listOutline, linkOutline, attachOutline, checkmarkOutline,
      chevronDownOutline, carOutline, banOutline,
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this.headingLabel);
    this._headerActions.set(this._headerActionsTpl);
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
    this._headerActions.clear();
  }

  ngOnInit(): void {
    this.bootstrapFacade.ownedCars$.pipe(untilDestroyed(this)).subscribe(cars => {
      this.cars = cars;
    });

    const id = this.route.snapshot.paramMap.get('id');
    const categoryParam = this.route.snapshot.queryParamMap.get('category') as BlogCategory | null;
    const carIdParam = this.route.snapshot.queryParamMap.get('carId');

    if (id) {
      this.isEditMode = true;
      this.editEntryId = Number(id);
      this.blogFacade.loadEntry(this.editEntryId);
      this.blogFacade.entry$.pipe(untilDestroyed(this)).subscribe(entry => {
        if (!entry || entry.id !== this.editEntryId) return;
        this.activeCategory = entry.category as BlogCategory;
        this.tags = entry.tags.map(t => ({ label: t.label, color: t.color as any }));

        const photos: PhotoPickerItem[] = entry.images.map(img => ({ url: img.url, id: img.id, isDefault: false }));
        if (entry.cover_image_url) {
          const match = photos.find(p => p.url === entry.cover_image_url);
          if (match) {
            match.isDefault = true;
          } else {
            // Legacy entries uploaded the cover separately from the gallery —
            // fold it in as its own gallery entry so it now shows up everywhere.
            photos.unshift({ url: entry.cover_image_url, isDefault: true });
          }
        } else if (photos.length > 0) {
          photos[0].isDefault = true;
        }
        this.photos = photos;

        this.form.patchValue({
          title:           entry.title,
          date:            entry.date.split('T')[0],
          contentJson:     entry.content_json ?? null,
          vehicleCategory: (entry.vehicle_category as VehicleEntryCategory) ?? null,
          km:              entry.km ?? null,
          price:           entry.price ?? null,
        });
        if (entry.car_id != null) {
          this.bootstrapFacade.ownedCars$.pipe(take(1), untilDestroyed(this)).subscribe(cars => {
            this.selectedCar = cars.find(c => c.id === entry.car_id) ?? null;
          });
        }
      });
    } else {
      if (categoryParam) this.activeCategory = categoryParam;
      if (carIdParam) {
        this.bootstrapFacade.ownedCars$.pipe(take(1), untilDestroyed(this)).subscribe(cars => {
          this.selectedCar = cars.find(c => c.id === Number(carIdParam)) ?? null;
        });
      }
    }

    this.form.valueChanges.subscribe(() => {
      this._triggerDraftSave();
      this._headerActions.setTitle(this.headingLabel);
    });
  }

  setCategory(cat: BlogCategory): void {
    this.activeCategory = cat;
    this.mobileStep = 1;
  }

  // ── Mobile 2-step navigation ──────────────────────────────────────
  nextMobileStep(): void {
    if (!this.form.controls.title.value.trim()) {
      this.form.controls.title.markAsTouched();
      return;
    }
    this.mobileStep = 2;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevMobileStep(): void {
    this.mobileStep = 1;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Car selection ────────────────────────────────────────────────
  selectCar(car: CarDto): void {
    this.selectedCar = car;
  }

  carLabel(car: CarDto): string {
    return `${car.make} ${car.model}`;
  }

  carPhoto(car: CarDto): string | null {
    const photo = car.photos?.find(p => p.is_default) ?? car.photos?.[0];
    return photo?.url ?? null;
  }

  // ── Tag management ───────────────────────────────────────────────
  onTagInputKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this._addTag();
    }
  }

  onTagInputChange(event: Event): void {
    this.tagInput = (event.target as HTMLInputElement).value;
  }

  addTagFromInput(): void { this._addTag(); }

  removeTag(label: string): void {
    this.tags = this.tags.filter(t => t.label !== label);
  }

  private _addTag(): void {
    const label = this.tagInput.trim().replace(/,/g, '');
    if (!label || this.tags.some(t => t.label.toLowerCase() === label.toLowerCase())) {
      this.tagInput = '';
      return;
    }
    this.tags.push({ label, color: assignTagColor(label) });
    this.tagInput = '';
  }

  // ── Draft auto-save indicator ─────────────────────────────────────
  private _triggerDraftSave(): void {
    if (this.draftTimer) clearTimeout(this.draftTimer);
    this.draftSaved = false;
    this.draftTimer = setTimeout(() => { this.draftSaved = true; }, 1200);
  }

  // ── Cancel with confirmation ──────────────────────────────────────
  cancel(): void {
    const hasChanges = this.form.dirty || this.photos.some(p => !!p.file);
    if (hasChanges) {
      this.showCancelConfirm = true;
    } else {
      this._navigateBack();
    }
  }

  confirmDiscard(): void {
    this.showCancelConfirm = false;
    this._navigateBack();
  }

  confirmSaveDraft(): void {
    this.showCancelConfirm = false;
    this._submit('DRAFT');
  }

  private _navigateBack(): void {
    if (this.isEditMode && this.editEntryId != null) {
      void this.navCtrl.navigateBack(`/main/blog/${this.editEntryId}`, { animated: false });
    } else {
      void this.navCtrl.navigateBack('/main/blog', { animated: false });
    }
  }

  // ── Save ──────────────────────────────────────────────────────────
  publish(): void { this._submit('PUBLISHED'); }
  saveDraft(): void { this._submit('DRAFT'); }

  private _submit(status: 'DRAFT' | 'PUBLISHED'): void {
    if (this.form.controls.title.invalid) {
      this.form.controls.title.markAsTouched();
      return;
    }
    if (this.isVehicle && !this.selectedCar) return;
    if (this.isSaving) return;

    this.isSaving = true;

    // Photos were already resized on selection (app-photo-picker) — upload as-is.
    const newPhotos = this.photos.filter(p => !!p.file);
    const photosUpload$ = newPhotos.length > 0
      ? forkJoin(newPhotos.map(p => this.blogService.uploadImage(p.file!)))
      : of([] as { url: string }[]);

    photosUpload$.subscribe({
      next: uploaded => {
        let uploadIdx = 0;
        const resolved = this.photos.map(p => ({
          url: p.file ? uploaded[uploadIdx++].url : p.url,
          isDefault: p.isDefault,
        }));
        const images = resolved.map(p => p.url);
        const coverUrl = resolved.find(p => p.isDefault)?.url ?? images[0] ?? null;
        this._persist(images, coverUrl, status);
      },
      error: () => { this.isSaving = false; },
    });
  }

  private _persist(images: string[], coverUrl: string | null, status: 'DRAFT' | 'PUBLISHED'): void {
    const val = this.form.getRawValue();
    const tags = this.tags.map(t => ({ label: t.label, color: t.color }));
    const basePayload = {
      category:        this.activeCategory,
      title:           val.title,
      date:            val.date,
      content_json:    val.contentJson ?? undefined,
      status,
      cover_image_url: coverUrl ?? undefined,
      tags,
      images,
      ...(this.isVehicle && this.selectedCar ? {
        car_id:           this.selectedCar.id,
        vehicle_category: val.vehicleCategory ?? undefined,
        km:               val.km ?? undefined,
        price:            val.price ?? undefined,
      } : {}),
    };

    const save$ = (this.isEditMode && this.editEntryId != null)
      ? this.blogFacade.updateEntry(this.editEntryId, basePayload)
      : this.blogFacade.createEntry({ ...basePayload, is_pinned: false });

    save$.subscribe({
      next: () => { this.isSaving = false; this._navigateBack(); },
      error: () => { this.isSaving = false; },
    });
  }

  get vehicleCategoryOptions(): DropdownOption[] {
    return [
      { value: '', label: this._transloco.translate('blog.form.selectCategory') },
      ...VEHICLE_ENTRY_CATEGORIES.map(cat => ({ value: cat.value, label: this._transloco.translate(cat.label) })),
    ];
  }

  onVehicleCategoryChange(value: string | number): void {
    this.form.controls.vehicleCategory.setValue(value === '' ? null : value as VehicleEntryCategory);
  }

  isInvalid(control: FormControl): boolean {
    return control.invalid && control.touched;
  }

  private _todayIso(): string {
    return new Date().toISOString().split('T')[0];
  }
}
