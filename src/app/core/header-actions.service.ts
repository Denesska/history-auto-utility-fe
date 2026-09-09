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
// main.component.ts): its hero photo overlay header only skips the title bar
// while no title is set (see `isCarHubOverlay`) — a page for that route can
// still call setTitle() (e.g. cars-details.component.ts does for the
// SOLD/archived view), which switches it to a normal title bar like every
// other page instead of the photo overlay.
//
// A screen whose form lives in a *non-routed* child component (cars-form inside
// cars-create/cars-edit, car-notes-panel inside car-notes-page) has that child
// expose its TemplateRefs and register them in its own ngAfterViewInit, with
// the routed parent re-registering on each ionViewWillEnter (for cached second
// visits) and clearing on leave.
//
// ── Which actions go where ────────────────────────────────────────────────
// One pattern for every screen that shows or edits a single record (see the
// "page actions live in the top bar" rule in the frontend CLAUDE.md):
//
//   view mode    start: back (the shell's own)   end: edit, delete
//   edit/create  start: close (setStart)         end: save
//
// Only the actions that actually apply are rendered — a form never shows back
// or delete, a read-only view never shows save. A page in edit/create mode
// projects its own close button into the *start* slot via setStart(), which
// replaces the shell's back button (going "back" from a half-filled form is
// the same action as cancelling it, so showing both would be two buttons for
// one intent). Anything that isn't one of those four (save-as-draft, save &
// add another, wizard next/back, download, ...) is a "special" action and
// stays inline in the page body.
@Injectable({ providedIn: 'root' })
export class HeaderActionsService {
  readonly template = signal<TemplateRef<unknown> | null>(null);
  readonly startTemplate = signal<TemplateRef<unknown> | null>(null);
  readonly title = signal<string | null>(null);

  set(tpl: TemplateRef<unknown> | null): void {
    this.template.set(tpl);
  }

  // Start-slot actions (close/cancel on a form). While this is set the shell
  // renders it instead of the back button — see main.component.html.
  setStart(tpl: TemplateRef<unknown> | null): void {
    this.startTemplate.set(tpl);
  }

  clear(): void {
    this.template.set(null);
    this.startTemplate.set(null);
  }

  setTitle(title: string | null): void {
    this.title.set(title);
  }

  clearTitle(): void {
    this.title.set(null);
  }
}
