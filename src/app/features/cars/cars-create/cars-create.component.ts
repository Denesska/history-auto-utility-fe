import { Component } from '@angular/core';
import { CarsFormComponent } from '@hau/features/cars/component/cars-form/cars-form.component';

@Component({
  selector: 'app-cars-create',
  templateUrl: 'cars-create.component.html',
  styleUrls: ['./cars-create.component.scss'],
  imports: [CarsFormComponent],
  standalone: true,
})
export class CarsCreateComponent {}
