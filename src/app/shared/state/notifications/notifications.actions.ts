import { NotificationDto } from '@hau/core/notifications-api.service';

export namespace NotificationsActions {
  export class Load {
    static readonly type = '[Notifications] Load';
  }

  export class LoadSuccess {
    static readonly type = '[Notifications] Load Success';
    constructor(readonly items: NotificationDto[], readonly unreadCount: number) {}
  }

  export class LoadFailure {
    static readonly type = '[Notifications] Load Failure';
  }

  export class Received {
    static readonly type = '[Notifications] Received';
    constructor(readonly notification: NotificationDto) {}
  }

  export class MarkRead {
    static readonly type = '[Notifications] Mark Read';
    constructor(readonly id: number) {}
  }

  export class MarkAllRead {
    static readonly type = '[Notifications] Mark All Read';
  }

  export class Delete {
    static readonly type = '[Notifications] Delete';
    constructor(readonly id: number) {}
  }

  export class ClearRead {
    static readonly type = '[Notifications] Clear Read';
  }
}
