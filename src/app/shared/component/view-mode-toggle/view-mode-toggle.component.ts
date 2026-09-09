import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { gridOutline, listOutline } from 'ionicons/icons';
import { ViewMode } from '@hau/core/view-mode.service';

@Component({
  selector: 'app-view-mode-toggle',
  imports: [IonIcon, TranslocoPipe],
  template: `
    <div class="view-toggle">
      <button type="button" class="hau-header-icon-btn toggle-btn" [class.active]="mode === 'cards'"
        [attr.aria-pressed]="mode === 'cards'" [attr.aria-label]="'cars.list.cardsView' | transloco" (click)="modeChange.emit('cards')">
        <ion-icon name="grid-outline"></ion-icon>
      </button>
      <button type="button" class="hau-header-icon-btn toggle-btn" [class.active]="mode === 'list'"
        [attr.aria-pressed]="mode === 'list'" [attr.aria-label]="'cars.list.listView' | transloco" (click)="modeChange.emit('list')">
        <ion-icon name="list-outline"></ion-icon>
      </button>
    </div>`,
  styles: [`:host { display: inline-flex; } .view-toggle { display: inline-flex; gap: 8px; }
    .toggle-btn.active { background: var(--hau-primary); border-color: var(--hau-primary); color: #fff; }`],
})
export class ViewModeToggleComponent {
  @Input() mode: ViewMode = 'cards';
  @Output() modeChange = new EventEmitter<ViewMode>();
  constructor() { addIcons({ gridOutline, listOutline }); }
}
