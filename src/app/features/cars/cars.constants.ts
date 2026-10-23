export const MAX_YEAR_CAR_CREATE: number = (new Date()).getFullYear();
export const MIN_YEAR_CAR_CREATE: number = 1885;
export const MAX_PHOTOS_PER_CAR = 13;

export const FUEL_TYPE_OPTIONS = [
  { value: 'PETROL', label: 'Benzină' },
  { value: 'DIESEL', label: 'Motorină' },
  { value: 'HYBRID', label: 'Hibrid' },
  { value: 'PLUGIN_HYBRID', label: 'Hibrid Plug-in' },
  { value: 'ELECTRIC', label: 'Electric' },
  { value: 'LPG', label: 'GPL' },
] as const;

export const TRANSMISSION_OPTIONS = [
  { value: 'MANUAL', label: 'Manuală' },
  { value: 'AUTOMATIC', label: 'Automată' },
  { value: 'SEMI_AUTOMATIC', label: 'Semi-automată' },
] as const;

export const DRIVETRAIN_VALUES = ['FRONT', 'REAR', 'ALL_WHEEL'] as const;

// Technical codes, not translatable — used as both value and label.
export const OIL_VISCOSITY_OPTIONS = [
  '0W-16', '0W-20', '0W-30', '0W-40', '5W-20', '5W-30', '5W-40',
  '10W-40', '10W-60', '15W-40', '20W-50',
].map(v => ({ value: v, label: v }));

export const COLOR_OPTIONS = [
  { value: 'Alb', label: 'Alb', hex: '#FFFFFF' },
  { value: 'Negru', label: 'Negru', hex: '#000000' },
  { value: 'Gri', label: 'Gri', hex: '#808080' },
  { value: 'Argintiu', label: 'Argintiu', hex: '#C0C0C0' },
  { value: 'Roșu', label: 'Roșu', hex: '#CC0000' },
  { value: 'Albastru', label: 'Albastru', hex: '#0000CC' },
  { value: 'Verde', label: 'Verde', hex: '#006600' },
  { value: 'Maro', label: 'Maro', hex: '#8B4513' },
  { value: 'Bej', label: 'Bej', hex: '#F5F5DC' },
  { value: 'Galben', label: 'Galben', hex: '#FFD700' },
  { value: 'Portocaliu', label: 'Portocaliu', hex: '#FF8C00' },
  { value: 'Violet', label: 'Violet', hex: '#6A0DAD' },
  { value: 'Alt', label: 'Altă culoare', hex: '#CCCCCC' },
] as const;

export const CURRENCY_OPTIONS = [
  { value: 'EUR', label: 'EUR' },
  { value: 'RON', label: 'RON' },
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
  { value: 'MDL', label: 'MDL' },
] as const;

export type FuelTypeValue = typeof FUEL_TYPE_OPTIONS[number]['value'];
export type DrivetrainValue = typeof DRIVETRAIN_VALUES[number];
export type TransmissionValue = typeof TRANSMISSION_OPTIONS[number]['value'];
