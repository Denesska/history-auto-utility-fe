import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type NotificationType = 'CAR_SHARED' | 'CAR_ACCESS_REMOVED' | 'CAR_ACCESS_ROLE_CHANGED' | 'CAR_ACCESS_ACCEPTED' | 'DOCUMENT_EXPIRING' | 'MAINTENANCE_DUE' | 'VIN_CONFLICT' | 'LICENSE_PLATE_CONFLICT' | 'ORG_INVITED' | 'ORG_INVITE_ACCEPTED' | 'BUSINESS_ACCESS_REQUESTED' | 'BUSINESS_ACCESS_APPROVED' | 'BUSINESS_ACCESS_REJECTED' | 'AI_QUOTA_BLOCKED';
export type PushPlatform = 'ANDROID' | 'WEB';

export interface NotificationDto {
  id: number;
  type: NotificationType;
  data: Record<string, any>;
  read_at: string | null;
  created_at: string;
}

export interface CarReminderMute {
  carId: number;
  /** ISO date the mute ends; null = until turned back on. */
  until: string | null;
}

@Injectable({ providedIn: 'root' })
export class NotificationsApiService {
  private readonly baseUrl = `${environment.apiUrl}/notifications`;

  constructor(private http: HttpClient) {}

  list(): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(this.baseUrl);
  }

  unreadCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.baseUrl}/unread-count`);
  }

  markAsRead(id: number): Observable<NotificationDto> {
    return this.http.patch<NotificationDto>(`${this.baseUrl}/${id}/read`, {});
  }

  markAllAsRead(): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/read-all`, {});
  }

  /** Silence the reminders of the item behind a DOCUMENT_EXPIRING / MAINTENANCE_DUE notification (null = do not remind again). */
  snooze(notificationId: number, days: 7 | 30 | null): Observable<{ until: string | null }> {
    return this.http.post<{ until: string | null }>(`${environment.apiUrl}/reminders/snooze`, { notificationId, days });
  }

  /** Mute all reminders of a car for the current user (months 1|3|6, null = until turned back on). */
  muteCar(carId: number, months: 1 | 3 | 6 | null): Observable<CarReminderMute> {
    return this.http.put<CarReminderMute>(`${environment.apiUrl}/reminders/car-mute/${carId}`, { months });
  }

  unmuteCar(carId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/reminders/car-mute/${carId}`);
  }

  /** The current user's active car mutes. */
  carMutes(): Observable<CarReminderMute[]> {
    return this.http.get<CarReminderMute[]>(`${environment.apiUrl}/reminders/car-mutes`);
  }

  registerPushToken(token: string, platform: PushPlatform): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/push-token`, { token, platform });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  clearRead(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/read`);
  }
}
