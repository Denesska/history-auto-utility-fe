import { Directive, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { OverlayBackService } from './overlay-back.service';

/**
 * Put on the root element of any bespoke overlay — a bottom sheet, confirm dialog, menu,
 * or anything else shown via `@if`/a boolean flag rather than Ionic's ModalController/
 * ActionSheetController/etc (which `OverlayBackService` already wires globally) and not
 * already `<app-fullscreen-panel>` or `<app-dropdown>` (which carry this internally). The
 * device/browser Back button then closes just that overlay instead of also navigating the
 * page underneath it — see `core/navigation/FEATURE.md`'s "Overlay back" section.
 *
 * Registers on init, unregisters on destroy — which an `@if` block already does for free,
 * so wiring an existing overlay up is a one-line template change:
 *
 * ```html
 * @if (open) {
 *   <div class="my-sheet" appOverlayBack (overlayBackClose)="close()"> ... </div>
 * }
 * ```
 *
 * `close()` here should be whatever the overlay's own close/cancel method already is — this
 * directive never closes anything itself, it only asks (same contract as `register()`).
 */
@Directive({
  selector: '[appOverlayBack]',
  standalone: true,
})
export class OverlayBackDirective implements OnInit, OnDestroy {
  /** Back was pressed — close the overlay the same way its own close/cancel action would. */
  @Output() readonly overlayBackClose = new EventEmitter<void>();

  private readonly _overlayBack = inject(OverlayBackService);
  private _unregister?: () => void;

  ngOnInit(): void {
    this._unregister = this._overlayBack.register(() => this.overlayBackClose.emit());
  }

  ngOnDestroy(): void {
    this._unregister?.();
    this._unregister = undefined;
  }
}
