# Supplier directory (Furnizori)

## Functionality

A directory of the external parties a car is serviced, insured or supplied
through — garages, parts suppliers, insurance brokers, fuel suppliers. It
exists so a fleet admin can keep a
reusable list instead of retyping "Service Auto Plus" by hand every time, and
so maintenance records and insurance documents can be linked back to a
specific supplier for reporting later.

### What you can do

- **Add a supplier**: name, a type (garage/workshop, parts supplier,
  broker/insurer, fuel supplier, other — each with its own color and icon,
  everywhere a supplier shows up), contact person, phone, email, address,
  notes. Only the name is required (marked with a red asterisk). Saving with
  an empty name or a malformed email turns the field red with a message under
  it and jumps to the first problem; nothing is saved until it is fixed.
- **The phone number has its own country picker** (flag + dial code, e.g.
  "🇷🇴 +40"), and formats itself as you type, grouped the way that country
  actually writes phone numbers (not a fixed "3 digits at a time" rule — a
  German or a Romanian number group differently). Pasting a full
  international number (e.g. "+373 691 234 56") re-detects the country
  automatically and switches the picker to match.
- **Tap a supplier's phone number to call it, or its email to write to it** —
  opens your phone's dialer/mail app with the number or address already
  filled in, on both the mobile app and the web.
- **See every supplier you've added**, each as a row with its type icon,
  name, type tag and quick-call/quick-email buttons. Inactive ones are
  hidden by default — a checkbox shows them too. Another checkbox groups the
  list under a heading per type instead of one flat list.
