import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { OrganizationApiService } from '@hau/core/organization-api.service';

/** UX only — the backend's OrganizationGuard is what actually protects the data. */
export const organizationGuard: CanActivateFn = () => {
    const router = inject(Router);
    return inject(OrganizationApiService).hasOrganization().pipe(
        map(hasOrganization => hasOrganization || router.createUrlTree([HAU_ROUTES.cars.fullPath])),
    );
};
