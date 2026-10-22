# Maintenance

## Functionality

Maintenance covers logging service/repair/fuel history for a car and tracking
when the next service of each kind is due.

### Adding or editing a record

- A single form covers repairs, scheduled maintenance, improvements, "passion"
  spending, and fuel/charging fill-ups. Fields: vehicle, date, title,
  **category**, mileage, cost (with a **currency** picker next to it — RON,
  EUR, USD or MDL, RON by default), a **labor cost** (what the workshop charged
  for the work, kept separately from the parts), a multi-line **notes** field
  for anything else about the work, whether it was done yourself (DIY), whether
  it's a reimbursable company expense, parts used, an optional reminder date,
  photo/document attachments, and invoices (see "Scanning invoices and service
  reports" below).
- A cost in any currency other than RON is **converted to RON automatically**
  at the official BNR exchange rate on the record's service date, the same
  way a document's premium is (see the Documents feature) — the record keeps
  the original amount, the RON equivalent, the rate used and the date of that
  rate. Editing a record later only re-converts it if you change the cost,
  the currency or the date. If BNR can't be reached, the record is still
  saved, just without the RON equivalent.
- In a business account, when it wasn't DIY, an optional **supplier** dropdown lets you pick which
  garage/workshop did the work, from your supplier directory (see the
  Supplier feature) — the record's detail page then shows that name next to
  "Performed by". Leaving it unset is fine. Personal accounts have no
  suppliers: no dropdown, no name on the detail page.
- **Category** says which kind of service this is (oil, brakes, tires, engine,
  inspection, battery, filters, lights, transmission, fluids, or other) — this
  is what ties a record to the matching progress bar on the Plan page. You pick
  it yourself, or it gets filled in when you scan invoices (see below).
  - A fuel/charging entry ("Alimentare"/"Încărcare") is always categorized as
    fuel automatically — the category picker doesn't appear for it.
- Fuel/charging entries have their own simplified layout: no title/category/
  parts, just quantity (liters or kWh), cost, date and mileage — with an
  option to snap a photo of the pump display, a printed receipt, or the
  odometer, which fills in the fields automatically — including the currency,
  when the photo shows one. If a receipt includes non-fuel items (car wash,
  shop purchases), you're warned to double-check the cost. A hybrid/plug-in
  car gets a small switch to say whether this fill-up was fuel or a charge.
- Parts used are typed in freely (name, part code, quantity, price) — there's
  no parts catalog to pick from. Adding a priced part nudges the total cost
  up as a convenience; you can still edit the total by hand.
- A record can carry photos/documents as attachments, and an optional
  reminder date (e.g. an upcoming inspection deadline).
- The form opens as a full-screen panel over whatever screen you were on. Its
  top bar holds both of its actions as round icon buttons — **close** on the
  left, **save** on the right (which turns into a spinner while saving) — and
  nothing else; there's no save button at the bottom of the form. The "new
  part" sheet nested inside it works the same way.
- A record you add or edit shows up immediately everywhere it matters — the
  history list, the Plan page's progress bars, and the car's own "upcoming
  deadlines" widget — with no manual refresh needed.

### Scanning invoices and service reports

- When you add a new entry (not a fuel/charging one), the form has an invoice
  area where you can attach up to 3 photos or PDFs — for example the parts
  invoice from the shop and the work report from the service. Tap **Analyze
  documents** and the app reads all of them together and fills in the form:
  - the entry type (maintenance, repair, and so on), the category, a short
    title, and a multi-line description of the work done;
  - the date, the mileage (only if that field is still empty), and the currency;
  - the supplier, in a business account, when a matching supplier already
    exists in your supplier directory;
  - every part, with its quantity and price;
  - the labor cost, and the total cost.
- Amounts are taken as they include VAT, i.e. what was actually paid. A part
  listed on both the shop invoice and the service report is counted once, and
  the same document uploaded twice is counted once. Labor and discounts are kept
  as separate figures, and the total is parts plus labor minus discounts.
- If that computed total differs from the totals printed on the documents, a
  warning asks you to check it. Nothing is adjusted silently. Documents in
  different currencies are converted to RON at the BNR exchange rate of each
  document's own date, and a warning tells you so.
- The scan also warns you when a document can't be read, when some parts have
  no price, or when the VAT situation is unclear.
- You can change the files and analyze again. Parts from the earlier scan are
  replaced; parts you added by hand are kept. Everything the scan fills in stays
  editable until you save.
- When you save, the original invoice files are kept under **Invoices & service
  reports**, separate from your process photos. You can download them later
  from the entry's detail page.
- When you edit an existing entry, you can add invoices, remove them and
  download them. Scanning is offered only when adding a new entry.
- Scans count toward your AI usage limits.

### Viewing a single record

Opening a record from the history list shows all of its details, with the
cost shown in whatever currency it was entered in (e.g. "50 EUR") and, for a
non-RON cost, the RON equivalent and the rate used underneath (e.g.
"≈ 267.51 RON · BNR rate: 1 EUR = 5.3501 RON (7 Oct 2026)"), the same way a
document's premium does. The top bar carries **edit** and **delete** as round
icon buttons, next to the back button; edit re-opens the same full-screen
form over it, and delete asks for confirmation before returning to the
history list. The detail page also shows the notes, the labor cost (when there
is one), and an **Invoices & service reports** section listing the saved invoice
files, each downloadable.

### History (Istoric)

- Lists every record for a car (or across all your cars, from the general
  Maintenance tab), grouped by year, filterable by category, with running
  totals. Each row shows its cost in its own currency; year/period totals and
  running totals are always in RON (see "Currency conversion" below).

### Plan

- One progress bar per tracked category (oil, brakes, tires, etc.), each
  showing how close you are — by distance or by time, whichever is sooner —
  to the next service of that kind, based on the most recent matching record
  you've logged. A category with no record logged yet shows as "not tracked."
- The Plan also drives reminders: every morning the app notifies you (in-app, push, email) when a tracked category
  is about to be due, becomes due, or stays overdue, and on the reminder dates you set on records (see
  "Maintenance reminders" in the maintenance-reminders feature notes). Switchable in Settings.
- A usage profile (Normal / Intensive / Occasional) scales every interval up
  or down to match how hard the car is actually driven. You can also create
  your own named profiles with custom per-category intervals, or turn
  tracking off entirely for a category you don't care about (e.g. you never
  log fluid top-ups).
