import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonIcon, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { eyeOutline, createOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-swipe-actions',
  imports: [IonIcon, IonItemSliding, IonItemOptions, IonItemOption, TranslocoPipe],
  template: `
    <ion-item-sliding #sliding (keydown.arrowleft)="open($event)" (keydown.escape)="close()">
      <ng-content></ng-content>
      <ion-item-options side="end">
        @if (showView) {
          <ion-item-option color="primary" (click)="act('view', $event)">
            <ion-icon slot="top" name="eye-outline"></ion-icon>{{ 'common.view' | transloco }}
          </ion-item-option>
        }
        <ion-item-option class="edit-opt" (click)="act('edit', $event)">
          <ion-icon slot="top" name="create-outline"></ion-icon>{{ 'common.edit' | transloco }}
        </ion-item-option>
        @if (showDelete) {
          <ion-item-option color="danger" (click)="act('delete', $event)">
            <ion-icon slot="top" name="trash-outline"></ion-icon>{{ 'common.delete' | transloco }}
          </ion-item-option>
        }
      </ion-item-options>
    </ion-item-sliding>`,
  styles: [`
    :host { display: block; min-width: 0; }
    ion-item-sliding { border-radius: var(--hau-radius-xl); overflow: hidden; margin-bottom: 4px;
      border: 1px solid var(--hau-border); transition: border-color var(--hau-transition-fast); }
    ion-item-sliding:hover { border-color: var(--hau-border-hover); }
    ion-item-option { font-size: .82rem; font-weight: 600; min-width: 70px; }
    .edit-opt { --background: var(--hau-surface-elevated, #1c2033); --color: var(--hau-text); }
  `],
})
export class SwipeActionsComponent {
  @Input() showView = true;
  @Input() showDelete = false;
  @Output() action = new EventEmitter<'view' | 'edit' | 'delete'>();
  @ViewChild('sliding') sliding?: IonItemSliding;
  close(): void { void this.sliding?.close(); }
  open(event: Event): void { event.preventDefault(); void this.sliding?.open('end'); }
  act(action: 'view' | 'edit' | 'delete', event: Event): void {
    event.stopPropagation(); this.close(); this.action.emit(action);
  }
  constructor() { addIcons({ eyeOutline, createOutline, trashOutline }); }
}
