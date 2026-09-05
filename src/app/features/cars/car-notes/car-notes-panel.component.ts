import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarNoteDto } from '@hau/autogenapi/models';
import { CarNotesFacade } from '@hau/features/cars/state/car-notes/car-notes.facade';
import { AlertController, IonIcon, IonicSafeString } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, checkmarkOutline, copyOutline, createOutline, documentTextOutline, trashOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs';

interface NoteGroup {
  name: string | null;
  notes: CarNoteDto[];
}

interface NoteForm {
  title: string;
  content: string;
  group_name: string;
}

@UntilDestroy()
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

  notes: CarNoteDto[] = [];
  loading = false;
  saving = false;
  error: string | null = null;

  formOpen = false;
  editingNote: CarNoteDto | null = null;
  form: NoteForm = { title: '', content: '', group_name: '' };
  copiedNoteId: number | null = null;

  constructor(
    private readonly _facade: CarNotesFacade,
    private readonly _transloco: TranslocoService,
    private readonly _alertCtrl: AlertController,
  ) {
    addIcons({ addOutline, createOutline, trashOutline, documentTextOutline, copyOutline, checkmarkOutline });
  }

  ngOnChanges(): void {
    if (this.carId) this.loadNotes();
  }

  loadNotes(): void {
    this.loading = true;
    this._facade.notesFor(this.carId).pipe(untilDestroyed(this)).subscribe(notes => {
      this.notes = notes;
      this.loading = false;
    });
    this._facade.loadNotes(this.carId);
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
    const dto = { title, content, group_name: trimmedGroup || null };

    const save$ = this.editingNote
      ? this._facade.updateNote(this.carId, this.editingNote.id, dto)
      : this._facade.createNote(this.carId, dto);

    save$.pipe(take(1)).subscribe({
      next: () => {
        this.saving = false;
        this.formOpen = false;
      },
      error: (err) => {
        this.error = err?.error?.message ?? this._transloco.translate('cars.notes.form.error');
        this.saving = false;
      },
    });
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
    this._facade.deleteNote(this.carId, note.id).pipe(take(1)).subscribe(() => {
      if (this.editingNote?.id === note.id) this.cancelForm();
    });
  }
}
