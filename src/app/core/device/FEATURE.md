# Device context and bottom-anchored UI clearance

## Functionality

- On an Android phone with the three-button navigation bar, floating "+" buttons, bottom sheets, action rows and pop-up menus no longer sit underneath the system navigation buttons. They stay fully visible and tappable on every screen, with the same look as before.
- The same applies to phones using gesture navigation (a bit less space is reserved), to the keyboard (no extra gap is reserved while it is open) and to the web version (nothing extra is reserved).
- Screens that show the app's bottom tab bar keep their content above the tab bar; screens that hide it keep their content above the system navigation bar.
- Temporary messages shown at the bottom (for example "press back again to exit") appear above the tab bar and the system navigation bar.

## Implementation

### DeviceContextService (`core/device/device-context.service.ts`)
Root-provided, signal-based, constructed at startup by `AppComponent`. Exposes:
- Static: `platform` ('android'|'ios'|'web'), `isNative`, `isPwa`, `os` {name, version}, `browser` {name, version} (userAgentData, UA fallback), `deviceModel` (Android UA token only; `@capacitor/device` is NOT installed, adding it would give real model/manufacturer).
- Live signals: `pointer`, `viewport`, `fontScale` (root font-size / 16), `safeArea` (raw top/bottom/left/right, max of `env()` probe and Capacitor-injected `--safe-area-inset-*`; zeros on web), `keyboardOpen` (@capacitor/keyboard listeners, native only), `bottomBarVisible` (set by `MainComponent.ngDoCheck`), `safeBottom`, `bottomBarHeight`, `bottomOffset`, `navigationMode` ('buttons' if native Android raw bottom inset >= 40px, 'gesture' if small non-zero, else 'unknown').
- `identity`: read-only summary computed from `AuthService.profile$` (signed in, auth method google/password from `google_id`) and `SessionContextService` (personal/business, org id). No second source of truth.
- Updates on resize, orientationchange, visualViewport resize, pointer media change and on any inline-style change of `<html>` (Capacitor's SystemBars plugin injects `--safe-area-inset-*` there without an event), plus re-measures at 0.3/1/2.5 s after start.

### Published CSS custom properties (on `<html>`, inline) and attributes
- `--hau-safe-bottom`: reliable system-nav clearance. Native Android: `max(raw inset, 48px)` (floor for OEMs, e.g. MIUI/HyperOS 3-button nav, that under-report the inset). 0 while the keyboard is open. Web: raw (0).
- `--hau-bottom-bar-height`: 64px when the shell tab bar is rendered (<1024px), else 0.
- `--hau-bottom-offset`: safe-bottom + bar height. For viewport-fixed things that sit above the tab bar (bottom toast).
- `--hau-page-safe-bottom`: safe-bottom only when no tab bar is rendered, else 0. For anything inside a routed page (the shell outlet already reserves the tab bar).
- `<html data-nav-mode="gesture|buttons|unknown" data-platform="android|ios|web" data-bottom-bar="visible|hidden" data-shell-fab="on|off">`. `data-bottom-bar` = shell tab bar rendered (<1024px); `data-shell-fab` = the routed page registered a `FabActionService` action. Page FABs are not driven by these attributes: templates guard each `ion-fab` with `@if (!device.pageFabHidden())` (`pageFabHidden` = bar visible && shell action registered, a signal on this service); `global.scss` only uses the attributes to trim the bottom padding that cleared the FAB. A new page FAB must use the same guard.
- `global.scss` declares CSS-only fallbacks (`--hau-safe-bottom` = `--ion-safe-area-bottom`) used before the service starts.

### RULE: bottom-anchored UI must use `--hau-bottom-offset` / `--hau-safe-bottom`
Never use a raw `env(safe-area-inset-bottom)` or `--ion-safe-area-bottom` for bottom clearance. Choose by container:
- Covers the whole viewport (fixed bottom sheet, fullscreen panel content, backdrop with bottom-aligned sheet): `--hau-safe-bottom`.
- Inside a routed page (sticky action rows, in-page editors, `ion-fab`): `--hau-page-safe-bottom`.
- Fixed to the viewport but should float above the tab bar too: `--hau-bottom-offset`.

### Where it is applied
- `ion-fab[vertical=bottom]` (global rule in `global.scss`): all list FABs (documents, car documents, maintenance, notes, wishlist, suppliers, blog).
- Ionic overlays (`ion-modal/action-sheet/popover/alert` get `--ion-safe-area-bottom: --hau-safe-bottom`; `ion-toast` gets `--hau-bottom-offset`).
- `<app-fullscreen-panel>` body bottom padding; `<app-dropdown>` / `<app-autocomplete>` CDK overlays via `cdkConnectedOverlayViewportMargin`.
- Shell: `.hau-bottom-tabs`, `.hau-fab`, `.main-outlet` margin now use `--hau-safe-bottom` (replaces the former `body.hau-native` 48px floor blocks).
- Sheets/footers: reminder-mute sheet, update-mileage sheet, remove-car sheet, car details sheets, photo lightbox, loader, add-maintenance part-sheet footer, notes FAB and editor footer, sale-contract wizard actions, sent-destinations.

### Native side
No `android/` change was needed: Capacitor 8's built-in `SystemBars` plugin (`insetsHandling: 'css'` in `capacitor.config.ts`) already injects `--safe-area-inset-*` (integer CSS px). The failure was in the web layer (pages used the raw/under-reported value without the 48px floor that only the shell had). Web-only change: ship via the normal web build; an APK rebuild is only needed to bundle that web build (`cap sync`).

### Known limits
- The 48px floor also applies on gesture-nav Android phones (as the shell already did).
- Device model/manufacturer need `@capacitor/device`.
