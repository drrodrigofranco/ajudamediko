# Relatório de SEO — ajudamediko.com.br

> Documento vivo, atualizado à medida que o trabalho avança. Última atualização: **19/08/2026**.
> Relatórios visuais completos (mais fáceis de ler) publicados como Artifacts — links na seção 6.

## Índice
1. [Auditoria completa (18/08/2026)](#1-auditoria-completa-18082026)
2. [Correções críticas aplicadas e deployadas (18/08/2026)](#2-correções-críticas-aplicadas-e-deployadas-18082026)
3. [Novo exame: Eletrocardiograma (ECG) (18/08/2026)](#3-novo-exame-eletrocardiograma-ecg-18082026)
4. [Conexão com Google Search Console (19/08/2026)](#4-conexão-com-google-search-console-19082026)
5. [Palavras-chave reais — dados do Search Console (19/08/2026)](#5-palavras-chave-reais--dados-do-search-console-19082026)
6. [Links dos relatórios visuais (Artifacts)](#6-links-dos-relatórios-visuais-artifacts)
7. [Bing Webmaster Tools](#7-bing-webmaster-tools)
8. [Pendências em aberto](#8-pendências-em-aberto)

---

## 1. Auditoria completa (18/08/2026)

Auditoria SEO completa do site em produção, feita com 9 subagentes especializados em paralelo (technical,
schema, content/E-E-A-T, sitemap, performance, visual, GEO, local, SXO), comparando contra o baseline da
auditoria anterior de 25/07/2026.

**Score geral: 69/100.**

| Frente | Score | Resumo |
|---|---|---|
| Técnico | 84 | 1 crítico (canonical errado), 2 médios (CSP ausente, trailing slash) |
| Schema | 88 | 7/7 itens do commit de julho confirmados corretos |
| Conteúdo / E-E-A-T | 58 | Artigos e perfis de médico bons; páginas de exame rasas/sem autoria visível |
| Sitemap | 92 | 35 URLs (cresceu de 33), tudo 200, sem soft-404 |
| Performance mobile | 43 | Regrediu vs. baseline por bug de duplicação de script (ver item 2) |
| Performance desktop | 96 | Nunca foi problema |
| Visual / mobile | 70 | Fix de julho só parcial — sobreposição do Hero ainda ocorria |
| GEO / busca por IA | 61 | Espirometria invisível a crawlers de IA; blog sem permalink |
| Local / GBP | 77 | Revisado de 39→77 (score anterior presumia dado errado do GBP) |
| SXO | 65 | Site voltou a rankear #1-#2 pro orgânico; gap agora é prova social |

**3 achados críticos identificados** (detalhados na seção 2, todos corrigidos no mesmo dia):
1. Canonical das páginas legais apontando pra domínio de staging alheio.
2. Conteúdo de MAPA/Espirometria invisível a rastreadores em `/exames-cardiorespiratorios`.
3. Script do Google Tag duplicado, piorando TBT mobile em 48%.

## 2. Correções críticas aplicadas e deployadas (18/08/2026)

Commit `235bff5` (branch `main`, deploy automático via Vercel). Todas as 4 correções confirmadas **ao vivo em
produção** via `curl` direto no site pós-deploy.

### 2.1 Canonical das páginas legais
`public/politica-de-privacidade.html` e `public/termos-de-uso.html` tinham `<link rel="canonical">` apontando
pra um domínio de staging do Google Cloud Run (`...us-west1.run.app`) — não pra `ajudamediko.com.br`.

**Descoberta importante ao investigar:** o texto das duas páginas não era só "genérico com marca errada" — era
o conteúdo de um **produto completamente diferente**: um chatbot de IA médica com monetização por Google
AdSense. Nada disso existe no site real (sem chat, sem AdSense). As duas páginas foram **reescritas do zero**
para refletir a Clínica Franco de fato: agendamento via WhatsApp, cookies do Google Analytics/Ads, LGPD.
Aprovação pedida ao Rodrigo antes de reescrever conteúdo legal.

- ✅ Canonical corrigido pros dois arquivos.
- ✅ Título, meta description e corpo reescritos.
- ✅ Confirmado ao vivo: `canonical href="https://ajudamediko.com.br/politica-de-privacidade.html"` (e
  equivalente pra termos-de-uso).

### 2.2 Conteúdo de MAPA/Espirometria invisível a rastreadores
`components/CardioRespiratoryExamsPage.tsx` (rota `/exames-cardiorespiratorios`) usava `useState` pra montar
**só a aba ativa** no DOM. O `prerender.mjs` visita a rota uma única vez com `'holter'` como padrão — MAPA e
Espirometria nunca apareciam no HTML estático servido a crawlers.

- ✅ As 3 abas agora renderizam sempre no DOM; visibilidade alternada por CSS (`hidden` + `aria-hidden`), não
  mais por montagem condicional.
- ✅ Confirmado ao vivo: texto de "Monitorização Ambulatorial da Pressão Arterial" (MAPA) e "Prova de Função
  Pulmonar" (Espirometria) presentes no HTML cru da página.

### 2.3 Script do Google Tag duplicado
O fix de performance de 25/07 (`9bd083c`, `requestIdleCallback` pro gtag) **piorou o TBT mobile em 48%**
(1,1s → 1,63s, Lighthouse Performance 47 → 43). Causa raiz: `prerender.mjs` tira o snapshot depois de só 1s de
espera fixa — tempo suficiente pro `requestIdleCallback` já ter disparado durante a própria automação do
Puppeteer, congelando o `<script src=".../gtag/js...">` no HTML estático. No navegador real, o snippet original
(também presente no HTML por ser estático) rodava de novo — script duplicado.

Correção em duas camadas:
- ✅ **Primária, em `prerender.mjs`:** remove `script[src*="googletagmanager.com"]` do DOM antes de capturar o
  snapshot — determinístico, não depende de timing.
- ✅ **Defesa extra, em `index.html`:** guarda de idempotência (`window.__gtagRuntimeLoaded` + checagem de
  `querySelector` antes de criar a tag).
- ✅ Confirmado ao vivo: zero ocorrências de `<script src=".../gtag/js...">` embutidas no `<head>` da home.
- ⏳ **Pendente de reconfirmação:** medir o Lighthouse mobile novamente daqui uns dias pra confirmar o TBT
  voltando perto do baseline de 1,1s (efeito real de usuário, não só ausência da tag no HTML).

## 3. Novo exame: Eletrocardiograma (ECG) (18/08/2026)

A pedido do Rodrigo, adicionado como exame com página dedicada, seguindo o mesmo padrão de
Holter/MAPA/Espirometria (exame diferente do Holter — este é o ECG de repouso convencional, ~5-10min, não o
contínuo de 24h).

**Arquivos tocados:** `examsData.ts` (nova entrada, fonte de `/exame/eletrocardiograma`),
`ultrasoundExamsData.ts` (catálogo mestre usado por Services/ServicesPage/Contact), `components/ExamsDrawer.tsx`
(lista local duplicada — atenção nisso em exames futuros), `prerender.mjs` (`EXAM_IDS`), `public/sitemap.xml`,
`index.html` (`OfferCatalog` do JSON-LD), `public/llms.txt`, `components/Footer.tsx`, `components/About.tsx`,
`components/Services.tsx`, `components/ServicesPage.tsx`.

- ✅ `/exame/eletrocardiograma` no ar, pré-renderizado, no sitemap.
- ⚠️ **Conteúdo clínico ainda não revisado por um médico** — escrito seguindo o padrão dos outros exames, mas
  recomendo revisão do Dr. Rodrigo antes de considerar definitivo (mesmo cuidado já aplicado aos artigos do
  blog no histórico do projeto).

## 4. Conexão com Google Search Console (19/08/2026)

Motivação: checagens de indexação do `/blog` feitas por busca ao vivo (18/08) davam evidência indireta, não o
dado oficial. Descoberto que **o Search Console já estava verificado** (propriedade `sc-domain:ajudamediko.com.br`,
tipo Domínio, dados desde maio/2026) — só faltava conectar a API.

**Feito:**
- ✅ Projeto criado no Google Cloud ("seo ajudamediko" / `bustling-sunset-506013-f5`) + 5 APIs ativadas (Search
  Console, PageSpeed Insights, CrUX, Indexing, GA4 Data).
- ✅ API key criada, restrita a PageSpeed/CrUX.
- ✅ Service account criada (`seo-tools@bustling-sunset-506013-f5.iam.gserviceaccount.com`), chave JSON salva.
- ✅ Acesso concedido à service account na propriedade do Search Console (nível Completo/`siteFullUser`).
- ✅ Configuração salva em `C:\Users\fisio.000\.config\claude-seo\google-api.json` e
  `C:\Users\fisio.000\.config\claude-seo\service-account.json` (fora do repositório do projeto, por serem
  credenciais — nunca commitar esses arquivos).
- ✅ Testado de ponta a ponta: `gsc_query.py sites`, `sitemaps`, `query` e `gsc_inspect.py` funcionando.

**Dado oficial obtido (URL Inspection API), substituindo a checagem por busca ao vivo:**

| URL | Status de indexação |
|---|---|
| `/` (home) | ✅ Submitted and indexed, rastreada 13/08 |
| `/exame/holter` | ✅ Submitted and indexed, rich results de Breadcrumbs ok |
| `/blog` | ⚠️ **Discovered - currently not indexed** — confirma oficialmente o achado da auditoria (sem `/blog/:slug` próprio, o Google só "descobre" mas não prioriza indexar) |
| `/exame/eletrocardiograma` | ⏳ URL is unknown to Google — esperado, página nova (18/08), já está no sitemap |

**Nota sobre a Indexing API:** tentei pedir rastreamento antecipado da página nova de ECG via Indexing API —
bloqueado (permissão + a própria ferramenta avisa que essa API é só pra JobPosting/BroadcastEvent; usar pra
páginas comuns viola os termos do Google e arrisca perda de acesso). Não vale subir a permissão da service
account pra "Proprietário" só por isso — o caminho certo é deixar o rastreamento natural via sitemap acontecer
(mesmo caminho que já indexou o Holter em poucos dias).

## 5. Palavras-chave reais — dados do Search Console (19/08/2026)

Relatório completo de Search Analytics, 90 dias, por busca e por página. Ver Artifact na seção 6 pra tabelas
completas. Achados principais:

- **"ultrassom nova andradina"** é a keyword-mãe: sozinha, metade de todo clique real do site (12 de 24),
  posição média 2,8.
- Site aparece até em buscas pelo nome do concorrente ("ultra imagem nova andradina", 13 impressões).
- **Maior oportunidade parada:** `/entenda-exames` — 471 impressões (3ª maior visibilidade do site), só 0,4% de
  CTR. Candidato nº1 pra revisar title/meta description.
- **Anomalia a investigar:** `/exame/espirometria` na posição 54 (destoante das outras páginas de exame, que
  ficam entre posição 4-17).
- **Página mais eficiente:** `/medico/guilherme-zandona`, CTR de 15,5% — o dobro proporcional da página do Dr.
  Rodrigo. Vale replicar o que funciona lá.
- Buscas genéricas com posição boa e zero clique: "doctor near me" (38 impr., posição 5,6), "clinica" (26 impr.,
  posição 4,7) — Google já entende relevância, falta snippet mais convincente.
- Amostra pequena (24 cliques em 90 dias) — tratar como direção, não certeza estatística.

## 6. Links dos relatórios visuais (Artifacts)

- **Auditoria completa + correções (18/08):** https://claude.ai/code/artifact/01e91642-682a-4c06-98b7-14c929a150c6
- **Palavras-chave reais (19/08):** https://claude.ai/code/artifact/160e8c5c-0b94-466c-a580-d5f591f76871

## 7. Bing Webmaster Tools

🔜 **Em andamento.** Próximo passo depois da seção 4 (Google já conectado). Plano: verificar o site via
"Importar do Google Search Console" (mais rápido, já que o Google está pronto) em
https://www.bing.com/webmasters, depois gerar API key em Configurações > Acesso à API, salvar em
`C:\Users\fisio.000\.config\claude-seo\backlinks-api.json`.

_(Esta seção será atualizada assim que o Bing estiver conectado.)_

## 8. Pendências em aberto

Consolidado de tudo que ainda não foi resolvido, entre esta rodada e a auditoria de 25/07/2026:

- [ ] Conectar Bing Webmaster Tools (seção 7, em andamento).
- [ ] Revisar clinicamente o conteúdo do novo exame de Eletrocardiograma (seção 3).
- [ ] Reconfirmar Lighthouse mobile depois de alguns dias pra validar a queda real de TBT (seção 2.3).
- [ ] Dar URL própria (`/blog/:slug`) a cada artigo do blog — resolve a raiz do problema de indexação (seção 4).
- [ ] Revisar title/meta description de `/entenda-exames` (maior oportunidade de CTR parada, seção 5).
- [ ] Investigar por que `/exame/espirometria` rankeia tão pior que as outras páginas de exame (posição 54).
- [ ] Criar/reivindicar perfil no Doctoralia (gap confirmado desde 25/07, ainda sem listagem).
- [ ] Exibir prova social real no site (schema `aggregateRating`/`review` + selo de avaliações — GBP real tem
  nota 5,0/21 avaliações, mas o site não mostra isso).
- [ ] Publicar os 3 rascunhos de artigos restantes (abdome total, check-up do idoso, avaliação neurológica) —
  aguardando revisão médica de cada autor.
- [ ] Ajustar `<title>` da home no SERP se o Google continuar exibindo texto diferente do `<title>` real
  (pendência antiga, pausada em 25/07).
