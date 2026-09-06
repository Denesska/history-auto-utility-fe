# Maintenance

## Functionality

Maintenance covers logging service/repair/fuel history for a car and tracking
when the next service of each kind is due.

### Adding or editing a record

- A single form covers repairs, scheduled maintenance, improvements, "passion"
  spending, and fuel/charging fill-ups. Fields: vehicle, date, title,
  **category**, mileage, cost, whether it was done yourself (DIY), whether
  it's a reimbursable company expense, parts used, an optional reminder date,
  and photo/document attachments.
- **Category** says which kind of service this is (oil, brakes, tires, engine,
  inspection, battery, filters, lights, transmission, fluids, or other) — this
  is what ties a record to the matching progress bar on the Plan page. As you
  type the title or add parts, the category is **suggested automatically** in
  the background (matching against the title and part names, with an AI check
  as a second opinion when nothing obvious matches) and pre-filled with an
  "Auto-suggested" tag — you can always change it, and once you do, it stops
  auto-changing.
  - A fuel/charging entry ("Alimentare"/"Încărcare") is always categorized as
    fuel automatically — the category picker doesn't appear for it.
- Fuel/charging entries have their own simplified layout: no title/category/
  parts, just quantity (liters or kWh), cost, date and mileage — with an
  option to snap a photo of the pump display, a printed receipt, or the
  odometer, which fills in the fields automatically. If a receipt includes
  non-fuel items (car wash, shop purchases), you're warned to double-check
  the cost. A hybrid/plug-in car gets a small switch to say whether this
  fill-up was fuel or a charge.
- Parts used are typed in freely (name, part code, quantity, price) — there's
  no parts catalog to pick from. Adding a priced part nudges the total cost
  up as a convenience; you can still edit the total by hand.
- A record can carry photos/documents as attachments, and an optional
  reminder date (e.g. an upcoming inspection deadline).
- A record you add or edit shows up immediately everywhere it matters — the
  history list, the Plan page's progress bars, and the car's own "upcoming
  deadlines" widget — with no manual refresh needed.

### History (Istoric)

- Lists every record for a car (or across all your cars, from the general
  Maintenance tab), grouped by year, filterable by category, with running
  totals.

### Plan

- One progress bar per tracked category (oil, brakes, tires, etc.), each
  showing how close you are — by distance or by time, whichever is sooner —
  to the next service of that kind, based on the most recent matching record
  you've logged. A category with no record logged yet shows as "not tracked."
- A usage profile (Normal / Intensive / Occasional) scales every interval up
  or down to match how hard the car is actually driven. You can also create
  your own named profiles with custom per-category intervals, or turn
  tracking off entirely for a category you don't care about (e.g. you never
  log fluid top-ups).
- The car's own hub page shows a condensed version of the same information
  as an "upcoming deadlines" widget, alongside document deadlines (insurance,
  inspection, etc.), and lets you manually reorder or dismiss individual
  items.

## Implementation

**Frontend** — `history-auto-utility-fe/src/app/features/maintenance/`
- `maintenance.component.ts/.html` — Istoric list; works both as the general
  `/main/maintenance` route and, scoped to one car, as `cars/details/:id/istoric`.
- `add-maintenance-panel/` — the create/edit form (`AddMaintenancePanelComponent`).
  Notable pieces: `skipCategoryPicker`/`isFuelEntry` (ALIMENTARE short-circuit,
  also forces `service_category` to `COMBUSTIBIL`), the category
  auto-suggestion wiring (`_runCategorySuggestion`/`_applySuggestion`,
  debounced off description changes and part add/remove), and `_scanPhoto`
  (fuel receipt/odometer photo scanning with retry/backoff on a transient AI
  failure).
- `maintenance-form/` — thin route wrapper hosting the panel at `/main/maintenance/add`.
- `plan/` (`MaintenancePlanComponent`) — the progress-bar page. Reads car/
  records/intervals/settings **from `BootstrapFacade`, not `MaintenanceState`**
  — this is why it updates live the moment `BootstrapState.maintenance` is
  patched, with no navigation needed.
- `car-maintenance-settings-panel/` — per-category tracked on/off + custom
  interval overrides, and named profile management.
- `record-detail/` — read-only view of one record.
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
- `shared/utils/deadline-items.util.ts` (`buildDeadlineItems`) — feeds the car
  hub's combined document+maintenance deadline widget.
