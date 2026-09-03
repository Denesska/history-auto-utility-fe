import { Injectable, TemplateRef, signal } from '@angular/core';

// Lets a routed page project its own action buttons (edit, delete, share, ...)
// into the shared app-shell header's end slot (see main.component.html), so
// they render on the same floating row as the back button instead of each
// page hand-rolling its own action row below the title.
//
// Pages must set/clear this via Ionic's ionViewWillEnter/ionViewWillLeave
// (not ngOnInit/ngOnDestroy) — IonicRouteStrategy caches routed components,
// so ngOnDestroy doesn't reliably fire when navigating away from a cached page.
@Injectable({ providedIn: 'root' })
export class HeaderActionsService {
  readonly template = signal<TemplateRef<unknown> | null>(null);

  set(tpl: TemplateRef<unknown> | null): void {
    this.template.set(tpl);
  }

  clear(): void {
    this.template.set(null);
  }
}
