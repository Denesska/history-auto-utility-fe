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
} from '@hau/features/cars';
import {BlogFacade, BlogState} from '@hau/features/blog';
import {DocumentsFacade, DocumentsState} from '@hau/features/documents';
import {MaintenanceFacade, MaintenanceState} from '@hau/features/maintenance';
import {adminGuard} from '@hau/features/admin';
import {MainComponent} from '@hau/features/main/main.component';
import {contextScopeChildGuard, ContextScopeData} from '@hau/features/main/context-scope.guard';
import {NgxsModule} from '@ngxs/store';

// Every child route declares which context(s) it belongs to — see ACCOUNT-CONTEXT.md.
const BOTH: ContextScopeData = { scope: ['personal', 'business'] };
const BUSINESS_ONLY: ContextScopeData = { scope: ['business'] };
const SUPPLIER_SCOPE: ContextScopeData = { scope: ['business'], feature: 'supplier' };
const PERSONAL_ONLY: ContextScopeData = { scope: ['personal'] };
const SALE_CONTRACT_SCOPE: ContextScopeData = { scope: ['personal', 'business'], orgRoles: ['OWNER', 'SUPER_ADMIN', 'FLEET_ADMIN'], feature: 'sale_contract' };

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
        ],
        children: [
            {
                path: HAU_ROUTES.cars.path,
                data: BOTH,
                loadChildren: () => import('../cars/cars.routes').then(mod => mod.carRoutes),
                providers: [
                    CarDetailsFacade, importProvidersFrom(NgxsModule.forFeature([CarDetailsState])),
                    // Cars' "istoric" sub-route renders the maintenance feature's own component,
                    // which needs its facade/state — provided here (composition root) rather than
                    // from inside cars.routes.ts, so cars/ never has to know about maintenance/.
                    MaintenanceFacade, importProvidersFrom(NgxsModule.forFeature([MaintenanceState])),
                    CarNotesFacade, importProvidersFrom(NgxsModule.forFeature([CarNotesState])),
                ],
            },
            {
                path: HAU_ROUTES.documents.path,
                data: BOTH,
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
                data: BOTH,
                loadChildren: () => import('../blog/blog.routes').then(mod => mod.blogRoutes),
                providers: [BlogFacade, importProvidersFrom(NgxsModule.forFeature([BlogState]))],
            },
            {
                path: HAU_ROUTES.maintenance.path,
                data: BOTH,
                loadChildren: () => import('../maintenance/maintenance.routes').then(mod => mod.maintenanceRoutes),
            },
            {
                path: HAU_ROUTES.reports.path,
                data: BOTH,
                loadComponent: () => import('../reports/reports.component').then(m => m.ReportsComponent),
            },
            {
                path: HAU_ROUTES.plan.path,
                data: BOTH,
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