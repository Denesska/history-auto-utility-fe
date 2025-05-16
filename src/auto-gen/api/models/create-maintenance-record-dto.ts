/* tslint:disable */
/* eslint-disable */
export interface CreateMaintenanceRecordDto {
  car_id: number;
  cost: number;
  description: string;
  expiry_date: string;
  mileage: number;
  service_category: 'OIL_CHANGE' | 'BRAKE_SERVICE' | 'TRANSMISSION_SERVICE' | 'TIRE_SERVICE' | 'OTHER';
  service_date: string;
  service_type: 'REPAIR' | 'MAINTENANCE' | 'IMPROVEMENT';
}
