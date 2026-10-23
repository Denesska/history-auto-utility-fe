# Device context and bottom-anchored UI clearance

## Functionality

- On an Android phone with the three-button navigation bar, floating "+" buttons, bottom sheets, action rows and pop-up menus no longer sit underneath the system navigation buttons. They stay fully visible and tappable on every screen, with the same look as before.
- With gesture navigation nothing is lifted: the bottom bar and buttons sit at the bottom of the screen (only the small real gesture area is respected). No extra gap is reserved while the keyboard is open or on the web version.
- Screens that show the app's bottom tab bar keep their content above the tab bar; screens that hide it keep their content above the system navigation bar.
- Temporary messages shown at the bottom (for example "press back again to exit") appear above the tab bar and the system navigation bar.

## Implementation

### DeviceContextService (`core/device/device-context.service.ts`)
Root-provided, signal-based, constructed at startup by `AppComponent`. Exposes:
- Static: `platform` ('android'|'ios'|'web'), `isNative`, `isPwa`, `os` {name, version}, `browser` {name, version} (userAgentData, UA fallback), `deviceModel` (Android UA token only; `@capacitor/device` is NOT installed, adding it would give real model/manufacturer).
- Live signals: `pointer`, `viewport`, `fontScale` (root font-size / 16), `safeArea` (raw top/bottom/left/right, max of `env()` probe and Capacitor-injected `--safe-area-inset-*`; zeros on web), `keyboardOpen` (@capacitor/keyboard listeners, native only), `bottomBarVisible` (set by `MainComponent.ngDoCheck`), `safeBottom`, `bottomBarHeight`, `bottomOffset`, `navigationMode` (native mode from `MainActivity`, else fallback heuristic (raw bottom inset >= 40px => 'buttons', small non-zero => 'gesture', else 'unknown')).
- `identity`: read-only summary computed from `AuthService.profile$` (signed in, auth method google/password from `google_id`) and `SessionContextService` (personal/business, org id). No second source of truth.
- Updates on resize, orientationchange, visualViewport resize, pointer media change and on any inline-style change of `<html>` (Capacitor's SystemBars plugin injects `--safe-area-inset-*` there without an event), plus re-measures at 0.3/1/2.5 s after start.

### Published CSS custom properties (on `<html>`, inline) and attributes
- `--hau-safe-bottom`: reliable system-nav clearance. Native Android: 3/2-button nav => `max(raw inset, real nav-bar inset)`, 48px floor only if both are 0 (OEMs such as MIUI/HyperOS under-report); gesture nav => raw inset, NO floor; mode unknown (old APK) => raw inset, or 48px when it is 0. 0 while the keyboard is open. Web: raw (0).
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
`android/.../MainActivity.java` exposes `window.HauNative.getNavigation()` (a `@JavascriptInterface`, JSON `{mode, navBarBottom}` in CSS px). `mode` comes from `Settings.Secure 'navigation_mode'` (0/1 => buttons, 2 => gesture), falling back to `WindowInsetsCompat` tappableElement/navigationBars bottom insets. Values are cached from a decor-view global-layout listener (no WindowInsets listener, so Capacitor's SystemBars handling is untouched); the service pulls it on every refresh. Requires an APK rebuild + `cap sync`.

Capacitor's SystemBars: Capacitor 8's built-in `SystemBars` plugin (`insetsHandling: 'css'` in `capacitor.config.ts`) already injects `--safe-area-inset-*` (integer CSS px). The original failure was in the web layer (pages used the raw/under-reported value without the floor that only the shell had).

### Known limits
- Old APKs (no `HauNative`) use the raw inset, with a 48px floor only when it is 0.
- Device model/manufacturer need `@capacitor/device`.
