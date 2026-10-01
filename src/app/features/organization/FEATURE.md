# Organization (B2B)

## Functionality

Organization lets several people who work together (a company's fleet admin,
drivers, managers) share the same cars and records, instead of each car
belonging to one personal account. It's the foundation for selling the app to
companies, built alongside the usual single-owner garage — a personal account
never sees anything described here.

### Roles

Every organization has members, each with one role:

- **Director** (shown as "Director" in the app) — focused on reports and
  permissions rather than day-to-day operation. The only role that can invite,
  remove, or change the role of other members.
- **Fleet admin** — the day-to-day operator: adds cars, logs maintenance,
  manages documents.
- **Manager**, **Driver**, **Finance** — reserved for upcoming features
  (expense approval, restricting a driver to their assigned car, cost-only
  access); today they behave the same as fleet admin for car access.

An organization always keeps at least one Director — the app won't let the
last one demote themselves or be removed, so the organization is never left
without anyone able to manage it.

### What you can do

- **Create an organization** from the Organization screen — you become its
  Director immediately.
- **See every organization you belong to.** If you have more than one, a
  switcher at the top lets you pick which one you're looking at.
- **Invite a member** by email (they must already have an account in the app)
  and a role — only a Director can do this. The invited person gets an email
  and sees a pending invitation on the Organization screen; they accept it
  themselves. Once they do, the Director who invited them sees it update live
  and gets a notification. Inviting an email with no HAU App account yet
  isn't supported yet (see Implementation).
- **Change a member's role, or remove them** — Director only. You can't do
  either to the organization's last Director.
- **Leave an organization** yourself, unless you're its last Director.
- **Add a new organization** the same way you'd add anything else in the
  app: the **+** in the top bar on desktop, or the bottom-right **+** button
  on mobile. Creating one switches you straight to it.
- Once you've accepted membership, the organization's cars show up for you the
  same way a car shared with you personally would — same history, documents,
  maintenance, notes.

### Where to find it

Only visible to accounts that belong to at least one organization — everyone
else never sees an "Organization" entry anywhere. On desktop it's a sidebar
item; on mobile/tablet it's a card in the Account screen's Navigation section
(next to Admin, for the same reason: no bottom tab slot for it).

## Implementation

**Backend** (`history-auto-utility-be/src/modules/organization/`):

- Prisma models (`prisma/schema.prisma`): `Organization` (`feature_flags` and
  `branding` columns reserved for later — per-organization feature toggles
  and white-label support — not read anywhere yet), `OrganizationRole` enum
  (SUPER_ADMIN/FLEET_ADMIN/MANAGER/DRIVER/FINANCE — "SUPER_ADMIN" is the
  Director role above; the DB name predates the UI label),
  `OrganizationMembership` (organization_id + user_id + role, invited_by,
  accepted_at — same invite/accept shape as `CarUserAccess`).
  `Car.organization_id` is nullable; null is every personal car, unchanged.
- `OrganizationController`/`OrganizationService`: CRUD mirroring
  `car-access.controller.ts`'s invite/accept pattern. `inviteMember` sends an
  email (`MailService.sendOrganizationInvitation`, mirrors
  `sendCarShareInvitation`) — but only to an already-registered user; it
  still 404s on an email with no account, same restriction as before. Inviting
  a not-yet-registered email, with a different "here's what's happening and
  where to get the app" email variant, needs its own invite-by-email model
  (tracked in `/var/www/hau_app/B2B-STRATEGY.md`). `acceptInvitation` creates
  an `ORG_INVITE_ACCEPTED` notification for the inviter — same
  `NotificationsService.create()` call (WebSocket + unread badge) as
  `CAR_ACCESS_ACCEPTED` already does for car sharing.
- `OrganizationGuard` + `@RequiredOrgRole()` (`common/guards/organization/`,
  `common/decorators/required-org-role.decorator.ts`): gates
  `/organization/:organizationId/**`. Unlike `CarAccessGuard`'s `CarAccessRole`
  ranking, organization roles aren't a linear hierarchy (FLEET_ADMIN/MANAGER/
  DRIVER/FINANCE are different functional scopes) — the guard only supports
  "any accepted member" (no decorator) or "must be exactly SUPER_ADMIN"
  (`@RequiredOrgRole(SUPER_ADMIN)`).
- **Car access integration**: `CarAccessService` (the single place that
  resolves "which cars can this user see/touch", shared with every car-scoped
  module) now also grants access when a car's `organization_id` matches one of
  the user's accepted organizations. Today any accepted member gets
  FULL-equivalent access to every car in the organization — restricting a
  DRIVER to only their assigned car needs the car↔driver assignment model,
  which doesn't exist yet (see `/var/www/hau_app/B2B-STRATEGY.md`, Faza 1).

**Frontend** (`features/organization/`):

- `organization.component.ts/.html/.scss`: single page, no wizard — lists
  organizations, members, an invite form and a create-organization form,
  gated by role (`isSuperAdmin()`) for the member-management actions.
  Uses `<app-dropdown>` for every role picker (role-selection UI consistency
  rule), `app-loader` for the loading state, and `HeaderActionsService` for
  the page title (set in `ionViewWillEnter`, cleared in `ionViewWillLeave`).
  The create-organization form is hidden behind `showCreateForm()`, toggled by
  the page's "add" affordance — a header icon button (`headerActionsTpl`,
  projected via `HeaderActionsService.set()`) on ≥1024px and a local
  `<ion-fab>` below that, same CSS-only breakpoint split as
  `documents-list` (`.org-header-right` / `ion-fab.org-fab`). `load()` takes
  an optional `preferredOrgId` so creating a new organization switches the
  view straight to it, rather than to whichever accepted one loads first.
- `organization.guard.ts` / `organization.routes.ts`: same functional-guard
  shape as `features/admin/admin.guard.ts` — redirects to the garage if the
  user belongs to no organization. The real enforcement is server-side
  (`OrganizationGuard`); this guard is UX only.
- `core/organization-api.service.ts` + `organization.model.ts`: hand-written
  API client and DTOs, same convention as `core/admin-api.service.ts` /
  `features/admin/admin.model.ts` — the generated OpenAPI client isn't
  regenerated for this (see the api-backend.yaml staleness note: regenerating
  it has silently dropped actively-used DTOs before).
- Wired into the shell exactly like Admin: `main.component.ts`
  (`organizationMenuItem`, `hasOrganization`, resolved once via
  `OrganizationApiService.hasOrganization()`), `main.routes.ts` (route behind
  `organizationGuard`), and `settings.component.ts`/`.html` (mobile Account
  screen entry, `goToOrganization()`).

**Known gaps (tracked in `/var/www/hau_app/B2B-STRATEGY.md`)**: no driver↔car
assignment yet, so every accepted member sees every organization car; no
feature-flag UI (the `feature_flags`/`branding` columns exist but nothing
reads them yet); no bulk CSV import of members or cars; can't invite an email
with no HAU App account yet; no separate "business mode" that scopes the
whole app to one organization and hides personal/B2C data — today a member
just sees the organization's cars added to whatever else they can already
see, there's no account-level switch between "personal" and "business" view.
