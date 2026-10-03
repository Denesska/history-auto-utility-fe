import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { AdminApiService } from '@hau/features/admin/admin-api.service';

/** UX only — the backend's AdminGuard is what actually protects the data. */
export const adminGuard: CanActivateFn = () => {
    const router = inject(Router);
    return inject(AdminApiService).isAdmin().pipe(
        map(isAdmin => isAdmin || router.createUrlTree([HAU_ROUTES.cars.fullPath])),
    );
};
