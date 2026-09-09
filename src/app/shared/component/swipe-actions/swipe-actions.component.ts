import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild, signal } from '@angular/core';
import { IonIcon, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { cloudDownloadOutline, eyeOutline, createOutline, refreshOutline, trashOutline } from 'ionicons/icons';
import { SwipeHintOnboardingService } from './swipe-hint-onboarding.service';

export type SwipeAction = 'view' | 'edit' | 'renew' | 'download' | 'delete';

@Component({
  selector: 'app-swipe-actions',
  imports: [IonIcon, IonItemSliding, IonItemOptions, IonItemOption, TranslocoPipe],
  template: `
    <ion-item-sliding #sliding (pointerdown)="stopOnboardingHint()" (ionDrag)="onDrag($event)" (keydown.arrowleft)="open($event)" (keydown.escape)="close()">
      <ng-content></ng-content>
      <ion-item-options side="end">
        @if (showView) {
          <ion-item-option color="primary" (click)="act('view', $event)">
            <ion-icon slot="top" name="eye-outline"></ion-icon>{{ 'common.view' | transloco }}
          </ion-item-option>
        }
        <ion-item-option class="edit-opt" (click)="act('edit', $event)">
          <ion-icon slot="top" name="create-outline"></ion-icon>{{ 'common.edit' | transloco }}
        </ion-item-option>
        @if (showRenew) {
          <ion-item-option class="renew-opt" (click)="act('renew', $event)">
            <ion-icon slot="top" name="refresh-outline"></ion-icon>{{ renewLabel }}
          </ion-item-option>
        }
        @if (showDownload) {
          <ion-item-option class="download-opt" (click)="act('download', $event)">
            <ion-icon slot="top" name="cloud-download-outline"></ion-icon>{{ downloadLabel }}
          </ion-item-option>
        }
        @if (showDelete) {
          <ion-item-option color="danger" (click)="act('delete', $event)">
            <ion-icon slot="top" name="trash-outline"></ion-icon>{{ 'common.delete' | transloco }}
          </ion-item-option>
        }
      </ion-item-options>
    </ion-item-sliding>`,
  styles: [`
    :host { display: block; min-width: 0; }
    ion-item-sliding { border-radius: var(--hau-radius-xl); overflow: hidden; margin-bottom: 4px;
      border: 1px solid var(--hau-border); transition: border-color var(--hau-transition-fast); }
    ion-item-sliding:hover { border-color: var(--hau-border-hover); }
    ion-item-option { font-size: .82rem; font-weight: 600; min-width: 70px; }
    .edit-opt { --background: var(--hau-surface-soft); --color: var(--hau-text); }
    .renew-opt { --background: var(--hau-primary); --color: var(--ion-color-primary-contrast); }
    .download-opt { --background: var(--hau-doc-itp-soft); --color: var(--hau-doc-itp-fg); }
  `],
})
export class SwipeActionsComponent implements AfterViewInit, OnDestroy {
  readonly opened = signal(false);
  @Input() showView = true;
  @Input() showDelete = false;
  @Input() showRenew = false;
  @Input() renewLabel = '';
  @Input() showDownload = false;
  @Input() downloadLabel = '';
  @Output() action = new EventEmitter<SwipeAction>();
  @ViewChild('sliding') sliding?: IonItemSliding;
  @ViewChild('sliding', { read: ElementRef }) slidingElement?: ElementRef<HTMLElement>;
  private hintAnimation?: Animation;
  private hintFrame?: number;
  private hintSecondFrame?: number;
  close(): void {
    this.stopOnboardingHint();
    this.opened.set(false);
    void this.sliding?.close();
  }
  open(event: Event): void {
    this.stopOnboardingHint();
    event.preventDefault();
    event.stopPropagation();
    this.opened.set(true);
    void this.sliding?.open('end');
  }
  toggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.opened()) this.close();
    else {
      this.opened.set(true);
      void this.sliding?.open('end');
    }
  }
  onDrag(event: CustomEvent<{ ratio: number }>): void {
    this.stopOnboardingHint();
    this.opened.set(Math.abs(event.detail.ratio) > 0.05);
  }
  act(action: SwipeAction, event: Event): void {
    event.stopPropagation(); this.close(); this.action.emit(action);
  }
  stopOnboardingHint(): void {
    if (this.hintFrame !== undefined) cancelAnimationFrame(this.hintFrame);
    if (this.hintSecondFrame !== undefined) cancelAnimationFrame(this.hintSecondFrame);
    this.hintFrame = undefined;
    this.hintSecondFrame = undefined;
    this.hintAnimation?.cancel();
    this.hintAnimation = undefined;
  }

  ngAfterViewInit(): void {
    this.hintFrame = requestAnimationFrame(() => {
      this.hintSecondFrame = requestAnimationFrame(() => this.startOnboardingHint());
    });
  }

  ngOnDestroy(): void {
    this.stopOnboardingHint();
  }

  private startOnboardingHint(): void {
    const host = this.slidingElement?.nativeElement;
    const card = host?.querySelector<HTMLElement>(':scope > ion-item');
    if (!host || !card || host.getBoundingClientRect().width === 0 || host.getBoundingClientRect().height === 0) return;
    if (!this.hintOnboarding.claim()) return;

    this.hintAnimation = card.animate([
      { transform: 'translate3d(0, 0, 0)', offset: 0 },
      { transform: 'translate3d(-24px, 0, 0)', offset: 0.20 },
      { transform: 'translate3d(-24px, 0, 0)', offset: 0.34 },
      { transform: 'translate3d(0, 0, 0)', offset: 0.64 },
      { transform: 'translate3d(0, 0, 0)', offset: 1 },
    ], { duration: 900, iterations: 2, easing: 'ease-in-out' });
    this.hintAnimation.addEventListener('finish', () => { this.hintAnimation = undefined; }, { once: true });
  }

  constructor(private readonly hintOnboarding: SwipeHintOnboardingService) {
    addIcons({ cloudDownloadOutline, eyeOutline, createOutline, refreshOutline, trashOutline });
  }
}
