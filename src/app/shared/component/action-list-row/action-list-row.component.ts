import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonIcon, IonItem } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { chevronForward, constructOutline, createOutline, trashOutline } from 'ionicons/icons';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { SwipeActionsComponent } from '../swipe-actions/swipe-actions.component';

export type ListRowAction = 'view' | 'edit' | 'delete';

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
  @Output() action = new EventEmitter<ListRowAction>();
  @ViewChild(SwipeActionsComponent) swipe?: SwipeActionsComponent;
  failedImage: string | null | undefined;

  constructor() { addIcons({ chevronForward, constructOutline, createOutline, trashOutline }); }

  select(action: ListRowAction): void {
    this.swipe?.close();
    this.action.emit(action);
  }
}
