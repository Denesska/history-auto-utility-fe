# Photo picker (photo gallery field)

## Functionality

A photo grid used for car photos and for the blog (Jurnal) cover and gallery. You can add up to 20 photos; a counter shows how many slots are used.

- Adding photos always offers two options: take a picture with the phone camera, or choose from the gallery (several photos at once). On a computer, where there is no camera to launch, a single "choose file" action is shown instead. You can also drag image files onto the grid.
- Each picked photo shows a placeholder while it is prepared, then turns into a thumbnail.
- Tap a photo to make it the main photo; remove a photo with the small x on it. If the main photo is removed, the first remaining photo becomes the main one.
- Only JPG, PNG, GIF and WebP images up to 10 MB are accepted; anything else is skipped with a message. When the limit is reached the add action is disabled, and if a batch would exceed it only the photos that fit are added.
- In the blog editor, already-saved photos can be dragged into the text.

## Implementation

- Component: `shared/component/photo-picker/` (`<app-photo-picker>`). Inputs `photos`, `maxPhotos` (20), `dragHint`; outputs `photosChange`, `removed`. The parent owns persistence.
- The add tile is `<app-image-source-picker variant="tile" [multiple]="true">` (see `shared/component/image-source-picker/FEATURE.md`); it is rendered only while slots remain and is `[disabled]` otherwise. Its `(filesSelected)` and the grid's drag & drop both feed `_addFiles()`. The component no longer owns a hidden `<input type="file">`.
- `_addFiles()`: limit check, type/size validation, then a one-at-a-time queue (`_drain`) that resizes (`resizeImage`, 1920px) and reads a data URL before emitting `photosChange`.
- The old "waiting for the OS picker" tile (`awaitingPicker`, tap/cancel handling) was removed because the shared picker does not expose open/cancel events; only per-file placeholder tiles remain. The translation key `shared.photoPicker.preparing` is now unused.
- The shared tile is 96px; `photo-picker.component.scss` overrides it to the grid's 90px via `::ng-deep .isp--tile`.
