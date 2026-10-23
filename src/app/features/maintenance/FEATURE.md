# Maintenance

## Functionality

Maintenance covers logging service/repair/fuel history for a car and tracking
when the next service of each kind is due.

### Adding or editing a record

- **Unsaved changes:** closing the form (X button, device/browser Back, or leaving the page)
  after entering or changing anything asks "Discard changes?" with Stay / Discard. If nothing
  was changed the form closes immediately. After a successful save there is no prompt.
- A single form covers repairs, scheduled maintenance, improvements, "passion"
  spending, and fuel/charging fill-ups (fuel/charging has its own layout, see
  below). For all other entries the form is organized into cards, in this order:
  1. **Invoice** — the scan (see "Scanning invoices and service reports" below;
     shown only when adding);
  2. **What was done** — title, **"What was changed?"** (see below), and the
     parts used (see below);
  3. **When** — date and mileage;
  4. **Who & cost** — whether you did the work yourself, labor (what the
     workshop charged, kept separately from the parts; starts at 0), the total
     cost with a **currency** picker next to it (RON, EUR, USD or MDL, RON by
     default; starts at 0), whether it's a reimbursable company expense, and the
     **service** (workshop) field (see below);
  5. **Notes** — a multi-line field for anything else about the work;
  6. **Expense type** (see below);
  7. **Attachments** — photo/document attachments;
  8. **Custom reminder** (see below).
- A cost in any currency other than RON is **converted to RON automatically**
  at the official BNR exchange rate on the record's service date, the same
  way a document's premium is (see the Documents feature) — the record keeps
  the original amount, the RON equivalent, the rate used and the date of that
  rate. Editing a record later only re-converts it if you change the cost,
  the currency or the date. If BNR can't be reached, the record is still
  saved, just without the RON equivalent.
- **"I did it myself"** is a checkbox in the "Who & cost" card. Ticking it sets
  the labor to 0 and disables it, and clears and disables the service field.
  Labor stays visible in every case.
- **Service (workshop) field.** In a business account, it searches your
  organization's list of workshops and you pick one; the list itself is managed
  separately by people with the right permissions, not from this form. In a personal account, you type the workshop's name freely, and
  the suggestions are the workshop names you have used before, newest first. The
  field is optional. The record's detail page shows the name next to "Performed
  by". The invoice scan fills this field in.
- **"What was changed?"** is the only way a record says what work was done. It
  is a compact section with three parts:
  - **Ticked items** show as small chips you can remove.
  - **Suggestions:** when nothing is ticked yet, up to three items that are
    overdue or due soon are offered, each with a coloured dot showing its status.
  - **"+ Add item"** opens a sheet with the full checklist, grouped into
    **Oils & fluids**, **Filters**, **Other** and **Repairs**. Each tracked item
    in the checklist shows a status dot.
    A **Done** button is pinned at the bottom of the sheet, always visible however
    long the list is; it keeps the selection and closes the sheet.
  Tick every item this service actually replaced or serviced — one record can
  tick several (e.g. engine oil and air filter during the same visit). Ticking a
  Plan item restarts its countdown in the Plan from this record's date and
  mileage. Items that aren't tracked yet can be ticked too. This section is
  hidden for fuel/charging entries.
- **Repairs** are seven items: brake pads and discs, battery, lights and bulbs,
  suspension and steering, engine repair, bodywork / paint, and electrical /
  electronics. They have no maintenance interval, so they are recorded in the
  history only: no Plan bar, no reminder, no setting, and they are never
  suggested. Tick them in the Repairs group when a service involved them.
- **Other job…** is a field in "What was changed?" for work that fits none of the
  options. Each job you type is added as a chip. You can add up to 10 such jobs
  per record, each up to 60 characters; repeated jobs are ignored. Like the
  repairs, custom jobs are recorded in the history only. A record whose only
  work is custom jobs counts as a Repair expense (unless the invoice says
  otherwise).
- **Category** says which kind of service this is (oil, brakes, tires, engine,
  inspection, battery, filters, lights, transmission, fluids, or other). You
  don't pick it in the form. It is used only for the history icons and filters
  and for the cost reports, and it is filled in automatically:
  - from the first ticked Plan item;
  - otherwise from the first ticked repair item;
  - otherwise "Other", or the category suggested by invoice scanning on a new
    record.
  - Editing a record with nothing ticked keeps its existing category.
  - A fuel/charging entry ("Alimentare"/"Încărcare") keeps its own fuel category
    and doesn't show the "What was changed?" section.
- **Expense type** is the next-to-last section of the form, with the hint "Used to group
  costs in reports — pre-filled for you". Its choices are Maintenance, Repair,
  Improvement and Passion; fuel is not offered here. Until you change it
  yourself, it is filled in automatically, in this order:
  - the type the invoice scan finds;
  - otherwise "Repair", if only repair work is ticked (repairs and custom jobs);
  - otherwise "Maintenance", if any item is ticked.
  Once you pick a type yourself, it is no longer changed automatically. Editing
  an existing record keeps its type.
- Fuel/charging entries are started from their own action, keep their own
  simplified layout, and show no expense-type picker: no title/category/
  parts, just quantity (liters or kWh), cost, date and mileage — with an
  option to snap a photo of the pump display, a printed receipt, or the
  odometer, which fills in the fields automatically — including the currency,
  when the photo shows one. If a receipt includes non-fuel items (car wash,
  shop purchases), you're warned to double-check the cost. A hybrid/plug-in
  car gets a small switch to say whether this fill-up was fuel or a charge.
