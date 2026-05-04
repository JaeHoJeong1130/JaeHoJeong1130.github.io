import fs from 'fs';
import path from 'path';

const mainTsxPath = path.join(process.cwd(), 'src', 'main.tsx');
const stylesCssPath = path.join(process.cwd(), 'src', 'styles.css');

const mainTsx = fs.readFileSync(mainTsxPath, 'utf8');
const stylesCss = fs.readFileSync(stylesCssPath, 'utf8');

let errors = 0;

if (mainTsx.includes('device-visual')) {
  console.error('FAIL: device-visual is still present in main.tsx');
  errors++;
} else {
  console.log('PASS: device-visual removed from main.tsx');
}

if (!stylesCss.includes('background: #F5F5F7')) {
  console.error('FAIL: background: #F5F5F7 is missing in styles.css');
  errors++;
} else {
  console.log('PASS: background: #F5F5F7 found in styles.css');
}

if (errors > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED.');
  process.exit(0);
}
