# Android pilot build

The pilot build is a separate Android application:

- application ID: `com.denhau.hau.pilot`
- display name: `HAU Pilot`
- signing alias: `hau-pilot`
- keystore: `C:\Users\denes\Projects\hau-signing\hau-pilot-release-v3.p12`

## One-time Firebase setup

Register a second Android app named `com.denhau.hau.pilot` in the existing Firebase project. Download its `google-services.json` and save it locally as:

`android/app/google-services.pilot.json`

The file is ignored by Git. The build script temporarily activates it and restores the production Firebase configuration after the build.

## Build

Put the password in `C:\Users\denes\Projects\hau-signing\pilot-password.txt`, replacing the placeholder. Setup assigns it automatically to the PKCS12 container and private key, encrypts it for the current Windows user, and deletes the plaintext file after success:

```powershell
npm run setup:android:pilot-signing
```

After that, build without entering the password again:

```powershell
npm run build:android:pilot -- -VersionCode 2 -VersionName 0.1.1-pilot
```

The pilot build uses the production Angular environment (`https://api.denhau.ro/api`).
Increase `VersionCode` for every distributed update. `VersionName` is the human-readable version.

Optional version overrides:

```powershell
$env:HAU_ANDROID_VERSION_CODE = '2'
$env:HAU_ANDROID_VERSION_NAME = '0.2.0-pilot'
```

Every distributed update must use a larger integer version code and the same signing key.
