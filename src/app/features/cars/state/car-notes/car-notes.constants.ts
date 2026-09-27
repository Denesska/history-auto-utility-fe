// Palette keys a note's `color` may take (null = default surface). Must match the
// backend's NOTE_COLORS in history-auto-utility-be/src/modules/car-note/dto/car-note-constants.ts.
export const NOTE_COLORS = ['coral', 'peach', 'sand', 'mint', 'sage', 'fog', 'storm', 'dusk', 'blossom', 'clay'] as const;

export type NoteColor = (typeof NOTE_COLORS)[number];
