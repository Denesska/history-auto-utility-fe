# HAU Frontend — Conventions

Frontend-specific rules for `history-auto-utility-fe`. These apply on top of the
root `/var/www/hau_app/CLAUDE.md` (env safety, i18n, git workflow). This file
will keep growing — next up: app structure and a map of which shared component
to use for which UI pattern.

---

## Safe-area / status bar rule (native mobile)

**Any UI element positioned at or near the edge of the screen — a header, a sticky
navbar, a floating button, a full-screen takeover panel — must account for the
device's safe-area insets. Never assume a fixed pixel value is enough clearance
from the top or bottom of the viewport.**

This app runs as a native Capacitor app (Android/iOS, see `capacitor.config.ts` →
`SystemBars: { insetsHandling: 'css' }`) with an edge-to-edge WebView: the page
draws *underneath* the OS status bar and (on some devices) the bottom gesture
bar. CSS is the only thing standing between your UI and the phone's own clock/
battery/signal icons.

### Where the values come from

`src/global.scss` bridges Capacitor's injected `--safe-area-inset-*` (and the
web `env(safe-area-inset-*)` fallback) into Ionic's own variables:

```scss
html {
  --ion-safe-area-top:    var(--safe-area-inset-top,    env(safe-area-inset-top,    0px));
  --ion-safe-area-bottom: var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px));
  --ion-safe-area-left:   var(--safe-area-inset-left,   env(safe-area-inset-left,   0px));
  --ion-safe-area-right:  var(--safe-area-inset-right,  env(safe-area-inset-right,  0px));
}
```

Always consume `var(--ion-safe-area-top, 0px)` / `var(--ion-safe-area-bottom, 0px)`
(never the raw `env()` unless you're outside Ionic's scope entirely) — and
always keep the `, 0px` fallback so it's harmless on web/PWA, where the inset is
usually `0` anyway.

### The pattern to use

- **Top-edge content**: `padding-top: calc(<your base padding> + var(--ion-safe-area-top, 0px));`
- **Bottom-edge content**: `padding-bottom: calc(<your base padding> + var(--ion-safe-area-bottom, 0px));`

Bottom-edge handling has been correct in this app from early on (see
`.hau-bottom-tabs` and `.mobile-notif-sheet` in `main.component.scss`, or
`remove-car-panel.component.scss`) — always add the *full* inset, no arbitrary
multiplier. Top-edge handling was the one that broke (see incident below) —
mirror the same full-value pattern there too.

### Where this already lives (don't re-derive it, extend it)

- **Every normal routed page** (Garage, Documents, Reports, Settings, Maintenance,
  Plan, Notes, Sharing, Journal, Blog, and per-car sub-pages) goes through the
  shared shell in `features/main/main.component.html`/`.scss`. Its floating
  header (`.hau-header--minimal`) and the content's top clearance
  (`.main-outlet--floating-header { --padding-top: ... }`) already fold in
  `var(--ion-safe-area-top)`. If you touch that file, don't strip the safe-area
  term back out.
- **Full-screen takeover panels** (a panel that covers the whole viewport above
  the routed shell, `position: fixed; inset: 0`, not a routed page and not a
  bottom sheet) — use `shared/component/fullscreen-panel/` (`<app-fullscreen-panel>`).
  It owns the fixed/inset host positioning *and* the safe-area-aware sticky
  navbar padding, with `[title]` + `fspStart`/`fspEnd` projected-content slots
  for the navbar actions. **Do not hand-roll a new `position: fixed; inset: 0`
  panel with its own navbar** — that's exactly how this bug happened twice
  independently (see incident below). Extend `<app-fullscreen-panel>` if it's
  missing something (e.g. a new slot), don't fork it.
- **Bottom sheets** (anchored with `bottom: 0`, don't reach the top of the
  screen — e.g. `remove-car-panel`, the nested "Piesă nouă" sheet in
  `add-maintenance-panel`) don't need top safe-area handling, only bottom.
- **The shared header/back button** (`MainComponent`, `.hau-header--minimal`
  in `main.component.scss`) sits in normal document flow on every route except
  the car hub root, and reserves real space automatically — a routed page never
  needs its own top-clearance CSS to avoid the back button, on any device, for
  any button size. Don't reintroduce per-page compensation (`--padding-top`
  overrides, hand-tuned margins) to work around it; if a page's content feels
  misaligned under the header, fix the header, not the page. See the
  2026-09-03 incident below for why this is a hard rule now, not a preference.