- The car's own hub page shows a condensed version of the same information
  as an "upcoming deadlines" widget, alongside document deadlines (insurance,
  inspection, etc.), and lets you manually reorder or dismiss individual
  items.
- If you entered a last-oil-change date and/or mileage while adding the car
  (Garaj → Adaugă vehicul), the oil-change progress bar starts counting down
  from that baseline immediately — no need to log a first oil-change record
  yourself before the Plan has anything to track. This only happens at car
  creation, not when editing an existing car's details afterwards.

## Implementation

**Public API: `index.ts`** exports `MAINTENANCE_ROUTES`, `SERVICE_TYPE_CONFIG`/`serviceTypeConfig`, `CarMaintenanceSettingsService`, `CarMaintenanceProfilesService`, `MaintenanceFacade`, `MaintenanceState` and `provideMaintenanceCarPage` — consumed by `cars/` (route paths; `car-wishlist-panel.component.ts` also still imports `SERVICE_TYPE_CONFIG`/`serviceTypeConfig` for a wish's service-type label/icon, a separate, benign static-config coupling the 3d-2 data-decoupling refactor below didn't touch), `reports/` (service-type config) and the shell (facade/state, and the car-page contribution). The route array and lazy-loaded pages are not exported.

**Car page contribution**: `maintenance.car-page.ts` (`provideMaintenanceCarPage()`, see `core/car-page/FEATURE.md`) contributes the Istoric and Plan hub tiles/subnav entries, the add-maintenance and add-fuel-entry "add" actions, and a `CarDeadlineSource` (`id: 'maintenance'`) for the car hub's "Stare & scadențe" card. Istoric's live count and the deadline source both read `BootstrapFacade.maintenance$` (keyed by car id, already loaded at bootstrap for every accessible car) instead of `cars/`'s own state — `CarDetailsFacade.maintenanceRecords$` (and `carDocuments$`, documents' equivalent) was removed from `cars/` entirely in the 3d-2 refactor, so `cars-details.component.ts` no longer loads or even knows the shape of either feature's data. The deadline source's `buildMaintenanceDeadlineItems()` (`maintenance-deadline-items.util.ts`) is the maintenance half of the old combined `shared/utils/deadline-items.util.ts#buildDeadlineItems`; its `dismiss()` turns a category's `tracked` setting off (auto-creating a default profile on first dismiss, same as the Plan settings panel) via `CarMaintenanceProfilesService`/`CarMaintenanceSettingsService`, which this component used to do itself. Istoric (and its record detail) and Plan used to be routes inside `cars/cars.routes.ts`; they now live in `maintenance.car-tab.routes.ts`, mounted by the shell at the same path prefix `cars/cars.routes.ts` mounts at (`features/main/main.routes.ts`) — same components (`MaintenanceComponent`, `MaintenanceRecordDetailComponent`, `MaintenancePlanComponent`), just owned and routed from here instead.