- **Parts used** are typed in freely (name, part code, quantity, price) — there's
  no parts catalog to pick from. Each part has its own price and currency; the
  currency defaults to the entry's currency. Scanned parts take the invoice's
  currency.
  - Tap a part to edit its name, code, quantity, price or currency, or to remove it.
  - Adding, editing or removing a priced part changes the total cost when no manual
    parts total is set; a part in another currency is converted at the BNR rate of
    the service date (left out if no rate is available).
  - The parts total is a short line right under the parts list in "What was
    done", e.g. "Parts: 350 RON". It is always one amount in the entry's currency;
    if some parts are in another currency it reads "Parts: ≈ 1,234 MDL" with a note
    that they were converted at the BNR rate (or a warning if a rate is missing).
  - A pencil button next to the line opens a small sheet with Amount (in the
    entry's currency) and Save, to set the parts total by hand. While a manual
    total exists the line shows it, marked "(edited)", and the parts no longer show
    their individual prices (the price field in a part's sheet still shows the old
    price with a "may not be exact" hint). "Reset to automatic" brings back the
    calculated sum and the prices. A new invoice scan never overwrites a manual total.
  - Part currencies are limited to RON, EUR, USD and MDL.
  - Labor has no currency of its own: it is always in the entry's total-cost currency.
- A record can carry photos/documents as attachments.
- **Custom reminder** is an optional switch at the end of the form. Turning it
  on asks for a **title** and a **date** (e.g. "Inspection deadline"); both are
  required while it is on. Turning it off clears both.
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
  - a short title and a 1–2 sentence description of the work done (kept in the
    notes field), written in the language the app is currently set to. Part
    names stay as they are written on the invoice;
  - the expense type (see above), and the suggested category (used on save when
    nothing is ticked);
  - the **"What was changed?"** items it finds on the documents, pre-ticked,
    repairs included (Romanian service terms are understood; brake pads or discs
    are not read as brake fluid, and a seasonal tyre swap is not read as new
    tyres);
  - up to 5 **custom jobs** for work that fits none of the options, added as
    custom chips (see "Other job…" above);
  - the date, the mileage (only if that field is still empty), the currency, and
    whether the work was done yourself (DIY);
  - the workshop, in the service field: in a business account, the matching
    supplier from your directory when one already exists; in a personal account,
    the workshop's name as written on the invoice;
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
  replaced; parts you added by hand are kept. Analyze never overwrites a value
  you typed yourself: a field is filled only if it is still empty, or it was
  filled by an earlier scan, or it holds a default (date, currency, DIY).
  Everything the scan fills in stays editable until you save.
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

- With more than one car, the car picker's first option is "All cars", which lists the records
  of every car together (the mileage card is hidden then, and each row shows its car's name in a small muted label). It is the default when History is
  opened without a specific car (e.g. from an "All cars" bottom-bar slot). Adding a record while
  "All cars" is selected opens the form with the first car preselected; the car can be changed
  in the form.

- Lists every record for a car (or across all your cars, from the general
  Maintenance tab), grouped by year, filterable by category, with running
  totals. Each row shows its cost in its own currency; year/period totals and
  running totals are always in RON (see "Currency conversion" below).
- The "last oil change" figure in history is based only on records that ticked
  Engine oil.

### Plan

The Plan tracks concrete items rather than broad categories. The items are:

- **Engine oil and oil filter** — always changed together, one item.
- **Air filter**, **cabin filter**, **fuel filter**.
- **Gearbox oil**, **differential / transfer oil**.
- **Brake fluid**, **coolant**, **power-steering fluid**, **A/C service**.
- **Tyres** — tracked by age, six years from fitting.
- **ITP** — the periodic technical inspection.
- **Timing belt kit** (belt, tensioner and usually the water pump) — every
  100,000 km or 5 years, not for electric cars. Some engines have a timing chain
  instead; the item's hint says to ignore it in that case (turn it off in the
  Plan settings).

Repairs (brake pads and discs, battery, lights and bulbs, suspension and
steering, engine repair, bodywork / paint, electrical / electronics) are not Plan
items. They are recorded in the history only (see "What was changed?" above).

An oil change resets only the engine oil and oil filter. The other filters are
separate items and are not reset by an oil change.

Which items apply depends on the car:

- **Electric cars** have no engine oil, air filter or fuel filter, and gearbox
  oil is off by default.
- **Fuel filter** is on by default only for **diesel** cars, measured every 2
  oil changes (or 24 months, whichever comes first). For **petrol** cars it is
  off by default and, when switched on, is due at 60,000 km or 60 months.
- **Gearbox oil** is due every 80,000 km for manual and every 60,000 km for
  automatic cars, or every 60 months.
- **Differential oil** applies only to rear-wheel and four-wheel-drive (4x4)
  cars.
- **Power steering** and **A/C** are off by default.

Engine oil is due every 12 months in every case, and the distance depends on
the oil viscosity chosen for the car (on the car form, or in Plan settings):

| Oil viscosity | Due every |
|---|---|
| 0W-16, 0W-20, 0W-30, 5W-20 | 15,000 km |
| 0W-40, 5W-30, 5W-40 | 12,000 km |
| 10W-40, 10W-60, 15W-40, 20W-50 | 8,000 km |
| Unknown / not set | 10,000 km |

The other default intervals are: air filter 30,000 km or 24 months; cabin
filter 15,000 km or 12 months; coolant 100,000 km or 60 months; brake fluid 24
months; A/C service 24 months; ITP 12 months.

- The **car form** has two new optional fields: **Drivetrain** (front-wheel,
  rear-wheel or 4x4) and **Engine oil viscosity**. The drivetrain decides
  whether differential oil applies; the viscosity sets the engine oil distance.
- Each tracked item on the Plan page shows a short hint of what it is, when it
  was last done (date and mileage), what remains (kilometres, a date, or "N of
  M oil changes" for items measured in oil changes), and a status. A tracked
  item with no record logged yet shows as "not tracked" until you log one.
- **Mark as done** on an item opens the add form with that item already ticked
  in "What was changed?", so the record you save restarts that item's
  countdown.
- A usage profile (Normal / Intensive / Occasional) scales the kilometre
  intervals of every item up or down to match how hard the car is actually
  driven. Month and oil-change intervals are not scaled.
- **Plan settings** lists only the items that apply to the car. Items you are
  not tracking sit in a separate "Not tracked" section, from where you can
  switch them on. For each item you can change its kilometre interval, its
  month interval and, for items measured in oil changes (fuel filter on the
  oil-change basis, for example), the number of oil changes. You can also set
  the engine oil viscosity here. Custom interval changes apply only inside a
  named custom profile you create — the built-in profiles keep their default
  intervals.
- The Plan also drives reminders. Every morning the app notifies you (in-app, push, email) when a tracked item
  is about to be due, becomes due, or stays overdue, and on the custom reminder dates you set on records (see
  "Maintenance reminders" in the maintenance-reminders feature notes). Items that measure
  by oil changes warn "at the next oil change". Switchable in Settings.
  Reminder notifications and emails for a custom reminder use its title.
- **Custom reminders** appear on the Plan page in their own "Custom reminders"
  section, shown only when there is at least one. It has one bar per entry that
  has a reminder date:
  - the label is the reminder's title (or, if it has none, the entry's
    description or category);
  - the progress runs from the entry's date to the reminder date;
  - the status is OK, due soon (within 14 days) or overdue, with a "Custom"
    badge;
  - tapping a bar opens that entry.
  An overdue reminder stays until its date is cleared or changed on the entry.
  Custom reminders have no "Mark as done".
- The car's own hub page shows a condensed version of the same information
  as an "upcoming deadlines" widget, alongside document deadlines (insurance,
  inspection, etc.), and lets you manually reorder or dismiss individual
  items.
- If you enter a last oil change (date and/or mileage) when adding a car
  (Garaj → Adaugă vehicul), or later when editing the car's details, an "Oil
  change" entry is added to History automatically. The engine oil item in the
  Plan starts counting down from it right away, without a page reload, so you
  don't need to log a first oil-change record yourself. If only the mileage is
  given, the entry is dated the day it was entered. When editing, a new entry is
  added only if the oil change you entered is newer than the car's latest one;
  nothing is duplicated.

## Implementation

**Public API: `index.ts`** exports `MAINTENANCE_ROUTES`, `SERVICE_TYPE_CONFIG`/`serviceTypeConfig`, `CarMaintenanceSettingsService`, `CarMaintenanceProfilesService`, `MaintenanceFacade`, `MaintenanceState` and `provideMaintenanceCarPage` — consumed by `cars/` (route paths; `car-wishlist-panel.component.ts` also still imports `SERVICE_TYPE_CONFIG`/`serviceTypeConfig` for a wish's service-type label/icon, a separate, benign static-config coupling the 3d-2 data-decoupling refactor below didn't touch), `reports/` (service-type config) and the shell (facade/state, and the car-page contribution). The route array and lazy-loaded pages are not exported.

**Car page contribution**: `maintenance.car-page.ts` (`provideMaintenanceCarPage()`, see `core/car-page/FEATURE.md`) contributes the Istoric and Plan hub tiles/subnav entries, the add-maintenance and add-fuel-entry "add" actions, and a `CarDeadlineSource` (`id: 'maintenance'`) for the car hub's "Stare & scadențe" card. Istoric's live count and the deadline source both read `BootstrapFacade.maintenance$` (keyed by car id, already loaded at bootstrap for every accessible car) instead of `cars/`'s own state — `CarDetailsFacade.maintenanceRecords$` (and `carDocuments$`, documents' equivalent) was removed from `cars/` entirely in the 3d-2 refactor, so `cars-details.component.ts` no longer loads or even knows the shape of either feature's data. The deadline source's `buildMaintenanceDeadlineItems()` (`maintenance-deadline-items.util.ts`) is the maintenance half of the old combined `shared/utils/deadline-items.util.ts#buildDeadlineItems`; its `dismiss()` turns an item's `tracked` setting off (auto-creating a default profile on first dismiss, same as the Plan settings panel) via `CarMaintenanceProfilesService`/`CarMaintenanceSettingsService`, which this component used to do itself. Istoric (and its record detail) and Plan used to be routes inside `cars/cars.routes.ts`; they now live in `maintenance.car-tab.routes.ts`, mounted by the shell at the same path prefix `cars/cars.routes.ts` mounts at (`features/main/main.routes.ts`) — same components (`MaintenanceComponent`, `MaintenanceRecordDetailComponent`, `MaintenancePlanComponent`), just owned and routed from here instead.

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

