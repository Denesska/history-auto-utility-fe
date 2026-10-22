import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, closeOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@jsverse/transloco';
import Swiper from 'swiper';
import { Keyboard, Zoom } from 'swiper/modules';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';

/**
 * The app's one fullscreen photo viewer, WhatsApp-style: solid black edge-to-edge stage,
 * a chrome overlay (close + counter on top, thumbnails on the bottom, arrows on desktop)
 * that a single tap on the photo toggles away, pinch / double-tap / wheel zoom with pan
 * (Swiper's Zoom module — while zoomed a drag pans instead of changing slide, and zoom
 * resets on slide change, both the module's own defaults), swipe between photos.
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
  imports: [ImageUrlPipe, IonIcon, TranslocoPipe, OverlayBackDirective],
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
  /** Top bar / thumbnails / arrows. A single tap on the photo toggles it. */
  readonly chromeVisible = signal(true);

  private readonly _host = inject<ElementRef<HTMLElement>>(ElementRef);
  private _swiper?: Swiper;
  private _tapTimer?: ReturnType<typeof setTimeout>;
  private _previouslyFocused: Element | null = null;
  private _enteredFullscreen = false;
  private _wheelHandler?: (e: WheelEvent) => void;

  private static readonly DOUBLE_TAP_RATIO = 2.5;
  private static readonly MAX_RATIO = 4;
  /** Must exceed Swiper's double-tap window (300ms) so a first tap never toggles early. */
  private static readonly SINGLE_TAP_DELAY_MS = 300;

  get hasMultiple(): boolean {
    return this.photos.length > 1;
  }

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _zone: NgZone,
  ) {
    addIcons({ chevronBackOutline, chevronForwardOutline, closeOutline });
  }

  /** Called by `PhotoViewerService` once the host element is attached to `document.body`. */
  init(): void {
    this.activeIndex.set(this.startIndex);
    this._previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    this._cdr.detectChanges();
    this._host.nativeElement.querySelector<HTMLElement>('.plb-overlay')?.focus({ preventScroll: true });
    this._initSwiper();
    this._enterBrowserFullscreen();
    this._scrollThumbIntoView(this.startIndex);
  }

  close(): void {
    this.closed.emit();
  }

  goTo(index: number): void {
    this._swiper?.slideTo(index);
    this.activeIndex.set(index);
    this._scrollThumbIntoView(index);
  }

  prev(): void {
    this._swiper?.slidePrev();
  }

  next(): void {
    this._swiper?.slideNext();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  ngOnDestroy(): void {
    clearTimeout(this._tapTimer);
    document.body.style.overflow = '';
    if (this._wheelHandler) {
      this._swiperElRef?.nativeElement.removeEventListener('wheel', this._wheelHandler);
    }
    this._swiper?.destroy(true, true);
    this._swiper = undefined;
    if (this._enteredFullscreen && document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => undefined);
    }
    // Return focus to whatever opened the viewer.
    if (this._previouslyFocused instanceof HTMLElement) {
      this._previouslyFocused.focus({ preventScroll: true });
    }
  }

  /**
   * Touch devices in a mobile browser only (not desktop/mouse, not the native app, which
   * is already edge-to-edge). iOS Safari rejects/lacks it for non-video elements — ignored.
   * If the user leaves browser fullscreen with a system gesture the viewer simply stays
   * open; nothing listens for `fullscreenchange`.
   */
  private _enterBrowserFullscreen(): void {
    if (document.body.classList.contains('hau-native')) return;
    if (!window.matchMedia?.('(pointer: coarse)').matches) return;
    const el = this._host.nativeElement;
    try {
      const p = el.requestFullscreen?.();
      if (p) {
        p.then(() => (this._enteredFullscreen = true)).catch(() => undefined);
      }
    } catch {
      /* unsupported — stay in-page fullscreen */
    }
  }

  private _initSwiper(): void {
    if (!this._swiperElRef) return;
    const el = this._swiperElRef.nativeElement;
    this._swiper = new Swiper(el, {
      modules: [Keyboard, Zoom],
      initialSlide: this.startIndex,
      // toggle is off: double-tap is handled below so the target ratio is 2.5x, not maxRatio.
      zoom: { maxRatio: PhotoLightboxComponent.MAX_RATIO, minRatio: 1, toggle: false },
      keyboard: { enabled: true },
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
        // Swiper only emits `tap` for a press that did not move (so never for a swipe, pan
        // or the pinch's moving pointers); `doubleTap` follows the 2nd `tap` of a pair.
        tap: () => this._onTap(),
        doubleTap: (swiper: Swiper, e: unknown) => this._onDoubleTap(swiper, e),
      },
    });
    this._wheelHandler = (e) => this._onWheel(e);
    this._zone.runOutsideAngular(() => el.addEventListener('wheel', this._wheelHandler!, { passive: false }));
  }

  /** Delay the chrome toggle so a following 2nd tap can cancel it (double-tap = zoom). */
  private _onTap(): void {
    clearTimeout(this._tapTimer);
    this._tapTimer = setTimeout(() => {
      this._zone.run(() => {
        this.chromeVisible.update((v) => !v);
        this._cdr.detectChanges();
      });
    }, PhotoLightboxComponent.SINGLE_TAP_DELAY_MS);
  }

  private _onDoubleTap(swiper: Swiper, e: unknown): void {
    clearTimeout(this._tapTimer);
    const zoom = swiper.zoom;
    if (!zoom || swiper.animating) return;
    if (zoom.scale && zoom.scale !== 1) {
      zoom.out();
      return;
    }
    // getMaxRatio() honours a `data-swiper-zoom` attribute on the zoom container; set it
    // only for this call so the in-zoom (pinch) ceiling stays at MAX_RATIO.
    const container = swiper.slides[swiper.activeIndex]?.querySelector<HTMLElement>('.swiper-zoom-container');
    container?.setAttribute('data-swiper-zoom', String(PhotoLightboxComponent.DOUBLE_TAP_RATIO));
    zoom.in(e as never);
    container?.removeAttribute('data-swiper-zoom');
  }

  /** Mouse wheel / trackpad zoom (desktop). */
  private _onWheel(e: WheelEvent): void {
    const swiper = this._swiper;
    if (!swiper?.zoom) return;
    e.preventDefault();
    const current = swiper.zoom.scale || 1;
    const next = Math.min(
      PhotoLightboxComponent.MAX_RATIO,
      Math.max(1, current * Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.002))),
    );
    if (next <= 1.02) {
      if (current > 1) swiper.zoom.out();
      return;
    }
    if (Math.abs(next - current) < 0.01) return;
    swiper.zoom.in(next);
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
