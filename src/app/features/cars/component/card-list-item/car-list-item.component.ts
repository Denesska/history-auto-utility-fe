import { Component, Input } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonContent,
  IonFab, 
  IonFabButton, 
  IonIcon, 
  IonLabel, 
  IonPopover,
  IonText, 
  IonTitle, 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  shield, 
  construct, 
  car, 
  informationCircle 
} from 'ionicons/icons';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-car-list-item',
  templateUrl: 'car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonLabel,
    IonPopover,
    IonText,
    IonTitle,
    TranslocoModule,
  ],
})
export class CarsListItemComponent {
  @Input({ required: true }) car!: CarDto;
  
  constructor() {
    addIcons({ 
      shield, 
      construct, 
      car, 
      informationCircle 
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}