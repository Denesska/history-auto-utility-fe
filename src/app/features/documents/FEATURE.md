# Documents (Documente)

## Functionality

Documents is where every legal/administrative document for a car lives —
insurance, technical inspection, road tax, registration — so you can see at a
glance what's valid, what's about to expire, and what has already lapsed.

### Document types

Five types are recognised, each with its own icon and color:

- **RCA** — mandatory car insurance
- **ITP** — periodic technical inspection
- **ROV** — road vignette: the Romanian *rovinietă*, or a vignette for another
  country (see below)
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
- The price has a **currency** picker next to it: RON (the default), EUR, USD
  or MDL. A price in any currency other than RON is **converted to RON
  automatically** at the official BNR exchange rate **on the day it was paid**
  (the "Valid from" date). For a weekend or holiday that's the last rate BNR
  published before it. The form says so under the price. The document keeps the original amount, the RON
  equivalent, the rate used and the date of that rate, and its detail page shows
  e.g. "≈ 527.18 RON · BNR rate: 1 EUR = 5.2718 RON (25 Sep 2026)". Editing a
  document later only re-converts it if you change the price, the currency or
  the "Valid from" date. If BNR can't be
  reached, the document is still saved, just without the RON equivalent.
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

### Vignettes for other countries

A car can hold vignettes for several countries at once. Most cars only ever
have the Romanian one, but a trip abroad may need a Hungarian, Austrian or
Bulgarian vignette too, and those shouldn't be mistaken for the Romanian one.

- When the type is a vignette, a **Country** picker appears, set to Romania by
  default. If you don't touch it, nothing changes compared with before.
  Countries on offer: Romania, Hungary, Austria, Bulgaria, Czechia, Slovakia,
  Slovenia, Switzerland and Moldova, each shown with its flag.
- Once you pick another country, a row of **quick periods** appears, matching
  what that country sells (e.g. Hungary: 1 day / 10 days / 1 month / 1 year;
  Bulgaria: weekend / 7 days / 1 month / 3 months / 1 year). The usual one is
  already selected. Picking a period, or changing the start date, fills in
  the end date. The end date stays editable, and a period only shows as
  selected while the dates still match it.
- A vignette has **no status to pick**. Its state comes from the period you
  enter and shows as a single icon next to "Validity". Hover or tap it for the
  wording:
  - valid (green), with the days left;
  - expiring soon (amber, Romanian vignette only);
  - expired (red);
  - not started yet (blue), with its start date;
  - ended (grey, a foreign vignette past its end).

  The icon updates as the dates change.
- Attaching a scan or PDF of a vignette also recognises **which country** it's
  for.
- The overlap warning only compares vignettes for the **same country**. A
  Hungarian vignette next to a Romanian one is not a clash.
- Wherever a vignette appears (list row, detail page, car hub), it carries the
  country's **flag and code**, e.g. "Vinietă · HU". The Romanian one keeps the
  name "Rovinietă".
- **A foreign vignette is a travel document, not the car's vignette.** The
  car's vignette deadline, the garage pills, the attention panel, the hub alert
  and the expiry e-mails only ever look at the Romanian vignette. A foreign one
  never shows as "expiring" and never offers "Renew". Once its end date passes,
  it reads **"Ended"** in a neutral grey instead of a red "Expired", and it
  sorts to the bottom of the car's Documente tab.

### The document list

- One row per document, showing type, vehicle (with license plate), expiry
  date, days remaining, and a progress bar for how much of the validity period
  has already elapsed.
- Documents that are **expired** get a "Renew" button and expiring ones get a
  "Schedule" button — both jump straight into editing that document.
- **"Expiring soon" scales with the document's validity period**: it starts at
  about 10% of the period before the end, rounded to whole days, at least 1
  day and at most 30. A 1-year RCA warns 30 days ahead, a 90-day vignette 9
  days, a 30-day one 3 days, a 7-day one 1 day. A document without a start date
  uses 30 days. The same rule drives the car hub deadlines and the garage's
  attention panel.
- A document that lost an overlap decision is marked **inactive**, so it's
  visibly not the one currently in force.
- A document with an attached file shows a **paperclip with the file's name**,
  and a **download** button on the row, so the scan can be saved without opening
  the document first.
- Filter by vehicle, type and status, and search freely. The search also
  matches the attached file's name and a vignette's country (code or name).
  Once any foreign vignette exists, the type filter lists vignettes per country
  (with flags), so one trip's vignettes can be picked out on their own.
