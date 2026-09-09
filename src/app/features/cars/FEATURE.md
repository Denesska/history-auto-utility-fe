# Cars (Garaj)

## Functionality

Cars is the app's home: the garage of vehicles you own or that someone shared
with you, and each car's own hub screen from which everything else about that
car hangs (history, documents, reports, plan, notes, journal, sharing).

### The garage list

- Three sections: the cars **you own**, cars **shared with you** (badged as
  such), and **sold/archived** cars.
- Each car shows its photo (or a color gradient if it has none), nickname or
  make+model, license plate, mileage, and a dot when one of its documents needs
  attention.
- The list can be shown as **cards** or as a compact **row list**; the toggle is
  a pair of round icon buttons in the top bar. On a very wide screen there's
  room for the card layout regardless, so it's forced to cards and the toggle
  disappears.
- Above the list, an **attention panel** collects upcoming and already-passed
  document expiries across all cars, worst first, expandable when there are
  more than a handful.
- Pull down to refresh.

### Adding or editing a vehicle

One form covers both. Fields are grouped so the required minimum is up front
and everything else is optional and collapsed:

- **Vehicle details** — make, model and year through a searchable catalog
  picker, plus variant, license plate, a nickname, and VIN (validated as a real
  17-character VIN).
- **Additional info** (collapsed; the header shows how many of its 9 fields
  you've filled) — fuel type, transmission, engine, color, current mileage,
  purchase price + currency, and owned-since date.
- **Documents & deadlines** (collapsed) — last oil service date and mileage.
- **Photos** — up to 13, with one picked as the main photo.

Two conveniences:

- **Scan the registration certificate.** Take a photo of (or pick a PDF of) the
  talon and the make, model, year, VIN, plate and technical fields are filled
  in automatically. You can correct anything afterwards.
- **Quick tips** panel on first use, dismissible for good.

On a phone, creating a vehicle is a **5-step flow** (identity → personalize →
useful details → history → review), with a progress indicator, back/skip/next,
and a final summary you can jump back from. Editing is never stepped — it's the
full form at once.

The form's two actions — **close** and **save** — are round icon buttons in the
top bar, and nothing duplicates them at the bottom. Extras that don't fit that
pair stay in the page: **"Save & add another"** (create only, which saves and
resets the form for the next car) and **"Remove from garage"** (edit only).
Trying to leave with unsaved changes asks first.

- Saving without a mileage asks whether you're sure, since mileage is what the
  maintenance plan works from.
- If something required is missing, saving jumps you to the step/field that
  needs it rather than failing silently.

### A car's hub screen

The car's own landing screen leads with a full-bleed **photo carousel** (tap to
open full screen), then the car's name, plate, and its sections. From here:

- A one-tap **"add fuel/charge entry"** button (the icon reflects whether the
  car is electric).
- A "…" **actions sheet** with: share the vehicle (owner only), edit the
  vehicle, add a maintenance record, and upload a document — each shown only if
  your role allows it.
- Sections for Prezentare, Istoric, Documente, Rapoarte, Plan, Notițe, Jurnal
  and Partajare (also reachable from the sidebar when a car is expanded).

### Removing a car

Removing is never a single destructive click. A sheet offers:

- **Mark as sold** — the car moves to the archived section, keeping all of its
  history, documents and photos. A sold car's hub becomes a read-only summary
  with its final mileage and sale date.
- **Restore** — for a sold car, put it back in the active garage.
- **Delete permanently** — really deletes it, and everything attached to it.

### Sharing a vehicle

An owner can invite someone by email and give them one of four roles: **Full**,
**User**, **Maintenance** or **Viewer**. Existing people's roles can be
changed, and access (or a pending invitation) can be revoked. Your role is what
gates the actions you see on that car — a Viewer, for instance, gets no add/edit
buttons anywhere.

### Notes (Notițe)

Free-form notes per car — a title, the content, and an optional group name to
bucket related notes together (with autocomplete from the groups you already
used). Notes are shown as cards grouped by their group name, ungrouped ones
last, and each card has a one-tap **copy** for its content (handy for policy
numbers, keys, codes) and a **delete**. Adding is the **+** in the top bar;
while the add/edit form is open the top bar shows **close** and **save**
instead. Read-only viewers see the notes but no add/edit/delete.