**Feature switch:** the backend's `MaintenanceRecordController`, `CarMaintenanceSettingsController` and `CarMaintenanceProfilesController` are all tagged `@Feature('maintenance')` — a business organization with that key off gets 403 `FEATURE_DISABLED` on every maintenance endpoint, and bootstrap (`GET /app-data/initial`) returns `maintenance: {}`, `carMaintenanceSettings: {}` and `maintenanceProfiles: {}` without querying. `POST /document/extract` (used by the fuel/charging/odometer photo-scan flows here) stays reachable regardless via `@NoFeature()` on the document module's side. See `ACCOUNT-CONTEXT.md`, "Feature switches".

> **Known bug (found 2026-09-25): the Plan page's "Setări mentenanță" panel is
> unusable as an overlay.** It uses `<app-fullscreen-panel>` without escaping
> the routed page's `.ion-page` stacking context (`contain: layout` caps every
> descendant's z-index), so the shell header paints over the panel's own navbar
> — the panel's close button is hidden underneath, and the visible header is
> still "Plan de întreținere" with a back button that leaves the page instead
> of closing the panel. `add-maintenance-panel` avoids this by reparenting its
> host to `<body>` (see the comment in its `ngOnInit`); this panel does not.
> Either give it the same reparenting, or move that escape into
> `<app-fullscreen-panel>` itself so every user of the wrapper gets it — the
> wrapper's own SCSS comment already claims it handles this, and it doesn't.

**Frontend** — `history-auto-utility-fe/src/app/features/maintenance/`
- `maintenance.component.ts/.html` — Istoric list; works both as the general
  `/main/maintenance` route and, scoped to one car, as `cars/details/:id/istoric`.
- `add-maintenance-panel/` — the create/edit form (`AddMaintenancePanelComponent`).
  Notable pieces: `skipCategoryPicker`/`isFuelEntry` (ALIMENTARE short-circuit,
  also forces `service_category` to `COMBUSTIBIL`), the category
  and `_scanPhoto`
  (fuel receipt/odometer photo scanning; the resize, extraction call and
  retry/backoff on a transient AI failure live in `core/odometer-scan.service.ts`
  (`OdometerScanService`), shared with the car hub's update-mileage sheet).
  `_scanPhoto` stages the captured photo into `stagedAttachments` **immediately
  on capture**, before the scan request is even sent — not when the scan
  settles — so `save()` (which never blocks on scan status) still attaches the
  photo if the user saves while a scan is still 'scanning'/'retrying' (AI
  overloaded, retry backoff runs up to ~4.5 minutes). Only the auto-fill of
  fields and the capture tile's "done" thumbnail state depend on the scan
  actually resolving successfully (fixed 2026-10-07, two parts: first, a scan
  that came back undetected/wrong-document-type used to silently drop the
  photo instead of still attaching it; then, staging only on scan resolution
  — even with that first fix — still dropped the photo if Save was clicked
  before the scan resolved at all. Both left a fuel/charging entry's receipt
  or pump photo saved with no attachment. See `_unstageScanPhoto`, which makes
  retaking a photo for the same capture slot replace the previously staged one
  instead of attaching both — still exactly one attachment either way).
  `_afterSave()` also dispatches
  `MaintenanceFacade.refreshCarRecords(carId)` once, after its upload/delete
  `forkJoin` settles, whenever an attachment was actually added or removed —
  see "Attachment-meta refresh" below. Renders inside `<app-fullscreen-panel>`; its cancel/save buttons go
  into the panel's `fspStart`/`fspEnd` navbar slots — this is the reference
  implementation of the app-wide "page actions live in the top bar" convention
  (see the frontend `CLAUDE.md`). The duplicate full-width `.amp-btn-save-full`
  at the bottom of the form, and the one in the nested "Piesă nouă" sheet, were
  removed on 2026-09-09; `.amp-form` now carries the bottom safe-area inset
  itself so the last field still clears the gesture bar.
- `maintenance-form/` — thin route wrapper hosting the panel at `/main/maintenance/add`.
- `plan/` (`MaintenancePlanComponent`) — the progress-bar page. Reads car/
  records/intervals/settings **from `BootstrapFacade`, not `MaintenanceState`**
  — this is why it updates live the moment `BootstrapState.maintenance` is
  patched, with no navigation needed.
- `car-maintenance-settings-panel/` — per-category tracked on/off + custom
  interval overrides, and named profile management. Each interval row saves
  itself inline (row-level Cancel/Save), so the panel has no page-level save —
  only a close button, in `fspStart` (moved there from `fspEnd` on 2026-09-09
  so close is on the left everywhere).
- `record-detail/` — read-only view of one record. Projects **edit + delete**
  into the shared shell header's end slot (`create-outline` /
  `trash-outline`; the edit glyph was `pencil-outline` until 2026-09-09) and
  keeps the shell's back button. Edit flips an `editing` signal that renders
  `<app-add-maintenance-panel>` as a full-screen overlay on top, which brings
  its own close/save navbar.
