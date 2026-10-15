# Sent destinations

## Functionality

When a place is shared from Google Maps to the app, it is sent to the car's navigation. The "Sent destinations" screen lists the places shared recently, newest first (up to 100), each with its name (or coordinates when it has no name) and the date and time it was sent. Each entry has a "Send again" button that sends that place to the car once more, so it shows up as a fresh destination. Sharing a place from Maps also adds it to the list immediately.

The screen is reachable from the sidebar and from the Navigation card in Settings, in both personal and business accounts. Pull down to refresh. If the relay cannot be reached, the last saved list is shown with a notice that it may be out of date; with no saved list, an error with a retry button is shown. When the navigation relay is not configured for the build, the screen says history is unavailable.

The list is the history of the one navigation channel configured for the app, not a per-user list: everyone using the same build sees the same destinations and can resend them to the car.

## Implementation

- Frontend: `features/sent-destinations/` (route `/main/sent-destinations`, `data: BOTH`), state in `core/nav-destination-history.service.ts` (signals, request de-duplication, validation of every item, local cache in `localStorage` keyed by endpoint, de-duplicated by rounded coordinates), share hook in `core/nav-share.service.ts` (`shareSucceeded`). Strings under `navHistory.*` in `en.json`/`ro.json`.
- Backend: `history-auto-utility-be/src/modules/nav-relay/` — `GET /n/:slug/history` (last 100 rows of `nav_destinations`, newest first) and `POST /n/:slug/history/:id/resend` (copies a row of the same slug into a new row, so the car's increasing-id poll picks it up). Both are public like the rest of the relay: the long unguessable slug is the only credential, and the id lookup is always filtered by slug. No schema change.
- Limitation: because the slug ships inside the frontend build, every app user effectively holds the channel credential.
