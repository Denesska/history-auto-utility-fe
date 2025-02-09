import {Component} from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {TranslocoPipe} from '@ngneat/transloco';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
    imports: [IonButtons, IonTitle, IonMenuButton, IonToolbar, IonHeader, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonHeader, TranslocoPipe],
})
export class MainComponent {
  constructor(private router: Router) {
  }
  navigateToHome() {
    void this.router.navigate(['/main/cars']);
  }
}