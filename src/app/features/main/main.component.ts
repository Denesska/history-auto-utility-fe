import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel,
  IonList, IonListHeader, IonMenu, IonMenuButton, IonRouterOutlet,
  IonSplitPane, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { filter } from 'rxjs';
import { TranslocoPipe } from '@ngneat/transloco';
import { AuthService } from '@hau/features/auth/auth.service';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';

const ICON_BASE = 'assets/icons';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    IonSplitPane, IonButtons, IonTitle, IonMenuButton, IonToolbar, IonHeader,
    IonMenu, IonContent, IonRouterOutlet, IonList, IonListHeader, IonItem,
    IonLabel, IonIcon, IonButton, TranslocoPipe,
  ],
})
export class MainComponent {
  readonly vehicleCount = 3;
  currentPath = this.router.url;
  selectedMenuItem = this.resolveActiveMenuItem(this.router.url);

  readonly icons = {
    car:        `${ICON_BASE}/hau-car.svg`,
    home:       `${ICON_BASE}/hau-home.svg`,
    warning:    `${ICON_BASE}/hau-warning.svg`,
    settings:   `${ICON_BASE}/hau-settings.svg`,
    logout:     `${ICON_BASE}/hau-logout.svg`,
    chevron:    `${ICON_BASE}/hau-chevron.svg`,
    checkCircle:`${ICON_BASE}/hau-check-circle.svg`,
    add:        `${ICON_BASE}/hau-add.svg`,
  };

  readonly menuItems = [
    { key: 'overview',     labelKey: 'sidebar.nav.overview',     icon: `${ICON_BASE}/hau-speedometer.svg`, route: '/main/overview' },
    { key: 'garage',       labelKey: 'sidebar.nav.garage',       icon: `${ICON_BASE}/hau-car.svg`,         route: '/main/cars' },
    { key: 'documents',    labelKey: 'sidebar.nav.documents',    icon: `${ICON_BASE}/hau-document.svg`,    route: '/main/cars' },
    { key: 'maintenance',  labelKey: 'sidebar.nav.maintenance',  icon: `${ICON_BASE}/hau-wrench.svg`,      route: '/main/cars' },
    { key: 'reports',      labelKey: 'sidebar.nav.reports',      icon: `${ICON_BASE}/hau-chart.svg`,       route: '/main/cars' },
    { key: 'blog',         labelKey: 'sidebar.nav.blog',         icon: `${ICON_BASE}/hau-pencil.svg`,      route: '/main/cars' },
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath = this.router.url;
        this.selectedMenuItem = this.resolveActiveMenuItem(this.currentPath);
      });
  }

  navigateTo(route: string, key: string) {
    this.selectedMenuItem = key;
    void this.router.navigate([route]);
  }

  navigateToHome()        { void this.router.navigate([HAU_ROUTES.overview.fullPath]); }
  navigateToAddVehicle()  { void this.router.navigate([CARS_ROUTES.create.fullPath]); }
  navigateToSettings()    { void this.router.navigate(['/main/cars']); }

  isActive(item: { route: string; key: string }) {
    return this.selectedMenuItem === item.key;
  }

  private resolveActiveMenuItem(path: string) {
    if (path.startsWith(HAU_ROUTES.cars.fullPath)) {
      return 'garage';
    }
    if (path.startsWith(HAU_ROUTES.overview.fullPath)) {
      return 'overview';
    }
    return 'overview';
  }

  logout() {
    this.authService.logout('');
    void this.router.navigate([HAU_ROUTES.auth.fullPath]);
  }
}
