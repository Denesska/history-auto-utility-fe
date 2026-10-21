export const AUTH_ROUTES = {
    login: {
        path: 'login',
        fullPath: '/auth/login'
    },
    token: {
        path: 'token',
        fullPath: '/auth/token'
    },
    selectOrganization: {
        path: 'select-organization',
        fullPath: '/auth/select-organization'
    },
    changePassword: {
        path: 'change-password',
        fullPath: '/auth/change-password'
    },
    // Component lives in `features/legal/legal-consent/` (not this feature) but is
    // mounted at `/auth/legal-consent` by the composition root (`app.routes.ts`),
    // guarded by `authGuard` the same way — see that guard's legal-acceptance check.
    legalConsent: {
        path: 'legal-consent',
        fullPath: '/auth/legal-consent'
    }
};