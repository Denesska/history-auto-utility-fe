import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, expandOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@jsverse/transloco';
import { PhotoViewerService } from '@hau/shared/component/photo-lightbox/photo-viewer.service';

export interface PhotoItem {
  url: string;
  isDefault?: boolean;
}

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ImageUrlPipe, IonIcon, TranslocoPipe],
})
export class PhotoCarouselComponent implements OnChanges {
  @Input() photos: PhotoItem[] = [];
  @Input() altText = 'Photo';

  @ViewChild('thumbsEl') thumbsElRef?: ElementRef<HTMLElement>;

  readonly activeIndex = signal(0);

  private readonly _photoViewer = inject(PhotoViewerService);
  private _touchStartX = 0;
  private _wasSwiping = false;
  private _knownPhotoUrls: string[] = [];

  get hasPhotos(): boolean {
    return this.photos.length > 0;
  }
  get hasMultiple(): boolean {
    return this.photos.length > 1;
  }

  constructor() {
    addIcons({ chevronBack, chevronForward, expandOutline });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      const newUrls = (
        (changes['photos'].currentValue as PhotoItem[]) ?? []
      ).map(p => p.url);
      const contentChanged =
        newUrls.length !== this._knownPhotoUrls.length ||
        newUrls.some((u, i) => u !== this._knownPhotoUrls[i]);
      if (contentChanged) {
        this._knownPhotoUrls = newUrls;
        this.activeIndex.set(0);
      }
    }
  }

  // ── Touch swipe detection ─────────────────────────────────────────
  // Uses Angular template events which are guaranteed to fire in Ionic.
  // No dependency on scroll or pointer events.

  onTouchStart(e: TouchEvent): void {
    this._touchStartX = e.touches[0].clientX;
    this._wasSwiping = false;
  }

  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this._touchStartX;
    if (Math.abs(dx) >= 30) {
      this._wasSwiping = true;
      if (dx < 0) this.goNext();
      else this.goPrev();
    }
  }

  // ── Main carousel navigation ──────────────────────────────────────

  goTo(index: number): void {
    this.activeIndex.set(index);
    this._scrollThumbIntoView(index);
  }

  goPrev(): void {
    this.goTo(Math.max(0, this.activeIndex() - 1));
  }
  goNext(): void {
    this.goTo(Math.min(this.photos.length - 1, this.activeIndex() + 1));
  }

  // ── Lightbox ──────────────────────────────────────────────────────
  // Delegates to the one shared fullscreen viewer (pinch/double-tap zoom,
  // swipe between photos) rather than maintaining its own copy — see
  // `shared/component/photo-lightbox/`.

  openLightbox(index: number): void {
    if (this._wasSwiping) {
      this._wasSwiping = false;
      return;
    }
    this._photoViewer.open(this.photos.map(p => p.url), index, this.altText);
  }

  // ── Private helpers ───────────────────────────────────────────────

  private _scrollThumbIntoView(index: number): void {
    const thumbs = this.thumbsElRef?.nativeElement;
    if (!thumbs) return;
    const thumb = thumbs.children[index] as HTMLElement;
    if (!thumb) return;
    thumbs.scrollTo({
      left: Math.max(
        0,
        thumb.offsetLeft - thumbs.offsetWidth / 2 + thumb.offsetWidth / 2,
      ),
      behavior: 'smooth',
    });
  }
}
