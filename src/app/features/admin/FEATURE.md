# Admin (usage stats)

## Functionality

A private page for the app's owner that shows how the app is growing and how people use it. Only accounts marked as administrators can see it: for everyone else the menu entry doesn't exist, and opening the address directly sends them back to the Garage.

**Where to find it:** "Admin" in the desktop sidebar, below Journal. On mobile, it's a link in the Navigation card of the Account screen — this screen has no bottom tab of its own, so on mobile it shows a back button instead of the tab bar (fixed 2026-10-01; it used to keep the tab bar and have no back button, which was inconsistent with how every other non-tab screen behaves).

**Period selector:** a dropdown at the top (last 7 / 30 / 90 / 365 days, or all time) changes every "in period" number, the trend charts and the activation funnel. Charts group by day for short periods, by week for up to about a year, and by month beyond that.

**What the page shows, top to bottom:**
- **Tracking notice**: from which day user activity has been recorded. Signups and added content go back to the app's start. Active users, retention, platforms and app versions only exist from that day on.
- **Headline numbers**: total users (with new signups in the period and the change versus the previous period of the same length), users active today / in the last 7 days / in the last 30 days, the share of monthly users who come back on any given day (DAU/MAU), active cars, and total records (documents + services).
- **Trend charts**: new users, active users, and content added (cars + documents + services) over the period. Hovering a bar shows its exact value.
- **Activation**: of the people who signed up in the period, how many added a car, then a document or service, then built up 5+ records, and how many shared a car with someone. This shows where new users drop off.
- **Cohort retention**: one row per signup week (last 8 weeks) with the percentage of that week's signups who used the app again 0, 1, 2… weeks later. A dot means there is no data yet: the week is in the future, or it happened before tracking started.
- **Feature usage**: for every feature (cars, documents, services, notes, wishlist, car sharing, sale contracts, journal, maintenance profiles, uploaded files, nav destinations, cockpit profiles), how many records exist, how many were created in the period, how many users have used it, and the share of all users that represents.
- **Platforms / app versions / push**: which devices active users are on (iOS, Android, web), which app version they run, and how many have push notifications enabled.
- **Fleet**: the most common car makes, fuel types, average model year, and how many cars were marked as sold.
- **Storage & reminders**: how much uploaded-file storage is used (in total and per area), and how many expiry reminders were sent.
- **Users table**: every account with signup date, last activity, days active in the last 30, and how many cars, documents, services, notes and journal entries they have, plus platform/app version and whether push is on. It's searchable by name or email. It shows **counts only**: no document contents, car details or identity data.
- **Organizations & features**: one card per organization (name, plan, member count, car count) with a toggle for every feature that organizations can switch off — Suppliers, Fleet costs, Sale contracts, Documents, Maintenance, Notes, Wishlist, Journal, Reports, Driver assignment. Flipping a toggle saves immediately; it applies only to that organization's business sessions (personal accounts always have everything). See `core/features/FEATURE.md` for what a disabled feature looks like to its members.

- **Business account requests** — when the app has business account approval enabled, a section shows all requests from users wanting to create a company. Each request shows the user's name/email, the requested company name, submission date, and current status (Pending / Approved / Rejected). A filter at the top (Pending / Approved / Rejected / All) narrows the list; a badge shows the count of pending requests. Tapping a pending request opens an approval dialog where you can approve it (which sends the user an approval email + notification) or reject it with an optional reason (sent to the user). Once decided, the request moves to the Approved or Rejected tab and is read-only.

## Implementation

**Public API: `index.ts`** exports `AdminApiService` and `adminGuard` — the only two symbols another feature or the shell imports from `admin/`. Everything else (the routed page/component) stays internal.

