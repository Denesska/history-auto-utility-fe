# Legal (GDPR terms & privacy)

## Functionality

Two things live here: the app's public Terms and Conditions / Privacy Policy
pages, and the mandatory consent screen that blocks the app until a signed-in
user has accepted the current version of both.

- **Reading the documents.** `Terms and Conditions` and `Privacy Policy` are
  each a normal, public page — no account needed. They open from the login
  screen's footer links, from the consent screen's checkbox text, or from a
  direct link. Each page shows the full text with a title, a back button,
  and a Romanian/English language switch; switching language re-renders the
  same document in the other language. If the document can't be loaded, the
  page shows a message with a "Try again" button instead of a blank page.
  An internal link inside a document (e.g. the Terms referencing the Privacy
  Policy) opens the other document the same way, without leaving the app.
- **Accepting the documents.** The first time a user signs in — and again
  any time the Operator publishes a new version of either document — the
  app shows a dedicated screen before anything else is usable: "Before you
  continue, please read and accept…" (or, when the user had already accepted
  an older version, "We updated our Terms / Privacy Policy"). The screen
  explains why it's showing, offers the Terms and Privacy Policy as links
  (opened in a new tab on web, or in-app on the mobile apps), and has one
  checkbox: "I am at least 18 years old, I have read and accept the Terms
  and Conditions and I have read the Privacy Policy." The "Accept and
  continue" button stays disabled until the box is checked; accepting sends
  the user back to whatever page they were originally trying to reach (or to
  the usual post-login screen). A "Decline and log out" option is always
  available for anyone who doesn't want to accept. If the documents happened
  to change again in the moment between opening this screen and accepting,
  the screen reloads and shows the up-to-date version instead of silently
  failing.
- **Login screen.** The footer's "Privacy Policy" / "Terms of Service" links
  open the real documents (previously dead links), and a small note under
  the sign-in buttons tells the user up front that they'll be asked to accept
  both after signing in.
- Nothing about this is specific to personal vs. business accounts or to any
  organization — every signed-in user, in any context, goes through the same
  gate before they can use the app, and anyone (logged in or not) can read
  the documents.

## Implementation

**Backend** (`history-auto-utility-be/src/modules/legal/`, built separately —
not touched by this task): current version tags live in `legal-versions.ts`
(`CURRENT_TERMS_VERSION` / `CURRENT_PRIVACY_VERSION`); acceptance is stored on
`User` (`terms_accepted_version` / `privacy_accepted_version` /
`legal_accepted_at`, surfaced via `legal_accepted_at` in the JWT payload too);
`LegalController` exposes `GET /legal/status` and `POST /legal/accept`
(`{ termsVersion, privacyVersion }`, 409 `LEGAL_VERSION_OUTDATED` if either no
longer matches the current version); `LegalEnforcementInterceptor` rejects any
other authenticated call with 403 `{ code: 'LEGAL_ACCEPTANCE_REQUIRED' }` while
acceptance is pending, except routes marked `@SkipLegalConsent()` (enough of
`AuthController` to log in/refresh/log out/switch context/read `/auth/me`,
plus `LegalController` itself). `GET /auth/me` folds the same status into a
`legal` field on the profile response (`LegalService.buildStatus`).

**Frontend — this feature folder:**
- `legal.routes.const.ts` (`LEGAL_ROUTES`, exported from `index.ts`) + `legal.routes.ts`
  — public routes `/legal/terms` and `/legal/privacy`, no guard, mounted by
  `app.routes.ts` (`path: 'legal'`). Both lazy-load the same
  `LegalDocumentComponent`, told which document via route `data: { doc }`.
