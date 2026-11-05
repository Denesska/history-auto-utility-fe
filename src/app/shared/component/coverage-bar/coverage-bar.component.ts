import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { linkOutline } from 'ionicons/icons';
import { LocalDatePipe } from '@hau/shared/pipes/local-date.pipe';

export interface CoverageBarSegment {
  startPct: number;
  endPct: number;
  label?: string;
}

/**
 * Combined (temporary) expiry bar: one segment per document of a continuous coverage chain,
 * a chip with the document count and a caption naming the handoff. Elapsed fill follows the
 * normal `.hau-progress` colors.
 */
@Component({
  selector: 'app-coverage-bar',
  imports: [IonIcon, TranslocoPipe, LocalDatePipe],
  templateUrl: './coverage-bar.component.html',
  styleUrl: './coverage-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class CoverageBarComponent {
  @Input({ required: true }) segments: CoverageBarSegment[] = [];
  /** Elapsed share of the whole chain (0-100). */
  @Input() progressPercent: number | null = 0;
  @Input() state: 'ok' | 'warning' | 'overdue' = 'ok';
  @Input() docCount = 2;
  /** ISO date where the first document hands over to the next. */
  @Input() handoffDate: string | null = null;
  /** Hide the "temporary view" caption (compact use). */
  @Input() compact = false;

  constructor() {
    addIcons({ linkOutline });
  }

  /** Day after the handoff = start of the next document. */
  get nextStart(): Date | null {
    if (!this.handoffDate) return null;
    const d = new Date(this.handoffDate.slice(0, 10) + 'T00:00:00');
    d.setDate(d.getDate() + 1);
    return d;
  }

  /** How much of one segment is already elapsed (0-100 of the segment's own width). */
  fillPct(seg: CoverageBarSegment): number {
    const p = this.progressPercent ?? 0;
    const w = seg.endPct - seg.startPct;
    if (w <= 0) return 0;
    return Math.min(100, Math.max(0, ((p - seg.startPct) / w) * 100));
  }
}
