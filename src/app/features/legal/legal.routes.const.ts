/** Which legal document a `LegalDocumentComponent` route instance renders. */
export type LegalDocType = 'terms' | 'privacy';

/** Public legal document routes — no login required, see FEATURE.md. */
export const LEGAL_ROUTES = {
    terms: {
        path: 'terms',
        fullPath: '/legal/terms',
    },
    privacy: {
        path: 'privacy',
        fullPath: '/legal/privacy',
    },
};
