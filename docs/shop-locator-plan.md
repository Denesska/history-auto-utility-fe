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

## Decizii de luat înainte de a scrie cod

### Decizia 1 — de unde vin service-urile, ratingurile și review-urile

| Opțiune | Rating + review-uri | Cost | Riscuri |
|---|---|---|---|
| **Google Places API (New)** — *recomandat* | Da, complete (rating, nr. de recenzii, text recenzii, orar, telefon, website) | Free tier lunar per SKU, apoi ~$32/1000 Nearby Search | Termenii Google cer afișarea datelor Places **pe o hartă Google** → leagă Decizia 2; reguli stricte de caching |
| OpenStreetMap / Overpass API | **Nu** (OSM nu are ratinguri) | Gratis | Feature-ul cerut („ratings, reviews") ar trebui redus la review-uri proprii, scrise de userii HAU — practic inexistente la scara actuală |
| HERE / TomTom / Foursquare Places | Parțial (Foursquare are rating, review-uri limitate) | Free tier decent | Acoperire slabă în România pentru service-uri mici |

**Recomandare: Google Places API (New).** Motive: acoperirea din România e singura
realistă pentru „vulcanizare la marginea unui sat", proiectul Google Cloud există deja
(folosim `GEMINI_API_KEY` și Google OAuth), iar ratingul/recenziile sunt exact ceea ce
cere feature-ul. Cheia **nu** ajunge niciodată în frontend — toate apelurile trec prin
backend (vezi arhitectura).

Tipurile de POI relevante în Places: `car_repair`, `car_dealer`, `car_wash`,
`gas_station`, plus căutare text pentru „vulcanizare" (nu există un tip dedicat pentru
anvelope în România — se rezolvă cu `includedTypes: ['car_repair']` + text query).

**De verificat înainte de implementare** (task pentru începutul Fazei 1, nu presupuneri):
1. Termenii curenți Google Maps Platform privind afișarea datelor Places pe hartă non-Google.
2. Politica de caching: `place_id` se poate stoca nelimitat; restul câmpurilor doar temporar
   (limită de ordinul a 30 de zile). Textul recenziilor **nu** se stochează pe termen lung —
   se cere la deschiderea detaliului și se afișează live.
3. Free tier-ul lunar curent per SKU și pragul de la care începe facturarea.

### Decizia 2 — harta

Dacă Decizia 1 = Google Places, harta trebuie să fie **Google Maps JS API** (același
proiect, aceeași cheie restricționată pe domeniu). Alternativ, dacă vrem Leaflet + tile-uri
OSM (mai ușor de temat pe dark, zero cost de map load), atunci sursa de POI-uri **nu** poate
fi Google — devine Overpass/Foursquare și pierdem ratingurile.

**Recomandare: Google Maps JS API**, cu un stil dark custom aliniat la paleta aplicației,
încărcat lazy doar pe ruta de shop locator (bundle-ul global nu crește).

### Decizia 3 — punctul de intrare pe mobil

Bara de taburi de jos e plină (Garaj / Rapoarte / FAB / Jurnal / Cont) și nu o modificăm.
Propunere:
- **Desktop**: intrare nouă în `menuItems` din `main.component.ts` (sidebar), sub „Jurnal".
- **Mobil**: un tile nou în hub-ul mașinii (`cars-details.component.html`, grila `vd-hub-grid`),
  plus un buton „Service-uri în apropiere" în ecranul de Cont/Setări.

De confirmat cu userul — e o alegere de UX, nu una tehnică.

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

**Faza 0 — pregătire (fără cod)**
1. Confirmarea Deciziilor 1–3 cu userul.
2. În Google Cloud (proiectul existent): activare *Places API (New)* + *Maps JavaScript API*,
   creare a celor două chei restricționate, setare buget + alertă de cost.
3. Verificarea termenilor de caching/afișare (punctele de la Decizia 1).

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

1. **Cost.** Fără cache-ul din Faza 1 feature-ul poate genera sute de apeluri pe sesiune
   (fiecare mișcare de hartă). Cache-ul pe celulă + debounce pe frontend (min. 500 ms,
   fără reinterogare la zoom) sunt parte din definiția de gata, nu optimizări ulterioare.
2. **Termenii Google.** Legătura „date Places → hartă Google" condiționează Decizia 2;
   dacă se schimbă ceva, se schimbă furnizorul, nu arhitectura (de asta există interfața
   `PlacesProvider`).
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
