param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('dev', 'test', 'prod', 'pilot')]
    [string]$Environment,

    [string]$SourceApk
)

$ErrorActionPreference = 'Stop'
$frontendRoot = Split-Path -Parent $PSScriptRoot

if ([string]::IsNullOrWhiteSpace($SourceApk)) {
    $SourceApk = Join-Path $frontendRoot 'android\app\build\outputs\apk\debug\app-debug.apk'
}
elseif (-not [System.IO.Path]::IsPathRooted($SourceApk)) {
    $SourceApk = Join-Path $frontendRoot $SourceApk
}

if (-not (Test-Path -LiteralPath $SourceApk)) {
    throw "Expected Android APK was not generated: $SourceApk"
}

$packageJson = Get-Content -LiteralPath (Join-Path $frontendRoot 'package.json') -Raw | ConvertFrom-Json
$version = $packageJson.version
if ([string]::IsNullOrWhiteSpace($version)) {
    throw 'The application version is missing from package.json.'
}

$outputDirectory = 'C:\Users\denes\Projects\Hau\apk_generated'
$outputApk = Join-Path $outputDirectory "hau_${Environment}_${version}.apk"

New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
Copy-Item -LiteralPath $SourceApk -Destination $outputApk -Force

$hash = (Get-FileHash -LiteralPath $outputApk -Algorithm SHA256).Hash
Write-Output "APK: $outputApk"
Write-Output "SHA256: $hash"
