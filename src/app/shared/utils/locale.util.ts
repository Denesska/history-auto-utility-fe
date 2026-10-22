/**
 * Single place mapping the active UI language (Transloco) to date/Intl locales.
 * Unknown / future languages fall back to en-GB, so a new language only needs an entry here
 * (plus `registerLocaleData` in main.ts) to get localized month and day names.
 */
const INTL_LOCALES: Record<string, string> = { en: 'en-GB', ro: 'ro-RO', ru: 'ru-RU' };

/** Locale ids registered with `registerLocaleData` in main.ts (used by Angular's formatDate). */
const ANGULAR_LOCALES: Record<string, string> = { en: 'en-GB', ro: 'ro', ru: 'ru' };

let activeLang = 'en';

/** Called from main.ts whenever the Transloco language changes. */
export function setActiveLang(lang: string): void {
    activeLang = lang;
}

export function getActiveLang(): string {
    return activeLang;
}

/** BCP-47 locale for `Intl` / `toLocaleDateString` (defaults to the active language). */
export function intlLocale(lang: string = activeLang): string {
    return INTL_LOCALES[lang] ?? 'en-GB';
}

/** Locale id for Angular's `formatDate` (defaults to the active language). */
export function angularLocale(lang: string = activeLang): string {
    return ANGULAR_LOCALES[lang] ?? 'en-GB';
}
