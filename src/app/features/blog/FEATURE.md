# Jurnal (Blog)

## Functionality

Jurnal is a personal journal combined with a per-vehicle history log. Every
entry is one of two types:

- **Personal** — a general journal entry, not tied to any car.
- **Vehicle Journal** — tied to one specific car, with extra fields for that
  car's history (category, mileage, cost).

### Getting to Jurnal

- The bottom navigation has a **Jurnal** tab — opens the general list, where
  you can browse your personal entries or switch to any of your cars' entries,
  and start writing a new entry of either type.
- From a specific car's own page, its **Jurnal** tile opens the list already
  locked to that car (no Personal tab, no switching to another car) — the
  quick way to log something about the car you're currently looking at.

### Writing an entry

- **Title** (required) and **date** (required, defaults to today).
- **Photos** — upload as many as you like into a gallery; tap one to mark it
  as the main/cover photo (the one shown everywhere the entry appears as a
  thumbnail). No separate "cover" upload step — it's just whichever gallery
  photo you've picked.
- **Story/content** — a rich-text editor: bold, italic, headings, bullet and
  numbered lists, quotes, and links. You can also drag a photo straight out of
  the gallery above and drop it into the text at whatever point in the story
  you want it to appear.
- **Tags** — free-form, colored labels you type in; each distinct tag gets a
  consistent color.
- Vehicle Journal entries additionally have: which car it's about, a
  **category** (Repair, Service visit, Trip, Fuel, Upgrade, Inspection,
  Breakdown, Other), **mileage**, and **cost**.
- On a phone, writing a Vehicle Journal entry is a 2-step flow: step 1 is the
  title/photos/story, step 2 is picking the car and filling in the
  mileage/cost/tags. Personal entries are always a single step.
- An entry can be **saved as a draft** or **published**; while typing, a
  "draft saved" indicator confirms your work isn't lost.
- While writing, the bottom navigation is hidden to give the form the full
  screen, and Cancel + the entry's title stay pinned in the top bar so
  they're reachable no matter how far you've scrolled down a long entry.

### Browsing entries

- The list is split into tabs: **Personal** and one tab per car you own.
- Personal entries can be **pinned** — pinned ones show in a featured section
  above the rest.
- You can filter by tag, search by text, and sort newest/oldest first.
- Vehicle entries can additionally be filtered by category (chips for the
  common ones, with a "more" option for the rest).
- Every entry shows its cover photo as a thumbnail in the list (falling back
  to a color gradient if it has no photo).
- From the list, a "…" menu on each entry lets you edit, pin/unpin, or delete
  it without opening it.

### Viewing an entry

Opening an entry shows its cover photo, date, linked car (if any), draft/
published status, category badge + mileage/cost (for vehicle entries), tags,
the full rendered story (including any photos placed inline), and the rest of
its photo gallery below.

## Implementation

**Frontend** — `history-auto-utility-fe/src/app/features/blog/`
- `blog-list/` — the list page (tabs: Personal + one per owned car).
- `blog-entry-write/` — create/edit form (used for both `new` and `:id/edit`).
- `blog-entry-view/` — read-only entry view.
- `components/tiptap-editor/` — the rich-text editor used by the write form.
- `state/` (`blog.facade.ts`, `.actions.ts`, `.state.ts`) — NgRx-style facade wrapping the generated `BlogService` API client.
- `models/blog.model.ts` — `BlogCategory`, `VehicleEntryCategory`, tag colors, `carGradient()` (deterministic per-car gradient for cards with no photo).
- `blog.routes.ts` / `blog.routes.const.ts` (`BLOG_ROUTES`) — route paths.

**Shared component (not blog-owned, but central to it)**
- `history-auto-utility-fe/src/app/shared/component/photo-picker/` (`PhotoPickerComponent`, `PhotoPickerItem`) — the photo gallery + "pick main photo" + drag-source widget. Also used by `cars-form` for car photos. If you're touching photo upload/selection anywhere, use this instead of hand-rolling — see its own doc comment for the contract (`photos`/`photosChange`/`removed` I/O, `dragHint` input).

**Backend** — `history-auto-utility-be/src/modules/blog/`
- `blog.controller.ts` — `POST /blog/images` (single-file upload, returns `{url}`, used by the write form to upload gallery photos before saving), plus standard CRUD on `/blog`.
- `blog.service.ts` — CRUD logic; resolves relative `/uploads/blog/...` paths (or presigned URLs) on every read via `_resolveUrl`.
- Prisma models: `BlogEntry` (title, date, content, `content_json` — Tiptap JSON —, status DRAFT/PUBLISHED, `is_pinned`, `cover_gradient`, `cover_image_url`, optional `car_id`/`vehicle_category`/`km`/`price`, `tags: BlogTag[]`, `images: BlogImage[]`), `BlogImage` (`id`, `url` — **no `is_default` column**, see "Cover photo" below), `BlogTag`.
- On update, `images` is replaced wholesale (`deleteMany` + `create` from the full URL list the frontend sends) — there's no per-image id round-trip, the frontend always resends the complete gallery.

