import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, closeOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@jsverse/transloco';
import Swiper from 'swiper';
import { Navigation, Zoom } from 'swiper/modules';

/**
 * The app's one fullscreen photo viewer: pinch/double-tap zoom (Swiper's Zoom module —
 * while zoomed, a swipe pans the image instead of changing slide, which is the module's
 * own default behavior), swipe between photos, thumbnail strip.
 *
 * Never placed in a template. Opened imperatively through `PhotoViewerService.open()`,
 * which creates it with Angular's `createComponent` API and appends its host element
 * directly to `document.body` — escaping any ancestor `.ion-page`'s `contain: layout`,
 * which would otherwise trap a `position: fixed` overlay inside that routed page's own
 * box (and cap its stacking context below the app shell header) instead of covering the
 * true viewport. Same underlying issue, same fix, as the one documented in
 * `features/settings/bottom-bar-editor-panel`'s doc comment — that component reparents
 * *itself* in `ngOnInit` because it's declared in a template; this one is never declared
 * in a template at all, so the service places its host element directly.
 *
 * This is why its content comes from plain properties (`photos`/`altText`/`startIndex`)
 * set by the service before the first change-detection pass, not `@Input()` bindings.
 */
@Component({
  selector: 'app-photo-lightbox',
  templateUrl: './photo-lightbox.component.html',
  styleUrls: ['./photo-lightbox.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ImageUrlPipe, IonIcon, TranslocoPipe],
})
export class PhotoLightboxComponent implements OnDestroy {
  /** Set by `PhotoViewerService.open()` right after construction, before `init()` runs. */
  photos: string[] = [];
  altText = 'Photo';
  startIndex = 0;

  @Output() readonly closed = new EventEmitter<void>();

  @ViewChild('swiperEl') private _swiperElRef?: ElementRef<HTMLElement>;
  @ViewChild('thumbsEl') private _thumbsElRef?: ElementRef<HTMLElement>;

  readonly activeIndex = signal(0);
  private _swiper?: Swiper;

  get hasMultiple(): boolean {
    return this.photos.length > 1;
  }

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _zone: NgZone,
  ) {
    addIcons({ chevronBack, chevronForward, closeOutline });
  }

  /** Called by `PhotoViewerService` once the host element is attached to `document.body`. */
  init(): void {
    this.activeIndex.set(this.startIndex);
    document.body.style.overflow = 'hidden';
    this._cdr.detectChanges();
    this._initSwiper();
  }

  close(): void {
    this.closed.emit();
  }

  goTo(index: number): void {
    this._swiper?.slideTo(index);
    this.activeIndex.set(index);
    this._scrollThumbIntoView(index);
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    this._swiper?.destroy(true, true);
    this._swiper = undefined;
  }

  private _initSwiper(): void {
    if (!this._swiperElRef) return;
    const el = this._swiperElRef.nativeElement;
    this._swiper = new Swiper(el, {
      modules: [Navigation, Zoom],
      initialSlide: this.startIndex,
      zoom: { maxRatio: 4 },
      navigation: {
        prevEl: el.querySelector<HTMLElement>('.plb-prev'),
        nextEl: el.querySelector<HTMLElement>('.plb-next'),
      },
      grabCursor: true,
      speed: 250,
      on: {
        slideChange: (swiper: Swiper) => {
          this._zone.run(() => {
            this.activeIndex.set(swiper.activeIndex);
            this._cdr.detectChanges();
            this._scrollThumbIntoView(swiper.activeIndex);
          });
        },
      },
    });
  }

  private _scrollThumbIntoView(index: number): void {
    const thumbs = this._thumbsElRef?.nativeElement;
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
