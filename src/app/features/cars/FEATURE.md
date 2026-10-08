# Cars (Garaj)

## Functionality

Cars is the app's home: the garage of vehicles you own or that someone shared
with you, and each car's own hub screen from which everything else about that
car hangs (history, documents, reports, plan, notes, journal, sharing).

### The garage list

- What the garage shows depends on the account context you logged into
  (personal or business — see `ACCOUNT-CONTEXT.md`):
  - **Personal:** the cars **you own**, cars **shared with you personally**
    (badged with the role you were given) and **sold/archived** cars. Company
    cars never appear here, and there are no per-company sections.
  - **Business:** the active company's **fleet** is the main list (a Driver
    only sees the car(s) currently assigned to them), plus sold/archived
    fleet cars. The "shared with me" section does not exist in business.
- Each car shows its photo (or a color gradient if it has none), your own
  personal name for it or make+model, license plate, mileage, and a dot when
  one of its documents needs attention.
- Small pills show the days left on the car's RCA, ITP and Romanian vignette.
  A vignette for another country that's valid today gets its own pill with the
  country's flag and code (e.g. HU 3d). When it expires, the pill just goes away.
- The list can be shown as **cards** or as a compact **row list**; the toggle is
  a pair of round icon buttons in the top bar. On a very wide screen there's
  room for the card layout regardless, so it's forced to cards and the toggle
  disappears.
- Above the list, an **attention panel** collects upcoming and already-passed
  document expiries across all cars, worst first, expandable when there are
  more than a handful.
- **Add a vehicle** with the **+**: in the top bar on desktop, the round
  centre button in the bottom bar on phone/tablet (plus "Adaugă vehicul" at the
  end of the sidebar's car list on desktop). **In a business account, only an
  organization admin (Super Admin, Director/SUPER_ADMIN, Fleet Admin) can add a
  car** — every other role (Driver, Finance, ...) doesn't see any of these
  buttons, the garage's own FAB shows disabled ("Nothing to add here"), and the
  single-car hub's "…" menu has no "Add vehicle" row. Personal accounts are
  unaffected — anyone can add their own car. See "Adding a car" in
  `ACCOUNT-CONTEXT.md`.
- Pull down to refresh.
- **Exactly one car:** opening the garage goes straight to that car's hub screen instead of
  showing a one-item list, and the mobile bottom bar's Garage tab reads "My car". The garage
  list itself still exists underneath — reachable via "Add vehicle" in that car's "…" menu, the
  only way to add a second one in this mode. With no cars, or two or more, the garage behaves
  as a normal list. See "Single car" in `core/navigation/FEATURE.md`.
- **Favourite car:** when you have several cars, a bottom-bar shortcut that's tied to "a car"
  (Documents, History, …) opens whichever car that slot is assigned to in Settings, falling back
  to your favourite car if the slot's own car is no longer accessible. Set or change the
  favourite from a car's own "…" menu (a star action showing whether it's the current favourite)
  or from the Favourite car dropdown in Settings. See "Mobile bottom bar" in
  `core/navigation/FEATURE.md` and "Bottom bar" in `features/settings/FEATURE.md`.

### Adding or editing a vehicle

One form covers both. Fields are grouped so the required minimum is up front
and everything else is optional and collapsed:

- **Vehicle details** — make, model and year through a searchable catalog
  picker, plus variant, license plate, a personal name for the car, and VIN
  (validated as a real 17-character VIN). The name field is captioned as
  private to you — see "Private per-car names" below.
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
open full screen, where you can pinch or double-tap/double-click to zoom in),
then the car's name, plate, and its sections. In a
**business** account the big photo is replaced by a compact, enterprise-style
header: a small rounded thumbnail next to the name, plate and year. The
thumbnail shows the car's main photo, or, when there is none, a minimal
schematic silhouette of that make and model (a generic car while the specific
one is being prepared, which can take a minute or two). A small camera badge on
the thumbnail shows (to people who can edit the car) that the photo can be
changed. Tapping the thumbnail opens a larger view of the photo (or of the
silhouette on a plain surface when there is no photo); anyone who can open the
car can look at it. Underneath, people allowed to edit the car (not read-only
viewers, not maintenance-only access, not drivers) get "Update image", which
picks a new photo that becomes the main one, and, when a real photo has been
uploaded, "Delete image", which asks for confirmation and then removes it (the
next photo, or the silhouette, then shows). A spinner shows while either runs;
the close icon at the top leaves the view. In the garage
list, a business car without a photo shows the same silhouette instead of the
plain car icon. From here:

- A one-tap **"add fuel/charge entry"** button (the icon reflects whether the
  car is electric).
- A "…" **actions sheet** with: share the vehicle (owner only, personal
  accounts only), assign a user (company fleet cars, business accounts
  only), edit the vehicle, add a maintenance
  record, and upload a document — each shown only if your role allows it.
- Sections for Prezentare, Istoric, Documente, Rapoarte, Plan, Notițe,
  Wishlist, Jurnal, Partajare (personal accounts only) and Utilizator (company
  fleet cars, business accounts only; both also reachable from the sidebar
  when a car is expanded, Partajare only in personal). Each tile
  carries a live count under its name — entries, expiring documents, notes
  saved, active wishes, journal stories.
- A **deadlines** list mixes documents and maintenance. Each foreign vignette
  that's still valid gets its own calm row ("Vinietă" + flag + country code).
  It never turns amber or red and has no renew button, and it drops off the
  list once it has expired.
- **Updating the mileage** (the "Update" button next to the km figure) opens a
  small sheet from the bottom with an empty number field that is ready to type
  in right away — the old value is not pre-filled, so typing simply replaces
  it. The current km is shown as a small hint above the field. A "Photograph
  dashboard" button reads the km from a photo of the odometer and fills the
  field (still editable); if the photo can't be read, a message asks you to
  type it in. Saving is only possible with a valid whole number, and a value
  lower than the current one shows a warning (and the usual confirmation on save).
- Tapping a deadline opens the record behind it: a document deadline opens
  that document, a maintenance deadline opens the last service record of that
  category. When there is nothing to open (a date that only comes from the car's
  own data, no service logged yet) the tap does what the renew / log-service
  button does. The tap is ignored while reordering.

### Private per-car names

