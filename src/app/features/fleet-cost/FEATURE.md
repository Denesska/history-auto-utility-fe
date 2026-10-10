# Fleet cost dashboard

## Functionality

For a company fleet (an organization), this shows where maintenance money is
going: how much has been spent in total, how much of that the company
reimbursed versus not, how spending trends month to month, and which cars
are the most expensive to run. It's built on the same maintenance records
you already log — no new data entry, just a new way to look at it.

### What you can do

- **Open it from the Organization screen** — each organization you belong
  to (except as a Driver) has a "Costuri flotă" button next to its name.
- **Pick a time window**: last 90 days, last 180 days, last year, or all
  time.
- **See four headline numbers**: total cost, how much of that was flagged
  as a company expense, how many service records that covers, and how many
  of the fleet's cars have any cost in the period.
- **A monthly trend chart** — total cost per month for the selected window.
- **A "most expensive cars" list** — every car with at least one cost in
  the period, ranked highest-spend first, with its license plate.

Personal (non-organization) cars have no fleet to report on, so this screen
only exists for organization members.

### Who can see it

Every accepted organization member except a **Driver** — a driver is
already scoped to only the car(s) they're currently assigned to everywhere
else in the app, so seeing fleet-wide costs across cars they can't even
open would be a bigger window than the rest of their role gives them.

## Implementation

**Public API: `index.ts`** exists as the feature boundary but exports nothing yet — no other feature consumes `fleet-cost/` today (its page is lazy-loaded directly by `organization.routes.ts` via relative path).

- **Feature switch:** `@Feature('fleet_cost')` on the cost-dashboard controller. Business sessions whose organization has `feature_flags.fleet_cost = false` get 403 `FEATURE_DISABLED`; personal sessions are unaffected. See ACCOUNT-CONTEXT.md, "Feature switches".

**Backend** (`history-auto-utility-be/src/modules/fleet-cost/`):

- `FleetCostController`/`FleetCostService`: a single endpoint,
  `GET /organization/:organizationId/cost-dashboard?range=90|180|365|0`
  (0 = all time; default 90), gated by the existing `OrganizationGuard`
  (any accepted member) plus an inline check rejecting the `DRIVER` role.
  No new data: raw SQL (`$queryRaw`/`Prisma.sql`, same idiom as
  `admin.service.ts`) aggregating `MaintenanceRecord.cost`/
  `is_company_expense`, joined to `Car` and filtered to
  `Car.organization_id`. Three queries run in parallel: totals, a
  month-bucketed trend (`to_char(service_date, 'YYYY-MM')`), and a
  per-car breakdown ordered by total cost descending.
- Deliberately has its own `FLEET_COST_RANGES = [90, 180, 365, 0]` rather
  than reusing `ADMIN_RANGES` (`[7, 30, 90, 365, 0]`) — a 7- or 30-day
  window is too short for a cost trend to mean anything.

**Frontend**:

- `features/fleet-cost/fleet-cost-page.component.ts/.html/.scss` — a
  single routed page (no form/create mode, read-only report), registered
  as a sibling route under `organization.routes.ts`
  (`/main/organization/costs/:organizationId`) rather than its own
  top-level sidebar/Account entry — it's tightly coupled to "whichever
  organization you're looking at" on the Organization screen, which
  already has the org-switcher; a second one here would be a duplicate.
  Range picker is the shared `<app-dropdown>`. KPI tiles and chart cards
  (`.fc-kpi`/`.fc-card`) mirror `admin.component.scss`'s classes under a
  new `fc-` prefix — Angular's style encapsulation means they can't be
  reused directly, so this is a deliberate small duplication rather than
  one more reason to extract a shared KPI-tile component right now.
  The monthly trend and per-car breakdown reuse
  `shared/component/charts/bar-chart.component.ts` (`BarChartComponent`,
  `app-bar-chart`) and `hbar-list.component.ts` (`HBarListComponent`,
  `app-hbar-list`) — both are fully generic (`{label, value}` inputs, zero
  coupling to admin). Moved there from `features/admin/components/` in the
  feature-boundaries refactor so neither this page nor admin has to
  cross-import the other; `features/admin/admin.component.ts` was switched
  to the same shared components at the same time.
- `fleet-cost-api.service.ts` + `fleet-cost.model.ts` — hand-written
  client/DTOs, same convention as `organization-api.service.ts` (the OpenAPI
  client isn't regenerated for this). Moved out of `core/` into this feature
  in the feature-boundaries refactor.
- Entry point: `features/organization/organization.component.ts`'s
  `canViewCosts()` (hides the button for a `DRIVER`, mirroring the backend
  check — a UX nicety, not the real gate) and `goToCostDashboard()`, button
  in `organization.component.html` next to the organization's name.

**Known gaps**: no CSV/PDF export; no filter by supplier or service
category (just car and month); no "compare to previous period" delta on
the KPI tiles, unlike the Admin page's user-growth tiles; the trend chart
buckets by month always, regardless of the selected range, so "last 90
days" and "all time" look visually similar in shape, just different in
scale.
