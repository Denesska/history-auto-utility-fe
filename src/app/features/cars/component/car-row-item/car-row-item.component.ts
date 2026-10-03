import { SwipeActionsComponent } from '@hau/shared/component/swipe-actions/swipe-actions.component';
import {
  Component,
  inject,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { IonIcon, IonItem } from '@ionic/angular';
import { addIcons } from 'ionicons';
// eslint-disable-next-line no-restricted-imports -- known cross-feature coupling (session context), see ACCOUNT-CONTEXT.md
import { SessionContextService } from '@hau/features/auth/session-context.service';
import { VehicleSilhouetteComponent } from '@hau/shared/component/vehicle-silhouette/vehicle-silhouette.component';
import {
  buildOutline,
  carOutline,
  createOutline,
  eyeOutline,
  personOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { getCarSubtitle } from '@hau/features/cars/cars.utils';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import {
  activeForeignVignettes,
  getDocExpiry,
} from '@hau/shared/utils/document-status.util';
import { CountryTagComponent } from '@hau/shared/component/country-flag/country-tag.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-car-row-item',
  templateUrl: 'car-row-item.component.html',
  styleUrls: ['./car-row-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    SwipeActionsComponent,
    IonIcon,
    IonItem,
    ImageUrlPipe,
    TranslocoPipe,
    CountryTagComponent,
    VehicleSilhouetteComponent,
  ],
})
export class CarRowItemComponent {
  @Input({ required: true }) car!: CarDto;
  @Input() documents: DocumentDto[] = [];
  @Input() badge?: string;

  @Output() viewClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<void>();

  @ViewChild('sliding') sliding!: SwipeActionsComponent;

  protected readonly daysUntil = daysUntil;
  protected readonly getDocExpiry = getDocExpiry;
  protected readonly activeForeignVignettes = activeForeignVignettes;
  protected readonly getCarSubtitle = getCarSubtitle;

  /** Business shows a vehicle silhouette instead of the generic car icon when there's no photo. */
  protected readonly sessionContext = inject(SessionContextService);

  constructor() {
    addIcons({
      carOutline,
      shieldCheckmarkOutline,
      buildOutline,
      eyeOutline,
      createOutline,
      personOutline,
    });
  }

  get defaultPhoto(): string {
    const def =
      this.car.photos?.find(p => p.is_default) ?? this.car.photos?.[0];
    return def?.url ?? '';
  }

  onView(): void {
    this.sliding?.close();
    this.viewClick.emit();
  }

  onEdit(): void {
    this.sliding?.close();
    this.editClick.emit();
  }
}
