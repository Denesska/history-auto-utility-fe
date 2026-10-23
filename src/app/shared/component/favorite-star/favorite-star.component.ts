import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { star, starOutline } from 'ionicons/icons';
import { NavigationPreferencesService } from '@hau/core/navigation/navigation-preferences.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';

/**
 * Per-car "favourite car" star: filled yellow = the account context's favourite, yellow outline = not.
 * Only one favourite per context (NavigationPreferencesService). Renders nothing when the user has a
 * single active car or the car is SOLD. `overlay` adds a translucent disc so it reads on top of photos.
 */
@Component({
  selector: 'app-favorite-star',
  imports: [IonIcon, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      @let fav = isFavorite();
      <button
        type="button"
        class="fav-star"
        [class.fav-star--on]="fav"
        [class.fav-star--overlay]="overlay()"
        [attr.aria-pressed]="fav"
        [attr.title]="(fav ? 'cars.favorite.remove' : 'cars.favorite.add') | transloco"
        [attr.aria-label]="(fav ? 'cars.favorite.remove' : 'cars.favorite.add') | transloco"
        (click)="toggle($event)"
        (keydown.enter)="$event.stopPropagation()">
        <ion-icon [name]="fav ? 'star' : 'star-outline'"></ion-icon>
      </button>
    }
  `,
  styles: `
    :host { display: inline-flex; flex-shrink: 0; }
    .fav-star {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: transparent;
      color: var(--hau-star);
      font-size: 22px;
      cursor: pointer;
      transition: transform var(--hau-transition-fast), background var(--hau-transition-fast);
    }
    .fav-star:hover { transform: scale(1.1); }
    .fav-star--overlay {
      background: color-mix(in srgb, var(--hau-surface) 78%, transparent);
      backdrop-filter: blur(4px);
      box-shadow: var(--hau-shadow-soft);
    }
  `,
})
export class FavoriteStarComponent {
  readonly car = input.required<{ id: number; status?: string | null }>();
  readonly overlay = input(false);

  private readonly _prefs = inject(NavigationPreferencesService);
  private readonly _singleCar = inject(SingleCarService);

  protected readonly visible = computed(
    () => this.car().status !== 'SOLD' && this._singleCar.activeCars().length > 1,
  );
  protected readonly isFavorite = computed(() => this._prefs.isFavorite(this.car().id));

  constructor() {
    addIcons({ star, starOutline });
  }

  protected toggle(event: Event): void {
    event.stopPropagation();
    this._prefs.toggleFavorite(this.car().id);
  }
}
