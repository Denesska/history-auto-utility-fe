export const SALE_CONTRACT_ROUTES = {
    list: {
        path: '',
        fullPath: '/main/sale-contract',
    },
    create: {
        path: 'new',
        fullPath: '/main/sale-contract/new',
    },
    edit: {
        path: ':id/edit',
        fullPath: '/main/sale-contract',
    },
    view: {
        path: ':id',
        fullPath: '/main/sale-contract',
    },
};

/**
 * Version of the consent wording shown before the other party's identity
 * document is processed. The backend stores whichever version we send, so this
 * is the record of what the user actually agreed to.
 *
 * **Bump this whenever the consent text in the translation files changes** —
 * otherwise old consents look like they covered wording they never showed.
 */
export const SALE_CONTRACT_CONSENT_VERSION = '2026-09-v1';