**Plan model and catalog.** The Plan items are the Prisma enum `PlanItemKey` (ENGINE_OIL, AIR_FILTER, CABIN_FILTER, FUEL_FILTER, GEARBOX_OIL, DIFFERENTIAL_OIL, BRAKE_FLUID, COOLANT, POWER_STEERING_FLUID, AC_SERVICE, TIRES, INSPECTION, TIMING_BELT), plus the work items BRAKE_PARTS, BATTERY, LIGHTS, SUSPENSION, ENGINE_REPAIR, BODYWORK and ELECTRICAL; the enum and its TS mirror on the frontend both include them. `WORK_ITEM_KEYS` (the seven work items) is exported from both catalogs below. `getPlanItemDefinitions` and `PLAN_ITEM_KEYS` never include work items, so Plan bars, settings, reminders and deadlines ignore them. Their definitions live in two identical catalogs that must be changed together: BE `history-auto-utility-be/src/modules/maintenance-record/plan-item.catalog.ts` and FE `src/app/shared/config/plan-item.catalog.ts`. The catalog provides:
- `OIL_VISCOSITIES` (the eleven allowed values) and `engineOilKmFor(viscosity)` — 15,000 / 12,000 / 8,000 km by the table above, 10,000 km for null or unknown.
- `getPlanItemDefinitions(car: {fuel_type, transmission, drivetrain, engine_oil_viscosity})` — returns, per applicable item, `{ key, km, months, oilChanges, trackedByDefault }`. Items that don't apply to the car are omitted entirely. Rules:

