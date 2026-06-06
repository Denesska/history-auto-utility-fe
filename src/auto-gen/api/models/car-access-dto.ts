export type CarAccessRole = 'OWNER' | 'FULL' | 'USER' | 'MAINTENANCE' | 'VIEWER';

export interface CarAccessUserDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  picture?: string;
}

export interface CarAccessDto {
  id: number;
  car_id: number;
  role: CarAccessRole;
  user: CarAccessUserDto;
  invited_by: CarAccessUserDto;
  accepted_at: string | null;
  created_at: string;
}

export interface SharedCarDto {
  id: number;
  make: string;
  model: string;
  variant: string | null;
  year: number;
  license_plate: string;
  shared_role: CarAccessRole;
  accepted_at: string | null;
}
