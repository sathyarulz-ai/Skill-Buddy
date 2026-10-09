import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const manifest = JSON.parse(readFileSync(join(root, 'manifest.webmanifest'), 'utf8'));
const required = ['index.html', 'src/styles.css', 'src/catalogue.js', 'src/app.js', 'sw.js', 'manifest.webmanifest'];
const missing = required.filter(file => !existsSync(join(root, file)));
const missingIcons = (manifest.icons || []).map(icon => icon.src).filter(src => !existsSync(join(root, src.replace(/^\.\//, ''))));
if (missing.length || missingIcons.length) {
  console.error('PWA checks failed', { missing, missingIcons });
  process.exit(1);
}
const html = readFileSync(join(root, 'index.html'), 'utf8');
for (const path of ['./src/styles.css', './src/catalogue.js', './src/app.js', 'manifest.webmanifest']) {
  if (!html.includes(path)) {
    console.error(`index.html does not reference ${path}`);
    process.exit(1);
  }
}
console.log('PWA file and manifest checks passed.');