Anyone who can see a car — its owner, someone it was shared with, or a member
of the organization that owns it — can give it their own personal name (e.g.
"Mașina lui Dan", "Racheta"). That name is private: it's visible only to the
person who set it, never to anyone else who also has access to the same car
— not another co-owner, not an organization's Director or admin looking at
the fleet. Everyone who can see the car sees make+model until they set their
own name, and no two people's names for the same car ever "conflict" with
each other the way two different cars' license plates or VINs do.

The first time you open a car's hub screen, a one-time notice explains this
("you can give this car a personal name — it's private, visible only to
you"); dismissing it hides it for good. The Organization screen's fleet list
is the one place that deliberately never shows anyone's personal name — an
admin managing the whole fleet always sees make+model there, by design.

### Removing a car

Removing is never a single destructive click. A sheet offers:

- **Mark as sold** — the car moves to the archived section, keeping all of its
  history, documents and photos. A sold car's hub becomes a read-only summary
  with its final mileage and sale date.
- **Restore** — for a sold car, put it back in the active garage.
- **Delete permanently** — really deletes it, and everything attached to it.

For an **organization car**, there's a separate, lighter option instead:
**"Elimină din organizație"**, for anyone with fleet-admin-equivalent access.
This doesn't delete the car — it just un-links it from the organization, so
it becomes a personal car again, owned by whoever originally added it; other
organization members stop seeing it.

### Sharing a vehicle

An owner can invite someone by email and give them one of four roles: **Full**,
**User**, **Maintenance** or **Viewer**. Existing people's roles can be
changed, and access (or a pending invitation) can be revoked. Your role is what
gates the actions you see on that car — a Viewer, for instance, gets no add/edit
buttons anywhere.

### User assignment (Utilizator)

For a car that belongs to a company fleet (an organization car, not a
personal one), the fleet admin can set **which user the car is assigned to**, and
see the full history of who had it before and when. The picker lists **every
accepted member of the company, whatever their position** (Super Admin,
Director, Fleet admin, Finance or Driver), each shown with name and role;
pending invites are not listed. Picking a user from the dropdown and
confirming closes the previous assignment (if any) and starts a new one; a
separate button ends the current assignment without starting a new one.
Assigning a non-driver doesn't change what they can see — only drivers are
limited to their assigned cars. This only shows up for organization cars
— a personal car has no concept of a driver distinct from its owner.

**Also reachable straight from the Organization screen's fleet list**, not
just from the car's own hub: each car's row there shows its current user's
name and photo (or an "assign a user" prompt if nobody's set), and tapping
either opens this same assignment screen for that car — see "See and manage
each car's driver straight from this list" in `features/organization/
FEATURE.md`.

This whole feature sits behind the organization's `driver_assignment`
switch (see `core/features/FEATURE.md`): with it off, the "Sofer"/"User" tab
and its route disappear from the car page, the Organization fleet list's
current-user/"assign" button disappears from every row, and the data itself
is withheld (the fleet list never shows a user even if one happens to be
assigned underneath). Turning the switch back on does not lose any history.

### Notes (Notițe)

Free-form notes per car, laid out like Google Keep. A note has an optional
title and is either **free text** or a **checklist**, can carry any number of
**labels**, and can be given a **color**.

- **The board fills the screen.** Notes are cards in a staggered (masonry)
  layout — two columns on a phone, more as the screen gets wider (8+ on a large
  monitor). The most recently edited note comes first. Long notes are clipped on
  the board; opening one shows all of it. Colored notes keep their color on the
  board.
- **Search and filter.** A search box on top filters by title, content,
  checklist items and labels as you type. Below it: "Toate" plus the 4
  most-used labels as chips (with how many notes each has); any other label is
  found through a "Alte etichete" search field with autocomplete.
- **Writing and editing.** Tap **+** (top bar on desktop, round button at the
  bottom-right on phone/tablet) or tap any note. It opens full screen on a
  phone and as a centered sheet over the dimmed board on larger screens — always
  below the top bar, never under it.
- **Checklists.** The checkbox button in the editor turns a text note into a
  checklist (each line becomes an item) and back. Enter adds the next item,
  Backspace on an empty item removes it, and a trailing "Element de listă" row
  starts a new one. Ticked items are struck through and, by default, move into
  a "N bifate" section at the bottom; a small toggle in the editor's bottom bar
  ("Păstrează ordinea la bifare") keeps them where they are instead — remembered
  per note, and the board shows the note the same way. Items are reordered by
  dragging their handle (shown on hover with a mouse, always on touch); an item
  that gets unticked goes back to where it was. Items can also be ticked
  straight from the board without opening the note.
- **Labels.** Typed in the editor, separated by commas: as you type,
  existing labels are suggested (most-used first); picking one or typing a
  comma turns it into a chip and you can go on with the next. Backspace on an
  empty field removes the last one.
- **Colors.** The palette button offers ten soft colors (plus none); they adapt
  to the light and dark themes.
- **Nothing gets lost.** Closing a note keeps what you wrote: the close button,
  the ✓, clicking outside the sheet, Esc or Ctrl/⌘+Enter all save and close. An
  untouched note just closes; a new note left empty is dropped.
- **One-tap copy** on every card (a checklist copies its items, one per line) —
  always visible on touch screens, revealed on hover with a mouse.
- **Delete with undo.** Deleting from a card removes it immediately and shows
  an "Anulează" toast for a few seconds.
- Read-only viewers can open and copy notes but not change them.

### Wishlist

The list of things you want done to the car but haven't paid for yet — the
counterpart to Notițe, which is reference information rather than intentions.
Where a note has no price and never finishes, a wish has both.

**The list is ordered by hand, not by date.** You drag wishes into the order
you actually want them done; that order is what everything else is read
against. Each wish carries a title, an optional estimated cost, an optional
type (Întreținere / Reparație / Îmbunătățire / Pasiune — the same four the
history uses) and optional free-text details.

**The budget line.** You set a spending ceiling for the car ("Buget: 5.000
RON"). Reading down the list, every wish adds its estimate to a running total
shown beside it, and a dashed line is drawn across the list at the point where
that total passes the budget. Everything above the line is what you can afford
right now; everything below is dimmed — still on the list, still in order, just
not yet. Drag a wish upward and the line moves with it, so reprioritising
immediately shows what it costs you. A wish with no estimate adds nothing to
the total, so it never pushes anything below the line on its own. Below the
list, a summary says how many things are above the line and what they add up
to, how much sits below it, or — when everything fits — how much budget is
left over. With no budget set, the list still works; it just shows the total
instead of a line.

**Completing a wish hands it to the maintenance history.** Marking a wish done
doesn't tick a checkbox — it opens the normal "add intervention" form
pre-filled with the wish's title, type and estimated cost, so you correct the
estimate to what it actually cost and save a real record. Only once that record
is saved does the wish move out of the active list, into a collapsed
**Realizate** section at the bottom; from there it can be put back on the list.
If you close the form without saving, the wish stays exactly where it was.

Reached from the car's hub tile (which shows how many active wishes there are)
or from the sidebar when the car is expanded. Adding is the **+** in the top
bar on desktop and the floating button on mobile; the add/edit form then
replaces the list on the same screen, with **close** and **save** taking over
the top bar. The budget is shared by everyone who has access to the car.
Read-only viewers see the list, the line and the totals, but can't drag, add,
edit, complete or delete.

### Per-car documents

A Documente tab per car showing only that car's documents, with an **add**
button in the top bar that pre-selects that car.

The tab shows what's current, not the whole archive: an **expired document is
hidden once the car has a newer, still-valid document of the same kind** (e.g.
last year's RCA disappears once this year's RCA is added). For vignettes "the
same kind" means the same country — an expired Romanian vignette is hidden by a
valid Romanian one, an ended Hungarian vignette by a valid Hungarian one, but
never by a vignette for another country. When every document of a kind has
expired, only the **most recent** one stays visible, with its **Renew** button,
because that's something you still need to act on. The older ones are hidden
(e.g. of two expired ITPs, only the latest shows).

Hidden documents aren't deleted. A **"Show history (N)"** button under the list
reveals them in a dimmed section, newest first, without Renew buttons, where
they can still be opened, edited, downloaded or deleted. They also remain in the
main Documents list, with its filters.

## Implementation

**Public API: `index.ts`** exports `CARS_ROUTES`, `provideCarsCarPage` and the car-list/car-details/car-notes/car-access/car-wishes facades and NGXS states (`CarListFacade`/`CarListState`, `CarDetailsFacade`/`CarDetailsState`, `CarNotesFacade`/`CarNotesState`, `CarAccessFacade`/`CarAccessState`, `CarWishesFacade`/`CarWishesState`) — what the shell and other features (maintenance, notifications, settings, organization) import from `cars/`. The route array and lazy-loaded pages are not exported. In the other direction, `cars-details.component.ts` no longer imports `maintenance/`'s or `documents/`'s barrels at all (3d-2 refactor): the deadlines card, the alert banner and the "Documente" hub tile's sub-label now come from each feature's own `CarDeadlineSource`/`CarTabContribution.subLabel` contributions (see `core/car-page/FEATURE.md`), and `CarDetailsState` no longer loads either feature's data (`loadCarDocuments`/`loadMaintenanceRecords`, and their `carDocuments$`/`maintenanceRecords$` selectors, are gone; `DeleteDocument`/`DeleteMaintenanceRecord` went with them — their only consumers now go through `DocumentsFacade`/`MaintenanceFacade` directly). One unrelated, pre-existing exception: `car-wishlist-panel.component.ts` still imports `SERVICE_TYPE_CONFIG`/`serviceTypeConfig` from `maintenance/`'s barrel (static label/icon config for a wish's `service_type`, the same enum maintenance records use — no facade, no HTTP, nothing feature-gated) — out of scope for 3d-2, which only covers the car hub's documents/maintenance *data* coupling, not this static-config one.

**Garage list pills/attention panel (`CarListState.carDocumentsMap`)**: this is `cars`' own data (not routed through a `documents` contribution — the garage list isn't the car page, so `core/car-page`'s contribution mechanism doesn't apply here), but it's still *documents*-feature data, so it still has to respect the `documents` switch. It's populated two ways, neither of which is a dedicated per-car fetch: `hydrateFromBootstrap` (`CarListActions.HydrateFromBootstrap` / the shared `_HydrateDependentStates`) copies it straight from the bootstrap response's `documents: Record<carId, DocumentDto[]>` (already empty per-org when `documents` is off — see `core/features/FEATURE.md`), and that's the only path the normal garage load (`CarListFacade.loadCarList()` → `BootstrapActions.Bootstrap()`) actually goes through. A second, now-unreachable-in-practice path (`CarListActions.LoadCarList` → `LoadSharedCars`/`LoadCarListSuccess`) used to additionally dispatch one `GET /document/car/:carId` per car regardless of the feature switch — removed 2026-10-03 together with the `CarListActions.InjectCar` handler's identical one-shot fetch for a just-created car (which has no documents yet, so there was nothing to fetch). `CarListActions.LoadCarDocuments`/`Success`/`Error` are gone; `CarListState` no longer injects `DocumentService` at all.

**The car hub's tiles, the "…" sheet's "add" actions and the desktop sidebar's per-car subnav are pluggable, not hardcoded** — see `core/car-page/FEATURE.md`. `cars.car-page.ts` (`provideCarsCarPage()`) contributes Notițe/Wishlist/Sofer (behind the `car_notes`/`car_wishlist`/`driver_assignment` feature switches) and Partajare (not behind a switch — personal-only, so no organization switch applies). Sofer and Partajare are additionally gated by the car-specific access role via `hubVisible` — `role === 'OWNER'` / `role === 'FULL'` on an organization car, the same checks the hub tiles used before this existed. `cars-details.component.ts` renders whatever `CarPageContributionsService` resolves (`hubTabs`, `sheetActions`, `fuelAction`) instead of a fixed list of buttons; `main.component.ts`'s sidebar does the same for its subnav (`sidebarTabs`). Istoric/Plan (maintenance) and Rapoarte (reports) moved out of `cars.routes.ts` into their own feature's car-tab routes file; Documente/Notițe/Wishlist/Partajare/Sofer stay here since their page components live in `features/cars/`.

**Feature switch (notes/wishlist):** the backend's `CarNoteController` is tagged `@Feature('car_notes')` and `CarWishController` is tagged `@Feature('car_wishlist')` — a business organization with either key off gets 403 `FEATURE_DISABLED` on the corresponding endpoints. `CarController`, `CarAccessController` and `CarDeadlineOrderController` are deliberately untagged (core car data, and ordering/dismissed state shared by the documents/maintenance deadline widgets). See `ACCOUNT-CONTEXT.md`, "Feature switches".

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
- `car-notes/`, `car-wishlist/`, `car-sharing/` — the per-car sub-screens. (The
  "Documente" tab, `car-documents/`, moved to `features/documents/` in the 3d-2
  refactor — it's documents' own tab, just mounted at this same `cars/details/:id/documents`
  URL via `documents.car-tab.routes.ts`; see `core/car-page/FEATURE.md`.)
  `car-notes/` is a routed page (`car-notes-page.component.ts`) wrapping a
  presentational panel (`car-notes-panel.component.ts`) that owns the
  list/editor state (`formOpen`) and its header actions (`syncHeaderActions()`).
  Notes' masonry is done in JS, not CSS columns (which would order notes
  top→bottom per column): a `ResizeObserver` on `#board` derives the column
  count from the width (min 150px columns under 600px, 240px above, at least
  2), and `layout()` deals the filtered, `updated_at`-desc notes into the
  column with the smallest *estimated* height (`estimateHeight()`, based on
  text length and the 12-line card clamp — keep `CONTENT_LINE_CLAMP` in sync
  with the SCSS). The editor is not an `<app-fullscreen-panel>`/modal: it's an
  absolutely-positioned layer over the panel host, offset by
  `--hau-shell-header-h` (the shell header floats over the route, so without
  the offset it covered the note's title — fixed 2026-09-27). Labels use the
  shared `<app-label-input>` (multi mode in the editor, single-pick mode for
  the "more labels" filter); it's OnPush, so the label lists it receives are
  computed in `layout()`/`computeLabels()` as fields, not getters. Its row
  sits outside `.cnp-editor-scroll`, and the filter's instance outside the
  sideways-scrolling `.cnp-chips`, because both containers would clip its
  suggestion panel. Checklist reordering is CDK drag-drop (`onItemDrop()`):
  one drop list when `checked_in_place`, otherwise one per section, each
  reordered into the slots its items already held in `form.items`. The
  "+ Element de listă" row is deliberately not `ngModel`-bound (clearing a
  bound model back to '' in the same tick is invisible to NgModel and left the
  first typed letter behind). `checked_in_place` is a `CarNote` column
  (default false). Colors: `$note-colors` in the SCSS mixes each hue into
  `--hau-surface`, so one definition works across all themes; keys must match
  `NOTE_COLORS`. `closeEditor()` is the single exit path
  and auto-saves when dirty (Keep behavior — the header "close" here therefore
  saves rather than discards, a deliberate exception to the close=cancel
  convention). Delete is deferred: the note goes into `pendingDeleteIds`
  (hidden) and the real DELETE is dispatched on the undo toast's dismiss.
  Backend (`history-auto-utility-be/src/modules/car-note/`): `CarNote` has
  `labels String[]`, `is_checklist Boolean`, `items Json?` (`[{text, checked}]`,
  returned as `[]` when null) and `color String?` (a palette key from
  `NOTE_COLORS` — `dto/car-note-constants.ts`, mirrored in
  `state/car-notes/car-notes.constants.ts` — null = default). Labels are
  normalized server-side (trim, strip commas, drop empties, case-insensitive
  dedupe keeping first spelling; ≤20 × ≤40 chars); items ≤200 × ≤500 chars;
  `content` defaults to `""` on create. `group_name` is legacy: migrated
  lazily on read (empty `labels` + `group_name` → `labels: [group_name]`),
  and any update that sends `labels` nulls it in the DB; create only writes
  it when a client sends `group_name` without `labels`. Title isn't
  required non-empty server-side — the UI requires title *or* content/items.
  Frontend state: `CreateNote`/`UpdateNote` send the full payload (with the
  saving flag); `PatchNote` (`facade.patchNote(carId, id, partial)`) PUTs only
  the given fields, applies them optimistically and rolls back to the previous
  note on error — used for ticking items / recoloring from the board. Not yet
  supported: pinning, manual reordering.
  `car-wishlist/` and `car-sharing/` follow the identical
  routed-page-wraps-panel shape
  (`share-vehicle-panel.component.ts`). Every such panel's root element must be an
  `<ion-content>` (not a plain `<div>`) — the shared shell header floats over
  the route (`.hau-header--minimal`, `position: absolute`), and its top
  clearance is applied globally only to `.main-outlet ion-content` (see
  `global.scss`); a panel rendered without that wrapper sits at y=0 and the
  header overlaps its content. Fixed 2026-09-24 on the notes and sharing
  panels — if a future per-car sub-screen follows this same
  routed-page-wraps-panel shape, give the panel an `<ion-content>` root from
  the start.
- **…and that `<ion-content>` root needs the panel host sized, or the whole
  screen renders blank.** The routed page's host is `.ion-page` (a flex
  column) and `ion-content` sizes itself with `flex: 1 1 0`, but the panel
  component's host sits between them — left at the default `display: block` it
  has no height, collapses to 0, and takes the content down with it: every
  element is in the DOM with the right text, nothing is visible. All three
  panels (Notițe, Wishlist, Partajare) were in exactly this state until
  2026-09-25. The fix is the shared `.hau-page-panel` class in `global.scss`
  (`display: flex; flex-direction: column; flex: 1 1 auto; min-height: 0`),
  applied via `host: { class: 'hau-page-panel' }` in each panel's `@Component`
  — defined once rather than copied into three stylesheets. **Any new
  routed-page-wraps-panel screen needs that class too.**
- `car-wishlist/` — **the add/edit form is an in-place state swap, not an
  `<app-fullscreen-panel>`.** It was built as a fullscreen panel first and that
  did not work: the panel renders inside the routed page, whose `.ion-page`
  host sets `contain: layout`, which caps every descendant's z-index — so the
  panel's own navbar (holding its close and save) rendered *under* the shell
  header, and the page's FAB (z-index 999) floated on top of the form. The
  form was reachable but unsaveable. Fixed 2026-09-25 by following the Notițe
  pattern instead: `formOpen` swaps the list for the form inside the same
  `ion-content`, close goes in the header's start slot, save in the end slot,
  and the FAB is hidden while the form is open. `syncHeaderActions()` must be
  called from **every** place that flips `formOpen`.
- `car-wishlist/` specifics — the budget line is computed once per store
  emission in `_recompute()`, not from template getters: it walks the ACTIVE
  wishes in `position` order accumulating `estimated_cost`, marks each row
  `aboveLine`, and flags the row the dashed line attaches to (`edgeBelow`, or
  `edgeAbove` when the budget doesn't cover even the first wish; neither when
  everything fits, since there'd be nothing below it to separate). **The line
  is rendered as a child of its row, absolutely positioned into the row gap,
  not as a sibling in the list** — `ion-reorder-group` counts its children to
  derive the drag's `from`/`to` indices, so an extra element between rows would
  desync them from `rows`. Reordering is optimistic in the state (the row has
  already moved on screen by the time the request fires) and rolls back to the
  pre-drag order if the server rejects it.
- `driver-assignment/` — same routed-page-wraps-panel shape as `car-sharing/`
  (`driver-assignment-page.component.ts` reads `organization_id` off the car —
  not on the generated `CarDto`, see `driver-assignment.model.ts`'s
  `WithOrganizationId` note — and passes it to
  `driver-assignment-panel.component.ts`). The API client
  (`driver-assignment/driver-assignment-api.service.ts`, moved out of
  `core/` in the feature-boundaries refactor) loads the current
  assignment, the full history, and the assignable users
  (`DriverAssignmentApiService.getCandidates()` ->
  `GET /car/:carId/driver-assignment/candidates`, accepted members of the
  car's org with their role, any role) in one `forkJoin`. It deliberately does
  NOT use `GET /organization/:id/members`: that list is rank-filtered by
  `canSeeMember`, so a fleet admin only saw themself and their inviter (and
  nothing for roles with no visibility). User-facing wording is "User /
  Utilizator" (route path and the `driverAssignment` keys keep the old
  names; the `organization.role.DRIVER` label stays "Driver"). Assign/unassign buttons are icon-only (checkmark / person-remove,
  with `aria-label`), per the app-wide "no text buttons" direction. The "…"
  sheet item and desktop hub tile are gated on `role === 'FULL' &&
  isOrgCar(car)`, same as the "Partajare" tile's `role === 'OWNER'` gate —
  this relies on `effectiveRole$` resolving organization cars correctly,
  which needed its own fix (see `CarAccessService.getSharedCars` in
  `features/organization/FEATURE.md` — before 2026-10-01 it only knew about
  personal `CarUserAccess` shares, so it silently defaulted every
  organization car to `'OWNER'` for any viewer who didn't personally create
  it, for every role including DRIVER). The backend
  (`DriverAssignmentService.assertCanManage`) is still the real
  enforcement — it resolves the caller's actual role via
  `CarAccessService.resolveUserRoleById` and rejects anyone who isn't
  OWNER/FULL-equivalent — but the frontend gate is correct now too, not
  just a safe fallback. Backend
  (`history-auto-utility-be/src/modules/driver-assignment/`): `CarDriverAssignment`
  (car_id, driver_user_id, assigned_by_user_id, started_at, ended_at — null
  means current) under `/car/:carId/driver-assignment`, only valid for
  `Car.organization_id != null`. Assigning a new driver closes the previous
  row in the same transaction rather than overwriting it, so history survives.
  This is also what gives the `DRIVER` organization role real scoping:
  `CarAccessService.resolveUserRoleById`/`getAccessibleCarIds` now only grant
  a DRIVER access to the car(s) they're currently assigned to (mapped to
  `CarAccessRole.MAINTENANCE`), instead of every car in the organization like
  every other role still gets. (That role-scoping check is independent of the
  `driver_assignment` feature switch below — it's core authorization, not a
  switchable vertical, so it is not gated.) **Feature switch:** the
  controller (`DriverAssignmentController`, all of `GET/POST/DELETE
  /car/:carId/driver-assignment…`) carries `@Feature('driver_assignment')`,
  enforced the same way as every other `@Feature`-tagged controller (see
  `core/features/FEATURE.md`); `cars.car-page.ts`'s `sofer` `CarTabContribution`
  and `cars.routes.ts`'s matching route both carry `feature: 'driver_assignment'`
  (the route still needs `scope: ['business']` on the same `data` object — see
  the comment at the top of `cars.routes.ts`), and the mobile "…" sheet's
  hand-rolled "Sofer" item (a `cars-details.component.html` duplicate of the
  desktop-only tile, not something that goes through the contribution list)
  additionally checks `features.isEnabled('driver_assignment')`. The
  Organization fleet list (`OrganizationService.getOrganizationCars`) forces
  `currentDriver: null` for every car when the switch is off instead of
  omitting the query (the same select already existed for the always-on
  thumbnail/plate columns, so it was simpler to gate the mapped value than
  the Prisma `select` shape) — `organization.component.ts`'s
  `showDriverAssignment` computed then hides the current-user/"assign"
  trailing button entirely so there's nothing to tap through to a 403.
- `remove-car-panel/` — the sold/restore/delete bottom sheet. Emits
  `markSold` / `restore` / `deletePermanently` / `closed`; the host decides
  what to do.
- `component/car-row-item/`, `component/card-list-item/` — the two garage row
  layouts.
- `state/` — five NGXS slices, deliberately separate:
  `car-list/` (the garage: owned + shared + sold), `car-details/` (the one
  currently-open car, plus create/update/photo actions),
  `car-access/` (sharing), `car-notes/`, `car-wishes/`.
  `car-list.state.ts`'s `sharedList` bucket holds the cars shared with the
  user; `personalSharedCarList` filters it to `organizationId == null` (a
  defensive guard — since 2026-10-02 the backend no longer returns
  organization rows to a personal session). The former
  `organizationCarGroups` selector, `OrganizationCarGroup` type and the
  per-organization garage sections were removed. `organizationId`/
  `organizationName` on `SharedCarEntry` are additive backend fields not on
  the generated `SharedCarDto`/`BootstrapSharedCarEntry` — read via a local
  `...WithOrg` cast, same `WithXId<T>` convention as elsewhere (see
  `features/supplier/supplier.model.ts`).
  `cars-list.component.ts` builds `sharedCarList$` from
  `personalSharedCarList$` and `SessionContextService.isPersonal()` (empty in
  business), so in business the garage shows just the fleet as the main list
  from `activeCarList$` (the backend returns the active org's fleet from
  `GET /car` / bootstrap, scoped by the session context). `cars.routes.ts`
  tags `partajare` with `data: { scope: ['personal'] }` and `sofer` with
  `{ scope: ['business'], feature: 'driver_assignment' }`; `cars-details`
  additionally gates the share / driver-assignment entries on
  `sessionContext.isPersonal()/isBusiness()` (and the driver-assignment one on
  `features.isEnabled('driver_assignment')` too).
  Car creation in business no longer needs `?organizationId=` (the backend
  forces `organization_id = ctx.orgId`); the param/`@Input` is still accepted
  and harmless.
  `car-wishes/` is provided at the **`main` route** rather than under `cars/`
  (see `main.routes.ts`): the wishlist page reads it, and so does
  `maintenance/add`, which marks a wish DONE once the record it graduated into
  is saved — providing it under `cars/` would put it out of reach of that
  sibling subtree.
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
- `shared/component/photo-carousel/` — the hub's hero carousel; the
  full-screen viewer it opens (`shared/component/photo-lightbox/`,
  pinch/double-tap zoom) is the same one used everywhere else in the app
  (Jurnal, document previews) — see that folder's own `FEATURE.md`. The
  business-account thumbnail's "Update image"/"Delete image" fullscreen panel
  (`cars-details.component.html`'s `photoViewerOpen` block, built on
  `<app-fullscreen-panel>`) is a separate, single-photo management view with
  its own edit actions — it intentionally doesn't go through the shared
  viewer, since that viewer has no concept of edit/delete actions.
- `shared/component/form-field/` — the labelled input wrapper used throughout
  the form.
- `core/document-extraction.service.ts` — the talon scan.

**Backend** — `history-auto-utility-be/src/modules/car/`
(`@Controller('car')`)

- `POST /car`, `GET /car` (the caller's cars), `GET /car/:id`, `PUT /car`,
  `DELETE /car/:id`, `GET /car/user/:userId`.
- `PATCH /car/:id/sold` and `PATCH /car/:id/restore` — the archive/restore pair.
- `DELETE /car/photo/:photoId` and `PATCH /car/photo/:photoId/default` — photo
  management is its own set of endpoints, not part of the car payload. Both load the photo (404 if missing),
  resolve the caller's role on the photo's car via `CarAccessService.resolveUserRoleById` (context-aware:
  personal share/ownership vs. business membership; 403 if no access) and require USER or above, the same
  rule as `PUT /car` (`CarService.loadPhotoForEdit`). Before 2026-10-02 they had no access check at all.
- Related modules: `car-access` (sharing/roles), `car-note`, `car-wish`,
  `car-deadline-order`
  (the hub widget's manual ordering), `car-maintenance-settings` /
  `car-maintenance-profiles`, `vehicle-catalog` (the make/model/year catalog),
  `upload` + `storage` (photos).
- Prisma model `Car`: identity (`vin` unique, `make`, `model`, `variant`,
  `year`, `license_plate`), technical (`fuel_type`, `transmission`, `engine`,
  `color`), mileage (`current_mileage` — what the user entered — plus
  `actual_mileage` / `actual_mileage_updated_at`, which the app derives from
  the newest maintenance record), ownership (`purchase_price`,
  `purchase_price_currency` default `"EUR"`, `ownership_start_date`),
  `last_oil_service_date`/`_mileage` (if set when the car is created,
  `CarService.createCar` also creates a matching `OIL_CHANGE`
  `MaintenanceRecord` in the same transaction, so the maintenance Plan has a
  baseline to count down from right away instead of ignoring these two
  columns until a real oil-change record is logged — not done on
  `updateCar`/edit; see `features/maintenance/FEATURE.md`'s Implementation
  section for the record's exact fields), lifecycle (`status: CarStatus` default
  `ACTIVE`, `sold_at`), `wishlist_budget` (the ceiling the wishlist's budget
  line is drawn at — one per car, shared with co-owners, not per user), and
  relations to maintenance records, documents, photos, access entries, blog
  entries, notes, wishes, deadline orders, maintenance settings/profiles and
  sent reminders. `Car.nickname` (`String? @unique`) still exists on the
  table but is **deprecated and unused** (2026-10-01) — see "Private per-car
  names" below. Don't add a new read or write of it.
- **Private per-car names** (2026-10-01): a car's display name used to be one
  global `Car.nickname` column (`@unique`), visible to everyone with access to
  the car. It's now `CarUserNickname` (`car_id`, `user_id`, `nickname`,
  `@@unique([car_id, user_id])`) — one private row per (car, viewer) pair, no
  uniqueness across different users. `CarService.toCarDto()` resolves the
  `nickname` field on the outgoing `CarDto` as *the requesting user's own*
  row (or `null`, meaning "no personal name set — show make+model"); it never
  reads the old column. Every mutating `CarService` method
  (`createCar`/`updateCar`/`markAsSold`/`restoreCar`/`deleteCar`/
  `getAllCars`/`getCarsByUser`/`getCar`) resolves the acting/viewing user's id
  (from `google_id` via a small helper, or the method's existing `userId`
  param) and passes it through to `toCarDto`; `getAllCars`/`getCarsByUser`
  batch-fetch with `getMyNicknamesMap()` instead of one query per car.
  `AddCarDto.nickname`/`UpdateCarDto.nickname` are unchanged on the wire — the
  API contract didn't change shape, only what the field means server-side —
  so no frontend DTO/auto-gen regeneration was needed; every existing
  frontend read of `car.nickname` (garage rows, the hub title, sharing/notes/
  wishlist panel titles, `cars.utils.ts`'s `getCarSubtitle`,
  `attention-items.util.ts`) already does `car.nickname ?? make+model` and
  now transparently shows the viewer's own private label with no FE changes.
  The one exception is `features/organization/dto/organization-car.dto.ts`
  (`OrganizationCarDto`), which dropped `nickname` entirely in favor of a
  resolved `photoUrl` — see `features/organization/FEATURE.md`.
  The old global-uniqueness `CAR_NICKNAME_CONFLICT` notification/validation
  (a Postgres `P2002` catch on `Car.nickname`) was removed outright — private
  per-viewer names can't meaningfully "conflict". Notification label building
  that used to read `car.nickname ?? make+model` (VIN/plate-conflict
  notifications in `car.service.ts`, car-share invite/accept/remove/role-change
  notifications in `car-access.service.ts`, the daily document-expiry reminder
  in `document-reminders.service.ts`) was audited one by one: a notification
  shown to the car's own owner resolves *that owner's* private label; a
  notification shown to anyone else (an invitee, a removed/role-changed
  member) always uses make+model, never the owner's or anyone else's private
  label. The document-expiry reminder now resolves **each recipient's own**
  label per car instead of computing one shared label for everyone on that
  car. A one-off backfill script (run once against `hau_db_dev`, not kept in
  the repo) copied every car's pre-existing `Car.nickname` into a
  `CarUserNickname` row owned by that car's creator (`Car.user_id`) before any
  of this code shipped, so no family member's existing name was lost.
- `car-wish` module (`@Controller('car-wish')`): `GET /car-wish/car/:carId`
  returns the whole screen in one payload (`{ budget, items }`); `POST
  /car-wish`, `PUT /car-wish/:id`, `DELETE /car-wish/:id`; plus
  `PUT /car-wish/car/:carId/reorder` (body `{ ids }`, applied in one
  transaction and scoped to the car so a crafted id list can't move another
  car's wishes) and `PUT /car-wish/car/:carId/budget`. Prisma model `CarWish`:
  `title`, `notes`, `estimated_cost`, `service_type` (**the same `ServiceType`
  enum maintenance records use**, so a completed wish pre-fills the maintenance
  form without a mapping table), `position` (hand-set priority, lowest first),
  `status: CarWishStatus` (`ACTIVE` / `DONE` / `DROPPED`) and `done_at`.
  `done_at` is derived server-side from the status, never sent by the client,
  so re-activating a wish clears it.

### Deadline card tap

`CarDeadlineItem` (`shared/utils/deadline-items.util.ts`) carries `documentId`
(source document; null for the car-row RCA/ITP/ROV fallback) and
`maintenanceRecordId` (from `PlanItem.lastRecordId`, the latest record of the
category; null when none). `openDeadline(item)` in `cars-details` no longer
navigates anywhere itself — it delegates to the item's own `CarDeadlineSource.open()`
(documents or maintenance, via `CarPageContributionsService.openDeadlineItem`), which
implements the same "view the record if there is one, else fall back to the same
target the action button uses" rule it always has (see `core/car-page/FEATURE.md`).
The card has `role="button"`/tabindex (not in reorder mode); the dismiss and action
buttons stop propagation.

### Business thumbnail header and vehicle silhouette

- `cars-details` renders the hero carousel only when `!sessionContext.isBusiness()`; in business the
  `.vd-name-row` gets `--biz` and starts with a 72px thumbnail (`.vd-biz-thumb`): default/first photo
  (`getSortedPhotos(car)[0]`) or `<app-vehicle-silhouette>` tinted `var(--hau-primary)`. `_pushHeaderTitle`
  never enables `setHeroOverlay` in business.
- The thumbnail is a `<button class="vd-biz-thumb-btn">` that sets `photoViewerOpen`; the viewer is an
  `<app-fullscreen-panel>` (close icon in `fspStart`, safe-area handled by the panel) rendered next to the
  remove-car panel, showing `getPrimaryPhoto(car)` (default/first, keeps the `id`) or the silhouette, with a
  spinner while `submitting$` or `photoDeleting`. Actions (`.vd-photo-viewer-btn`) only when
  `canEditPhoto(role)`: role OWNER/FULL/USER (same rule as `PUT /car`: USER or above) and not a business
  `DRIVER` (client-side role defaults to OWNER for org cars, so `activeOrgRole()==='DRIVER'` is checked
  explicitly; backend resolves DRIVER to MAINTENANCE). "Delete image" is hidden when there is no photo
  (silhouette), confirms through `AlertController`, calls `CarService.carControllerDeletePhoto` and refetches
  with `CarDetailsFacade.loadCurrentCar` (the garage list entry is not patched until it reloads). Keys:
  `cars.details.viewVehiclePhoto|updateImage|deleteImage|deleteImageConfirm.*`.
- Photo change: a hidden file input inside the viewer's "Update image" label;
  `onThumbnailPicked` resizes (`resizeImage` 1920/0.8) and calls `CarDetailsFacade.udpateCar({ id, files: [f],
  default_new_photo_index: 0 }, false)` — the same multipart `PUT /car` the edit form uses; the new photo
  becomes default and the state patch refreshes the thumbnail without navigating. Keys:
  `cars.details.changeVehiclePhoto|addVehiclePhoto`.
- `shared/component/vehicle-silhouette/`: `VehicleSilhouetteComponent` (`make`/`model` signal inputs) and
  root `VehicleSilhouetteService` (`GET /api/vehicle-silhouette?make&model` -> `{ status, svg }`, hand-written).
  The service caches one shared observable per make+model (`shareReplay` with `refCount: true`): all
  components asking for the same model share one request/poll, finished results stay cached, polling stops
  when nobody is subscribed any more. PENDING is polled every 5s for up to 18 tries (~90s), then the generic
  silhouette stays.
- Rendering: the SVG uses `currentColor` and is injected inline via `bypassSecurityTrustHtml` only after a
  client-side check (bare `<svg>`; no script/foreignObject/iframe/object/embed/image/use/a, no `on*=`
  attributes, no `href`, no `javascript:`); otherwise (and while loading/PENDING/FAILED/no make or model) a
  bundled hand-drawn generic car (viewBox `0 0 240 100`) is shown. Inline was chosen over `<img>` because
  an `<img>` data URL cannot inherit `currentColor`.
- Garage list: `car-list-item` and `car-row-item` use the silhouette as photo placeholder in business only.

### Update-mileage sheet

- `update-mileage-sheet/` — `UpdateMileageSheetComponent` (`app-update-mileage-sheet`), presented by
  `CarsDetailsComponent.openUpdateMileageDialog` via Ionic `ModalController` as a bottom sheet
  (`UPDATE_MILEAGE_SHEET_OPTIONS`, breakpoint 0.75; global look in `global.scss` under
  `ion-modal.update-mileage-sheet-modal`). Input `currentMileage`; dismisses with role `'confirm'` +
  `{ mileage }` or `'cancel'`. The caller still runs `_handleMileageUpdate` (warnDecrease/warnJump
  confirms, then the existing actual_mileage update) — the sheet itself never calls the API.
- The photo → km logic lives in `core/odometer-scan.service.ts` (`OdometerScanService`), shared with the
  maintenance fuel form. First sheet-modal in the codebase; reuse the same pattern for other sheets.

### Notes / decisions

- **Single car / favourite car**: `cars-list.component.ts`'s `ionViewWillEnter` redirects to the
  one car's hub (`replaceUrl: true`) once bootstrap settles, via `SingleCarService` (`core/`, not
  this feature's own `CarListFacade` — see "Single car" in `core/navigation/FEATURE.md`). The
  "Add vehicle" (single-car mode only) and "Favourite car" (star, always offered) "…" sheet
  actions are `CarActionContribution`s registered in `cars.car-page.ts`; `add-vehicle`'s
  session-wide visibility gate is applied in `cars-details.component.ts` (filtered out of
  `sheetActions` unless `SingleCarService.isSingleCarMode()`), not in the contribution itself,
  since `CarActionContribution` has no per-car dynamic gate. `cars.nav.ts` also contributes the
  Notes/Wishlist `car`-kind bottom-bar destinations, reusing their `CarTabContribution`s.
- **"Add vehicle" is business-admin-only (2026-10-05, backend enforcement closed the same day)**:
  `CarActionContribution` grew an `orgRoles?: string[]` field
  (`core/car-page/car-page.contributions.ts`, read by `CarPageContributionsService._staticActions`
  the same way tabs already read it) so the `add-vehicle` sheet action in `cars.car-page.ts` can
  carry `orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN']` — a no-op in personal, hidden from
  every other business role. The same check (duplicated as a small `canAddVehicle` computed,
  there being no shared "is business admin" service to inject into both a core service factory
  and a couple of plain components) gates: `cars-list.component.ts`'s header "+" / empty-state
  CTA / FAB registration and `main.component.ts`'s desktop sidebar "Adaugă vehicul" button. The
  `/main/cars/create` route itself now carries `data: { scope: ['personal', 'business'],
  orgRoles: ['OWNER','SUPER_ADMIN','FLEET_ADMIN'] }` directly on `CARS_ROUTES.create` in
  `cars.routes.ts` (one source of truth with every other `orgRoles`-gated route, enforced by
  `contextScopeChildGuard` — see `core/context/context-scope.ts`'s `scopeDataOf`), which made the
  old component-level redirect in `cars-create.component.ts`'s `ionViewWillEnter` redundant; it
  was removed. **Backend**: `CarController.createCar` (`history-auto-utility-be/src/modules/car/car.controller.ts`)
  now carries `@BusinessRoles(...CAR_CREATE_ROLES)`, mirroring `sale-contract.controller.ts` — a
  no-op in personal context, 403 `ROLE_NOT_ALLOWED` for any other business role. `CAR_CREATE_ROLES`
  (`car.service.ts`, `[OWNER, SUPER_ADMIN, FLEET_ADMIN]`) is the single source of truth for both
  this and the pre-existing, stricter service-level check `CarService.createCar` already ran for
  any car created directly inside an organization (covers the controller **and** the org admin's
  bulk `importCars`, which calls `createCar` once per row) — that check used to compare
  `ORG_ROLE_RANK` against `SUPER_ADMIN` only, which silently excluded FLEET_ADMIN (a rank-based
  comparison can't single FLEET_ADMIN out from FINANCE/MANAGER, who share its rank — see
  `organization-roles.ts`'s doc) and would have kept rejecting a FLEET_ADMIN even after the new
  `@BusinessRoles` let the request past the controller; widened to the explicit `CAR_CREATE_ROLES`
  set so both layers agree.
  **Found and fixed while verifying this**: `CarPageContributionsService._fits()`
  (`core/car-page/car-page-contributions.service.ts`) and `NavigationDestinationsService._fits()`
  (`core/navigation/navigation-destinations.service.ts`) both had `if (!scope && !feature) return
  true;` as their early-out — `add-vehicle` is exactly `feature: null` with no `scope` of its own
  but *does* set `orgRoles`, so that early return let it through unconditionally and the role
  check in `fitsContext` never ran; the "…" sheet still showed "Add vehicle" to a DRIVER. Fixed to
  `if (!scope && !feature && !orgRoles?.length) return true;` in both places.
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
- **A completed wish is not archived in place** (2026-09-24). Ticking one off
  routes to `/main/maintenance/add` with `wishId`, `title`, `serviceType` and
  `cost` query params; `MaintenanceFormComponent` reads them, feeds
  `initialTitle`/`initialCost` into `add-maintenance-panel`, and only dispatches
  `SetWishStatus(DONE)` on the panel's `(submitted)`. So abandoning the form
  leaves the wish untouched, and a wish that is DONE always has a real
  maintenance record behind it. If marking it done fails after the record
  saved, navigation still proceeds — the record is the source of truth, the
  wish can be ticked off by hand.

### Known gaps

- `FUEL_TYPE_OPTIONS`, `TRANSMISSION_OPTIONS` and `COLOR_OPTIONS` in
  `cars.constants.ts` carry **hardcoded Romanian labels**, which violates the
  Frontend i18n Rule in the root `CLAUDE.md`. They should become translation
  keys resolved through Transloco, the way `DOC_TYPE_CONFIG` does it.
- The car form has no draft/autosave; leaving mid-way (past the unsaved-changes
  prompt) loses everything typed.
- The wishlist's `DROPPED` status exists in the schema and the API but has no
  UI yet — abandoning a wish currently means deleting it. Planned as the
  "renunțat, dar păstrat" bucket.
- The wishlist budget is a flat number in RON with no currency handling, and
  isn't compared against the car's actual average monthly spend (the
  "asta e cheltuiala pe N luni" framing from the original design). Both were
  deferred out of the first pass.
- Wishes have no attachments, no link/price extraction and no trigger-based
  scheduling ("înainte de iarnă", "la următoarea revizie") — those were the
  stage-2 ideas and none of them shipped yet.
- **The `car-wish` endpoints only check that you're logged in, not that you
  have access to that car** — any authenticated user can read, add, reorder or
  delete another car's wishes by id, and set its budget. Verified 2026-09-25
  (the dev-bypass account could seed and delete wishes on someone else's car).
  This matches `car-note`, which has the same shape, so it's a pre-existing
  pattern rather than something new — but both should go through the same
  per-car access check the rest of the app uses.
- Summary counts are phrased to dodge pluralization ("Intră în buget (3)")
  because there's no `transloco-messageformat` in the project — a raw
  "{{count}} things" renders "1 things". Keep new copy count-in-parens or
  otherwise plural-agnostic until a plural plugin is added.
- **Driver assignment** has no notification to the driver when they're
  assigned/unassigned (2026-10-01: the Organization screen's fleet list now
  does link straight into this same assignment screen per car — see
  `features/organization/FEATURE.md` — so managing it no longer requires
  opening each car's own hub first).
