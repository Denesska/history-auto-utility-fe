# Navigation history, bottom bar and favourite car

## Functionality

### Back / history

- **Back always returns to the exact page you came from.** Whether you pressed the header Back button, a page's own Back/Close button, or the phone's system Back (Android), you land on the previous page you actually visited, not on a fixed "parent" screen. A document opened from a car's History tab goes back to that tab; the same document opened from the global Documents list goes back to the list.
- **Save and Cancel on a form return to where the form was opened from.** Adding or editing a record, document, car or journal entry and then saving or cancelling puts you on the page that opened the form, with up-to-date data.
- **Switching tabs or filters does not add Back steps.** Moving between a car's tabs (Documents, History, Plan, Reports, Notes, Wishlist, Sharing, Driver) or changing a filter/query on the same page replaces the current step instead of stacking a new one, so Back skips the tab hopping and goes to what was before.
- **Deleted items are skipped.** After deleting a record, Back never lands on that record's detail or edit page; you return to the last page that still exists.
- **Refreshing the page keeps your history.** Reloading the browser does not lose where Back leads.
- **Opening a page directly (link, new tab) falls back to its logical parent**, for example a car's sub-page goes to the car, a document goes to the Documents list.
- Logging out or switching between personal and business accounts forgets the history, since earlier pages may no longer be accessible.
- On Android, pressing Back on a top-level screen still uses the existing double-press-to-exit behaviour.

### Mobile bottom bar

The phone's bottom tab bar shows 1-3 destinations the user has chosen (Garage, Documents,
History, Plan, Reports, Journal, Notes, Wishlist, and — in a business account — Suppliers,
Organization, Fleet costs, Contracts), followed by a fixed Account tab and the center "+"
button. Garage is always available and can't be removed from the choice; while nothing has
been chosen yet, the bar shows Garage, Reports and Journal, same as before this was made
configurable. Choosing which items appear is done from Settings (see below).

A destination tied to "a car" (Documents, History, Plan, Notes, Wishlist, Journal) carries its
own assigned car, chosen when it's put in that slot (see "Bottom bar" in
`features/settings/FEATURE.md`): with only one active car, every slot implicitly opens that one
car and there's nothing to assign; with several, each such slot opens the car it was explicitly
set to, falling back to the favourite car (if still accessible) and then the first active car if
its own assigned car is ever no longer reachable (sold, access revoked). Tapping always goes
straight there — there is no picker to choose a car at tap time. The favourite car itself can be
set from that car's own "…" menu (a star action, showing whether it's currently the favourite),
or from the dedicated dropdown in Settings, and is also what a freshly-assigned slot defaults to.

