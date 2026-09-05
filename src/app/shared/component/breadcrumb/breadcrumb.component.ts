import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

export interface BreadcrumbItem {
  label: string;
  // Omit on the last item — it renders as the current, non-clickable crumb.
  action?: () => void;
}

// Shared breadcrumb trail for secondary/nested pages (forms, detail views one
// level below a list) — main list pages and preview-style detail pages don't
// use this, they rely on the back button alone.
@Component({
  selector: 'app-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [IonIcon],
})
export class BreadcrumbComponent {
  @Input({ required: true }) items!: BreadcrumbItem[];

  constructor() {
    addIcons({ chevronForwardOutline });
  }
}
