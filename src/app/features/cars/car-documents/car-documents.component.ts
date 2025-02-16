import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentListItemComponent } from '@hau/features/cars/component/document-list-item/document-list-item.component';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
} from '@ionic/angular/standalone';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-car-documents',
  templateUrl: 'car-documents.component.html',
  styleUrls: ['./car-documents.component.scss'],
  imports: [
    DocumentListItemComponent,
    IonFabButton,
    IonIcon,
    IonFab,
    IonList,
    AsyncPipe,
  ],
  standalone: true,
})
export class CarDocumentsComponent implements OnInit {
  readonly carDocuments$ = this._carDetailFacade.carDocuments$;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCarDocuments(params['id']);
    });
  }

  addDocument(): void {
    // TODO - add document here
  }
}
