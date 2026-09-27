import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fullscreen-panel',
  templateUrl: 'fullscreen-panel.component.html',
  styleUrls: ['./fullscreen-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class FullscreenPanelComponent {
  @Input({ required: true }) title!: string;
}
