import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { docUrgencyClass, DocUrgency } from '@hau/features/cars/cars.utils';
import { DocTypeBadgeComponent } from '@hau/shared/component/doc-type-badge/doc-type-badge.component';

@Component({
    selector: 'app-doc-expiry-row',
    standalone: true,
    imports: [TranslocoPipe, DocTypeBadgeComponent],
    templateUrl: 'doc-expiry-row.component.html',
    styleUrls: ['./doc-expiry-row.component.scss'],
})
export class DocExpiryRowComponent {
    @Input({ required: true }) docType!: string;
    @Input({ required: true }) title!: string;
    @Input({ required: true }) carLabel!: string;
    @Input() licensePlate?: string | null;
    @Input() days: number | null = null;
    @Input({ required: true }) dateStr!: string | null;

    @Output() rowClick = new EventEmitter<void>();

    get urgencyClass(): DocUrgency | null {
        return this.days === null ? null : docUrgencyClass(this.days);
    }
}
