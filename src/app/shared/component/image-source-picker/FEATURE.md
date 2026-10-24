# Image source picker (camera / gallery)

## Functionality

Everywhere the app lets you add a photo, you always get two choices: take a picture directly with the phone camera, or open the gallery to pick an existing picture (or, where it makes sense, several pictures or a PDF).

On a computer (mouse and keyboard, no touch screen) there is no camera to launch, so a single "Choose file" action is shown instead and it opens the normal file dialog.

While a photo is being processed the control shows a small spinner and cannot be pressed again.

## Implementation

- Component: `shared/component/image-source-picker/` (`<app-image-source-picker>`, standalone, OnPush). This is the ONLY way to offer camera/gallery. Never hand-roll a hidden `<input type="file">` for photos in a page; use this component.
- No Capacitor camera plugin: two hidden inputs, camera (`capture="environment"`, single file) and gallery (no `capture`, `multiple` optional).
- Inputs: `variant` (`'split'` default | `'pair'` | `'tile'` | `'none'`), `label` (already translated, primary button text), `icon` (default `camera-outline`), `iconOnly`, `disabled`, `busy`, `cameraAccept` / `galleryAccept` (default `image/*`, pass e.g. `image/*,application/pdf`), `multiple` (gallery only), `fullWidth`, `tileSize` (`tile` only, px, default 96).
- Tile sizing: the tile SCSS reads `--isp-tile-size` (default 96px); the `tileSize` input sets it on the host via `[style.--isp-tile-size.px]`. At `tileSize <= 72` the tiny text labels are not rendered (icons and aria-labels stay) and the icon shrinks with the tile. Callers: photo-picker 90, maintenance attachments/invoices/invoice-scan 68. Never override `.isp--tile` with `::ng-deep`.
- Output: `filesSelected: { files: File[]; source: 'camera' | 'gallery' }`. Input value is reset after reading so the same file can be re-picked; nothing is emitted for an empty selection.
- Public methods: `openCamera()`, `openGallery()` (no-ops while `disabled`/`busy`), for use via template ref, mainly with `variant="none"` and custom UI (drop zones, photo-picker).
- Variants: `split` = big solid primary button (camera) with an attached outlined gallery button; `pair` = two equal pill segments; `tile` = dashed square add-tile with camera / gallery halves and tiny labels; `none` = only the hidden inputs.
- Desktop rule: `window.matchMedia('(any-pointer: coarse)')` is evaluated once at construction (guarded for missing `window`/`matchMedia`). When not coarse, `openCamera()` opens the gallery input, and `split`/`pair`/`tile` render a single "Choose file" action (split keeps the provided `label`).
- Translations: `shared.imageSource.{camera, gallery, chooseFile, cameraAria, galleryAria}` in en/ro/ru. Buttons are `type="button"` with translated `aria-label`/`title`.
- Spinner uses `<app-loader size="sm">` (same as the old cars-form scan buttons).
