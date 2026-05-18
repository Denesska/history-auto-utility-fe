import { Component, Input } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  buildOutline,
  calendarOutline,
  carOutline,
  shieldCheckmarkOutline,
  speedometerOutline,
  waterOutline,
} from 'ionicons/icons';
import { TranslocoModule } from '@ngneat/transloco';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { daysUntil, formatDate, formatMileage } from '@hau/features/cars/cars.utils';

@Component({
    selector: 'app-car-list-item',
    templateUrl: 'car-list-item.component.html',
    styleUrls: ['./car-list-item.component.scss'],
    imports: [
        IonIcon,
        TranslocoModule,
        ImageUrlPipe,
        MatCardModule,
        MatButtonModule,
    ]
})
export class CarsListItemComponent {
  @Input({ required: true }) car!: CarDto;

  protected readonly daysUntil = daysUntil;
  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;

  constructor() {
    addIcons({
      shieldCheckmarkOutline,
      buildOutline,
      carOutline,
      waterOutline,
      calendarOutline,
      speedometerOutline,
    });
  }

  get defaultPhoto(): string {
    const def = this.car.photos?.find(p => p.is_default) ?? this.car.photos?.[0];
    return def?.url ?? '';
  }
}
