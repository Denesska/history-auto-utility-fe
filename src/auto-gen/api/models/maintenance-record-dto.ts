/* tslint:disable */
/* eslint-disable */
export interface MaintenanceRecordDto {
  car_id: number;
  cost: number;
  description: string;
  expiry_date: string;
  id: number;
  mileage: number;
  service_category: 'OIL_CHANGE' | 'BRAKE_SERVICE' | 'TRANSMISSION_SERVICE' | 'TIRE_SERVICE' | 'OTHER';
  service_date: string;
  service_type: 'REPAIR' | 'MAINTENANCE' | 'IMPROVEMENT';
}
