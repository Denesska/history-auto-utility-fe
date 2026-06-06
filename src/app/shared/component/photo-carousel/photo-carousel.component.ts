import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, closeOutline, expandOutline } from 'ionicons/icons';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export interface PhotoItem { url: string; isDefault?: boolean; }

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss'],
  standalone: true,
  imports: [ImageUrlPipe, IonIcon],
})
export class PhotoCarouselComponent implements OnChanges, OnDestroy {
  @Input() photos: PhotoItem[] = [];
  @Input() altText = 'Photo';

  @ViewChild('thumbsEl')         thumbsElRef?:         ElementRef<HTMLElement>;
  @ViewChild('lightboxSwiperEl') lightboxSwiperElRef?: ElementRef<HTMLElement>;
  @ViewChild('lbThumbsEl')       lbThumbsElRef?:       ElementRef<HTMLElement>;

  lightboxOpen = false;
  readonly activeIndex = signal(0);

  private _touchStartX = 0;
  private _wasSwiping = false;
  private _lightboxSwiper?: Swiper;
  private _knownPhotoUrls: string[] = [];

  get hasPhotos():   boolean { return this.photos.length > 0; }
  get hasMultiple(): boolean { return this.photos.length > 1; }

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _zone: NgZone,
  ) {
    addIcons({ chevronBack, chevronForward, closeOutline, expandOutline });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      const newUrls = (changes['photos'].currentValue as PhotoItem[] ?? []).map(p => p.url);
      const contentChanged =
        newUrls.length !== this._knownPhotoUrls.length ||
        newUrls.some((u, i) => u !== this._knownPhotoUrls[i]);
      if (contentChanged) {
        this._knownPhotoUrls = newUrls;
        this.activeIndex.set(0);
      }
    }
  }

  ngOnDestroy(): void {
    this._destroyLightbox();
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

  goPrev(): void { this.goTo(Math.max(0, this.activeIndex() - 1)); }
  goNext(): void { this.goTo(Math.min(this.photos.length - 1, this.activeIndex() + 1)); }

  // ── Lightbox ──────────────────────────────────────────────────────

  openLightbox(index: number): void {
    if (this._wasSwiping) { this._wasSwiping = false; return; }
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
    this._cdr.detectChanges();
    this._initLightboxSwiper(index);
  }

  closeLightbox(): void {
    const target = this.activeIndex();
    this.lightboxOpen = false;
    document.body.style.overflow = '';
    this._destroyLightbox();
    this.activeIndex.set(target);
  }

  lbGoTo(index: number): void {
    this._lightboxSwiper?.slideTo(index);
    this.activeIndex.set(index);
    this._scrollLbThumbIntoView(index);
  }

  // ── Private helpers ───────────────────────────────────────────────

  private _scrollThumbIntoView(index: number): void {
    const thumbs = this.thumbsElRef?.nativeElement;
    if (!thumbs) return;
    const thumb = thumbs.children[index] as HTMLElement;
    if (!thumb) return;
    thumbs.scrollTo({
      left: Math.max(0, thumb.offsetLeft - thumbs.offsetWidth / 2 + thumb.offsetWidth / 2),
      behavior: 'smooth',
    });
  }

  private _scrollLbThumbIntoView(index: number): void {
    const thumbs = this.lbThumbsElRef?.nativeElement;
    if (!thumbs) return;
    const thumb = thumbs.children[index] as HTMLElement;
    if (!thumb) return;
    thumbs.scrollTo({
      left: Math.max(0, thumb.offsetLeft - thumbs.offsetWidth / 2 + thumb.offsetWidth / 2),
      behavior: 'smooth',
    });
  }

  private _initLightboxSwiper(index: number): void {
    if (!this.lightboxSwiperElRef) return;
    const el = this.lightboxSwiperElRef.nativeElement;
    this._lightboxSwiper = new Swiper(el, {
      modules: [Navigation],
      initialSlide: index,
      navigation: {
        prevEl: el.querySelector<HTMLElement>('.pc-lb-prev'),
        nextEl: el.querySelector<HTMLElement>('.pc-lb-next'),
      },
      grabCursor: true,
      speed: 250,
      on: {
        slideChange: (swiper: Swiper) => {
          this._zone.run(() => {
            this.activeIndex.set(swiper.activeIndex);
            this._cdr.detectChanges();
            this._scrollLbThumbIntoView(swiper.activeIndex);
          });
        },
      },
    });
  }

  private _destroyLightbox(): void {
    this._lightboxSwiper?.destroy(true, true);
    this._lightboxSwiper = undefined;
  }
}
