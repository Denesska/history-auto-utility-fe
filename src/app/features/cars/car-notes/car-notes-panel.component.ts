import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarNoteDto } from '@hau/autogenapi/models';
import { CarNoteService } from '@hau/autogenapi/services';
import { AlertController, IonIcon, IonicSafeString } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, checkmarkOutline, closeOutline, copyOutline, createOutline, documentTextOutline, trashOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

interface NoteGroup {
  name: string | null;
  notes: CarNoteDto[];
}

interface NoteForm {
  title: string;
  content: string;
  group_name: string;
}

@Component({
  selector: 'app-car-notes-panel',
  templateUrl: './car-notes-panel.component.html',
  styleUrls: ['./car-notes-panel.component.scss'],
  imports: [FormsModule, IonIcon, TranslocoPipe],
})
export class CarNotesPanelComponent implements OnChanges {
  @Input() carId!: number;
  @Input() carName!: string;
  @Input() canEdit = false;
  @Output() closed = new EventEmitter<void>();

  notes: CarNoteDto[] = [];
  loading = false;
  saving = false;
  error: string | null = null;

  formOpen = false;
  editingNote: CarNoteDto | null = null;
  form: NoteForm = { title: '', content: '', group_name: '' };
  copiedNoteId: number | null = null;

  constructor(
    private readonly _carNoteService: CarNoteService,
    private readonly _transloco: TranslocoService,
    private readonly _alertCtrl: AlertController,
  ) {
    addIcons({ closeOutline, addOutline, createOutline, trashOutline, documentTextOutline, copyOutline, checkmarkOutline });
  }

  ngOnChanges(): void {
    if (this.carId) this.loadNotes();
  }

  loadNotes(): void {
    this.loading = true;
    this._carNoteService.carNoteControllerGetCarNotesByCarId({ carId: String(this.carId) }).subscribe({
      next: notes => { this.notes = notes; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  get existingGroups(): string[] {
    return [...new Set(this.notes.map(n => n.group_name).filter((g): g is string => !!g))];
  }

  get groupedNotes(): NoteGroup[] {
    const groups: NoteGroup[] = [];
    for (const note of this.notes) {
      const name = note.group_name ?? null;
      let group = groups.find(g => g.name === name);
      if (!group) {
        group = { name, notes: [] };
        groups.push(group);
      }
      group.notes.push(note);
    }
    // Ungrouped notes last, after the named groups.
    groups.sort((a, b) => (a.name === null ? 1 : 0) - (b.name === null ? 1 : 0));
    return groups;
  }

  openAdd(): void {
    this.editingNote = null;
    this.form = { title: '', content: '', group_name: '' };
    this.error = null;
    this.formOpen = true;
  }

  openEdit(note: CarNoteDto): void {
    this.editingNote = note;
    this.form = { title: note.title, content: note.content, group_name: note.group_name ?? '' };
    this.error = null;
    this.formOpen = true;
  }

  cancelForm(): void {
    this.formOpen = false;
    this.editingNote = null;
  }

  save(): void {
    const title = this.form.title.trim();
    const content = this.form.content.trim();
    if (!title || !content) return;

    this.saving = true;
    this.error = null;
    const trimmedGroup = this.form.group_name.trim();

    if (this.editingNote) {
      // Explicit null (not undefined) so the backend clears a previously set group instead of leaving it unchanged.
      this._carNoteService.carNoteControllerUpdateCarNote({
        id: String(this.editingNote.id),
        body: { title, content, group_name: trimmedGroup || null } as never,
      }).subscribe({
        next: updated => {
          this.notes = this.notes.map(n => n.id === updated.id ? updated : n);
          this.saving = false;
          this.formOpen = false;
        },
        error: (err) => {
          this.error = err?.error?.message ?? this._transloco.translate('cars.notes.form.error');
          this.saving = false;
        },
      });
    } else {
      this._carNoteService.carNoteControllerCreateCarNote({
        body: { car_id: this.carId, title, content, group_name: trimmedGroup || undefined },
      }).subscribe({
        next: created => {
          this.notes = [...this.notes, created];
          this.saving = false;
          this.formOpen = false;
        },
        error: (err) => {
          this.error = err?.error?.message ?? this._transloco.translate('cars.notes.form.error');
          this.saving = false;
        },
      });
    }
  }

  async confirmDelete(note: CarNoteDto): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.notes.deleteAlert.header'),
      message: new IonicSafeString(this._transloco.translate('cars.notes.deleteAlert.message', { title: note.title })),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this.deleteNote(note),
        },
      ],
    });
    await alert.present();
  }

  copyContent(note: CarNoteDto): void {
    navigator.clipboard.writeText(note.content).then(() => {
      this.copiedNoteId = note.id;
      setTimeout(() => {
        if (this.copiedNoteId === note.id) this.copiedNoteId = null;
      }, 1500);
    });
  }

  private deleteNote(note: CarNoteDto): void {
    this._carNoteService.carNoteControllerDeleteCarNote({ id: String(note.id) }).subscribe({
      next: () => {
        this.notes = this.notes.filter(n => n.id !== note.id);
        if (this.editingNote?.id === note.id) this.cancelForm();
      },
    });
  }

  close(): void {
    this.closed.emit();
  }
}
