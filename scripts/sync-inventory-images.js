const fs = require('fs');
const path = require('path');

const root = process.cwd();
const inventoryDir = path.join(root, 'public', 'inventory');
const dataPath = path.join(root, 'data', 'inventory.ts');

const imageExts = ['.jpg', '.jpeg', '.png', '.webp', '.jfif'];

if (!fs.existsSync(inventoryDir)) {
  console.error('Folder not found:', inventoryDir);
  process.exit(1);
}

if (!fs.existsSync(dataPath)) {
  console.error('File not found:', dataPath);
  process.exit(1);
}

let code = fs.readFileSync(dataPath, 'utf8');

const folders = fs
  .readdirSync(inventoryDir, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

let updated = 0;
let notFound = [];

function sortImages(a, b) {
  const aNum = parseInt(path.parse(a).name, 10);
  const bNum = parseInt(path.parse(b).name, 10);

  if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) {
    return aNum - bNum;
  }

  return a.localeCompare(b);
}

for (const slug of folders) {
  const folderPath = path.join(inventoryDir, slug);

  const images = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((item) => item.isFile())
    .map((item) => item.name)
    .filter((name) => imageExts.includes(path.extname(name).toLowerCase()))
    .sort(sortImages);

  if (images.length === 0) {
    continue;
  }

  const slugNeedle1 = `slug: '${slug}'`;
  const slugNeedle2 = `slug: "${slug}"`;

  let slugIndex = code.indexOf(slugNeedle1);

  if (slugIndex === -1) {
    slugIndex = code.indexOf(slugNeedle2);
  }

  if (slugIndex === -1) {
    notFound.push(slug);
    continue;
  }

  const imagesIndex = code.indexOf('images:', slugIndex);

  if (imagesIndex === -1) {
    notFound.push(slug);
    continue;
  }

  const lineStart = code.lastIndexOf('\n', imagesIndex) + 1;
  const lineEnd = code.indexOf('\n', imagesIndex);

  const oldLine = code.slice(lineStart, lineEnd);
  const indent = oldLine.match(/^\s*/)?.[0] || '    ';

  const allNumeric = images.every((name, index) => {
    const parsed = path.parse(name);
    return parsed.name === String(index + 1);
  });

  const extensions = [...new Set(images.map((name) => path.extname(name).toLowerCase()))];

  let newLine;

  if (allNumeric && extensions.length === 1) {
    let ext = extensions[0];

    if (ext === '.jpeg' || ext === '.jfif') {
      ext = '.jpg';
    }

    newLine = `${indent}images: Array.from({ length: ${images.length} }, (_, i) => \`/inventory/${slug}/\${i + 1}${ext}\`),`;
  } else {
    const paths = images
      .map((name) => `${indent}  '/inventory/${slug}/${name}',`)
      .join('\n');

    newLine = `${indent}images: [\n${paths}\n${indent}],`;
  }

  code = code.slice(0, lineStart) + newLine + code.slice(lineEnd);

  updated++;
  console.log(`OK: ${slug} - ${images.length} images`);
}

fs.writeFileSync(dataPath, code, 'utf8');

console.log('');
console.log(`Updated machines: ${updated}`);

if (notFound.length > 0) {
  console.log('');
  console.log('Folders not found in data/inventory.ts:');
  for (const slug of notFound) {
    console.log('-', slug);
  }
}