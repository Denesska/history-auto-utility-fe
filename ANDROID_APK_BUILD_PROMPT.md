# Prompt pentru generarea APK-urilor HAU

Folosește următorul prompt când trebuie generată o aplicație Android:

> Generează APK-ul HAU pentru mediul cerut, respectând toate regulile de mai jos.
>
> 1. Lucrează mai întâi pe branch-ul `develop`. Nu modifica și nu publica în `main` până când build-ul de pe `develop` nu este verificat.
> 2. Pentru un APK de producție, codul trebuie să corespundă versiunii care urmează să ajungă în `main`, iar aplicația trebuie să folosească mediul/API-ul de producție. Pentru un APK de dezvoltare, folosește configurația și API-ul de development.
> 3. Verifică existența fișierului `android/app/google-services.json` înainte de build. Oprește build-ul dacă lipsește, deoarece notificările Firebase provoacă închiderea aplicației după autentificare.
> 4. Rulează scriptul npm potrivit: `npm run build:android:apk` pentru dev, `npm run build:android:apk:test` pentru test sau `npm run build:android:apk:prod` pentru prod.
> 5. APK-ul final trebuie copiat automat în `C:\Users\denes\Projects\Hau\apk_generated`.
> 6. Numele fișierului trebuie să fie `hau_[mediu]_[versiune].apk`, unde mediul este `dev`, `test`, `prod` sau `pilot`, iar versiunea este citită din `package.json`. Exemple: `hau_dev_0.3.5.apk`, `hau_prod_0.3.5.apk`.
> 7. Nu comite fișierele Firebase, parolele, certificatele, keystore-urile sau APK-urile.
> 8. După build, raportează calea completă, versiunea, mediul, SHA-256 și rezultatul build-ului. Dacă este conectat un telefon și este necesară validarea, instalează APK-ul, pornește aplicația și verifică logurile pentru erori fatale.
> 9. Publică schimbările pe `develop` numai după ce build-ul reușește. Trecerea în `main` se face ulterior, după validarea versiunii de pe `develop`.

Scripturile de build exportă automat rezultatul în directorul cerut; nu copia manual APK-ul decât pentru recuperarea unui build vechi.
