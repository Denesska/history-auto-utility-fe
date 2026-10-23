import { inject, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';

/**
 * "Discard changes?" confirm for routed form pages (an Ionic alert, fine there; body-level
 * panels such as the Istoric one render their own in-panel dialog because an alert would sit
 * behind them). `keyPrefix` points at a `{ header, message, keepEditing, discard }` translation group.
 */
@Injectable({ providedIn: 'root' })
export class UnsavedChangesService {
  private readonly _alertCtrl = inject(AlertController);
  private readonly _transloco = inject(TranslocoService);

  /** Resolves true when the user chose to discard (leave), false to stay. */
  async confirmDiscard(keyPrefix: string): Promise<boolean> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate(`${keyPrefix}.header`),
      message: this._transloco.translate(`${keyPrefix}.message`),
      buttons: [
        { text: this._transloco.translate(`${keyPrefix}.keepEditing`), role: 'cancel' },
        { text: this._transloco.translate(`${keyPrefix}.discard`), role: 'destructive' },
      ],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    return result.role === 'destructive';
  }
}