### Per-car documents

A Documente tab per car showing only that car's documents, with an **add**
button in the top bar that pre-selects that car.

## Implementation

**Frontend** — `history-auto-utility-fe/src/app/features/cars/`

- `cars-list/` (`CarsListComponent`) — the garage. Owns the cards/list view
  toggle (projected into the shared header's end slot; at `isXL()` — window
  ≥1200px — `effectiveViewMode` is pinned to `'cards'` and the toggle isn't
  rendered), and the attention panel
  (`shared/utils/attention-items.util.ts`). `.toggle-btn.active` is the one
  place in the app that deliberately overrides `.hau-header-icon-btn`'s bare
  look with a filled circle, by specificity.
- `cars-create/` + `cars-edit/` — thin routed wrappers. Both just host
  `<app-cars-form>`, set the page title, forward `canDeactivate()` to it, and
  re-register its header action templates on `ionViewWillEnter`.
- `component/cars-form/` (`CarsFormComponent`) — **the** create/edit form,
  shared by both routes (`isEditMode` = the form has an `id`). Notable pieces:
  - `LicensePlateControl` — a `FormControl` subclass that formats the plate
    (uppercase, letter/digit grouping) inside `setValue()`, so the live input,
    programmatic patches and the form-field's internal re-sync all converge on
    the same formatted value. Don't format at the template level.
  - The mobile wizard: `mobileSteps`, `mobileStep`,
    `goToNextMobileStep()`/`goToPreviousMobileStep()`/`skipMobileStep()`,
    `firstInvalidMobileStep()`. Which step shows which section is **pure CSS**
    (`.page-grid.is-create[data-mobile-step='N'] .wizard-step--x`, inside
    `@media (max-width: 767px)` in the SCSS) — the template renders every
    section unconditionally. Create-only; edit mode never steps.
  - `_scanPhoto`-equivalent flow: the "scan talon" button →
    `DocumentExtractionService.extract()` → patch. Shares the extraction
    endpoint with the documents form.
  - `canDeactivate()` + `@HostListener` guard the unsaved-changes prompt;
    `photoSignature()`/`initialPhotosSignature` is how photo changes count as
    dirty (the reactive form alone can't see them).
  - `saveCar(addAnother)` validates first and, on failure, jumps `mobileStep`
    to `firstInvalidMobileStep()` and scrolls — which is why it's safe for the
    header's save button to be available on every wizard step.
  - Header actions: `headerStartActionsTpl` (close) / `headerActionsTpl`
    (save) are exposed publicly and registered from this component's
    `ngAfterViewInit` **and** re-registered by the routed parent — see
    `registerHeaderActions()` and the "Page actions live in the top bar" rule
    in the frontend `CLAUDE.md`.
- `cars-details/` (`CarsDetailsComponent`) — the car hub. Two distinct views in
  one template: the **active** view (hero carousel + actions + sections) and the
  **sold/archived** view (read-only summary). The active view is the one route
  that gets the overlay header (`MainComponent.isCarHubOverlay`) so the hero
  photo bleeds under it; the sold view sets a title, which switches it back to
  a normal header bar.
- `car-documents/`, `car-notes/`, `car-sharing/` — the per-car sub-screens.
  `car-notes/` is a routed page (`car-notes-page.component.ts`) wrapping a
  presentational panel (`car-notes-panel.component.ts`) that owns the
  list/form state (`formOpen`) and its header actions (`syncHeaderActions()`).
- `remove-car-panel/` — the sold/restore/delete bottom sheet. Emits
  `markSold` / `restore` / `deletePermanently` / `closed`; the host decides
  what to do.
- `component/car-row-item/`, `component/card-list-item/` — the two garage row
  layouts.
- `state/` — four NGXS slices, deliberately separate:
  `car-list/` (the garage: owned + shared + sold), `car-details/` (the one
  currently-open car, plus create/update/photo actions),
  `car-access/` (sharing), `car-notes/`.
- `cars.constants.ts` — `MAX_PHOTOS_PER_CAR` (13), `MIN/MAX_YEAR_CAR_CREATE`,
  and the `FUEL_TYPE_OPTIONS` / `TRANSMISSION_OPTIONS` / `COLOR_OPTIONS` /
  `CURRENCY_OPTIONS` dropdown data.
- `cars.utils.ts` — `formatLicensePlate()`, `removeNullProperties()`.
- `cars.routes.ts` / `cars.routes.const.ts` (`CARS_ROUTES`).

**Shared components this feature depends on**

- `shared/component/vehicle-catalog-select/` — the searchable Make/Model/Year
  combobox (live text search + async loading). Deliberately *not*
  `<app-dropdown>`; see the Frontend UI Consistency Rule in the root
  `CLAUDE.md`.
- `shared/component/photo-picker/` — the photo gallery + main-photo picker,
  shared with the Jurnal write form.
- `shared/component/photo-carousel/` — the hub's hero carousel + full-screen
  lightbox.
- `shared/component/form-field/` — the labelled input wrapper used throughout
  the form.
- `core/document-extraction.service.ts` — the talon scan.

**Backend** — `history-auto-utility-be/src/modules/car/`
(`@Controller('car')`)

- `POST /car`, `GET /car` (the caller's cars), `GET /car/:id`, `PUT /car`,
  `DELETE /car/:id`, `GET /car/user/:userId`.
- `PATCH /car/:id/sold` and `PATCH /car/:id/restore` — the archive/restore pair.
- `DELETE /car/photo/:photoId` and `PATCH /car/photo/:photoId/default` — photo
  management is its own set of endpoints, not part of the car payload.
- Related modules: `car-access` (sharing/roles), `car-note`, `car-deadline-order`
  (the hub widget's manual ordering), `car-maintenance-settings` /
  `car-maintenance-profiles`, `vehicle-catalog` (the make/model/year catalog),
  `upload` + `storage` (photos).
- Prisma model `Car`: identity (`vin` unique, `nickname` unique, `make`,
  `model`, `variant`, `year`, `license_plate`), technical (`fuel_type`,
  `transmission`, `engine`, `color`), mileage (`current_mileage` — what the
  user entered — plus `actual_mileage` / `actual_mileage_updated_at`, which the
  app derives from the newest maintenance record), ownership (`purchase_price`,
  `purchase_price_currency` default `"EUR"`, `ownership_start_date`),
  `last_oil_service_date`/`_mileage`, lifecycle (`status: CarStatus` default
  `ACTIVE`, `sold_at`), and relations to maintenance records, documents,
  photos, access entries, blog entries, notes, deadline orders, maintenance
  settings/profiles and sent reminders.

### Notes / decisions

- **`current_mileage` vs. `actual_mileage`.** `current_mileage` is what the user
  typed on the car form; `actual_mileage` is maintained from maintenance
  records and is the one to display (`getDisplayMileage()` prefers it). Don't
  write `actual_mileage` from the car form.
- **The car form is a child component, not a routed one.** Its two routed hosts
  (`cars-create`, `cars-edit`) exist to provide the title, the route params and
  the Ionic lifecycle hooks. Anything that needs `ionViewWillEnter` /
  `ionViewWillLeave` for this screen has to be wired through them.
- `rca_expiry_date` / `itp_expiry_date` / `rov_expiry_date` still exist on the
  `Car` model but the app reads expiries from the `Document` rows instead
  (`shared/utils/document-status.util.ts`). Treat the Car columns as legacy —
  don't add new reads of them.
- **Deleting a car cascades**, including its documents (`onDelete: Cascade` on
  `Document.car`). That's why "mark as sold" exists as the default removal path.

### Known gaps

- `FUEL_TYPE_OPTIONS`, `TRANSMISSION_OPTIONS` and `COLOR_OPTIONS` in
  `cars.constants.ts` carry **hardcoded Romanian labels**, which violates the
  Frontend i18n Rule in the root `CLAUDE.md`. They should become translation
  keys resolved through Transloco, the way `DOC_TYPE_CONFIG` does it.
- `nickname` is globally unique in the schema, not per user — two different
  users can't both nickname a car "Mașina mea".
- The car form has no draft/autosave; leaving mid-way (past the unsaved-changes
  prompt) loses everything typed.
