import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  buildOutline,
  carOutline,
  chevronForward,
  createOutline,
  eyeOutline,
  personOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { daysUntil, getDocExpiry } from '@hau/features/cars/cars.utils';

@Component({
  selector: 'app-car-row-item',
  templateUrl: 'car-row-item.component.html',
  styleUrls: ['./car-row-item.component.scss'],
  imports: [IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, ImageUrlPipe],
})
export class CarRowItemComponent {
  @Input({ required: true }) car!: CarDto;
  @Input() documents: DocumentDto[] = [];
  @Input() badge?: string;

  @Output() viewClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<void>();

  @ViewChild('sliding') sliding!: IonItemSliding;

  protected readonly daysUntil = daysUntil;
  protected readonly getDocExpiry = getDocExpiry;

  constructor() {
    addIcons({
      carOutline, shieldCheckmarkOutline, buildOutline,
      chevronForward, eyeOutline, createOutline, personOutline,
    });
  }

  get defaultPhoto(): string {
    const def = this.car.photos?.find(p => p.is_default) ?? this.car.photos?.[0];
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
