# Navigation history

## Functionality

- **Back always returns to the exact page you came from.** Whether you pressed the header Back button, a page's own Back/Close button, or the phone's system Back (Android), you land on the previous page you actually visited, not on a fixed "parent" screen. A document opened from a car's History tab goes back to that tab; the same document opened from the global Documents list goes back to the list.
- **Save and Cancel on a form return to where the form was opened from.** Adding or editing a record, document, car or journal entry and then saving or cancelling puts you on the page that opened the form, with up-to-date data.
- **Switching tabs or filters does not add Back steps.** Moving between a car's tabs (Documents, History, Plan, Reports, Notes, Wishlist, Sharing, Driver) or changing a filter/query on the same page replaces the current step instead of stacking a new one, so Back skips the tab hopping and goes to what was before.
- **Deleted items are skipped.** After deleting a record, Back never lands on that record's detail or edit page; you return to the last page that still exists.
- **Refreshing the page keeps your history.** Reloading the browser does not lose where Back leads.
- **Opening a page directly (link, new tab) falls back to its logical parent**, for example a car's sub-page goes to the car, a document goes to the Documents list.
- Logging out or switching between personal and business accounts forgets the history, since earlier pages may no longer be accessible.
- On Android, pressing Back on a top-level screen still uses the existing double-press-to-exit behaviour.

## Implementation

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
