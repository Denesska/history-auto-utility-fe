# Link permanent de download APK + informare Google Play beta

*(document de plan/research, nu descrie o feature deja implementată — vezi status la finalul fiecărei părți)*

## Context

Momentan APK-ul se construiește manual pe Windows (`npm run build:android:apk*`) și e trimis la mână utilizatorilor de fiecare dată. Se dorește un link fix pe care utilizatorii curenți ai aplicației web pot să-l acceseze oricând pentru a descărca cea mai recentă build Android, fără să mai fie nevoie ca userul (Denis) să redistribuie fișierul manual de fiecare dată.

Decizii deja confirmate cu userul:
- APK-ul de la acest link se conectează la **backend-ul de producție** (`api.denhau.ro` / `hau_db`) — folosește scriptul existent `build:android:apk:prod`.
- Nu există o listă de „testeri" separată — sunt utilizatorii normali ai aplicației, deci linkul trebuie să fie **public** (accesibil fără login), ca să poată fi trimis oricui.
- Publicarea noului APK pe server rămâne **manuală** (scp/sftp după fiecare build local) — nu se automatizează build-ul pe server (serverul Linux nu are Java/Android SDK instalat; a le instala ar fi un efort separat, semnificativ mai mare, și nu e cerut acum).

A doua parte (Google Play beta) e informativă — explorăm ce presupune, nu s-a implementat cod pentru ea (majoritatea pașilor sunt acțiuni ale userului în Play Console: cont, plată, verificare identitate).

**Status: doar planificat, neimplementat încă.**

---

## Partea 1 — Link fix de download (plan de implementare)

### 1. Storage fișier APK pe server (prod)
- Fișierul va sta **în afara** directorului `www/` (care e rescris complet la fiecare `ng build` din `deploy-prod.sh` — dacă am pune APK-ul acolo, ar dispărea la fiecare deploy).
- Creăm `/var/www/hau_app-prod/downloads/hau-latest.apk` ca locație fixă, indiferent de versiune — se suprascrie la fiecare upload nou, deci linkul nu se schimbă niciodată.

### 2. Nginx (prod) — `/etc/nginx/sites-available/app.denhau.ro`
Adăugăm un `location /downloads/` care servește static acel director, după modelul deja folosit pentru `/uploads/` în config-urile de dev/test:
```nginx
location /downloads/ {
    alias /var/www/hau_app-prod/downloads/;
    add_header Cache-Control "no-cache";
}
```
`no-cache` (nu `no-store`) ca browserul să revalideze de fiecare dată — fișierul de la același nume URL se schimbă la fiecare release.
Apoi `nginx -t && systemctl reload nginx`. E o modificare pe config de prod — se face o singură dată, cu confirmare explicită chiar înainte de a rula comanda (nu afectează appul curent care rulează, doar adaugă o rută nouă).

