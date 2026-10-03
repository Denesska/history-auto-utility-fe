# Authentication

## Functionality

The login screen has two tabs, **Personal** and **Business**. The last tab used is
remembered for next time.

- **Personal tab** — only "Continue with Google". A company-created account cannot
  sign in here: if it tries, the user is sent back to the login screen on the Business
  tab with a message explaining that this is a business account.
- **Business tab** — the company form (one short username such as `gandzde`, and the
  password), plus "Continue with Google". A "Remember username" checkbox saves just the
  username and prefills it next time (the password is never saved; unchecking removes it).
- **On phones** the login card sits right under a compact brand row so the whole form
  (tabs, fields, buttons) is visible without scrolling; the marketing text (trust
  badge, headline, description, feature highlights) follows below the card. The card
  subtitle differs per tab (Google wording on Personal, company-account wording on
  Business).
- **Choosing a company.** After a business sign-in the user works inside one company.
  If they belong to exactly one it is opened automatically; otherwise a "Choose a
  company" screen lists their companies (tap one to open it), pending invitations
  (with an Accept button, after which the company becomes selectable) and a "Create
  company" action (when the user has no company at all, the name field is shown right away) (the new company is opened right away). With nothing yet, the screen
  explains how to get started. A log out link is always available. Business pages
  can't be opened until a company is chosen, and if the user's membership is removed
  while signed in they are signed out to the Business tab.

There are two ways to sign in to the app:

- **Sign in with Google** — the primary, default path for regular users. One tap on
  "Continue with Google" on the login screen starts the standard Google OAuth flow;
  on success the user lands in the app.
