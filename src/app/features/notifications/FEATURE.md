# Notifications

## Functionality

The app notifies a user about things that need their attention, in-app and (when they're not
actively using the app) by push/email:

- **Car sharing**: someone shared a car with you (accept directly from the notification), your
  access to a shared car was removed, your role on it changed, or someone accepted the invite you
  sent them.
- **Maintenance due**: a service-plan item (oil change, brakes, ...) is coming due (within 14 days or 1000 km),
  has become due, or is overdue (repeated every 30 days), or a maintenance record's own reminder date is near.
  Tapping it opens that car's Plan tab.
- **Snoozing reminders**: document and maintenance reminders have a "Snooze" menu under them: remind me in 7 days, in 30 days, or don't remind me again (for that document / service cycle; a renewal or new service starts fresh), plus "Mute all reminders for this car…" which offers 1 month, 3 months, 6 months or until you turn it back on. Choosing marks the notification read and shows a confirmation toast. Snoozes and mutes are personal.
- **Organization**: you were invited to an organization (accept directly from the notification),
  or someone accepted your organization invite.
- **Business account approval**: when you request a company, the administrator approves or rejects
  it. Tapping an approval notification opens the company picker's create-company form so you can
  create the company immediately (a shortcut to `?create=1`). Tapping a rejection notification
  also opens the picker so you can see the reason and, if allowed, send a new request. Both appear
  only when in a business session (the picker is a business-only route).
- **Document expiry**: a document (RCA, ITP, Rovinietă) on one of your cars is about to expire —
  sent to the car's owner and everyone with accepted access to it. How many days in advance (on the day, 1, 3, 7,
  14 and/or 30 — any combination; default 7, 3, 1 and the day itself) and whether this is on at all is controlled per-user from the
  Settings screen's "Expiry reminders" section. Unlike the other types, this one is always sent
  by email as well as in-app/push, since the user may not be actively signed in when a document is
  close to expiring. One more reminder ("expired yesterday") is always sent the day after expiry,
  and the phone push is always sent even if the app is open elsewhere.
- **Data conflicts**: a VIN or license-plate conflict was detected on one of your cars.
- **Business access admin alert** (admins only): a user has requested company creation approval.
  Tapping this notification opens the Admin page's business access requests section. Sent only
  to users with `is_admin=true`.

Every notification channel (in-app text, phone/web push and email) is shown in the recipient's own language selected in Settings (English, Romanian or Russian), never the sender's.

Where you see them:
- **Desktop**: a "Notificări" section in the sidebar, always visible, with a red unread-count
  badge on the menu button.
- **Mobile**: at the top of the Account screen (Settings tab) — the mobile bottom tab bar has no
  sidebar, so this is the only place to see them; the Account tab icon shows the same red
  unread-count badge (capped at "9+").

Both surfaces show the identical list and behavior: unread items are bold, tapping a non-invite
notification marks it read and (for car-related types) opens that car, "Mark all as read" and
"Clear" (removes already-read items) appear next to the title when applicable, and each row has
a dismiss (×) button. Car-share and organization-invite rows show an Accept button instead of the
dismiss text, and that button disappears once the invite has actually been accepted (checked
against the live car/organization list, not just the notification's own state, so a stale
notification never offers to accept an invite twice). New notifications arrive live while the app
is open; if a user isn't connected, the notification still shows up the next time the list is
loaded, and (except where noted above) a push notification is sent instead.

## Implementation

**Language:** the in-app panel renders every type through Transloco keys (`sidebar.notifications.*`), never backend text. Push texts are built in `history-auto-utility-be/src/modules/notifications/push.service.ts` (`PUSH_TEXTS`, en/ro/ru for every `NotificationType`; DOCUMENT_EXPIRING/MAINTENANCE_DUE texts live in their mail templates). The recipient language is `data.lang` when the type sets it, otherwise looked up from `UserSettings.language` at send time (`resolveMailLang`, fallback en). New `NotificationType`s must add an entry in `PUSH_TEXTS`, a panel key in en/ro/ru, and pass the recipient's (not the actor's) language to any email.