- `legal-document/legal-document.component.ts` — fetches
  `assets/legal/<doc>.<lang>.html` as plain text (`HttpClient`, `responseType:
  'text'`) for the active Transloco language, falling back to `ro` if that
  language's file 404s, and re-fetching on `transloco.langChanges$`. Renders
  the result via `[innerHTML]` (Angular's sanitizer runs as normal — the HTML
  is our own, fetched from our own `assets/`). A language switch
  (`<app-dropdown>`, the two fixed options `ro`/`en`) calls
  `transloco.setActiveLang()` and persists to the same `localStorage` key
  Settings uses (`LANGUAGE_STORAGE_KEY`), consistent with the app's one
  language control. Internal `<a href="/legal/...">` links inside the fetched
  HTML (and the consent checkbox's label, see below) are intercepted by a
  shared helper, `legal-link.util.ts`'s `internalLegalLinkHref()`, and handed
  to the router instead of causing a real page load. "Back" is a plain
  `window.history.back()` when there's browser history, else `/main` or
  `/auth/login` depending on `authService.hasToken()` — this page works
  logged in or out and isn't part of `NavigationHistoryService`'s stack.
- `legal-consent/legal-consent.component.ts` — the gate screen. Loads the
  current `LegalStatus` via `AuthService.checkSession()` (always a fresh
  `GET /auth/me`, never the cache) and reads `profile$.value.legal`. Title
  switches to the "updated" wording when either `accepted*Version` is
  non-null (i.e. this isn't the user's first-ever acceptance). The checkbox
  label (`legal.consent.checkboxLabel`) embeds the two document links as raw
  `<a href="/legal/...">` HTML (rendered via `[innerHTML]`, same reason as the
  document page — this isn't Angular template syntax); clicking one is
  intercepted the same way as the document page, but opens the link
  differently: a new tab on web (`window.open(href, '_blank')`), or in-app via
  the router on native (`Capacitor.isNativePlatform()`) — checked so the user
  doesn't lose their place on the consent form. "Accept and continue" calls
  `LegalApiService.accept(termsVersion, privacyVersion)`
  (`POST /legal/accept`), then `AuthService.checkSession()` again so the
  cached profile's `legal.needsAcceptance` is current before navigating to
  `returnUrl` (query param, defaults to `HAU_ROUTES.main.fullPath`; only ever
  followed if it starts with `/`, never an external value) with
  `replaceUrl: true`. A 409 `LEGAL_VERSION_OUTDATED` response re-loads the
  status and shows the screen again instead of a generic error. "Decline and
  log out" is `AuthService.logout()` then back to `/auth/login`.
- `legal-api.service.ts` (`LegalApiService`) — the one HTTP call this feature
  owns, `POST /legal/accept`.
- `legal-link.util.ts` — `internalLegalLinkHref(event)`, the shared "is this
  click on an internal `/legal/...` anchor" check used by both components
  above (`Element.closest('a[href^="/legal/"]')`).

**Where things are wired in, outside this folder:**
- `features/auth/auth.service.ts` — `LegalStatus` interface and the `legal?:
  LegalStatus` field on `UserProfile`, both exported from the auth barrel
  (`features/auth/index.ts`) since the legal feature needs them and auth is
  the feature that owns `UserProfile`/`checkSession()`.
- `features/auth/auth.routes.const.ts` — `AUTH_ROUTES.legalConsent` (`path:
  'legal-consent'`, `fullPath: '/auth/legal-consent'`). The component itself
  lives in this feature folder, not under `features/auth/`, but the URL and
  guard follow the auth convention (same as `/auth/select-organization`).
- `app.routes.ts` (composition root) — mounts `/auth/legal-consent`
  (`canActivate: [authGuard]`, lazy-loading `LegalConsentComponent` by a
  direct relative import) and `/legal/**` (lazy-loading `legalRoutes`, no
  guard). Doing both here, rather than inside `auth.routes.ts` or
  `legal.routes.ts`, is deliberate: the composition root is the one place
  allowed to lazy-load a page across feature folders without going through
  (or being blocked by) either feature's barrel — see "Feature boundaries" in
  the frontend `CLAUDE.md`.
- `features/auth/auth.guard.ts` — after the existing `must_change_password`
  check, `authGuard` reads `profile.legal?.needsAcceptance` from the same
  `checkSession()` call and, if true, redirects to `AUTH_ROUTES.legalConsent`
  with `?returnUrl=<attempted url>`, unless the target is already the
  consent screen or the change-password screen. This runs before
  `organizationSelectedGuard` (which guards `/main` right after `authGuard`
  in the same `canActivate` array), so a business session with no
  organization picked yet still has to clear this gate first.
- `features/auth/authErrorInterceptor.ts` — a global fallback for the same
  gate: any request that still reaches the backend while acceptance is
  pending gets 403 `LEGAL_ACCEPTANCE_REQUIRED` (e.g. a background call, or a
  call from an already-open cached page `authGuard` never re-ran for). The
  interceptor redirects to the consent screen the same way, guarded by
  `router.url.startsWith(...)` so several failing requests in a row don't
  cause repeated navigations.
- `features/auth/login/login.component.html`/`.ts` — footer "Privacy Policy"
  / "Terms of Service" links now `routerLink` to `LEGAL_ROUTES.privacy` /
  `.terms` (previously `href="#"`), plus a muted note under the sign-in
  buttons (`login.card.legalNotice`) that acceptance will be asked for after
  signing in — no checkbox on this screen, that's the consent screen's job.

**Publishing a new version:** edit the four HTML fragments in
`src/assets/legal/` (`terms.ro.html`, `terms.en.html`, `privacy.ro.html`,
`privacy.en.html` — `h2`/`h3`/`p`/`ul`/`ol`/`li`/`a`/`strong`/`em`/`table`
only), then bump `CURRENT_TERMS_VERSION`/`CURRENT_PRIVACY_VERSION` in the
backend's `legal-versions.ts`. The frontend needs no code change for a text
update — every user with an `accepted*Version` older than the new constant
gets `needsAcceptance: true` on their next `/auth/me` and is routed back
through the consent screen automatically.

**Known gaps:** the consent screen's "already accepted an older version"
wording is a simple non-null check on `accepted*Version`, not a real "which
one actually changed" diff — if only the Terms changed, the screen's generic
subtitle still mentions both documents. The document pages have no table of
contents/anchor navigation; a long document is one scroll.
