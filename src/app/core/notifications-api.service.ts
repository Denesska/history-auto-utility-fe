import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type NotificationType = 'CAR_SHARED' | 'CAR_ACCESS_REMOVED' | 'CAR_ACCESS_ROLE_CHANGED' | 'CAR_ACCESS_ACCEPTED' | 'DOCUMENT_EXPIRING';
export type PushPlatform = 'ANDROID' | 'WEB';

export interface NotificationDto {
  id: number;
  type: NotificationType;
  data: Record<string, any>;
  read_at: string | null;
  created_at: string;
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