### Routing / entry points (technical)

- `/main/blog` — general list; `/main/blog?carId=X` — same list component,
  but `carId` locks it to that car only: no tab switcher, no Personal tab
  (see `blog-list.component.ts` `isScoped`/`scopedCarId`).
- New-entry entry points are the FAB (`FabActionService`, set in
  `ionViewWillEnter`) and the empty-state / vehicle-tab floating CTAs in
  `blog-list.component.html` — all route to `/main/blog/new`, with optional
  `?category=` / `?carId=` query params to pre-select. There is no header
  button anymore (removed 2026-09-05 — see below).
- Entry row click → `/main/blog/:id` (view) → edit pencil → `/main/blog/:id/edit`.

### Cover photo & gallery (no separate upload)

There is **one** photo gallery per entry (`app-photo-picker` in the write
form), for both Personal and Vehicle entries. Click a photo to mark it the
main one — same interaction as car photos. There is **no separate "upload
cover" step** anymore; `cover_image_url` is just a plain string column that
gets set, on save, to whichever gallery photo has `isDefault: true`
(`blog-entry-write.component.ts` `_submit()`/`_persist()`). No `BlogImage.is_default`
column was added — matching by URL was enough and avoided a schema migration.

On load (edit mode), if `cover_image_url` doesn't match any of the entry's
`images` (this happens for entries created before this design — the cover
used to be uploaded through a separate button, entirely outside the gallery),
it's folded in as its own gallery entry so it now shows up everywhere
consistently. This is a one-time reconciliation that happens automatically
the next time that entry is opened for editing.

List thumbnails (`blog-list.component.ts` `entryThumb()`) prefer
`cover_image_url`, fall back to `images[0]`, fall back to a gradient
(`cardBg()` — `cover_gradient` for personal entries, `carGradient(car_id)`
for vehicle entries). Applies to every card type: pinned cards, the personal
entry-list rows, and vehicle-tab rows.

### Inserting a photo into the text

The Tiptap editor (`components/tiptap-editor/`) does **not** have its own
image-upload button. Instead: drag a photo from the entry's gallery
(`app-photo-picker`, rendered above the editor) and drop it onto the text —
it's inserted as an inline image node at the drop position
(`TiptapEditorComponent.onPhotoDrop`, via `editor.view.posAtCoords` +
`insertContentAt`). The drag payload is the photo's absolute URL, carried in
`dataTransfer` under `text/uri-list`.

**Limitation:** only already-uploaded photos are draggable
(`PhotoPickerComponent.canDrag()` — `!photo.file`). A photo just added to a
brand-new, not-yet-saved entry only becomes draggable after that entry has
been saved once and reopened for editing (only then does it have a stable
server URL). This was a deliberate simplification to avoid embedding
base64/blob previews into `content_json`.

### Mobile layout notes (technical)

- The bottom tab bar + FAB are hidden on the write/edit routes
  (`/main/blog/new`, `/main/blog/:id/edit`) — see `MainComponent.hideBottomNav`
  / `isBlogWriteRoute` in `features/main/main.component.ts`. Same reasoning as
  the car create form: a long form doesn't need the tab bar competing for
  space.
- The write form's "Anulează" button and page title are projected into the
  shared shell header (top bar, next to the profile icon) via
  `HeaderActionsService` — **not** rendered inline in the scrollable page
  content. `blog-list` uses the same service only for its page title now
  (`setTitle`/`clearTitle`); it no longer projects an action button into the
  header. The title is re-pushed on every `form.valueChanges` tick so it
  tracks what the user is typing.
- Vehicle-journal entries get a 2-step mobile flow (`mobileStep`): step 1 is
  title/content/photos, step 2 is vehicle picker + metadata + tags. Personal
  entries are single-step on all breakpoints.

### Known gaps / things not done

- Saving a draft always navigates back to the list (`_navigateBack()`) — there's
  no "stay and keep editing" option, so the drag-into-text flow for a brand
  new entry requires a save-then-reopen round trip (see limitation above).
- Backend `BlogImage` has no ordering/id-stable update path — the whole
  `images` array is replaced on every save. Fine for the current UI (order
  doesn't matter, only "which one is the cover" does), but don't assume you
  can patch a single image without resending the full list.
