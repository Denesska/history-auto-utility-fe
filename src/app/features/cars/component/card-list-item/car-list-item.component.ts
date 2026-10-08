import { ExpandableDetailsComponent } from '@hau/shared/component/expandable-details/expandable-details.component';
import {
  Component,
  inject,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { VehicleSilhouetteComponent } from '@hau/shared/component/vehicle-silhouette/vehicle-silhouette.component';
import {
  buildOutline,
  calendarOutline,
  carOutline,
  checkmarkOutline,
  chevronDownOutline,
  copyOutline,
  keyOutline,
  shieldCheckmarkOutline,
  speedometerOutline,
  waterOutline,
} from 'ionicons/icons';
import { TranslocoModule } from '@jsverse/transloco';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { getCarSubtitle } from '@hau/features/cars/cars.utils';
import { daysUntil } from '@hau/shared/utils/date-math.util';
import { formatDate, formatMileage, formatMileageDriven } from '@hau/shared/utils/formatting.util';
import {
  activeVignettes,
  getDocExpiry,
} from '@hau/shared/utils/document-status.util';
import { HOME_VIGNETTE_COUNTRY } from '@hau/shared/config/vignette-country.config';
import { CountryTagComponent } from '@hau/shared/component/country-flag/country-tag.component';

@Component({
  selector: 'app-car-list-item',
  templateUrl: 'car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ExpandableDetailsComponent,
    IonIcon,
    CountryTagComponent,
    TranslocoModule,
    ImageUrlPipe,
    VehicleSilhouetteComponent,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CarsListItemComponent {
  @Input({ required: true }) car!: CarDto;
  @Input() documents: DocumentDto[] = [];

  @Output() viewClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<void>();

  protected readonly daysUntil = daysUntil;
  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly formatMileageDriven = formatMileageDriven;
  protected readonly getDocExpiry = getDocExpiry;
  protected readonly activeVignettes = activeVignettes;
  protected readonly homeVignetteCountry = HOME_VIGNETTE_COUNTRY;
  protected readonly getCarSubtitle = getCarSubtitle;

  /** Business shows a vehicle silhouette instead of the generic car icon when there's no photo. */
  protected readonly sessionContext = inject(SessionContextService);

  metaExpanded = false;
  vinCopied = false;

  constructor() {
    addIcons({
      shieldCheckmarkOutline,
      buildOutline,
      carOutline,
      waterOutline,
      calendarOutline,
      speedometerOutline,
      chevronDownOutline,
      keyOutline,
      copyOutline,
      checkmarkOutline,
    });
  }

  get defaultPhoto(): string {
    const def =
      this.car.photos?.find(p => p.is_default) ?? this.car.photos?.[0];
    return def?.url ?? '';
  }

  onView(event: Event): void {
    event.stopPropagation();
    this.viewClick.emit();
  }

  onEdit(event: Event): void {
    event.stopPropagation();
    this.editClick.emit();
  }

  toggleMeta(event: Event): void {
    event.stopPropagation();
    this.metaExpanded = !this.metaExpanded;
  }

  copyVin(event: Event): void {
    event.stopPropagation();
    if (!this.car.vin) {
      return;
    }
    navigator.clipboard.writeText(this.car.vin).then(() => {
      this.vinCopied = true;
      setTimeout(() => (this.vinCopied = false), 1500);
    });
  }
}
