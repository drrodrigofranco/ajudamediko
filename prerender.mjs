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

// Copia "limpa" do dist/index.html (saida crua do `vite build`, #root vazio),
// lida ANTES de qualquer pagina ser pre-renderizada. O index.tsx agora usa
// hydrateRoot quando #root ja chega com conteudo; se o fallback abaixo lesse
// dist/index.html direto do disco a cada requisicao, a partir da segunda rota
// do loop ele serviria o HTML da HOME ja pre-renderizada (pois o arquivo eh
// sobrescrito a cada iteracao) como shell de TODAS as rotas seguintes -
// causando mismatch de hidratacao (React error #418/#423) em toda pagina
// depois da primeira. Servindo sempre esta copia em memoria, cada rota nova
// sempre monta a partir do shell vazio de verdade (cai no createRoot).
const PRISTINE_SHELL = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);
    const needsFallback = urlPath === '/' || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory();
    if (needsFallback) {
      res.writeHead(200, { 'Content-Type': TYPES['.html'] });
      res.end(PRISTINE_SHELL);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } catch (e) {
    res.writeHead(404); res.end('not found');
  }
});

const wait = (ms) => new Promise(r => setTimeout(r, ms));

const EXAM_IDS = [
  'ecofetal',
  'obstetrico_doppler',
  'obstetrico_sem_doppler',
  'morfologico1',
  'morfologico2',
  'abdometotal',
  'pelvico',
  'transvaginal',
  'prostata',
  'tireoide',
  'carotidas',
  'mama',
  'articulacao_ombro',
  'articulacao_cotovelo',
  'articulacao_punho',
  'articulacao_joelho',
  'articulacao_tornozelo',
  'vascular',
  'espirometria',
  'holter',
  'mapa'
];

async function main() {
  await new Promise(r => server.listen(PORT, r));
  const browser = await launchBrowser();
  const page = await browser.newPage();
  page.on('pageerror', e => console.log('  pageerror:', e.message));

  const targets = [
    { url: '/', file: 'index.html' },
    { url: '/entenda-exames', file: 'entenda-exames/index.html' },
    { url: '/diretriz-primeiro-trimestre', file: 'diretriz-primeiro-trimestre/index.html' },
    { url: '/exames-cardiorespiratorios', file: 'exames-cardiorespiratorios/index.html' },
    { url: '/dicas-gestantes', file: 'dicas-gestantes/index.html' },
    ...EXAM_IDS.map(id => ({ url: `/exame/${id}`, file: `exame/${id}/index.html` }))
  ];

  console.log(`🚀 Iniciando pré-renderização de ${targets.length} páginas...`);

  for (const target of targets) {
    console.log(`  [Prerender] Navegando para ${target.url}...`);
    await page.goto(`http://localhost:${PORT}${target.url}`, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Espera o React montar
    await page.waitForFunction(
      () => {
        const t = document.body ? document.body.innerText : '';
        return t.includes('Clínica Franco') || document.querySelectorAll('h1,h2').length >= 2;
      },
      { timeout: 30000 }
    ).catch(() => console.log(`  aviso: seletor-chave nao confirmado para ${target.url}, seguindo...`));

    await wait(1000); // tempo curto para animacoes assentarem

    const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);

    const outPath = path.join(DIST, target.file);
    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(outPath, html, 'utf-8');

    const bodyText = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').trim().length);
    console.log(`  ✅ Gravado ${target.file} (${html.length} bytes, ~${bodyText} chars de texto)`);
  }

  console.log('✅ Pré-renderização de todas as páginas concluída!');
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
