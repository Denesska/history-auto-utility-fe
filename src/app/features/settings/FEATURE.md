# Account / Settings

## Functionality

The Settings screen ("Setări", reached via the Account tab on mobile or the sidebar profile
area on desktop) lets a user control their personal app preferences and their session:

- **Notifications**: at the top of the screen, the same notifications list shown in the
  desktop sidebar — car-share invites (with an Accept button that joins the car), access
  changes (removed, role changed, someone accepted your invite), document-expiry reminders
  (RCA/ITP/Rovinietă), and VIN/license-plate conflict warnings. Unread ones are bold; tapping
  one marks it read and, for car-related types, opens that car. "Mark all as read" and "Clear"
  (removes already-read ones) appear next to the title when applicable. The mobile Account tab
  in the bottom bar shows a red badge with the unread count, so this is the way to notice and
  act on things like a car being shared with you — on mobile, this screen (not the sidebar,
  which only exists on desktop) is the one place notifications are visible.
- **Navigation**: a shortcut to "All documents" (the global, all-cars documents list), to Contracts, and — for administrator accounts only — to the Admin usage-stats page (the only way to reach it on mobile, where there's no sidebar).
- **Bottom bar**: a single row on the main Settings page ("Customize bottom bar") shows a small
  icon preview of the current bar and opens the full editor. The editor always has exactly 3
  slots (Account is a separate, always-shown 4th that isn't configured here — a note says so).
  Each slot has its own dropdown to pick a destination (see "Mobile bottom bar" in
  `core/navigation/FEATURE.md` for what each one does), or "Empty" — every destination already
  chosen in a *different* slot is left out of the others, so the same one can't occupy two slots,
  and the one remaining slot once the other two are Empty has no "Empty" option of its own (at
  least one item is always kept). A destination tied to a car (Documents, History, Plan, Notes,
  Wishlist, Journal) shows a second dropdown right under it, to pick *which* car that slot opens —
  only when the context has more than one active car (with one or none, there's nothing to choose,
  so the second dropdown doesn't appear); it starts on the favourite car, or the first car in the
  list if there's no favourite. Slots reorder by dragging a handle (touch-friendly, same drag
  interaction as the car hub's "Status & deadlines" card). "Reset to default" clears everything
  back to the built-in default (Garage, Reports, Journal). Unlike every other setting on this
  screen, this editor does **not** save as you go — picking a destination, picking its car,
  reordering and resetting all change a local draft only, shown immediately in the editor but not
  yet applied to the real bar. A **Save** button (checkmark, top right — same place/style as the
  app's other edit screens) writes the draft and closes the editor; it's disabled until the draft
  actually differs from what's saved. Closing with the **X** (top left) instead discards the
  draft with no confirmation. A hint names which account it applies to (your personal account, or
  the active organization) — the bar is a separate, independent choice per context.
- **Favourite car**: for a context with 2+ active cars, a dropdown picks which car is used as the
  default for a freshly-assigned bottom-bar slot, and as the fallback if a slot's own assigned car
  ever becomes inaccessible — see "Mobile bottom bar" in `core/navigation/FEATURE.md`. Hidden
  entirely with 0 or 1 car, where it would be meaningless or implicit.
- **Language**: switch the app's UI language between English and Romanian.
- **Theme**: choose between Light, Dark, Auto (follows the device), and a "BMW Classic" theme.
- **Vehicle view mode**: choose whether the garage list of vehicles displays as Cards or as a List.
- **Expiry reminders**: turn on/off notifications before a document (RCA/ITP/Rovinietă) expires,
  and choose how many days in advance (1, 7, 14, or 30) to be warned. Multiple day options can be
  selected at once.
- **Account**: for a company-issued (username+password) account, a "Change password"
  entry to voluntarily change it at any time — opens the change-password screen
  with plain "change your password" wording (as opposed to the "your company set a
  temporary password" wording shown when that screen is reached by a forced
  redirect right after login). Not shown for a Google-identity account, which
  manages its password through Google. Also: log out of the app, ending the
  current session.
- **Account — GDPR rights**: below the above, the same card offers:
  - "Terms and Conditions" and "Privacy Policy" rows that open the public legal
    documents (see `features/legal/FEATURE.md`), and — once the user has
    accepted them — a muted "Accepted on &lt;date&gt;" line underneath.
  - "Download my data" (GDPR Art. 15/20): downloads a JSON file with everything
    this account holds about the user as a person — profile, settings,
    personal cars and everything on them (documents, maintenance, notes,
    wishlist, photos listed by name), shared-car access, organization
    memberships, driver assignments, journal entries, personal suppliers,
    uploaded files, sale contracts (the other party's data is never decrypted
    into this file), saved identity, notifications, push tokens (masked),
    business-access requests, activity history and past legal consents.
    File attachments themselves (photos, scans, PDFs) are listed by name only,
    not included as binary content. The row shows a spinner while it runs and
    a toast on success/failure.
  - "Delete my account" (GDPR Art. 17), shown in the app's destructive/danger
    color: a confirmation dialog explains that personal cars, documents,
    maintenance history, photos, journal entries, contracts and settings are
    permanently deleted; that data belonging to an organization stays with
    the organization; that this cannot be undone; and to download your data
    first for a copy. The user must type their account email into the dialog
    to confirm. On success the session ends and the user lands on the login
    screen with a confirmation toast. Blocked, with an explanatory message,
    if the account is managed by an organization (ask that organization's
    admin instead — the delete row doesn't even show, replaced by a note
    saying so) or if the user still owns one or more organizations (those
    must be deleted or transferred first).

Every choice is saved immediately (no separate "Save" step) and applies right away.

## Implementation

**Public API: `index.ts`** exists as the feature boundary but exports nothing yet — no other feature consumes `settings/` today (the shell lazy-loads its routes by relative path); `settings/` itself is a heavy consumer of other features (admin, auth, cars, main, notifications).

- **Component**: `SettingsComponent` (`settings.component.ts` / `.html` / `.scss`), routed at
  `/main/settings`, rendered inside the shared shell (`features/main`).
- **Admin link**: the Navigation card shows `goToAdmin()` only when `isAdmin()` (signal, filled from
  `AdminApiService.isAdmin()` in `ngOnInit`). See `features/admin/FEATURE.md`.
- **Notifications**: the top card embeds `NotificationsPanelComponent`
  (`features/notifications/notifications-panel/` — its own vertical feature; see
  `features/notifications/FEATURE.md` for the full implementation), the same standalone
  component the desktop sidebar
  uses (`features/main/main.component.html`) — one place owns the list/accept/dismiss logic,
  shown in both surfaces. It reads live from `NotificationsFacade` (`shared/state/notifications/`,
  an NGXS store) and `BootstrapFacade.sharedCars$` (to hide the Accept button on a `CAR_SHARED`
  notification once that invite has actually been accepted); it doesn't call `.load()` itself —
  `MainComponent` (mounted for the whole authenticated session) already does that once, plus
  keeps the notifications WebSocket connected. The unread-count badge on the mobile Account tab
  (`features/main/main.component.html`, `.tab-btn-badge`) reads `MainComponent.unreadNotifCount`,
  populated from the same facade's `unreadCount$`.
- **2026-09-06**: added this notifications card. Previously the only in-app place to see
  notifications was the desktop sidebar; on mobile there was a bell button wired to open a
  bottom-sheet version of the same content, but nothing ever set the flag that opens it
  (`mobileNotifPanelOpen` was never assigned `true` anywhere) — mobile users had no way at all to
  see notifications, including car-share invites. Removed that dead bell/bottom-sheet and moved
  notifications here instead, per the user's explicit request to have them live on the Account
  screen with an unread badge on its tab icon.
- **Backend**: `SettingsService` (`settings.service.ts`) talks to `GET`/`PUT /user-settings`,
  covering `language`, `theme`, `view_mode`, `expiry_reminders_enabled`, `expiry_reminder_days`.
- **Navigation preferences**: a separate pair of endpoints, `GET`/`PUT /user-settings/navigation`,
  store the mobile bottom-bar item list and a favorite car — `{ bottom_bar: string[] | null;
  favorite_car_id: number | null }` — keyed per session context (personal vs. the active
  organization), not per user, so switching organizations gets its own set. Also returned as
  `navigation` in the `/app-data/initial` bootstrap payload for the session's current context,
  via the same resolver `GET` uses. A stored `favorite_car_id` that's no longer accessible (car
  deleted/sold/access revoked) comes back `null` rather than dangling. See `ACCOUNT-CONTEXT.md`
  ("Navigation preferences") for the full shape and validation rules.
- **Bottom bar / favourite car UI**: `SettingsComponent` reads/writes both through
  `NavigationPreferencesService` (`core/navigation/navigation-preferences.service.ts`), injected
  directly — `settings/` is a normal child of the same `features/main/main.routes.ts` route level
  that provides it (not `providedIn: 'root'`, see that service's own doc). The favourite-car
  dropdown's options come from `SingleCarService.activeCars()` (same `core/` service the
  single-car mode machinery already uses) plus a `'none'` sentinel value distinct from any real
  car id; `showFavoriteCar` hides the whole card when there are fewer than 2 active cars.
  `NavigationPreferencesService.setBottomBar`/`setFavoriteCar` already swallow a failed PUT for
  their other callers (the car hub's favourite-star action — optimistic local state stands
  regardless); this screen is the one place a failure should be visible, so the service also
  flips a `saveError` signal on that same failure, which this component watches with an
  `effect()` and surfaces as the app's usual danger-colored top toast, then clears it.
- **Bottom-bar editor (2026-10-04 redesign, Save/Cancel added 2026-10-05)**: the main page shows
  one collapsed row (`.st-bar-customize`, an icon preview of `navPrefs.resolvedBottomBar()` plus
  a chevron) that sets `SettingsComponent.bottomBarEditorOpen = true`; that's the *only* thing
  `SettingsComponent` owns about this editor — the editor itself is a dedicated child component,
  `features/settings/bottom-bar-editor-panel/` (`BottomBarEditorPanelComponent`, `<app-bottom-bar-
  editor-panel>`), which owns its own draft state and emits `(closed)` when done (saved or
  cancelled); the parent just flips `bottomBarEditorOpen` back to `false` in response.
  - **Why a separate component, not an `@if` block**: its host element has to reparent itself to
    `<body>` in `ngOnInit` (and remove itself in `ngOnDestroy`) — otherwise it renders *inside*
    the routed `SettingsComponent`'s `ion-page`, whose Ionic-generated `contain: layout` both
    traps its `position: fixed` (so it only covers that page's own box, not the real viewport —
    the shell's bottom tab bar, outside that box, stays visible underneath) and caps its stacking
    context below the shell header's own `z-index`, so no `z-index` on the panel can ever
    out-rank it. Exact same bug, exact same fix, as `features/maintenance/add-maintenance-panel/
    add-maintenance-panel.component.ts`'s own `ngOnInit`/`ngOnDestroy` (copy that comment before
    changing either) — an inline `@if` block has no element of its own to move, which is why this
    needed to become a real component instead of just adding a Save button to the old markup.
  - **Draft, not live**: the constructor seeds a local `editorSlots: BottomBarEditorSlot[]`
    (`{ key, destId, carId }`, always exactly `MAX_BOTTOM_BAR_ITEMS` entries, padding with
    `{ destId: null, carId: null }` if `resolvedBottomBar()` has fewer) from the current resolved
    state, plus a snapshot (`_initialEditorIds`) used by the `dirty` getter. Every control
    (destination dropdown, car dropdown, drag reorder, Reset) mutates `editorSlots` only — nothing
    reaches `NavigationPreferencesService` until Save. `key` is a monotonically increasing counter
    assigned once per slot at seed time (not the array index, which changes under a drag) — used
    as `@for`'s `track`, same reason `cars-details.component.html`'s deadlines list tracks by
    `item.key` rather than index.
  - **Per-slot controls**: each slot renders one `<app-dropdown>` for its destination
    (`slotDestinationOptions(i)` — every `availableDestinations()` entry not already chosen in a
    *different* slot, plus an `'__empty__'` sentinel option unless this is the only non-empty
    slot) and, only when `slotShowsCarPicker(i)` (`destId`'s destination is `kind: 'car'` AND
    `activeCars().length > 1`), a second `<app-dropdown>` (`.nbe-slot-car`) for `slotCarOptions`
    (every active car). Picking a destination (`onSlotDestinationChange`) defaults a fresh
    `kind: 'car'` slot's car to the favourite (if active) else the first active car
    (`_defaultSlotCarId()` — same fallback order `resolvedBottomBar()`'s own resolution uses).
  - **Reorder**: `cdkDropList`/`cdkDrag`/`cdkDragHandle` (`@angular/cdk/drag-drop`, already used
    by `cars-details.component.html`'s deadlines card — same drag-handle visual language,
    `reorder-three-outline` in a round button), `cdkDragLockAxis="y"` since it's a single column;
    `onSlotDrop` calls `moveItemInArray` on the draft only.
  - **Save/Cancel**: `<app-fullscreen-panel>` (see the frontend `CLAUDE.md`'s safe-area rule —
    never hand-roll this) with `fspStart` close (`close-outline`, `common.cancel`, calls `close()`
    → emits `closed`, no confirm — see below) and `fspEnd` save (`checkmark-outline`,
    `.hau-header-icon-btn--primary`, `common.save`) — the exact close/save navbar pattern
    `add-maintenance-panel`/`cars-form`/`documents-form` all use (frontend `CLAUDE.md`'s "Which
    action goes where"). Save is `[disabled]` while `!valid` (no slot chosen at all — defensive,
    the UI already prevents this) or `!dirty` (draft equals what's saved); while in flight
    (`saving`) the checkmark swaps for an `<ion-spinner class="header-btn-spinner">`, same
    convention/class as every other save button in the app. `save()` serializes `editorSlots`
    (non-empty slots, each `destId` alone or `` `${destId}:${carId}` `` when a car is set) and
    calls `NavigationPreferencesService.setBottomBar(ids)`, which now **returns an
    `Observable<void>`** instead of self-subscribing (this editor is its only caller) — `next`
    stops the spinner and emits `closed`; `error` just stops the spinner and leaves the panel
    open, since the service already flipped its `saveError` signal, which `SettingsComponent`'s
    own `effect()` (unchanged) turns into the usual danger-colored toast regardless of which
    setter caused it. **Cancel** (`close()`) discards the draft with no confirmation — same as
    every other non-routed panel in the app (`add-maintenance-panel` et al.); only the *routed*
    car form has an unsaved-changes confirm, via a route `CanDeactivate` guard
    (`cars-form-unsaved.guard.ts`) that doesn't apply to a toggled panel like this one.
  - **Reset**: `reset()` only replaces the *draft* with a preview of what `null` would resolve to
    (`resolveBottomBarEntries(null, ...)`, the same pure function `resolvedBottomBar()` itself
    calls — exported from `navigation-preferences.service.ts` precisely so this preview doesn't
    have to duplicate the fallback/car-resolution logic) and sets `_pendingResetToDefault = true`;
    any further edit clears that flag. `save()` checks it: a draft that's still exactly "reset,
    untouched since" sends the real `bottom_bar: null` (so a later favourite-car change keeps
    moving a reset car-kind slot along with it) rather than baking in whatever car that preview
    happened to resolve at reset time — saving `resolveBottomBarEntries(null, ...)`'s own output
    verbatim would otherwise quietly turn "always use the defaults" into "use today's resolution
    of the defaults, forever," which is a different, narrower promise than Reset is supposed to
    make.
- **Language**: delegates to `TranslocoService` (`setActiveLang`), persisted to
  `localStorage` (`LANGUAGE_STORAGE_KEY`) in addition to the backend, so the choice survives
  before the user settings have loaded on next launch.
- **Theme**: delegates to `ThemeService` (`theme.service.ts`); **view mode**: delegates to
  `ViewModeService` (`view-mode.service.ts`). Both push the change to `SettingsService` as well.
- **Logout**: `SettingsComponent.logout()` mirrors `MainComponent.logout()` (used by the desktop
  sidebar's logout button) — resets `CarListFacade`, disconnects `NotificationsSocketService`,
  calls `AuthService.logout()`, then navigates to `HAU_ROUTES.auth.fullPath`. Two independent
  call sites exist (desktop sidebar in `main.component.ts`, this screen) rather than a single
  shared helper — kept in sync manually if the logout sequence ever changes.
- **2026-09-06**: added the "Account" card (logout button) to this screen. Until then, mobile had
  no logout affordance at all — the only logout control was the desktop sidebar's icon button,
  unreachable once the sidebar is hidden below the 1024px breakpoint. Compounded by a separate
  layout bug (see `features/main/FEATURE.md`, 2026-09-06 entry) that clipped the bottom of every
  mobile page behind the fixed tab bar, which made the missing button harder to notice even by
  scrolling. Translation keys: `settings.account.title`, `settings.account.logout`.
- **Change password entry (2026-10-01)**: `isCompanyManaged` signal, filled in `ngOnInit` from
  `AuthService.getProfile()`'s `is_company_managed` field (cached after the first `/auth/me` call
  this session — see `features/auth/FEATURE.md`). `goToChangePassword()` navigates to
  `AUTH_ROUTES.changePassword.fullPath` with no query params, which is what makes the destination
  screen render its voluntary framing rather than the forced one. Translation key:
  `settings.changePassword`.
- **GDPR rights (2026-10-10)**: new `account-api.service.ts` in this feature folder
  (`AccountApiService`, `GET /account/export` returning a `Blob`, `DELETE /account` with
  `{ confirmation }` in the body). `goToTerms()`/`goToPrivacy()` navigate to `LEGAL_ROUTES.terms`/
  `.privacy` (imported from `@hau/features/legal`'s barrel, per the frontend `CLAUDE.md`'s feature-
  boundary rule). `legalAcceptedAt` is a `computed()` off `toSignal(authService.profile$)` —
  `UserProfile.legal.acceptedAt`, already populated by the same `/auth/me` call `authGuard`/
  `getProfile()` make elsewhere on this page.
  - **Export**: `exporting` signal drives a spinner swapped in for the row's icon
    (`.st-option-spinner`, same 16px/`currentColor` convention as every other in-app-button
    spinner). On the web, saves the blob via an object URL + a programmatic `<a download>` click
    (the standard browser download flow). On native, there is **no** Filesystem/Share plugin
    wired up anywhere in this app yet — `DocumentFileService`/`SaleContractApiService` only ever
    follow a *signed URL* (`Browser.open`), which doesn't apply to a direct JSON blob response —
    so the native path reads the blob as a `data:` URL (`FileReader.readAsDataURL`) and opens it
    with `@capacitor/browser`'s `Browser.open`, i.e. the user can view/copy/share the export from
    the in-app browser, but it isn't saved to the device's filesystem. This is a known gap, not a
    final design — revisit once `@capacitor/filesystem` (+ `@capacitor/share`) is added to the
    app for some other feature, and wire this up to use it instead. Also note the `data:` URL
    approach has a practical size ceiling (large exports can fail to open) that a real
    Filesystem-based save wouldn't have.
  - **Delete**: `confirmDeleteAccount()` opens an `AlertController` alert (header/body/confirm
    button text + a single text `input` for the email, same `role: 'destructive'` pattern as
    `sale-contract-list.component.ts`'s delete confirm) explaining what's deleted, what stays with
    an organization, that it's irreversible, and to export first — the body interpolates the
    account's own email so the user knows what to type; there's no live match-checking in the
    alert itself, the backend validates `confirmation` and the mismatch comes back as a toast.
    On success: `carListFacade.reset()` / `bootstrapFacade.reset()` / `notificationsSocketService
    .disconnect()` (same as `logout()`), then `AuthService.clearLocalAuth()` directly — **not**
    `logout()` — since `DELETE /account` already cleared the `access_token` cookie server-side and
    a subsequent `POST /auth/logout` call would be pointless (and is skipped so a network hiccup
    there can't block navigating away). Then navigate to `AUTH_ROUTES.login.fullPath` and show a
    confirmation toast. On error, `_deleteErrorMessage()` maps each documented backend `code` (400
    `ACCOUNT_DELETE_CONFIRMATION_MISMATCH`, 403 `ACCOUNT_COMPANY_MANAGED`, 409
    `ACCOUNT_OWNS_ORGANIZATION` — joining the `organizations[].name` list into the message — else
    a generic key) to a translated toast. The delete row itself is hidden by `isCompanyManaged()`
    in the template (replaced by a muted explanatory note), so the 403 branch in practice only
    fires if that status changes mid-session.
  - **Backend**: `history-auto-utility-be/src/modules/account/` (`AccountController`/
    `AccountService`) — both endpoints are `@SkipLegalConsent()` (a user must be able to exercise
    these rights even with a pending GDPR acceptance) and scoped `@Scope('any', { allowNoOrg:
    true })`. Export pulls every personal-context (`organization_id: null`) row the user owns
    across cars/documents/maintenance/notes/wishlist/photos/suppliers/blog/sale-contracts/
    identity/notifications/etc., explicitly excluding anything organization-owned (see
    `ACCOUNT-CONTEXT.md`); the other party on a sale contract is never decrypted into the file.
    Delete hard-deletes that same personal data (R2 objects best-effort, collected before the DB
    transaction since the rows pointing at them are what's being deleted), then **anonymizes** the
    `User` row in place rather than deleting it, so organization-owned records that still
    reference the user (driver assignments, fleet cars/documents they created, decisions on a
    business-access request, ...) keep referential integrity. Blocked (without touching anything)
    if the account is company-managed, or if the user still has an accepted `OWNER`/`SUPER_ADMIN`
    membership on any organization.
  - **Known backend gap**: `HttpExceptionFilter` (`common/filters/http-exception.filter.ts`) only
    forwards `message`/`error`/`code` from a thrown exception's response body onto the JSON sent
    to the client — the `organizations` array `AccountService.deleteMyAccount` puts on the 409
    `ACCOUNT_OWNS_ORGANIZATION` `ConflictException` is currently **dropped** by that filter before
    it reaches the frontend. The frontend code above already reads `err.error.organizations`
    assuming it's there; until the filter is extended to pass extra fields through, that branch's
    message falls back to an empty name list rather than actually naming the organization(s).
