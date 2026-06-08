import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { DOC_TYPE_CONFIG, DocStatus } from '@hau/features/documents/documents-list/documents-list.component';
import { DocumentsFacade } from '@hau/features/documents/state/documents.facade';
import { IonContent, IonIcon, IonSpinner, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    arrowBackOutline, createOutline, trashOutline,
    calendarOutline, carOutline, shieldCheckmarkOutline,
    documentTextOutline, cloudDownloadOutline, businessOutline,
    cardOutline, personOutline, idCardOutline, documentOutline,
    chevronForwardOutline, informationCircleOutline,
} from 'ionicons/icons';
import { combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface DocumentDetailVm {
    doc: DocumentDto;
    car: CarDto | undefined;
    status: DocStatus;
    daysLeft: number | null;
    typeLabel: string;
    typeAbbr: string;
    typeColor: string;
    carLabel: string;
    fileSizeLabel: string | null;
    isPdf: boolean;
    isImage: boolean;
}

function calcStatus(expiryDate: string | null | undefined): { status: DocStatus; daysLeft: number | null } {
    if (!expiryDate) return { status: 'no-expiry', daysLeft: null };
    const daysLeft = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 86_400_000);
    if (daysLeft < 0) return { status: 'expired', daysLeft };
    if (daysLeft <= 30) return { status: 'expiring', daysLeft };
    return { status: 'valid', daysLeft };
}

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

@UntilDestroy()
@Component({
    selector: 'app-document-detail',
    templateUrl: 'document-detail.component.html',
    styleUrls: ['./document-detail.component.scss'],
    imports: [IonContent, IonIcon, IonSpinner, DatePipe, TranslocoPipe],
})
export class DocumentDetailComponent implements OnInit {
    vm: DocumentDetailVm | null = null;
    loading = true;
    deleting = false;

    constructor(
        private readonly _facade: DocumentsFacade,
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _nav: NavController,
        private readonly _sanitizer: DomSanitizer,
        private readonly _transloco: TranslocoService,
    ) {
        addIcons({
            arrowBackOutline, createOutline, trashOutline,
            calendarOutline, carOutline, shieldCheckmarkOutline,
            documentTextOutline, cloudDownloadOutline, businessOutline,
            cardOutline, personOutline, idCardOutline, documentOutline,
            chevronForwardOutline, informationCircleOutline,
        });
    }

    ngOnInit(): void {
        const id = Number(this._route.snapshot.paramMap.get('id'));

        combineLatest([this._facade.cars$, this._facade.documents$, this._facade.loading$])
            .pipe(untilDestroyed(this))
            .subscribe(([cars, docs, loading]) => {
                this.loading = loading;
                const doc = docs.find(d => d.id === id);
                if (doc) {
                    this.vm = this.buildVm(doc, cars);
                } else if (!loading && docs.length > 0) {
                    void this._router.navigate(['/main/documents']);
                }
            });

        this._facade.loadAll();
    }

    private buildVm(doc: DocumentDto, cars: CarDto[]): DocumentDetailVm {
        const car = cars.find(c => c.id === doc.car_id);
        const cfg = DOC_TYPE_CONFIG[doc.document_type];
        const fallbackAbbr = doc.document_type.slice(0, 3).toUpperCase();
        const { status, daysLeft } = calcStatus(doc.expiry_date);
        const ext = doc.file_name?.split('.').pop()?.toLowerCase() ?? '';
        return {
            doc,
            car,
            status,
            daysLeft,
            typeLabel: cfg ? this._transloco.translate(cfg.label) : doc.document_type,
            typeAbbr: cfg ? this._transloco.translate(cfg.abbr) : fallbackAbbr,
            typeColor: cfg?.color ?? 'slate',
            carLabel: car ? `${car.make} ${car.model}` : '—',
            fileSizeLabel: doc.file_size ? formatBytes(doc.file_size) : null,
            isPdf: ext === 'pdf',
            isImage: ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext),
        };
    }

    get fileUrl(): SafeResourceUrl {
        return this._sanitizer.bypassSecurityTrustResourceUrl(this.vm?.doc.file_url ?? '');
    }

    get rawFileUrl(): string {
        return this.vm?.doc.file_url ?? '';
    }

    navigateToEdit(): void {
        void this._router.navigate([`/main/documents/${this.vm!.doc.id}/edit`]);
    }

    deleteDocument(): void {
        if (!this.vm || this.deleting) return;
        this.deleting = true;
        this._facade.deleteDocument(this.vm.doc.id);
        void this._nav.back();
    }

    goBack(): void { this._nav.back(); }
}
