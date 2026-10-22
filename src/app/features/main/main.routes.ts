import {importProvidersFrom} from '@angular/core';
import {Routes} from '@angular/router';
import {HAU_ROUTES} from '@hau/app.routes.const';
import {
  CarDetailsFacade,
  CarDetailsState,
  CarListFacade,
  CarListState,
  CarNotesFacade,
  CarNotesState,
  CarWishesFacade,
  CarWishesState,
  CarAccessFacade,
  CarAccessState,
  provideCarsCarPage,
  provideCarsNav,
} from '@hau/features/cars';
import {BlogFacade, BlogState, provideBlogCarPage, provideBlogNav} from '@hau/features/blog';
import {DocumentsFacade, DocumentsState, provideDocumentsCarPage, provideDocumentsNav} from '@hau/features/documents';
import {MaintenanceFacade, MaintenanceState, provideMaintenanceCarPage, provideMaintenanceNav} from '@hau/features/maintenance';
import {provideReportsCarPage, provideReportsNav} from '@hau/features/reports';
import {provideSupplierNav} from '@hau/features/supplier';
import {provideOrganizationNav} from '@hau/features/organization';
import {provideSaleContractNav} from '@hau/features/sale-contract';
import {adminGuard} from '@hau/features/admin';
import {MainComponent} from '@hau/features/main/main.component';
import {contextScopeChildGuard, ContextScopeData} from '@hau/features/main/context-scope.guard';
import {CarPageContributionsService} from '@hau/core/car-page/car-page-contributions.service';
import {NavigationDestinationsService} from '@hau/core/navigation/navigation-destinations.service';
import {NavigationPreferencesService} from '@hau/core/navigation/navigation-preferences.service';
import {NgxsModule} from '@ngxs/store';

