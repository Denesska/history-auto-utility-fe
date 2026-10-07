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

**Public API: `index.ts`** exports `provideReportsCarPage` — consumed by the
shell to register the car-page contribution. `reports/` itself consumes
`maintenance/`'s `SERVICE_TYPE_CONFIG`/`serviceTypeConfig` for category
labels/colors.

**Car page contribution**: `reports.car-page.ts` (`provideReportsCarPage()`,
see `core/car-page/FEATURE.md`) contributes the Rapoarte hub tile/subnav
entry. Its second line is the current year, not a count, so it's rendered as
a small tab-id-keyed exception in `cars-details.component.html` rather than
through `count`/`countKey`. The per-car route itself
(`cars/details/:id/rapoarte`) moved out of `cars/cars.routes.ts` into this
feature's own `reports.car-tab.routes.ts`, mounted by the shell at the same
path prefix `cars.routes.ts` mounts at.

**Frontend** (`features/reports/`): a single page, `ReportsComponent`
(`reports.component.ts`/`.html`/`.scss`), routed both globally
(`/main/reports`) and per-car (`cars/details/:id/rapoarte`, via
`reports.car-tab.routes.ts`) — see `main.routes.ts`. `isScoped` is set from
whether the route carries a car `:id` param; the unscoped route falls back
to an optional `?carId=` query param.

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
- **Totals use `cost_ron`, not `cost`** (`_buildViewModel()`'s `totalCost`,
  the category breakdown and the monthly bars all do
  `r.cost_ron ?? r.cost ?? 0`) — a record's `cost` is in whatever currency it
  was entered in (see maintenance's own FEATURE.md), so summing it raw would
  silently add e.g. EUR and RON together. `cost_ron` is always RON (computed
  server-side), so it's the only field these totals may sum across records.