| Item | Applies when | km | months | oil changes | On by default |
|---|---|---|---|---|---|
| ENGINE_OIL | not electric | `engineOilKmFor(viscosity)` | 12 | – | yes |
| AIR_FILTER | not electric | 30,000 | 24 | – | yes |
| CABIN_FILTER | always | 15,000 | 12 | – | yes |
| FUEL_FILTER | not electric | diesel: none; otherwise 60,000 | diesel: 24; otherwise 60 | diesel: 2; otherwise none | diesel only |
| GEARBOX_OIL | always | manual 80,000; otherwise 60,000 | 60 | – | not electric |
| DIFFERENTIAL_OIL | rear-wheel or 4x4 | 60,000 | 60 | – | yes |
| BRAKE_FLUID | always | – | 24 | – | yes |
| COOLANT | always | 100,000 | 60 | – | yes |
| POWER_STEERING_FLUID | always | 100,000 | 60 | – | no |
| AC_SERVICE | always | – | 24 | – | no |
| TIRES | always | – | 72 | – | yes |
| INSPECTION | always | – | 12 | – | yes |
| TIMING_BELT | not electric | 100,000 | 60 | – | yes (a chain engine is simply ignored by the user; the hint says so) |

- `PLAN_ITEM_TO_CATEGORY` maps every item, work items included, to a record category: ENGINE_OIL → oil change, air/cabin/fuel filter → filter service, gearbox/differential → transmission, brake fluid → brakes, coolant/power steering/A/C → fluids, tyres → tyre service, inspection → inspection, TIMING_BELT → engine service, BRAKE_PARTS → brake service, BATTERY → battery service, LIGHTS → light service, SUSPENSION → other, ENGINE_REPAIR → engine service, BODYWORK → other, ELECTRICAL → other. `deriveCategoryFromItems(items)` picks the first Plan item in enum order, else the first work item, else OTHER. It feeds history and cost reports only. Custom jobs (`custom_items`) are not work items and never affect the category.
- FE `PLAN_ITEM_CONFIG` holds the labels and icons of each item (translated via Transloco).

Usage profiles scale only the km interval (`multiplier`); months and oil-change counts are never scaled.

**Models (Prisma).**
- `Car.drivetrain` (`DrivetrainType`: FRONT / REAR / ALL_WHEEL, nullable) and `Car.engine_oil_viscosity` (`String?`, one of `OIL_VISCOSITIES`, validated with `@IsIn` in the DTO).
- `MaintenanceRecordPlanItem` — junction table between a `MaintenanceRecord` and a `PlanItemKey`. Unique per (record, item), cascade-deleted with the record, indexed by item. Exposed on the record DTO as `plan_items: PlanItemKey[]`.
- `CarMaintenanceSetting` is keyed by `(car, user, profile, item)` (it used to be keyed by category). Fields: `tracked`, `custom_interval_km`, `custom_interval_months`, `custom_interval_oil_changes`. It is sparse: a missing row means the catalog's `trackedByDefault` with no custom intervals.
- `MaintenanceProfile` — the named per-car/user profile container, unchanged.
- The old `MaintenanceRecord.service_category` column stays (defaults to `OTHER` when omitted) and is used for history and cost reports only.

**Linking records to the Plan.** A record is linked to a Plan item only through `MaintenanceRecordPlanItem`. Matching is by item, not by category: a record that ticks several items fills several bars. The category is never used by the Plan.

**Due math (per item).**
- "Last done" = the most recent record (by `service_date`, tie-broken by mileage) linked to the item.
- km progress = (current mileage − last done mileage) / km interval; months progress = elapsed months / month interval; oil-change progress = number of ENGINE_OIL-linked records with a `service_date` strictly after the last done record's date, divided by the oil-change interval.
- progress = the maximum of the dimensions defined for the item.
- Frontend: `history-auto-utility-fe/src/app/shared/utils/plan-items.util.ts` (`buildPlanItems` for tracked items, `listUntrackedPlanItems` for the "Not tracked" section). Mirrored server-side in `history-auto-utility-be/src/modules/maintenance-record/plan-due.util.ts` (`computePlanDueItems`) for the daily reminder job, which uses the default ("Normal") profile and ignores custom intervals (see `maintenance-reminders/FEATURE.md`). Change the rules in both places.

**API.**
- `POST` / `PUT /maintenance-record` take `plan_items?: PlanItemKey[]` (array, each value an enum member, unique). On update, a provided array replaces the record's set wholesale; an omitted one leaves it unchanged. Category resolution on the backend: **create** keeps `COMBUSTIBIL`; otherwise a non-empty `plan_items` derives the category, else the sent `service_category`, else `OTHER`. **Update** derives the category when `plan_items` is non-empty (unless `COMBUSTIBIL`); otherwise it keeps the record's existing category unless one is sent.
- `POST` / `PUT /maintenance-record` also take `custom_items` and `service_name` (see "Custom jobs" and "Service field" below), and `supplier_id` for business records.
- All record responses (single record, list endpoints, bootstrap) carry `plan_items`.
- Settings: `PUT car/:carId/maintenance-settings/:item` (item = `PlanItemKey`); the body accepts `custom_interval_oil_changes`. The setting DTO returns `item` (instead of category), `interval_oil_changes` and `is_custom_oil_changes`.
- Bootstrap no longer returns `maintenanceIntervals`; the default intervals come from the catalog on the frontend and the backend.
- Car DTOs (create / update / response) carry `drivetrain` and `engine_oil_viscosity`.
- Invoice extraction returns `plan_items`, filtered to the Plan items applicable to the car plus all `WORK_ITEM_KEYS` (always applicable). Cached invoice results from before this change have none, so they must be re-scanned to pre-tick anything.

