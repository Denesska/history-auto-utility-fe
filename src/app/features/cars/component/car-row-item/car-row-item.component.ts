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
import { ReminderMuteBadgeComponent } from '@hau/shared/component/reminder-mute-badge/reminder-mute-badge.component';
import { IonIcon, IonItem } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { SessionContextService } from '@hau/core/session/session-context.service';
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
  activeVignettes,
  EXPIRED_PILL_GRACE_DAYS,
  pillExpiryState,
  getDocExpiry,
} from '@hau/shared/utils/document-status.util';
import { HOME_VIGNETTE_COUNTRY } from '@hau/shared/config/vignette-country.config';
import { FavoriteStarComponent } from '@hau/shared/component/favorite-star/favorite-star.component';
import { CountryTagComponent } from '@hau/shared/component/country-flag/country-tag.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-car-row-item',
  templateUrl: 'car-row-item.component.html',
  styleUrls: ['./car-row-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ReminderMuteBadgeComponent,
    SwipeActionsComponent,
    IonIcon,
    IonItem,
    ImageUrlPipe,
    TranslocoPipe,
    CountryTagComponent,
    VehicleSilhouetteComponent,
    FavoriteStarComponent,
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
  protected readonly activeVignettes = activeVignettes;
  protected readonly pillExpiryState = pillExpiryState;
  protected readonly expiredPillGraceDays = EXPIRED_PILL_GRACE_DAYS;
  protected readonly homeVignetteCountry = HOME_VIGNETTE_COUNTRY;
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
