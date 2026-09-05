import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';
import { FormControlType, FormFieldComponent } from '@hau/shared/component/form-field/form-field.component';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { resizeImage } from '@hau/shared/utils/image-resize.util';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface PhotoPickerItem {
  id?: number;    // present only for photos already saved server-side
  url: string;     // preview URL — data: URL for a not-yet-uploaded file, server URL otherwise
  file?: File;      // present only for newly selected, not-yet-uploaded files
  isDefault: boolean;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024;

/**
 * Shared photo gallery: upload (click or drag & drop), click-to-set-main-photo,
 * remove — the same interaction used for car photos, now also used by the
 * blog/Jurnal cover+gallery. Parent owns the `photos` array and any persistence
 * (upload/delete API calls); this component only manages the local list and
 * which entry is flagged `isDefault`.
 */
@Component({
  selector: 'app-photo-picker',
  standalone: true,
  templateUrl: './photo-picker.component.html',
  styleUrls: ['./photo-picker.component.scss'],
  imports: [FormFieldComponent, IonIcon, ImageUrlPipe, TranslocoPipe],
})
export class PhotoPickerComponent {
  protected readonly FormControlType = FormControlType;

  @Input() photos: PhotoPickerItem[] = [];
  @Input() maxPhotos = 20;
  /** Shows a hint that photos can be dragged into nearby rich-text content (e.g. the Jurnal editor). */
  @Input() dragHint = false;

  @Output() photosChange = new EventEmitter<PhotoPickerItem[]>();
  /** Fires with the removed item so the parent can delete it server-side if it was already persisted (has an `id`). */
  @Output() removed = new EventEmitter<PhotoPickerItem>();

  isDragging = false;
  errorMessage = '';

  constructor(private readonly _transloco: TranslocoService) {
    addIcons({ informationCircleOutline });
  }

  get canAddMore(): boolean {
    return this.photos.length < this.maxPhotos;
  }

  get showDragHint(): boolean {
    return this.dragHint && this.photos.some(p => this.canDrag(p));
  }

  onFilesSelected(files: File[]): void {
    this._addFiles(files);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.canAddMore) this.isDragging = true;
  }

  onDragLeave(): void {
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (!files) return;
    this._addFiles(Array.from(files));
  }

  // Only already-uploaded photos (no pending `file`) carry a stable URL that's
  // safe to drop into other content (e.g. the Jurnal text editor) — a
  // not-yet-saved local preview can't be dragged out.
  canDrag(photo: PhotoPickerItem): boolean {
    return !photo.file;
  }

  onPhotoDragStart(event: DragEvent, photo: PhotoPickerItem): void {
    if (!this.canDrag(photo)) {
      event.preventDefault();
      return;
    }
    const url = new ImageUrlPipe().transform(photo.url);
    event.dataTransfer?.setData('text/uri-list', url);
    event.dataTransfer?.setData('text/plain', url);
    if (event.dataTransfer) event.dataTransfer.effectAllowed = 'copy';
  }

  setDefault(index: number): void {
    const next = this.photos.map((p, i) => ({ ...p, isDefault: i === index }));
    this._emit(next);
  }

  removePhoto(index: number, event: Event): void {
    event.stopPropagation();
    const photo = this.photos[index];
    const wasDefault = photo.isDefault;
    const next = this.photos.slice(0, index).concat(this.photos.slice(index + 1));
    if (wasDefault && next.length > 0) next[0] = { ...next[0], isDefault: true };

    this._emit(next);
    this.removed.emit(photo);
  }

  private _addFiles(files: File[]): void {
    this.errorMessage = '';
    const remaining = this.maxPhotos - this.photos.length;

    if (remaining <= 0) {
      this.errorMessage = this._transloco.translate('shared.photoPicker.limitReached', { max: this.maxPhotos });
      return;
    }

    const toProcess = files.slice(0, remaining);
    if (files.length > remaining) {
      this.errorMessage = this._transloco.translate('shared.photoPicker.partialAdded', { added: toProcess.length, max: this.maxPhotos });
    }

    toProcess.forEach(file => {
      if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
        this.errorMessage = this._transloco.translate('shared.photoPicker.invalidType');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        this.errorMessage = this._transloco.translate('shared.photoPicker.tooLarge');
        return;
      }

      resizeImage(file, 1920, 0.8).then(resized => {
        const reader = new FileReader();
        reader.onload = () => {
          const isDefault = this.photos.length === 0;
          const next = [...this.photos, { file: resized, url: reader.result as string, isDefault }];
          this._emit(next);
        };
        reader.readAsDataURL(resized);
      });
    });
  }

  private _emit(next: PhotoPickerItem[]): void {
    this.photos = next;
    this.photosChange.emit(next);
  }
}
