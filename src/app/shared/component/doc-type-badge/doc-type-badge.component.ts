import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    shieldCheckmarkOutline, clipboardOutline, trailSignOutline,
    carOutline, cashOutline, documentOutline,
} from 'ionicons/icons';
import { DOC_TYPE_CONFIG } from '@hau/features/documents/document-type.config';

@Component({
    selector: 'app-doc-type-badge',
    standalone: true,
    imports: [IonIcon],
    template: `<div class="doc-type-badge doc-type-badge--{{ color }}"><ion-icon [name]="icon"></ion-icon></div>`,
    styleUrls: ['./doc-type-badge.component.scss'],
})
export class DocTypeBadgeComponent {
    icon = 'document-outline';
    color = 'slate';

    @Input({ required: true }) set docType(value: string) {
        const cfg = DOC_TYPE_CONFIG[value];
        this.icon = cfg?.icon ?? 'document-outline';
        this.color = cfg?.color ?? 'slate';
    }

    constructor() {
        addIcons({ shieldCheckmarkOutline, clipboardOutline, trailSignOutline, carOutline, cashOutline, documentOutline });
    }
}
