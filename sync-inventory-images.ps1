$ErrorActionPreference = 'Stop'

$root = Get-Location
$inventoryDir = Join-Path $root 'public\inventory'
$dataPath = Join-Path $root 'data\inventory.ts'

$imageExtensions = @('.jpg', '.jpeg', '.png', '.webp', '.jfif')

if (-not (Test-Path -LiteralPath $inventoryDir)) {
    Write-Host "Folder not found: $inventoryDir" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path -LiteralPath $dataPath)) {
    Write-Host "File not found: $dataPath" -ForegroundColor Red
    exit 1
}

$code = Get-Content -LiteralPath $dataPath -Raw -Encoding UTF8

$folders = Get-ChildItem -LiteralPath $inventoryDir -Directory

$updated = 0
$notFound = @()

foreach ($folder in $folders) {
    $slug = $folder.Name

    $images = Get-ChildItem -LiteralPath $folder.FullName -File |
        Where-Object { $imageExtensions -contains $_.Extension.ToLower() } |
        Sort-Object {
            $n = 0
            if ([int]::TryParse($_.BaseName, [ref]$n)) {
                $n
            } else {
                999999
            }
        }, Name

    if ($images.Count -eq 0) {
        continue
    }

    $slugPattern = "slug:\s*['""]$([regex]::Escape($slug))['""]"

    $slugMatch = [regex]::Match($code, $slugPattern)

    if (-not $slugMatch.Success) {
        $notFound += $slug
        continue
    }

    $startIndex = $slugMatch.Index

    $imagesMatch = [regex]::Match(
        $code.Substring($startIndex),
        "(?m)^(\s*)images:\s*.*$"
    )

    if (-not $imagesMatch.Success) {
        $notFound += $slug
        continue
    }

    $lineStart = $startIndex + $imagesMatch.Index
    $lineLength = $imagesMatch.Length
    $indent = $imagesMatch.Groups[1].Value

    $allNumeric = $true

    for ($i = 0; $i -lt $images.Count; $i++) {
        if ($images[$i].BaseName -ne [string]($i + 1)) {
            $allNumeric = $false
            break
        }
    }

    $extensions = $images | ForEach-Object { $_.Extension.ToLower() } | Select-Object -Unique

    if ($allNumeric -and $extensions.Count -eq 1) {
        $ext = $extensions[0]

        if ($ext -eq '.jpeg') {
            $ext = '.jpg'
        }

        if ($ext -eq '.jfif') {
            $ext = '.jpg'
        }

        $newLine = $indent + 'images: Array.from({ length: ' + $images.Count + ' }, (_, i) => `/inventory/' + $slug + '/${i + 1}' + $ext + '`),'
    } else {
        $lines = @()
        $lines += $indent + 'images: ['

        foreach ($img in $images) {
            $lines += $indent + "  '/inventory/$slug/$($img.Name)',"
        }

        $lines += $indent + '],'

        $newLine = $lines -join "`r`n"
    }

    $before = $code.Substring(0, $lineStart)
    $after = $code.Substring($lineStart + $lineLength)

    $code = $before + $newLine + $after

    $updated++

    Write-Host "OK: $slug - $($images.Count) images" -ForegroundColor Green
}

Set-Content -LiteralPath $dataPath -Value $code -Encoding UTF8

Write-Host ''
Write-Host "Updated machines: $updated" -ForegroundColor Cyan

if ($notFound.Count -gt 0) {
    Write-Host ''
    Write-Host 'Folders not found in data/inventory.ts:' -ForegroundColor Yellow

    foreach ($item in $notFound) {
        Write-Host "- $item" -ForegroundColor Yellow
    }
}

Write-Host ''
Write-Host 'DONE' -ForegroundColor Cyan