import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
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
import { TranslocoModule } from '@ngneat/transloco';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { daysUntil, formatDate, formatMileage, getDocExpiry } from '@hau/features/cars/cars.utils';

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
  @Input() documents: DocumentDto[] = [];

  @Output() viewClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<void>();

  protected readonly daysUntil = daysUntil;
  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly getDocExpiry = getDocExpiry;

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
    const def = this.car.photos?.find(p => p.is_default) ?? this.car.photos?.[0];
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