// Every child route declares which context(s) it belongs to — see ACCOUNT-CONTEXT.md.
const BOTH: ContextScopeData = { scope: ['personal', 'business'] };
const BUSINESS_ONLY: ContextScopeData = { scope: ['business'] };
const SUPPLIER_SCOPE: ContextScopeData = { scope: ['business'], feature: 'supplier' };
const PERSONAL_ONLY: ContextScopeData = { scope: ['personal'] };
const SALE_CONTRACT_SCOPE: ContextScopeData = { scope: ['personal', 'business'], orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'], feature: 'sale_contract' };
// These four back the global (non-car-scoped) entry point for a feature that also owns a
// car-page tab/action — see "Global (non-car) entry points" in core/car-page/FEATURE.md.
const DOCUMENTS_SCOPE: ContextScopeData = { scope: ['personal', 'business'], feature: 'documents' };
const MAINTENANCE_SCOPE: ContextScopeData = { scope: ['personal', 'business'], feature: 'maintenance' };
const JOURNAL_SCOPE: ContextScopeData = { scope: ['personal', 'business'], feature: 'journal' };
const REPORTS_SCOPE: ContextScopeData = { scope: ['personal', 'business'], feature: 'reports' };

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivateChild: [contextScopeChildGuard],
        providers: [
            CarListFacade, importProvidersFrom(NgxsModule.forFeature([CarListState])),
            // Accepting a car-share invite happens from the notifications bell in
            // MainComponent itself, not just from within a car — provided here so
            // it's visible to MainComponent as well as the whole cars/ subtree below.
            CarAccessFacade, importProvidersFrom(NgxsModule.forFeature([CarAccessState])),
            // Wishes are read/written from two sibling subtrees — the car's Wishlist
            // page under cars/, and maintenance/add, which ticks a wish off once the
            // record it graduated into is saved. Provided here so neither subtree has
            // to know about the other.
            CarWishesFacade, importProvidersFrom(NgxsModule.forFeature([CarWishesState])),
            // CarDetailsFacade/CarNotesFacade moved up here (from the cars/ child route
            // below) because the car-page tab/action contributions registered right below
            // need them at this same level: a feature's `provideXCarPage()` factory runs
            // inside THIS providers array (see CAR_TABS/CAR_ACTIONS below), and a DI child
            // (cars/'s own providers) is invisible to it — only this level and its
            // ancestors are. MainComponent's sidebar subnav needs CarPageContributionsService
            // at this same level too (it is a sibling of cars/, not a descendant of it).
            CarDetailsFacade, importProvidersFrom(NgxsModule.forFeature([CarDetailsState])),
            CarNotesFacade, importProvidersFrom(NgxsModule.forFeature([CarNotesState])),
            // The car page's pluggable tabs/"add" actions (see core/car-page/FEATURE.md) —
            // each feature contributes through its own barrel, in the same order the hub
            // grid used to hardcode them.
            CarPageContributionsService,
            ...provideMaintenanceCarPage(),
            ...provideDocumentsCarPage(),
            provideReportsCarPage(),
            provideBlogCarPage(),
            ...provideCarsCarPage(),
            // The mobile bottom bar's configurable destinations (see core/navigation/FEATURE.md)
            // — same composition-root level as the car-page contributions above, since
            // NavigationDestinationsService/NavigationPreferencesService read the same
            // CarPageContributionsService (for `car`-kind destinations' links).
            NavigationDestinationsService,
            NavigationPreferencesService,
            provideMaintenanceNav(),
            provideDocumentsNav(),
            provideReportsNav(),
            provideBlogNav(),
            provideCarsNav(),
            provideSupplierNav(),
            provideOrganizationNav(),
            provideSaleContractNav(),
        ],
        children: [
            {
                path: HAU_ROUTES.cars.path,
                data: BOTH,
                loadChildren: () => import('../cars/cars.routes').then(mod => mod.carRoutes),
            },
            {
                // Maintenance's own car-tab routes (Istoric, its record detail, Plan) — mounted
                // alongside cars/ at the same path prefix; see maintenance.car-tab.routes.ts and
                // "Tab routes move to their owning feature" in core/car-page/FEATURE.md.
                path: `${HAU_ROUTES.cars.path}/details`,
                data: BOTH,
                loadChildren: () => import('../maintenance/maintenance.car-tab.routes').then(mod => mod.maintenanceCarTabRoutes),
                providers: [MaintenanceFacade, importProvidersFrom(NgxsModule.forFeature([MaintenanceState]))],
            },
            {
                // Reports' own car-tab route (Rapoarte) — same mount point as above.
                path: `${HAU_ROUTES.cars.path}/details`,
                data: BOTH,
                loadChildren: () => import('../reports/reports.car-tab.routes').then(mod => mod.reportsCarTabRoutes),
            },
            {
                // Documents' own car-tab route (Documente) — same mount point as above; see
                // documents.car-tab.routes.ts and "Tab routes move to their owning feature" in
                // core/car-page/FEATURE.md.
                path: `${HAU_ROUTES.cars.path}/details`,
                data: BOTH,
                loadChildren: () => import('../documents/documents.car-tab.routes').then(mod => mod.documentsCarTabRoutes),
                providers: [DocumentsFacade, importProvidersFrom(NgxsModule.forFeature([DocumentsState]))],
            },
            {
                path: HAU_ROUTES.documents.path,
                data: DOCUMENTS_SCOPE,
                loadChildren: () => import('../documents/documents.routes').then(mod => mod.documentsRoutes),
                providers: [DocumentsFacade, importProvidersFrom(NgxsModule.forFeature([DocumentsState]))],
            },
            {
                // No NGXS feature state: the wizard holds one draft at a time and reads
                // it back from the API. A store would be a second place for a third
                // party's CNP to sit around in memory, for no benefit.
                path: HAU_ROUTES.saleContract.path,
                data: SALE_CONTRACT_SCOPE,
                loadChildren: () => import('../sale-contract/sale-contract.routes').then(mod => mod.saleContractRoutes),
            },
            {
                path: HAU_ROUTES.blog.path,
                data: JOURNAL_SCOPE,
                loadChildren: () => import('../blog/blog.routes').then(mod => mod.blogRoutes),
                providers: [BlogFacade, importProvidersFrom(NgxsModule.forFeature([BlogState]))],
            },
            {
                path: HAU_ROUTES.maintenance.path,
                data: MAINTENANCE_SCOPE,
                loadChildren: () => import('../maintenance/maintenance.routes').then(mod => mod.maintenanceRoutes),
            },
            {
                path: HAU_ROUTES.sentDestinations.path,
                data: PERSONAL_ONLY,
                canActivate: [adminGuard],
                loadChildren: () => import('../sent-destinations/sent-destinations.routes').then(mod => mod.sentDestinationsRoutes),
            },
            {
                path: HAU_ROUTES.reports.path,
                data: REPORTS_SCOPE,
                loadComponent: () => import('../reports/reports.component').then(m => m.ReportsComponent),
            },
            {
                path: HAU_ROUTES.plan.path,
                data: MAINTENANCE_SCOPE,
                loadComponent: () => import('../maintenance/plan/plan.component').then(m => m.MaintenancePlanComponent),
            },
            {
                path: HAU_ROUTES.admin.path,
                data: PERSONAL_ONLY,
                canActivate: [adminGuard],
                loadComponent: () => import('../admin/admin.component').then(m => m.AdminComponent),
            },
            {
                path: HAU_ROUTES.organization.path,
                data: BUSINESS_ONLY,
                loadChildren: () => import('../organization/organization.routes').then(mod => mod.organizationRoutes),
            },
            {
                // Business only: suppliers are the active organization's (the backend scopes the list).
                path: HAU_ROUTES.supplier.path,
                data: SUPPLIER_SCOPE,
                loadChildren: () => import('../supplier/supplier.routes').then(mod => mod.supplierRoutes),
            },
            {
                path: HAU_ROUTES.settings.path,
                data: BOTH,
                loadChildren: () => import('../settings/settings.routes').then(mod => mod.settingsRoutes),
            },
            {
                path: '**',
                redirectTo: HAU_ROUTES.cars.path
            }
        ]
    },

];
