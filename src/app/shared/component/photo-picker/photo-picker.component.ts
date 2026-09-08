import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, imageOutline, informationCircleOutline } from 'ionicons/icons';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { readAsDataUrl, resizeImage } from '@hau/shared/utils/image-resize.util';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface PhotoPickerItem {
  id?: number;    // present only for photos already saved server-side
  url: string;     // preview URL — data: URL for a not-yet-uploaded file, server URL otherwise
  file?: File;      // present only for newly selected, not-yet-uploaded files
  isDefault: boolean;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024;

// The OS picker gives no "the user backed out" signal on older WebViews (no
// `cancel` event), so the waiting tile can't stay up on the chance one arrives.
// Long enough to cover a slow multi-photo pick, short enough that a silent
// cancel doesn't leave a ghost tile sitting in the grid.
const PICKER_TIMEOUT_MS = 20000;

/** A file that's been picked but hasn't been decoded into a thumbnail yet. */
interface PendingTile {
  id: number;
  /** The one being decoded right now — the others are queued behind it. */
  active: boolean;
}

/**
 * Shared photo gallery: upload (tap the add tile or drag & drop),
 * click-to-set-main-photo, remove — the same interaction used for car photos,
 * now also used by the blog/Jurnal cover+gallery. Parent owns the `photos`
 * array and any persistence (upload/delete API calls); this component only
 * manages the local list and which entry is flagged `isDefault`.
 *
 * Everything between "the user tapped add" and "the thumbnail is on screen" is
 * accounted for in the grid, because on a phone that stretch is seconds long,
 * not milliseconds: a waiting tile goes up the moment the OS picker opens, one
 * placeholder tile per picked file appears as soon as the picker reports back,
 * and each turns into its thumbnail as it's decoded. Files are processed one at
 * a time on purpose — decoding several 12 MP photos at once is what used to
 * lock the UI up until the whole batch landed at once.
 */
@Component({
  selector: 'app-photo-picker',
  standalone: true,
  templateUrl: './photo-picker.component.html',
  styleUrls: ['./photo-picker.component.scss'],
  imports: [LoaderComponent, IonIcon, ImageUrlPipe, TranslocoPipe],
})
export class PhotoPickerComponent implements OnDestroy {
  @Input() photos: PhotoPickerItem[] = [];
  @Input() maxPhotos = 20;
  /** Shows a hint that photos can be dragged into nearby rich-text content (e.g. the Jurnal editor). */
  @Input() dragHint = false;

  @Output() photosChange = new EventEmitter<PhotoPickerItem[]>();
  /** Fires with the removed item so the parent can delete it server-side if it was already persisted (has an `id`). */
  @Output() removed = new EventEmitter<PhotoPickerItem>();

  isDragging = false;
  errorMessage = '';

  /** Placeholder tiles standing in for picked-but-not-yet-decoded files. */
  protected pending: PendingTile[] = [];
  /** True from the moment the OS picker is opened until it reports back. */
  protected awaitingPicker = false;

  private _tileId = 0;
  private _queue: { file: File; tile: PendingTile }[] = [];
  private _draining = false;
  private _batchTotal = 0;
  private _batchDone = 0;
  private _pickerTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private readonly _transloco: TranslocoService) {
    addIcons({ addOutline, imageOutline, informationCircleOutline });
  }

  ngOnDestroy(): void {
    this._clearPickerTimer();
    this._queue = [];
  }

  /** Counts the tiles already on their way, so the limit can't be overshot. */
  get canAddMore(): boolean {
    return this.slotsUsed < this.maxPhotos;
  }

  get slotsUsed(): number {
    return this.photos.length + this.pending.length;
  }

  get showDragHint(): boolean {
    return this.dragHint && this.photos.some(p => this.canDrag(p));
  }

  protected get isProcessing(): boolean {
    return this._batchTotal > 0;
  }

  protected get processingLabel(): string {
    return this._batchTotal > 1
      ? this._transloco.translate('shared.photoPicker.processingCount', {
          done: Math.min(this._batchDone + 1, this._batchTotal),
          total: this._batchTotal,
        })
      : this._transloco.translate('shared.photoPicker.processing');
  }

  // ── Picking ────────────────────────────────────────────────────────────────

  /**
   * The native picker takes over the screen, and on Android the WebView can
   * spend seconds copying the chosen files before `change` fires. Marking the
   * wait here means the user comes back to a tile that is already busy, rather
   * than to a screen that looks like it ignored the tap.
   */
  protected onPickerOpen(): void {
    this.errorMessage = '';
    this.awaitingPicker = true;
    this._clearPickerTimer();
    this._pickerTimer = setTimeout(() => this._pickerSettled(), PICKER_TIMEOUT_MS);
  }

  /** The `cancel` event — the user backed out of the picker without choosing. */
  protected onPickerCancel(): void {
    this._pickerSettled();
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    // Clearing lets the same file be picked again later and still fire `change`.
    input.value = '';
    this._pickerSettled();
    if (files.length > 0) this._addFiles(files);
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

  // ── The grid ───────────────────────────────────────────────────────────────

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

  // ── Intake pipeline ────────────────────────────────────────────────────────

  private _addFiles(files: File[]): void {
    this.errorMessage = '';
    const remaining = this.maxPhotos - this.slotsUsed;

    if (remaining <= 0) {
      this.errorMessage = this._transloco.translate('shared.photoPicker.limitReached', { max: this.maxPhotos });
      return;
    }

    const toProcess = files.slice(0, remaining);
    if (files.length > remaining) {
      this.errorMessage = this._transloco.translate('shared.photoPicker.partialAdded', { added: toProcess.length, max: this.maxPhotos });
    }

    // Validate up front so the grid only ever shows a placeholder for a file
    // that will actually become a thumbnail.
    const accepted: File[] = [];
    for (const file of toProcess) {
      if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
        this.errorMessage = this._transloco.translate('shared.photoPicker.invalidType');
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        this.errorMessage = this._transloco.translate('shared.photoPicker.tooLarge');
        continue;
      }
      accepted.push(file);
    }

    if (accepted.length === 0) {
      return;
    }

    const tiles = accepted.map<PendingTile>(() => ({ id: ++this._tileId, active: false }));
    this.pending = [...this.pending, ...tiles];
    this._batchTotal += accepted.length;
    accepted.forEach((file, i) => this._queue.push({ file, tile: tiles[i] }));

    void this._drain();
  }

  /**
   * Works the queue one file at a time, giving the browser a frame to paint
   * between steps — that is what keeps the busy tile animating and lets each
   * photo appear the moment it is ready instead of the batch arriving at once.
   */
  private async _drain(): Promise<void> {
    if (this._draining) return;
    this._draining = true;

    try {
      while (this._queue.length > 0) {
        const job = this._queue[0];
        job.tile.active = true;
        await this._paint();

        try {
          const resized = await resizeImage(job.file, 1920, 0.8);
          const url = await readAsDataUrl(resized);
          this._emit([...this.photos, { file: resized, url, isDefault: this.photos.length === 0 }]);
        } catch {
          this.errorMessage = this._transloco.translate('shared.photoPicker.readFailed');
        }

        this._queue.shift();
        this.pending = this.pending.filter(t => t !== job.tile);
        this._batchDone++;
        if (this._queue.length === 0) {
          this._batchTotal = 0;
          this._batchDone = 0;
        }
        await this._paint();
      }
    } finally {
      this._draining = false;
    }
  }

  /** Resolves once the browser has had a chance to paint the current state. */
  private _paint(): Promise<void> {
    return new Promise(resolve => {
      let settled = false;
      const done = (): void => {
        if (settled) return;
        settled = true;
        resolve();
      };
      requestAnimationFrame(() => requestAnimationFrame(done));
      // rAF doesn't fire while the WebView is backgrounded (which is where it
      // is while the OS picker is up) — never strand the queue on it.
      setTimeout(done, 120);
    });
  }

  private _pickerSettled(): void {
    this.awaitingPicker = false;
    this._clearPickerTimer();
  }

  private _clearPickerTimer(): void {
    if (this._pickerTimer) {
      clearTimeout(this._pickerTimer);
      this._pickerTimer = null;
    }
  }

  private _emit(next: PhotoPickerItem[]): void {
    this.photos = next;
    this.photosChange.emit(next);
  }
}
