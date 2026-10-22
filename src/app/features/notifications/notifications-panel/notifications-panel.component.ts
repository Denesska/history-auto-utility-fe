import { LowerCasePipe } from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  alarmOutline,
  businessOutline,
  carOutline,
  closeOutline,
  notificationsOffOutline,
  notificationsOutline,
  sparklesOutline,
} from 'ionicons/icons';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { ReminderMuteService } from '@hau/core/reminder-mute.service';
import { NotificationsApiService } from '@hau/core/notifications-api.service';
import { ToastController } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CARS_ROUTES, CarAccessFacade } from '@hau/features/cars';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { OrganizationApiService } from '@hau/features/organization';
import { AUTH_ROUTES } from '@hau/features/auth';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { NotificationsFacade } from '@hau/shared/state/notifications/notifications.facade';
import { NotificationDto } from '@hau/core/notifications-api.service';

// Renders the list of in-app notifications (car-share invites with accept/decline,
// access changes, document-expiry reminders, VIN/plate conflicts) plus mark-all-read
// and clear-read actions. Reads live from the app-wide NotificationsFacade store —
// MainComponent (mounted once for the whole session) already calls .load() and keeps
// the WebSocket connected, so this component only needs to subscribe, not fetch.
// Used both by the desktop sidebar (features/main) and the mobile Account/Settings
// screen (features/settings) — see each FEATURE.md for placement rationale.
@UntilDestroy()
@Component({
  selector: 'app-notifications-panel',
  templateUrl: 'notifications-panel.component.html',
  styleUrls: ['./notifications-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonIcon, TranslocoPipe, LowerCasePipe, DropdownComponent],
})
export class NotificationsPanelComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly notificationsFacade = inject(NotificationsFacade);
  private readonly carAccessFacade = inject(CarAccessFacade);
  private readonly organizationApi = inject(OrganizationApiService);
  private readonly bootstrapFacade = inject(BootstrapFacade);
  private readonly sessionContext = inject(SessionContextService);
  private readonly transloco = inject(TranslocoService);
  private readonly notificationsApi = inject(NotificationsApiService);
  private readonly toastCtrl = inject(ToastController);
  private readonly reminderMute = inject(ReminderMuteService);
  /** Id of the notification whose "mute this car" duration picker is open. */
  muteMenuFor: number | null = null;

  notifications: NotificationDto[] = [];
  unreadCount = 0;
  acceptedCarIds = new Set<number>();
  acceptedOrgIds = new Set<number>();
  acceptingNotifId: number | null = null;

  constructor() {
    addIcons({
      alarmOutline,
      businessOutline,
      carOutline,
      closeOutline,
      notificationsOffOutline,
      notificationsOutline,
      sparklesOutline,
    });
  }

  ngOnInit(): void {
    this.notificationsFacade.items$
      .pipe(untilDestroyed(this))
      .subscribe(items => {
        this.notifications = items;
      });

    this.notificationsFacade.unreadCount$
      .pipe(untilDestroyed(this))
      .subscribe(count => {
        this.unreadCount = count;
      });

    this.bootstrapFacade.sharedCars$
      .pipe(untilDestroyed(this))
      .subscribe(shared => {
        this.acceptedCarIds = new Set(shared.map(e => e.car.id));
      });

    // Organizations aren't part of the bootstrap payload (unlike shared cars), so this
    // is its own one-time fetch — same purpose as acceptedCarIds: hide the inline
    // "Accept" row once the invite has actually been accepted, even on reload.
    // GET /organization is business-only and ORG_* notifications only exist in business
    // context (ACCOUNT-CONTEXT.md), so personal sessions skip it.
    if (!this.sessionContext.isBusiness()) return;
    this.organizationApi
      .myOrganizations()
      .pipe(untilDestroyed(this))
      .subscribe(orgs => {
        this.acceptedOrgIds = new Set(
          orgs.filter(o => o.accepted_at).map(o => o.id),
        );
      });
  }

  isCarShareAccepted(carId: number): boolean {
    return this.acceptedCarIds.has(carId);
  }

  isOrgInviteAccepted(organizationId: number): boolean {
    return this.acceptedOrgIds.has(organizationId);
  }

  acceptCarShareNotification(notif: NotificationDto): void {
    const carId = notif.data['carId'];
    this.acceptingNotifId = notif.id;
    // Facade already triggers a bootstrap refresh on success.
    this.carAccessFacade.acceptInvitation(carId).subscribe({
      next: () => {
        this.acceptingNotifId = null;
        this.notificationsFacade.markAsRead(notif.id);
      },
      error: () => {
        this.acceptingNotifId = null;
      },
    });
  }

  acceptOrgInviteNotification(notif: NotificationDto): void {
    const organizationId = notif.data['organizationId'];
    this.acceptingNotifId = notif.id;
    this.organizationApi.acceptInvitation(organizationId).subscribe({
      next: () => {
        this.acceptedOrgIds.add(organizationId);
        this.acceptingNotifId = null;
        this.notificationsFacade.markAsRead(notif.id);
      },
      error: () => {
        this.acceptingNotifId = null;
      },
    });
  }

  /** Document and maintenance reminders carry what's needed to identify their item; others can't be snoozed. */
  isSnoozable(notif: NotificationDto): boolean {
    return (
      (notif.type === 'DOCUMENT_EXPIRING' && notif.data['docId'] != null) ||
      (notif.type === 'MAINTENANCE_DUE' && notif.data['recordId'] != null)
    );
  }

  get snoozeOptions(): DropdownOption[] {
    return [
      { value: 7, label: this.transloco.translate('sidebar.notifications.snooze.days7') },
      { value: 30, label: this.transloco.translate('sidebar.notifications.snooze.days30') },
      { value: 'never', label: this.transloco.translate('sidebar.notifications.snooze.never') },
      { value: 'mute', label: this.transloco.translate('sidebar.notifications.snooze.muteCar') },
    ];
  }

  get muteOptions(): DropdownOption[] {
    return [
      { value: 1, label: this.transloco.translate('sidebar.notifications.snooze.mute1') },
      { value: 3, label: this.transloco.translate('sidebar.notifications.snooze.mute3') },
      { value: 6, label: this.transloco.translate('sidebar.notifications.snooze.mute6') },
      { value: 'forever', label: this.transloco.translate('sidebar.notifications.snooze.muteForever') },
    ];
  }

  muteCar(notif: NotificationDto, choice: string | number): void {
    const months = choice === 'forever' ? null : (Number(choice) as 1 | 3 | 6);
    this.muteMenuFor = null;
    this.reminderMute.mute(notif.data['carId'], months).then(
      () => {
        this.notificationsFacade.markAsRead(notif.id);
        void this.showToast(this.transloco.translate('sidebar.notifications.snooze.toastMuted'));
      },
      () => void this.showToast(this.transloco.translate('sidebar.notifications.snooze.error')),
    );
  }

  snooze(notif: NotificationDto, choice: string | number): void {
    if (choice === 'mute') {
      this.muteMenuFor = notif.id;
      return;
    }
    const days = choice === 'never' ? null : (Number(choice) as 7 | 30);
    this.notificationsApi.snooze(notif.id, days).subscribe({
      next: () => {
        this.notificationsFacade.markAsRead(notif.id);
        void this.showToast(
          days == null
            ? this.transloco.translate('sidebar.notifications.snooze.toastNever')
            : this.transloco.translate('sidebar.notifications.snooze.toastDays', { days: this.daysText(days) }),
        );
      },
      error: () => void this.showToast(this.transloco.translate('sidebar.notifications.snooze.error')),
    });
  }

  private async showToast(message: string): Promise<void> {
    const toast = await this.toastCtrl.create({ message, duration: 2500, position: 'bottom' });
    await toast.present();
  }

  /**
   * "1 day" / "5 days" / ro "1 zi" / "5 zile" / "20 de zile" / ru "1 день" / "3 дня" / "5 дней":
   * picks the plural form key for the count. Russian uses its CLDR rules (mod-10 / mod-100) via
   * Intl.PluralRules; en/ro keep the original thresholds.
   */
  daysText(n: number): string {
    const r = n % 100;
    let form: 'one' | 'few' | 'many';
    if (this.transloco.getActiveLang() === 'ru') {
      const cat = new Intl.PluralRules('ru-RU').select(n);
      form = cat === 'one' ? 'one' : cat === 'few' ? 'few' : 'many';
    } else {
      form = n === 1 ? 'one' : r >= 1 && r <= 19 ? 'few' : 'many';
    }
    return this.transloco.translate(`sidebar.notifications.daysUnit.${form}`, { n });
  }

  /** Transloco key for a MAINTENANCE_DUE notification, picked from its stage (and, for SOON, which threshold fired). */
  maintenanceDueKey(notif: NotificationDto): string {
    const d = notif.data;
    const base = 'sidebar.notifications.maintenanceDue.';
    switch (d['stage']) {
      case 'DUE':
        return `${base}due`;
      case 'OVERDUE':
        return `${base}overdue`;
      case 'EXPIRY':
        return `${base}${d['daysLeft'] < 0 ? 'recordPast' : d['daysLeft'] === 0 ? 'recordToday' : 'recordDays'}`;
      default:
        return `${base}${d['soonBy'] === 'km' ? 'soonKm' : d['soonBy'] === 'date' ? 'soonDays' : 'soonBoth'}`;
    }
  }

  /** What the reminder is about: the category name, or the record's own description for a dated "other" record. */
  maintenanceDueSubject(notif: NotificationDto): string {
    const d = notif.data;
    if (d['stage'] === 'EXPIRY' && d['category'] === 'OTHER' && d['description']) return d['description'];
    return this.transloco.translate(`sidebar.notifications.maintenanceCategories.${d['category'] ?? 'OTHER'}`);
  }

  /** Remaining km rounded to the nearest 100, as shown in the text ("~800 km"). */
  maintenanceDueKm(notif: NotificationDto): number {
    return Math.max(0, Math.round((notif.data['kmRemaining'] ?? 0) / 100) * 100);
  }

  onNotificationClick(notif: NotificationDto): void {
    this.notificationsFacade.markAsRead(notif.id);

    if (notif.type === 'ORG_INVITED' || notif.type === 'ORG_INVITE_ACCEPTED') {
      void this.router.navigate(['/main/organization']);
      return;
    }

    if (notif.type === 'BUSINESS_ACCESS_REQUESTED') {
      // Sent only to admins. Admin (`/main/admin`) is personal-context-only (ACCOUNT-CONTEXT.md);
      // this notification type itself is visible in any context, so an admin could receive it while
      // in a business session — navigating there would just bounce off the context-scope guard, so
      // only navigate when already personal, otherwise leave it at "marked read" above.
      if (this.sessionContext.isPersonal()) {
        void this.router.navigate(['/main/admin']);
      }
      return;
    }

    if (notif.type === 'AI_QUOTA_BLOCKED') {
      // Admins only; same personal-context-only caveat as BUSINESS_ACCESS_REQUESTED above.
      if (this.sessionContext.isPersonal()) {
        void this.router.navigate(['/main/admin']);
      }
      return;
    }

    if (notif.type === 'BUSINESS_ACCESS_APPROVED' || notif.type === 'BUSINESS_ACCESS_REJECTED') {
      // Back to the org picker's create/request flow — `?create=1` opens it directly regardless
      // of whether the user already has other organizations.
      void this.router.navigate([AUTH_ROUTES.selectOrganization.fullPath], { queryParams: { create: 1 } });
      return;
    }

    if (notif.type === 'MAINTENANCE_DUE' && notif.data['carId'] != null) {
      // Straight to that car's Plan tab, where the progress bars live.
      void this.router.navigate([`${CARS_ROUTES.details.fullPath}/${notif.data['carId']}/${CARS_ROUTES.plan.path}`]);
      return;
    }

    const navigableTypes: NotificationDto['type'][] = [
      'CAR_SHARED',
      'CAR_ACCESS_ROLE_CHANGED',
      'CAR_ACCESS_ACCEPTED',
      'DOCUMENT_EXPIRING',
      'VIN_CONFLICT',
      'LICENSE_PLATE_CONFLICT',
    ];
    if (navigableTypes.includes(notif.type) && notif.data['carId'] != null) {
      void this.router.navigate([
        `${CARS_ROUTES.details.fullPath}/${notif.data['carId']}`,
      ]);
    }
  }

  markAllAsRead(): void {
    this.notificationsFacade.markAllAsRead();
  }

  deleteNotification(notif: NotificationDto): void {
    this.notificationsFacade.delete(notif.id);
  }

  hasClearableNotifications(): boolean {
    return this.notifications.some(n => !!n.read_at);
  }

  clearRead(): void {
    this.notificationsFacade.clearRead();
  }
}
