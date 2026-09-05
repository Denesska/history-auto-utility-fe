# Audit arhitectural — plan de lucru (history-auto-utility-fe)

_Ultima actualizare: 2026-09-02_

Listă de lucru derivată din auditul arhitectural al frontend-ului (vezi raportul vizual publicat în conversație pentru diagrame și context complet). Bifează pe măsură ce se rezolvă. Fiecare item are fișierele/liniile exacte găsite la momentul auditului — verifică din nou înainte de a acționa, codul se schimbă.

## Prioritate 1 — Fundație arhitecturală (limite de modul / direcție de dependințe)

- [ ] **Elimină bucla `shared → features`.** `shared/` ar trebui să fie stratul de bază pe care orice feature îl poate importa fără riscul de a trage după el alt feature — în prezent nu e cazul: mută funcțiile generice din `features/cars/cars.utils.ts` (`formatDate`, `formatMileage`, `daysUntil`, `daysAgo`, `docUrgencyClass`, `getDocExpiry`) în `shared/utils/`; mută `document-type.config.ts` (documents) și `CATEGORY_CONFIG` din `features/maintenance/maintenance.component.ts` într-un loc neutru (`shared/` sau un modul de config dedicat).
  Afectează: `shared/utils/deadline-items.util.ts:2-3`, `shared/utils/plan-items.util.ts:2-3`, `shared/utils/attention-items.util.ts:2`, `shared/component/doc-type-badge/doc-type-badge.component.ts:8`, `shared/component/doc-expiry-row/doc-expiry-row.component.ts:3`.
  Rezultat concret al buclei azi: `cars-list.component.ts` → `shared/utils/attention-items.util.ts` → `features/cars/cars.utils.ts` (revine în cars); `maintenance/plan.component.ts` → `shared/utils/plan-items.util.ts` → `features/cars/cars.utils.ts` **și** `features/maintenance/maintenance.component.ts` (buclă cross-feature prin shared).

- [ ] **Elimină `core → features` (direcție inversă).** `core/notifications-socket.service.ts:6` importă `AuthService` din `features/auth`. `core/` trebuie să poată fi înțeles și pornit fără să știe de niciun feature. Injectează prin abstracție (token/interfață în core, implementare oferită de auth) sau mută serviciul de socket în `features/auth` / `shared`.

- [ ] **Mută `core/car-maintenance-settings.service.ts` din `core/` în `features/maintenance/`.** E specific domeniului de mentenanță (endpoint `/car` pentru setări de tracking), nu infrastructură generică — nu ar trebui să stea alături de servicii cu adevărat transversale (theme, push, upload).

- [ ] **Decuplează `cars ↔ documents` și `cars ↔ maintenance`.** `features/cars/cars.routes.ts:5-6` provizionează direct `MaintenanceFacade`/`MaintenanceState` din interiorul feature-ului `cars` — mută acest wiring cross-feature în `main.routes.ts` (composition root), exact cum se face deja pentru `CarListFacade`/`DocumentsFacade`/`BlogFacade`. Referințe la `DOCUMENTS_ROUTES`/`MAINTENANCE_ROUTES`/`CARS_ROUTES` (doar path-uri, cuplaj mai mic) rămân o discuție separată — de luat în calcul un registry central de rute dacă tot se ating des.

- [ ] **Adaugă o regulă eslint care impune graniețele** (`eslint-plugin-boundaries` sau `no-restricted-imports` cu pattern pe `@hau/features/*`): interzice `shared/*` → `features/*`, `core/*` → `features/*`, și import direct între foldere de feature diferite. Fără asta orice reparare de azi poate fi stricată din nou mâine — proiectul nu are în acest moment niciun fișier `index.ts` (barrel) per feature și nici config eslint la rădăcină care să impună vreo graniță.

## Prioritate 2 — Direcția de comunicare cu API-ul (Component → Facade → Store → Service)

- [ ] **11 componente + 1 serviciu core ocolesc facade/NGXS și apelează `@hau/autogenapi/services` direct**, în loc de calea așteptată (Component → Facade → acțiune NGXS → State → Service): `documents-form.component.ts`, `cars-form.component.ts`, `cars-details.component.ts`, `blog-list.component.ts`, `blog-entry-write.component.ts`, `tiptap-editor.component.ts`, `car-notes-panel.component.ts`, `share-vehicle-panel.component.ts`, `maintenance-record-detail.component.ts`, `main.component.ts`, `vehicle-catalog-select.component.ts`, `core/car-maintenance-settings.service.ts`. Migrează-le treptat spre facade-ul feature-ului corespunzător (există deja pentru documents/cars/maintenance/blog).

- [ ] **Caz de urmărit primul — cale dublă de scriere pe documente:** `documents-form.component.ts:5` injectează `DocumentService` și scrie direct prin HTTP, în timp ce `documents.facade.ts` + `documents.state.ts` gestionează deja acest domeniu prin NGXS. Risc real: store-ul poate rămâne cu date vechi (stale) după submit din formular, dacă nimeni nu re-declanșează un refresh explicit.

- [ ] **`cars-form.component.ts:44` injectează atât `CarService` cât și `DocumentService`.** Separă responsabilitatea: formularul de mașină nu ar trebui să știe de API-ul de documente.

## Prioritate 3 — Consistență UI (din primul pas al auditului)

- [ ] Migrează cele 4 formulare (`documents-form`, `share-vehicle-panel`, `blog-entry-write`) + `shared/component/form-field` spre `<app-dropdown>` în loc de `<select>` nativ hand-rolled.
- [ ] Adaugă termen de safe-area la `.pc-lb-close` (`photo-carousel.component.scss:262`) și `.fab-new-entry` (`blog-list.component.scss:706`); înlocuiește `env()` brut din `remove-car-panel.component.scss:10` cu `var(--ion-safe-area-bottom, 0px)`.
- [ ] Standardizează pe `untilDestroyed()` ca singur pattern de cleanup; verifică abonarea fără cleanup din `blog-list.component.ts:109` (`blogFacade.entries$`, stream care nu se închide niciodată).
- [ ] Introdu `ChangeDetectionStrategy.OnPush` treptat, începând cu componentele de listă cu volum mare de date (car-list, documents-list, maintenance).

## Note de context (nu sunt task-uri, doar constatări de reținut)

- Zero fișiere `index.ts` (barrel) în `features/*` — nimic nu delimitează tehnic o „suprafață publică" per modul; orice fișier e accesibil prin deep-import din orice alt loc.
- Nu există config eslint vizibil la rădăcina proiectului — scriptul `lint` există, dar fără reguli de boundary confirmate.
- Punctele bune găsite (de păstrat, nu de schimbat): 100% componente standalone, TypeScript strict + strictTemplates, lazy loading pe fiecare rută de feature, pattern Facade consistent (8/8 module cu stare), i18n prin Transloco aproape complet respectat.
