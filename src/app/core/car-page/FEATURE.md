# Car page contributions

## Functionality

A car's own hub screen (its tiles for History, Documents, Reports, and so on) and the desktop
sidebar's per-car subnav are not a fixed list — each feature that owns one of those sections
contributes it, and it only shows up if that feature is switched on for the organization (see
"Feature switches (per organization)" in `core/features/FEATURE.md`). The same goes for the "…"
menu's "add" actions (add a maintenance record, log a fuel/charge entry, upload a document), the
quick fuel/charge button next to the car's name, and the car hub's "Stare & scadențe" deadlines
card and expiry alert banner.

If an organization has a feature switched off, the matching tab disappears from both the hub grid
and the sidebar, its "add" action disappears from the "…" menu, its deadlines drop out of the
"Stare & scadențe" card (and the alert banner disappears too, if nothing else is still eligible for
it), and opening its URL directly sends you back to the garage — the same behavior as any other
feature switch. Turning the switch back on brings everything back exactly where it was; nothing
about the car itself is affected.

## Implementation

- **Contracts**: `car-page.contributions.ts` — `CarTabContribution` (hub tile + sidebar subnav
  entry: `id`, `feature` — a `FeatureKey` or `null` for a tab not behind any switch — `labelKey`,
  `icon`, `order`, `link(carId)` returning the commands/query params to navigate to, optional
  `scope`/`orgRoles` (same shape as route `data`, see `core/context/context-scope.ts`), optional
  `count`/`countKey` for a live second line under the title, `desktopOnly`, `inSidebar`/
  `sidebarOrder` when the sidebar needs a different subset/order than the hub grid, `isActive` for
  the sidebar's highlighted state, and `hubVisible` — a dynamic, car-specific gate on top of the
  static fields, for the two tabs (Partajare, Sofer) whose visibility depends on the caller's
  *access role on that car* rather than on session context/org role) and `CarActionContribution`
  ("add" actions: `id`, `feature`, `labelKey`, optional `descKey`/`colorClass`, `icon`, `order`,
  optional `scope`, `run(carId, injector)`). `CAR_TABS`/`CAR_ACTIONS` are multi `InjectionToken`s;
  `provideCarTabs(factory)`/`provideCarActions(factory)` register one feature's whole list behind
  a `useFactory` provider, so the factory can `inject()` whatever service a `count`/`run`/
  `hubVisible` closure needs (e.g. `MaintenanceFacade`'s sibling `CarDetailsFacade` for the Istoric
  count) — see each feature's own `*.car-page.ts` for the pattern.