- `state/` (`maintenance.actions.ts`, `.state.ts`, `.facade.ts`) — NGXS state
  wrapping the generated `MaintenanceRecordService` API client. Registered as
  an `NgxsModule.forFeature` provider in **two** separate route subtrees
  (`main.routes.ts`'s `cars/` subtree, and `maintenance.routes.ts`'s own
  routes) — both resolve to the same global NGXS `'maintenance'` slice, they
  are not independent copies.
- `service-type.config.ts` (`SERVICE_TYPE_CONFIG`, 5 values: REPAIR,
  MAINTENANCE, IMPROVEMENT, PASSION, ALIMENTARE) and
  `shared/config/maintenance-category.config.ts` (`CATEGORY_CONFIG`, the 12
  `ServiceCategory` values) are two independent classification axes on a
  record — "what kind of expense is this" vs. "what part of the car does it
  concern." Only `service_category` links a record to a Plan progress bar.
- `shared/utils/plan-items.util.ts` (`buildPlanItems`) — the progress-bar math:
  resolves each category's interval (custom setting → else
  `maintenance-interval.defaults.ts`'s value, scaled by the usage-profile
  multiplier), finds the most recent record with a matching `service_category`
  in the given records array, and computes `max(km-based progress, date-based
  progress)`.
- `shared/utils/plan-items.util.ts` is mirrored server-side by `history-auto-utility-be/src/modules/maintenance-record/plan-due.util.ts`
  (`computePlanDueItems`) for the daily reminder job: change the rules in both places. The job uses the default
  ("Normal") profile and ignores custom intervals (see `maintenance-reminders/FEATURE.md`).