- **The back button is icon-only, everywhere, on purpose** — a plain round
  outlined arrow (`ion-back-button` with `text=""`, `border-radius: 50%`), no
  destination label, no per-page/per-route wording. It used to render a text
  pill (car name, "Istoric", "Garaj", ...) computed from the current route —
  that logic (`scopedCarName`, `backSegmentLabelKey`, `SEGMENT_LABEL_KEYS`) was
  removed on 2026-09-03 because with the header already uniform, "where does
  back go" is obvious from context and doesn't need spelling out. Don't add a
  `[text]` binding back to `ion-back-button` for a new scoped route — keep it
  icon-only.
- **Native vs. web is decided in exactly one place**: `--ion-safe-area-*`
  default to `0px` in `global.scss` and only resolve to the real inset under
  `body.hau-native` (set once, in `app.component.ts`, when
  `Capacitor.isNativePlatform()`). Every consumer (`var(--ion-safe-area-top,
  0px)`, `var(--ion-safe-area-bottom, 0px)`, ...) is automatically correct on
  both without knowing which platform it's on — don't add a `Capacitor.
  isNativePlatform()` check next to a safe-area usage; that check already
  happened upstream.

### Incident (2026-09-03): back-button pill overlapping page content, and safe-area padding wasted on web

Two related bugs, same root cause — the shared header was fighting its own
layout instead of using it:

1. `MainComponent`'s shared header rendered the back button as a floating,
   frosted-glass pill, **absolutely positioned** over the page (deliberately,
   so the app "feels like it has no header at all"). The content clearance
   reserved above it was a *guessed* `16px`, not a measurement — the pill
   itself renders at roughly 34px tall. On `cars-form` (Adaugă/Editează
   vehicul) and `document-detail`, whose own breadcrumb sits close under the
   header, the pill visibly overlapped the breadcrumb text. Same class of bug
   as the 2026-08-15 incident below, smaller scale — another hand-tuned pixel
   constant that turned out to be wrong.
2. Separately: `index.html` sets `viewport-fit=cover` (required so the native
   WebView can draw edge-to-edge at all) — but that same meta tag makes mobile
   Safari/Chrome report a non-zero `env(safe-area-inset-top)` in a *plain
   browser tab* too, on notched phones. The browser's own address bar already
   pushes page content below the notch there, so on web that inset was pure
   dead space stacked on top of the browser's own chrome, for no reason.

Fix, for both: stop compensating per-page and stop guessing. `.main-page`
(the `ion-page` wrapping `ion-header` + `.main-outlet`) was already a flex
column — the header now stays in *normal* document flow instead of
`position: absolute`, so the browser reserves exactly the space it actually
needs, for every route, automatically; no page anywhere needs its own
top-clearance CSS again (`document-detail` used to fight the old mechanism
with `--padding-top: 0 !important`, which is gone now — nothing to fight).
The one deliberate exception is the car hub root (`.hau-header--overlay`),
whose hero photo is meant to bleed under the header on purpose — that route
keeps the absolute/overlay behavior. And `--ion-safe-area-*` now default to
`0px` and only pick up the real inset under `body.hau-native` (see the bullet
above) — correct on web and native without either place asking "am I native?"
itself.

### Incident (2026-08-15): status bar overlap shipped in the Garaj redesign

The "Redesign Garaj navigation shell" commit (`036beb2`, 2026-08-14) replaced
the old per-page headers with a shared floating header + a hardcoded
`--padding-top: 48px` on page content. That fixed value didn't include
`var(--ion-safe-area-top)`, so on edge-to-edge Android the "My Garage" title
(and every other page's title) rendered under the phone's status bar. The Car
Details hero photo intentionally bleeds to the true top edge of the screen for
a visual effect — its fullscreen/expand button (`photo-carousel.component.scss`
`.pc-expand`) sat at a flat `top: 8px` with no inset awareness, landing right on
top of the battery/signal icons. Two more panels
(`add-maintenance-panel`, `reports-records-panel`) turned out to have
independently hand-rolled the exact same `position: fixed; inset: 0` + sticky
navbar pattern, each with its own copy of the safe-area fix (or lack of it) —
which is why that pattern was extracted into `<app-fullscreen-panel>` rather
than patched three separate times.

**Rule going forward:** before adding any new header, sticky bar, floating
button, or full-screen panel, ask "what happens on a device where the status
bar overlaps this pixel?" — and either reuse `<app-fullscreen-panel>` /
`main.component`'s existing floating-header mechanism, or add the
`var(--ion-safe-area-top|bottom, 0px)` term yourself, full value, no shortcuts.
