import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon, IonSpinner, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { forkJoin, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  arrowBackOutline, arrowForwardOutline, closeOutline, checkmarkCircleOutline, addOutline,
  listOutline, linkOutline, attachOutline, checkmarkOutline, imagesOutline,
  chevronDownOutline, carOutline, banOutline, cloudUploadOutline,
} from 'ionicons/icons';
import { CarDto } from '@hau/autogenapi/models';
import { BlogService, CarService } from '@hau/autogenapi/services';
import { BlogFacade } from '@hau/features/blog/state/blog.facade';
import {
  BlogTag, BlogCategory, VehicleEntryCategory,
  VEHICLE_ENTRY_CATEGORIES, assignTagColor, carGradient,
} from '@hau/features/blog/models/blog.model';
import { TiptapEditorComponent } from '@hau/features/blog/components/tiptap-editor/tiptap-editor.component';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { environment } from '../../../../environments/environment';

interface PhotoEntry {
  url: string;   // blob URL for new files; server URL for existing
  file?: File;   // present only for newly selected files (not yet uploaded)
  id?: number;   // present only for existing images from edit mode
}

interface WriteForm {
  title: FormControl<string>;
  date: FormControl<string>;
  contentJson: FormControl<Record<string, unknown> | null>;
  vehicleCategory: FormControl<VehicleEntryCategory | null>;
  km: FormControl<number | null>;
  price: FormControl<number | null>;
}

@Component({
  selector: 'app-blog-entry-write',
  templateUrl: 'blog-entry-write.component.html',
  styleUrls: ['./blog-entry-write.component.scss'],
  imports: [IonContent, IonIcon, IonSpinner, ReactiveFormsModule, DecimalPipe, TiptapEditorComponent, TranslocoPipe],
})
export class BlogEntryWriteComponent implements OnInit {
  readonly VEHICLE_ENTRY_CATEGORIES = VEHICLE_ENTRY_CATEGORIES;

  @ViewChild('photoInput', { static: false }) photoInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('coverInput', { static: false }) coverInputRef!: ElementRef<HTMLInputElement>;

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

  // Cover image
  coverImageUrl: string | null = null;
  coverImageFile: File | null = null;
  isUploadingCover = false;

  // Photos — stored locally until publish/save-draft
  photos: PhotoEntry[] = [];
  isDragging = false;

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
    private carService: CarService,
    private blogService: BlogService,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      arrowBackOutline, arrowForwardOutline, closeOutline, checkmarkCircleOutline, addOutline,
      listOutline, linkOutline, attachOutline, checkmarkOutline, imagesOutline,
      chevronDownOutline, carOutline, banOutline, cloudUploadOutline,
    });
  }

  ngOnInit(): void {
    this.carService.carControllerGetAllCars().subscribe(cars => {
      this.cars = cars;
    });

    const id = this.route.snapshot.paramMap.get('id');
    const categoryParam = this.route.snapshot.queryParamMap.get('category') as BlogCategory | null;
    const carIdParam = this.route.snapshot.queryParamMap.get('carId');

    if (id) {
      this.isEditMode = true;
      this.editEntryId = Number(id);
      this.blogFacade.loadEntry(this.editEntryId);
      this.blogFacade.entry$.subscribe(entry => {
        if (!entry || entry.id !== this.editEntryId) return;
        this.activeCategory = entry.category as BlogCategory;
        this.tags = entry.tags.map(t => ({ label: t.label, color: t.color as any }));
        this.photos = entry.images.map(img => ({ url: img.url, id: img.id }));
        if (entry.cover_image_url) {
          this.coverImageUrl = entry.cover_image_url.startsWith('http')
            ? entry.cover_image_url
            : `${environment.imageBaseUrl}${entry.cover_image_url}`;
        }
        this.form.patchValue({
          title:           entry.title,
          date:            entry.date.split('T')[0],
          contentJson:     entry.content_json ?? null,
          vehicleCategory: (entry.vehicle_category as VehicleEntryCategory) ?? null,
          km:              entry.km ?? null,
          price:           entry.price ?? null,
        });
        if (entry.car_id != null) {
          this.carService.carControllerGetAllCars().subscribe(cars => {
            this.selectedCar = cars.find(c => c.id === entry.car_id) ?? null;
          });
        }
      });
    } else {
      if (categoryParam) this.activeCategory = categoryParam;
      if (carIdParam) {
        this.carService.carControllerGetAllCars().subscribe(cars => {
          this.selectedCar = cars.find(c => c.id === Number(carIdParam)) ?? null;
        });
      }
    }

    this.form.valueChanges.subscribe(() => this._triggerDraftSave());
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

  // ── Photo selection (local only — upload happens on save) ─────────
  triggerPhotoInput(): void {
    this.photoInputRef?.nativeElement.click();
  }

  onPhotosSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;
    Array.from(files).forEach(f => this._addPhoto(f));
    (event.target as HTMLInputElement).value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(): void {
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (!files) return;
    Array.from(files).filter(f => f.type.startsWith('image/')).forEach(f => this._addPhoto(f));
  }

  removePhoto(index: number): void {
    const entry = this.photos[index];
    if (entry?.file) URL.revokeObjectURL(entry.url);
    this.photos.splice(index, 1);
  }

  private _addPhoto(file: File): void {
    if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) return;
    if (file.size > 10 * 1024 * 1024) return;
    this.photos.push({ url: URL.createObjectURL(file), file });
  }

  // ── Cover image ──────────────────────────────────────────────────
  triggerCoverInput(): void {
    this.coverInputRef?.nativeElement.click();
  }

  onCoverSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (event.target as HTMLInputElement).value = '';
    this.coverImageFile = file;
    this.coverImageUrl = URL.createObjectURL(file);
  }

  removeCover(): void {
    if (this.coverImageUrl?.startsWith('blob:')) URL.revokeObjectURL(this.coverImageUrl);
    this.coverImageUrl = null;
    this.coverImageFile = null;
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

    const newPhotos = this.photos.filter(p => !!p.file);
    const existingUrls = this.photos.filter(p => !p.file).map(p => p.url);

    const coverUpload$ = this.coverImageFile
      ? this.blogService.uploadImage(this.coverImageFile)
      : of(null as { url: string } | null);

    const photosUpload$ = newPhotos.length > 0
      ? forkJoin(newPhotos.map(p =>
          from(this._resizeImage(p.file!)).pipe(
            switchMap(resized => this.blogService.uploadImage(resized)),
          )
        ))
      : of([] as { url: string }[]);

    forkJoin({ cover: coverUpload$, photos: photosUpload$ }).subscribe({
      next: ({ cover, photos: uploadedPhotos }) => {
        const images = [...existingUrls, ...uploadedPhotos.map(r => r.url)];
        const resolvedCoverUrl = cover
          ? (cover.url.startsWith('http') ? cover.url : `${environment.imageBaseUrl}${cover.url}`)
          : (this.coverImageFile ? null : this.coverImageUrl);
        this._persist(images, resolvedCoverUrl, status);
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

  isInvalid(control: FormControl): boolean {
    return control.invalid && control.touched;
  }

  private _resizeImage(file: File, maxPx = 1920, quality = 0.82): Promise<File> {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const ratio = Math.min(maxPx / img.width, maxPx / img.height, 1);
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
        canvas.toBlob(
          (blob) => resolve(new File([blob!], file.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' })),
          'image/jpeg',
          quality,
        );
      };
      img.src = url;
    });
  }

  private _todayIso(): string {
    return new Date().toISOString().split('T')[0];
  }
}
