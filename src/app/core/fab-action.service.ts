import { computed, Injectable, signal } from '@angular/core';

// Lets the routed page currently shown in the app shell decide what the
// shared mobile "+" FAB (see main.component.html) does when tapped — e.g.
// "add car" on Garaj, "add maintenance" on Întreținere, "new entry" on
// Jurnal. MainComponent hosts the button but has no reference to whichever
// child component the router outlet currently holds, so pages register their
// own action here instead.
//
// Pages must set/clear this via Ionic's ionViewWillEnter/ionViewWillLeave
// (not ngOnInit/ngOnDestroy) — IonicRouteStrategy caches routed components,
// so ngOnDestroy doesn't reliably fire when navigating away from a cached
// page. See header-actions.service.ts for the same pattern.
//
// A page that doesn't register an action (Rapoarte, Plan, Settings/Account,
// a read-only role, a feature switched off, ...) leaves `action()` null —
// MainComponent renders the FAB in a visibly disabled state for that (see
// `.hau-fab--disabled` in main.component.scss), rather than a silent no-op.
// There is no fallback action to add here: "nothing to add on this screen"
// is a real, permanent state for some pages, not a gap to fill in.
export interface FabAction {
  run: () => void;
  ariaLabelKey: string;
}

@Injectable({ providedIn: 'root' })
export class FabActionService {
  readonly action = signal<FabAction | null>(null);

  /** Whether a page has registered an action right now — drives the shell FAB's disabled state. */
  readonly hasAction = computed(() => this.action() !== null);

  set(action: FabAction): void {
    this.action.set(action);
  }

  clear(): void {
    this.action.set(null);
  }
}
