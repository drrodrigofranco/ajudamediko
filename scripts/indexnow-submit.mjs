// Submete todas as URLs do public/sitemap.xml ao protocolo IndexNow (Bing/Yandex).
// Uso manual, apos deploy: `node scripts/indexnow-submit.mjs`
// A chave abaixo tem que bater com o arquivo public/<chave>.txt publicado no dominio
// (a Vercel copia tudo de public/ para a raiz do site automaticamente).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = 'ajudamediko.com.br';
const KEY = 'f2be5e2de7124bde9447a9e12edea79b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function extractUrlsFromSitemap(xml) {
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1].trim());
}

async function main() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const urlList = extractUrlsFromSitemap(xml);

  if (urlList.length === 0) {
    console.error('Nenhuma URL encontrada no sitemap.xml.');
    process.exit(1);
  }

  console.log(`Enviando ${urlList.length} URLs ao IndexNow (host: ${HOST})...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  console.log(`Resposta: HTTP ${res.status}`);
  const text = await res.text();
  if (text) console.log(text);

  if (res.status === 200 || res.status === 202) {
    console.log('✅ Envio aceito pelo IndexNow.');
  } else {
    console.error('⚠️  IndexNow retornou um status inesperado - conferir chave/host publicados.');
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('Erro ao enviar para o IndexNow:', e.message || e);
  process.exit(1);
});
