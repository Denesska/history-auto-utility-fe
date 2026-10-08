import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';

@Component({
  selector: 'app-fullscreen-panel',
  templateUrl: 'fullscreen-panel.component.html',
  styleUrls: ['./fullscreen-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [OverlayBackDirective],
})
export class FullscreenPanelComponent {
  @Input({ required: true }) title!: string;

  /**
   * Device/browser Back closes this panel — emitted instead of closing it directly
   * because this component doesn't own the close logic, the consumer does (its own
   * `close()`/cancel method, already bound to the fspStart button). Bind this to that
   * same method, e.g. `(closeRequested)="close()"`. Wired via `appOverlayBack` on the
   * root element below — see `core/navigation/FEATURE.md`'s "Overlay back" section.
   */
  @Output() readonly closeRequested = new EventEmitter<void>();
}
