# Admin (usage stats)

## Functionality

A private page for the app's owner that shows how the app is growing and how people use it. Only accounts marked as administrators can see it: for everyone else the menu entry doesn't exist, and opening the address directly sends them back to the Garage.

**Where to find it:** "Admin" in the desktop sidebar, below Journal. On mobile, it's a link in the Navigation card of the Account screen.

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

## Implementation

**Frontend** (`features/admin/`):
- `admin.component.*`: the routed page (`/main/admin`, `HAU_ROUTES.admin`), registered in `features/main/main.routes.ts` behind `adminGuard`. Uses signals. The period picker is the shared `<app-dropdown>`. It sets its shell title in `ionViewWillEnter` and clears it in `ionViewWillLeave`, and reloads stats and users on every enter.
- `components/admin-bar-chart.component.ts`: single-series vertical bars (plain DOM/CSS, no chart library) with a hover/tap tooltip clamped away from the card edges. It labels only the first, middle and last axis ticks.
- `components/admin-hbar-list.component.ts`: labeled horizontal bars (funnel, platforms, makes…). It scales to `max` when given (funnel = % of step 1).
- Retention heatmap cells: one hue (`--hau-primary`) with its strength scaled via `color-mix`, and the % always printed in the cell, so color is never the only encoding.
- `admin.model.ts`: hand-written copies of the backend DTOs (the OpenAPI client isn't regenerated for this).
- `admin.guard.ts`: UX-only redirect. **Security lives in the backend** `AdminGuard`.
- `core/admin-api.service.ts`: `isAdmin()` (errors → `false`), `stats(range)`, `users()`. It sits in `core/` because the shell (`MainComponent` sidebar entry `adminMenuItem`, shown when `isAdmin`) and the Settings screen (`SettingsComponent.isAdmin`, mobile entry) both need `isAdmin()`.
- `features/auth/auth-token.interceptor.ts` sends `X-Client-Platform` (`Capacitor.getPlatform()`) and `X-Client-Version` (`package.json` version) on every request. These feed the platform/version stats.
- i18n: everything under `admin.*`, plus `sidebar.nav.admin` and `settings.navigation.admin`.

**Backend:**
- `modules/activity/`: `ActivityInterceptor` (global, `APP_INTERCEPTOR`) runs after guards. For any request with `req.user.id` (except `/api/admin/*`, so the admin page's own traffic doesn't count), it calls `ActivityService.record()`. The service buffers hits in memory keyed by user and day, and `@Interval(60s)` flushes them in one transaction: it upserts `user_activity_days` (incrementing `request_count`, latest `platform`/`app_version`) and bumps `User.last_active_at`. It also flushes on shutdown. Up to a minute of counts can be lost on a crash, by design. Days are Europe/Bucharest calendar days (`activity-date.util.ts`). Header values are whitelisted/regex-checked.
- `modules/admin/`: `AdminController` (`/api/admin`, all behind `JwtAuthGuard`). `GET /me` → `{ isAdmin }` for any signed-in user. `GET /stats?range=7|30|90|365|0` and `GET /users` are also behind `AdminGuard`, which reads `User.is_admin` from the DB on every call, so revoking takes effect immediately. `AdminService` builds everything with raw SQL (`$queryRaw`) aggregations. Timestamps are converted from UTC to local time before bucketing. Documents, services, notes and wishes are attributed to the **car owner** (those tables have no user column).
- Schema (`prisma/schema.prisma`): `User.is_admin`, `User.last_active_at`, the `UserActivityDay` model (`user_activity_days`, PK `(user_id, date)`), and `created_at` newly added to `Car`, `Document` and `MaintenanceRecord` (they had none, so growth charts couldn't count them).

**Rolling out to test / prod (required manual steps):**
1. After the schema push, run `history-auto-utility-be/prisma/scripts/backfill-created-at.sql` **once** against that DB, with `-v cutoff="'<day of the push>'"`. Otherwise every existing car/document/service shows up as created on the migration day. It estimates old rows from attached uploads, falling back to the owner's signup date. It was already run on `hau_db_dev` (2026-09-27).
2. Mark the admin account: `UPDATE "User" SET is_admin = true WHERE email = 'denis.gandzii@gmail.com';`. There is no API to grant admin, on purpose.

**Known limitations:**
- Activity data only exists from the day tracking was deployed on each environment. Retention cells before that are shown as "no data", but the week in which tracking started is only partially measured and reads low.
- "Active" means "made at least one authenticated API call that day". Opening the app counts (the bootstrap call). Background push delivery doesn't.
- Old app builds that don't send the client headers show up as platform/version "Unknown".
- Pre-existing `created_at` values for cars/documents/services are estimates (see backfill).
- dev's numbers are skewed by e2e test data (the dev-bypass account owns ~80 generated cars).
- Not built yet (planned stage 3): AI extraction call counts/cost/failure rate, 5xx error rate, email/push delivery stats. These need new logging first. There is no per-user drill-down page yet either, only the table.
