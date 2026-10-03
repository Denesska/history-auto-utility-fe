# Reports

## Functionality

Reports gives an owner a cost overview of their vehicle maintenance, either
across the whole garage or for one car:

- **Scope**: opened from the main menu it shows every owned car (with an
  "all cars" selector); opened from a car's own menu (Rapoarte) it's locked
  to that car and the selector is hidden.
- **Period filter**: three chips — this month, this year (default), all
  time — recompute every number below instantly.
- **Totals**: total cost for the period, kilometers driven (from the spread
  between the lowest and highest odometer reading recorded in the period,
  when at least two readings exist), and cost per kilometer.
- **Category breakdown**: total cost per maintenance category (fuel, parts,
  service, etc.), each as a row with its share of the total cost as a
  percentage, sorted highest first; categories with no cost in the period
  are omitted.
- **Monthly chart**: a 12-month bar chart of cost per month, with the
  highest month highlighted.
- **Export to PDF**: a card advertising a PDF export of the report — not
  built yet, the button is disabled with a "coming soon" badge.

## Implementation

**Public API: `index.ts`** exists as the feature boundary but exports
nothing yet — no other feature consumes `reports/` today (the shell
lazy-loads its page by relative path); `reports/` itself consumes
`maintenance/`'s `SERVICE_TYPE_CONFIG`/`serviceTypeConfig` for category
labels/colors.

**Frontend** (`features/reports/`): a single page, `ReportsComponent`
(`reports.component.ts`/`.html`/`.scss`), routed both globally
(`/main/reports`) and per-car (`cars/details/:id/rapoarte`) — see
`main.routes.ts`. `isScoped` is set from whether the route carries a car
`:id` param; the unscoped route falls back to an optional `?carId=` query
param.

- All data comes from `BootstrapFacade` (`ownedCars$`, `maintenance$` —
  maintenance records keyed by car id), already loaded app-wide; this page
  does no API calls of its own.
- `_buildViewModel()` is a pure function over (cars, maintenance-by-car,
  selected car, period) that derives totals/breakdown/monthly bars; it reruns
  on every `combineLatest` emission (car or period change).
- The car selector is the shared `<app-dropdown>`; the period chips are
  three plain buttons (not `<app-dropdown>`, since it's a fixed 3-option
  toggle, not a value picker).
- No NGXS state/facade of its own — nothing to provide at the composition
  root, so `main.routes.ts` has no `reports`-specific `providers:` entry.
