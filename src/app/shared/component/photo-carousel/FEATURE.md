# Photo carousel & fullscreen viewer

## Functionality

Any place in the app that shows more than one photo for something (today: a
car's hero photos, a Jurnal/journal entry's cover + gallery) shows them as a
small swipeable carousel: a main image with left/right arrows and a row of
thumbnails underneath, and a dot per photo on the image itself. The arrows are
icon-only (white chevron with a shadow, no background circle).

Tapping the main photo opens the same
**one fullscreen photo viewer** used everywhere in the app — car photos, a
journal entry's cover and gallery, inline photos inside a journal entry's
story text, and an image preview on a document (not PDFs). It always covers
the whole screen, including over the top status bar and the app's own header
— never just the content area.

In the fullscreen viewer (modelled on WhatsApp's media viewer):
- The photo fills the whole screen on a solid black background, no frame.
  On phones/tablets in a mobile browser it also asks the browser to go
  fullscreen (where the browser allows it; leaving browser fullscreen does not
  close the viewer).
- A single tap on the photo hides/shows the controls (close button, counter,
  thumbnails, arrows) so you see the photo alone.
- **Pinch to zoom** (touch), **double-tap / double-click** to zoom to about
  2.5x on the tapped spot (again to zoom back out), or the **mouse wheel /
  trackpad** on desktop, up to 4x. Zoom resets when you change photo.
- While zoomed in, dragging pans around the photo instead of moving to the
  next one; swipe normally (not zoomed) moves between photos.
- Desktop: left/right arrow keys and on-screen chevrons change photo, Esc
  closes.
- A thumbnail strip along the bottom (when there's more than one photo) jumps
  straight to any photo, and a counter ("2 / 5") at the top shows where you are.
- A close button (top-left, icon only), Esc, or the phone/browser Back button
  closes it. Tapping the photo does not close it.

Wherever it's opened from, the viewer shows the same set of photos a user
would expect to swipe through in that context — e.g. opening a journal
entry's gallery thumbnail lets you swipe through the entry's cover and the
rest of its gallery, in the order they're shown on the page; opening an
inline photo inside the story text lets you swipe through the other photos
placed in that same story.

## Implementation

Two separate pieces, both in this folder:

- **`photo-carousel.component.ts`** (`<app-photo-carousel>`) — the inline
  swipeable strip (main image, prev/next, dots, thumbnails). `@Input()
  photos: PhotoItem[]` (`{ url, isDefault? }`), `@Input() altText`. No
  `@Output()` for opening the viewer — tapping the main image calls
  `PhotoViewerService.open()` itself (no expand button; thumbnails only switch the
  main image; arrows are icon-only, hidden on phones). Swiper is used
  only for the inline main-image transform (manual translateX, not even
  Swiper — see the component's own comments); the fullscreen viewer is a
  completely separate component (below), not rendered inside this one.
  Used by: the car hub's hero photo carousel (`features/cars/cars-details`,
  both the active and sold/archived layouts).

- **`shared/component/photo-lightbox/`** — the one fullscreen viewer:
  - `photo-lightbox.component.ts` (`PhotoLightboxComponent`, selector
    `app-photo-lightbox`) — Swiper-based, with the `Keyboard` and `Zoom`
    modules (`zoom: { maxRatio: 4, toggle: false }`). Layout: `.plb-overlay` is
    `position: fixed; inset: 0; height: 100dvh` solid black; the swiper stage
    fills it (`touch-action: none`, `object-fit: contain`), chrome (top bar,
    gradient scrims, desktop-only arrows via `@media (pointer: coarse)`, thumbs)
    is absolutely positioned over it with safe-area insets and fades via
    `chromeVisible`. Gesture disambiguation: Swiper emits `tap` only for a press
    that did not move (so never for swipe/pan/pinch); the chrome toggle runs
    300ms after a `tap` and is cancelled by Swiper's `doubleTap` (2 taps within
    300ms), which instead toggles zoom (built-in toggle is off so the target is
    2.5x — done by temporarily setting `data-swiper-zoom` on the zoom container
    before `zoom.in(event)`, which centres on the tap). Wheel zoom is a custom
    non-passive `wheel` listener calling `zoom.in(ratio)`/`zoom.out()` (Swiper
    has none). On `(pointer: coarse)` and not `body.hau-native`, `init()` calls
    `requestFullscreen()` on the host (rejections ignored) and `ngOnDestroy`
    exits it. Focus returns to the previously focused element on destroy; Esc
    via a `document:keydown.escape` host listener; Back via `appOverlayBack`. **Never placed in a template.** It
    reads `photos: string[]` / `altText` / `startIndex` as plain properties
    (not `@Input()`s) set directly by the service below, and exposes a
    `closed` `EventEmitter`.
  - `photo-viewer.service.ts` (`PhotoViewerService`, `providedIn: 'root'`) —
    `open(urls: string[], startIndex = 0, altText = 'Photo')` /
    `close()`. Creates the lightbox with Angular's `createComponent` API and
    appends its host element **directly to `document.body`**, rather than
    letting a consumer declare `<app-photo-lightbox>` in its own template.
    This is deliberate, not a style choice: Ionic's `.ion-page` sets `contain:
    layout` on every routed page, which traps a `position: fixed` descendant
    inside that page's own box (so it would never actually reach the true
    viewport edges) and caps its stacking context below the app shell header
    — the exact issue documented in
    `features/settings/bottom-bar-editor-panel`'s doc comment, which works
    around it by reparenting *itself* to `<body>` in `ngOnInit` because it
    *is* declared in a template. `PhotoLightboxComponent` is never declared
    in a template at all, so the service places its host element itself
    instead.
  - Any page that wants to open the viewer from its own markup (not through
    `<app-photo-carousel>`) injects `PhotoViewerService` and calls `.open()`
    directly — see `features/blog/blog-entry-view` (gallery thumbnails, cover
    photo, inline body images — three separate calls, each with its own
    photo list and start index) and
    `features/documents/document-detail` (the image file preview, one photo).

- **i18n**: `shared.photoCarousel.main` (inline thumbnail's "Main" badge), `shared.photoCarousel.prev`/`next` (arrow aria-labels),
  `shared.photoLightbox.close` (close button's aria-label; also reuses
  `shared.photoCarousel.prev`/`next` for the arrows) — en/ro/ru.

- **Swiper CSS**: `angular.json`'s global `styles` array includes
  `swiper/modules/zoom.css` alongside the other per-module Swiper
  stylesheets already listed there — required for the Zoom module's pinch/
  double-tap classes (`.swiper-zoom-container`, `swiper-slide-zoomed`) to
  have any effect; it isn't bundled by `swiper/swiper.css` alone. A `dev`
  server restart (not just a file save) is needed to pick up an
  `angular.json` styles change.

- **Known limitations**: no on-screen +/− zoom button; no swipe-down-to-close;
  wheel zoom at 1x is not centred on the cursor (Swiper only centres on a
  tap event).
