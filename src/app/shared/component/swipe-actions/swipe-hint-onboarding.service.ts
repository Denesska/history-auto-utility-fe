import { Injectable } from '@angular/core';

const STORAGE_KEY = 'hau.swipe-actions-hint.v1';

@Injectable({ providedIn: 'root' })
export class SwipeHintOnboardingService {
  private claimed = false;

  canRun(): boolean {
    if (this.claimed || typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'seen';
    } catch {
      return !this.claimed;
    }
  }

  claim(): boolean {
    if (!this.canRun()) return false;
    this.claimed = true;
    try {
      localStorage.setItem(STORAGE_KEY, 'seen');
    } catch {
      // In-memory claiming still prevents repeats for this app session.
    }
    return true;
  }
}
