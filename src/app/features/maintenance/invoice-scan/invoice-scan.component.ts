import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { IonIcon, IonSpinner } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { alertCircleOutline, checkmarkCircleOutline, closeOutline, documentTextOutline, scanOutline } from 'ionicons/icons';
import { take } from 'rxjs';
import { AiQuotaService } from '@hau/core/ai-quota.service';
import { ImageSourcePickerComponent, ImageSourceSelection } from '@hau/shared/component/image-source-picker/image-source-picker.component';
import { InvoiceExtractionResult, InvoiceScanApplied } from './invoice-extraction.model';
import { InvoiceExtractionService } from './invoice-extraction.service';

const MAX_FILES = 3;
const MAX_BYTES = 20 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf']);

interface ScanFile {
  file: File;
  previewUrl: string | null;
}

@Component({
  selector: 'app-invoice-scan',
  standalone: true,
  imports: [IonIcon, IonSpinner, TranslocoPipe, ImageSourcePickerComponent],
  templateUrl: './invoice-scan.component.html',
  styleUrls: ['./invoice-scan.component.scss'],
})
export class InvoiceScanComponent implements OnDestroy {
  @Input() carId: number | null = null;
  @Input() disabled = false;
  @Output() applied = new EventEmitter<InvoiceScanApplied>();
  @Output() filesChange = new EventEmitter<File[]>();

  items: ScanFile[] = [];
  loading = false;
  result: InvoiceExtractionResult | null = null;
  /** True once the current result was applied; cleared when the files change. */
  filled = false;
  /** Inline notices from file validation (translated). */
  fileMessages: string[] = [];
  errorMessage: string | null = null;

  constructor(
    private readonly _service: InvoiceExtractionService,
    private readonly _aiQuota: AiQuotaService,
    private readonly _transloco: TranslocoService,
    private readonly _cdr: ChangeDetectorRef,
  ) {
    addIcons({ alertCircleOutline, checkmarkCircleOutline, closeOutline, documentTextOutline, scanOutline });
  }

  get canAddMore(): boolean {
    return this.items.length < MAX_FILES;
  }

  get hasAnalyzed(): boolean {
    return this.result !== null || this.errorMessage !== null;
  }

  onFilesSelected(event: ImageSourceSelection): void {
    const picked = event.files;
    this.fileMessages = [];
    let overflow = false;
    for (const file of picked) {
      if (!ALLOWED_TYPES.has(file.type)) {
        this.fileMessages.push(this._t('badType', { name: file.name }));
        continue;
      }
      if (file.size > MAX_BYTES) {
        this.fileMessages.push(this._t('tooBig', { name: file.name }));
        continue;
      }
      if (this.items.length >= MAX_FILES) {
        overflow = true;
        continue;
      }
      this.items.push({ file, previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : null });
    }
    if (overflow) this.fileMessages.push(this._t('tooMany'));
    this._filesChanged();
  }

  remove(index: number): void {
    const [removed] = this.items.splice(index, 1);
    if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl);
    this.fileMessages = [];
    this._filesChanged();
  }

  analyze(): void {
    if (this.loading || this.disabled || !this.items.length) return;
    this.loading = true;
    this.result = null;
    this.filled = false;
    this.errorMessage = null;
    const files = this.items.map(i => i.file);
    this._service
      .extract(files, this.carId, this._transloco.getActiveLang())
      .pipe(take(1))
      .subscribe({
        next: result => {
          this.loading = false;
          this.result = result;
          if (result.detected) {
            this.filled = true;
            this.applied.emit({ result, files });
          } else {
            this.errorMessage = this._t('notDetected');
          }
          this._aiQuota.checkWarning();
          this._cdr.markForCheck();
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
          this.errorMessage = this._aiQuota.isQuotaError(err)
            ? this._aiQuota.messageFor(err)
            : err?.status === 503
              ? this._t('unavailable')
              : this._t('error');
          this._cdr.markForCheck();
        },
      });
  }

  /** Clears files and results (e.g. after the form is saved or reset). */
  reset(): void {
    this.items.forEach(i => i.previewUrl && URL.revokeObjectURL(i.previewUrl));
    this.items = [];
    this.fileMessages = [];
    this._clearResult();
    this.filesChange.emit([]);
  }

  warningText(w: { code: string; params?: Record<string, string | number> }): string {
    const params = { ...(w.params ?? {}) };
    // The backend index is 0-based; show it 1-based.
    if (w.code === 'UNREADABLE_DOCUMENT' && typeof params['index'] === 'number') params['index'] = (params['index'] as number) + 1;
    return this._transloco.translate(`maintenance.form.invoiceScan.warnings.${w.code}`, params);
  }

  ngOnDestroy(): void {
    this.items.forEach(i => i.previewUrl && URL.revokeObjectURL(i.previewUrl));
  }

  private _filesChanged(): void {
    this._clearResult();
    this.filesChange.emit(this.items.map(i => i.file));
  }

  private _clearResult(): void {
    this.result = null;
    this.filled = false;
    this.errorMessage = null;
  }

  private _t(key: string, params?: Record<string, string | number>): string {
    return this._transloco.translate(`maintenance.form.invoiceScan.${key}`, params);
  }
}
