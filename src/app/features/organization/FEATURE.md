# Organization (B2B)

## Functionality

Organization lets several people who work together (a company's owner,
directors, fleet admins, drivers) share the same cars and records, instead of
each car belonging to one personal account. It's the foundation for selling
the app to companies, built alongside the usual single-owner garage — a
personal account never sees anything described here.

### Roles and the chain of command

Every organization has members, each with one role, ranked so that everyone
sees and manages only what's at or below their own level — never above:

- **Super Admin** (`OWNER`) — the true account owner. There's exactly one
  per organization, and it's never created, changed, or removed through the
  app itself — it's assigned directly in the database when the business
  account is sold. Has every right everyone else has, plus some only it has
  (managing Directors). Used at its own risk — whoever holds it is expected
  to take responsibility for anything done with it.
- **Director** (`SUPER_ADMIN` in the data — the name predates this role
  split) — can only be created by Super Admin, never by another Director.
  Directors can see each other in the member list but can't change each
  other's role or remove one another — only Super Admin can. Otherwise a
  Director has full rights: reports across the whole fleet, defines and
  manages every role below Director (Fleet Admin, Finance, Driver), can
  invite as many people as needed with no fixed cap.
- **Fleet Admin** — runs the day-to-day of the fleet they've been put in
  charge of: adds/removes cars, logs maintenance, manages documents and
  suppliers. Can only define Drivers (as many as needed) — nothing else. In
  the member list, a Fleet Admin only sees the Director who put them in
  charge and the Drivers they themselves added; the rest of the
  organization isn't shown to them.
- **Driver** — restricted to whichever car(s) they're currently assigned to
  (see the car's "Șofer" section, `features/cars/FEATURE.md`), instead of
  every organization car. A driver with no current assignment sees no
  organization cars at all, and has nothing to manage on the Organization
  screen — they have no need for it.
- **Finance** — read-only access to costs/reports (invoices, fuel, charts);
  the exact scope is still to be defined and isn't a current focus. Can't
  invite anyone. In the member list, only sees whoever invited them.
- **Manager** — currently disabled. It's not offered anywhere in the invite
  role picker; any pre-existing Manager membership keeps working (same
  minimal visibility as Finance) but no new one can be created until the
  role is reintroduced with real permissions.

An organization always keeps at least one accepted Director — the app won't
let the last one demote themselves or be removed via the role-change/remove
actions (self-removal via "leave" is the one exception).

### What you can do

- **Work in one company at a time.** The Organization screen only exists in a
  business session and shows the company you're currently working in — its
  members, roles, fleet cars and cost dashboard. There is no company switcher
  on the screen itself: the company name is always shown in a badge at the top
  of the app (sidebar on desktop, header on mobile), and tapping that badge
  opens the company picker to switch to another one.
- **Create another company** or **request approval** — depends on your role and
  whether the app administrator has enabled the business account approval gate:
  - **If approval is required and you have no company yet:** the picker shows
    "Request business account" instead of "Create company". A form asks for the
    company name (required) and an optional note explaining the request. After
    sending, the screen shows "Request sent, awaiting approval" with the company
    name and submission date. You'll be notified by email + in-app when the
    administrator makes a decision.
  - **If approval is not required, or you're exempt** (app administrator, already
    Owner or Director of another company, joining via invitation, or a
    company-managed account): the "+" icon opens the normal create form as before,
    and the new company is immediately available.
  - **After approval:** if your request is approved, you can create your company
    normally (the "Request" form is replaced by "Create company"). If rejected,
    the screen shows the administrator's reason and lets you send a new request.
  - **The administrator is notified** by email (to office@denhau.ro and/or other
    configured emails) and sees a "Business account requests" section on the Admin
    page, with a Pending/Approved/Rejected filter and a pending-count badge.
- **Invite a member** by email (they must already have an account in the
  app) and a role — but only a role you're allowed to assign: a Director can
  invite Fleet Admin/Finance/Driver (not another Director — only Super Admin
  can do that), a Fleet Admin can only invite Driver, and Finance/Driver
  can't invite anyone. The invite form itself only ever offers the roles you
  personally can assign. The invited person gets an **in-app notification**
  (with an inline "Accept" button, right from the notification bell — no
  need to find the Organization screen first) and an email, and also sees a
  pending invitation on the Organization screen if they go there directly;
  they accept it themselves. Once they do, whoever invited them sees it
  update live and gets a notification. Inviting an email with no HAU App
  account yet isn't supported yet (see Implementation).
