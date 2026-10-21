import { Routes } from '@angular/router';
import { LEGAL_ROUTES } from './legal.routes.const';

/**
 * Public legal documents — no `authGuard`, must render for a logged-out
 * visitor exactly the same as for a logged-in user (see GDPR consent flow,
 * `features/legal/FEATURE.md`). Mounted at `/legal/**` by `app.routes.ts`.
 */
export const legalRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: LEGAL_ROUTES.terms.path,
                loadComponent: () => import('./legal-document/legal-document.component').then(mod => mod.LegalDocumentComponent),
                data: { doc: 'terms' },
            },
            {
                path: LEGAL_ROUTES.privacy.path,
                loadComponent: () => import('./legal-document/legal-document.component').then(mod => mod.LegalDocumentComponent),
                data: { doc: 'privacy' },
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: LEGAL_ROUTES.terms.path,
            },
        ],
    },
];
