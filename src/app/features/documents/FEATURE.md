# Documents (Documente)

## Functionality

Documents is where every legal/administrative document for a car lives —
insurance, technical inspection, road tax, registration — so you can see at a
glance what's valid, what's about to expire, and what has already lapsed.

### Document types

Five types are recognised, each with its own icon and color:

- **RCA** — mandatory car insurance
- **ITP** — periodic technical inspection
- **ROV** — road vignette
- **Talon / Registration** — the vehicle registration certificate
- **Road tax**

Each type shows only the extra fields that make sense for it. RCA has the most
(insurer, policy series, policy number, bonus-malus class, premium + currency,
policyholder name, personal ID); the others just take an optional
provider/premium. Vehicle, issue date, expiry date and the attached file are
common to all types.

### Adding or editing a document

- Pick the type and the vehicle, then fill in the dates. Issue and expiry dates
  are pre-filled with a sensible default period for the type you chose, so the
  common case needs no typing.
- ITP has a **2-year** switch (the usual choice for a newer car), which moves
  the expiry date accordingly.
- A document that genuinely never expires can be marked **no expiry**, which
  drops the expiry-date requirement.
- You can attach the document's **file** — a PDF or a photo — by picking it or
  dragging it in. One file per document; attaching a new one replaces the
  reference to the old one. When editing a document that already has a file, its
  name is shown along with a **view** link that opens it.
- If the document saves but its file can't be uploaded, you're told so
  explicitly — the document is kept, and you can re-attach the file by editing
  it.
- **Attaching a PDF or a photo when adding a document reads it automatically**
  and fills in what it finds: type, insurer, policy series and number,
  policyholder and personal ID, premium and currency, bonus-malus class, and
  the validity dates. A banner tells you what was recognised, warns about
  anything it wasn't sure of, and says so plainly if the reading failed or the
  service is temporarily unavailable — you can always correct or complete any
  field by hand. This only runs when adding, never when editing an existing
  document.
- If the period you entered **overlaps an existing document of the same type**
  for that car, you're told which one(s) it clashes with and asked whether to
  continue. If you do, you then choose which of them should count as the
  *active* one; the others are automatically marked inactive rather than
  deleted, so the history stays intact.
- The form's two actions — **close** and **save** — sit in the top bar as round
  icon buttons, and nothing is duplicated at the bottom of the form. The save
  button turns into a spinner while the document is being saved and its file
  uploaded.

### The document list

- One row per document, showing type, vehicle (with license plate), expiry
  date, days remaining, and a progress bar for how much of the validity period
  has already elapsed.
- Documents that are **expired** get a "Renew" button and expiring ones (within
  30 days) get a "Schedule" button — both jump straight into editing that
  document.
- A document that lost an overlap decision is marked **inactive**, so it's
  visibly not the one currently in force.
