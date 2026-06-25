import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificationDto } from '@hau/core/notifications-api.service';
import { NotificationsActions } from '@hau/shared/state/notifications/notifications.actions';
import { NotificationsState } from '@hau/shared/state/notifications/notifications.state';

@Injectable({ providedIn: 'root' })
export class NotificationsFacade {
  readonly items$: Observable<NotificationDto[]> = this._store.select(NotificationsState.items);
  readonly unreadCount$: Observable<number> = this._store.select(NotificationsState.unreadCount);

  constructor(private readonly _store: Store) {}

  load(): void {
    this._store.dispatch(new NotificationsActions.Load());
  }

  markAsRead(id: number): void {
    this._store.dispatch(new NotificationsActions.MarkRead(id));
  }

  markAllAsRead(): void {
    this._store.dispatch(new NotificationsActions.MarkAllRead());
  }

  delete(id: number): void {
    this._store.dispatch(new NotificationsActions.Delete(id));
  }

  clearRead(): void {
    this._store.dispatch(new NotificationsActions.ClearRead());
  }
}