**Frontend Plan pieces.**
- `add-maintenance-panel/` — `@Input() presetPlanItems: PlanItemKey[]` pre-ticks items when a new record opens. The "What was changed?" chips and suggestions use the Normal profile to compute each item's status. The Plan page's active profile is component-local state and is not shared with the panel. The section is hidden for fuel/charging entries.
- `maintenance-form/` (route wrapper for `/main/maintenance/add`) reads the `planItems` query parameter and passes it to the panel as `presetPlanItems`.
- "Mark as done" on the Plan page navigates to the global add route with `?carId=&planItems=KEY`.
- `plan/` (`MaintenancePlanComponent`) — the progress-bar page. Reads car, records and settings **from `BootstrapFacade`, not `MaintenanceState`** — this is why it updates live the moment `BootstrapState.maintenance` is patched, with no navigation needed. Shows tracked items as progress bars and untracked ones only in settings.
- `car-maintenance-settings-panel/` — per-item tracked on/off, km/month/oil-change overrides, the engine oil viscosity picker, and named profile management. Each interval row saves itself inline (row-level Cancel/Save), so the panel has no page-level save — only a close button, in `fspStart` (moved there from `fspEnd` on 2026-09-09 so close is on the left everywhere).
- `shared/component/dropdown/dropdown.component.ts` (`app-dropdown`) — used for the record form's currency picker, the Plan page's car/profile pickers and the viscosity picker.

**Frontend** — `history-auto-utility-fe/src/app/features/maintenance/`
- `maintenance.component.ts/.html` — Istoric list; works both as the general
  `/main/maintenance` route and, scoped to one car, as `cars/details/:id/istoric`.