- **Or create a brand-new, company-owned account directly** — for a
  driver/employee who doesn't have (or doesn't want to use) their own Google
  account. A small toggle above the invite form switches between "Invite by
  email" (above) and "Create new account": fill in a first name, last name
  and a role (same role rules as inviting); as the names are typed the screen suggests a
  short username (e.g. Denis Gandzii -> `gandzde`), editable, with a live "available / already
  taken" check — usernames are unique across all companies, and the account is
  created immediately — no email, no acceptance step, the person can log in
  right away. The screen then shows the username and temporary password
  **exactly once**, with copy buttons and a note that it won't be shown again —
  write it down or hand it to the person now. The member list shows a
  company-created member's username under their name. The first time they log in
  with it, they're required to set their own password before doing anything
  else. This account has no existence outside the company: it was never a
  personal account that joined, so none of the normal "leave"/Google-account
  rules apply to it the way they do for an invited member.
- **Reset a company-created member's password** at any time — a key icon
  next to that member's role dropdown (only shown for these company-owned
  accounts, never for a regular invited member, since there's no password to
  reset there). Confirms first, since it's immediate and destructive: the
  member's current password stops working right away, and they can't log in
  again until they use the newly generated one — which the dialog shows
  once, the same way the creation dialog does, and which also forces them to
  set a new password on next login.
- **Change a member's role, or remove them** — only for members you're
  allowed to manage (see the role chain above), and only to a role you're
  allowed to assign. You can't do either to the organization's last
  Director, or to Super Admin (nobody can, from the app). Removing a
  company-created local member fully disables that account (it has no life
  outside the company), unlike removing an invited member, which only ever
  unlinks their existing personal account from the organization.
- **Leave an organization** yourself, unless you're its last Director.
- **Delete an organization** — Director (or Super Admin) only, with a
  confirmation (it warns this can't be undone). The organization and its
  memberships are gone, but its cars and suppliers aren't deleted — they
  just become personal again, owned by whoever originally added them.
- **See the fleet's cars directly from the Organization screen** — a
  "Mașinile companiei" section, visible to Director-tier members and Fleet
  Admin (not Finance, not Driver), lists every car currently in the fleet
  with its photo, make+model and plate. Tapping a row, or its edit button,
  opens that car (the row's edit button jumps straight into the edit form;
  tapping elsewhere on the row opens the car's own hub, from which it can
  also be edited, had maintenance logged, etc.) — this list never shows
  anyone's personal name for the car (see "Private per-car names" in
  `features/cars/FEATURE.md`): an admin managing the whole fleet always sees
  make+model here, regardless of what any individual driver or co-owner
  privately calls the car. A row's remove button (or swipe) takes the car
  out of the fleet without deleting it.
- **See and manage each car's driver straight from this list** — every row
  also shows who's currently driving that car: its current driver's name and
  photo (or initials, if they have none), or, if nobody is assigned, an
  "Atribuie un șofer"-style affordance instead. Tapping either one opens that
  car's existing "Șofer" assignment screen — to reassign/unassign if someone's
  already driving it, or to pick a driver if nobody is. This is a shortcut
  into the same assignment screen reachable from the car's own hub (see
  "Driver assignment" in `features/cars/FEATURE.md`), not a second way to
  assign a driver. Hidden entirely (no driver name, no "assign" affordance)
  when the organization's `driver_assignment` feature switch is off — see
  "Driver assignment" in `features/cars/FEATURE.md`.
  **Adding** a car to the fleet is Director-tier only
  (not Fleet Admin) and always creates a brand-new car via the normal
  "Add vehicle" screen, opened directly from this section — there's no way
  to pull an existing *personal* car into the fleet. Personal cars and
  company cars are two separate pools on purpose: a company asset
  shouldn't depend on, or ever have been, anyone's personal property (if it
  could, a Director with no personal cars of their own would have no way to
  add one at all). A car can't be in two fleets at once: if the new car's
  license plate matches one already in a *different* organization's fleet,
  creating it is blocked — that's the only practical way to be reasonably
  certain it's the same physical vehicle (VIN duplicates are already
  impossible app-wide; see Implementation). A car with no plate set can be
  added freely, since there's nothing to check against.
