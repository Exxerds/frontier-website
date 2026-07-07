const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════
// ⚙️  КОНФИГУРАЦИЯ — PREMIUM ВЕРСИЯ
// ═══════════════════════════════════════════════════
const CONFIG = {
  phone: '(405) 293-8154',
  email: 'info@frontierheavyequipment.com',
  
  // ПРЕМИУМ ЦВЕТОВАЯ СХЕМА (тёмно-зелёная + золото)
  scheme: 'forest-premium',
  
  width: 1080,
  height: 1080,
  
  nobgDir: './public/inventory-nobg',
  inventoryDir: './public/inventory',
  outputDir: './public/marketing',
  logoPath: './public/logo.png',
  machinesData: './scripts/machines.json',
};

// ═══════════════ ПРЕМИУМ ЦВЕТОВАЯ СХЕМА ═══════════════
const SCHEMES = {
  'forest-premium': {
    bg:      '#0f2a22',      // глубокий тёмно-зелёный
    bgDark:  '#081b16',      // ещё темнее
    accent:  '#c9a05e',      // тёплое премиум-золото
    white:   '#ffffff',
    textDark: '#0f2a22',
  }
};

const C = SCHEMES[CONFIG.scheme];
const machines = JSON.parse(fs.readFileSync(CONFIG.machinesData, 'utf-8'));

