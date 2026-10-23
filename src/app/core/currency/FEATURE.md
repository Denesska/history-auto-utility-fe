# Default currency

## Functionality

When you add a new document (for example an insurance policy) or a new
maintenance entry, the currency next to the price starts with your default
currency. In Settings you can set it to a specific currency, or leave it on
"Automatic" (the default). Automatic uses the currency of the country you are
in, worked out from your device's time zone and, if that is not recognised,
from your device's language region. If neither tells us anything, it is RON.

You can still pick any available currency for each entry. Existing entries keep
the currency they were saved with. A new car's purchase price starts in EUR
(used cars are customarily priced in EUR) unless you chose a specific default
currency in Settings; Automatic never changes that.

## Implementation

- Service: `core/currency/default-currency.service.ts` (`DefaultCurrencyService`,
  root-provided). Sync getters `preferredCurrency` (string|null), `detectedCurrency`
  (location only, cached), `defaultCurrency` (= preferred ?? detected), plus
  `detectedCountry()` and `setPreferred()`.
- Preference storage: `UserSettings.currency` (nullable, `null` = Automatic) on the
  user-settings endpoints. `start()` (called from `AppComponent`) loads it on login /
  authenticated start via `AuthService.isLoggedIn$` and clears it on logout; the
  settings page also pushes it on load and on change (`setPreferred` then PUT).
- Resolution order: (1) user preference (`preferredCurrency`); (2) country from
  `Intl.DateTimeFormat().resolvedOptions().timeZone` via `TIMEZONE_COUNTRY`;
  (3) region of `navigator.languages[0]` via `Intl.Locale`; (4) country ->
  currency via `COUNTRY_CURRENCY`; (5) `DEFAULT_CURRENCY` ('RON') from
  `shared/config/currency.config.ts`.
- Time zone before language because it reflects where the device is, while the
  language reflects the UI preference (an English-UI user living in Romania).
- Both mapping tables live at the top of the service file; extend them there.
  No geolocation permission, no network call; everything is in try/catch.
- Consumers: `features/documents/documents-form` (new document, ITP default,
  scan with premium but no currency) and
  `features/maintenance/add-maintenance-panel` (new record's currency, default
  currency of a newly added part when the record's currency isn't supported for parts).
- Car purchase price (`cars-form`): new car uses `preferredCurrency` if it is in `CURRENCY_OPTIONS` (cars.constants.ts, includes MDL), else EUR; never the detected one. Loaded cars keep their value.
- Deliberately still RON: legacy fallbacks for stored data without a currency,
  BNR conversion base, maintenance detail display fallbacks. 
- The currency pickers append the form's current value when it is not in
  `COMMON_CURRENCIES`, so a detected GBP/PLN/etc. shows up. Part pickers are
  limited to `COMMON_CURRENCIES` (backend constraint) and fall back to RON.
- Limitations: a VPN does not matter but a traveling device follows its time
  zone; unmapped time zones fall back to the language region, then RON. BNR
  conversion may be unavailable for currencies BNR doesn't publish.
