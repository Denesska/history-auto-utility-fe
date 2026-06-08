import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, trashOutline, closeOutline, chevronForwardOutline, refreshOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-remove-car-panel',
  templateUrl: 'remove-car-panel.component.html',
  styleUrls: ['./remove-car-panel.component.scss'],
  imports: [IonIcon, TranslocoPipe],
})
export class RemoveCarPanelComponent {
  @Input() carName = '';
  @Input() isSold = false;
  @Output() closed = new EventEmitter<void>();
  @Output() markSold = new EventEmitter<void>();
  @Output() restore = new EventEmitter<void>();
  @Output() deletePermanently = new EventEmitter<void>();

  constructor() {
    addIcons({ checkmarkCircleOutline, trashOutline, closeOutline, chevronForwardOutline, refreshOutline });
  }
}