**Frontend** (`features/admin/`):
- `admin.component.*`: the routed page (`/main/admin`, `HAU_ROUTES.admin`), registered in `features/main/main.routes.ts` behind `adminGuard`. Uses signals. The period picker is the shared `<app-dropdown>`. It sets its shell title in `ionViewWillEnter` and clears it in `ionViewWillLeave`, and reloads stats and users on every enter.
- Charts: `shared/component/charts/bar-chart.component.ts` (`BarChartComponent`, `app-bar-chart`) — single-series vertical bars (plain DOM/CSS, no chart library) with a hover/tap tooltip clamped away from the card edges, labeling only the first, middle and last axis ticks — and `hbar-list.component.ts` (`HBarListComponent`, `app-hbar-list`) — labeled horizontal bars (funnel, platforms, makes…), scaling to `max` when given (funnel = % of step 1). Both used to live under `features/admin/components/`; moved to `shared/component/charts/` in the feature-boundaries refactor since `features/fleet-cost` also uses them and features must not import each other directly.
- Retention heatmap cells: one hue (`--hau-primary`) with its strength scaled via `color-mix`, and the % always printed in the cell, so color is never the only encoding.
- `admin.model.ts`: hand-written copies of the backend DTOs (the OpenAPI client isn't regenerated for this), including `AdminOrganization` (`feature_flags: Record<string, boolean>`, kept as a plain string-keyed record rather than `Record<FeatureKey, boolean>` so a key the frontend doesn't recognize yet still renders).
- `admin.guard.ts`: UX-only redirect. **Security lives in the backend** `AdminGuard`.
- `admin-api.service.ts`: `isAdmin()` (errors → `false`), `stats(range)`, `users()`, `organizations()`, `updateOrganizationFeatures(id, patch)`. Moved out of `core/` into this feature in the feature-boundaries refactor; `isAdmin()` is still consumed cross-feature by the shell (`MainComponent` sidebar entry `adminMenuItem`, shown when `isAdmin`) and the Settings screen (`SettingsComponent.isAdmin`, mobile entry).
- **Organizations & features section**: `AdminComponent.loadOrganizations()` loads the list on every page enter alongside stats/users. `featureKeys(org)` lists the keys present in that org's `feature_flags` (so an org only shows the switches the backend actually sent); `featureLabel(key)` translates it via `admin.organizations.features.<key>` when `key` is one of `core/features/feature-keys.ts`'s `FEATURE_KEYS`, otherwise shows the raw key. `toggleFeature(org, key)` flips the local signal immediately (optimistic), calls `AdminApiService.updateOrganizationFeatures`, replaces the row with the server's response on success, or reverts the flag and shows a toast (`admin.organizations.saveError`, `_showToast` helper, same `ToastController` pattern as `sale-contract-list.component.ts`) on failure. Boolean switches use plain `<ion-toggle>` (themed by the app's global Ionic color variables, same as `car-maintenance-settings-panel`), not a custom-built switch.
- `features/auth/auth-token.interceptor.ts` sends `X-Client-Platform` (`Capacitor.getPlatform()`) and `X-Client-Version` (`package.json` version) on every request. These feed the platform/version stats.
- i18n: everything under `admin.*` (including `admin.organizations.*`), plus `sidebar.nav.admin` and `settings.navigation.admin`.

