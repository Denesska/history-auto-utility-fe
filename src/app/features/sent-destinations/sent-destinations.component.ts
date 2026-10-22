import { intlLocale } from '@hau/shared/utils/locale.util';
import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import {
  IonButton, IonContent, IonIcon, IonRefresher, IonRefresherContent, IonSpinner,
  ToastController, ViewWillEnter, ViewWillLeave,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { navigateOutline, refreshOutline, timeOutline } from 'ionicons/icons';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { NavDestinationHistoryItem, NavDestinationHistoryService } from '@hau/core/nav-destination-history.service';

@Component({
  selector: 'app-sent-destinations',
  templateUrl: './sent-destinations.component.html',
  styleUrls: ['./sent-destinations.component.scss'],
  imports: [IonContent, IonButton, IonIcon, IonRefresher, IonRefresherContent, IonSpinner, TranslocoPipe],
})
export class SentDestinationsComponent implements ViewWillEnter, ViewWillLeave {
  readonly history = inject(NavDestinationHistoryService);
  private readonly transloco = inject(TranslocoService);
  private readonly headerActions = inject(HeaderActionsService);
  private readonly toast = inject(ToastController);

  resendingId: number | null = null;

  constructor() {
    addIcons({ navigateOutline, refreshOutline, timeOutline });
  }

  ionViewWillEnter(): void {
    this.headerActions.setTitle(this.transloco.translate('navHistory.title'));
    void this.history.refresh();
  }

  ionViewWillLeave(): void {
    this.headerActions.clear();
    this.headerActions.clearTitle();
  }

  async onRefresh(event: CustomEvent): Promise<void> {
    await this.history.refresh();
    (event.target as HTMLIonRefresherElement).complete();
  }

  formatDate(item: NavDestinationHistoryItem): string {
    const date = new Date(item.ts * 1000);
    const lang = this.transloco.getActiveLang();
    const locale = intlLocale(lang);
    return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(date);
  }

  locationLabel(item: NavDestinationHistoryItem): string {
    if (item.name?.trim()) return item.name.trim();
    if (item.lat !== null && item.lon !== null) return `${item.lat.toFixed(5)}, ${item.lon.toFixed(5)}`;
    return this.transloco.translate('navHistory.unnamed');
  }

  async resend(item: NavDestinationHistoryItem): Promise<void> {
    if (this.resendingId !== null) return;
    this.resendingId = item.id;
    try {
      await this.history.resend(item.id);
      await this.showToast(this.transloco.translate('navHistory.resendSuccess'), 'success');
    } catch {
      await this.showToast(this.transloco.translate('navHistory.resendError'), 'danger');
    } finally {
      this.resendingId = null;
    }
  }

  private async showToast(message: string, color: 'success' | 'danger'): Promise<void> {
    const toast = await this.toast.create({ message, color, duration: 2500, position: 'top' });
    await toast.present();
  }
}
