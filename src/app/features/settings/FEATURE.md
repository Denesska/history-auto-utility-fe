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
- **Navigation**: a shortcut to "All documents" (the global, all-cars documents list).
- **Language**: switch the app's UI language between English and Romanian.
- **Theme**: choose between Light, Dark, Auto (follows the device), and a "BMW Classic" theme.
- **Vehicle view mode**: choose whether the garage list of vehicles displays as Cards or as a List.
- **Expiry reminders**: turn on/off notifications before a document (RCA/ITP/Rovinietă) expires,
  and choose how many days in advance (1, 7, 14, or 30) to be warned. Multiple day options can be
  selected at once.
- **Account**: log out of the app, ending the current session.

Every choice is saved immediately (no separate "Save" step) and applies right away.

## Implementation

- **Component**: `SettingsComponent` (`settings.component.ts` / `.html` / `.scss`), routed at
  `/main/settings`, rendered inside the shared shell (`features/main`).
- **Notifications**: the top card embeds `NotificationsPanelComponent`
  (`shared/component/notifications-panel/`), the same standalone component the desktop sidebar
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