### 3. Pagină publică `/download` (frontend)
Rută nouă, fără guard, la același nivel cu `auth` în `app.routes.ts` (`history-auto-utility-fe/src/app/app.routes.ts`):
```ts
{
  path: 'download',
  loadChildren: () => import('./features/download/download.routes').then(mod => mod.downloadRoutes)
}
```
Feature nou: `history-auto-utility-fe/src/app/features/download/` — o singură pagină standalone, fără dependențe de auth/state, cu:
- Logo/nume aplicație
- Buton „Descarcă pentru Android" → link direct la `/downloads/hau-latest.apk` (cale relativă, funcționează pe orice domeniu care servește pagina)
- Instrucțiuni scurte de instalare (Android cere activarea „Instalează aplicații necunoscute" pentru browser, fiindcă fișierul nu vine din Play Store)
- Tot textul vizibil trece prin Transloco (regula i18n a proiectului) — chei noi în `src/assets/i18n/ro.json` și `en.json`, secțiune `download`.

### 4. FEATURE.md
La implementare, creăm `history-auto-utility-fe/src/app/features/download/FEATURE.md` conform regulii de documentare a feature-urilor: secțiune „Functionality" (ce vede/face userul) + „Implementation" (unde e cache-uit fișierul, cum se face publish manual, unde e nginx config-ul).

### 5. Flux de lucru pentru fiecare build nou (proces manual al userului)
1. `npm run build:android:apk:prod` local pe Windows (script deja existent)
2. Copiere `android/app/build/outputs/apk/debug/app-debug.apk` → server, la `/var/www/hau_app-prod/downloads/hau-latest.apk` (scp/sftp)
3. Gata — linkul `/download` rămâne neschimbat, userii care-l accesează iau mereu ultima variantă.

Notă: build-ul de prod (`build:android:apk:prod`) tot rulează `gradlew assembleDebug` — deci APK-ul e semnat cu cheia de debug, nu are legătură cu Play Store (valabil doar pentru instalare directă/sideload, ok pentru acest flux).

### Cod care va fi atins
- `history-auto-utility-fe/src/app/app.routes.ts` (o rută nouă)
- `history-auto-utility-fe/src/app/features/download/` (folder nou: componentă + rută + `FEATURE.md`)
- `history-auto-utility-fe/src/assets/i18n/ro.json`, `en.json` (chei noi)
- `/etc/nginx/sites-available/app.denhau.ro` (infra, în afara git-ului, o singură rulare pe server)

### Verificare (la implementare)
- Local: `ng serve`, navighează la `/download`, confirmă că pagina se randează fără autentificare și că textul e din Transloco (schimbă limba, verifică ambele).
- După reload nginx pe server: pune manual un APK de test la `/var/www/hau_app-prod/downloads/hau-latest.apk` și confirmă `curl -I https://app.denhau.ro/downloads/hau-latest.apk` → 200.
- Flux complet: accesează `https://app.denhau.ro/download` de pe un telefon Android, descarcă, instalează, confirmă că aplicația pornește și vorbește cu `api.denhau.ro`.

Urmează fluxul normal din regula de git a proiectului: implementare pe `develop`, confirmare că merge, apoi branch nou (`feature/apk-download-link`) + commit — fără push/merge automat.

---

## Partea 2 — Google Play beta pe Android (informativ)

### Cont Google Play Console
- Taxă unică **25 USD** (nu recurentă).
- Cont **Personal** (mai rapid, verificare identitate cu act + video, de la câteva ore la câteva zile) sau **Organizație** (necesită D-U-N-S, poate dura zile/săptămâni).

### Cerințe tehnice de semnare
- Play Store cere **AAB** (Android App Bundle), nu APK, cu **Play App Signing** (Google păstrează cheia finală de semnare; developerul păstrează o „upload key").
- Proiectul actual (`android/app/build.gradle`) **nu are deloc `signingConfigs` pentru release** — doar `assembleDebug`. Ar trebui generat un keystore de upload și configurat în `build.gradle`, păstrat în siguranță (nu în git).
- `compileSdkVersion`/`targetSdkVersion` (`android/variables.gradle`) trebuie să respecte pragul minim impus anual de Google — de verificat la momentul aplicării.

### Fișă Play Store (obligatorie chiar și pentru testare internă)
- Politică de confidențialitate (URL public găzduit undeva)
- Formular „Data safety" (ce date colectează/trimite aplicația)
- Chestionar de rating conținut (IARC)
- Categorie, descriere scurtă/lungă, icon, screenshot-uri, feature graphic

### Track-uri de testare
- **Internal testing** — până la 100 testeri adăugați prin email/link, fără review de conținut, disponibil aproape imediat.
- **Closed testing** — grup mai mare, necesită review (ore–zile).
- **Open testing** — beta public, vizibil oricui din Play Store.
- **Production** — lansare publică.

### Restricție importantă
Pentru conturi de dezvoltator **noi**, Google impune o etapă obligatorie de closed testing cu un număr minim de testeri activi (undeva la 12–20, pragul exact se verifică în Play Console la momentul respectiv — s-a schimbat în timp) menținută continuu ~14 zile, **înainte** de a putea trece aplicația la track-ul de producție. Internal testing **nu** are această restricție.

### Recomandare
Dat fiind că scopul e ca utilizatorii curenți să testeze o variantă mai stabilă (nu lansare publică largă), **Internal Testing** e suficient: taxa de cont (25 USD) tot se plătește o dată, dar eviți cele 14 zile de closed testing obligatorii. Testerii sunt adăugați cu adresa lor de Gmail, primesc un link, instalează din Play Store normal și primesc update-uri automate — nu mai e nevoie de linkul manual din Partea 1 pentru acest grup. Dezavantaj față de Partea 1: fiecare tester trebuie să aibă cont Google și să fie adăugat manual în listă, plus setup-ul inițial (cont + semnare + fișă Store) e un efort de ordinul câtorva ore, posibil zile din cauza verificării identității.

Dacă se merge pe această rută, Claude poate ajuta cu partea tehnică (generare keystore, configurare `signingConfigs`, build AAB) — restul (creare cont, plată, verificare identitate, completare fișă în Play Console) sunt pași pe care userul trebuie să-i facă direct în consolă, cu contul lui Google.

**Status: doar research, nicio acțiune întreprinsă.**
