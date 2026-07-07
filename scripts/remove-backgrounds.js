const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const REMOVE_BG_API_KEY = 'hP1KCuqcS52dxKDrdecidwCA';
const INVENTORY_DIR = './public/inventory';
const OUTPUT_DIR = './public/inventory-nobg';

const machines = JSON.parse(fs.readFileSync('./scripts/machines.json', 'utf-8'));

async function removeBg(inputPath, outputPath) {
  const formData = new FormData();
  formData.append('image_file', fs.createReadStream(inputPath));
  formData.append('size', 'auto');

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': REMOVE_BG_API_KEY,
      },
    });

    fs.writeFileSync(outputPath, response.data);
    return true;
  } catch (error) {
    if (error.response) {
      const errorMsg = Buffer.from(error.response.data).toString('utf-8');
      console.log(`  ❌ Ошибка: ${errorMsg.substring(0, 100)}`);
    } else {
      console.log(`  ❌ ${error.message}`);
    }
    return false;
  }
}

async function processAll() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`🎨 Удаление фона у ${machines.length} фото...\n`);

  let success = 0;
  let failed = 0;

  for (const machine of machines) {
    const inputPath = path.join(INVENTORY_DIR, machine.slug, '1.jpg');
    const outputPath = path.join(OUTPUT_DIR, `${machine.slug}.png`);

    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  ${machine.slug} (уже обработано)`);
      success++;
      continue;
    }

    if (!fs.existsSync(inputPath)) {
      console.log(`❌ ${machine.slug} (нет 1.jpg)`);
      failed++;
      continue;
    }

    process.stdout.write(`🔄 ${machine.slug}... `);
    const result = await removeBg(inputPath, outputPath);
    
    if (result) {
      console.log('✅');
      success++;
    } else {
      failed++;
    }

    // Пауза 1 сек между запросами (чтобы не превысить лимит)
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\n✅ Готово: ${success}, ❌ Ошибок: ${failed}`);
  console.log(`📂 Папка: ${OUTPUT_DIR}`);
}

processAll();