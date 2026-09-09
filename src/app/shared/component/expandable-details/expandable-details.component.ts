import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { chevronDownOutline } from 'ionicons/icons';

@Component({
  selector: 'app-expandable-details',
  imports: [IonIcon, TranslocoPipe],
  template: `
    <button type="button" [attr.aria-expanded]="expanded" (click)="$event.stopPropagation(); expanded = !expanded">
      <span>{{ 'car.fields.details' | transloco }}</span>
      <ion-icon name="chevron-down-outline" [class.open]="expanded"></ion-icon>
    </button>
    @if (expanded) { <div class="details-body"><ng-content></ng-content></div> }
  `,
  styles: [`
    :host { display: block; border-top: 1px solid var(--hau-border); padding: 10px 14px; }
    button { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 8px;
      background: none; border: none; padding: 0; min-height: 24px; font-size: .78rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: .04em; color: var(--hau-text-muted); cursor: pointer; }
    ion-icon { font-size: 1rem; transition: transform var(--hau-transition-fast); }
    ion-icon.open { transform: rotate(180deg); }
    .details-body { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
  `],
})
export class ExpandableDetailsComponent {
  expanded = false;
  constructor() { addIcons({ chevronDownOutline }); }
}
