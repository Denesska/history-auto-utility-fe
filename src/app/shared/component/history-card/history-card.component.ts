import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward, ellipsisHorizontal, constructOutline } from 'ionicons/icons';

export interface HistoryCardItem<T = unknown> {
  id: number;
  icon: string;
  iconBg: string;
  iconFg: string;
  chipLabel: string;
  chipBg: string;
  chipFg: string;
  date: string;
  primaryDetail: string;
  cost: number | null;
  notes: string;
  raw: T;
}

/**
 * Generic "history card" body: two summary stats, a last-5 record list
 * (mobile cards + desktop table) and a "more" link. Used identically by the
 * Service history and Documents cards on the car details page — only the
 * items/labels fed in differ.
 */
@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [DecimalPipe, IonIcon],
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {
  @Input() stat1Icon = 'documents-outline';
  @Input() stat1IconBg = '';
  @Input() stat1IconFg = '';
  @Input() stat1Label = '';
  @Input() stat1Value: string | number = '';

  @Input() stat2Icon = 'color-filter-outline';
  @Input() stat2IconBg = '';
  @Input() stat2IconFg = '';
  @Input() stat2Label = '';
  @Input() stat2Value: string | number = '';

  @Input() last5Label = '';
  @Input() categoryColumnLabel = '';
  @Input() dateColumnLabel = '';
  @Input() detailColumnLabel = '';
  @Input() costColumnLabel = '';
  @Input() extraColumnLabel = '';
  @Input() moreLabel = '';
  @Input() emptyLabel = '';

  @Input() items: HistoryCardItem[] = [];

  @Output() itemView = new EventEmitter<HistoryCardItem>();
  @Output() itemMenu = new EventEmitter<HistoryCardItem>();
  @Output() more = new EventEmitter<void>();

  pressingId: number | null = null;
  private _pressStartX = 0;
  private _pressStartY = 0;

  constructor() {
    addIcons({ chevronForward, ellipsisHorizontal, constructOutline });
  }

  onPressStart(item: HistoryCardItem, event: PointerEvent): void {
    this._pressStartX = event.clientX;
    this._pressStartY = event.clientY;
    this.pressingId = item.id;
  }

  onPressMove(event: PointerEvent): void {
    if (Math.abs(event.clientX - this._pressStartX) > 8 ||
        Math.abs(event.clientY - this._pressStartY) > 8) {
      this.pressingId = null;
    }
  }

  onPressEnd(item: HistoryCardItem): void {
    if (this.pressingId === item.id) {
      this.itemView.emit(item);
    }
    this.pressingId = null;
  }
}
