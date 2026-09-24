import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

/**
 * The step indicator for the contract wizard: "Step 2 of 5", the step's name,
 * and a dotted track that doubles as navigation back to any step already
 * reached. Same chrome as the Adaugă vehicul wizard (`cars-form`), kept at
 * every width here because this flow is a wizard on desktop too.
 *
 * Only the *actions* (back/next) sit at the bottom of the page — this is a
 * progress indicator, not a page action, so it stays at the top of the content.
 */
@Component({
    selector: 'app-wizard-steps',
    templateUrl: './wizard-steps.component.html',
    styleUrls: ['./wizard-steps.component.scss'],
    imports: [TranslocoPipe],
})
export class WizardStepsComponent {
    /** Translation keys, in order. */
    @Input({ required: true }) steps: string[] = [];
    @Input({ required: true }) current = 0;
    /** The furthest step reached — anything beyond it is not yet navigable. */
    @Input() maxReached = 0;

    @Output() readonly stepSelected = new EventEmitter<number>();

    select(index: number): void {
        if (index > this.maxReached || index === this.current) return;
        this.stepSelected.emit(index);
    }
}
