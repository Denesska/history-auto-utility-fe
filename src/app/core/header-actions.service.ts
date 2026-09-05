import { Injectable, TemplateRef, signal } from '@angular/core';

// Lets a routed page project its own title and action buttons (edit, delete,
// add, share, ...) into the shared app-shell header (see main.component.html),
// so every page's title renders in the same spot and its action buttons sit
// on the same top bar as the back button, instead of each page hand-rolling
// its own title/action markup inline in its content.
//
// Pages must set/clear this via Ionic's ionViewWillEnter/ionViewWillLeave
// (not ngOnInit/ngOnDestroy) — IonicRouteStrategy caches routed components,
// so ngOnDestroy doesn't reliably fire when navigating away from a cached page.
// A page whose title depends on async data (e.g. a record's description) must
// also re-push it whenever that data changes while the view is active — see
// maintenance-record-detail.component.ts for the pattern.
//
// The one deliberate exception is the car hub root (`isCarHubRoot` in
// main.component.ts) — its hero photo overlay header never shows a title, so
// no page for that route should call setTitle().
@Injectable({ providedIn: 'root' })
export class HeaderActionsService {
  readonly template = signal<TemplateRef<unknown> | null>(null);
  readonly title = signal<string | null>(null);

  set(tpl: TemplateRef<unknown> | null): void {
    this.template.set(tpl);
  }

  clear(): void {
    this.template.set(null);
  }

  setTitle(title: string | null): void {
    this.title.set(title);
  }

  clearTitle(): void {
    this.title.set(null);
  }
}
