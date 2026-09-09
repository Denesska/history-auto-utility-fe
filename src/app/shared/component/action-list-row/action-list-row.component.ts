import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon, IonItem } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { constructOutline, createOutline, trashOutline } from 'ionicons/icons';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { SwipeAction, SwipeActionsComponent } from '../swipe-actions/swipe-actions.component';

export type ListRowAction = SwipeAction;

/** Compact record row: the garage swipe container, with optional thumbnail and metadata. */
@Component({
  selector: 'app-action-list-row',
  imports: [IonIcon, IonItem, TranslocoPipe, ImageUrlPipe, SwipeActionsComponent],
  templateUrl: './action-list-row.component.html',
  styleUrl: './action-list-row.component.scss',
})
export class ActionListRowComponent {
  @Input() imageUrl: string | null | undefined;
  @Input() icon = 'construct-outline';
  @Input() showRenew = false;
  @Input() renewLabel = '';
  @Input() showDownload = false;
  @Input() downloadLabel = '';
  @Output() action = new EventEmitter<ListRowAction>();
  failedImage: string | null | undefined;

  constructor() { addIcons({ constructOutline, createOutline, trashOutline }); }

  select(action: ListRowAction): void {
    this.action.emit(action);
  }
}