- `maintenance-deadline-items.util.ts` (`buildMaintenanceDeadlineItems`, this
  feature's own file) — the maintenance half of the car hub's deadlines card;
  `shared/utils/deadline-items.util.ts` only keeps the generic
  `CarDeadlineItem` shape and ordering math now (see `core/car-page/FEATURE.md`).
- Backend endpoint POST /maintenance-record/suggest-category (category-suggestion.service.ts, Gemini) exists but currently has no frontend caller.
- `shared/component/dropdown/dropdown.component.ts` (`app-dropdown`) — the
  category picker widget; also used by the Plan page's car/profile pickers.

**Backend** — `history-auto-utility-be/src/modules/maintenance-record/`,
`car-maintenance-settings/`, `car-maintenance-profiles/`
- Prisma models: `MaintenanceRecord` (`service_type`, `service_category`
  — defaults to `OTHER` when omitted —, `mileage`, `cost`, `currency`
  (defaults `"RON"`), `cost_ron`/`exchange_rate`/`exchange_rate_date`/
  `exchange_rate_source` (RON conversion, see "Currency conversion" below),
  `is_diy`, `labor_cost`/`notes` (see "Invoice scanning" below), `fuel_liters`/`energy_kwh`, `expiry_date`, `is_company_expense`,
  `supplier_id` — nullable FK into the supplier directory, see
  `features/supplier/FEATURE.md`; `onDelete: SetNull`),
  `MaintenancePart` (free-typed `name`/`code`/`quantity`/`price`, no catalog,
  cascade-deleted with the record and replaced wholesale on every update),
  `CarMaintenanceSetting` (per-`(car, user, profile, category)` override:
  `tracked`, `custom_interval_km`, `custom_interval_months`),
  `MaintenanceProfile` (named per-car/user profile container). Global default
  intervals per category live in code, not a table:
  `maintenance-interval.defaults.ts`'s `DEFAULT_MAINTENANCE_INTERVALS`.
- `maintenance-record.service.ts` — CRUD; `_syncLastOilService` keeps
  `Car.last_oil_service_date`/`last_oil_service_mileage` pointed at the
  highest-mileage `OIL_CHANGE` record on every create/update/delete (a narrow,
  category-specific side effect, separate from the general Plan matching).
- The reverse direction (`Car.last_oil_service_*` → a `MaintenanceRecord`)
  happens exactly once, in `car/car.service.ts`'s `createCar` (fixed
  2026-10-07 — see "Known gaps" history below): if the add-car form submits
  `last_oil_service_date` and/or `last_oil_service_mileage`, the same Prisma
  transaction that creates the `Car` row also creates a `MaintenanceRecord`
  for it (`service_type: MAINTENANCE`, `service_category: OIL_CHANGE`,
  `cost: 0`, empty `description` — the record list/Plan both render the
  category label when `description` is blank, so no synthetic text is
  generated — `service_date` = the given date, or today if only a mileage was
  given). This is what makes `buildPlanItems` see a baseline immediately
  instead of waiting for the car's actual next oil-change entry. Only
  `createCar` does this — `updateCar` (editing an existing car) never creates
  a record from those two columns, and bulk fleet import goes through
  `createCar` once per row so it's covered automatically. The `Car` columns
  themselves are untouched/unchanged by this.
- `category-suggestion.service.ts` (`CategorySuggestionService`) — the AI
  fallback for category suggestion. Same construction/error-handling pattern
  as `document/gemini-extraction.service.ts` (`GoogleGenAI` client from
  `GEMINI_API_KEY`, silently disabled if unset, 503→`CategorySuggestionServiceUnavailableError`).
  Exposed via `POST /maintenance-record/suggest-category` on
  `MaintenanceRecordController` — stateless, suggestion only, doesn't save.

### Invoice scanning (2026-10-22)

**Backend** — `history-auto-utility-be/src/modules/maintenance-record/invoice-extraction/`
- `POST /api/maintenance-record/extract-invoice` on `MaintenanceRecordController`
  (`maintenance-record.controller.ts`). `FilesInterceptor('files')`, max 3 files
  of 20 MB each, memory storage; accepts pdf/jpeg/png/webp. Optional `car_id`:
  when given, a car access check runs and the car's context is added to the
  prompt. `lang` is `ro` | `en` | `ru`.
- `invoice-extraction.service.ts` — Gemini via `@google/genai`, model from
  `GEMINI_MODEL` (default `gemini-3.6-flash`), constrained by a `responseSchema`.
  One call per scan, all files sent together as `inlineData`. There is no
  Cloudflare fallback because that provider can't read PDFs. Gemini unavailable
  or no API key → 503.
- `invoice-extraction.prompt.ts` — the prompt.
- `invoice-reconciliation.ts` — a pure function. The model only extracts raw
  per-document lines; ALL arithmetic (dedupe, VAT handling, totals, mismatch
  checks, currency conversion) happens in code. Covered by
  `invoice-reconciliation.spec.ts`.
- `invoice-extraction.types.ts` / `.dto.ts` — internal types and the request DTO.
- AI usage: feature key `maintenance_invoice_extract`. `assertQuota` runs before
  the call; results are cached per user by the ordered file hashes + lang +
  `car_id` (only detected results are cached); usage is recorded per call.
  Over a limit the scan is refused by the quota check, not answered with an
  empty result.
