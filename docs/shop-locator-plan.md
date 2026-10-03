# Shop Locator — găsire service-uri / vulcanizări în apropiere (plan de implementare)

*(document de plan, nu descrie o feature implementată — **status: doar planificat, niciun cod scris**)*

## Context și scop

Feature cerut: un locator integrat în aplicație care folosește GPS-ul telefonului
pentru a găsi service-uri auto, ateliere de reparații și vulcanizări în apropiere.
Userul vede date de contact, rating și distanță pe o hartă simplă, poate compara
opțiuni, citi review-uri și suna cu un singur tap. Scenariul principal: ești într-un
oraș necunoscut, ai o problemă la mașină, vrei rapid un service de încredere.

Ce înseamnă asta concret în HAU:

| Capabilitate | Sursa | Comentariu |
|---|---|---|
| Poziția userului | GPS device (`@capacitor/geolocation`) | pe web cade pe `navigator.geolocation` |
| Lista de POI-uri (nume, adresă, telefon, orar, rating, review-uri) | **furnizor extern** (vezi „Decizia 1") | nu avem și nu vrem să întreținem o bază proprie de service-uri |
| Harta | SDK de hărți (vezi „Decizia 2") | azi aplicația **nu are** nicio librărie de hărți |
| Favorite / „mecanicul meu de încredere" | DB proprie (`hau_db_dev`) | singura parte cu date proprii |

Integrări deja existente în app pe care le refolosim (nu se rescriu):
- **nav-relay** (`core/nav-share.service.ts` + BE `modules/nav-relay/`) — poate trimite
  o destinație către head-unit-ul mașinii. Un buton „trimite la mașină" pe un service
  găsit e practic gratis și e un diferențiator față de a căuta pur și simplu în Google Maps.
- `<app-dropdown>` pentru toate filtrele (regula de UI consistency din `CLAUDE.md`).
- `core/header-actions.service.ts` pentru acțiunile din top-bar.
- `@capacitor/browser` pentru deschiderea site-ului unui service.

---

## Decizii luate

Criteriul cerut: **cel mai stabil și cel mai rentabil**. Prețurile de mai jos sunt cele
de pe pagina oficială Google Maps Platform, verificate în septembrie 2026.

### Decizia 1 — sursa de date: **Google Places API (New)**

| Opțiune | Rating + review-uri | Cost | Verdict |
|---|---|---|---|
| **Google Places API (New)** | Da, complete | free tier lunar per SKU, apoi vezi calculul de mai jos | **ales** |
| OpenStreetMap / Overpass | **Nu** — OSM nu are ratinguri | gratis, dar instanțele publice au limite; stabil doar self-hosted | respins |
| HERE / TomTom | Nu (POI fără rating) | free tier generos | respins |
| Foursquare Places | Parțial | free tier | respins — acoperire slabă în RO pe service-uri mici |

Motivele, în ordinea criteriului cerut:
- **Stabilitate**: e singurul furnizor cu acoperire reală pe „vulcanizare la marginea unui
  sat" în România, și nu ne obligă să întreținem nimic pe serverul nostru. Overpass
  self-hosted (singura variantă cu adevărat stabilă din familia OSM) ar însemna un serviciu
  în plus de întreținut pe același VPS, plus reimport periodic de date — cost ascuns mare.
- **Rentabilitate**: gratis la scara noastră (vezi calculul), iar ratingurile — jumătate din
  cerința feature-ului — nu există la ceilalți furnizori la niciun preț.
- Proiectul Google Cloud există deja (folosim `GEMINI_API_KEY` și Google OAuth), deci zero
  setup administrativ nou.

Tipurile de POI relevante: `car_repair`, `car_dealer`, `car_wash`, plus căutare text pentru
„vulcanizare" (nu există tip dedicat pentru anvelope — se rezolvă cu
`includedTypes: ['car_repair']` + text query).

### Decizia 2 — harta: **Google Maps JS API** (Dynamic Maps)

Decurge din Decizia 1: termenii Google cer ca datele Places să fie afișate pe o hartă
Google, deci Leaflet + OSM nu e o opțiune atâta timp cât POI-urile vin de la Google.
E și varianta stabilă — un SDK, o cheie, un furnizor, fără nepotriviri de proiecție sau
de geocodare între două servicii. Se încarcă **lazy**, doar pe ruta de shop locator, cu
un stil dark aliniat la paleta aplicației, ca bundle-ul global să nu crească.

### Decizia 3 — intrarea în navigație: **sidebar pe desktop + tile în hub-ul mașinii pe mobil**

Bara de taburi de jos (Garaj / Rapoarte / FAB / Jurnal / Cont) rămâne neatinsă — e plină,
iar înlocuirea unui tab ar fi o schimbare de UX mai mare decât feature-ul însuși.
- **Desktop**: intrare nouă în `menuItems` (`main.component.ts`), după „Jurnal".
- **Mobil**: tile nou în grila `vd-hub-grid` din `cars-details.component.html`, lângă „Plan"
  — același precedent ca Plan, care e tot un ecran fără tab propriu.

Ambele sunt patternuri deja existente, deci zero cod de navigație nou.

---

## Modelul de cost (de ce iese gratis)

Prețurile Google (0–100k apeluri/lună) și free tier-ul lunar **per SKU**, din martie 2025
(creditul unic de $200 a fost desființat):

| SKU folosit | Unde apare în feature | Gratis/lună | Peste free tier |
|---|---|---|---|
| Nearby Search (Pro) | căutarea din listă, **fără** rating în field mask | 5.000 | $32 / 1.000 |
| Nearby Search (Enterprise) | aceeași căutare **cu** rating + nr. recenzii | 1.000 | ~$35 / 1.000 |
| Place Details (Enterprise) | ecranul de detaliu: telefon, orar, website, rating | 1.000 | $20 / 1.000 |
| Place Details (Enterprise + Atmosphere) | detaliu **cu** textul recenziilor | 1.000 | ~$40 / 1.000 |
| Dynamic Maps (Maps JS) | o încărcare de hartă per sesiune | 10.000 | $7 / 1.000 |
| Geocoding | fallback „caută după localitate" când GPS-ul e refuzat | 10.000 | $5 / 1.000 |

**Regula care decide costul: SKU-ul e dat de field mask** — ești taxat la cel mai scump SKU
dintre câmpurile cerute. De aici, două alegeri de design cu efect direct pe factură:

1. **Ratingul se ia din Nearby Search, nu din Place Details.** Un singur apel Enterprise
   întoarce până la 20 de service-uri *cu rating*. Alternativa (Nearby Search Pro + câte un
   Place Details per rezultat) ar însemna 21 de apeluri în loc de 1, pentru aceeași listă.
2. **Recenziile se cer doar la deschiderea unui service**, niciodată pentru listă — sunt
   singurul câmp care urcă apelul pe SKU-ul cel mai scump.

Estimare pentru scara actuală (câțiva utilizatori, uz ocazional): ordinul zecilor–sutelor
de căutări pe lună, sub 1.000 pe fiecare SKU → **$0**. Primul leu se plătește abia după
~1.000 de căutări distincte pe lună (cache-ul le numără o singură dată per celulă de ~500 m
per zi), la ~3,5 cenți per căutare care chiar ajunge la Google.

**Plafoane obligatorii în Faza 0** (alertele de buget nu opresc consumul — cotele îl opresc):
- cotă zilnică hard pe fiecare API în Cloud Console (ex. 200 req/zi Places, 500/zi Maps JS);
- alertă de buget la $5 și $20;
- rate limit per user în `shops.service.ts` (protecție împotriva unei bucle din frontend).

**De confirmat în Faza 0, nu de presupus**: tabelul exact câmp → SKU de pe pagina de SKU
details a Places API (mai jos e folosită gruparea cunoscută: rating/telefon/website →
Enterprise, `reviews` → Enterprise + Atmosphere) și politica de caching (`place_id` se poate
stoca nelimitat, restul câmpurilor temporar — de ordinul a 30 de zile; textul recenziilor nu
se stochează deloc).

---

## Arhitectură

### Backend — modul nou `history-auto-utility-be/src/modules/shops/`

```
shops/
  shops.module.ts
  shops.controller.ts
  shops.service.ts            // orchestrare: cache → provider → normalizare
  providers/
    places-provider.interface.ts   // contract: searchNearby(), getDetails()
    google-places.provider.ts      // implementarea Places API (New), singurul loc cu cheia
  dto/
    nearby-shops-query.dto.ts
    shop.dto.ts
    shop-details.dto.ts
    favorite-shop.dto.ts
```

Abstracția `PlacesProvider` există ca să putem schimba furnizorul (dacă Google devine
scump sau termenii se schimbă) fără să atingem controllerul, cache-ul sau frontendul —
aceeași idee ca `NavLinkResolver` din `nav-relay`.

**Endpointuri** (toate `@UseGuards(JwtAuthGuard)`, ca restul appului):

| Metodă | Rută | Rol |
|---|---|---|
| `GET` | `/shops/nearby?lat=&lon=&radius=&category=&q=` | listă POI ordonată după distanță; `category` ∈ `service`, `tires`, `wash`, `parts`, `all` |
| `GET` | `/shops/:placeId` | detaliu: telefon, orar, website, review-uri (live, necachate) |
| `GET` | `/shops/favorites` | favoritele userului curent, cu datele de bază din cache |
| `POST` | `/shops/favorites` | salvează un service ca „de încredere" (+ notă personală) |
| `DELETE` | `/shops/favorites/:placeId` | scoate din favorite |

Distanța se calculează **pe backend** (haversine) și se trimite gata calculată, ca lista
să fie sortabilă identic pe orice client.

**Cache + control de cost** (esențial — fără el fiecare pan pe hartă costă bani):
- `ShopPlace` — cache pe POI, cheie `place_id`. TTL configurabil (`SHOPS_CACHE_TTL_DAYS`,
  default 30, în limita politicii Google). Fără text de recenzii în DB.
- `ShopSearchCache` — cheie = celulă de grid (lat/lon rotunjite la ~500 m) + categorie;
  valoare = lista de `place_id`-uri + `fetched_at`. TTL scurt (24 h). Asta e ce oprește
  cheltuiala: doi useri în același cartier, în aceeași zi, generează un singur apel.
- Rate limit per user (ex. 60 căutări/oră) în `shops.service.ts`, cu log — protecție
  împotriva unui bug de frontend care apelează în buclă.
- **Field mask-urile sunt centralizate în `google-places.provider.ts`**, ca două constante
  (`NEARBY_FIELDS`, `DETAILS_FIELDS`) cu un comentariu care spune la ce SKU taxează fiecare.
  Un câmp adăugat neatent acolo e singurul mod în care factura poate crește silențios.

**Prisma — modele noi** (`prisma/schema.prisma`, aplicat cu `npm run db:push:dev`):

```prisma
model ShopPlace {
  place_id     String   @id
  name         String
  address      String?
  lat          Float
  lon          Float
  phone        String?
  website      String?
  rating       Float?
  rating_count Int?
  categories   String[]
  opening_json Json?
  fetched_at   DateTime @default(now())
  favorites    FavoriteShop[]
}

model ShopSearchCache {
  id         Int      @id @default(autoincrement())
  cell_key   String   // ex. "44.43,26.10:service"
  place_ids  String[]
  fetched_at DateTime @default(now())
  @@unique([cell_key])
}

model FavoriteShop {
  id         Int       @id @default(autoincrement())
  user_id    Int
  place_id   String
  note       String?
  created_at DateTime  @default(now())
  user       User      @relation(fields: [user_id], references: [id], onDelete: Cascade)
  place      ShopPlace @relation(fields: [place_id], references: [place_id], onDelete: Cascade)
  @@unique([user_id, place_id])
}
```

**Env nou** (`.env.dev` întâi; `.env.test` / prod doar când se cere explicit):
```
# Google Places API (New) — shop locator
GOOGLE_PLACES_API_KEY=
SHOPS_CACHE_TTL_DAYS=30
SHOPS_SEARCH_CACHE_TTL_HOURS=24
```
Cheia de server (Places) și cea de browser (Maps JS) sunt **două chei diferite**: prima
restricționată pe IP-ul serverului, a doua pe referrer (`dev.denhau.ro`, `test.denhau.ro`,
`app.denhau.ro`). Cheia de browser ajunge în `src/environments/environment*.ts` — e
publică prin natura ei, de aceea restricția pe referrer e obligatorie.

### Frontend — feature nou `history-auto-utility-fe/src/app/features/shops/`

```
shops/
  FEATURE.md                    // obligatoriu (Feature Documentation Rule)
  shops.routes.ts
  shops.routes.const.ts
  shops-list/                   // ecranul principal: hartă + listă
  shop-detail/                  // detaliu service
  state/  (shops.actions.ts | shops.facade.ts | shops.state.ts)
  models/shop.model.ts          // categorii, iconuri, helper de formatare distanță
  geolocation.service.ts        // wrapper peste @capacitor/geolocation + fallback
```

- Rută înregistrată în `main.routes.ts` ca frate cu `blog`/`documents`, cu
  `ShopsFacade` + `NgxsModule.forFeature([ShopsState])` în `providers` (compoziția se face
  în `main.routes.ts`, ca la celelalte feature-uri), și cheie nouă în `app.routes.const.ts`
  (`shops: { path: 'shops', fullPath: '/main/shops' }`).
- **Componentă partajată nouă**: `shared/component/map/map.component.ts` (`<app-map>`) —
  încarcă lazy scriptul Maps JS, primește `markers`, `center`, `selectedId`, emite
  `markerSelect`/`boundsChange`. Există ca shared component de la început pentru că a doua
  utilizare e deja previzibilă (locul unui service pe un record de mentenanță).
- Filtrele (categorie, rază, sortare) folosesc `<app-dropdown>` — **nu** `<select>` nativ,
  **nu** o listă hand-rolled (vezi UI Consistency Rule).
- Acțiunile pe un service: **sună** (`tel:`), **navighează** (schemă `geo:` pe Android,
  URL Google Maps pe web), **site** (`@capacitor/browser`), **trimite la mașină**
  (nav-relay existent, doar dacă `environment.navRelaySlug` e setat), **salvează ca favorit**.
- i18n: bloc nou `shops.*` în `src/assets/i18n/ro.json` **și** `en.json`, inclusiv textele
  de permisiune refuzată și de eroare de rețea. Zero string-uri hardcodate.

### Permisiuni native

- `@capacitor/geolocation@^8.2.2` (aliniat la Capacitor 8 din proiect).
- Android: `ACCESS_COARSE_LOCATION` + `ACCESS_FINE_LOCATION` în
  `android/app/src/main/AndroidManifest.xml` (azi are doar `INTERNET`).
- iOS: `NSLocationWhenInUseUsageDescription` în `ios/App/App/Info.plist`.
- Web: `navigator.geolocation` funcționează doar pe HTTPS — dev/test/prod sunt deja HTTPS.
- **Fallback obligatoriu** când permisiunea e refuzată sau GPS-ul dă timeout: câmp de
  căutare manuală după localitate (geocoding prin backend) + ultima poziție cunoscută.
  Ecranul nu are voie să rămână gol cu un spinner infinit.

---

## Faze de implementare

Fiecare fază e o bucată livrabilă și testabilă separat; se lucrează pe `develop`
(env safety rule), DB doar cu `npm run db:push:dev`.

**Faza 0 — pregătire (fără cod, majoritatea sunt acțiuni ale userului în Cloud Console)**
1. Activare *Places API (New)* + *Maps JavaScript API* + *Geocoding API* în proiectul Google
   Cloud existent.
2. Două chei: una de server (Places, restricționată pe IP-ul serverului) și una de browser
   (Maps JS, restricționată pe referrer: `dev.denhau.ro`, `test.denhau.ro`, `app.denhau.ro`).
3. Cote zilnice hard pe fiecare API + alerte de buget la $5 și $20 (vezi „Modelul de cost").
4. Verificarea tabelului câmp → SKU și a politicii de caching pe documentația Places.

**Faza 1 — backend, fără hartă**
- Modul `shops/` complet: provider Google, cache, rate limit, cele 5 endpointuri, DTO-uri.
- Modele Prisma + `npm run db:push:dev`.
- Test manual cu `curl` pe `:3001` cu coordonate fixe (ex. centrul Bucureștiului).
- *Definiție de gata*: `GET /shops/nearby` întoarce POI-uri reale sortate după distanță,
  iar al doilea apel identic vine din cache (verificabil în log).

**Faza 2 — frontend, doar listă**
- Feature `shops/`, state/facade, `geolocation.service.ts`, ecranul de listă cu carduri
  (nume, categorie, rating + nr. recenzii, distanță, buton „sună"), filtre cu `<app-dropdown>`,
  stările de „se caută" / „fără rezultate" / „permisiune refuzată".
- Intrările în navigație (Decizia 3) + traduceri ro/en.
- *Definiție de gata*: din browser, pe dev, cu locația reală, apar service-uri corecte și
  butonul de telefon deschide dialer-ul.

**Faza 3 — hartă + detaliu**
- `<app-map>` (shared), split hartă/listă: desktop = hartă lângă listă, mobil = hartă sus
  colapsabilă cu lista dedesubt.
- Ecranul de detaliu: orar, telefon, website, review-uri (live), acțiuni în top-bar conform
  regulii de page actions.
- Sincronizare selecție marker ↔ card.

**Faza 4 — favorite + integrare cu appul**
- Salvare service ca favorit + notă personală; secțiune „Service-urile mele" în listă.
- Buton „trimite la mașină" prin nav-relay.
- `FEATURE.md` scris complet (ambele secțiuni) și `CLAUDE.md` actualizat dacă apar reguli noi.

**Faza 5 — opțional, de discutat separat**
- Legarea unui service de un record de mentenanță (`MaintenanceRecord.shop_place_id`) →
  „unde am făcut ultima revizie" și pre-completarea formularului de mentenanță din shop locator.
- Note/ratinguri proprii, vizibile doar userului.

---

## Riscuri și puncte de atenție

1. **Cost.** Feature-ul iese gratis *doar* cu cache-ul din Faza 1 și field mask-urile din
   „Modelul de cost". Fără ele, o singură sesiune cu pan/zoom pe hartă poate genera sute de
   apeluri Enterprise. Cache-ul pe celulă + debounce pe frontend (min. 500 ms, fără
   reinterogare la zoom) + cotele din Cloud Console sunt parte din definiția de gata, nu
   optimizări ulterioare.
2. **Dependența de un singur furnizor.** Google e ales pentru stabilitate azi, dar prețurile
   și termenii lui s-au schimbat deja o dată (martie 2025). De aceea POI-urile trec printr-o
   interfață `PlacesProvider`: dacă modelul de preț se strică, se scrie un provider nou și
   se schimbă și harta pe Leaflet/OSM — frontendul, cache-ul și DB-ul rămân neatinse.
3. **Confidențialitate.** Coordonatele userului pleacă spre un serviciu terț. Nu stocăm
   niciodată poziția userului în DB (nici în loguri) — doar celula rotunjită folosită drept
   cheie de cache. De menționat în ecranul de permisiune, la prima cerere.
4. **Regenerarea clientului API.** Frontendul consumă modele din `@hau/autogenapi` generate
   din swagger-ul backendului; regenerarea a șters în trecut DTO-uri folosite activ —
   se face diff pe `src/auto-gen/` înainte de commit.
5. **Test env.** `backend-test` încă rulează din checkout-ul de dev; nu se rulează
   `npm run build` / `prisma generate` în `/var/www/hau_app/history-auto-utility-be` gândind
   că e izolat.
6. **Offline / fără semnal.** Exact scenariul de urgență din cerință (pană într-o zonă
   necunoscută) e și cel cu semnal prost: favoritele și ultimele rezultate cachete trebuie
   să rămână afișabile, cu un banner „date din cache".
7. **`ng serve` cu fișiere noi.** Feature-ul adaugă multe fișiere noi dintr-un foc — dacă
   apar NG2003/TS2307 fantomă, se verifică cu `tsc` și se repornește dev serverul.

---

## Ce **nu** intră în scope

- Programare online la service / rezervări.
- Review-uri scrise de userii HAU și publicate altor useri (necesită moderare — feature separat).
- Prețuri sau estimări de cost per operație.
- Locator pentru benzinării / încărcare electrică (se poate adăuga ulterior ca o categorie
  în plus, arhitectura o suportă, dar nu e cerut acum).
