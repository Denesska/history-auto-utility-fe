import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { DocumentDto } from '@hau/autogenapi/models';
import { docLabelKey } from '@hau/shared/config/document-type.config';
import { isForeignVignette, vignetteCountryOf } from '@hau/shared/config/vignette-country.config';
import { calcDocStatus, DocStatus } from '@hau/shared/utils/document-status.util';
import { addIcons } from 'ionicons';
import { checkmarkCircle } from 'ionicons/icons';
import { ActionListRowComponent, ListRowAction } from '../action-list-row/action-list-row.component';
import { DocTypeBadgeComponent } from '../doc-type-badge/doc-type-badge.component';
import { CountryTagComponent } from '../country-flag/country-tag.component';

@Component({
  selector: 'app-document-list-row',
  imports: [ActionListRowComponent, DocTypeBadgeComponent, CountryTagComponent, DatePipe, TranslocoPipe, IonIcon],
  templateUrl: './document-list-row.component.html',
  styleUrl: './document-list-row.component.scss',
})
export class DocumentListRowComponent {
  @Input({ required: true }) document!: DocumentDto;
  @Input() carLabel = '';
  @Input() licensePlate?: string | null;
  @Input() progressPercent: number | null = null;
  @Input() ctaLabel = '';
  @Input() ctaStyle: 'solid' | 'outline' | 'none' = 'none';
  @Output() action = new EventEmitter<ListRowAction>();
  /** Fires from the document's download swipe action. */
  @Output() download = new EventEmitter<void>();

  get typeLabel(): string { return docLabelKey(this.document); }
  get country(): string | null { return vignetteCountryOf(this.document); }
  get isForeign(): boolean { return isForeignVignette(this.document); }

  /**
   * A travel vignette running out is the plan, not a problem: it never shows as
   * "expiring", and once over it reads "ended" in a neutral tone instead of a red "expired".
   */
  get status(): { status: DocStatus | 'ended'; daysLeft: number | null } {
    const base = calcDocStatus(this.document.expiry_date, this.document.issue_date);
    if (!this.isForeign) return base;
    if (base.status === 'expired') return { status: 'ended', daysLeft: base.daysLeft };
    if (base.status === 'expiring') return { status: 'valid', daysLeft: base.daysLeft };
    return base;
  }

  onAction(action: ListRowAction): void {
    if (action === 'download') this.download.emit();
    else this.action.emit(action);
  }

  constructor() { addIcons({ checkmarkCircle }); }
}
