import { Injectable, inject } from '@angular/core';
import { catchError, distinctUntilChanged, EMPTY, switchMap } from 'rxjs';
import { AuthService } from '@hau/features/auth/auth.service';
import { SettingsService } from '@hau/features/settings/settings.service';
import { DEFAULT_CURRENCY } from '@hau/shared/config/currency.config';

/** IANA time zone -> ISO country. Not exhaustive; unmapped zones fall through to the language region. */
const TIMEZONE_COUNTRY: Record<string, string> = {
  'Europe/Bucharest': 'RO',
  'Europe/Chisinau': 'MD',
  'Europe/Tiraspol': 'MD',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Europe/Rome': 'IT',
  'Europe/Madrid': 'ES',
  'Europe/Vienna': 'AT',
  'Europe/Brussels': 'BE',
  'Europe/Amsterdam': 'NL',
  'Europe/Dublin': 'IE',
  'Europe/Lisbon': 'PT',
  'Europe/Athens': 'GR',
  'Europe/Helsinki': 'FI',
  'Europe/London': 'GB',
  'Europe/Kiev': 'UA',
  'Europe/Kyiv': 'UA',
  'Europe/Budapest': 'HU',
  'Europe/Sofia': 'BG',
  'Europe/Warsaw': 'PL',
  'Europe/Prague': 'CZ',
  'Europe/Zurich': 'CH',
  'Europe/Zagreb': 'HR',
  'Europe/Tallinn': 'EE',
  'Europe/Riga': 'LV',
  'Europe/Vilnius': 'LT',
  'Europe/Luxembourg': 'LU',
  'Europe/Malta': 'MT',
  'Europe/Bratislava': 'SK',
  'Europe/Ljubljana': 'SI',
  'Asia/Nicosia': 'CY',
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Phoenix': 'US',
  'America/Los_Angeles': 'US',
  'America/Anchorage': 'US',
  'Pacific/Honolulu': 'US',
};

/** ISO country -> currency. Countries not listed fall back to DEFAULT_CURRENCY. */
const COUNTRY_CURRENCY: Record<string, string> = {
  RO: 'RON',
  MD: 'MDL',
  US: 'USD',
  GB: 'GBP',
  UA: 'UAH',
  HU: 'HUF',
  PL: 'PLN',
  CZ: 'CZK',
  CH: 'CHF',
  // Eurozone (BG joined in 2026)
  AT: 'EUR', BE: 'EUR', BG: 'EUR', HR: 'EUR', CY: 'EUR', EE: 'EUR', FI: 'EUR',
  FR: 'EUR', DE: 'EUR', GR: 'EUR', IE: 'EUR', IT: 'EUR', LV: 'EUR', LT: 'EUR',
  LU: 'EUR', MT: 'EUR', NL: 'EUR', PT: 'EUR', SK: 'EUR', SI: 'EUR', ES: 'EUR',
};

/**
 * The currency a NEW amount (document premium, maintenance cost) starts with:
 * the user's saved preference, else the one detected from the device location.
 * See core/currency/FEATURE.md.
 */
@Injectable({ providedIn: 'root' })
export class DefaultCurrencyService {
  private readonly auth = inject(AuthService);
  private readonly settings = inject(SettingsService);

  private _country: string | null | undefined;
  private _detected: string | undefined;
  private _preferred: string | null = null;

  /** Loads the saved preference on login / authenticated start and clears it on logout. Call once at app start. */
  start(): void {
    this.auth.isLoggedIn$
      .pipe(
        distinctUntilChanged(),
        switchMap(loggedIn => {
          if (!loggedIn) {
            this._preferred = null;
            return EMPTY;
          }
          return this.settings.getSettings().pipe(catchError(() => EMPTY));
        }),
      )
      .subscribe(settings => this.setPreferred(settings.currency ?? null));
  }

  /** The user's explicit choice, or null for Automatic. */
  get preferredCurrency(): string | null {
    return this._preferred;
  }

  /** Updates the preference immediately (null = Automatic). Persisting is the caller's job. */
  setPreferred(currency: string | null): void {
    this._preferred = currency ? currency.toUpperCase() : null;
  }

  /** The currency of the device's location, ignoring the preference. */
  get detectedCurrency(): string {
    if (this._detected === undefined) {
      const country = this.detectedCountry();
      this._detected = (country && COUNTRY_CURRENCY[country]) || DEFAULT_CURRENCY;
    }
    return this._detected;
  }

  /** Preference when set, else the detected currency. Synchronous: read it when a form opens. */
  get defaultCurrency(): string {
    return this._preferred ?? this.detectedCurrency;
  }
  /** ISO country of the device (time zone first, then language region), or null when unknown. */
  detectedCountry(): string | null {
    if (this._country === undefined) {
      this._country = this._fromTimeZone() ?? this._fromLocale();
    }
    return this._country;
  }

  private _fromTimeZone(): string | null {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return (tz && TIMEZONE_COUNTRY[tz]) || null;
    } catch {
      return null;
    }
  }

  private _fromLocale(): string | null {
    try {
      const tag = navigator.languages?.[0] || navigator.language;
      if (!tag) return null;
      const region = new Intl.Locale(tag).region;
      return region ? region.toUpperCase() : null;
    } catch {
      return null;
    }
  }
}
