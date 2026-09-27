# Label input (etichete)

## Functionality

A small field for tagging something (currently: notes) with short, free-form labels, in the style of Google Keep. It works in two ways:

**Editing labels**
- The labels already attached appear as small rounded chips, each with an × to remove it. After them sits a text field for adding more; everything wraps onto extra lines when space runs out, so it fits on a phone screen or in a note editor's footer.
- As you type, a small list suggests labels that already exist, best matches first (labels starting with what you typed come before ones that only contain it). Labels already attached are not suggested again. If a count is shown next to a suggestion, it is how many items already use that label.
- A comma ends a label: type `service,` and "service" becomes a chip, the field clears and stays ready for the next one. Pressing Enter does the same, and so does picking a suggestion with the mouse, Enter or Tab. Pasting `a, b, c` adds three labels at once. Leaving the field adds whatever was typed.
- If what you typed doesn't exist yet, the last row of the list offers "Create “…”".
- Backspace in an empty field removes the last chip.
- Labels are never duplicated regardless of upper/lower case; if a label already exists with a different capitalisation, the existing spelling is used.
- Limits: up to 20 labels, each up to 40 characters (the field disappears once the limit is reached).
- Arrow keys move through the suggestions, Escape closes the list without closing the surrounding editor.
- The suggestion list opens upwards when there isn't enough room below (e.g. at the bottom of a sheet).
- In read-only views the chips are shown without the field or the × buttons.

**Filtering by label**
- A search-style field with a tag icon. Typing narrows the list of existing labels; picking one applies it as a filter and clears the field. If nothing matches, the list says "No labels found". No new labels can be created here.

## Implementation

- Location: `src/app/shared/component/label-input/label-input.component.{ts,html,scss}`, standalone, selector `<app-label-input>`, `OnPush`.
- Public API:
  - Inputs: `labels: string[]`, `suggestions: string[]` (host passes most-used first — order is kept within the prefix/contains groups), `counts?: Record<string, number>`, `placeholder: string` (already translated), `multiple = true`, `readonly = false`, `maxLabels = 20`, `maxLength = 40`, `ariaLabel = ''`.
  - Outputs: `labelsChange: EventEmitter<string[]>` (multiple mode; always a new array, emitted once per commit even when several labels are added), `picked: EventEmitter<string>` (single mode).
  - Because it's `OnPush`, the host must pass new array references for `labels`/`suggestions`.
- i18n keys (host-owned JSON): `labelInput.create` (`{{label}}`), `labelInput.remove` (`{{label}}`), `labelInput.noMatches`.
- Visual language: panel/option styles mirror `<app-dropdown>` (`.dd-panel`/`.dd-option`): `--hau-surface`, `--hau-border`, `--hau-radius-md`, `--hau-shadow-md`, hover `--hau-hover-bg`, highlighted row `--hau-primary-soft` + `--hau-primary`. Single mode's field copies the dropdown's pill trigger. Everything is token-driven, so light / dark / bmw themes need no overrides.
- Input value is written to the DOM directly (`_setText`) as well as bound, because after a comma commit the model value can stay `''` while the DOM holds `','` — a plain `[value]` binding wouldn't notice.
- Comma handling happens in the `input` event (not `keydown`), since Android soft keyboards report `key === 'Unidentified'` / keyCode 229. Paste containing commas is intercepted separately so the last segment is committed too. No `maxlength` attribute (it would block typing the separating comma); length is clamped in code.
- Panel rows use `mousedown.preventDefault` so the input never blurs before a click lands; outside clicks close via a `document:click` listener. Escape calls `stopPropagation()` only when the panel was actually open.
- Drop-up is decided once on open by comparing the host's rect against `visualViewport.height` (keyboard-aware) and `PANEL_MAX_HEIGHT` (keep it in sync with `.li-panel` `max-height`).
- Known limitation: the panel is `position: absolute` inside the component, so an ancestor with `overflow: hidden` will clip it — keep the host container's overflow visible around the field.
- Enter with Ctrl/Cmd is not swallowed (host save shortcuts) but flushes pending text into `labels` first.