- `shared/utils/service-category-suggestion.util.ts` (`suggestServiceCategory`)
  — zero-network Romanian keyword classifier, the "rules" half of category
  auto-suggestion. Returns `null` when nothing matches (COMBUSTIBIL/OTHER are
  never inferred), in which case the panel falls back to the AI endpoint.
- `core/maintenance-category-suggestion.service.ts` — thin AI-fallback wrapper
  around `POST /maintenance-record/suggest-category`. Calls `HttpClient`
  directly rather than through the generated API client (see note below).
- `shared/component/dropdown/dropdown.component.ts` (`app-dropdown`) — the
  category picker widget; also used by the Plan page's car/profile pickers.

**Backend** — `history-auto-utility-be/src/modules/maintenance-record/`,
`car-maintenance-settings/`, `car-maintenance-profiles/`
- Prisma models: `MaintenanceRecord` (`service_type`, `service_category`
  — defaults to `OTHER` when omitted —, `mileage`, `cost`, `is_diy`,
  `fuel_liters`/`energy_kwh`, `expiry_date`, `is_company_expense`),
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
- `category-suggestion.service.ts` (`CategorySuggestionService`) — the AI
  fallback for category suggestion. Same construction/error-handling pattern
  as `document/gemini-extraction.service.ts` (`GoogleGenAI` client from
  `GEMINI_API_KEY`, silently disabled if unset, 503→`CategorySuggestionServiceUnavailableError`).
  Exposed via `POST /maintenance-record/suggest-category` on
  `MaintenanceRecordController` — stateless, suggestion only, doesn't save.

### Category matching — the only link to a Plan progress bar

There is no relation/junction table between a `MaintenanceRecord` and a Plan
item — `plan-items.util.ts` matches purely by `service_category` string
equality (plus recency). This means a record with an unset/wrong category is
invisible to the Plan page even though it's saved correctly. The category
field, its auto-suggestion, and the store-sync fix below all exist to make
sure a record's category is actually set to something meaningful by the time
it's saved.

### Cross-store sync (2026-09-06 fix)

Maintenance records are cached in three separate places: `MaintenanceState.records`
(flat, used by Istoric/add/edit), `CarDetailsState.maintenanceRecords`
(single car, used by the car hub's deadline widget), and
`BootstrapState.maintenance` (`Record<carId, MaintenanceRecordDto[]>`, used
live by the Plan page). Nothing kept them in sync: `MaintenanceState`'s
create/update/delete-success handlers now additionally dispatch
`BootstrapActions.PatchCarMaintenance(carId, recordsForThatCar)`, which both
keeps the Plan page's `combineLatest` off `BootstrapFacade.maintenance$`
current immediately, and (since `MaintenanceComponent.loadAll()` re-hydrates
from that same Bootstrap snapshot on every entry when it's still within its
TTL) stops Istoric from reverting to stale data. `CarsDetailsComponent.ionViewWillEnter()`
separately reloads `CarDetailsState.maintenanceRecords` on every re-entry,
since `IonicRouteStrategy` means its `ngOnInit` route-param subscription
won't re-fire on simple back-navigation to the same car.

### API client note

`history-auto-utility-fe/api-backend.yaml` (input to `npm run api-gen`) is
badly stale relative to the backend's current `prisma/swagger.yaml`, and a
full regen has previously deleted DTOs still imported elsewhere (missing
`@ApiResponse` decorators on a couple of controllers hide those types from
Nest's swagger reflection — not fixed yet). Because of this,
`POST /maintenance-record/suggest-category` was deliberately **not** added
through a full client regen — `maintenance-category-suggestion.service.ts`
calls `HttpClient` directly against `ApiConfiguration.rootUrl` instead. If
`api-backend.yaml` is ever properly resynced, this endpoint could be migrated
to the generated client like the rest of the module.

### Known gaps / things not done

- The keyword dictionary in `service-category-suggestion.util.ts` is a
  starting set, not exhaustive — unmatched phrasing falls through to the AI
  endpoint every time until someone extends it.
- The suggestion UI doesn't surface confidence — a low-confidence AI guess
  looks identical to a confident heuristic match, both just show "Auto-suggested."
- `MaintenanceState`'s dual NGXS provider registration (see Frontend above)
  is a pre-existing architectural quirk this change didn't introduce or fully
  resolve — it happens to be harmless because NGXS state is a global
  singleton regardless of how many `forFeature` calls register it.
