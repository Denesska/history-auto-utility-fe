import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cameraOutline, imagesOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@jsverse/transloco';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';

export type ImageSource = 'camera' | 'gallery' | 'drop';
export type ImageSourcePickerVariant = 'split' | 'pair' | 'tile';
export type ImageSourcePickerSize = 'sm' | 'md' | 'lg';

export interface ImageSourceSelection {
  files: File[];
  source: ImageSource;
}

/**
 * The one "take a photo / pick from gallery" control of the app. Two hidden
 * `<input type="file">`s (camera with `capture`, gallery without). On a device
 * without a touch pointer there is no camera to open, so only one "choose
 * file" action is offered. See FEATURE.md.
 */
@Component({
  selector: 'app-image-source-picker',
  standalone: true,
  imports: [IonIcon, TranslocoPipe, LoaderComponent],
  templateUrl: './image-source-picker.component.html',
  styleUrls: ['./image-source-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSourcePickerComponent {
  @Input() variant: ImageSourcePickerVariant = 'split';
  /** Already-translated text of the primary button (split) / camera half. */
  @Input() label = '';
  @Input() icon = 'camera-outline';
  @Input() iconOnly = false;
  @Input() disabled = false;
  @Input() busy = false;
  @Input() cameraAccept = 'image/*';
  @Input() galleryAccept = 'image/*';
  /** Applies to the gallery input only; the camera always yields one file. */
  @Input() multiple = false;
  @Input() @HostBinding('class.isp-host-full') fullWidth = false;
  /** `tile` variant only: height of the full-width box (sm ~64px, md ~96px, lg ~170px). */
  @Input() size: ImageSourcePickerSize = 'md';
  /** `tile` variant only: already-translated bold line shown inside the box (with `icon` above it). */
  @Input() title = '';
  /** `tile` variant only: already-translated small muted line under the title. */
  @Input() hint = '';
  /** `tile` variant only: the box accepts dropped files and emits them with `source: 'drop'` (no filtering). */
  @Input() dropEnabled = false;

  @HostBinding('class.isp-host-tile')
  get tileHost(): boolean { return this.variant === 'tile'; }

  dragOver = false;

  @Output() filesSelected = new EventEmitter<ImageSourceSelection>();

  @ViewChild('cameraInput') private cameraInput?: ElementRef<HTMLInputElement>;
  @ViewChild('galleryInput') private galleryInput?: ElementRef<HTMLInputElement>;

  /** True on touch-primary devices (phones/tablets) where `capture` opens a camera. */
  readonly hasCamera: boolean = ImageSourcePickerComponent.detectCoarsePointer();

  constructor() {
    addIcons({ cameraOutline, imagesOutline });
  }

  private static detectCoarsePointer(): boolean {
    try {
      return typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia('(any-pointer: coarse)').matches;
    } catch {
      return false;
    }
  }

  get inactive(): boolean {
    return this.disabled || this.busy;
  }

  /** Camera on touch devices; on desktop falls back to the file dialog. */
  openCamera(): void {
    if (this.inactive) return;
    if (!this.hasCamera) {
      this.openGallery();
      return;
    }
    this.cameraInput?.nativeElement.click();
  }

  openGallery(): void {
    if (this.inactive) return;
    this.galleryInput?.nativeElement.click();
  }

  onDragOver(event: DragEvent): void {
    if (!this.dropEnabled || this.inactive) return;
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave(): void {
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    if (!this.dropEnabled) return;
    event.preventDefault();
    this.dragOver = false;
    if (this.inactive) return;
    const files = Array.from(event.dataTransfer?.files ?? []);
    if (files.length) this.filesSelected.emit({ files, source: 'drop' });
  }

  onChange(event: Event, source: ImageSource): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = ''; // lets the same file be picked again
    if (files.length) this.filesSelected.emit({ files, source });
  }
}
