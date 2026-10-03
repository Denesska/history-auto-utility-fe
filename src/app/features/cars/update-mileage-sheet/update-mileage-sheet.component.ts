import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OdometerScanService } from '@hau/core/odometer-scan.service';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

type ScanStatus = 'idle' | 'scanning' | 'retrying' | 'failed';

const MAX_MILEAGE = 9_999_999;

/**
 * Bottom-sheet for updating a car's mileage. Present it with ModalController:
 *
 * ```ts
 * const modal = await modalCtrl.create({
 *   component: UpdateMileageSheetComponent,
 *   componentProps: { currentMileage: km },
 *   ...UPDATE_MILEAGE_SHEET_OPTIONS,
 * });
 * await modal.present();
 * const { data, role } = await modal.onDidDismiss<{ mileage: number }>();
 * if (role === 'confirm' && data) { ... data.mileage ... }
 * ```
 *
 * Dismisses with role 'confirm' + `{ mileage: number }`, or role 'cancel'.
 * The input starts EMPTY and focused (the old km is only a hint), so typing
 * replaces rather than appends; a dashboard photo can fill it via the odometer scan.
 */
@UntilDestroy()
@Component({
  selector: 'app-update-mileage-sheet',
  templateUrl: 'update-mileage-sheet.component.html',
  styleUrls: ['./update-mileage-sheet.component.scss'],
  imports: [FormsModule, DecimalPipe, IonIcon, LoaderComponent, TranslocoPipe],
})
export class UpdateMileageSheetComponent implements AfterViewInit {
  /** The car's current km — shown as a hint and used for the "lower than current" warning. */
  @Input() currentMileage: number | null = null;

  @ViewChild('mileageInput') private _input?: ElementRef<HTMLInputElement>;

  raw = '';
  scanStatus: ScanStatus = 'idle';
  scanOffline = false;

  private readonly _modalCtrl = inject(ModalController);
  private readonly _scanService = inject(OdometerScanService);

  constructor() {
    addIcons({ cameraOutline });
  }

  ngAfterViewInit(): void {
    // Wait for the sheet's slide-in animation — focusing earlier is ignored by iOS
    // and makes the keyboard fight the animation.
    setTimeout(() => this._input?.nativeElement.focus(), 350);
  }

  get mileage(): number | null {
    return /^\d+$/.test(this.raw) ? Number(this.raw) : null;
  }

  get canSave(): boolean {
    const m = this.mileage;
    return m !== null && m <= MAX_MILEAGE;
  }

  get isLower(): boolean {
    const m = this.mileage;
    return m !== null && this.currentMileage != null && m < this.currentMileage;
  }

  get scanning(): boolean {
    return this.scanStatus === 'scanning' || this.scanStatus === 'retrying';
  }

  onInput(value: string): void {
    this.raw = value.replace(/\D/g, '').slice(0, 7);
    if (this._input) this._input.nativeElement.value = this.raw;
    if (this.scanStatus === 'failed') this.scanStatus = 'idle';
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.scanStatus = 'scanning';
    this.scanOffline = !navigator.onLine;
    this._scanService.resize(file).then(resized => {
      this._scanService.scanOdometer(resized, offline => {
        this.scanStatus = 'retrying';
        this.scanOffline = offline;
      })
        .pipe(untilDestroyed(this))
        .subscribe(km => {
          if (km === null || km > MAX_MILEAGE) {
            this.scanStatus = 'failed';
            return;
          }
          this.scanStatus = 'idle';
          this.raw = String(km);
        });
    });
  }

  save(): void {
    const mileage = this.mileage;
    if (mileage === null || !this.canSave) return;
    void this._modalCtrl.dismiss({ mileage }, 'confirm');
  }

  cancel(): void {
    void this._modalCtrl.dismiss(null, 'cancel');
  }
}

/** Sheet presentation options to spread into `ModalController.create()` alongside component/componentProps. */
export const UPDATE_MILEAGE_SHEET_OPTIONS = {
  breakpoints: [0, 0.75],
  initialBreakpoint: 0.75,
  handle: true,
  cssClass: 'update-mileage-sheet-modal',
};
