import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';
import { AuthService } from '@hau/features/auth/auth.service';
import { NotificationDto } from '@hau/core/notifications-api.service';
import { NotificationsActions } from '@hau/shared/state/notifications/notifications.actions';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';

const SOCKET_PATH = '/api/socket.io';

// Types where the user's car access itself changed — the cached shared-car
// list in BootstrapState would otherwise go stale until the next full reload.
const CAR_ACCESS_CHANGE_TYPES: NotificationDto['type'][] = ['CAR_ACCESS_REMOVED', 'CAR_ACCESS_ROLE_CHANGED'];

@Injectable({ providedIn: 'root' })
export class NotificationsSocketService {
  private socket: Socket | null = null;

  // Raw feed for components that need to react to a specific notification
  // contextually (e.g. a share panel refreshing once its invite is accepted)
  // rather than going through the global NotificationsState list.
  readonly notification$ = new Subject<NotificationDto>();

  constructor(
    private readonly authService: AuthService,
    private readonly store: Store,
    private readonly bootstrapFacade: BootstrapFacade,
  ) {}

  connect(): void {
    if (this.socket?.connected) return;

    // On web the JWT lives only in an httpOnly cookie (no localStorage token);
    // the cookie rides along automatically via withCredentials. On native/Capacitor
    // there's no cookie, so the localStorage token is sent explicitly instead.
    const token = this.authService.getToken();
    const apiRoot = environment.apiUrl.replace(/\/api\/?$/, '');

    this.socket = io(apiRoot, {
      path: SOCKET_PATH,
      auth: token ? { token } : {},
      withCredentials: true,
    });

    this.socket.on('notification', (notification: NotificationDto) => {
      this.store.dispatch(new NotificationsActions.Received(notification));
      this.notification$.next(notification);

      if (CAR_ACCESS_CHANGE_TYPES.includes(notification.type)) {
        this.bootstrapFacade.forceRefresh();
      }
    });
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }
}