- `add-maintenance-panel/` — the create/edit form (`AddMaintenancePanelComponent`).
  Notable pieces: `isFuelEntry` (ALIMENTARE short-circuit: hides the "What was
  changed?" section and forces the category to `COMBUSTIBIL`), `_categoryForSave`
  (applies the same derivation rules as the backend; the hidden
  `service_category` control only holds `COMBUSTIBIL` or the invoice suggestion),
  the "What was changed?" chips, suggestions and their "+ Add item" sheet (built on
  the panel's own `amp-part-sheet` pattern, because no shared sheet component
  exists), the "Other job…" custom-job chips (`custom_items`), the service field
  (`<app-autocomplete>`, see "Service field" below), part chips that open the part
  sheet in edit mode, and `_scanPhoto`
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
- `plan/` (`MaintenancePlanComponent`) — see "Frontend Plan pieces" above.
- `car-maintenance-settings-panel/` — see "Frontend Plan pieces" above.
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
  concern." Neither links a record to the Plan; that is done only by the
  ticked Plan items (see "Linking records to the Plan").
- `shared/utils/plan-items.util.ts` (`buildPlanItems`, `listUntrackedPlanItems`) — the progress-bar math (see "Due math" above).
- `maintenance-deadline-items.util.ts` (`buildMaintenanceDeadlineItems`, this
  feature's own file) — the maintenance half of the car hub's deadlines card;
  `shared/utils/deadline-items.util.ts` only keeps the generic
  `CarDeadlineItem` shape and ordering math now (see `core/car-page/FEATURE.md`).
- Backend endpoint POST /maintenance-record/suggest-category (category-suggestion.service.ts, Gemini) exists but currently has no frontend caller.

**Backend** — `history-auto-utility-be/src/modules/maintenance-record/`,
`car-maintenance-settings/`, `car-maintenance-profiles/`
- Prisma models: `MaintenanceRecord` (`service_type`, `service_category`
  — defaults to `OTHER` when omitted —, `mileage`, `cost`, `currency`
  (defaults `"RON"`), `cost_ron`/`exchange_rate`/`exchange_rate_date`/
  `exchange_rate_source` (RON conversion, see "Currency conversion" below),
  `is_diy`, `labor_cost`/`notes` (see "Invoice scanning" below), `fuel_liters`/`energy_kwh`, `expiry_date`, `is_company_expense`,
  `supplier_id` — nullable FK into the supplier directory, see
  `features/supplier/FEATURE.md`; `onDelete: SetNull`, and the `plan_items`
  relation to `MaintenanceRecordPlanItem`,
  `service_name` (`String?`, max 80, the free-typed workshop name used by personal accounts, see "Service field" below),
  `custom_items` (`String[] @default([])`, see "Custom jobs" below)),
  `MaintenancePart` (free-typed `name`/`code`/`quantity`/`price`/`currency`, no catalog,
  cascade-deleted with the record and replaced wholesale on every update;
  `currency` is `String?`, where null means the record's currency). The
  record's parts total is `parts_cost Float?` + `parts_cost_currency String?`;
  both null means automatic (the sum of the parts, converted into the record currency). A null
  `parts_cost` forces a null currency. Both are validated with
  `@IsIn(INVOICE_CURRENCIES)` from `invoice-extraction.types.ts`, and `parts_cost`
  has `@Min(0)`. On update, both are left unchanged when not sent.
  Frontend (`add-maintenance-panel`): `partsTotal` / `autoPartsTotal` convert the
  priced parts into the record currency via BNR rates (see "Currencies of labor,
  parts and the parts total"); `_partNudge` (the cost adjustment on part
  add/edit/remove, async) adds the converted price unless an override exists;
  `partCurrencyOptions` is fixed to
  `COMMON_CURRENCIES`. On save, a part currency outside that list is sent as
  null, and the override currency is the record currency (null if outside it). A part whose currency
  equals the record currency is stored without one, so it follows later changes
  to the record currency. The parts-total sheet reuses the `amp-part-sheet`
  pattern.
  `CarMaintenanceSetting` (per-`(car, user, profile, item)` override, see "Models" above),
  `MaintenanceProfile` (named per-car/user profile container). Plan item
  definitions are in code, not a table: `plan-item.catalog.ts` (see "Plan model and catalog" above).
- `maintenance-record.service.ts` — CRUD; `_syncLastOilService` keeps
  `Car.last_oil_service_date`/`last_oil_service_mileage` pointed at the
  highest-mileage record linked to `ENGINE_OIL` on every create/update/delete
  (a narrow, item-specific side effect, separate from the general Plan due math).
- The reverse direction (`Car.last_oil_service_*` → a `MaintenanceRecord`)
  is done in `car/car.service.ts` by `createCar` and `updateCar`, both through a
  shared `createOilBaselineRecord` (create path fixed 2026-10-07; the update path
  came later — see "Known gaps" below). If the form submits
  `last_oil_service_date` and/or `last_oil_service_mileage` on create, the same
  Prisma transaction that creates the `Car` row also creates a `MaintenanceRecord`
  for it (`service_type: MAINTENANCE`, `cost: 0`, empty `description` — the
  record list/Plan both render the item or category label when `description`
  is blank, so no synthetic text is generated — `service_date` = the given
  date, or today if only a mileage was given), and links it to the
  `ENGINE_OIL` plan item via a `MaintenanceRecordPlanItem` row. This is what
  makes the Plan see an engine-oil baseline immediately instead of waiting for
  the car's actual next oil-change entry. `updateCar` calls
  `syncOilBaselineRecord` only when a `last_oil_*` field is in the payload: it
  creates a record only if the given date/mileage is newer than the latest
  `ENGINE_OIL`-linked record, and never a duplicate of the same day and mileage.
  Bulk fleet import goes through `createCar` once per row so it's covered
  automatically. The `Car` columns themselves are untouched/unchanged by this.
- After a successful create or update of a car, the frontend's
  `cars/` `car-details.state.ts` refetches that car's maintenance records and
  dispatches `BootstrapActions.PatchCarMaintenance`, so the Plan page shows the
  new baseline without a reload.
- `category-suggestion.service.ts` (`CategorySuggestionService`) — the AI
  fallback for category suggestion. Same construction/error-handling pattern
  as `document/gemini-extraction.service.ts` (`GoogleGenAI` client from
  `GEMINI_API_KEY`, silently disabled if unset, 503→`CategorySuggestionServiceUnavailableError`).
  Exposed via `POST /maintenance-record/suggest-category` on
  `MaintenanceRecordController` — stateless, suggestion only, doesn't save.

**Custom jobs (`custom_items`).**
- `MaintenanceRecord.custom_items` is a `String[]` (default empty). The DTO accepts at most 10 entries of 1–60 characters each; `sanitizeCustomItems` (BE `custom-items.util.ts`) trims them and drops duplicates case-insensitively, so the stored list is always clean.
- Custom jobs are history-only: they are not Plan items or work items, never affect reminders, the Plan or the category, and never get suggested. The expense-type rule counts a record with only custom jobs ticked as a Repair (see Functionality).
- Invoice results return `custom_items`: at most 5 entries, each at most 40 characters. The frontend appends them as custom chips when the scan is applied.

**Service field (`add-maintenance-panel`).**
- The field is an `<app-autocomplete>` (`shared/component/autocomplete/`, selector `app-autocomplete`): a searchable select that reuses the dropdown panel tokens and `DropdownOption`, with a clear button and an `allowCreate` create row. Use it for any "pick-or-create from a list" field. The vehicle catalog combobox stays a separate component.
- Account mode is decided by `SessionContextService.isBusiness()`:
  - business, with the `supplier` feature flag → `supplier_id` (suggestions from `SupplierApiService`; pick-only, `allowCreate` is off because the org supplier list is managed elsewhere; `onSupplierCreate` is unused);
  - personal → `MaintenanceRecord.service_name` (free text). Suggestions are the distinct `service_name` values from the bootstrap maintenance map, newest first.
- Backend: when `supplier_id` resolves, `service_name` is stored as null. A personal user's `supplier_id` is silently ignored (`SupplierService.resolveLinkedSupplierId`).
- The DIY checkbox clears and disables this field and sets labor to 0.

**Frontend** — invoice scanning and the expense-type rule (`add-maintenance-panel`).
- `_autoSetType()` order: invoice type, else REPAIR if only repair work items or custom jobs are ticked, else MAINTENANCE if any item is ticked.
- Part chips open the part sheet in edit mode. Editing a part clears its `scanned` flag, so it is no longer treated as scan-sourced and is replaced on re-scan. Total nudges on add, edit and remove are unconditional.

### History "All cars" filter (2026-10-23)

`MaintenanceComponent.allMode` (signal) + `viewAll$` (all && >1 cars); `records$` switches to the
unfiltered `facade.records$` then. The dropdown has an `ALL_CARS = 'all'` first option (>1 cars
only; key `maintenance.allCars`). Default on `/main/maintenance` without `?carId=`. `?carId=` is
(re)applied by `_applyCarIdParam()` from `ngOnInit` and `ionViewWillEnter`, only when its value
changed since last applied (cached Ionic page; a manual dropdown choice survives plain back
navigation). In all mode each row shows the car name (`.mn-record-item__car`, `carLabelFor`). The add panel gets `selectedCarId = null` in all mode and falls back
to `cars[0]`.

### Custom reminders

- **Backend:** `MaintenanceRecord.reminder_title` (`String?`, max 80 characters,
  trimmed) is saved by `maintenance-record.service.ts` only alongside
  `expiry_date`, and is nulled whenever `expiry_date` is cleared.
- **Reminder payload and email:** the record-date reminder payload carries
  `reminderTitle`. The mail template's subject uses it for the EXPIRY stage
  (HTML-escaped).
- **FE notifications:** the notifications panel's `maintenanceDueSubject`
  prefers the title for the EXPIRY stage.
- **FE Plan:** `plan.component` builds `CustomReminder` entries from records
  that have an `expiry_date`, and navigates to
  `/main/cars/details/:carId/istoric/:recordId` (same as the history list).
- **FE form:** in `add-maintenance-panel` the `reminder_title` control is
  required only while the reminder toggle is on.
- **Totals default:** cost and labor default to 0 on the form. The invoice scan
  treats a 0 as empty. Two translation keys are unused now and left in place:
  `maintenance.form.fields.partsCost` (there is no parts-cost field) and
  `maintenance.form.performedBy.service` / `.diy` (the service/DIY wording was
  replaced by the service field and the DIY checkbox).

### Invoice scanning (2026-10-22)

**Backend** — `history-auto-utility-be/src/modules/maintenance-record/invoice-extraction/`
- `POST /api/maintenance-record/extract-invoice` on `MaintenanceRecordController`
  (`maintenance-record.controller.ts`). `FilesInterceptor('files')`, max 3 files
  of 20 MB each, memory storage; accepts pdf/jpeg/png/webp. Optional `car_id`:
  when given, a car access check runs and the car's context is added to the
  prompt. `lang` is `ro` | `en` | `ru`; the frontend sends
  `TranslocoService.getActiveLang()`.
- `invoice-extraction.service.ts` — Gemini via `@google/genai`, model from
  `GEMINI_MODEL` (default `gemini-3.6-flash`), constrained by a `responseSchema`
  and a `systemInstruction`. One call per scan, all files sent together as
  `inlineData`. On 503/429/504 it retries the
  primary model once (1.5 s delay), then tries `gemini-3.5-flash`; each attempt is
  capped at 35 s and the whole Gemini phase at 75 s, after which the 503 message is
  returned. Other Gemini errors → 400. There is no Cloudflare fallback (too
  imprecise for invoices, image-only, one document per call). Everything unavailable or no API key → 503.
- `invoice-extraction.prompt.ts` — the prompt. It opens with an **OUTPUT LANGUAGE
  RULE** (title and notes are written in the requested `lang`; part names stay as
  printed); the title and notes examples are given per language. It asks the model
  to report which Plan items the documents show were done (`plan_items`), with the
  Romanian term rules described above, and to list up to 5 `custom_items` for work
  that fits no option. The exported `INVOICE_PROMPT_VERSION` (currently `'v3'`) is
  part of the cache key, so changing the prompt means bumping it.
- `invoice-reconciliation.ts` — a pure function. The model only extracts raw
  per-document lines; ALL arithmetic (dedupe, VAT handling, totals, mismatch
  checks, currency conversion) happens in code. Covered by
  `invoice-reconciliation.spec.ts`. `plan_items` are filtered to the items
  applicable to the car.
- `invoice-extraction.types.ts` / `.dto.ts` — internal types and the request DTO.
- AI usage: feature key `maintenance_invoice_extract`. `assertQuota` runs before
  the call; results are cached per user by the ordered file hashes + lang +
  `car_id` + `INVOICE_PROMPT_VERSION` (only detected results are cached); usage is
  recorded per call. Over a limit the scan is refused by the quota check, not
  answered with an empty result.
- Mixed currencies are converted with `ExchangeRateService` (BNR).

**Response contract** — `detected`, `service_type`, `service_category`, `plan_items`, `custom_items` (max 5, ≤40 chars each), `title`,
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
  and cost = `grand_total` + manual parts. The returned `plan_items` (repairs and
  bodywork/electrical included) pre-tick the "What was changed?" chips; the
  returned `custom_items` are added as custom chips; the returned service type
  goes to the expense-type control under the `_typeTouched` rule below, and the
  suggested category goes into the hidden `service_category` control. The labor
  baseline `_lastLaborCost` is reset so later price nudges stay correct. A local
  `WithInvoiceFields<T>` type covers `labor_cost`/`notes` until the client is
  regenerated.
- Originals are uploaded in `_afterSave` with upload context `maintenance_invoice`
  (`UploadedFile` table, R2). Download goes through `GET /upload/:id/url?download=1`.
- Record detail shows notes, labor and an invoices section; list rows get
  `invoicesCount` from the backend.
- **Expense type and field rules (`add-maintenance-panel`).** The expense-type
  control is the service-type picker; `expenseTypeOptions` excludes ALIMENTARE.
  The panel tracks `_typeTouched`, which is true on edit, when the caller passed
  `initialServiceType` (the fuel shortcut in `maintenance.car-page.ts`, and the
  wishlist), or after the user picks a type via `selectServiceType`. While it is
  false, `_autoSetType()` runs on every tick change and on invoice apply, using
  the order in Functionality (invoice type, else REPAIR if only repair work items
  or custom jobs are ticked, else MAINTENANCE if any item is ticked). On invoice
  apply, a field is overwritten only if it is empty and untouched, was filled by a
  previous scan, or is a defaulted field (date, currency, DIY).
- **Invoice prompt (BE `invoice-extraction.prompt.ts`).** Title: at most 50
  characters, with no invoice number, supplier or prices. Notes: 1–2 plain
  sentences with no prices (the older instruction to copy recommendations from the
  service report was dropped). `service_type` guidance: MAINTENANCE = oils, fluids,
  filters, timing belt, ITP; REPAIR = worn or broken parts (brake pads/discs,
  suspension, battery, lights, engine repair, bodywork, electrical).

**Known limitations**
- Deleting a maintenance record doesn't delete its uploaded files (attachments or
  invoices) — orphaned rows and R2 objects (pre-existing).
- `getFilesForContext` only returns files uploaded by the requesting user, so on
  shared cars another user's invoices aren't listed.
- Scanning is available only in add mode.
- Scan results are cached per file hash, language, car and prompt version, so a
  prompt change only takes effect once `INVOICE_PROMPT_VERSION` is bumped.
- Not yet tested with real invoices on dev at the time of writing.

### Linking records to the Plan — and what changed (2026-10-22)

- The Plan was previously linked to records through a single category, so one
  service that changed oil, air and cabin filters only filled one bar. It is now
  linked through explicit items (`MaintenanceRecordPlanItem`, many-to-many), and
  the category no longer drives the Plan.
- **Data migration**: `history-auto-utility-be/prisma/manual-migrations/2026-10-22-plan-items.sql`
  is part of the test and prod rollout; follow the order of steps given in the
  file. The Plan backfill only maps the unambiguous categories: OIL_CHANGE →
  ENGINE_OIL, TRANSMISSION_SERVICE → GEARBOX_OIL, TIRE_SERVICE → TIRES and
  INSPECTION → INSPECTION. Other old records stay unlinked (they no longer show
  on any Plan bar), and settings for categories with no item mapping were
  dropped. A separate `-- work items` block gives the matching repair item to
  records in BATTERY_SERVICE (battery), LIGHT_SERVICE (lights), ENGINE_SERVICE
  (engine repair) and BRAKE_SERVICE (brake parts). These are history-only and
  never appear on the Plan. The dev database has had this work-items backfill
  applied.

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
`HttpClient` directly against `ApiConfiguration.rootUrl` until then). The
generated client's maintenance models are hand-patched for `plan_items`,
`drivetrain`, `engine_oil_viscosity`, `custom_items`, `service_name`, `labor_cost`,
`notes` and the item-keyed settings, since a regen would drop them.

### AI usage guard

The category-suggestion endpoint (`POST /maintenance-record/suggest-category`)
is covered by the AI usage guard described in `history-auto-utility-be/src/modules/ai-usage/FEATURE.md`. Over a limit it
skips rather than erroring: it returns a `null` suggestion. No frontend code
currently calls this endpoint (see "API client note" above), so the guard applies
to it only for any future caller. The invoice scan (`maintenance_invoice_extract`,
see "Invoice scanning" above) is guarded too and counted per call.

### Currencies of labor, parts and the parts total (2026-10-23)

- Labor has no currency picker: it is always in the record's total-cost currency (suffix and a short hint
  follow the `currency` control via `recordCurrency`); `labor_cost` has no currency column.
