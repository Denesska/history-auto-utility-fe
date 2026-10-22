import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  inject,
  createComponent,
} from '@angular/core';
import { PhotoLightboxComponent } from './photo-lightbox.component';

/**
 * Opens the app's one fullscreen photo viewer (`PhotoLightboxComponent`) from anywhere —
 * a thumbnail tap on a page that has no carousel of its own (Jurnal gallery/inline body
 * images, a document's image preview), or `PhotoCarouselComponent`'s main-image tap.
 *
 * Creates the lightbox with Angular's `createComponent` API and appends its host element
 * straight to `document.body`, rather than letting a consumer declare `<app-photo-lightbox>`
 * in its own template — a template-declared instance would be rendered (and clipped) inside
 * whatever routed page's `.ion-page` it lives in. See `PhotoLightboxComponent`'s doc comment.
 */
@Injectable({ providedIn: 'root' })
export class PhotoViewerService {
  private readonly _appRef = inject(ApplicationRef);
  private readonly _envInjector = inject(EnvironmentInjector);

  private _ref?: ComponentRef<PhotoLightboxComponent>;

  /** Opens the viewer on `urls[startIndex]`, with `urls` as the swipeable set. */
  open(urls: string[], startIndex = 0, altText = 'Photo'): void {
    if (!urls.length) return;
    this.close();

    const ref = createComponent(PhotoLightboxComponent, {
      environmentInjector: this._envInjector,
    });
    ref.instance.photos = urls;
    ref.instance.altText = altText;
    ref.instance.startIndex = Math.min(Math.max(startIndex, 0), urls.length - 1);
    ref.instance.closed.subscribe(() => this.close());

    document.body.appendChild(ref.location.nativeElement);
    this._appRef.attachView(ref.hostView);
    this._ref = ref;
    // Device/browser Back closes the lightbox like any other overlay: the component's own
    // root element carries `appOverlayBack` (see photo-lightbox.component.html), so this
    // runs during init()'s first detectChanges() and tears down on ref.destroy() below —
    // see core/navigation/FEATURE.md "Overlay back".
    ref.instance.init();
  }

  close(): void {
    const ref = this._ref;
    if (!ref) return;
    this._ref = undefined;
    this._appRef.detachView(ref.hostView);
    ref.destroy();
  }
}
