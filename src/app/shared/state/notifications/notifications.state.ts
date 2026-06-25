import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, EMPTY, tap } from 'rxjs';
import { NotificationDto, NotificationsApiService } from '@hau/core/notifications-api.service';
import { NotificationsActions } from '@hau/shared/state/notifications/notifications.actions';

export interface NotificationsStateModel {
  loading: boolean;
  items: NotificationDto[];
  unreadCount: number;
}

const defaults: NotificationsStateModel = {
  loading: false,
  items: [],
  unreadCount: 0,
};

@State<NotificationsStateModel>({ name: 'notifications', defaults })
@Injectable()
export class NotificationsState {
  constructor(private readonly notificationsApi: NotificationsApiService) {}

  @Selector()
  static items(s: NotificationsStateModel): NotificationDto[] { return s.items; }

  @Selector()
  static unreadCount(s: NotificationsStateModel): number { return s.unreadCount; }

  @Action(NotificationsActions.Load)
  load({ patchState, dispatch }: StateContext<NotificationsStateModel>) {
    patchState({ loading: true });
    return this.notificationsApi.list().pipe(
      tap(items => {
        const unreadCount = items.filter(i => !i.read_at).length;
        dispatch(new NotificationsActions.LoadSuccess(items, unreadCount));
      }),
      catchError(() => {
        dispatch(new NotificationsActions.LoadFailure());
        return EMPTY;
      }),
    );
  }

  @Action(NotificationsActions.LoadSuccess)
  loadSuccess(
    { patchState }: StateContext<NotificationsStateModel>,
    { items, unreadCount }: NotificationsActions.LoadSuccess,
  ) {
    patchState({ loading: false, items, unreadCount });
  }

  @Action(NotificationsActions.LoadFailure)
  loadFailure({ patchState }: StateContext<NotificationsStateModel>) {
    patchState({ loading: false });
  }

  @Action(NotificationsActions.Received)
  received(
    { getState, patchState }: StateContext<NotificationsStateModel>,
    { notification }: NotificationsActions.Received,
  ) {
    const { items, unreadCount } = getState();
    patchState({ items: [notification, ...items], unreadCount: unreadCount + 1 });
  }

  @Action(NotificationsActions.MarkRead)
  markRead(
    { getState, patchState }: StateContext<NotificationsStateModel>,
    { id }: NotificationsActions.MarkRead,
  ) {
    const { items, unreadCount } = getState();
    const target = items.find(i => i.id === id);
    if (!target || target.read_at) return EMPTY;

    patchState({
      items: items.map(i => i.id === id ? { ...i, read_at: new Date().toISOString() } : i),
      unreadCount: Math.max(0, unreadCount - 1),
    });

    return this.notificationsApi.markAsRead(id).pipe(catchError(() => EMPTY));
  }

  @Action(NotificationsActions.MarkAllRead)
  markAllRead({ getState, patchState }: StateContext<NotificationsStateModel>) {
    const { items } = getState();
    const now = new Date().toISOString();
    patchState({
      items: items.map(i => i.read_at ? i : { ...i, read_at: now }),
      unreadCount: 0,
    });

    return this.notificationsApi.markAllAsRead().pipe(catchError(() => EMPTY));
  }

  @Action(NotificationsActions.Delete)
  delete(
    { getState, patchState }: StateContext<NotificationsStateModel>,
    { id }: NotificationsActions.Delete,
  ) {
    const { items, unreadCount } = getState();
    const target = items.find(i => i.id === id);
    if (!target) return EMPTY;

    patchState({
      items: items.filter(i => i.id !== id),
      unreadCount: target.read_at ? unreadCount : Math.max(0, unreadCount - 1),
    });

    return this.notificationsApi.delete(id).pipe(catchError(() => EMPTY));
  }

  @Action(NotificationsActions.ClearRead)
  clearRead({ getState, patchState }: StateContext<NotificationsStateModel>) {
    const { items } = getState();
    patchState({ items: items.filter(i => !i.read_at) });

    return this.notificationsApi.clearRead().pipe(catchError(() => EMPTY));
  }
}
