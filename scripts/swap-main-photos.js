const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════
// 📸 СПИСОК: какое фото сделать главным (1.jpg)
// ═══════════════════════════════════════════════════
const SWAPS = [
  { folder: '1996-case-ih-7230',          newMain: 4 },
  { folder: '2002-case-ih-2388',          newMain: 2 },
  { folder: '2002-john-deere-8220',       newMain: 11 },
  { folder: '2004-john-deere-9660-sts',   newMain: 2 },
  { folder: '2007-john-deere-1990ccs',    newMain: 2 },
  { folder: '2008-miller-condor-a40',     newMain: 1 },
  { folder: '2009-john-deere-4730',       newMain: 13 },
  { folder: '2011-case-ih-patriot-3230',  newMain: 9 },
  { folder: '2012-brent-2096',            newMain: 13 },
  { folder: '2012-john-deere-1990ccs',    newMain: 1 },
  { folder: '2012-john-deere-9560r',      newMain: 2 },
  { folder: '2013-john-deere-616c',       newMain: 2 },
  { folder: '2013-john-deere-s680',       newMain: 1 },
  { folder: '2015-case-ih-magnum-310',    newMain: 8 },
  { folder: '2015-case-ih-patriot-4440',  newMain: 6 },
  { folder: '2015-kubota-m7-171-premium', newMain: 1 },
  { folder: '2017-case-ih-rb565',         newMain: 2 },
  { folder: '2017-new-holland-980cr',     newMain: 5 },
  { folder: '2018-new-holland-t8-410',    newMain: 5 },
  { folder: '2019-case-ih-4412',          newMain: 1 },
  { folder: '2019-john-deere-s770',       newMain: 3 },
  { folder: '2020-john-deere-8r-370',     newMain: 11 },
  { folder: '2021-jm-1412-20t',           newMain: 1 },
  { folder: '2021-john-deere-560m',       newMain: 2 },
  { folder: '2021-john-deere-s790',       newMain: 10 },
  { folder: '2021-kubota-mx5400',         newMain: 3 },
  { folder: '2022-case-ih-farmall-75c',   newMain: 3 },
  { folder: '2022-case-ih-farmall-105a',  newMain: 10 },
  { folder: '2023-kubota-m7060',          newMain: 1 },
  { folder: '2024-ez-trail-550',          newMain: 3 },
];

const INVENTORY_DIR = './public/inventory';

function swapPhotos(folderName, newMainNum) {
  const folderPath = path.join(INVENTORY_DIR, folderName);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`❌ Папка не найдена: ${folderName}`);
    return false;
  }
  
  // Если newMain = 1, ничего не делаем
  if (newMainNum === 1) {
    console.log(`⏭️  ${folderName} — уже 1.jpg, пропускаем`);
    return true;
  }
  
  const file1 = path.join(folderPath, '1.jpg');
  const fileN = path.join(folderPath, `${newMainNum}.jpg`);
  const fileTemp = path.join(folderPath, '_temp_swap.jpg');
  
  if (!fs.existsSync(file1)) {
    console.log(`❌ Не найден 1.jpg в ${folderName}`);
    return false;
  }
  
  if (!fs.existsSync(fileN)) {
    console.log(`❌ Не найден ${newMainNum}.jpg в ${folderName}`);
    return false;
  }
  
  try {
    // 1. 1.jpg → _temp_swap.jpg
    fs.renameSync(file1, fileTemp);
    // 2. N.jpg → 1.jpg
    fs.renameSync(fileN, file1);
    // 3. _temp_swap.jpg → N.jpg
    fs.renameSync(fileTemp, fileN);
    
    console.log(`✅ ${folderName}: ${newMainNum}.jpg → 1.jpg`);
    return true;
  } catch (err) {
    console.log(`❌ Ошибка в ${folderName}: ${err.message}`);
    return false;
  }
}

function run() {
  console.log('═══════════════════════════════════════════');
  console.log('📸 ПЕРЕИМЕНОВАНИЕ ГЛАВНЫХ ФОТО');
  console.log(`📂 ${SWAPS.length} машин в очереди`);
  console.log('═══════════════════════════════════════════\n');
  
  let success = 0;
  let failed = 0;
  let skipped = 0;
  
  for (const { folder, newMain } of SWAPS) {
    const result = swapPhotos(folder, newMain);
    if (result === true && newMain === 1) skipped++;
    else if (result) success++;
    else failed++;
  }
  
  console.log('\n═══════════════════════════════════════════');
  console.log(`✅ Переименовано: ${success}`);
  console.log(`⏭️  Пропущено: ${skipped} (уже 1.jpg)`);
  if (failed > 0) console.log(`❌ Ошибок: ${failed}`);
  console.log('═══════════════════════════════════════════');
  console.log('\n🚀 Следующие шаги:');
  console.log('1. Перегенерируй рекламные карточки:');
  console.log('   node scripts/generate-cards.js');
  console.log('2. Задеплой сайт:');
  console.log('   vercel --prod');
}

run();