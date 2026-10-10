import { computed, inject, Injectable } from '@angular/core';
import { filter, map, Observable, take } from 'rxjs';
import { FeatureKey } from '@hau/core/features/feature-keys';
import { BootstrapState } from '@hau/shared/state/bootstrap/bootstrap.state';
import { Store } from '@ngxs/store';

/**
 * Which per-organization feature switches are on (see FEATURE.md next to this file).
 * Fed by the bootstrap response's `enabled_features`; while that field is missing
 * (older backend, bootstrap not loaded yet / reset) EVERY feature counts as enabled,
 * so nothing ever disappears by accident.
 */
@Injectable({ providedIn: 'root' })
export class FeatureService {
  private readonly _store = inject(Store);
  private readonly _enabled = this._store.selectSignal(BootstrapState.enabledFeatures);
  private readonly _settled = this._store.selectSignal(BootstrapState.featuresSettled);

  /** True once a bootstrap attempt has finished (it delivered the switches, or failed/omitted them = all enabled). */
  readonly loaded = computed(() => this._settled());

  /** The enabled keys, or null while unknown (= everything enabled). */
  readonly enabledFeatures = computed(() => {
    const list = this._enabled();
    return list ? new Set<string>(list) : null;
  });

  /** Signal-friendly: reads a signal, so use it inside `computed`/templates and it re-evaluates when bootstrap reloads. */
  isEnabled(key: FeatureKey | undefined): boolean {
    if (!key) return true;
    const set = this.enabledFeatures();
    return set === null || set.has(key);
  }

  /** Emits once the switches are final (see `loaded`). Callers must make sure a bootstrap has been started. */
  whenLoaded$(): Observable<true> {
    return this._store.select(BootstrapState.featuresSettled).pipe(filter(Boolean), take(1), map(() => true as const));
  }

  /** Waits until loaded, then emits whether `key` is enabled (never fire a feature's request before this says true). */
  isEnabled$(key: FeatureKey | undefined): Observable<boolean> {
    return this.whenLoaded$().pipe(map(() => this.isEnabled(key)));
  }
}
