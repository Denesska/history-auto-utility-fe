import { Routes } from '@angular/router';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';

export const authRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: AUTH_ROUTES.token.path,
                loadComponent: () => import('./token/token.component').then(mod => mod.TokenComponent),
            },
            {
                path: AUTH_ROUTES.login.path,
                loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: AUTH_ROUTES.login.path
            }
        ]
    }
];