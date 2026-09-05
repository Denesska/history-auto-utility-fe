import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    // Called by the native layer (MainActivity) with the raw text of an Android share.
    __handleSharedText?: (text: string) => void;
  }
}

interface NavRelayResponse {
  id?: number;
  name?: string | null;
  lat?: number | null;
  lon?: number | null;
}

/**
 * Receives a place shared from another app (typically Google Maps) and forwards the raw text to
 * the car's nav relay, so the head unit can offer to route there. The native side calls the global
 * {@link Window.__handleSharedText} registered in {@link init}; keeping the bridge this thin avoids
 * a receive-intent Capacitor plugin (none target Capacitor 8 yet). The server resolves the link —
 * we deliberately send the text untouched.
 */
@Injectable({ providedIn: 'root' })
export class NavShareService {
  constructor(
    private http: HttpClient,
    private zone: NgZone,
    private toast: ToastController,
  ) {}

  /** Registers the bridge the native layer calls. Safe to call once at startup. */
  init(): void {
    window.__handleSharedText = (text: string) => {
      // Native fires this outside Angular's zone; hop back in so change detection and the
      // toast/HTTP pipeline behave normally.
      this.zone.run(() => void this.forwardToCar(text));
    };
  }

  private async forwardToCar(text: string): Promise<void> {
    const raw = (text ?? '').trim();
    if (!raw) {
      return;
    }
    if (!environment.navRelaySlug) {
      await this.showToast('Nav relay is not configured', 'danger');
      return;
    }

    const endpoint = `${environment.apiUrl}/n/${environment.navRelaySlug}/set`;
    try {
      const res = await firstValueFrom(
        this.http.post<NavRelayResponse>(endpoint, { url: raw }),
      );
      const label = res?.name ? `“${res.name}”` : 'Location';
      await this.showToast(`${label} sent to the car`, 'success');
    } catch {
      await this.showToast('Could not send the location to the car', 'danger');
    }
  }

  private async showToast(
    message: string,
    color: 'success' | 'danger',
  ): Promise<void> {
    const toast = await this.toast.create({
      message,
      color,
      duration: 2500,
      position: 'top',
    });
    await toast.present();
  }
}