- Each part keeps its own currency (`MaintenancePart.currency`, null = record currency). Parts in another
  currency are converted into the record currency at the BNR rate of the service date, both for the
  displayed parts total ("Parts: ≈ 1,234 MDL" + note) and for the auto-nudge of the total cost
  (`_partNudge`, async). No rate -> that part is left out and a warning shows instead of the note.
- The "Edit parts total" override is entered in the record currency (no dropdown); `parts_cost_currency`
  is saved as the record currency (null if the record's currency is one the backend can't store). Changing
  the record currency keeps the number and the currency follows.
- Once the override differs from the computed sum (`partsOverridden`), part chips (form and detail view)
  hide per-part prices; the part edit sheet still shows the stored price with a muted "may not be exact"
  hint. Resetting the override brings the prices back.
- Detail view: chips use `part.currency || rec.currency`; the subtotal is the override when set, else
  per-currency sums (no conversion on the read-only view).
- Rates: backend `GET /exchange-rate?from=EUR&to=MDL&date=YYYY-MM-DD` (`ExchangeRateController`,
  `@Scope('personal','business')`, no feature key) returns `{ rate, date, source: 'BNR' }` (cross rate
  through RON from `ExchangeRateService.getRonRate`; 404 when BNR has no rate). Frontend
  `core/exchange-rate.service.ts` (hand-written, not in the stale OpenAPI client) caches per (from,to,date);
  the panel warms the cache when the service date, record currency or a part changes. The backend's
  `cost_ron` conversion is unchanged (cost is in the record currency).

