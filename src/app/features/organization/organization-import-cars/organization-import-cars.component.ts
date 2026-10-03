import { NavigationHistoryService } from '@hau/core/navigation/navigation-history.service';
import { Component, inject, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonIcon, NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline, closeOutline, cloudUploadOutline, documentTextOutline } from 'ionicons/icons';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { OrganizationApiService } from '@hau/features/organization/organization-api.service';
import { ImportCarsResultDto } from '@hau/features/organization/organization.model';

const TEMPLATE_HEADERS = [
    'make', 'model', 'variant', 'year', 'license_plate', 'vin',
    'nickname', 'fuel_type', 'transmission', 'color', 'current_mileage',
];
const TEMPLATE_EXAMPLE_ROW = ['Dacia', 'Logan', 'MCV', '2021', 'BV22DHS', '', 'Logan Flotă', 'PETROL', 'MANUAL', '', '42000'];

/**
 * Bulk-adds cars to an organization's fleet from an uploaded .csv/.xlsx/.xls
 * file — the only alternative to adding cars one at a time from the
 * Organization screen's "company cars" section. Each row is created exactly
 * like a single company car (same Director-tier authorization and
 * plate-conflict check, see `CarService.importCars` on the backend) — a bad
 * row fails on its own, the rest of the file still imports.
 */
@Component({
    selector: 'app-organization-import-cars',
    templateUrl: './organization-import-cars.component.html',
    styleUrls: ['./organization-import-cars.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonContent, IonIcon, TranslocoPipe],
})
export class OrganizationImportCarsComponent implements ViewWillEnter, ViewWillLeave {
    @ViewChild('headerCloseTpl') private _headerCloseTpl!: TemplateRef<unknown>;

    private readonly _api = inject(OrganizationApiService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _nav = inject(NavController);
    private readonly _navHistory = inject(NavigationHistoryService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);

    private organizationId!: number;

    readonly selectedFile = signal<File | null>(null);
    readonly busy = signal(false);
    readonly error = signal<string | null>(null);
    readonly result = signal<ImportCarsResultDto | null>(null);

    constructor() {
        addIcons({ checkmarkCircleOutline, closeCircleOutline, closeOutline, cloudUploadOutline, documentTextOutline });
    }

    ionViewWillEnter(): void {
        this.organizationId = Number(this._route.snapshot.paramMap.get('organizationId'));
        this._headerActions.setTitle(this._transloco.translate('organization.import.title'));
        this._headerActions.setStart(this._headerCloseTpl);
        this._headerActions.set(null);
    }

    ionViewWillLeave(): void {
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    close(): void {
        this._navHistory.back();
    }

    downloadTemplate(): void {
        const csv = [TEMPLATE_HEADERS.join(','), TEMPLATE_EXAMPLE_ROW.join(',')].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'import_masini_exemplu.csv';
        link.click();
        URL.revokeObjectURL(url);
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.selectedFile.set(input.files?.[0] ?? null);
        this.error.set(null);
        this.result.set(null);
    }

    import(): void {
        const file = this.selectedFile();
        if (!file) return;
        this.busy.set(true);
        this.error.set(null);
        this._api.importCars(this.organizationId, file).subscribe({
            next: result => { this.busy.set(false); this.result.set(result); },
            error: () => { this.busy.set(false); this.error.set(this._transloco.translate('organization.import.errors.upload')); },
        });
    }

    importAnother(): void {
        this.selectedFile.set(null);
        this.result.set(null);
        this.error.set(null);
    }
}