- Mixed currencies are converted with `ExchangeRateService` (BNR).

**Response contract** — `detected`, `service_type`, `service_category`, `title`,
`notes`, `service_date`, `mileage`, `supplier_name`, `currency`, `parts[]`
(`name`, `code`, `quantity`, `unit_price`, `total`, `source`), `labor[]`
(`description`, `amount`, `source`), `totals` (`parts`, `labor`, `other` — always
0, `discount`, `grand_total`, `documents_total`), `documents[]`, `warnings[]`
(`code`, `params`). Warning codes: `TOTAL_MISMATCH`, `MIXED_CURRENCY`,
`DUPLICATES_MERGED`, `UNREADABLE_DOCUMENT`, `MISSING_PRICES`, `VAT_UNCLEAR`.

**Schema** — `MaintenanceRecord.labor_cost Float?` and `notes String? @db.Text`
(new columns). A part's `price` is the **line total**, not the unit price.

**Frontend** — `history-auto-utility-fe/src/app/features/maintenance/invoice-scan/`
- `app-invoice-scan` child component: file picking, resizes images to 2000px for
  the request only (the originals are kept for upload), emits `applied` and
  `filesChange`, exposes `reset()`.
- `invoice-extraction.service.ts` calls the endpoint with `HttpClient` directly,
  because the generated API client is stale and was not regenerated.
- `add-maintenance-panel` applies the result in `onInvoiceApplied`: scanned parts
  are flagged `scanned` and replaced on re-scan, manually added parts are kept,
  and cost = `grand_total` + manual parts. The labor baseline `_lastLaborCost` is
  reset so later price nudges stay correct. A local `WithInvoiceFields<T>` type
  covers `labor_cost`/`notes` until the client is regenerated.
- Originals are uploaded in `_afterSave` with upload context `maintenance_invoice`
  (`UploadedFile` table, R2). Download goes through `GET /upload/:id/url?download=1`.
- Record detail shows notes, labor and an invoices section; list rows get
  `invoicesCount` from the backend.

**Known limitations**
- Deleting a maintenance record doesn't delete its uploaded files (attachments or
  invoices) — orphaned rows and R2 objects (pre-existing).
- `getFilesForContext` only returns files uploaded by the requesting user, so on
  shared cars another user's invoices aren't listed.
- Scanning is available only in add mode.
- Not yet tested with real invoices on dev at the time of writing.

### Category matching — the only link to a Plan progress bar

There is no relation/junction table between a `MaintenanceRecord` and a Plan
item — `plan-items.util.ts` matches purely by `service_category` string
equality (plus recency). This means a record with an unset/wrong category is
invisible to the Plan page even though it's saved correctly. The category
field and the store-sync fix below both exist to make
sure a record's category is actually set to something meaningful by the time
it's saved.

### Cross-store sync (2026-09-06 fix, `CarDetailsState` copy removed 2026-10-03)

Maintenance records are cached in two separate places: `MaintenanceState.records`
(flat, used by Istoric/add/edit) and `BootstrapState.maintenance`
(`Record<carId, MaintenanceRecordDto[]>`, used live by the Plan page, the car
hub's Istoric tile count and its deadline source). Nothing kept them in sync:
`MaintenanceState`'s create/update/delete-success handlers additionally
dispatch `BootstrapActions.PatchCarMaintenance(carId, recordsForThatCar)`,
which both keeps the Plan page's `combineLatest` off `BootstrapFacade.maintenance$`
current immediately, and (since `MaintenanceComponent.loadAll()` re-hydrates
from that same Bootstrap snapshot on every entry when it's still within its
TTL) stops Istoric from reverting to stale data. A third copy used to live in
`CarDetailsState.maintenanceRecords` (`cars/`'s own state, loaded via a
dedicated per-car fetch, reloaded on every `CarsDetailsComponent.ionViewWillEnter()`
since `IonicRouteStrategy` means its `ngOnInit` route-param subscription won't
re-fire on simple back-navigation to the same car) — removed in the 3d-2
refactor once the car hub's own data (the Istoric tile count, the deadline
source) moved onto `BootstrapFacade.maintenance$` directly: that copy is
already patched by the dispatch above, so the dedicated `cars/`-owned fetch
and its `ionViewWillEnter` reload were redundant, not a second source of
truth that needed preserving.

