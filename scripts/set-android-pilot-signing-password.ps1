$ErrorActionPreference = 'Stop'
Import-Module 'C:\Windows\System32\WindowsPowerShell\v1.0\Modules\Microsoft.PowerShell.Security\Microsoft.PowerShell.Security.psd1' -Force

$keystore = 'C:\Users\denes\Projects\hau-signing\hau-pilot-release-v3.p12'
$secretFile = 'C:\Users\denes\Projects\hau-signing\hau-pilot-release-v3.password.dpapi'
$plainPasswordFile = 'C:\Users\denes\Projects\hau-signing\pilot-password.txt'
$keytool = 'C:\Program Files\Eclipse Adoptium\jdk-21.0.6.7-hotspot\bin\keytool.exe'

if (Test-Path -LiteralPath $keystore) {
    throw "A v3 keystore already exists. It was not overwritten: $keystore"
}

if (-not (Test-Path -LiteralPath $plainPasswordFile)) {
    throw "Password file not found: $plainPasswordFile"
}

$plainPassword = (Get-Content -LiteralPath $plainPasswordFile -Raw) -replace '[\r\n]+$', ''
if ([string]::IsNullOrWhiteSpace($plainPassword)) {
    throw 'The password cannot be empty.'
}
if ($plainPassword -eq 'REPLACE_WITH_YOUR_PASSWORD') {
    throw "Replace the placeholder in $plainPasswordFile before running setup."
}
$secret = ConvertTo-SecureString -String $plainPassword -AsPlainText -Force

$env:HAU_PILOT_PASSWORD_CHECK = $plainPassword
try {
    & $keytool -genkeypair -v -keystore $keystore -storetype PKCS12 -alias 'hau-pilot' -keyalg RSA -keysize 4096 -sigalg SHA256withRSA -validity 10000 -dname 'CN=HAU Pilot, OU=Mobile, O=Denhau, C=RO' -storepass:env HAU_PILOT_PASSWORD_CHECK -keypass:env HAU_PILOT_PASSWORD_CHECK
    if ($LASTEXITCODE -ne 0) {
        throw 'The replacement keystore could not be created.'
    }

    $secret | ConvertFrom-SecureString | Set-Content -LiteralPath $secretFile -Encoding UTF8
    Write-Output "Encrypted signing password saved for the current Windows user: $secretFile"
    & $keytool -list -v -keystore $keystore -alias 'hau-pilot' -storepass:env HAU_PILOT_PASSWORD_CHECK |
        Select-String 'SHA256:'
    Remove-Item -LiteralPath $plainPasswordFile -Force
    Write-Output 'The temporary plaintext password file was deleted.'
}
finally {
    Remove-Item Env:HAU_PILOT_PASSWORD_CHECK -ErrorAction SilentlyContinue
    $plainPassword = $null
}
