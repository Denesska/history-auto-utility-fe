import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { DocumentDto } from '@hau/autogenapi/models';
import { docTypeConfig } from '@hau/shared/config/document-type.config';
import { calcDocStatus } from '@hau/shared/utils/document-status.util';
import { addIcons } from 'ionicons';
import { checkmarkCircle } from 'ionicons/icons';
import { ActionListRowComponent, ListRowAction } from '../action-list-row/action-list-row.component';
import { DocTypeBadgeComponent } from '../doc-type-badge/doc-type-badge.component';

@Component({
  selector: 'app-document-list-row',
  imports: [ActionListRowComponent, DocTypeBadgeComponent, DatePipe, TranslocoPipe, IonIcon],
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

  get typeLabel(): string { return docTypeConfig(this.document.document_type).label; }
  get status() { return calcDocStatus(this.document.expiry_date); }

  onAction(action: ListRowAction): void {
    if (action === 'download') this.download.emit();
    else this.action.emit(action);
  }

  constructor() { addIcons({ checkmarkCircle }); }
}