- **`CarPageContributionsService`** (`car-page-contributions.service.ts`) resolves what's visible
  right now: `visibleTabs$(carId)` (hub grid — the static scope/orgRoles/feature-switch filter,
  further narrowed by each tab's `hubVisible`), `visibleSidebarTabs()` (sidebar — the static filter
  only, `inSidebar`/`sidebarOrder`-adjusted), `visibleActions$()` ("…" sheet/quick button) and
  `countOf(tab, carId)` (normalizes a tab's `count`, Signal or Observable, to an Observable). The
  static filter itself is a `computed()`, not a plain method — `FeatureService.isEnabled()` and
  `SessionContextService.context()` are both signals, and a plain method evaluated once at
  subscribe time can capture a stale "not loaded yet = all enabled" snapshot that never corrects
  itself once bootstrap actually settles (this was a real bug during development: the hub's tab
  list was computed once and frozen, while the sidebar happened to self-correct because its
  getter re-runs every change-detection cycle — fixed by making the candidate list a `computed()`
  and exposing it as an `Observable` via `toObservable()`, so both call sites react to the signal
  settling/changing instead of only the sidebar doing so by accident).
- **`visibleTabs$` de-dupes its own output with `distinctUntilChanged`, by tab id, not just by
  reference** (fixed 2026-10-05 — request-loop bug report). A `hubVisible` check is often itself a
  `combineLatest` over live data (e.g. `sofer`'s role/car check in `features/cars/cars.car-page.ts`
  combines `CarDetailsFacade.currentCar$` with the shared-car list) — those inputs settle over
  several ticks as the car hub mounts (an initial/empty value, then the real one), and every tick
  re-ran `visibleTabs$`'s own `combineLatest` too, emitting a *new array instance* with the exact
  same resulting tab ids. `cars-details.component.ts`'s subscriber (`_loadHubTabs`) has no de-dup
  of its own — every emission reloads every counted tab's count and sub-label from scratch
  (`_loadTabCounts`/`_loadSubLabels`, each firing a fresh, uncached HTTP request per tab) — so a
  single-car business hub mount fired the notes/wishlist/journal count requests 2-3x each within
  ~100ms. Comparing the emitted list by id (order is already stable, both come from the same
  `order`-sorted `_staticTabs`) lets a real add/remove through while swallowing the no-op re-ticks.
  The consumer-side fix (`_loadHubTabs` cancelling/replacing its previous count subscriptions
  instead of accumulating a fresh one per emission) would also close this, but wasn't needed once
  the spurious re-emissions themselves stopped.
- **`CarDeadlineSource`** (`car-page.contributions.ts`, token `CAR_DEADLINE_SOURCES`,
  `provideCarDeadlineSources(factory)`): a feature's contribution to the car hub's "Stare &
  scadențe" card (3d-2) — `{ id; feature; items$(carId); open(item, injector); dismiss?(item,
  injector) }`. `CarDeadlineItem` (`shared/utils/deadline-items.util.ts`) is the generic,
  feature-agnostic shape the card renders (`key`, `sourceId`, `carId`, `kind`, `state`,
  `progressPercent`, `daysLeft`/`kmRemaining`, `fromDate`/`dueDate`, `documentId`/
  `maintenanceRecordId`, `countryCode`, and `alert` — see below); it used to be the combined
  `buildDeadlineItems()`'s single `DeadlineItem` output, split so `features/cars` doesn't need to
  know what a document or a maintenance record even is. The split lives in each owner's own
  builder (`features/documents/document-deadline-items.util.ts#buildDocumentDeadlineItems`,
  `features/maintenance/maintenance-deadline-items.util.ts#buildMaintenanceDeadlineItems`); only
  the generic ordering math (`byUrgency`, `applyManualOrder`) stayed in `shared/utils/`.
  `CarPageContributionsService.deadlines$(carId)` merges every currently-visible source's
  `items$` (same "held back until `FeatureService.loaded()` AND enabled" rule as tabs/actions —
  see that service's `_visibleDeadlineSources`); `cars-details.component.ts` applies the manual
  order and dismissed-keys filter on top (both still cars-owned, since they're generic and
  persisted via the untagged `car-deadline-order` API, not feature-specific) and renders the
  result. `core/deadline-order.service.ts`'s `getOrder()`/`getDismissed()` read two different
  fields off the same `GET .../deadline-order` response but are called independently from
  `cars-details.component.ts` — fixed 2026-10-05 to share one cached request per car id
  (`shareReplay`, invalidated on `saveOrder`/`saveDismissed`) instead of firing the identical GET
  twice on every hub visit (part of the request-loop bug report, see this file's `visibleTabs$`
  note above for the bigger half of it). A card tap calls `CarPageContributionsService.openDeadlineItem()`, which delegates to
  the item's own source's `open()` — each source implements "view the record if there is one,
  else fall back to the same target its footer-action button uses" for its own kind (documents:
  the specific document, else the car's Documents tab; maintenance: the last record of that
  category, else "add a record"). The footer action button and the alert banner's "Schedule ›"
  button both stay in `cars-details.component.ts` itself (`onDeadlineAction()`), reusing the
  *already-resolved* `hubTabs`/`sheetActions` arrays (the "documents" tab's `goToTab`, the
  "add-maintenance" action's `run`) rather than a third contribution method — a document's action
  button intentionally goes to the car's Documents tab even when the specific document could be
  opened directly (that's what the card tap is for), which is why this couldn't just reuse
  `open()` for both. Dismissing calls `CarPageContributionsService.dismissDeadlineItem()`, which
  delegates to the source's `dismiss()` (maintenance: turns tracking off for that category,
  auto-creating a default profile on first dismiss, via `BootstrapFacade`/
  `CarMaintenanceProfilesService`/`CarMaintenanceSettingsService` — exactly what the Plan page's
  settings panel does) or returns `null` when the source has none (documents has no tracking
  setting to turn off), in which case `cars-details` falls back to its own generic
  dismissed-keys list, same as before.
  **The alert banner** (soonest expiring RCA/ITP/ROV within 60 days) is derived generically from
  `this.deadlines`' `alert: boolean` flag — set `true` only by the documents source, on exactly
  the RCA/ITP/ROV items (never on a foreign vignette, never on a maintenance item) — so
  `cars-details.getNextExpiry()` just filters/sorts by that flag and `daysLeft`, with zero
  knowledge of document *types*.
  **Both sources read `BootstrapFacade`** (`shared/state/bootstrap/`, not a feature) for their
  data (`documents$`/`maintenance$`/`maintenanceIntervals$`/`carMaintenanceSettings$`/
  `maintenanceProfiles$`, all keyed by car id) instead of firing their own dedicated per-car
  fetch — it's already loaded for every accessible car at bootstrap, and every write path that
  matters (creating a maintenance record, updating a setting, creating a profile) already folds
  its result back into that same cache (see `car-maintenance-settings.service.ts`'s doc), so the
  deadlines card and the Istoric tile's count stay live without `cars-details` re-fetching on
  `ionViewWillEnter` the way it used to for maintenance records (that reload is gone — it's no
  longer needed). Documents has no equivalent write-path patch-back yet (creating/editing a
  document through `DocumentsState` doesn't update `BootstrapState.documents`), a pre-existing
  gap this refactor didn't introduce and didn't need to fix (returning to the hub after adding a
  document already went stale before 3d-2, for the same reason).
- **`CarTabContribution.subLabel`**: a tile's second line that isn't a plain count (currently only
  Documente's expiring-vs-total message, styled red when something is expiring) is
  already-resolved display text (`{ text: string; danger?: boolean }`), supplied by the owning
  feature instead of being computed in `cars-details.component.ts` from data cars no longer has.
  `CarPageContributionsService.subLabelOf()` normalizes/gates it the same way `countOf()` does for
  `count`. Rapoarte's current-year sub-label stayed a small tab-id-keyed exception in
  `cars-details.component.html` — unlike Documente's, it's genuinely cars-owned (`new
  Date().getFullYear()`, no reports-feature data involved), so it never needed this mechanism.
- **Not `providedIn: 'root'`**: `CarPageContributionsService` and every `provideXCarPage()` call are
  registered explicitly in `features/main/main.routes.ts`'s root route `providers` (same level as
  `CarListFacade`/`CarWishesFacade`/`CarDetailsFacade`/`CarNotesFacade`). A route-level `providers`
  array creates a child environment injector; a `providedIn: 'root'` service's own injections are
  resolved against the true app root, which can't see a descendant route's providers — so the
  service has to be provided at (or below) the exact level the `CAR_TABS`/`CAR_ACTIONS` tokens are
  registered at, not above it. `CarDetailsFacade`/`CarNotesFacade` moved up from the `cars/` child
  route to this same root level for the same reason (a feature's `provideXCarPage()` factory needs
  them at this level, and a DI child is invisible to its own ancestor's injections).
- **Registration** (composition root, `features/main/main.routes.ts`): `provideMaintenanceCarPage()`
  (Istoric + Plan tabs, add-maintenance + add-fuel-entry actions, the maintenance deadline source),
  `provideDocumentsCarPage()` (Documente tab + its `subLabel`, add-document action, the documents
  deadline source), `provideReportsCarPage()` (Rapoarte tab), `provideBlogCarPage()` (Jurnal tab,
  with its own count), `provideCarsCarPage()` (Notițe, Wishlist, Sofer — the last behind the `driver_assignment` switch
  — and Partajare, which has `feature: null` since personal car sharing has no organization switch
  to sit behind; Partajare and Sofer additionally have their own role-based `hubVisible`). Each is
  exported from its feature's `index.ts`; none of these files contain a page component or a route
  array.
- **Tab routes live with their owner**: Istoric (+ its record detail) and Plan moved from
  `features/cars/cars.routes.ts` into `features/maintenance/maintenance.car-tab.routes.ts`;
  Rapoarte moved into `features/reports/reports.car-tab.routes.ts`; Documente moved into
  `features/documents/documents.car-tab.routes.ts` (3d-2 — the `car-documents/` component itself
  moved with it, via `git mv`, into `features/documents/car-documents/`). Notițe/Wishlist/
  Partajare/Sofer stay in `cars.routes.ts` (their page components already live in `features/cars/`)
  but carry their own `feature` tag now. The shell mounts each owner's own car-tab routes file as
  an extra child of `main.routes.ts`'s root route, at the **same path** as the `cars/` child
  (`` `${HAU_ROUTES.cars.path}/details` ``), via `loadChildren` — the one sanctioned deep/relative-import
  exception to the barrel rule (see "Feature boundaries" in the root `CLAUDE.md`). Multiple route
  configs sharing one `path` is legal in Angular: the router tries them in order and backtracks to
  the next sibling if a candidate's own children fail to match the rest of the URL, which is
  exactly what lets `cars/`'s lazy module fail fast on `details/:id/istoric` (or `.../documents`,
  it no longer defines either) and fall through to the owning feature's mount instead. Each owner's
  own route combines `:id` with its final segment into **one** route (`':id/istoric'`, not a `:id`
  parent with nested children) so the route's own `paramMap` still has `id` directly — both the
  page component (`this._route.snapshot.paramMap.get('id')`) and `NavigationHistoryService`'s
  `navTab` grouping (`core/navigation/FEATURE.md`) read the *deepest* active route's own `paramMap`,
  and a separate parent `:id` route would put `id` one level up from the leaf, out of its reach
  without turning on Angular's global `paramsInheritanceStrategy: 'always'` (not done — a global
  behavior change for one feature's routing shape wasn't worth it).
- **A route carrying `feature` must also carry `scope` on the same `data` object**: the guard's
  `scopeDataOf` (`core/context/context-scope.ts`) returns the single *deepest* ancestor route that
  declares `.scope`, not a merge of every ancestor's data — a `feature` on a route with no `.scope`
  of its own is invisible to the guard (it silently falls back to whatever ancestor route's `data`
  — e.g. `cars/`'s own `BOTH`, which has no `feature` — happens to have `.scope`). Every tab/action
  route added or re-tagged for this repeats `scope: ['personal', 'business']` alongside `feature`
  for this reason.
- **`core/context/context-scope.ts`**: `ContextScope`, `ContextScopeData`, `fitsContext()` and
  `scopeDataOf()` moved here from `features/main/context-scope.guard.ts` (which still holds the
  actual `CanActivateFn`/`CanActivateChildFn` guards and re-exports the moved types/functions for
  every existing `@hau/features/main` import) so `CarPageContributionsService` — a `core/` service
  — can reuse the exact same scope/role/feature matching logic the route guard and the sidebar's
  `navItems` already used, without `core/` importing a feature.
- **Global (non-car) entry points**: `/main/documents`, `/main/maintenance`, `/main/blog` and
  `/main/reports` (and `/main/plan`) now carry the matching `feature` in their route `data` too
  (`main.routes.ts`'s `DOCUMENTS_SCOPE`/`MAINTENANCE_SCOPE`/`JOURNAL_SCOPE`/`REPORTS_SCOPE`), and
  the sidebar's `documents`/`maintenance`/`reports`/`blog` `NavItem`s (`main.component.ts`) carry
  the same `feature` so they disappear from the sidebar the same way any other `feature`-tagged
  item does, going through the existing `fitsContext` check in `navItems`.
- **Known, preserved pre-existing gap**: the desktop sidebar's per-car subnav never had a "Sofer"
  entry (only the hub's desktop-only tile does) — `CarTabContribution.inSidebar: false` on the
  `sofer` contribution keeps this exact asymmetry rather than "fixing" it as a side effect of this
  refactor. Likewise the sidebar's "Partajare" entry has never checked the car-specific access role
  the way the hub's tile does (`role === 'OWNER'`) — it only checks personal/business context, so
  `visibleSidebarTabs()` deliberately has no `hubVisible` check at all, by design, not by omission.
