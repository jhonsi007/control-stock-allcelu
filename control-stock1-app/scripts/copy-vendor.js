const fs = require('fs');
const path = require('path');

const toDir = path.join(__dirname, '..', 'www', 'vendor');
fs.mkdirSync(toDir, { recursive: true });

// jsPDF (PDF de faltantes), desde npm
fs.copyFileSync(
  path.join(__dirname, '..', 'node_modules', 'jspdf', 'dist', 'jspdf.umd.min.js'),
  path.join(toDir, 'jspdf.umd.min.js')
);
console.log('jsPDF copiado');

// Firebase (inicio de sesión y base de datos), desde el CDN oficial
const VERSION = '10.14.1';
const files = ['firebase-app-compat.js', 'firebase-auth-compat.js', 'firebase-firestore-compat.js'];

(async () => {
  for (const f of files) {
    const res = await fetch(`https://www.gstatic.com/firebasejs/${VERSION}/${f}`);
    if (!res.ok) throw new Error(`No se pudo bajar ${f}: ${res.status}`);
    fs.writeFileSync(path.join(toDir, f), Buffer.from(await res.arrayBuffer()));
    console.log(f + ' listo');
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
