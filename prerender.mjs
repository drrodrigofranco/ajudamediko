// Pré-renderização estática do SPA (para o Google/Bing/IA verem o conteúdo sem executar JS).
// Sobe um servidor estático do dist/, renderiza a home com o Chromium e regrava dist/index.html.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Lanca o Chromium certo para cada ambiente:
// - Na Vercel/CI (Linux enxuto): puppeteer-core + @sparticuz/chromium
// - Local (Windows/Mac): puppeteer normal, que traz o proprio Chromium
async function launchBrowser() {
  const onServer = !!(process.env.VERCEL || process.env.CI);
  if (onServer) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteer = (await import('puppeteer-core')).default;
    return puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }
  const puppeteer = (await import('puppeteer')).default;
  return puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = 4183;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);
    if (urlPath === '/' || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST, 'index.html'); // fallback SPA
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } catch (e) {
    res.writeHead(404); res.end('not found');
  }
});

const wait = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  await new Promise(r => server.listen(PORT, r));
  const browser = await launchBrowser();
  const page = await browser.newPage();
  page.on('pageerror', e => console.log('  pageerror:', e.message));

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Espera o React montar e o texto-chave aparecer no corpo.
  await page.waitForFunction(
    () => {
      const t = document.body ? document.body.innerText : '';
      return t.includes('Nova Andradina') || document.querySelectorAll('h1,h2').length >= 3;
    },
    { timeout: 45000 }
  ).catch(() => console.log('  aviso: seletor-chave nao confirmado, seguindo assim mesmo'));

  await wait(2500); // deixa animacoes/lazy assentarem

  const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);

  const outPath = path.join(DIST, 'index.html');
  fs.writeFileSync(outPath, html, 'utf-8');

  const bodyText = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').trim().length);
  console.log(`✅ prerender ok — ${html.length} bytes gravados, ~${bodyText} chars de texto visivel no body`);

  await browser.close();
  server.close();
}

// IMPORTANTE: nunca quebrar o build de producao. Se o prerender falhar (ex.: Chromium
// indisponivel no ambiente de build), apenas avisa e segue com o SPA normal (que ja tem
// title, meta description e JSON-LD estaticos). Sai com codigo 0.
main().catch(e => {
  console.warn('⚠️  prerender pulado (build segue com SPA normal):', e && (e.message || e));
  try { server.close(); } catch {}
  process.exit(0);
});