- A document with an attached file shows a **paperclip** next to its name (with
  the file's name under it on a wide screen) and a **download** button on the
  row, so the scan can be saved without opening the document first.
- Filter by vehicle, type and status, and search freely — the search also
  matches the attached file's name. On a wide screen the list is a table; on a
  phone it's a card list.
- Each row has **view**, **download** (when a file is attached), and a "…" menu
  with **edit** and **delete**.
- Adding a document is the **+** button in the top bar on desktop, and the
  floating button on mobile.
- Pull down to refresh.

### Viewing one document

Shows every field the type carries, the expiry status with days remaining,
and — if a file is attached — a **preview of it inline** (PDF or image, on wide
screens) plus **download** (saves it under its original name) and **open**
(shows it full-screen: a new tab in the browser, the in-app browser in the
mobile app). If the file can't be reached, that's said in place of the preview
instead of showing an empty frame. The top bar carries **edit** and **delete**
as round icon buttons, next to the back button.

### Per-car documents

A car's own page has a Documente tab showing only that car's documents, with the
same paperclip marker and download button per row. Adding from there pre-selects
(and locks) the vehicle, so you can't file a document against the wrong car by
accident.

## Implementation

**Frontend** — `history-auto-utility-fe/src/app/features/documents/`

- `documents-list/` (`DocumentsListComponent`) — the list page. Signal-based
  (`filteredDocs()`, `selectedCarId()`, `selectedType()`, `selectedStatus()`,
  `searchQuery()`, `openMenuId()`). Renders a desktop table and a mobile card
  list from the same `filteredDocs()`; the mobile card is the shared
  `<app-doc-expiry-row>`. Projects its "add" button into the shared shell
  header's end slot; the mobile FAB (`ion-fab`) is the mobile equivalent.
- `documents-form/` (`DocumentsFormComponent`) — one component for both `add`
  and `:id/edit` (`isEditMode` = "was an `editDoc` resolved from the route").
  Notable pieces:
  - `docTypeFormFields()` (from `shared/config/document-type.config.ts`) drives
    which optional fields render — the form group always holds them all, the
    template just hides the ones that don't apply.
  - `no_expiry` / `itp_two_years` are UI-only controls: `toggleExpiryValidation()`
    adds/removes the `expiry_date` validator, and `applyDefaultDates()` seeds
    the date pair per type on create.
  - `setFile()` → `DocumentExtractionService.extract()` — only in add mode, and
    only for `EXTRACTABLE_MIME_TYPES` (PDF/JPEG/PNG/WebP, mirroring the
    backend's own set). Images are downscaled first (`resizeImage(file, 1600,
    0.7)` — deliberately smaller/lossier than the car-photo resize, since this
    copy is only sent to the extractor and never stored). `applyExtraction()`
    maps `ExtractionResultDto.fields` onto form controls; a `503` is surfaced
    separately (`extractionServiceUnavailable`) from a generic failure.
  - `confirmOverlap()` — the two-step overlap dialog (warn → pick the active
    one). Losers go through `DocumentsFacade.deactivateDocument()`, which
    patches `is_active: false` and dispatches `PatchDocumentSilently` so the
    list updates without a reload.
  - The file upload is a **second** request after the save
    (`DocumentsFacade.uploadFile(id, file)`), using `getLastSavedId()` on
    create — so `uploading` is a distinct flag from `submitting`.
- `document-detail/` (`DocumentDetailComponent`) — read-only view; builds a
  `vm` (doc + car + `isPdf` + `fileSizeLabel` + `isActive`) and projects
  **edit + delete** into the shared header's end slot. The preview iframe/img
  does **not** use `doc.file_url`: it asks `DocumentFileService` for a fresh
  link once per document (`_loadFileLink`), and `downloadFile()` / `openFile()`
  each fetch their own.
- `state/` (`documents.facade.ts`, `.actions.ts`, `.state.ts`) — NGXS state
  wrapping the generated `DocumentService` client. `loadAll()` hydrates from
  `BootstrapState` when the bootstrap payload is still within
  `BOOTSTRAP_TTL_MS`, and only hits the API otherwise
  (`HydrateFromBootstrap` vs. `LoadAll`).
- `documents.routes.ts` / `documents.routes.const.ts` (`DOCUMENTS_ROUTES`).

**Shared, but central to this feature**

- `shared/config/document-type.config.ts` — `DOC_TYPE_CONFIG` (label/icon/color
  per type), `DOC_TYPE_FORM_FIELDS` + `docTypeFormFields()` (which optional
  fields a type shows), `docTypeConfig()` (with an unknown-type fallback). This
  is the single source of truth for "what is a document type" — add a type here
  rather than in a component.
- `shared/utils/document-status.util.ts` — `calcDocStatus()` (valid / expiring
  ≤30d / expired / no-expiry + days left), `calcDocProgress()` (% of validity
  window elapsed), `docCtaFor()` (the Renew/Schedule button), `getDocExpiry()`
  (preferring the active document of a type), `docUrgencyClass()`. Used by the
  list, the detail view, the car hub's deadline widget and the sidebar's
  attention panel — don't recompute expiry status locally.
- `shared/component/doc-type-badge/`, `shared/component/doc-expiry-row/` — the
  type chip and the mobile document row.
- `core/document-extraction.service.ts` — a thin wrapper over the generated
  client's extraction endpoint, so callers outside this feature (notably
  `cars-form`'s "scan the registration certificate") don't inject the documents
  API directly.
- `core/upload/upload.service.ts` — file upload/read-URL plumbing.
- `core/document-file.service.ts` — the read side of a document's attached file:
  `getLink(id, 'inline' | 'download')`, plus `download()` and `open()` which
  route the resulting URL to the right place per platform (`Browser.open` on
  native, `location.href` / `window.open` on the web). Hand-written on top of
  `HttpClient` rather than regenerated into `autogenapi` — same as
  `core/upload/upload.service.ts`.
- `shared/component/doc-expiry-row/` takes `hasFile` + `fileClick`, which is how
  both the mobile documents list and the car's Documente tab get the paperclip
  and the download button.

**Backend** — `history-auto-utility-be/src/modules/document/`

- `document.controller.ts` (`@Controller('document')`) — `GET all`,
  `POST /`, `GET :id`, `PUT :id`, `DELETE :id`, `GET car/:carId`,
  `GET :id/file?mode=inline|download` (a fresh link to the attached file),
  `POST :id/upload` (legacy disk-based attach — see below), and `POST extract`
  (read a file, return suggested field values — stateless, creates nothing).
- `document-extraction.service.ts` + `parsers/` — the deterministic parsers for
  known document layouts; `gemini-extraction.service.ts` is the AI fallback.
  `SUPPORTED_MIME_TYPES` there is what the frontend's
  `EXTRACTABLE_MIME_TYPES` mirrors — keep the two in sync.
- Prisma model `Document`: `car_id`, `document_type`, `issue_date`,
  `expiry_date` (both nullable — a null `expiry_date` is what "no expiry"
  means), `provider`, `policy_series`, `policy_number`, `premium`, `currency`,
  `bonus_malus_class`, `status` (defaults `"Active"`), `policyholder`,
  `cnp_id`, `file_url`, `file_name`, `file_size`, `is_active` (defaults
  `true`), and the `car` relation (`onDelete: Cascade` — deleting a car takes
  its documents with it). There is **no `no_expiry` and no `itp_two_years`
  column**; both are form-only controls.

### How the attached file is stored and read back (2026-09-09)

- **Uploads go straight to Cloudflare R2**, never through the API: the form
  calls `UploadService.uploadFile(file, 'document', docId)` → `POST
  /upload/request` (signed PUT URL + a `PENDING` `uploaded_files` row) → browser
  `PUT` to R2 → `POST /upload/:fileId/confirm`, which flips the row to
  `UPLOADED` **and** writes the object key into the document's `file_url`
  (+ `file_name`, `file_size`). `document/:id/upload` (multer → `uploads/documents/`)
  is the pre-R2 path, still mounted but not used by the app.
- **`Document.file_url` holds an R2 object key, not a URL.** `toDocumentDto()`
  signs it into a temporary GET URL on every read (`resolveFileUrl`), so what
  the frontend holds in state is already stale-able — an hour after the read it
  is a dead link. That is why nothing user-facing links to `doc.file_url`
  directly any more: it's only good as a "has a file" flag, and every click
  fetches `GET /document/:id/file` for a fresh one. **Don't put `doc.file_url`
  into an `href`/`src` again.**
- **`GET /document/:id/file` also carries the access check** the rest of the
  document endpoints still lack (owner or accepted share, matched on the car),
  and resolves the three shapes `file_url` can have: an R2 key (signed), a
  legacy `/uploads/...` disk path (prefixed with `API_BASE_URL`, since a
  relative path resolves against the app host — and against nothing at all in
  the native build), or an absolute URL (returned as-is).
- **`mode=download` is what makes "Download" actually download.** The URL is
  signed with a `ResponseContentDisposition: attachment` override
  (`StorageService.createPresignedGetUrl`'s third argument), because the HTML
  `download` attribute is ignored cross-origin — R2 is a different origin, so
  the old `<a download>` could only ever open the file, and on native did
  nothing at all.
- **Deleting a file (`DELETE /upload/:id`) now clears the owning document's
  `file_url`/`file_name`/`file_size`**, so a row can't advertise a clip for an
  object that is gone from the bucket.

### Notes / decisions

- **`is_active` is not `status`.** `status` is a user-set label
  (Active/Inactive/Expired) on the form; `is_active` is the app's own
  "this is the one currently in force for its type+car" flag, set by the
  overlap dialog. Expiry status itself is *derived* from `expiry_date` at read
  time (`calcDocStatus`), never stored.
- **"No expiry" is stored as a null `expiry_date`**, not as a boolean column —
  `no_expiry` exists only as a form control, and is re-derived when patching
  the form from an existing document.
- Extraction never overwrites a field the user has already typed with an empty
  value: `applyExtraction()` builds a patch of only the fields it actually
  found.

### Known gaps

- The form still renders its own `<h1>` page title in the content
  (`.form-title`) on top of the title the shared shell header shows, so the
  title appears twice on that page. Every other form page only keeps a
  subtitle inline (`.hau-page-subtitle`).
- There's no bulk action anywhere (no multi-select delete, no "renew all").
- **Deleting a document leaves its file in the bucket** — `DELETE /document/:id`
  removes the row (and with it the only reference to the key) without touching
  R2 or the `uploaded_files` record. Deleting the *file* through
  `DELETE /upload/:id` is clean; deleting the *document* is not.
- **One file per document.** `Document` has a single `file_url` column, so
  attaching a second file just overwrites the reference and orphans the first
  object. `uploaded_files` already models many files per context (that's how
  maintenance records hold several photos) — a multi-file document would read
  from there instead of from the column.
- The preview only renders at ≥900px; on a phone the file is reachable through
  download/open, not inline.
