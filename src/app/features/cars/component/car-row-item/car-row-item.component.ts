import { SwipeActionsComponent } from '@hau/shared/component/swipe-actions/swipe-actions.component';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CarDto, DocumentDto } from '@hau/autogenapi/models';
import { IonIcon, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
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
import { getDocExpiry } from '@hau/shared/utils/document-status.util';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-car-row-item',
  templateUrl: 'car-row-item.component.html',
  styleUrls: ['./car-row-item.component.scss'],
  imports: [SwipeActionsComponent, IonIcon, IonItem, ImageUrlPipe, TranslocoPipe],
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
  protected readonly getCarSubtitle = getCarSubtitle;

  constructor() {
    addIcons({
      carOutline, shieldCheckmarkOutline, buildOutline,
      eyeOutline, createOutline, personOutline,
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
