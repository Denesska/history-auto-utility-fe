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
  businessOutline,
  carOutline,
  closeOutline,
  notificationsOutline,
} from 'ionicons/icons';
import { TranslocoPipe } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarAccessFacade } from '@hau/features/cars/state/car-access/car-access.facade';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { OrganizationApiService } from '@hau/features/organization/organization-api.service';
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
  imports: [IonIcon, TranslocoPipe, LowerCasePipe],
})
export class NotificationsPanelComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly notificationsFacade = inject(NotificationsFacade);
  private readonly carAccessFacade = inject(CarAccessFacade);
  private readonly organizationApi = inject(OrganizationApiService);
  private readonly bootstrapFacade = inject(BootstrapFacade);
  private readonly sessionContext = inject(SessionContextService);

  notifications: NotificationDto[] = [];
  unreadCount = 0;
  acceptedCarIds = new Set<number>();
  acceptedOrgIds = new Set<number>();
  acceptingNotifId: number | null = null;

  constructor() {
    addIcons({
      businessOutline,
      carOutline,
      closeOutline,
      notificationsOutline,
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

  onNotificationClick(notif: NotificationDto): void {
    this.notificationsFacade.markAsRead(notif.id);

    if (notif.type === 'ORG_INVITED' || notif.type === 'ORG_INVITE_ACCEPTED') {
      void this.router.navigate(['/main/organization']);
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