- Every row is the same at any width: tap it to open the document, with **edit**
  and **delete** on the row (and by swiping on touch), plus **download** when a
  file is attached.
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
  `searchQuery()`). One row component at every width: the shared
  `<app-document-list-row>` (over `<app-action-list-row>`), which emits
  `action` (`view` / `edit` / `delete`) and `download`. Projects its "add"
  button into the shared shell header's end slot; the mobile FAB (`ion-fab`) is
  the mobile equivalent.
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
  / expired / no-expiry + days left; pass `issue_date` as the 2nd argument so
  "expiring" uses `expiringWindowDays()` — ~10% of the period, clamped to 1–30
  days, 30 when the period is unknown), `getDocValidity()` (the same pick as
  `getDocExpiry()`, plus the issue date), `calcDocProgress()` (% of validity
  window elapsed), `docCtaFor()` (the Renew/Schedule button), `getDocExpiry()`
  (preferring the active document of a type), `docUrgencyClass()`,
  `supersededDocumentIds()` (per car/type/vignette country: every expired
  document when a not-expired one exists, else every expired one but the latest.
  It's used only by the car's Documente tab, to move them behind its "show
  history" toggle; the main list here shows everything). Used by the
  list, the detail view, the car hub's deadline widget and the sidebar's
  attention panel — don't recompute expiry status locally.
- `shared/component/doc-type-badge/` — the type chip.
- `shared/component/document-list-row/` — the one document row, used by both the
  documents list and the car's Documente tab. It renders the attachment chip
  (`document.file_url` + `file_name`) and the trailing download button, and
  emits `download`; the row's view/edit/delete come from the generic
  `shared/component/action-list-row/` underneath it. `doc-expiry-row/` is the
  older row it replaced — still in the tree, no longer used by any template.
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
- **NGXS success handlers patch state before they `await` a toast.** The form
  reads `lastSavedId` the moment the create dispatch completes, to attach the
  file to the document it just created. `createSuccess` used to `await
  toast.present()` first, so the read came back `null` and `finishSave()`
  skipped the upload without a word — which is why no document file was stored
  between 2026-06-08 and 2026-09-09, even though the R2 plumbing worked. Keep
  `patchState` first in any handler whose state a caller reads on completion.
- **The file is attached by a second request after the save**, so the form
  refreshes bootstrap *again* on upload success — otherwise the cached document
  keeps an empty `file_url` and the list shows no clip until the 5-minute TTL
  expires.
- **Deleting a file (`DELETE /upload/:id`) now clears the owning document's
  `file_url`/`file_name`/`file_size`**, so a row can't advertise a clip for an
  object that is gone from the bucket.

### Vignette countries (2026-09-26)

- **`Document.country`** (nullable `String`, ISO 3166-1 alpha-2) exists only for
  `ROV`. **Null means RO**: every vignette created before the column existed has
  a null value, so no migration was needed. New ones are saved with an explicit
  code (`'RO'` included), and other types always get null. Always read it
  through `vignetteCountryOf()` so both forms are treated the same.
- `shared/config/vignette-country.config.ts` is the single source of truth:
  `HOME_VIGNETTE_COUNTRY`, `VIGNETTE_COUNTRIES` (code + quick periods +
  `defaultDuration`), `isForeignVignette()`, `vignetteExpiryFor()` (a day-count
  period is inclusive, so 10 days from the 12th ends on the 21st), and
  `countryFlagEmoji()`.
- **Keeping foreign vignettes out of the "car's vignette"** happens in the shared
  utils, not per screen. `getDocExpiry()` skips them, which covers the garage
  pills, the attention panel and the hub alert. `collectDocSources()` in
  `deadline-items.util.ts` skips them too, and `foreignVignetteDeadlines()` adds
  them back as their own always-`ok` rows (key `doc:vignette:<id>`, with
  `countryCode` set). `activeForeignVignettes()` feeds the flag pills on the car
  cards/rows. The backend e-mail reminders read `Car.rov_expiry_date`, never
  `Document`, so they were already RO-only.
- The calm status is a view concern. `document-list-row`, `document-detail`,
  `documents-list` and `car-documents` each map expiring→valid for a foreign
  vignette, and expired→`ended` (neutral) or sort it last, and never show a
  CTA. `calcDocStatus()` itself is unchanged.
- **Flags are inline SVG** (`shared/component/country-flag/`: `<app-country-flag>`
  for the flag alone, `<app-country-tag>` for flag + code). Emoji flags don't
  render on Windows. The one exception is the native `<select>` on touch
  devices, which can only hold text: `<app-dropdown>` options accept an optional
  `flag` code and show it as SVG in the custom panel and trigger, and as an
  emoji in the native picker (fine there, since that's always a mobile OS).
- Extraction: the Gemini schema has a `vignette_country` field and the prompt
  lists foreign vignette names. `applyExtraction()` sets the country from it.
  When the document carries no end date, the country's default period is
  applied.
- ROV has no status control. The form hides the `status` dropdown for it and
  never sends `status`, so the backend default "Active" stays. The
  `vignetteValidity` getter derives the Validity icon from
  `issue_date`/`expiry_date` via `calcDocStatus()`, with foreign vignettes
  never "expiring" and "ended" instead of "expired".
- The type picker labels ROV "Viniete"
  (`DOC_TYPE_CONFIG.ROV.pickerLabel`) so people can find the option. Everywhere
  else `docLabelKey(doc)` names a single document: "Rovinietă" for RO and
  "Vinietă" for any other country.

### Currency conversion (BNR)

- **Frontend:** the currency is an `<app-dropdown>` fed by
  `shared/config/currency.config.ts` (`COMMON_CURRENCIES` = RON/EUR/USD/MDL,
  `DEFAULT_CURRENCY` = RON). A document whose saved currency isn't in the list
  gets it appended, so nothing is lost. A searchable "other currencies" option
  is a planned follow-up. The form never sends `exchange_rate`, so every
  conversion today comes from BNR. `document-detail` renders `premium_ron` and
  the rate line only when the currency isn't RON.

- **Columns on `Document`** (all nullable, all computed server-side in
  `document.service.ts`, returned on `DocumentDto`):
  - `premium_ron`: `premium` in RON, rounded to 2 decimals.
  - `exchange_rate`: RON per 1 unit of `currency`. BNR's `multiplier` is
    already divided out, so HUF is ~0.0145, not 1.4455.
  - `exchange_rate_date`: the BNR publication date of the rate (`<Cube date>`),
    not the save time. For a weekend or holiday this is the last banking day
    before the transaction.
  - `exchange_rate_source`: `'BNR'` or `'MANUAL'`.
- **Create:** if there's no premium, all four are null. For RON (or no currency),
  `premium_ron = premium`, rate `1`, and date/source are null. Any other currency
  uses the client's `exchange_rate` if one was sent (source `MANUAL`, date =
  issue date or today). Otherwise it uses the **BNR rate in force on the
  transaction date** (source `BNR`).
- **Transaction date = `issue_date`** ("Valabil de la", the day it was paid), or
  today when there is none. The rate is the one BNR published that day, or the
  last one published before it (weekends, holidays, Jan 1–2 fall back into the
  previous year). A future date gets the latest published rate. The user asked
  for this on 2026-09-26: converting at the save-day rate "isn't objective".
- **The client can send only `exchange_rate`** (`CreateDocumentDto`/`UpdateDocumentDto`,
  optional and positive) as a manual override. The other three fields are never
  accepted from the client.
- **Update recomputes only when the price actually changed.** That means
  `premium`, `currency` or `exchange_rate` is in the payload *and* differs from
  the stored value, so editing an unrelated field never moves an old document to
  today's rate.
  - An echoed identical value is not a change. Currency is compared
    case-insensitively, with empty meaning RON.
  - Removing the premium clears all four.
  - If only `premium` changed and a rate is already stored, that
    rate/date/source is kept and only `premium_ron` is recomputed.
  - A currency change triggers a fresh lookup.
  - **An `issue_date` change re-rates a BNR conversion** at the new date. A
    `MANUAL` rate is kept, since it's the user's own number.
  - `exchange_rate: null` counts as a change only when the stored source is
    `MANUAL`. It means "drop my override and use BNR". A client that always
    sends null won't re-rate BNR documents.
- **Failure never blocks the save.** If BNR is unreachable or doesn't list the
  currency, the document is saved with the four fields null and a warning is
  logged. Nothing retries later on its own. The next price edit, or a save with
  a manual `exchange_rate`, fills them in.
- **Rate source: `src/modules/exchange-rate/`** (`ExchangeRateModule`,
  `ExchangeRateService.getRonRate(currency) → { rate, date } | null`, never
  throws). It's reusable, but so far only `DocumentModule` imports it.
  - The signature is `getRonRate(currency, onDate = today)`.
  - It reads BNR's **year files**,
    `https://curs.bnr.ro/files/xml/years/nbrfxrates<YYYY>.xml`. There is one per
    year back to 2005, each with every banking day, and the current year's file
    runs up to the latest published day. It uses global `fetch` with an 8s
    timeout.
  - If the current year's file can't be fetched, it falls back to the daily feed
    (`curs.bnr.ro/nbrfxrates.xml`, then `www.bnr.ro/…`) for the latest rate. As
    of 2026-09-26 the `www.bnr.ro` URLs redirect to the HTML homepage, so
    `curs.bnr.ro` is the host that works.
  - It parses with a regex (`parseBnrXml` returns every `<Cube>`, oldest first;
    no XML dependency).
  - Past years are cached in memory forever and the current year for 3h.
    Concurrent requests for a year share one fetch.
  - After a failed fetch it waits 5 minutes per year before trying again, and
    serves the stale snapshot meanwhile.
- Backfill: on **dev**, the 41 existing RON-priced documents were given
  `premium_ron = premium` and rate `1` by hand (2026-09-26). No non-RON priced
  documents existed there. Test/prod will need the same one-line `UPDATE`, plus
  a real BNR lookup at `issue_date` for any non-RON rows, when this ships.

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
