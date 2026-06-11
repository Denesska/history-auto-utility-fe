import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { VehicleCatalogService } from '@hau/autogenapi/services';
import { MakeResponseDto, ModelResponseDto } from '@hau/autogenapi/models';

export interface CatalogSelection {
  make: string | null;
  model: string | null;
  year: number | null;
}

@UntilDestroy()
@Component({
  selector: 'app-vehicle-catalog-select',
  templateUrl: './vehicle-catalog-select.component.html',
  styleUrls: ['./vehicle-catalog-select.component.scss'],
  imports: [FormsModule, IonIcon, IonSpinner, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleCatalogSelectComponent implements OnInit, OnChanges {
  @Input() initialMake?: string | null;
  @Input() initialModel?: string | null;
  @Input() initialYear?: number | null;
  @Input() showRequiredErrors = false;
  @Output() selectionChange = new EventEmitter<CatalogSelection>();

  makes: MakeResponseDto[] = [];
  models: ModelResponseDto[] = [];
  readonly years: number[] = Array.from(
    { length: new Date().getFullYear() - 1885 + 1 },
    (_, i) => new Date().getFullYear() - i
  );

  selectedMakeId: number | null = null;
  selectedModelId: number | null = null;
  selectedYearValue: number | null = null;

  makesLoading = false;
  modelsLoading = false;

  makeSearch = '';
  modelSearch = '';
  yearSearch = '';

  makeOpen = false;
  modelOpen = false;
  yearOpen = false;

  private _makesLoaded = false;

  constructor(
    private readonly _catalog: VehicleCatalogService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _el: ElementRef,
  ) {}

  get filteredMakes(): MakeResponseDto[] {
    const q = this.makeSearch.toLowerCase();
    return q ? this.makes.filter(m => m.name.toLowerCase().includes(q)) : this.makes;
  }

  get filteredModels(): ModelResponseDto[] {
    const q = this.modelSearch.toLowerCase();
    return q ? this.models.filter(m => m.name.toLowerCase().includes(q)) : this.models;
  }

  get filteredYears(): number[] {
    const q = this.yearSearch;
    return q ? this.years.filter(y => String(y).includes(q)) : this.years;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this._el.nativeElement.contains(event.target)) {
      if (this.makeOpen || this.modelOpen || this.yearOpen) {
        this.makeOpen = false;
        this.modelOpen = false;
        this.yearOpen = false;
        this._syncSearchTexts();
        this._cdr.markForCheck();
      }
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.makeOpen || this.modelOpen || this.yearOpen) {
      this.makeOpen = false;
      this.modelOpen = false;
      this.yearOpen = false;
      this._syncSearchTexts();
      this._cdr.markForCheck();
    }
  }

  ngOnInit(): void {
    this.makesLoading = true;
    this._catalog.getMakes().pipe(untilDestroyed(this)).subscribe(makes => {
      this.makes = makes;
      this.makesLoading = false;
      this._makesLoaded = true;
      if (this.initialMake) this._preSelectMake();
      this._cdr.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialMake'] && this.initialMake && this._makesLoaded) {
      this._resetCascade();
      this._preSelectMake();
    }
  }

  openMakeDropdown(): void {
    this.makeOpen = true;
    this.modelOpen = false;
    this.yearOpen = false;
    this._cdr.markForCheck();
  }

  openModelDropdown(): void {
    if (!this.selectedMakeId || this.modelsLoading) return;
    this.makeOpen = false;
    this.modelOpen = true;
    this.yearOpen = false;
    this._cdr.markForCheck();
  }

  openYearDropdown(): void {
    this.makeOpen = false;
    this.modelOpen = false;
    this.yearOpen = true;
    this._cdr.markForCheck();
  }

  selectMake(make: MakeResponseDto): void {
    this.selectedMakeId = make.id;
    this.makeSearch = make.name;
    this.makeOpen = false;
    this.selectedModelId = null;
    this.selectedYearValue = null;
    this.modelSearch = '';
    this.yearSearch = '';
    this.models = [];
    this._emit();
    this.modelsLoading = true;
    this._cdr.markForCheck();
    this._catalog.getModels({ makeId: make.id }).pipe(untilDestroyed(this)).subscribe(models => {
      this.models = models;
      this.modelsLoading = false;
      this._cdr.markForCheck();
    });
  }

  selectModel(model: ModelResponseDto): void {
    this.selectedModelId = model.id;
    this.modelSearch = model.name;
    this.modelOpen = false;
    this._emit();
    this._cdr.markForCheck();
  }

  selectYear(year: number): void {
    this.selectedYearValue = year;
    this.yearSearch = String(year);
    this.yearOpen = false;
    this._emit();
    this._cdr.markForCheck();
  }

  clearMake(event: Event): void {
    event.stopPropagation();
    this._resetCascade();
    this.makeSearch = '';
    this._emit();
    this._cdr.markForCheck();
  }

  clearModel(event: Event): void {
    event.stopPropagation();
    this.selectedModelId = null;
    this.modelSearch = '';
    this._emit();
    this._cdr.markForCheck();
  }

  clearYear(event: Event): void {
    event.stopPropagation();
    this.selectedYearValue = null;
    this.yearSearch = '';
    this._emit();
    this._cdr.markForCheck();
  }

  onMakeInput(): void {
    this.makeOpen = true;
    if (!this.makeSearch) {
      this.selectedMakeId = null;
      this._resetCascade();
      this._emit();
    }
    this._cdr.markForCheck();
  }

  onModelInput(): void {
    this.modelOpen = true;
    if (!this.modelSearch) {
      this.selectedModelId = null;
      this._emit();
    }
    this._cdr.markForCheck();
  }

  onYearInput(): void {
    this.yearOpen = true;
    if (!this.yearSearch) {
      this.selectedYearValue = null;
      this._emit();
    }
    this._cdr.markForCheck();
  }

  private _syncSearchTexts(): void {
    const make = this.makes.find(m => m.id === this.selectedMakeId);
    const model = this.models.find(m => m.id === this.selectedModelId);
    this.makeSearch = make?.name ?? '';
    this.modelSearch = model?.name ?? '';
    this.yearSearch = this.selectedYearValue != null ? String(this.selectedYearValue) : '';
  }

  private _preSelectMake(): void {
    const make = this.makes.find(m => m.name.toLowerCase() === this.initialMake?.toLowerCase());
    if (!make) return;
    this.selectedMakeId = make.id;
    this.makeSearch = make.name;
    if (this.initialYear != null) {
      this.selectedYearValue = this.initialYear;
      this.yearSearch = String(this.initialYear);
    }
    this.modelsLoading = true;
    this._cdr.markForCheck();
    this._catalog.getModels({ makeId: make.id }).pipe(untilDestroyed(this)).subscribe(models => {
      this.models = models;
      this.modelsLoading = false;
      const model = models.find(m => m.name.toLowerCase() === this.initialModel?.toLowerCase());
      if (model) {
        this.selectedModelId = model.id;
        this.modelSearch = model.name;
      }
      this._cdr.markForCheck();
    });
  }

  private _resetCascade(): void {
    this.selectedMakeId = null;
    this.selectedModelId = null;
    this.models = [];
    this.modelSearch = '';
  }

  private _emit(): void {
    const make = this.makes.find(m => m.id === this.selectedMakeId);
    const model = this.models.find(m => m.id === this.selectedModelId);
    this.selectionChange.emit({
      make: make?.name ?? null,
      model: model?.name ?? null,
      year: this.selectedYearValue,
    });
  }
}