- **Remove a car from the organization** without deleting it — either from
  the Organization screen's cars section above, or from the car's own hub
  ("…" menu or desktop tiles), "Elimină din organizație", for anyone with
  fleet-admin-equivalent access. The car becomes personal again; only its
  original creator (and whoever it's personally shared with) can still see
  it. This is different from the "leave this shared vehicle" action, which
  only applies to a *personal* share (`CarUserAccess`).
- **Import several cars at once** from a .csv/.xlsx/.xls file, from the same
  "Mașinile companiei" section (Director-tier only, same as adding one car) —
  a separate screen with a downloadable template, a file picker, and a
  per-row result list after upload (which rows were created, which failed
  and why). Each row goes through the exact same checks as adding a single
  company car (plate conflict, etc.) — a bad row only fails that row, the
  rest of the file still imports.
- Once you've accepted membership and are working in that company, its fleet
  *is* your Garage (a Driver: only the car(s) currently assigned to them) —
  same history, documents, maintenance, notes. These cars never appear in a
  personal session.
- **See the fleet's cost dashboard** — a "Costuri flotă" button next to the
  organization's name (hidden for a Driver). See
  `features/fleet-cost/FEATURE.md`.

### Where to find it

Only in a business session (a login on the Business tab, then the company
chosen) — a personal session never shows the Organization entry. On desktop
it's a sidebar item; on mobile/tablet it's a card in the Account screen's
Navigation section (no bottom tab slot for it). On mobile it shows a back
button instead of the bottom tab bar, like every other screen reached that
way. A Driver-only account never needs it: the entry is still listed in
business, but its role gives it no management actions.

## Implementation

**Public API: `index.ts`** exports `OrganizationApiService` and the `MyOrganizationDto` type — used by `auth/` (the org-selection screen), `cars/` and `notifications/`.

**Backend** (`history-auto-utility-be/src/modules/organization/`):

- Prisma models (`prisma/schema.prisma`): `Organization` (`feature_flags` and
  `branding` columns reserved for later — per-organization feature toggles
  and white-label support — not read anywhere yet), `OrganizationRole` enum
  (`OWNER`/`SUPER_ADMIN`/`FLEET_ADMIN`/`MANAGER`/`DRIVER`/`FINANCE` —
  `OWNER` is "Super Admin" in the UI, `SUPER_ADMIN` is "Director"; both DB
  names predate their current UI labels), `OrganizationMembership`
  (organization_id + user_id + role, invited_by, accepted_at — same
  invite/accept shape as `CarUserAccess`). `Car.organization_id` is
  nullable; null is every personal car, unchanged.
- **The role ladder and permission matrix live in one place**,
  `common/guards/organization/organization-roles.ts` (not duplicated per
  endpoint): `ORG_ROLE_RANK` (OWNER=0, SUPER_ADMIN=1, FLEET_ADMIN/FINANCE/
  MANAGER=2, DRIVER=3 — lower rank outranks higher), `INVITABLE_ROLES`
  (which roles each role may invite/assign — `OWNER` never appears as a
  value, since it's database-only), `canManageMember` (whether an actor may
  change the role of, or remove, a member holding a given role — OWNER is
  untouchable, SUPER_ADMIN peers can't manage each other, FLEET_ADMIN can
  only manage the DRIVERs they personally invited), `canSeeMember` (member-
  list visibility — "everything below, never above", with the Director-peer
  and Fleet-Admin-scoped exceptions spelled out in the role list above).
  `OrganizationGuard` + `@RequiredOrgRole()` now compare *rank*, not
  equality — `@RequiredOrgRole(SUPER_ADMIN)` admits SUPER_ADMIN or OWNER
  (fixed 2026-10-01 so OWNER, which outranks Director, automatically passes
  every Director-gated route without needing its own decorator value).
  Checks that depend on *who* the specific target is (not just the actor's
  rank) can't live in the guard and are inline checks in
  `OrganizationService` instead (`inviteMember`, `changeRole`,
  `removeMember`, `getMembers`, and the car-management endpoints below).
- `OrganizationController`/`OrganizationService`: CRUD mirroring
  `car-access.controller.ts`'s invite/accept pattern, now permission-matrix
  aware rather than a single Director-only gate: `inviteMember` and
  `changeRole` check `canAssignRole` against the actor's own role (a route
  decorator can't express "Fleet Admin may invite Driver but nothing else",
  so these checks moved from `@RequiredOrgRole` into the service);
  `removeMember`/`leaveOrganization` check `canManageMember`, with
  self-removal (leaving) always allowed regardless of rank. `getMembers`
  filters the roster through `canSeeMember` before returning it — a Fleet
  Admin's response only ever contains their own row, their inviting
  Director, and the Drivers they personally added. `inviteMember` also
  creates an `ORG_INVITED` notification for the invitee (so there's an
  in-app signal even if mail isn't working or goes unnoticed) and sends an
  email (`MailService.sendOrganizationInvitation`) — but only to an
  already-registered user; it still 404s on an email with no account.
  Inviting a not-yet-registered email needs its own invite-by-email model
  (tracked in `/var/www/hau_app/B2B-STRATEGY.md`). `acceptInvitation`
  creates an `ORG_INVITE_ACCEPTED` notification for the inviter.
  `deleteOrganization` (`DELETE /organization/:organizationId`,
  `SUPER_ADMIN`-or-higher) nulls out `Car.organization_id`/
  `Supplier.organization_id` for the org in the same transaction as the
  `Organization` delete — cars and suppliers survive as personal, only the
  org and its memberships (`onDelete: Cascade`) are actually gone.
- **Company-cars endpoints**: `GET /organization/:organizationId/cars`
  lists the fleet (any accepted member — the frontend decides who actually
  sees the section). `OrganizationCarDto` deliberately has no `nickname`
  field (2026-10-01) — a car's nickname is private per viewer now (see
  `features/cars/FEATURE.md`'s "Private per-car names"), and this admin-facing
  list must never surface anyone's private label, so it always shows
  make+model and never reads the per-user nickname table at all. It carries
  `photoUrl` instead: `OrganizationService.getOrganizationCars` selects each
  car's photos, picks the default one (or the first, if none is marked
  default), and resolves its URL through `CarService.resolveUrl` (made
  `public` for this reuse) rather than re-deriving the presigned-URL logic.
  `removeCarFromOrganization` (`DELETE
  /organization/:organizationId/cars/:carId`, `CAN_MANAGE_CARS_ROLES` =
  OWNER/SUPER_ADMIN/FLEET_ADMIN) un-links a single car, used from both the
  Organization screen and the car's own hub. **There's no "attach an
  existing car" endpoint** — adding a car to a fleet only happens through
  `CarService.createCar` (see below), never by re-pointing a car that
  already exists as someone's personal property (removed 2026-10-01: an
  earlier version of this feature let any Director-tier/Fleet-Admin member
  pick one of their *own* personal cars to attach, which both mixed the two
  pools and meant a Director with no personal cars had no way to add one at
  all). **`OrganizationCarDto.currentDriver`** (2026-10-01) is the car's
  active `CarDriverAssignment` (`ended_at: null`), surfaced so the fleet list
  can show who's driving each car without a second request per row:
  `getOrganizationCars` includes `driver_assignments` filtered to `ended_at:
  null` (`take: 1` as a safety net — the driver-assignment module's own
  invariant already guarantees at most one active assignment per car) and
  selects just the driver's `id, first_name, last_name, picture`
  (`OrganizationCarDriverDto`); `null` when there's no active assignment.
  This doesn't replace the driver-assignment module (`modules/
  driver-assignment/`) — it just mirrors its `DriverAssignmentDto.driver`
  shape (minus `email`) for this one list, so the Organization screen can
  show "who" without a round trip through `GET /car/:carId/driver-assignment`
  per row. **Gated by the `driver_assignment` feature switch**: `currentDriver`
  is forced to `null` for every car when the switch is off for that
  organization (`FeatureAccessService.isEnabled`, checked once per call with
  `{ type: 'business', orgId: organizationId }` rather than the request's own
  session context, since this method already takes the target org id as a
  parameter) — the query itself still runs (it's the same cheap join that
  backs the always-shown thumbnail/plate columns), only the mapped value is
  withheld, same end result as the bootstrap `documents`/`maintenance`
  omission but applied at the mapping step instead of the `select` shape (see
  `core/features/FEATURE.md` in the frontend repo). The frontend's
  `showDriverAssignment` then hides the trailing button for the whole row so
  there's no "assign" affordance pointing at a 403.
- **`CarService.createCar` is also how a car enters an organization's
  fleet**: `AddCarDto` has an optional `organizationId` — when set, the
  caller must be a Director-tier member (OWNER/SUPER_ADMIN, checked via
  `ORG_ROLE_RANK`) of that organization, and the car is created with
  `organization_id` set from the start rather than as a personal car that
  later gets attached. If the new car's `license_plate` matches one already
  in a *different* organization's fleet, the create is rejected with 409
  (`CAR_ORG_PLATE_CONFLICT`) — the only practical way to be reasonably sure
  it's the same physical vehicle; VIN doesn't need an equivalent check since
  `Car.vin` is already globally `@unique`, so two cars (in any fleet or
  none) can never share one. A car with no plate set can be created freely,
  since there's nothing to check.
- **Bulk import** (`POST /organization/:organizationId/cars/import`,
  multipart file upload): parses the uploaded file with
  `fleet-import.util.ts`'s `parseFleetImportFile` — `csv-parse` for `.csv`,
  `exceljs` for `.xlsx`/`.xls` (deliberately **not** the `xlsx`/SheetJS npm
  package, which has unpatched high-severity Prototype Pollution and ReDoS
  CVEs with no fix on npm — a real risk for a parser fed attacker-controlled
  uploaded files). Capped at `MAX_IMPORT_ROWS` (500) rows. Each parsed row is
  passed to `CarService.importCars`, which calls `createCar` once per row —
  same authorization and plate-conflict check as a single company car, so a
  bad row (missing make/model, a conflict, an invalid enum value) fails only
  that row; results are collected into `ImportCarsResultDto` (`total`,
  `created`, `failed`, per-row `results`). Columns: `make`/`model`
  (required), `variant`, `year`, `license_plate`, `vin`, `nickname`,
  `fuel_type`, `transmission`, `color`, `current_mileage` — header match is
  case/whitespace-insensitive.
- **Car access integration**: `CarAccessService` (the single place that
  resolves "which cars can this user see/touch", shared with every car-scoped
  module) grants access when a car's `organization_id` matches one of the
  user's accepted organizations — any accepted member gets FULL-equivalent
  access to every car in the organization, **except a DRIVER** — they only
  get access (mapped to `CarAccessRole.MAINTENANCE`) to the car(s) they
  currently have an active `CarDriverAssignment` for. This keys off `role
  !== DRIVER`, so `OWNER` automatically gets full access too without any
  change needed there.
- **`getSharedCars` also surfaces organization cars** — this is what
  actually puts an org car in front of a user at all: it feeds the Garage's
  shared/organization sections (both the bootstrap hydration on app load and
  the on-demand refresh use it), unioning in organization cars the caller
  doesn't already own or have a personal `CarUserAccess` row for.
- **Each entry says *why* it's shared, not just that it is** — `SharedCarDto`
  (and the bootstrap response's equivalent nested type) also carries
  `organization_id`/`organization_name` (`null` for a personal share), so
  the Garage can put personal shares and each organization's cars in their
  own section — see `features/cars/FEATURE.md`'s "The garage list". Both
  fields are additive and not on the generated client types (same
  convention as `Document.supplier_id`) — the frontend reads them through a
  local cast, not a client regen.

**Frontend** (`features/organization/`):

- **Company-owned local accounts** (2026-10-01): `OrganizationMemberUserDto.
  is_company_managed` (required `boolean`, backend-always-populated — added
  to the hand-written model alongside the rest of this feature's DTOs) is
  `true` only for one of these accounts, never for a real Google-identity
  member. `OrganizationApiService.createLocalMember(organizationId,
  firstName, lastName, username | null, role)` →
  `POST /organization/:organizationId/members/local`, returning
  `CreateLocalMemberResultDto` (`{ membership, credentials: { email,
  password, username } }`; `suggestUsername` / `usernameAvailable` call the two GET helpers below); `resetLocalPassword(organizationId, targetUserId)` →
  `POST /organization/:organizationId/members/:targetUserId/reset-password`,
  returning `{ password }`. Both `credentials`/`password` payloads are the
  *only* time the plaintext is ever returned — the backend never exposes it
  again afterward, only lets it be reset to a new one.
- `organization.component.ts`: `inviteMode` signal (`'email' | 'create'`)
  switches the invite card between the existing email-invite form and the
  new one (`newMemberFirstName`/`newMemberLastName`/`newMemberUsername`
  signals); both modes share `roleOptions`/`inviteRole`. `
  createNewLocalAccount()` calls `createLocalMember`, clears the three new
  fields, refreshes the member list via `selectOrg()` (same refresh the
  email-invite path uses) and then shows the returned credentials; a `400`
  (username already taken for the company) is translated to a dedicated
  inline error (`organization.createLocal.usernameTaken`) rather than the
  generic one. `confirmResetPassword(member)` — only ever invoked for a row
  where `member.user.is_company_managed` is true — shows a confirm alert
  first (resetting is immediate: the old password stops working right away)
  before calling `resetLocalPassword` and showing the new credentials.
  `presentCredentialsAlert(credentials, context)` is the shared one-time
  reveal (`AlertController`, same pattern as `confirmLeaveOrganization`/
  `confirmDeleteOrganization`) used by both creation and reset — only the
  alert header differs between the two contexts, the message/ack strings and
  visual treatment are identical. Removing a company-managed member still
  goes through the unchanged `removeMember()`/`DELETE .../members/:id` — the
  "fully disable, don't just unlink" distinction for these accounts is
  entirely a backend behavior, nothing the frontend needs to branch on.
- Icon choice: the reset action uses `key-outline` (a dedicated glyph, not
  the app's "+"-means-add convention) since it's neither an add nor a
  delete — it's the one deliberate exception noted in
  `history-auto-utility-fe/CLAUDE.md`'s icon-consistency guidance for this
  screen.
- `organization.component.ts/.html/.scss`: the main screen — lists
  organizations, members, the invite form, and the "company cars" section,
  all gated per-row/per-section by the same permission logic as the backend.
  `organization-roles.util.ts` is a frontend mirror of the backend's
  `organization-roles.ts` (`INVITABLE_ROLES`, `canManageMember`) — UI gating
  only, the backend re-checks everything itself. `roleOptions` (used for
  both the invite form and a member's role-change dropdown) only ever lists
  roles the current user's own role is allowed to assign; `canManage(member)`
  gates the per-row role dropdown + remove button. The "company cars"
  section has two separate gates: `canViewCompanyCars` (Director-tier or
  Fleet Admin) shows the section and its `organizationCars()` list, each row
  the shared `<app-action-list-row>` (thumbnail from `car.photoUrl`, same
  component `features/supplier/supplier-list.component.html` uses — see the
  Frontend UI Consistency Rule in the root `CLAUDE.md`) rather than a
  hand-rolled row; `onCarRowAction()` maps its `view`/`edit`/`delete` output
  to, respectively, `goToCar()` (the car's hub, `CARS_ROUTES.details`),
  `goToEditCar()` (straight into the edit form, `CARS_ROUTES.details/:id/
  edit`) and `removeOrgCar()` (unchanged — un-links the car from the fleet).
  Before 2026-10-01 this row had no click handler at all — only the remove
  button — which was the whole reason a Director/Super-Admin/Fleet-Admin
  couldn't edit an org car from this screen: there was no way to open one.
  Each row also projects a driver info/assign control into
  `<app-action-list-row>`'s `rowTrailing` slot (2026-10-01) — a sibling of
  the row's own tap-to-open button in the component's DOM (not nested inside
  it), so tapping it never also triggers the car-open navigation. When
  `car.currentDriver` is set it renders that driver's avatar (picture, or
  initials via `avatarInitials()` — widened to a structural `{ first_name,
  last_name }` parameter so it covers both `OrganizationMemberUserDto` and
  `OrganizationCarDriverDto`) and full name; when it's `null` it renders a
  `person-add-outline` + "Neatribuit"/"Unassigned" affordance instead. Both
  cases call `goToDriverAssignment(car)`, which navigates to the exact same
  route `cars-details.component.ts`'s `navigateToDriverAssignment()` uses
  (`${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.sofer.path}`) —
  there's no inline assign/reassign UI on this screen, just a shortcut into
  the one existing driver-assignment screen (see "Driver assignment" in
  `features/cars/FEATURE.md`).
  `carLabel()` always returns make+model, never a nickname (`
  OrganizationCarDto` doesn't carry one — see the backend section above).
  `canAddCompanyCar` (Director-tier only) shows the
  "add" button, which doesn't open a picker — `goToAddCompanyCar()`
  navigates straight to the normal car-creation screen
  (`CARS_ROUTES.create.fullPath`) with `?organizationId=<id>`, so the new
  car is created directly in the fleet (see `cars-form.component.ts` below).
  Uses `<app-dropdown>` for every role picker (role-selection UI consistency
  rule), `app-loader` for the loading state, and `HeaderActionsService` for
  the page title/actions (set in `ionViewWillEnter`, cleared in
  `ionViewWillLeave`) — a single end-slot template (add company, cost
  dashboard, leave, delete icons, each shown when it applies).
- **The screen shows the session's active organization only** (2026-10-02,
  account-context split — `ACCOUNT-CONTEXT.md`). `load()` fetches
  `myOrganizations()` and `selectOrg()`s `SessionContextService.activeOrgId()`;
  every action (members, invite, cars, cost dashboard, import) uses that id. The
  old multi-org chip switcher, its drag-to-reorder (`@angular/cdk/drag-drop`) and
  its `localStorage` order (`hau_org_chip_order*`) were removed, as was the
  pending-invite banner (a session's active organization is always an accepted
  membership; invites are accepted in the picker / notifications).
- **Switching and creating go through the org picker**
  (`features/auth/select-organization`): the shell's context badge navigates
  there to switch; the header "+" calls `goToCreateOrganization()` which opens
  it with `?create=1` (the picker then shows its create form). After the
  picker's `selectOrganization()` it resets + force-refreshes the bootstrap
  store so nothing cached from the previous company survives. Leaving or
  deleting the active organization sends the user back to the picker
  (`leftActiveOrganization()`).
- **Creating a company car reuses the normal "Add vehicle" screen** —
  `cars-form.component.ts` gained an `@Input() organizationId: number |
  null`, included in the create payload (`AddCarDto & { organizationId?:
  number }`, same additive-extension-type convention as `files`) only when
  set; `cars-create.component.ts` reads it from `?organizationId=` in the
  route (`ngOnInit`) and passes it down. Never set when editing an existing
  car — only `cars-create`, not `cars-edit`, reads the query param. A 409
  from the backend (`CAR_ORG_PLATE_CONFLICT`) is mapped to a dedicated
  toast message in `car-details.state.ts`'s `_translateCarError`, same
  pattern as the existing `CAR_VIN_CONFLICT` entry (`CAR_NICKNAME_CONFLICT`
  was removed 2026-10-01 along with the global-nickname model — see
  `features/cars/FEATURE.md`).
- **Bulk import is its own routed screen**
  (`organization-import-cars/organization-import-cars.component.ts`, route
  `organization/import-cars/:organizationId`) — a file picker
  (`.csv`/`.xlsx`/`.xls`), a client-generated downloadable CSV template
  (`downloadTemplate()`, a `Blob` + temporary anchor, no backend round-trip),
  and a per-row results list after upload. `OrganizationApiService.
  importCars()` sends the file as `FormData` (no DTO/client-regen concerns —
  this was never on the generated OpenAPI client to begin with).
- **No dedicated "create organization" screen anymore** — the former
  `organization-create` component and `organization/new` route were deleted;
  creation lives in the picker (`POST /organization` via
  `OrganizationApiService.createOrganization`, then `POST /auth/context`).
- `cars-details.component.ts`'s `confirmRemoveFromOrganization()` is the
  other half of the remove-car action — it lives there, not here, because
  it's triggered from the car's own hub, not the Organization screen. It's a
  deliberately separate action from `confirmLeaveSharedCar()` (which only
  knows about personal `CarUserAccess` shares) — the "…" sheet shows
  "Elimină accesul" only when `!isOrgCar(car)`, and shows "Elimină din
  organizație" (gated on `isOrgCar(car)`) for the organization case, each
  calling its own correctly-wired action.
- Route scoping: `organization` is declared `data: { scope: ['business'] }` in
  `main.routes.ts` and checked by `contextScopeGuard`
  (`features/main/context-scope.guard.ts`) — the old `organization.guard.ts`
  (`hasOrganization()`) was removed. UX only; the backend scope guard is
  authoritative.
- `organization-api.service.ts` + `organization.model.ts`: hand-written
  API client and DTOs, same convention as `features/admin/admin-api.service.ts` /
  `admin.model.ts` — the generated OpenAPI client isn't regenerated for this
  (see the api-backend.yaml staleness note). Moved out of `core/` into this
  feature in the feature-boundaries refactor; still consumed cross-feature by
  `features/auth` (the org-picker), `features/cars` and `features/notifications`.
- Wired into the shell: `main.component.ts` (nav item with `scope: ['business']`),
  `main.routes.ts` (route `data`), and `settings.component.ts`/`.html` (mobile
  Account screen entry, shown when `SessionContextService.isBusiness()`).

### Business account approval

When an app administrator enables business account approval (set per-environment
via an admin flag or feature gate, not yet a per-organization toggle), users who
want to create a new company must first submit a request describing their
company name and optional note. The administrator approves or rejects it from
the Admin page, and the user is notified by email + in-app notification. Not
gated: app administrators, users already Director-tier or higher in another
company, users joining a company by invitation, and company-managed accounts.

**Frontend** — `features/auth/select-organization/`:
- The org picker's create form (`SelectOrganizationComponent`) branches based on
  whether the user is eligible to create a company immediately vs. must request
  approval (`OrganizationApiService.canCreateOrganization()`, or read from the
  bootstrap response `ctx.businessAccessState`).
- If approval is required, it shows the request form (`newBusinessAccessRequest`
  signal: `companyName`, `note`). On submit,
  `OrganizationApiService.requestBusinessAccess()` → `POST /business-access/request`,
  returns the new request with status `PENDING`. The component then shows a
  "request sent" confirmation displaying the company name and `createdAt`.
- If approval is not required or the user's request was previously approved, it
  shows the normal create form.
- If the user's latest request is `REJECTED`, it shows the rejection reason
  (`rejectionReason`) and a button to send a new request.
- `business-access.model.ts`: hand-written DTOs `BusinessAccessRequest`,
  `CreateBusinessAccessRequestDto`, `BusinessAccessRequestStatus` enum.
- `business-access-api.service.ts`: hand-written, `requestBusinessAccess()`,
  `getMyLatestRequest()`.
- i18n: `auth.selectOrganization.businessAccess.*` (request form label, note
  placeholder, submit button, pending state, rejection reason copy, new-request
  button).
- `SelectOrganizationComponent.ionViewWillEnter()` checks for any notification
  showing `BUSINESS_ACCESS_APPROVED` or `_REJECTED` in the bootstrap response
  (`ctx.businessAccessDecision`) — if present, shows a toast confirming the
  decision, then clears it so it's not shown again on page re-enter.

**Backend** (`history-auto-utility-be/src/modules/business-access/`):
- Prisma model `BusinessAccessRequest` (fields: `user_id`, `company_name`,
  `note`, `status: PENDING | APPROVED | REJECTED`, `rejection_reason`, 
  `decided_by_user_id`, `decided_at`, `created_at`). Per-user, only the latest
  row's status is used; older rows are never queried.
- `BusinessAccessService`: `requestAccess()`, `getLatestRequest()`,
  `approveRequest()`, `rejectRequest()`. **Permission logic**: a user can create
  an org directly if (1) they're an admin (`is_admin=true`), or (2) they already
  hold OWNER/SUPER_ADMIN in another org, or (3) they have an `APPROVED`
  `BusinessAccessRequest`, or (4) they hold an accepted membership of any kind
  in an existing org (invited users join this way). Otherwise, if approval is
  enabled, they must `requestAccess()` first.
- `OrganizationService.createOrganization()` calls
  `BusinessAccessService.assertCanCreateOrganization()` — throws 403 with code
  `BUSINESS_ACCESS_REQUIRED` if denied, or `BUSINESS_ACCESS_REQUEST_PENDING` /
  `BUSINESS_ACCESS_ALREADY_ALLOWED` / 409 `BUSINESS_ACCESS_REQUEST_NOT_PENDING`
  (when approving/rejecting) for state-mismatch errors. If approval is off, this
  check is a no-op.
- `BusinessAccessController` at `/business-access`: `POST /request` (user route,
  `@Scope('business', {allowNoOrg: true})`) creates and emails the admin;
  `GET /me` returns the user's latest request. `AdminBusinessAccessController`
  at `/admin/business-access-requests`: `GET ?status=PENDING|APPROVED|REJECTED`
  lists requests (admin-only, `@Scope('personal') + AdminGuard`), `POST :id/approve`
  and `POST :id/reject { reason? }` with decision emails sent to the user. Mail
  templates `business-access-request.template.ts` (admin notification, Romanian,
  with link to `/main/admin`) and `business-access-decision.template.ts` (user
  notification, localized to user's language setting, indicating approval or
  rejection + optional reason). Recipients from env var
  `BUSINESS_ACCESS_NOTIFY_EMAILS` (default `office@denhau.ro,denis.gandzii@gmail.com`,
  must be added to `.env.test` and prod `.env` at release time). Mail send
  failures are logged but never fail the request.
- Bootstrap response (`/auth/me`) includes
  `ctx.businessAccessState: { canCreateOrganization, latestRequest? }` so the
  frontend knows whether to show the request form or the create form.
- Notification types `BUSINESS_ACCESS_REQUESTED` (sent to all admins when a user
  requests, data: `{requestId, company_name, userName, userEmail}`),
  `BUSINESS_ACCESS_APPROVED` / `_REJECTED` (sent to requester, data:
  `{requestId, company_name, reason?}`).

**Known gaps (tracked in `/var/www/hau_app/B2B-STRATEGY.md`)**: no
feature-flag UI (the `feature_flags`/`branding` columns exist but nothing
reads them yet); no bulk CSV import of members or cars; can't invite an email
with no HAU App account yet; switching between personal and business
is a re-login (no in-session switch yet — see `ACCOUNT-CONTEXT.md`);
`OWNER` has no assignment UI anywhere — it's set directly in the database
(tracked as an open item, see the plan's "Probleme descoperite" list); the
Finance role's actual scope (invoices, fuel, charts) isn't built yet, it
only exists in the enum/permission matrix today; the `MANAGER` role is
disabled (excluded from the invite picker and permission matrix) pending a
real definition of what it should do.

### Recent decisions
- **2026-10-09: Business access gating per user (not per organization)** — a
  request is per-user, not per-org, so invited employees of approved companies
  don't need approval themselves; approval happens only on the admin page, not
  in a user-facing dashboard or API endpoint, so a forwarded approval email
  can't accidentally grant access.

**Session context and fleet cars (2026-10-02):** fleet cars are visible only
in a business session. `GET /car` returns the active organization's cars in
business context (a DRIVER: only currently assigned cars) and only
`organization_id IS NULL` cars in personal context; the personal
"shared with me" list no longer returns organization cars. All car-level
access (`CarAccessService.resolveUserRoleById` / `getAccessibleCarIds`)
checks the car belongs to the session's context, read from the request via
AsyncLocalStorage (`common/context/request-context.ts`). A global
`ContextEnforcementInterceptor` enforces `@Scope(...)`, re-checks the
accepted membership on every business request (fresh role replaces the JWT's
`orgRole`) and rejects any `:organizationId` that differs from the session's
organization. Creating a car or supplier in business sets
`organization_id = ctx.orgId` regardless of what the client sends. See
`ACCOUNT-CONTEXT.md` at the repo root.

### Username (`User.username`)

- Nullable-unique, lowercase `[a-z0-9]`, 3-20 chars, set only for company-managed accounts.
  Generator in `common/util/username.util.ts` (pure, unit-tested in `username.util.spec.ts`):
  5 letters of the last name + 2 of the first (diacritics stripped; a single name -> its first 7
  letters; min 3 chars), then base + org initials (legal suffixes like srl/sa ignored), then
  base + 2, 3... Uniqueness is global; the DB-aware wrapper is `generateUniqueUsername` with
  `OrganizationService.isUsernameTaken` as the check.
- `GET /organization/:id/members/username-suggestion?firstName=&lastName=` -> `{ username }` and
  `GET .../username-available?username=` -> `{ available }` (400 on bad format). Both require a role
  that can create accounts.
- `POST .../members/local` takes an optional `username` (else generated); a taken one -> 409
  `{ code: 'USERNAME_TAKEN' }`. Result `credentials` = `{ email, password, username }`.
- `User.email` stays `<username>@<Organization.login_code>` as an internal unique identifier (never
  shown in the UI; legacy login still resolves it). `Organization.login_code` (slug of the org name,
  `loginCodeBase` in `common/util/slugify.util.ts`) still exists internally and is still returned on
  `MyOrganizationDto` for admin roles, but no screen displays or asks for it.
