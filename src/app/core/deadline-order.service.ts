import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface DeadlineOrderDto {
  car_id: number;
  order: string[];
}

const STORAGE_PREFIX = 'hau_deadline_order_';

/**
 * The order in which a car's deadlines are shown, when the owner has dragged them
 * into an order of their own.
 *
 * Persistence is per car and lives on the server, but the endpoint may not be
 * deployed yet: the first 404 flips this service to localStorage for the rest of
 * the session, so drag & drop keeps working either way. Every write also lands in
 * localStorage, so a failed request never silently loses the user's arrangement.
 * Once the backend is live nothing here needs changing — the 404 simply stops
 * happening.
 */
@Injectable({ providedIn: 'root' })
export class DeadlineOrderService {
  private readonly baseUrl = `${environment.apiUrl}/car`;

  /** null = not probed yet, false = endpoint missing, true = server is authoritative. */
  private apiAvailable: boolean | null = null;

  constructor(private readonly http: HttpClient) {}

  getOrder(carId: number): Observable<string[]> {
    if (this.apiAvailable === false) return of(this.readLocal(carId));

    return this.http.get<DeadlineOrderDto>(`${this.baseUrl}/${carId}/deadline-order`).pipe(
      map(res => res?.order ?? []),
      tap(order => {
        this.apiAvailable = true;
        this.writeLocal(carId, order);
      }),
      catchError((err: HttpErrorResponse) => {
        this.noteFailure(err);
        return of(this.readLocal(carId));
      }),
    );
  }

  /**
   * Fire-and-forget on purpose: the caller has already moved the row on screen and
   * the order is in localStorage before the request leaves, so a dropped save
   * doesn't need an error state in the UI.
   */
  saveOrder(carId: number, order: string[]): void {
    this.writeLocal(carId, order);
    if (this.apiAvailable === false) return;

    this.http.put<DeadlineOrderDto>(`${this.baseUrl}/${carId}/deadline-order`, { order }).subscribe({
      next: () => { this.apiAvailable = true; },
      error: (err: HttpErrorResponse) => this.noteFailure(err),
    });
  }

  /** Back to the automatic (most urgent first) order. */
  clearOrder(carId: number): void {
    this.saveOrder(carId, []);
  }

  private noteFailure(err: HttpErrorResponse): void {
    // 404 (route not deployed) and 501 mean "this backend doesn't have the feature".
    // Anything else — offline, 500, auth — is transient, so don't give up on the
    // server for the rest of the session over it.
    if (err.status === 404 || err.status === 501) this.apiAvailable = false;
  }

  private readLocal(carId: number): string[] {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + carId);
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed.filter((k): k is string => typeof k === 'string') : [];
    } catch {
      return [];
    }
  }

  private writeLocal(carId: number, order: string[]): void {
    try {
      localStorage.setItem(STORAGE_PREFIX + carId, JSON.stringify(order));
    } catch {
      // Private mode / quota — the server copy (when present) is still the real one.
    }
  }
}
