param(
    [Parameter(Mandatory = $true)]
    [ValidateRange(1, 2100000000)]
    [int]$VersionCode,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$VersionName
)

$ErrorActionPreference = 'Stop'
Import-Module 'C:\Windows\System32\WindowsPowerShell\v1.0\Modules\Microsoft.PowerShell.Security\Microsoft.PowerShell.Security.psd1' -Force

$frontendRoot = Split-Path -Parent $PSScriptRoot
$androidRoot = Join-Path $frontendRoot 'android'
$appRoot = Join-Path $androidRoot 'app'
$productionFirebase = Join-Path $appRoot 'google-services.json'
$pilotFirebase = Join-Path $appRoot 'google-services.pilot.json'
$firebaseBackup = Join-Path $appRoot 'google-services.production.backup.json'
$hadProductionFirebase = Test-Path -LiteralPath $productionFirebase
$signingSecretFile = 'C:\Users\denes\Projects\hau-signing\hau-pilot-release-v3.password.dpapi'

if ([string]::IsNullOrWhiteSpace($env:HAU_ANDROID_KEYSTORE_PASSWORD)) {
    if (Test-Path -LiteralPath $signingSecretFile) {
        $encryptedPassword = (Get-Content -LiteralPath $signingSecretFile -Raw).Trim()
        $storeSecret = ConvertTo-SecureString -String $encryptedPassword
    }
    else {
        $storeSecret = Read-Host 'Keystore password' -AsSecureString
    }
    $env:HAU_ANDROID_KEYSTORE_PASSWORD = [Net.NetworkCredential]::new('', $storeSecret).Password
}
if ([string]::IsNullOrWhiteSpace($env:HAU_ANDROID_KEYSTORE_PASSWORD)) {
    throw 'Keystore password cannot be empty.'
}
$env:HAU_ANDROID_KEY_PASSWORD = $env:HAU_ANDROID_KEYSTORE_PASSWORD

if (-not (Test-Path -LiteralPath $pilotFirebase)) {
    throw "Missing Firebase configuration: $pilotFirebase. Register com.denhau.hau.pilot in Firebase and save its google-services.json at this path."
}

$env:CAP_APP_ID = 'com.denhau.hau.pilot'
$env:CAP_APP_NAME = 'HAU Pilot'
$env:CAP_WEB_DIR = 'www'
$env:HAU_ANDROID_APP_ID = 'com.denhau.hau.pilot'
$env:HAU_ANDROID_APP_NAME = 'HAU Pilot'
$env:HAU_ANDROID_KEYSTORE = 'C:\Users\denes\Projects\hau-signing\hau-pilot-release-v3.p12'
$env:HAU_ANDROID_KEY_ALIAS = 'hau-pilot'
$env:HAU_ANDROID_VERSION_CODE = $VersionCode.ToString()
$env:HAU_ANDROID_VERSION_NAME = $VersionName

$keytool = 'C:\Program Files\Eclipse Adoptium\jdk-21.0.6.7-hotspot\bin\keytool.exe'
& $keytool -list -keystore $env:HAU_ANDROID_KEYSTORE -alias $env:HAU_ANDROID_KEY_ALIAS -storepass:env HAU_ANDROID_KEYSTORE_PASSWORD | Out-Null
if ($LASTEXITCODE -ne 0) {
    throw 'The keystore password is incorrect. The Android build was not started.'
}

Push-Location $frontendRoot
try {
    npm run generate-firebase-sw
    npm run assets:android:test
    npx ng build --configuration production

    if ($hadProductionFirebase) {
        Copy-Item -LiteralPath $productionFirebase -Destination $firebaseBackup -Force
    }
    Copy-Item -LiteralPath $pilotFirebase -Destination $productionFirebase -Force

    npx cap sync android
    Push-Location $androidRoot
    try {
        .\gradlew.bat assembleRelease
        if ($LASTEXITCODE -ne 0) {
            throw "Android release build failed with exit code $LASTEXITCODE."
        }
    }
    finally {
        Pop-Location
    }
}
finally {
    if (Test-Path -LiteralPath $firebaseBackup) {
        Move-Item -LiteralPath $firebaseBackup -Destination $productionFirebase -Force
    }
    elseif (-not $hadProductionFirebase -and (Test-Path -LiteralPath $productionFirebase)) {
        Remove-Item -LiteralPath $productionFirebase -Force
    }
    Pop-Location
}

$apk = Join-Path $appRoot 'build\outputs\apk\release\app-release.apk'
if (-not (Test-Path -LiteralPath $apk)) {
    throw "The Android build completed without producing the expected APK: $apk"
}
Write-Output "Pilot APK: $apk"