### Unsaved-changes guard and plan sheet footer (2026-10-23)

- `AddMaintenancePanelComponent` snapshots a JSON signature (`_stateSignature()`: raw form values,
  parts, plan items, custom items, labor, parts-total override, reminder toggle, energy mode, staged
  attachments/invoices by name+size, removed attachment ids) at the end of `ngOnInit`, i.e. after
  edit-record load and query-param/preset prefill. `hasUnsavedChanges()` compares the live signature
  to it; an invoice scan changes form/parts so it counts. `canDeactivate()` shows the
  `maintenance.unsavedChanges.*` alert; Discard sets `_allowLeave` so the follow-up
  `closed` -> `goBack()` navigation isn't prompted twice; `_afterSave()` sets it too.
  `requestClose()` (X button and `app-fullscreen-panel` `closeRequested`) = confirm then `close()`.
  `beforeunload` HostListener mirrors the cars form.
- Add route: `maintenanceFormUnsavedGuard` (`maintenance-form/maintenance-form-unsaved.guard.ts`,
  same shape as `cars-form-unsaved.guard.ts`) delegates to the panel via `MaintenanceFormComponent`.
  Record-detail edit overlay and the Istoric list overlay need no change: they only listen to `closed`.
- The plan-items sheet is header / scrolling body / `.amp-part-sheet-footer` (sticky, safe-area aware)
  holding the full-width `.amp-plan-done`. The other `amp-part-sheet`s keep their primary action in the
  navbar, so they have no below-the-fold button.

### Known gaps / things not done

- The viscosity picker can't be cleared once a value is set.
- Battery, lights, brake parts, suspension, engine repair, bodywork and electrical
  are not Plan items. They are repair work items, recorded in history only, with
  no Plan bar, reminder or setting. Custom jobs are history-only in the same way.
- Business accounts without the `supplier` feature flag show no service field
  (business and personal workshop lists are deliberately decoupled;
  `service_name` is personal-only).
- Custom interval overrides are possible only inside named custom profiles, not
  on the built-in profiles (Normal / Intensive / Occasional).
- Cars created before the 2026-10-07 `createCar` fix that already had
  `last_oil_service_date`/`_mileage` set have no engine-oil record, so their
  engine oil item shows "untracked". The backfill is the `-- synthetic oil
  records` block (b) in `history-auto-utility-be/prisma/manual-migrations/2026-10-22-plan-items.sql`;
  on `hau_db_dev` it matches 1 car (id 152) and has NOT been applied yet.
- Records that couldn't be mapped to a Plan item by the 2026-10-22 migration
  remain unlinked (see the migration note above); they show in history but not
  on the Plan.
- `MaintenanceState`'s dual NGXS provider registration (see Frontend above)
  is a pre-existing architectural quirk this change didn't introduce or fully
  resolve — it happens to be harmless because NGXS state is a global
  singleton regardless of how many `forFeature` calls register it.
- `_syncLastOilService` ignores records without mileage, so for a car whose only
  `ENGINE_OIL` record is date-only, a later record edit or delete can null
  `Car.last_oil_service_*`. The Plan is unaffected.
- `car.service.ts`'s synthetic engine-oil record created from the car form's
  last-oil-service fields on create and update (see above) is inserted via a raw
  `tx.maintenanceRecord.create` with `cost: 0` and no `currency`/conversion
  fields set explicitly — it gets `currency: 'RON'` from the column default
  but `cost_ron` stays null. Harmless (every cost-summing site falls back to
  `cost` when `cost_ron` is null, and the cost itself is always 0 here), but
  worth knowing if that creation path is ever changed to carry a real cost.