### Attachment-meta refresh after save (2026-10-07 fix)

`MaintenanceRecordDto.attachmentsCount`/`thumbnailUrl` are computed server-side
by `MaintenanceRecordService._withAttachmentMeta()` — which only the **list**
endpoints run (`GET .../all`, `GET .../car/:carId`, both used at bootstrap).
`POST /maintenance-record`, `PUT /maintenance-record/:id` and even
`GET /maintenance-record/:id` all return the bare record with neither field.
`CreateRecordSuccess`/`UpdateRecordSuccess` push that bare API response
straight into `MaintenanceState.records` (and patch it into
`BootstrapState.maintenance`), so — before this fix — the Istoric list row's
thumbnail/📎 badge (`maintenance.component.html`'s `#recordRow`, bound to
`rec.thumbnailUrl`/`rec.attachmentsCount` via `<app-action-list-row
[imageUrl]>`) stayed on the generic category icon with no count for the rest
of the session, even though the attachment itself saved and loaded correctly
everywhere else (the record detail page, which loads attachments independently
via `UploadService.getFilesForContext`, was never affected). Only a hard
reload (a fresh bootstrap fetch) picked up the correct thumbnail/count.

Fixed by having `add-maintenance-panel.component.ts`'s `_afterSave()` dispatch
`MaintenanceActions.RefreshCarRecords(carId)` (via
`MaintenanceFacade.refreshCarRecords()`) once its attachment upload/delete
`forkJoin` settles — but **only** on the branch where an attachment was
actually added or removed (the existing early-return for "nothing to
upload/delete" skips it, so an ordinary save with no attachment changes still
does zero extra requests — one refresh per save, not one per file, and never
for a save that didn't touch attachments). The action calls
`GET /maintenance-record/car/:carId` (already attachment-meta-enriched) and
`RefreshCarRecordsSuccess` replaces that car's slice of `MaintenanceState.records`
wholesale with the fresh copy, then dispatches the same
`BootstrapActions.PatchCarMaintenance(carId, records)` the create/update/delete
success handlers already use — so `BootstrapState.maintenance` stays
consistent via the identical mechanism, not a second one. A failed refresh is
swallowed (the save itself already succeeded and closed the form; the list
just stays stale until the next full reload, same as before this existed).
Applies to both create and edit (adding/removing attachments on an existing
record goes through the same `_afterSave()` path).

### Currency conversion (BNR) — mirrors Document's premium conversion

A maintenance record's `cost` has its own currency and a RON equivalent,
computed the same way as `Document.premium`/`premium_ron` (see
`features/documents/FEATURE.md`'s "Currency conversion (BNR)" for the full
design — this is a smaller copy of it, not a separate implementation).

- **Frontend:** next to the cost field (all three places it appears in
  `add-maintenance-panel` — the ALIMENTARE/electric layout, the
  ALIMENTARE/fuel layout, and the general repair/maintenance layout — see
  `.amp-currency-dropdown` in the component's SCSS) is an `<app-dropdown>`
  fed by the same `shared/config/currency.config.ts` (`COMMON_CURRENCIES`/
  `DEFAULT_CURRENCY`) the documents form uses. Defaults to RON on a new
  record; an edit loads the record's own stored currency. A fuel/charging
  photo scan (`_scanPhoto`/`_applyReceiptResult`) sets the currency alongside
  the cost, but only when the cost field was still empty (same guard as the
  cost auto-fill itself) and only when the scan actually returned a currency
  — it never overwrites a value the user already typed.
- **Columns on `MaintenanceRecord`** (same names/shapes as `Document`'s,
  except `currency` defaults to `"RON"` instead of being nullable): `currency`,
  `cost_ron`, `exchange_rate`, `exchange_rate_date`, `exchange_rate_source`.
  Computed server-side in `maintenance-record.service.ts`
  (`convertCost`/`recomputeConversionForUpdate`), never accepted from the
  client beyond the plain `currency` string.
- **Transaction date = `service_date`** (there's no separate "issue date" on
  a maintenance record) — the BNR rate in force that day, or the last one
  published before it. Moving `service_date` on an update re-rates the
  conversion; changing an unrelated field does not.
- Maintenance records have **no manual `exchange_rate` override** on create/
  update (unlike documents, which accept one) — every non-RON conversion goes
  through the BNR lookup. This is the one place the two features' DTOs
  differ; add one later if a manual-rate need shows up here too.
- Same failure behavior as documents: if BNR is unreachable or doesn't list
  the currency, the record is still saved with the four conversion columns
  null, logged as a warning, never retried automatically.
- **Anything that sums `cost` across records must use `cost_ron ?? cost`
  instead** — a raw sum would add different currencies together. Fixed at:
  `fleet-cost.service.ts`'s three raw SQL `SUM(...)` queries (business fleet
  cost dashboard), `reports.component.ts`'s `_buildViewModel()` (total cost,
  category breakdown, monthly bars — see `features/reports/FEATURE.md`), and
  `maintenance.component.ts`'s `getYearSummary()` (Istoric's per-year total).
  A single record's own display (history list row, record detail) shows the
  amount in its *own* currency instead — see "Viewing a single record" above.
  The derived price-per-liter/price-per-kWh figures (record detail, and the
  "calculated" hint in the fuel/charging form) follow the same record's/form's
  currency too — `pricePerLiterUnit`/`pricePerKwhUnit` take a `currency` param
  (`{{currency}}/L`, `{{currency}}/kWh`) instead of a hardcoded "RON/L"/"RON/kWh".
