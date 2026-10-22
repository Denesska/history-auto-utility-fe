/**
 * The legal document HTML fragments (`assets/legal/*.html`) and the consent
 * checkbox label both embed plain `<a href="/legal/terms">`/`<a href="/legal/privacy">`
 * markup (set directly in the translation files / fetched HTML, rendered via
 * `[innerHTML]`) instead of real Angular `routerLink`s, since that markup isn't
 * Angular template syntax. Every click handler that wants to intercept one of
 * those internal links and hand it to the router (or open it another way)
 * shares this one lookup instead of re-implementing the DOM walk.
 */
export function internalLegalLinkHref(event: Event): string | null {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.('a[href^="/legal/"]') as HTMLAnchorElement | null;
    return anchor ? anchor.getAttribute('href') : null;
}
