import { ServiceCategory } from '@hau/autogenapi/models';

// Ordered so a tie between equally-matched categories resolves predictably —
// earlier entries win. Diacritics are stripped and everything lowercased
// before matching (see normalize()), so keywords below are written plain.
// COMBUSTIBIL and OTHER are intentionally excluded: COMBUSTIBIL is forced
// from service_type=ALIMENTARE (never inferred from text), and OTHER is the
// "no match" outcome, not something to infer into.
const CATEGORY_KEYWORDS: Partial<Record<ServiceCategory, string[]>> = {
    OIL_CHANGE: ['ulei', 'vidanja', 'vidanj', 'filtru ulei', 'filtru de ulei', 'schimb ulei'],
    BRAKE_SERVICE: ['frana', 'frane', 'placute', 'placuta', 'disc frana', 'discuri frana', 'etrier', 'saboti', 'lichid de frana'],
    TIRE_SERVICE: ['anvelopa', 'anvelope', 'cauciuc', 'cauciucuri', 'vulcanizare', 'janta', 'jante', 'roata', 'roti'],
    TRANSMISSION_SERVICE: ['cutie de viteze', 'ambreiaj', 'transmisie', 'diferential'],
    FLUID_SERVICE: ['antigel', 'lichid parbriz', 'lichid servodirectie', 'lichid racire'],
    ENGINE_SERVICE: ['curea distributie', 'curea de distributie', 'bujii', 'injector', 'turbina', 'motor'],
    INSPECTION: ['itp', 'inspectie', 'revizie'],
    BATTERY_SERVICE: ['baterie', 'acumulator'],
    FILTER_SERVICE: ['filtru aer', 'filtru polen', 'filtru combustibil', 'filtru habitaclu'],
    LIGHT_SERVICE: ['bec far', 'far', 'stop', 'lampa'],
};

// Matches Unicode combining diacritical marks (U+0300-U+036F) left behind by
// NFD normalization, e.g. turns "ș"/"ț"/"ă"/"â"/"î" into plain "s"/"t"/"a"/"a"/"i".
const DIACRITICS_REGEX = /[̀-ͯ]/g;

function normalize(text: string): string {
    return text.toLowerCase().normalize('NFD').replace(DIACRITICS_REGEX, '');
}

/**
 * Zero-network keyword classifier — the "rules" half of "rules first, AI as fallback"
 * for suggesting a maintenance record's service_category. Matches the record's
 * description + free-typed part names/codes against a per-category Romanian keyword
 * list. Returns the category with the most keyword hits, or null when nothing
 * matches (the caller should fall back to the AI suggestion endpoint in that case).
 */
export function suggestServiceCategory(description: string, partNames: string[]): ServiceCategory | null {
    const haystack = normalize([description, ...partNames].join(' '));
    if (!haystack.trim()) return null;

    let best: ServiceCategory | null = null;
    let bestHits = 0;
    for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS) as [ServiceCategory, string[]][]) {
        const hits = keywords.filter((kw) => haystack.includes(kw)).length;
        if (hits > bestHits) {
            best = category;
            bestHits = hits;
        }
    }
    return best;
}
