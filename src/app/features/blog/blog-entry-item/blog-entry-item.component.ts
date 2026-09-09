import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon, IonItem } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { BlogEntryDto } from '@hau/autogenapi/models';
import { ViewMode } from '@hau/core/view-mode.service';
import { SwipeAction, SwipeActionsComponent } from '@hau/shared/component/swipe-actions/swipe-actions.component';
import { ExpandableDetailsComponent } from '@hau/shared/component/expandable-details/expandable-details.component';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { VEHICLE_ENTRY_CATEGORY_LABELS } from '../models/blog.model';
import { addIcons } from 'ionicons';
import { bookOutline, createOutline, trashOutline, bookmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-blog-entry-item',
  imports: [DatePipe, DecimalPipe, IonIcon, IonItem, TranslocoPipe, ImageUrlPipe, SwipeActionsComponent, ExpandableDetailsComponent],
  templateUrl: './blog-entry-item.component.html',
  styleUrl: './blog-entry-item.component.scss',
})
export class BlogEntryItemComponent {
  @Input({ required: true }) entry!: BlogEntryDto;
  @Input() mode: ViewMode = 'cards';
  @Output() action = new EventEmitter<'view' | 'edit' | 'delete' | 'pin'>();
  readonly categoryLabels = VEHICLE_ENTRY_CATEGORY_LABELS;
  get thumb(): string | null { return this.entry.cover_image_url ?? this.entry.images[0]?.url ?? null; }
  onSwipeAction(action: SwipeAction): void {
    if (action !== 'renew' && action !== 'download') this.action.emit(action);
  }
  constructor() { addIcons({ bookOutline, createOutline, trashOutline, bookmarkOutline }); }
}
