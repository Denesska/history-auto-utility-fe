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

export type FuelTypeValue = typeof FUEL_TYPE_OPTIONS[number]['value'];
export type TransmissionValue = typeof TRANSMISSION_OPTIONS[number]['value'];
