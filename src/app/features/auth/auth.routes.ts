import { Routes } from '@angular/router';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { authGuard } from '@hau/features/auth/auth.guard';

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
                path: AUTH_ROUTES.changePassword.path,
                loadComponent: () => import('./change-password/change-password.component').then(mod => mod.ChangePasswordComponent),
            },
            {
                path: AUTH_ROUTES.selectOrganization.path,
                canActivate: [authGuard],
                loadComponent: () => import('./select-organization/select-organization.component').then(mod => mod.SelectOrganizationComponent),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: AUTH_ROUTES.login.path
            }
        ]
    }
];