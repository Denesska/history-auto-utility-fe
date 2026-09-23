import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shieldCheckmarkOutline } from 'ionicons/icons';
import { TranslocoPipe } from '@ngneat/transloco';

/**
 * The gate in front of photographing someone else's identity document.
 *
 * The document usually belongs to the other party to the sale, who is not a
 * user of this app: the camera/file picker stays out of reach until the box is
 * ticked, and the backend refuses the extraction call without the version of
 * this wording being sent along with the photo.
 *
 * Declining is a normal outcome, not an error — it simply means the details get
 * typed in instead, which is why the decline button is a peer of the accept
 * button rather than a dismissal.
 */
@Component({
    selector: 'app-identity-consent',
    templateUrl: './identity-consent.component.html',
    styleUrls: ['./identity-consent.component.scss'],
    imports: [FormsModule, TranslocoPipe, IonIcon],
})
export class IdentityConsentComponent {
    @Output() readonly accepted = new EventEmitter<void>();
    @Output() readonly declined = new EventEmitter<void>();

    checked = false;

    constructor() {
        addIcons({ shieldCheckmarkOutline });
    }

    accept(): void {
        if (!this.checked) return;
        this.accepted.emit();
    }
}