- Backfill: on **dev**, the 101 existing records (all RON) were given
  `currency = 'RON'` via the column default and `cost_ron = cost`,
  `exchange_rate = 1` by hand (2026-10-07). Test/prod will need the same
  one-line `UPDATE` when this ships, same as documents' backfill note.

### API client note

`history-auto-utility-fe/api-backend.yaml` (input to `npm run api-gen`) is
badly stale relative to the backend's current `prisma/swagger.yaml`, and a
full regen has previously deleted DTOs still imported elsewhere (missing
`@ApiResponse` decorators on a couple of controllers hide those types from
Nest's swagger reflection — not fixed yet). Because of this,
`POST /maintenance-record/suggest-category` has no frontend caller, so it is not
in the generated client. If a frontend caller is added, it should use the
generated client once `api-backend.yaml` is properly resynced (or call
`HttpClient` directly against `ApiConfiguration.rootUrl` until then).

### AI usage guard

The category-suggestion endpoint (`POST /maintenance-record/suggest-category`)
is covered by the AI usage guard described in `history-auto-utility-be/src/modules/ai-usage/FEATURE.md`. Over a limit it
skips rather than erroring: it returns a `null` suggestion. No frontend code
currently calls this endpoint (see "API client note" above), so the guard applies
to it only for any future caller. The invoice scan (`maintenance_invoice_extract`,
see "Invoice scanning" above) is guarded too and counted per call.

### Known gaps / things not done

- `MaintenanceState`'s dual NGXS provider registration (see Frontend above)
  is a pre-existing architectural quirk this change didn't introduce or fully
  resolve — it happens to be harmless because NGXS state is a global
  singleton regardless of how many `forFeature` calls register it.
- Cars created *before* the 2026-10-07 `createCar` fix above and that already
  had `last_oil_service_date`/`_mileage` set never got a matching
  `OIL_CHANGE` record backfilled — deliberately not done as part of that fix
  (read-only check only, no data migration). As of 2026-10-07 there were 2
  such cars in `hau_db_dev`; their Plan oil-change tile still shows
  "untracked" until either backfilled by hand or a real oil-change record is
  logged for them.
- `car.service.ts`'s synthetic `OIL_CHANGE` record created from the add-car
  form's last-oil-service fields (see above) is inserted via a raw
  `tx.maintenanceRecord.create` with `cost: 0` and no `currency`/conversion
  fields set explicitly — it gets `currency: 'RON'` from the column default
  but `cost_ron` stays null. Harmless (every cost-summing site falls back to
  `cost` when `cost_ron` is null, and the cost itself is always 0 here), but
  worth knowing if that creation path is ever changed to carry a real cost.