**Public API: `index.ts`** exports only `NotificationsPanelComponent` — the single symbol `main.component.ts` and `settings.component.ts` embed from `notifications/`.

**Frontend:**
- `features/notifications/notifications-panel/` (`NotificationsPanelComponent`, selector
  `app-notifications-panel`) — the shared list/accept/dismiss UI, embedded by
  `features/main/main.component.html` (desktop sidebar) and `features/settings/settings.component.html`
  (mobile Account screen); one component, two placements. It reads live from `NotificationsFacade`
  and `BootstrapFacade.sharedCars$`/an organizations list (to know whether an invite shown on a
  notification has already been accepted elsewhere) but doesn't load or connect anything itself —
  `MainComponent` (mounted once for the whole authenticated session, regardless of which route is
  active) calls `NotificationsFacade.load()` and keeps `NotificationsSocketService` connected.
  Moved here from `features/main/notifications-panel/` (and before that `shared/component/`) in
  the feature-boundaries refactor — it's a feature in its own right, not shell UI, and living
  under `features/main` made `features/settings` depend on the shell to use it.
- `shared/state/notifications/` (`NotificationsActions`, `NotificationsState`, `NotificationsFacade`)
  — the NGXS store: `items`/`unreadCount` selectors, `load()`, `markAsRead(id)`, `markAllAsRead()`,
  `delete(id)`, `clearRead()`. **Deliberately left in `shared/`, not moved into this feature
  folder**: `core/notifications-socket.service.ts` dispatches `NotificationsActions.Received`
  directly into this store on every WebSocket message, and `core/` must never import `features/*`
  (enforced by the root `.eslintrc.json`) — moving the store here would force that core service to
  reach into a feature. `shared/` has no such restriction in either direction, so this is the
  correct home for state that both core infrastructure and a feature need.
- `core/notifications-api.service.ts` — `NotificationDto`/`NotificationType` and the
  `GET /notifications`, `GET /notifications/unread-count` etc. HTTP calls. Stays in `core/`
  because `core/push-notifications.service.ts` (FCM push-token registration, unrelated to this
  panel) also depends on the same DTO/service — it isn't notification-UI-specific, even though
  `features/notifications/notifications-panel/` and `shared/state/notifications/` are its main
  consumers.
- `core/notifications-socket.service.ts` — the WebSocket client (`socket.io-client`, path
  `/api/socket.io`, JWT sent via `auth.token` on native since there's no cookie jar there).
  `connect()`/`disconnect()` are called by `MainComponent` for the whole session.
  `notification$` is a raw `Subject<NotificationDto>` for components that need to react to a
  specific notification contextually without going through the store — currently
  `features/cars/car-sharing/share-vehicle-panel.component.ts` uses it this way. Stays in `core/`
  because it's used directly by that `cars` feature as well as by `main`/`settings` — exactly the
  "other things use it" case called out when this refactor moved the panel component out.
- Unread-count badges: `features/main/main.component.ts`'s `unreadNotifCount` and
  `features/settings`'s Account-tab badge both read `NotificationsFacade.unreadCount$` — the
  shell's own `attentionPanel` (upcoming document expiries computed from `attentionItems`, desktop
  sidebar only) is a separate, older mechanism not tied to the `Notification` DB table and is not
  part of this feature.
- i18n: `sidebar.notifications.*`, `sidebar.invites.*` (shared accept-button copy).

**Backend** (`history-auto-utility-be/src/modules/notifications/`):
- Prisma `Notification` table (`type` enum, generic `data` Json, `read_at`), `NotificationsModule`.
- WebSocket gateway on `/api/socket.io`, authenticated via `client.handshake.auth.token` (not a
  cookie — the token lives in `localStorage` on Capacitor).
- `NotificationsService.create()` sends over the open WebSocket if the user is connected,
  otherwise push (`PushService`, `firebase-admin`, `PushToken` model for `ANDROID`/`WEB`) — never
  both. `DOCUMENT_EXPIRING` is the one exception: the reminder job passes `forcePush: true`, so push goes
  out even with a live socket (push errors are logged, not thrown), **and** it sends email
  (`MailService.sendDocumentExpiring`, SMTP via ZeptoMail) regardless of WS connection state,
  since the user may not be in an active session when a document is about to expire.