function formatPrice(price) {
  return price.toLocaleString('en-US');
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function generatePremiumCard(machine) {
  const { width, height } = CONFIG;
  
  const nobgPath = path.join(CONFIG.nobgDir, `${machine.slug}.png`);
  const regularPath = path.join(CONFIG.inventoryDir, machine.slug, '1.jpg');
  
  const usingNobg = fs.existsSync(nobgPath);
  const photoPath = usingNobg ? nobgPath : regularPath;
  
  if (!fs.existsSync(photoPath)) {
    console.log(`❌ Нет фото: ${machine.slug}`);
    return false;
  }

  // === SVG OVERLAY (премиум дизайн) ===
  const svgOverlay = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- L-образный премиум паттерн -->
    <pattern id="premiumPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="60" height="60" fill="${C.bgDark}" opacity="0.6"/>
      <rect x="60" y="0" width="30" height="30" fill="${C.bgDark}" opacity="0.45"/>
      <rect x="90" y="0" width="30" height="60" fill="${C.bgDark}" opacity="0.55"/>
      <rect x="0" y="60" width="30" height="60" fill="${C.bgDark}" opacity="0.55"/>
      <rect x="30" y="90" width="30" height="30" fill="${C.bgDark}" opacity="0.4"/>
      <rect x="60" y="60" width="60" height="60" fill="${C.bgDark}" opacity="0.55"/>
    </pattern>
  </defs>

  <!-- Основной фон -->
  <rect width="${width}" height="${height}" fill="${C.bg}"/>
  <rect width="${width}" height="${height}" fill="url(#premiumPattern)"/>

  <!-- Название машины (большой белый текст) -->
  <text x="50" y="${height/2 + 95}" 
        font-family="Arial Black, Impact, sans-serif" font-size="62" font-weight="900"
        fill="${C.white}" letter-spacing="-2">${escapeXml(machine.make.toUpperCase())}</text>
  
  <text x="50" y="${height/2 + 165}" 
        font-family="Arial Black, Impact, sans-serif" font-size="62" font-weight="900"
        fill="${C.white}" letter-spacing="-2">${escapeXml(machine.model.toUpperCase())}</text>

  <!-- Золотой круг с $ -->
  <circle cx="${width/2 + 95}" cy="${height/2 + 75}" r="48" fill="${C.accent}"/>
  <text x="${width/2 + 95}" y="${height/2 + 98}" 
        font-family="Arial Black, sans-serif" font-size="62" font-weight="900"
        fill="${C.bg}" text-anchor="middle">$</text>

  <!-- Цена золотым цветом -->
  <text x="${width/2 + 160}" y="${height/2 + 95}" 
        font-family="Arial Black, Impact, sans-serif" font-size="78" font-weight="900"
        fill="${C.accent}">${formatPrice(machine.price)}</text>

  <!-- Иконка ЧАСОВ (спидометр) -->
  ${machine.hours ? `
  <g transform="translate(50, ${height - 175})">
    <circle cx="38" cy="38" r="34" fill="none" stroke="${C.white}" stroke-width="3.5"/>
    <circle cx="38" cy="38" r="4" fill="${C.white}"/>
    <line x1="38" y1="12" x2="38" y2="18" stroke="${C.white}" stroke-width="3"/>
    <line x1="38" y1="58" x2="38" y2="64" stroke="${C.white}" stroke-width="3"/>
    <line x1="12" y1="38" x2="18" y2="38" stroke="${C.white}" stroke-width="3"/>
    <line x1="58" y1="38" x2="64" y2="38" stroke="${C.white}" stroke-width="3"/>
    <line x1="21" y1="17" x2="25" y2="21" stroke="${C.white}" stroke-width="2.5"/>
    <line x1="55" y1="17" x2="51" y2="21" stroke="${C.white}" stroke-width="2.5"/>
    <line x1="38" y1="38" x2="52" y2="24" stroke="${C.white}" stroke-width="4" stroke-linecap="round"/>
    
    <text x="38" y="108" 
          font-family="Arial Black, sans-serif" font-size="34" font-weight="900"
          fill="${C.white}" text-anchor="middle">${machine.hours.toLocaleString()}</text>
  </g>` : ''}

  <!-- Иконка ГОДА (календарь) -->
  <g transform="translate(${machine.hours ? 195 : 50}, ${height - 175})">
    <rect x="10" y="16" width="62" height="58" rx="5" fill="none" stroke="${C.white}" stroke-width="3.5"/>
    <rect x="10" y="16" width="62" height="22" rx="5" fill="${C.white}"/>
    <line x1="23" y1="6" x2="23" y2="22" stroke="${C.white}" stroke-width="4" stroke-linecap="round"/>
    <line x1="59" y1="6" x2="59" y2="22" stroke="${C.white}" stroke-width="4" stroke-linecap="round"/>
    
    <text x="41" y="49" 
          font-family="Arial Black, sans-serif" font-size="13" font-weight="900"
          fill="${C.bg}" text-anchor="middle" letter-spacing="2">YEAR</text>
    
    <line x1="18" y1="56" x2="64" y2="56" stroke="${C.white}" stroke-width="2.5"/>
    <line x1="18" y1="67" x2="64" y2="67" stroke="${C.white}" stroke-width="2.5"/>
    
    <text x="41" y="108" 
          font-family="Arial Black, sans-serif" font-size="34" font-weight="900"
          fill="${C.white}" text-anchor="middle">${machine.year}</text>
  </g>

  <!-- Блок CONTACT US -->
  <text x="${width/2 + 50}" y="${height - 165}" 
        font-family="Arial, sans-serif" font-size="40" font-weight="700"
        fill="${C.white}">Contact us</text>
  
  <text x="${width/2 + 50}" y="${height - 105}" 
        font-family="Arial Black, sans-serif" font-size="46" font-weight="900"
        fill="${C.white}">${CONFIG.phone}</text>
  
  <text x="${width/2 + 50}" y="${height - 55}" 
        font-family="Arial, sans-serif" font-size="24" font-weight="500"
        fill="${C.white}">${CONFIG.email}</text>
</svg>`.trim();

  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const outputPath = path.join(CONFIG.outputDir, `${machine.slug}.jpg`);

  try {
    // 1. Фон
    const background = await sharp({
      create: { width, height, channels: 3, background: C.bg }
    }).png().toBuffer();

    // 2. Фото машины
    let machinePhoto;
    const photoMaxW = 920;
    const photoMaxH = 540;

    if (usingNobg) {
      machinePhoto = await sharp(photoPath)
        .resize(photoMaxW, photoMaxH, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
    } else {
      machinePhoto = await sharp(photoPath)
        .resize(photoMaxW, photoMaxH, { fit: 'cover', position: 'center' })
        .toBuffer();
    }

    // 3. Логотип
    let logoBuffer = null;
    if (fs.existsSync(CONFIG.logoPath)) {
      logoBuffer = await sharp(CONFIG.logoPath)
        .resize(190, 190, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
    }

    // 4. Сборка финального изображения
    const composites = [
      { input: machinePhoto, top: 25, left: -60 },
    ];

    if (logoBuffer) {
      composites.push({ input: logoBuffer, top: 28, left: width - 215 });
    }

    composites.push({ input: Buffer.from(svgOverlay), top: 0, left: 0 });

    await sharp(background)
      .composite(composites)
      .jpeg({ quality: 96, mozjpeg: true })
      .toFile(outputPath);

    console.log(`✅ ${machine.slug}.jpg  ${usingNobg ? '🎨' : '📷'}`);
    return true;
  } catch (error) {
    console.error(`❌ ${machine.slug}: ${error.message}`);
    return false;
  }
}

async function generateAll() {
  console.log('═══════════════════════════════════════════════');
  console.log('🌲 PREMIUM FOREST SCHEME — Frontier Heavy Equipment');
  console.log(`🚀 Генерация ${machines.length} премиум-карточек`);
  console.log('═══════════════════════════════════════════════\n');

  let success = 0, failed = 0;

  for (const machine of machines) {
    const ok = await generatePremiumCard(machine);
    if (ok) success++;
    else failed++;
  }

  console.log('\n═══════════════════════════════════════════════');
  console.log(`✅ Успешно: ${success}/${machines.length}`);
  if (failed > 0) console.log(`❌ Ошибок: ${failed}`);
  console.log(`📂 Папка: ${CONFIG.outputDir}`);
  console.log('═══════════════════════════════════════════════');
}

generateAll();