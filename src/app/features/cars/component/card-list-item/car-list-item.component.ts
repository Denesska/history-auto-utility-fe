import { Component, Input } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { IonButton, IonCard, IonContent, IonIcon, IonLabel, IonPopover, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { car, construct, informationCircle, shield } from 'ionicons/icons';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-car-list-item',
  templateUrl: 'car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonContent, IonIcon, IonLabel, IonPopover, IonText, TranslocoModule],
})
export class CarsListItemComponent {
  @Input({ required: true }) car!: CarDto;

  constructor() {
    addIcons({
      shield,
      construct,
      car,
      informationCircle,
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