- Document-expiry reminders: `DOCUMENT_EXPIRING` notification type, `DocumentExpiryType` enum
  (RCA/ITP/ROVINIETA), `DocumentReminderSent` dedup table (per user+car+doc+expiry_date+days_before,
  so the same reminder isn't resent daily), a `@nestjs/schedule` cron (`document-reminders` module)
  running daily. Recipients: the car's owner plus every user with accepted `CarUserAccess` on it.
  Per-user thresholds (`UserSettings.expiry_reminders_enabled`, `expiry_reminder_days: Int[]`,
  default `[7,3,1,0]`; -1 "expired" always sent) are set from `features/settings`.
- Maintenance-due reminders: `MAINTENANCE_DUE` notification type (`data: carId, carLabel, category, item (PlanItemKey, absent on older/record-date ones), stage
  SOON|DUE|OVERDUE|EXPIRY, soonBy (km|date|both|oil), nextDueDate, kmRemaining, daysLeft, overdueDays, description, recordId, lang`),
  `MaintenanceReminderSent` dedup table, daily cron in the `maintenance-reminders` module; same channel/forcePush/email
  behaviour as `DOCUMENT_EXPIRING`. Rendered in `notifications-panel` via `sidebar.notifications.maintenanceDue.*` /
  `maintenanceCategories.*` (the subject is the plan item's label when `item` is set, else the category; `soonBy: 'oil'` = "due at the next oil change"; dedup/deadline keys are `plan:<ITEM>`); see `history-auto-utility-be/src/modules/maintenance-reminders/FEATURE.md`.
- Snooze: `NotificationsApiService.snooze` -> `POST /reminders/snooze` ({ notificationId, days: 7|30|null }); backend module `reminder-snooze` (`ReminderSnooze` table, see the document-reminders and maintenance-reminders FEATURE.md). The panel shows an `<app-dropdown>` (leading `alarm-outline`) under `DOCUMENT_EXPIRING` (with `data.docId`) and `MAINTENANCE_DUE` (with `data.recordId`) rows; texts in `sidebar.notifications.snooze.*`. Car mute: backend `PUT/DELETE /reminders/car-mute/:carId`, `GET /reminders/car-mutes` (`CarReminderMute`); FE `NotificationsApiService.muteCar/unmuteCar/carMutes` and the signal store `core/reminder-mute.service.ts` (`ReminderMuteService`, root-provided, loads once on first injection): `isMuted(carId)`, `mutedUntil(carId)` (undefined = not muted, null = until turned back on, ISO = ends then), `mutes` / `mutedCarIds` signals, `await mute(carId, 1|3|6|null)`, `await unmute(carId)`, `reload()` (call after switching session context). The car list / car view can consume it directly. No snooze link in emails yet (would need signed tokens).
- Business account approval notifications: `BUSINESS_ACCESS_REQUESTED` (sent to all admins
  when a user submits a company request, `data: {requestId, company_name, userName, userEmail}`),
  `BUSINESS_ACCESS_APPROVED` (sent to the requester when approved,
  `data: {requestId, company_name}`), and `BUSINESS_ACCESS_REJECTED` (sent to the requester when
  rejected, `data: {requestId, company_name, reason?}`). Created by `BusinessAccessService` in
  the `requestAccess()`, `approveRequest()` and `rejectRequest()` methods. All three are visible
  in any context (i.e., `filterForContext` in the frontend includes them, not filtered by scope),
  but `BUSINESS_ACCESS_REQUESTED` is only ever sent to admins anyway. Tap behavior:
  `BUSINESS_ACCESS_REQUESTED` → opens `/main/admin` (only when in personal context; otherwise
  just marks read, as the admin route is personal-only); `BUSINESS_ACCESS_APPROVED` /
  `_REJECTED` → opens `/auth/select-organization?create=1`.
