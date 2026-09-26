import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddMaintenancePanelComponent } from '@hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { CarWishesFacade } from '@hau/features/cars/state/car-wishes/car-wishes.facade';
import { ServiceType } from '@hau/autogenapi/models';
import { NavController } from '@ionic/angular/standalone';
import { take } from 'rxjs';

@Component({
  selector: 'app-maintenance-form',
  template: `
    <app-add-maintenance-panel
      [selectedCarId]="carId"
      [initialServiceType]="initialServiceType"
      [initialTitle]="initialTitle"
      [initialCost]="initialCost"
      [cars]="(cars$ | async) ?? []"
      [submitting]="(submitting$ | async) ?? false"
      (closed)="goBack()"
      (submitted)="onSubmitted()">
    </app-add-maintenance-panel>
  `,
  imports: [AsyncPipe, AddMaintenancePanelComponent],
})
export class MaintenanceFormComponent implements OnInit {
  readonly cars$ = this._facade.cars$;
  readonly submitting$ = this._facade.submitting$;

  carId: number | null = null;
  initialServiceType: ServiceType | null = null;
  initialTitle: string | null = null;
  initialCost: number | null = null;

  /** Set when the form was opened by completing a wishlist item — see onSubmitted(). */
  private _wishId: number | null = null;

  constructor(
    private readonly _facade: MaintenanceFacade,
    private readonly _wishesFacade: CarWishesFacade,
    private readonly _route: ActivatedRoute,
    private readonly _navCtrl: NavController,
  ) {}

  ngOnInit(): void {
    const params = this._route.snapshot.queryParamMap;
    const carId = params.get('carId');
    this.carId = carId ? Number(carId) : null;
    this.initialServiceType = params.get('serviceType') as ServiceType | null;
    // Wishlist hand-off: a wish's title and estimate seed the record, and the wish
    // itself is only marked done once the record is actually saved (see onSubmitted).
    this.initialTitle = params.get('title');
    const cost = params.get('cost');
    this.initialCost = cost ? Number(cost) : null;
    const wishId = params.get('wishId');
    this._wishId = wishId ? Number(wishId) : null;
    this._facade.loadAll();
  }

  onSubmitted(): void {
    if (this._wishId != null && this.carId != null) {
      this._wishesFacade.setWishStatus(this.carId, this._wishId, 'DONE').pipe(take(1)).subscribe({
        next: () => this.goBack(),
        // The record saved fine; failing to tick off the wish shouldn't strand the
        // user on the form — they can mark it done from the wishlist by hand.
        error: () => this.goBack(),
      });
      return;
    }
    this.goBack();
  }

  goBack(): void {
    void this._navCtrl.back();
  }
}
