import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddMaintenancePanelComponent } from '@hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-maintenance-form',
  template: `
    <app-add-maintenance-panel
      [selectedCarId]="carId"
      [cars]="(cars$ | async) ?? []"
      [submitting]="(submitting$ | async) ?? false"
      [lockCar]="!!carId"
      (closed)="goBack()"
      (submitted)="goBack()">
    </app-add-maintenance-panel>
  `,
  imports: [AsyncPipe, AddMaintenancePanelComponent],
})
export class MaintenanceFormComponent implements OnInit {
  readonly cars$ = this._facade.cars$;
  readonly submitting$ = this._facade.submitting$;

  carId: number | null = null;

  constructor(
    private readonly _facade: MaintenanceFacade,
    private readonly _route: ActivatedRoute,
    private readonly _navCtrl: NavController,
  ) {}

  ngOnInit(): void {
    const carId = this._route.snapshot.queryParamMap.get('carId');
    this.carId = carId ? Number(carId) : null;
    this._facade.loadAll();
  }

  goBack(): void {
    void this._navCtrl.back();
  }
}
