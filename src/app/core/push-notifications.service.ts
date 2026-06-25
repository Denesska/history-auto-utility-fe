import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { environment } from '../../environments/environment';
import { NotificationsApiService } from '@hau/core/notifications-api.service';

@Injectable({ providedIn: 'root' })
export class PushNotificationsService {
  constructor(private readonly notificationsApi: NotificationsApiService) {}

  async register(): Promise<void> {
    if (Capacitor.getPlatform() === 'android') {
      await this.registerAndroid();
    } else if (Capacitor.getPlatform() === 'web') {
      await this.registerWeb();
    }
  }

  private async registerAndroid(): Promise<void> {
    const permission = await PushNotifications.requestPermissions();
    if (permission.receive !== 'granted') return;

    await PushNotifications.addListener('registration', token => {
      this.notificationsApi.registerPushToken(token.value, 'ANDROID').subscribe();
    });

    await PushNotifications.register();
  }

  private async registerWeb(): Promise<void> {
    if (!('serviceWorker' in navigator) || !environment.firebase.vapidKey) return;

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return;

    const swRegistration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
    const app = initializeApp(environment.firebase);
    const messaging = getMessaging(app);

    const token = await getToken(messaging, {
      vapidKey: environment.firebase.vapidKey,
      serviceWorkerRegistration: swRegistration,
    });

    if (token) {
      this.notificationsApi.registerPushToken(token, 'WEB').subscribe();
    }
  }
}