Choosing which items appear in the bar, and which car each one opens, is done from Settings —
see "Bottom bar" and "Favourite car" in `features/settings/FEATURE.md` for the full editor
(exactly 3 slots, drag to reorder, an "Empty" option per slot down to a minimum of one, reset to
default, the favourite-car dropdown and when it's hidden).

### Bottom bar visibility on car-scoped routes

Viewing a car (its hub, or any of its tabs) normally replaces the bottom bar with that car's
own back button and sub-navigation. Two situations keep the bar on screen instead, since it's
how the user got there: the car's own hub screen in single-car mode (where it's the "My car"
destination, highlighted, with no back button — this is now a top-level screen, not something
you're "drilled into"), and a car's tab screen that's currently one of the user's chosen
bottom-bar items **for that same car** (e.g. Documents, if it's in the bar and assigned to this
car, keeps the bar visible with Documents highlighted while viewing that car's documents — the
normal back button still shows there, since the tab is also still reachable by drilling in from
the hub). Viewing the *same kind* of tab on a *different* car than the one a slot is assigned to
hides the bar, same as any tab not in the bar at all. Every other car screen — a specific record,
an edit form, a tab that isn't in the bar — behaves as before: no bar, back button only.

### Single car

When the current account (personal, or the active business organization) has exactly one car,
the app treats that car as "home": the Garage destination reads "My car" instead of "Garage"
and its icon/tap go straight to that car instead of a list, and opening the garage lands you
there directly. With no cars, or two or more, the garage works as a normal list, same as
always. The car can still be found and a second one added via "Add vehicle" in that car's own
"…" menu, since the garage list itself isn't otherwise reachable in this mode.

## Implementation

### Back / history

- **Service**: `core/navigation/navigation-history.service.ts` (`NavigationHistoryService`, root). Keeps its own stack of `{ url, tab }` entries (full URL incl. query string), max 50, persisted in `sessionStorage` (`hau.navHistory`, every access in try/catch). Recorded only from Router `NavigationEnd` (`urlAfterRedirects`), so cancelled/errored navigations and guard redirects never enter. `/auth*` is never recorded.
- **Recording rules** (in `_record`):
  1. Navigation started by the service's own `back()` pops the stack down to the target (or resets to `[target]` if absent).
  2. Same URL as the top entry: ignored.
  3. `navigationTrigger === 'popstate'` (browser/system back): pop if the URL equals the previous entry, otherwise push (forward button).
  4. `replaceUrl: true`: replaces the top entry.
  5. "Same page" replaces the top entry: only query/fragment differ, or both pages carry the same `navTab` group key.
  6. Otherwise push.
- **`navTab` route data**: the car routes are flat siblings (not nested children), so instead of marking a parent, each tab route in `features/cars/cars.routes.ts` carries `data: { navTab: 'car' }` (documents, istoric, rapoarte, plan, notite, wishlist, partajare, sofer). The group key is `<navTab>:<id param>`, so two tabs of the same car replace each other, but different cars do not. The car hub root, edit and `istoric/:recordId` are deliberately not tabs. To make another tabbed page behave the same, add `data: { navTab: '<name>' }` to its tab routes.
- **API**:
  - `back(options?: { fallback })`: previous entry via `NavController.navigateBack(url)` (keeps Ionic's page stack/animation in sync); without history goes to `fallback` or `parentOf(currentUrl)`.
  - `backAfterDelete(deletedUrl?, options?)`: first drops every entry whose path equals or lives under the deleted entity's base URL (default: current path minus a trailing `/edit`), then goes back.
  - `parentOf(url)`: logical-parent fallback (moved here from the shell's former `backHref`).
  - `canGoBack` signal, `clear()`.
- **Clearing**: `AuthService.resetUserState()` calls `clear()` (login, logout, user change, organization/context switch).
- **Hooks**: the shell (`features/main/main.component.ts`) captures clicks on the header `ion-back-button` (capture phase on its host) and calls `back()`; `backHref` now returns `parentOf(currentPath)`. `AppComponent.initializeExitOnBackButton` registers a priority-1 Ionic back handler on non-top-level routes (Android) when `canGoBack()`, outranking Ionic's own pop (0); overlays (100) still win and the double-back-to-exit handler (-1) is unchanged on top-level routes.
- **Migrated call sites**: documents form (save x3, cancel), document detail (Back, delete), maintenance form (save/cancel), maintenance record detail (delete), car form cancel, car state create/update success (back) and delete success, car details leave-shared / remove-from-organization, blog write/edit (save, cancel), blog entry view Back, sale-contract wizard leave, sale-contract detail Back and delete, organization import-cars close, shell Back button.
- **Left as-is**: car mark-as-sold / restore (`navigateRoot` to the garage, a state reset not a Back), `cars-edit` redirect when the car is SOLD, sale-contract wizard post-create `navigate` to the detail, error redirects (e.g. sale-contract detail load failure).
- **Special cases later**: pass `fallback` to `back()` for a different deep-link fallback, or call `backAfterDelete` with an explicit base URL. A screen needing a different destination should call `NavController` directly and say why in a comment.
- **Known limits**: browser history and the service stack can diverge after tab/query replacements; system Back on the web uses the popstate rule, Android uses the service directly. Detail pages are store-driven so they show fresh data when returned to.
- **Single-car interaction**: `parentOf()` falls back to `/main/cars` for the car hub root (`segments.length <= 1`) *unless* `SingleCarService.isSingleCarMode()` says this is that one car — in which case it returns the hub's own path unchanged, so a Back with no history doesn't bounce to the garage and immediately get redirected straight back (see "Single car" below). Injects `SingleCarService` (also root — a `core/` service may depend on another `core/` service).

### Nav destinations registry

- **Contract**: `core/navigation/nav-destinations.ts` — `NavDestination` (`id`, `feature` — a `FeatureKey` or `null`, `labelKey`, `icon`, optional `scope`/`orgRoles`, `kind: 'global' | 'car'`, `link()` for a `global` destination, `carTabId` for a `car` one). `NAV_DESTINATIONS` is a multi `InjectionToken`; `provideNavDestinations(factory)` registers one feature's whole list, same multi-provider/flatten convention as `CAR_TABS`/`CAR_ACTIONS` (`core/car-page/car-page.contributions.ts`) — `factory` runs inside Angular's DI via `useFactory`, so it may `inject()` whatever a `link()` closure needs (e.g. `organization.nav.ts` injects `SessionContextService` for the active org id in the fleet-cost route).
- **A `car`-kind destination has no `link` of its own** — `carTabId` names the matching `CarTabContribution.id` (see `core/car-page/car-page.contributions.ts`), and whoever resolves the destination calls `CarPageContributionsService.tabById(carTabId)!.link(carId)`, so the tab's own route stays the one source of truth. A `car`-kind destination's own `feature`/`scope` still has to match its tab's (same convention as every other duplicated-but-matching pair in this codebase, e.g. the global and car-page route `data` for the same feature in `core/car-page/FEATURE.md`).
- **`NavigationDestinationsService`** (`navigation-destinations.service.ts`) resolves `NAV_DESTINATIONS` the same way `CarPageContributionsService` resolves `CAR_TABS`: a `computed()` static filter (`fitsContext` + `FeatureService`, held back until `FeatureService.loaded()` for a `feature`-tagged entry), exposed as `visibleDestinations()`/`resolve(id)`. The Garage destination (`GARAGE_DESTINATION_ID`) is hardcoded inside this service, not a feature contribution — it isn't behind any switch and has no feature of its own to live in.
- **Registration** (composition root, `features/main/main.routes.ts`, same `providers` array as the `CAR_TABS`/`CAR_ACTIONS` contributions): `provideMaintenanceNav()` (history, plan), `provideDocumentsNav()` (documents), `provideCarsNav()` (notes, wishlist), `provideReportsNav()`, `provideBlogNav()` (journal), `provideSupplierNav()`, `provideOrganizationNav()` (organization, fleet-cost), `provideSaleContractNav()`. Each feature exports its `provideXNav()` from `index.ts`, next to its `provideXCarPage()` if it has one.
- **Journal is `kind: 'car'` (changed 2026-10-04)**: `blog.nav.ts`'s `journal` destination used to be `kind: 'global'`, linking unscoped to `/main/blog` — it's now `carTabId: 'jurnal'`, reusing the `jurnal` `CarTabContribution` (`blog.car-page.ts`) the same way Documents/History/etc. reuse theirs, so a Journal slot in the bar gets a per-car assignment like any other car-kind destination (`/main/blog?carId=`). That tab's `isActive` is a bespoke path+query check (`isCarTabActive()`'s `cars/details/:id/<segment>` shape doesn't apply to a flat `/main/blog` route). This only affects the mobile bottom bar — the desktop sidebar's own static "Jurnal" item (`main.component.ts`'s unrelated `NavItem` list) still goes to the unscoped `/main/blog`.
  - **Fixed 2026-10-05**: `MainComponent.isScopedBlogRoute` (the check behind hiding the bar on any `/main/blog?carId=` route) was never updated when Journal became a `kind: 'car'` destination above — it kept hiding the bar (and the shell FAB with it) unconditionally on that route, even for a car whose Journal tab *was* the bar's own chosen slot, unlike every other car-kind destination. Added `isScopedBlogBottomBarRoute` (same shape as `isScopedCarBottomBarRoute`, reusing the `jurnal` tab's own `isActive`) and changed `hideBottomNav`'s term to `isScopedBlogRoute && !isScopedBlogBottomBarRoute` — see "FAB audit" in `features/main/FEATURE.md`.
- **Not `providedIn: 'root'`**: `NavigationDestinationsService` and `NavigationPreferencesService` (below) are both provided at that same route level, for the same reason `CarPageContributionsService` is (see `core/car-page/FEATURE.md`) — `NavigationDestinationsService` reads the `NAV_DESTINATIONS` tokens registered there, and `NavigationPreferencesService` depends on `NavigationDestinationsService`.

### `NavigationPreferencesService`

- `core/navigation/navigation-preferences.service.ts`. Signals: `bottomBarIds()` (raw chosen ids, or `null`), `favoriteCarId()`, `resolvedBottomBar()` — a `ResolvedBottomBarEntry[]` (`{ rawId, destination, carId }`), the actual slots to render. See the fallback rule in "Bottom bar" above: unknown/hidden/disabled chosen ids are dropped; empty result falls back to the filtered defaults `['garage', 'reports', 'journal']`; still empty falls back to `['garage']` alone, which can never itself be hidden. For each `kind: 'car'` entry, `carId` additionally resolves to the slot's own stored car if still accessible, else the favourite car if accessible, else the first active car, else `null` (no active cars at all) — `null` for every other destination. Methods: `setFavoriteCar(id)` (self-subscribing, fire-and-forget, `void`), `toggleFavorite(carId)`, `isFavorite(carId)`, `availableDestinations()` (delegates to `NavigationDestinationsService`, for the Settings bottom-bar editor — see `features/settings/FEATURE.md`). `setBottomBar(ids)` is the one exception to "every setter here self-subscribes": it returns `Observable<void>` instead and does **not** subscribe itself (2026-10-05, when the Settings editor moved to an explicit Save button) — its only caller, `BottomBarEditorPanelComponent`, needs to know when the PUT actually settles (close the editor on success, keep it open with a toast on failure), so the request only goes out if that caller subscribes; give any future fire-and-forget caller its own `.subscribe()` rather than reintroducing one inside the method. Also exposes a `saveError` signal (`clearSaveError()` to consume it), flipped when a background `PUT` from *either* setter fails — the car hub's favourite star ignores it (same fire-and-forget silence as before), but the Settings screen watches it (one `effect()`, covers both setters) to show its own error toast.
- **Per-slot car encoding**: a stored id is either a bare destination id (`'garage'`) or, for a `kind: 'car'` destination with an explicit car, `'<destId>:<carId>'` (e.g. `'documents:143'`) — `parseBottomBarId()` (same file, exported) splits it back apart. The backend only validates the shape (`^[a-z][a-z0-9_:-]{0,40}$`, already allows `:`); the frontend owns what it means. A bare id (no `:carId`) is valid too — single-car sessions never need one (there's only one car to open), and it's also what a slot degrades to if its own saved car ever stops being accessible, until the user explicitly reassigns it.
- **Source of truth / optimistic writes**: initial values come from the bootstrap response's `navigation` field (hand-added to `BootstrapResponseDto`, threaded through `BootstrapActions.BootstrapSuccess` / `BootstrapState` / `BootstrapFacade.navigation$`, same pattern as `enabled_features` — see `core/features/FEATURE.md`). A `set*` call updates a local override signal immediately (so the UI doesn't wait for a round trip) and fires `PUT /api/user-settings/navigation` in the background; the local override is read in preference to the bootstrap value until the next `SessionReset`, which clears it (subscribed via NGXS's `Actions`/`ofActionDispatched(SessionReset)`, `takeUntilDestroyed`). Prefs are stored separately per session context (personal vs. each organization) on the backend — the frontend only ever reads/writes "the current context's" prefs, never names the context itself.
- **API**: `core/navigation/navigation-prefs-api.service.ts` (`NavigationPrefsApiService`), `GET`/`PUT /api/user-settings/navigation`, same shape/convention as `features/settings/settings.service.ts`.
- **No more car picker (removed 2026-10-04)**: a car-kind slot always resolves its own car now (see `ResolvedBottomBarEntry.carId` above), so a tap never has to ask — `MainComponent.goToDestination()` just reads `entry.carId` and navigates. `shared/component/car-picker-sheet/` (the old bottom-sheet "choose a car, optionally set as favourite" picker shown on a tap with no accessible favourite) was deleted along with its `nav.carPicker.*` i18n keys, since assigning a car is now done once, in the Settings editor, instead of on every ambiguous tap.

### Bottom bar visibility on car-scoped routes (implementation)

- `MainComponent.isScopedCarBottomBarRoute` — the one check behind both exceptions: the car
  hub root (`isCarHubRoot`) in single-car mode for that exact car id, OR (for any other
  car-scoped route) some `resolvedBottomBar()` entry of `kind: 'car'` whose own resolved
  `entry.carId` equals the route's car id AND whose
  `CarPageContributionsService.tabById(carTabId)!.isActive(url, carId)` matches the current
  URL — the same `isActive` every `CarTabContribution` already defines for the desktop
  sidebar's highlighting, which only ever matches a tab's own exact route (never a deeper
  child, e.g. a record detail or `/edit`), so this naturally excludes everything the bar
  should stay hidden for without a separate route-shape check. The `entry.carId` check (added
  2026-10-04 alongside per-slot car assignment) means this is specifically the slot's *own*
  car — viewing another car's Documents page no longer keeps the bar, even if Documents is
  chosen, since it's chosen *for* a particular car now.
- `hideBottomNav` became `(isScopedCarRoute && !isScopedCarBottomBarRoute) || ...` (every other
  existing hidden-route check unchanged); `showBackButton` additionally returns `false` when
  `isCarHubRoot && isScopedCarBottomBarRoute` (the single-car-hub case specifically — a bar-
  visible car *tab* route still shows the normal back button, since drilling in from the hub
  is also still a way to reach it).
- **FAB on a now-visible car tab**: showing the shell bar also shows the shell's centre FAB
  (same `!hideBottomNav` gate). Istoric already registered a `FabActionService` action
  unconditionally (`maintenance.component.ts`, shared with its global route) regardless of
  scope, so it needed no change. Documents (`car-documents.component.ts`), Notes
  (`car-notes-page.component.ts`) and Wishlist (`car-wishlist-page.component.ts`) did not — each
  now also registers one unconditionally in `ionViewWillEnter`/clears it in `ionViewWillLeave`,
  same pattern, reusing the exact method their own page-local bottom-right `ion-fab` already
  calls (`addDocument()`/`panel.openAdd()`). Whether that registration is ever reachable is
  entirely down to `hideBottomNav`, so registering it unconditionally is harmless on routes
  where the bar stays hidden. Plan still registers nothing — it has no single natural "add"
  action (same already-accepted precedent as Rapoarte never registering one) — as of the
  2026-10-05 FAB audit (see `features/main/FEATURE.md`) that now renders the FAB visibly
  **disabled** on the rare route where the bar makes it visible, rather than a silent no-op;
  Journal's car tab was the one case that needed an actual fix there (see that same audit)
  since it used to `clear()` its registration and rely on its own local FAB instead.
- **FAB on the car hub root (2026-10-04)**: `CarsDetailsComponent` (the hub root's own
  component — only that route, not any car tab) now registers a `FabActionService` action too,
  same `ionViewWillEnter`/`ionViewWillLeave` pattern, opening the same "…" action sheet its own
  header button does (`openMoreMenu()`, a small wrapper around `moreMenuOpen = true` that both
  call, so there's one source of truth). Reachable only in single-car mode, same gate as
  everything else in this section — a multi-car session's hub root still hides the bar/FAB like
  any other car-scoped route.

### Single car (`SingleCarService`)

- `core/navigation/single-car.service.ts`, root. `activeCars` (owned + personally-shared cars, excluding SOLD — sourced from `BootstrapFacade`, **not** `CarListFacade`/`CarListState`, since `core/` must never import a feature, not even `features/cars`; duplicates the same filter `MainComponent` already applied for its own vehicle counts), `isSingleCarMode` (`activeCars().length === 1`), `singleCar` (that one car, or `null`).
- **Consumers**: `features/cars/cars-list/cars-list.component.ts` (`ionViewWillEnter` redirects to the car's hub with `replaceUrl: true` once `BootstrapFacade.bootstrapped$` is true — the landing redirect); `NavigationHistoryService.parentOf()` (see above); `AppComponent.isTopLevelMainRoute()` (adds that one car's hub path to the Android double-back-to-exit set, dynamically, alongside the static `EXIT_ROOT_ROUTES`); `MainComponent` (`navigateToGarage()` goes straight to the car; the Garage bottom-bar destination's label swaps to `nav.tabs.myCar` and its active/tap logic point at the car); `features/cars/cars.car-page.ts` (gates the `add-vehicle` "…" sheet action — see below).
- **"Add vehicle" in single-car mode**: a `CarActionContribution` (`cars.car-page.ts`, id `add-vehicle`) navigates to `CARS_ROUTES.create`. `CarActionContribution` has no per-car dynamic visibility gate (unlike `CarTabContribution.hubVisible`), and this is a session-wide condition rather than a per-car one, so it's filtered out of `cars-details.component.ts`'s `sheetActions` (same spot that already special-cases `add-fuel-entry`) unless `SingleCarService.isSingleCarMode()`.
- **Favourite star action**: also a `CarActionContribution` (id `toggle-favorite`, always offered), calling `NavigationPreferencesService.toggleFavorite(carId)`. Its current-state badge/filled-star icon isn't part of `CarActionContribution`'s static shape (no reactive `labelKey`/`icon`), so it's rendered as a small, action-id-keyed template exception in `cars-details.component.html` (`isFavoriteAction()`) — same convention as Rapoarte's current-year sub-label (`core/car-page/FEATURE.md`).
- **Resolved**: the car hub root now stays on the bottom bar in single-car mode (see "Bottom bar visibility on car-scoped routes" above), so Account (and every other bar item) is reachable from there — a single-car session no longer loses its bottom-bar entry points once redirected onto the car. Any *other* tab of that car (a record detail, `/edit`, or a tab not currently in the bar) still hides the bar and shows a normal back button, same as any multi-car session's car screens — unchanged, pre-existing `features/main/FEATURE.md` behavior.