- **Company account (username + password)** — for employees/drivers who don't have
  their own Google account, a company can create a username+password login for them
  directly (a short, globally-unique username such as `gandzde` that is suggested from
  the person's name, and a password the company gives out). On the Business tab of the login screen, the username and password fields and
  a sign-in button sit above the Google button. A wrong username or password shows a generic "incorrect
  username or password" message, without saying which one was wrong or whether the
  account is disabled.

**Forced password change.** Company-created accounts start out with (or can be reset
to) a shared, temporary password. The first time such an account signs in — or any
time after the company resets its password — the user is required to choose their
own password before they can do anything else in the app. They're shown a screen
explaining that their company set a temporary password and asking them to choose
their own, with three fields: current password, new password, and confirm new
password. The new password must be at least 8 characters long and contain at least
one letter and one digit; the screen won't let them submit until that's satisfied
and the two new-password fields match. Getting the current password wrong shows an
inline error. Once changed, they continue straight into the app. This forced screen
reappears on every subsequent login/navigation attempt until the password is
actually changed — there's no way to dismiss or skip it.

**Voluntary password change.** A company-account user who isn't forced to change
anything can still do so whenever they like, from the Settings screen ("Account"
section) — a "Change password" entry opens the same change-password screen, just
with plain "change your password" wording instead of the "your company set a
temporary password" explanation, and a "Cancel" option. On success, a brief
confirmation message appears and they're taken back to Settings. This entry only
appears for company-managed accounts — a Google-identity account manages its
password through Google itself, so it never sees this option.

## Implementation

### Frontend

- **`AuthService`** (`auth.service.ts`) — all auth state and calls:
  - `loginWithGoogle()` / `handleOAuthCallback()` / `TokenComponent` (`token/`) — existing
    Google OAuth flow, unchanged.
  - `loginLocal({ username }, password)` — `POST /auth/local-login`, body
    `{ username, password }` (a value with `@` is treated by the backend as the legacy
    email-form identifier). Response `{ accessToken, mustChangePassword }`. Always calls
    `saveToken()` with the returned token, same convention as every other login path
    (`handleOAuthCallback`, `refreshSession`) — web also gets an `access_token` httpOnly
    cookie set server-side, but the client-side persistence path is identical everywhere.
  - `changePassword(currentPassword, newPassword)` — `POST /auth/change-password`
    (requires the caller to already be authenticated — same `JwtAuthGuard`-protected
    endpoint backs both the forced first-change flow and the voluntary one, same body
    shape). On success, optimistically clears `must_change_password` on the cached
    profile so the guard (below) stops redirecting immediately, without waiting for
    the next `/auth/me` round trip.
  - `checkSession()` — calls `GET /auth/me`, and as of this feature also `tap()`s the
    full response into `profile$` (a `BehaviorSubject<UserProfile | null>`) before
    mapping to the boolean `isAuthenticated` it always returned. `UserProfile` is
    `{ id, email, google_id?, must_change_password, is_company_managed }` — the last
    two fields are always present and `false` for a normal Google account.
  - `getProfile()` — returns the cached `profile$` value if one exists, otherwise
    fetches `/auth/me` itself. Used anywhere that just needs the profile without
    caring about re-validating the session on every call (the Settings screen, to
    decide whether to show "Change password").
  - `profile$` is cleared (`next(null)`) in `clearLocalAuth()` so a different account
    logging in after a logout never inherits a stale cached profile.

- **`authGuard`** (`auth.guard.ts`) — `canActivate` on the `/main` route subtree.
  After `checkSession()` confirms the user is authenticated, it also reads
  `authService.profile$.value` (freshly populated by the same `checkSession()` call,
  via `tap()`, earlier in the same pipeline) and checks `must_change_password`. If
  it's `true` and the target `state.url` isn't already the change-password route
  itself, it redirects to `AUTH_ROUTES.changePassword.fullPath` with `?forced=true`
  and blocks the original navigation. The `state.url !== AUTH_ROUTES.changePassword.fullPath`
  check exists defensively in case routing ever changes so this guard applies to
  `/auth/change-password` too — in the current route tree it's a no-op protection,
  since `authGuard` only guards `/main/**` and `/auth/*` has no guard at all, so there
  is no actual loop risk today. `must_change_password` is `false` for every normal
  Google account, so this whole branch never fires for them — the pre-existing
  authentication check is untouched.

- **`AUTH_ROUTES`** (`auth.routes.const.ts`) — added `changePassword: { path:
  'change-password', fullPath: '/auth/change-password' }`, alongside the existing
  `login` and `token` entries.

- **`ChangePasswordComponent`** (`change-password/`) — standalone, lazy-loaded route
  at `/auth/change-password` (`auth.routes.ts`), visually modeled on
  `login.component.html`'s `.login-card` (same card/shadow/spacing language, no
  two-column layout — this screen lives outside the authenticated shell, so it has no
  top bar / `HeaderActionsService` to hook into). Reads a `forced` query param
  (`route.snapshot.queryParamMap`) to decide its framing and post-success behavior:
  - `forced=true` (set by `authGuard`'s redirect, or by the login screen itself
    right after a local-login response with `mustChangePassword: true`) → shows the
    "your company set a temporary password" copy, no Cancel button, and on success
    navigates to `HAU_ROUTES.main.fullPath` (`replaceUrl: true`).
  - no `forced` param (reached via the Settings screen's "Change password" entry) →
    shows plain "change your password" copy, a Cancel button (back to Settings), and
    on success shows a toast (`ToastController`, matching the pattern used elsewhere
    in the app, e.g. `documents-form.component.ts`) and navigates to
    `HAU_ROUTES.settings.fullPath`.
  Client-side validation (min 8 chars, at least one letter + one digit, new/confirm
  match) is computed reactively from signals and disables the submit button until
  satisfied; the backend is still authoritative — a `401` response maps to
  `auth.changePassword.wrongCurrentPassword`, anything else to
  `auth.changePassword.genericError`.

- **Login screen** (`login/login.component.ts`/`.html`/`.scss`) — the local-login
  form is shown on the Business tab (see "Session context + business login" below).
  Submitting calls `authService.loginLocal(...)`:
  - if `mustChangePassword` is `true`, it navigates explicitly to
    `AUTH_ROUTES.changePassword.fullPath` with `?forced=true`. This is necessary
    because the pre-existing `isLoggedIn$` subscription in `ngOnInit` (which reacts
    to `saveToken()` setting `isLoggedIn$` to `true` — already fired by this point,
    since `saveToken()` runs inside `loginLocal`'s pipe before this response arrives)
    calls `redirectToMainIfAuthenticated()`, which has no concept of a forced
    password change and would otherwise send the user straight into `/main` (from
    which `authGuard` would then bounce them back out anyway — functionally
    harmless, but this explicit navigation avoids that flash).
  - if `mustChangePassword` is `false`, the component does nothing extra — the
    existing `isLoggedIn$` subscription already redirects into the app once the
    token is saved, so a second navigation call here would just duplicate it.
  - A failed attempt sets `auth.localLogin.invalidCredentials` without
    distinguishing wrong-username vs. wrong-password vs. disabled-account (the
    backend doesn't distinguish these either).

- **Mobile "learn more" hint** — below 768px a muted line with a chevron under the login card (`.login-learn-more`, `login.learnMore`) smooth-scrolls to the marketing content; hidden on desktop.

- **Login layout / scrolling** — the login page is a plain `<div>` (no `<ion-content>`),
  and `<ion-router-outlet>` gives the routed host `.ion-page` (`position: absolute;
  overflow: hidden`), so the page was clipped and could not scroll on phones. Fix:
  `:host { overflow-y: auto }` in `login.component.scss` makes the host the scroll
  container (and `.login-page` has `flex: 0 0 auto` because `.ion-page` is a flex column).
  Below 768px a media block at the end of the SCSS reorders the left column with flex
  `order` (brand, card, trust badge, headline, description, features, footer) and
  tightens paddings; touch targets stay >= 44px. Desktop DOM order is unchanged.
  `change-password` and `select-organization` carry the same `:host` scroll rule (and `flex: 0 0 auto` on their page wrapper). Any new plain (non-`ion-content`) auth page needs it too.

- **Session context + business login (frontend)**
  - `SessionContextService` (`session-context.service.ts`) is the single source for the
    session context: signals `context`, `isBusiness`, `isPersonal`, `activeOrgId`,
    `activeOrgName`, `activeOrgRole`, `needsOrgSelection`; `set()` / `clear()` are called
    by `AuthService` only (from `/auth/me`, login responses, `POST /auth/context`, and
    `clearLocalAuth()`). `UserProfile.ctx` carries the same shape.
  - `AuthService`: `loginWithGoogle(context)` adds `context=` to the URL; `loginLocal`
    sends `context: 'business'`; `selectOrganization(id)` -> `POST /auth/context`, stores
    the token like login, re-reads `/auth/me` (so `orgName` is populated);
    `getLoginTab()/setLoginTab()` wrap localStorage `hau_login_tab`.
  - Login screen: tabs (segmented control styled in `login.component.scss`), localStorage
    `hau_business_username` for the remember checkbox (all access in try/catch; the retired
    `hau_business_company_code` key is removed on load), handles
    `?error=company_account_personal_login` by switching to Business + notice.
  - `SelectOrganizationComponent` (`select-organization/`) at `/auth/select-organization`
    (guarded by `authGuard`); uses `OrganizationApiService` (`myOrganizations`,
    `acceptInvitation`, `createOrganization`). Personal sessions are bounced to `/main`.
  - `organizationSelectedGuard` (in `auth.guard.ts`) runs after `authGuard` on `/main`
    (see `app.routes.ts`): business with `orgId` null -> picker. `authErrorInterceptor`
    redirects to the picker on 403 `NO_ORGANIZATION_SELECTED`, and on 401/403
    `MEMBERSHIP_REVOKED` logs out and sets the login tab to Business.
  - i18n: `auth.login.*`, `auth.selectOrganization.*`.

- **Settings entry** (`features/settings/`) — see that feature's own `FEATURE.md`
  for the "Change password" row; it's gated on `AuthService.getProfile()`'s
  `is_company_managed` flag.

- **i18n** — all new strings live under the `auth.*` namespace (`auth.localLogin.*`,
  `auth.changePassword.*`) plus one `settings.changePassword` string, in both
  `ro.json` and `en.json`. Pre-existing OAuth-related login copy stays under the
  separate `login.*` namespace (unchanged) — the two namespaces coexist on the same
  screen.

### Backend

- `POST /auth/local-login` — body `{ username, password }` (or legacy `{ email, password }`).
  A username without `@` is looked up by `User.username` (globally unique); with `@` it
  falls back to the legacy `User.email` lookup (`username@login_code`). `companyCode` is
  still accepted for backward compatibility (resolves `username@code` and requires an
  accepted membership in that org) but the UI no longer sends it. Any miss is the same
  generic 401. With a single org it is auto-selected, otherwise the picker. Returns `{ accessToken,
  mustChangePassword }` and sets the `access_token` httpOnly cookie server-side
  (same as the Google OAuth flow). `401` on wrong credentials or a disabled account.
- `POST /auth/change-password` — `JwtAuthGuard`-protected, body `{ currentPassword,
  newPassword }`, empty `200` on success. Enforces `newPassword` ≥ 8 chars with at
  least one letter and one digit server-side too (the frontend check is just for a
  fast inline message). `400` if the account has no password login at all (not
  reachable from this frontend, since the change-password screen is only ever
  linked to from a local-login context); `401` if `currentPassword` is wrong.
- `GET /auth/me` — existing endpoint, now also returns `must_change_password` and
  `is_company_managed` alongside the existing `id`/`google_id`/`email`, always
  present and `false` for a normal Google-identity account.
- **Session context (`ctx`)** — see `/var/www/hau_app/ACCOUNT-CONTEXT.md`. Access and
  refresh JWTs carry `ctx: { type: 'personal' } | { type: 'business', orgId: number | null, orgRole? }`
  (types/decorators in `be/src/common/context/`: `SessionContext`, `@Scope(...)`,
  `@CurrentContext()`). `POST /auth/refresh` takes the ctx from the stored refresh token.
  - `POST /auth/local-login` accepts optional `context` (default `business`); `personal` -> 403
    `LOCAL_LOGIN_BUSINESS_ONLY`. Response also returns `ctx`.
  - `GET /auth/google?context=personal|business` (default personal) stores the choice in the
    short-lived `login_ctx` cookie; the callback reads it. A company-managed account asking for
    personal is redirected to `<FE>/auth/login?error=company_account_personal_login` (no tokens).
  - Business login auto-selects the org when the user has exactly one accepted membership,
    otherwise `orgId: null` (org picker).
  - `POST /auth/context { organizationId }` (business sessions only; personal -> 403
    `PERSONAL_SESSION`, governed by `ALLOW_PERSONAL_BUSINESS_SWITCH` in `auth.constants.ts`;
    no accepted membership -> 403 `NOT_ORG_MEMBER`) returns `{ accessToken, ctx }` and rotates
    the refresh token.
  - `GET /auth/me` returns `ctx` with an extra `orgName` when an org is selected. `/auth/me`, `/auth/logout` and `/auth/change-password` are `allowNoOrg` (a business session without an organization must still be able to load its profile — otherwise `authGuard` fails and the user is bounced back to login: the "black screen" bug of 2026-10-02). The OAuth callback redirects to `<FE>/main/cars` (there is no `/main/overview` route).
- Backend source: `history-auto-utility-be/src/` (not modified as part of this
  frontend-only change — already implemented and live on the dev backend).

- **Org picker as switcher** (`select-organization.component.ts`): also reachable with an organization already active (via the shell's business badge) — it lists the organizations again, shows a Cancel link when `activeOrgId` is set, opens its create form when called with `?create=1`, and after `selectOrganization()` resets + force-refreshes the bootstrap store before navigating to `/main`. Shell/menu/route-scoping notes live in `features/main/FEATURE.md`.

### Known limitations

- The guard's redirect to the change-password screen only takes effect on the next
  navigation that passes through `authGuard` (i.e. any `/main/**` route change) —
  a user already sitting on a `/main/*` page when their password gets reset
  server-side won't be bounced until they navigate again or reload.
- No rate limiting or lockout messaging on the frontend for repeated failed
  local-login attempts — relies entirely on whatever the backend does.
