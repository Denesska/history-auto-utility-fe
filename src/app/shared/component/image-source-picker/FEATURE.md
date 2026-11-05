# Image source picker (camera / gallery)

## Functionality

Everywhere the app lets you add a photo, you always get two choices: take a picture directly with the phone camera, or open the gallery to pick an existing picture (or, where it makes sense, several pictures or a PDF). Where files can be dropped (documents, photo galleries) you can also drag them onto the box.

On a computer (mouse and keyboard, no touch screen) there is no camera to launch, so a single "Choose file" action is shown instead and it opens the normal file dialog.

While a photo is being processed the control shows a small spinner and cannot be pressed again.

## Implementation

- Component: `shared/component/image-source-picker/` (`<app-image-source-picker>`, standalone, OnPush). This is the ONLY way to offer camera/gallery. Never hand-roll a hidden `<input type="file">` for photos in a page; use this component.
- No Capacitor camera plugin: two hidden inputs, camera (`capture="environment"`, single file) and gallery (no `capture`, `multiple` optional).
- Inputs: `variant` (`'split'` default | `'pair'` | `'tile'`), `label` (already translated, primary button text), `icon` (default `camera-outline`; for `tile` it is the header icon shown with `title`/`hint`), `iconOnly`, `disabled`, `busy`, `cameraAccept` / `galleryAccept` (default `image/*`, pass e.g. `image/*,application/pdf`), `multiple` (gallery only), `fullWidth`; `tile` only: `size` (`'sm'` ~64px | `'md'` ~96px default | `'lg'` ~170px), `title`, `hint` (already translated, shown inside the box above the halves), `dropEnabled` (default false).
- Tile: always 100% of its container (also as a flex-row child), dashed box split into two equal halves, camera (left) | gallery (right), labels always visible; on desktop a single full-width "Choose file" half. `title`/`hint` render above the halves (used by `lg`). Heights are set by the `isp--sm|md|lg` classes. Callers: documents `lg` (with drop), photo-picker `md` (with drop), maintenance attachments/invoices/invoice-scan `sm`. Never override `.isp--tile` with `::ng-deep`; pages must not build their own buttons, zones or drag handlers around the picker.
- Output: `filesSelected: { files: File[]; source: 'camera' | 'gallery' | 'drop' }`. Input value is reset after reading so the same file can be re-picked; nothing is emitted for an empty selection. `drop` is emitted when `dropEnabled` and files are dropped on the tile (highlighted while dragging); nothing is filtered, callers validate.
- Public methods: `openCamera()`, `openGallery()` (no-ops while `disabled`/`busy`); no caller should use them to hand-roll UI.
- Variants: `split` = big solid primary button (camera) with an attached outlined gallery button; `pair` = two equal pill segments; `tile` = full-width dashed box (see Tile). There is no `none` variant.
- Desktop rule: `window.matchMedia('(any-pointer: coarse)')` is evaluated once at construction (guarded for missing `window`/`matchMedia`). When not coarse, `openCamera()` opens the gallery input, and `split`/`pair`/`tile` render a single "Choose file" action (split keeps the provided `label`).
- Translations: `shared.imageSource.{camera, gallery, chooseFile, cameraAria, galleryAria}` in en/ro/ru. Buttons are `type="button"` with translated `aria-label`/`title`.
- Spinner uses `<app-loader size="sm">` (same as the old cars-form scan buttons).