**Backend:**
- `modules/activity/`: `ActivityInterceptor` (global, `APP_INTERCEPTOR`) runs after guards. For any request with `req.user.id` (except `/api/admin/*`, so the admin page's own traffic doesn't count), it calls `ActivityService.record()`. The service buffers hits in memory keyed by user and day, and `@Interval(60s)` flushes them in one transaction: it upserts `user_activity_days` (incrementing `request_count`, latest `platform`/`app_version`) and bumps `User.last_active_at`. It also flushes on shutdown. Up to a minute of counts can be lost on a crash, by design. Days are Europe/Bucharest calendar days (`activity-date.util.ts`). Header values are whitelisted/regex-checked.
- `modules/admin/`: `AdminController` (`/api/admin`, all behind `JwtAuthGuard`). `GET /me` → `{ isAdmin }` for any signed-in user. `GET /stats?range=7|30|90|365|0`, `GET /users`, `GET /organizations` and `PATCH /organizations/:id/features` are also behind `AdminGuard`, which reads `User.is_admin` from the DB on every call, so revoking takes effect immediately. `AdminService` builds the stats/users data with raw SQL (`$queryRaw`) aggregations; timestamps are converted from UTC to local time before bucketing; documents, services, notes and wishes are attributed to the **car owner** (those tables have no user column).
- **Organizations & features endpoints**: `GET /organizations` returns every `Organization` (name, plan, `OrganizationMembership`/`Car` counts via Prisma `_count`) with a `feature_flags` map holding every key in `common/features/feature-keys.ts`'s `FEATURE_KEYS`, `false` only where the org's `Organization.feature_flags` JSON explicitly disables it. `PATCH /organizations/:id/features` (`UpdateOrganizationFeaturesDto`, one optional boolean per `FEATURE_KEYS` entry — the global `ValidationPipe`'s `whitelist`/`forbidNonWhitelisted` rejects any other key) writes `false` as an explicit override or deletes the key (back to the default of on), then calls `FeatureAccessService.invalidate(organizationId)` so the change is visible on the org's very next request instead of waiting out the 60s cache.
- Schema (`prisma/schema.prisma`): `User.is_admin`, `User.last_active_at`, the `UserActivityDay` model (`user_activity_days`, PK `(user_id, date)`), `created_at` newly added to `Car`, `Document` and `MaintenanceRecord` (they had none, so growth charts couldn't count them), and `Organization.feature_flags Json?` (also read by `FeatureAccessService` for gating business sessions — see `core/features/FEATURE.md`).

**Business account requests section** (2026-10-09):
- `AdminComponent` loads `AdminApiService.businessAccessRequests(status?)` on
  each page enter, and displays them in a table/card list with status filtering.
  `approveRequest(id)` / `rejectRequest(id, reason)` call
  `AdminApiService` endpoints (`POST /admin/business-access-requests/:id/approve`,
  `/admin/business-access-requests/:id/reject`), and optimistically refresh the
  list on success. i18n: `admin.businessAccess.*`.
- `AdminApiService.businessAccessRequests(status?: 'PENDING' | 'APPROVED' | 'REJECTED')` →
  `GET /admin/business-access-requests?status=`. `approveRequest(id)` →
  `POST /admin/business-access-requests/:id/approve` (empty body, returns the
  updated request). `rejectRequest(id, reason)` → `POST .../reject` with body
  `{ reason?: string }`. Both endpoints are admin-only (`AdminGuard`) and behind
  the `POST /admin/business-access-requests/:id/approve` and `/reject` in the backend.
- Backend: `AdminBusinessAccessController` at `/admin/business-access-requests`
  (the same controller that serves `GET` requests, also handles the approve/reject
  POST methods). `AdminService.businessAccessRequests()` / `approveRequest()` /
  `rejectRequest()` perform the updates and send emails/notifications via the
  `BusinessAccessService`.

**Rolling out to test / prod (required manual steps):**
1. After the schema push, run `history-auto-utility-be/prisma/scripts/backfill-created-at.sql` **once** against that DB, with `-v cutoff="'<day of the push>'"`. Otherwise every existing car/document/service shows up as created on the migration day. It estimates old rows from attached uploads, falling back to the owner's signup date. It was already run on `hau_db_dev` (2026-09-27).
2. Mark the admin account: `UPDATE "User" SET is_admin = true WHERE email = 'denis.gandzii@gmail.com';`. There is no API to grant admin, on purpose.
3. **Business account approval (2026-10-09):** the owner's account (`is_admin=true`) must exist in both `hau_db_test` and `hau_db` (prod) before the feature can be used in those environments. If the admin account doesn't have `is_admin=true` in prod, the owner will be gated out of company creation the same way regular users are, unable to approve requests.

**Known limitations:**
- Activity data only exists from the day tracking was deployed on each environment. Retention cells before that are shown as "no data", but the week in which tracking started is only partially measured and reads low.
- "Active" means "made at least one authenticated API call that day". Opening the app counts (the bootstrap call). Background push delivery doesn't.
- Old app builds that don't send the client headers show up as platform/version "Unknown".
- Pre-existing `created_at` values for cars/documents/services are estimates (see backfill).
- dev's numbers are skewed by e2e test data (the dev-bypass account owns ~80 generated cars).
- Not built yet (planned stage 3): AI extraction call counts/cost/failure rate, 5xx error rate, email/push delivery stats. These need new logging first. There is no per-user drill-down page yet either, only the table.
