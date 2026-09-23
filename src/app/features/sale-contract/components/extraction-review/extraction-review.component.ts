import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, informationCircleOutline, warningOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';

export type ReviewConfidence = 'high' | 'medium' | 'low' | 'none';

/**
 * What an extraction produced, shown as something to check rather than
 * something that happened.
 *
 * `warnings` is the whole point of this component. A CNP that fails its
 * checksum comes back with the value kept, `confidence: 'low'` and a warning
 * attached — a single misread digit makes a contract that is refused at the
 * counter while looking perfectly fine on screen, so the warnings are rendered
 * in full, never collapsed, and never silently dropped.
 */
@Component({
    selector: 'app-extraction-review',
    templateUrl: './extraction-review.component.html',
    styleUrls: ['./extraction-review.component.scss'],
    imports: [TranslocoPipe, IonIcon],
})
export class ExtractionReviewComponent {
    @Input({ required: true }) confidence!: ReviewConfidence;
    @Input() warnings: string[] = [];

    constructor() {
        addIcons({ checkmarkCircleOutline, informationCircleOutline, warningOutline });
    }

    get isLow(): boolean {
        return this.confidence === 'low' || this.confidence === 'none';
    }

    get tone(): 'info' | 'caution' | 'alert' {
        if (this.isLow) return 'alert';
        return this.confidence === 'medium' ? 'caution' : 'info';
    }

    get icon(): string {
        if (this.isLow) return 'warning-outline';
        return this.confidence === 'medium' ? 'information-circle-outline' : 'checkmark-circle-outline';
    }

    /** No note at high confidence — there is nothing specific to flag. */
    get confidenceKey(): string | null {
        if (this.isLow) return 'saleContract.extraction.confidenceLow';
        if (this.confidence === 'medium') return 'saleContract.extraction.confidenceMedium';
        return null;
    }
}