- **Edit it** (tap the row, or its edit icon/swipe on mobile), **toggle it
  active/inactive**, or **delete it outright** (swipe on mobile, or the
  row's icons on desktop) — deactivating keeps past maintenance records and
  documents that reference it showing its name; deleting just drops the
  link, nothing else is affected.
- **Pick a supplier when adding a maintenance record** (only when "performed
  by: service", not DIY) or a document that has a provider/insurer field
  (RCA, CASCO, ITP, road tax, registration) — an optional dropdown next to
  the free-text provider field. The maintenance record's and document's
  detail pages show the chosen supplier's name.
- Suppliers belong to the active organization — every accepted member who
  can open the screen sees the same list. Personal accounts have no
  suppliers at all: no screen, no picker on records, no supplier name on
  detail pages.
- **Add a new supplier** the same way you'd add anything else in the app: the
  **+** in the top bar on desktop, or the bottom-right **+** button on
  mobile (hidden while the form itself is open, so it's never shown on top
  of the thing it opens).

### Where to find it

Business accounts only (any role of the active organization). Personal
accounts don't see it anywhere. On desktop it's a sidebar item; on
mobile/tablet it's a card in the Account screen's Navigation section, with
its own back button (this screen isn't reachable from a bottom tab, so it
gets a normal drilled-into screen's chrome: back button, no bottom tab bar).

## Implementation

**Public API: `index.ts`** exports `SupplierApiService` and the `SupplierDto`/`WithSupplierId` types — used by `documents/` and `maintenance/` wherever a maintenance record or document references a supplier.

- **Feature switch:** `@Feature('supplier')` on the supplier controller. Supplier references on documents/maintenance (`supplier_id`) are left untouched when the switch is off: data is kept and the frontend hides the picker (known limitation). Business sessions whose organization has `feature_flags.supplier = false` get 403 `FEATURE_DISABLED`; personal sessions are unaffected. See ACCOUNT-CONTEXT.md, "Feature switches".

**Backend** (`history-auto-utility-be/src/modules/supplier/`):

- Prisma model `Supplier` (`prisma/schema.prisma`): `name`, `type`
  (`SupplierType` enum: SERVICE/PARTS/INSURANCE/FUEL/OTHER), `contact_name`,
  `phone`, `email`, `address`, `notes`, `is_active` (default true), `user_id`
  (creator), `organization_id` (nullable — same personal/shared convention as
  `Car.organization_id`). `Document.supplier_id` and
  `MaintenanceRecord.supplier_id` are both nullable FKs with
  `onDelete: SetNull` — deleting a supplier unlinks it from past records
  rather than failing or cascading.
- `SupplierController` is `@Scope('business')` (decided 2026-10-02: suppliers
  are business-only; personal calls get 403 WRONG_CONTEXT). `SupplierService`
  scopes everything to the active organization (`ctx.orgId`); the personal
  branch in `contextWhere`/`canAccess` is dead for HTTP callers, kept as a
  safe fallback. Pre-existing personal suppliers (`organization_id` NULL) are
  left in the DB untouched but unreachable. `assertAccessible(id,
  userId)` is the method `DocumentService`/`MaintenanceRecordService` call
  before accepting a `supplier_id` on create/update, via
  `resolveLinkedSupplierId()`: outside a business context it returns
  `undefined`, so a personal record can never store a supplier (ignored on
  update, null on create); in business it validates the supplier belongs to
  the active organization. No dedicated guard class — unlike
  `CarAccessGuard`/`OrganizationGuard`, access here is a single boolean check
  (creator or org member), done inline in the service.
- Creating or updating a supplier with an `organization_id` the caller isn't
  an accepted member of is rejected (403) — there's no UI for this yet (see
  Known gaps), but the backend already enforces it for when one is built.

**Frontend**:

- The create/edit form is a reactive `FormGroup` of `<app-form-field>`s (phone: `<app-phone-input>` projected; the global `.hau-field__control app-phone-input` rule in `hau-form-fields.scss` strips its own box). `save()` calls `revealInvalidFields`. Validation mirrors `CreateSupplierDto`: name required (+ non-blank), email `Validators.email`. No local field CSS.
- `features/supplier/supplier-list.component.ts/.html/.scss` — single page,
  no wizard: list + an inline create/edit form. Rows reuse
  `shared/component/action-list-row/` (the same generic swipe-actions row
  `documents-list` uses) rather than a hand-rolled card, so edit/delete and
  the swipe gesture come for free; `renew`'s slot is repurposed for the
  activate/deactivate toggle (the one extensibility point that component
  exposes beyond view/edit/delete). Tapping a row opens it for editing — there's
  no separate read-only detail page. While building this,
  `shared/component/swipe-actions/` (the swipe-reveal panel underneath
  `action-list-row`/`document-list-row`, used app-wide: Garage, Documents,
  Maintenance, Jurnal, Suppliers) had its text labels removed — icon-only now,
  with the label kept as `aria-label` instead of visible text, per the
  app-wide "no text buttons, icons only" rule.
  - **Header actions follow the shared view/edit-create split**
    (`HeaderActionsService`): list mode projects a "+" into the end slot
    (`.sup-header-right`, ≥1024px only — a local `ion-fab.sup-fab` covers
    <1024px, hidden outright while the form is open); form mode swaps to a
    close button in the *start* slot (replacing the back button) and a save
    button in the end slot, at every width — same `syncHeaderActions()`
    pattern as `car-notes-panel.component.ts` (one end-slot template per
    mode, called on every state transition, not just `ionViewWillEnter`).
  - **Shell chrome**: this route has its own entry in `main.component.ts`'s
    `hideBottomNav` (`isSupplierRoute`) and is *not* in `TOP_LEVEL_ROUTES` —
    all three sidebar-only screens reached from the Account screen's
    Navigation section with no bottom tab of their own (Admin, Organization,
    Supplier) get the same treatment: back button shown, bottom tab bar +
    shell FAB hidden (Supplier has its own page-local FAB; Admin/Organization
    have none). This used to be inconsistent — Admin/Organization kept the
    bottom tab bar and skipped the back button — fixed 2026-10-01 to match
    Supplier instead, since relying on the tab bar as the only way back read
    as a bug, not a deliberate choice. `backHref` has an explicit
    `/main/settings` fallback for all three, for a deep link with no real nav
    stack to pop.
  - **Type badge/chip/group-heading colors** come from
    `shared/config/supplier-type.config.ts` (`SUPPLIER_TYPE_CONFIG`, same
    shape as `document-type.config.ts` — this file also now owns the
    `SupplierType` enum itself, moved out of `features/supplier/supplier.model.ts`
    in the feature-boundaries refactor since `shared/` can't depend on
    `features/*`; `supplier.model.ts` re-exports it so existing imports keep
    working) and a parallel set of
    `--hau-sup-<type>-fg/-soft` tokens in `hau-design-system.scss` (all 3
    themes), independent from the document badge palette.
  - **Grouping**: `groupByType` signal — when on, suppliers are split into
    one `SupplierGroup` per type (empty types omitted) instead of one flat
    list; purely a view concern, no separate API call.
  - **Phone/email**: `telHref()`/`mailHref()` build plain `tel:`/`mailto:`
    anchors — no plugin needed, Capacitor's WebView (and any regular
    browser) hands these URI schemes off to the OS dialer/mail app on an
    anchor click, same as the web.
- `shared/component/phone-input/` (`<app-phone-input>`, `ControlValueAccessor`)
  — the shared phone number input, used here and available for any future
  phone field. Country picker (`<app-dropdown>`, options built from a short
  curated list in `shared/config/phone-country.config.ts` — not all ~245
  countries `libphonenumber-js` knows, just the common ones; typing/pasting
  a full international number still auto-detects *any* country correctly
  regardless of this list) + live `AsYouType` formatting, grouped per that
  country's own convention rather than a fixed digit-grouping rule. The
  value read/written through the control is always E.164 (`+40757999876`)
  or `null`; only the displayed text is locale-formatted. Imports
  `libphonenumber-js/min` (smaller metadata bundle — same behavior for this
  component's needs) as a new dependency.
  - `shared/component/country-flag/` gained SVG flags for DE/FR/IT/ES/GB/PL/US
    (extended, not forked) to cover the phone country list alongside the
    existing vignette countries; anything else still falls back to its
    neutral code chip. The dropdown's native (mobile) picker already covers
    any ISO code via emoji (`countryFlagEmoji()`), unaffected by this list.
- `features/supplier/supplier.model.ts` — hand-written DTOs, plus
  `WithSupplierId<T>`: a small type-extension helper other
  features use to read/write `supplier_id` on the *generated* `DocumentDto`/
  `MaintenanceRecordDto` (`@hau/autogenapi`), since that client only picks up
  additive backend fields on a regen — which is manual and risky (see the
  api-backend.yaml staleness note in memory: a naive regen has silently
  deleted actively-used model files before). `supplier_id` is additive on
  both backend models but intentionally *not* threaded through a client
  regen for this change.
- `supplier-api.service.ts` — hand-written API client, same convention
  as `features/organization/organization-api.service.ts` /
  `features/admin/admin-api.service.ts`. Moved out of `core/` into this
  feature in the feature-boundaries refactor; still consumed cross-feature
  by `features/documents` and `features/maintenance` (their forms).
- Wired into the shell as business-only: `main.routes.ts` route data
  `BUSINESS_ONLY`, `allNavItems` entry `scope: ['business']`, and the mobile
  Account screen's Suppliers button behind `@if (showOrganization())`
  (`goToSuppliers()`). Document form, document detail, maintenance panel and
  maintenance record detail only call `GET /supplier` (and the two forms only
  render the picker) when `SessionContextService.isBusiness()`; in personal
  the supplier list stays empty so no name is shown and no 403 is triggered. New icon asset
  `assets/icons/hau-briefcase.svg` (the sidebar's wrench icon was already
  taken by Maintenance).
- **Document form integration** (`features/documents/documents-form/`): an
  optional "Supplier (from directory)" dropdown next to the free-text
  provider/insurer field, shown under the same condition
  (`showField('provider')`) and reset when that condition stops applying
  (switching to a type with no provider field clears the picked supplier
  too). `document-detail/` shows the supplier's name when one is set, looked
  up by loading the full supplier list client-side (no join on the document
  response) and matching by id.
- **Maintenance form integration**
  (`features/maintenance/add-maintenance-panel/`): the same dropdown, shown
  only when "performed by: service" (not DIY) is selected.
  `record-detail/` shows the supplier's name next to "performed by" the same
  way.

**Known gaps**: deleting an organization still reassigns its suppliers to
`organization_id = NULL` (personal) — they become unreachable orphans now that
personal has no suppliers; no supplier-level cost reporting (e.g. "how
much have I spent at this garage") — that's natural fodder for the fleet
cost dashboard planned later; no bulk import; no custom photo/logo per
supplier (type icon only — a logo upload is possible later if wanted, same
upload plumbing as everything else, not built now). Whether to keep both the
persistent desktop edit/delete icons *and* the swipe gesture on a row (today
both exist, inherited from `action-list-row`) is an open call, not yet
settled.
