import { Routes } from '@angular/router';
import { HAU_ROUTES } from '@hau/app.routes.const';
import {AuthGuard} from "@hau/features/auth/auth.guard";
import {AUTH_ROUTES} from "@hau/features/auth/auth.routes.const";

export const routes: Routes = [
  {
    path: HAU_ROUTES.auth.path,
    loadChildren: () => import('./features/auth/auth.routes').then(mod => mod.authRoutes)
  },
  {
    path: HAU_ROUTES.main.path,
      canActivate: [AuthGuard],
    loadChildren: () => import('./features/main/main.routes').then(mod => mod.mainRoutes)
  },
  {
    path: '**',
    redirectTo: AUTH_ROUTES.login.fullPath
  }
];
