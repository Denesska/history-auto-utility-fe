# Swipe actions (list rows)

## Functionality

Most record lists in the app (maintenance history, documents, journal/blog
entries, the garage car list in its "list" view, the supplier directory,
and organization member/vendor rows) show each record as a row you can
**swipe left** to reveal quick actions, instead of opening the record first.

- Swiping a row left (or using the keyboard: left arrow to open, Escape to
  close, when a row has focus) slides the row's content aside and reveals a
  strip of square buttons at the trailing edge — one per available action
  (View, Edit, Renew, Download, Delete, depending on what that list
  supports).
- **Each button shows only its icon, never a text label.** The action's
  name (e.g. "Edit", "Delete", "Renew this document", "Download file")
  is still attached as the button's accessible name, so screen readers
  announce it and, on devices/browsers that support it, a long press still
  shows the label as a tooltip.
- The buttons are a consistent, comfortable square-ish touch target
  (roughly 56px wide) regardless of which action or which list they appear
  in, so the swipe strip looks and behaves the same everywhere in the app.
- The very first time a swipeable row appears on screen for a given
  device, it gives a one-time hint animation (a small nudge left and back)
  so the user discovers the gesture exists. This only happens once ever per
  device/browser, and is skipped entirely if the user has "reduce motion"
  turned on.
- Tapping elsewhere, pressing Escape, or picking an action closes the
  swipe strip again.

**Not covered by this gesture:** some rows also have a separate,
always-visible desktop affordance (small icon buttons that appear on
hover, or — in the Journal's card view — a bottom bar with icon **and**
text for Pin/Edit/Delete). Those are a different, non-swipe UI pattern and
intentionally keep their text labels; they are not affected by the
icon-only rule above.

## Implementation

- **Component**: `app-swipe-actions`
  (`swipe-actions.component.ts`) wraps Ionic's `ion-item-sliding` /
  `ion-item-options` around whatever row markup is projected into it via
  `<ng-content>`. It is the single implementation of the swipe gesture in
  the app — nothing else in the codebase defines its own
  `ion-item-sliding`.
- **Inputs**: `showView`, `showDelete`, `showRenew` (+ `renewLabel`),
  `showDownload` (+ `downloadLabel`). The "edit" option has no toggle and
  always renders (known gap — a consumer that doesn't want it can't hide
  it today). **Output**: `action` (`SwipeAction` =
  `'view' | 'edit' | 'renew' | 'download' | 'delete'`).
- **Icon-only markup**: every `ion-item-option` contains only an
  `<ion-icon>`, no text node. The accessible name comes from
  `[attr.aria-label]`, sourced from Transloco either directly
  (`common.view` / `common.edit` / `common.delete`) or via a caller-supplied
  `renewLabel` / `downloadLabel` string built from that row's own
  domain-specific key (e.g. `documents.list.downloadFile`). Do not add a
  visible text node next to the icon — if a new action needs a label,
  thread it through as the `aria-label`, the same way the existing ones do.
- **Sizing**: `ion-item-option { min-width: 56px }` and a shared
  `ion-item-option ion-icon { font-size: 1.2rem }` apply to every action
  across every consumer, so touch targets stay visually consistent
  app-wide. Per-action color is set with small modifier classes
  (`.edit-opt`, `.renew-opt`, `.download-opt`) or Ionic's own
  `color="primary"` / `color="danger"` for view/delete.
- **Onboarding hint**: `swipe-hint-onboarding.service.ts`
  (`SwipeHintOnboardingService`) gates the one-time nudge animation with a
  `localStorage` flag (`hau.swipe-actions-hint.v1`) and a
  `prefers-reduced-motion` check, claimed the first time any row's
  `ngAfterViewInit` successfully runs the hint.
- **Consumers**:
  - Direct: `features/cars/component/car-row-item/` (Garage list-view
    rows — view + edit), `features/blog/blog-entry-item/` (Journal rows —
    view + delete swipe; the card's own bottom Pin/Edit/Delete bar is
    separate, always-visible markup, not `ion-item-options`, and
    intentionally keeps its text).
  - Via `shared/component/action-list-row/` (adds a thumbnail + tap-to-open
    row body and its own desktop-hover icon-only edit/delete buttons, then
    wraps `<app-swipe-actions>` for the swipe layer): used by Maintenance
    history (`features/maintenance/`), the Supplier directory
    (`features/supplier/`), Organization vendor/member rows
    (`features/organization/`), and the Documents list (via
    `shared/component/document-list-row/`, which itself wraps
    `action-list-row`).
- **2026-10-08**: Verified (live on dev via Playwright for the Documents
  list and the Garage list view, and by source review for Maintenance
  history, Journal, Supplier and Organization, which all compose this same
  component) that swipe actions are already icon-only with proper
  `aria-label`s and consistent ~56px touch targets everywhere. That
  behavior was already in place from commit `1b96b4a` ("Polish swipe lists
  and mobile navigation", 2026-09-09) — no source changes were required for
  the icon-only request; this file documents the current, already-compliant
  state rather than a change.
