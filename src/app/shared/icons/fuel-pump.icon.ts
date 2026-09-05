// Ionicons has no gas-pump glyph (its "flame-outline" was the closest stand-in,
// used before this file existed). Registered under FUEL_PUMP_ICON_NAME via
// addIcons({ [FUEL_PUMP_ICON_NAME]: FUEL_PUMP_ICON_SRC }) wherever ALIMENTARE/
// COMBUSTIBIL is shown, so `<ion-icon name="fuel-pump">` resolves like any
// built-in icon — same data-URI convention Ionicons itself uses for its icons.
export const FUEL_PUMP_ICON_NAME = 'fuel-pump';

export const FUEL_PUMP_ICON_SRC =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>" +
  "<rect x='3.5' y='4' width='9' height='16' rx='1.5'/>" +
  "<rect x='5.5' y='6.5' width='5' height='3.5' rx='0.6'/>" +
  "<line x1='3' y1='20.3' x2='13' y2='20.3'/>" +
  "<path d='M12.5 10H16V18'/>" +
  "<circle cx='17.5' cy='18' r='2.3'/>" +
  '</svg>';
