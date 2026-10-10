import { Injectable, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

interface OverlayEntry {
  id: number;
  /** Dismisses this overlay. Called by this service when Back closes it; the caller is
   * still responsible for calling the `unregister` fn `register()` returned once the
   * overlay has actually finished closing, however that happened. */
  close: () => void;
}

/**
 * Makes the device/browser Back button close the topmost open overlay instead of
 * navigating the page behind it. See `core/navigation/FEATURE.md`'s "Overlay back"
 * section for the full design, what counts as an overlay, and known limitations.
 *
 * One root service, auto-wired for every Ionic overlay (modal/action-sheet/popover/
 * alert, via their bubbling `ionXDidPresent`/`ionXWillDismiss` document events — see
 * `_wireIonicOverlays()`); our own custom overlays call `register()`/the returned
 * unregister fn themselves, once, usually via `OverlayBackDirective`
 * (`appOverlayBack`, same folder) on the overlay's root element.
 */
@Injectable({ providedIn: 'root' })
export class OverlayBackService {
  private _stack: OverlayEntry[] = [];
  private _nextId = 0;

  // Every history.pushState()/history.back() this service issues goes through one
  // serialized queue (_enqueue/_drain) rather than firing immediately — see their doc
  // comments for why: issuing a pushState while a back() we started is still in flight
  // (its popstate hasn't arrived yet) corrupts which raw history slot we end up on,
  // because the browser resolves a pending back() against whatever the current index
  // is *when it actually runs*, not the index when it was called. That race is real,
  // not theoretical: it reproduces every time a bespoke overlay opens a *different*
  // overlay in the same handler that also closes it (e.g. the car hub's "…" menu
  // opening the remove-from-garage sheet) — confirmed with Playwright, where it
  // silently over-consumed history entries until Back ran out of tab history
  // entirely. Serializing avoids ever having an in-flight back() and a pushState
  // outstanding at the same time.
  private _queue: Array<() => void> = [];
  private _busy = false;
  // Marks the popstate we expect back from a history.back() this service issued
  // itself, so _onPopState ignores it instead of treating it as a real Back press.
  private _consumingSelf = false;

  private readonly _router = inject(Router);
  // True while an app-initiated (non-popstate) navigation to a different URL is under
  // way — see _unregister()'s doc comment for the failure mode this guards against,
  // which the history.state check below doesn't cover on its own.
  private _navigating = false;

  constructor() {
    window.addEventListener('popstate', () => this._onPopState());
    this._wireIonicOverlays();
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.navigationTrigger !== 'popstate') this._navigating = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this._navigating = false;
      }
    });
  }

  /**
   * Call when a custom overlay opens: pushes a same-URL history entry and stacks `close`.
   * `close` is invoked by this service (never by the caller) to dismiss the overlay when
   * Back is pressed. Returns `unregister` — call it exactly once, whenever the overlay
   * finishes closing for ANY reason (Back, Cancel/Save, backdrop, swipe) — it consumes the
   * pushed entry if Back didn't already do so, and is a no-op if it did.
   */
  register(close: () => void): () => void {
    const id = this._nextId++;
    this._stack.push({ id, close });
    this._enqueue(() => {
      history.pushState({ hauOverlay: id }, '');
      // pushState has no async completion to wait for, so move on right away.
      this._next();
    });
    return () => this._unregister(id);
  }

  /**
   * Consumes the pushed entry — unless doing so would fight a real navigation, checked
   * two different ways because the two failure modes show up at two different times:
   *
   * 1. **The consumer calls this promptly**, in the same handler that also navigates
   *    elsewhere (e.g. the car hub's "…" menu closing itself while routing to Edit).
   *    `history.back()` triggers a real `popstate`, and Angular Router's own popstate
   *    listener feeds *every* popstate into the same navigation pipeline that the
   *    `navigateForward()` call right next to this one is still running through — which
   *    cancels that in-flight navigation outright (it's a `switchMap`-style pipeline: a
   *    new source value, even a same-URL one Router will itself end up skipping,
   *    unsubscribes whatever inner navigation was still in progress). Confirmed with
   *    Playwright: tapping "Edit" did nothing, because our own consume cancelled the
   *    edit navigation before it reached `pushState`. `_navigating` — set synchronously
   *    by `NavigationStart` for any non-popstate navigation — catches this; deferring
   *    one microtask first is enough, since the synchronous handler that triggered this
   *    unregister and any `navigateForward()`/`navigateByUrl()` call right after it both
   *    finish running, including Router's synchronous `NavigationStart` emission, before
   *    any microtask gets a turn.
   * 2. **The consumer calls this late.** Ionic can keep a page's component alive-but-
   *    inactive instead of destroying it on the spot when routing away from it, which
   *    can delay the `@if` removal behind `OverlayBackDirective` — and this `unregister()`
   *    call with it — well past the navigation that made it stale, by which point
   *    `_navigating` has already gone back to `false` and won't catch it. Confirmed with
   *    Playwright: the delay was long enough that the stale consume instead fired during
   *    a *later, unrelated* navigation (Save/Cancel on the very form the original
   *    navigation opened), silently reversing it — "Save says saved but stays in edit
   *    mode". `history.state?.hauOverlay === id` catches this regardless of how long the
   *    delay was: if it no longer matches, something else — a real navigation, or
   *    another overlay's own consume — has already moved past this entry.
   *
   * Either check failing drops the entry instead of consuming it, which is safe: nothing
   * that pushed over it needs it gone first, so it's left behind as one inert same-URL
   * entry one step behind wherever the app ended up — see `core/navigation/FEATURE.md`'s
   * "Overlay back" for the one case (several overlays going stale into the same
   * navigation at once) this doesn't fully clean up.
   */
  private _unregister(id: number): void {
    const idx = this._stack.findIndex(e => e.id === id);
    if (idx === -1) return; // Already popped by _onPopState — nothing left to consume.
    this._stack.splice(idx, 1);
    this._enqueue(() => {
      queueMicrotask(() => {
        const stillOnTop = (history.state as { hauOverlay?: number } | null)?.hauOverlay === id;
        if (this._navigating || !stillOnTop) {
          this._next();
          return;
        }
        this._consumingSelf = true;
        history.back();
        // Stay "busy" until the resulting popstate arrives — see _onPopState, which
        // calls _next() for us. A pushState queued behind this must not run until then.
      });
    });
  }

  private _enqueue(op: () => void): void {
    this._queue.push(op);
    this._drain();
  }

  private _drain(): void {
    if (this._busy || this._queue.length === 0) return;
    this._busy = true;
    const op = this._queue.shift()!;
    op();
  }

  private _next(): void {
    this._busy = false;
    this._drain();
  }

  private _onPopState(): void {
    if (this._consumingSelf) {
      this._consumingSelf = false;
      this._next();
      return;
    }
    // A real Back press: close only the topmost overlay, nothing else.
    const top = this._stack.pop();
    top?.close();
  }

  /**
   * Global hook for every Ionic overlay — no per-page/per-component code needed. These
   * events bubble (Ionic emits them with `bubbles: true, composed: true`), so one
   * document-level listener per pair covers every modal/action-sheet/popover/alert the
   * app ever presents, including ones from third-party code we don't own.
   */
  private _wireIonicOverlays(): void {
    const unregisterByEl = new WeakMap<Element, () => void>();
    const pairs: Record<string, string> = {
      ionModalDidPresent: 'ionModalWillDismiss',
      ionActionSheetDidPresent: 'ionActionSheetWillDismiss',
      ionPopoverDidPresent: 'ionPopoverWillDismiss',
      ionAlertDidPresent: 'ionAlertWillDismiss',
    };
    for (const [presentEvt, dismissEvt] of Object.entries(pairs)) {
      document.addEventListener(presentEvt, event => {
        const el = event.target as Element & { dismiss: () => Promise<boolean> };
        if (unregisterByEl.has(el)) return;
        unregisterByEl.set(el, this.register(() => void el.dismiss()));
      });
      document.addEventListener(dismissEvt, event => {
        const el = event.target as Element;
        const unregister = unregisterByEl.get(el);
        if (!unregister) return;
        unregisterByEl.delete(el);
        unregister();
      });
    }
  }
}
