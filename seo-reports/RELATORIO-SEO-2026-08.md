# Relatório de SEO — ajudamediko.com.br

> Documento vivo, atualizado à medida que o trabalho avança. Última atualização: **19/08/2026** (execução do
> plano de ação da 2ª rodada: markdown corrigido, artigos com URL própria, IndexNow configurado).
> Relatórios visuais completos (mais fáceis de ler) publicados como Artifacts — links na seção 6.

## Índice
1. [Auditoria completa (18/08/2026)](#1-auditoria-completa-18082026)
2. [Correções críticas aplicadas e deployadas (18/08/2026)](#2-correções-críticas-aplicadas-e-deployadas-18082026)
3. [Novo exame: Eletrocardiograma (ECG) (18/08/2026)](#3-novo-exame-eletrocardiograma-ecg-18082026)
4. [Conexão com Google Search Console (19/08/2026)](#4-conexão-com-google-search-console-19082026)
5. [Palavras-chave reais — dados do Search Console (19/08/2026)](#5-palavras-chave-reais--dados-do-search-console-19082026)
6. [Links dos relatórios visuais (Artifacts)](#6-links-dos-relatórios-visuais-artifacts)
7. [Bing Webmaster Tools](#7-bing-webmaster-tools-19082026)
8. [Pendências em aberto](#8-pendências-em-aberto)
9. [Otimizações de keyword aplicadas (19/08/2026)](#9-otimizações-de-keyword-aplicadas-19082026)
10. [Segunda rodada — cobertura, GEO e decisão sobre o blog (19/08/2026)](#10-segunda-rodada--cobertura-geo-e-decisão-sobre-o-blog-19082026)
11. [Execução do plano de ação (19/08/2026)](#11-execução-do-plano-de-ação-19082026)

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
- **Cobertura + GEO + decisão sobre o blog (19/08):** https://claude.ai/code/artifact/b6fc366a-0350-422a-af04-0067a31fb2c7

## 7. Bing Webmaster Tools (19/08/2026)

✅ **Conectado.** Site `ajudamediko.com.br` verificado, API key gerada e salva em
`C:\Users\fisio.000\.config\claude-seo\backlinks-api.json`, testado com consulta real
(`bing_webmaster.py counts`) — sem erro.

**Achado:** a primeira consulta retornou **0 links de entrada** pro domínio no índice do Bing. Pode ser porque
o site acabou de ser verificado (Bing ainda não terminou de rastrear) ou pode ser real — bate com o gap já
conhecido de baixa presença em diretórios externos (ex. Doctoralia, sem listagem confirmada desde 25/07).
Reconferir em 1-2 semanas.

Detalhes técnicos completos (scripts, formato do config) em `HANDOFF-SEOTOOLS.md`.

## 8. Pendências em aberto

Consolidado de tudo que ainda não foi resolvido, entre esta rodada e a auditoria de 25/07/2026:

- [ ] **Pedir indexação manual de `/equipe`, `/servicos` e `/medico/tiago-wizenfad`** — links diretos na seção 10
  (único item da lista que só o Rodrigo pode fazer, exige login).
- [x] ~~Corrigir markdown não renderizado~~ — feito 19/08, ver seção 11.
- [x] ~~Dar URL própria aos 3 artigos originais~~ — feito 19/08, ver seção 11.
- [x] ~~Configurar IndexNow~~ — feito 19/08, ver seção 11.
- [ ] ~~Adicionar schema FAQPage/MedicalWebPage a `/entenda-exames`~~ — **decidido não fazer**: o Google
  aposentou o rich result de FAQ pra todos os sites em 07/05/2026 (sem benefício de SERP confirmado). Ver
  seção 11.
- [ ] Reconferir contagem de backlinks no Bing em 1-2 semanas (0 em duas consultas seguidas, seção 7).
- [ ] Revisar clinicamente o conteúdo do novo exame de Eletrocardiograma (seção 3).
- [ ] Confirmar RQE de cada médico antes de reforçar qualquer especialidade no site (regra permanente do
  projeto, ver `HANDOFF.md` — pendência específica: Geriatria do Dr. Lucas, Neurologia do Dr. Guilherme).
- [ ] Reconfirmar Lighthouse mobile depois de alguns dias pra validar a queda real de TBT (seção 2.3).
- [x] ~~Revisar title/meta description de `/entenda-exames`~~ — feito 19/08, ver seção 9.
- [x] ~~Investigar por que `/exame/espirometria` rankeia tão pior~~ — investigado e corrigido 19/08, ver seção 9.
- [ ] **Reconferir em 2-3 semanas** (a partir de 19/08) as métricas de `/entenda-exames` e `/exame/espirometria`
  pra ver se as otimizações de keyword da seção 9 melhoraram posição/CTR (via `gsc_query.py`/`gsc_inspect.py`).
- [ ] Criar/reivindicar perfil no Doctoralia (gap confirmado desde 25/07, ainda sem listagem).
- [ ] Exibir prova social real no site (schema `aggregateRating`/`review` + selo de avaliações — GBP real tem
  nota 5,0/21 avaliações, mas o site não mostra isso).
- [ ] Publicar os 3 rascunhos de artigos restantes (abdome total, check-up do idoso, avaliação neurológica) —
  aguardando revisão médica de cada autor.
- [ ] Ajustar `<title>` da home no SERP se o Google continuar exibindo texto diferente do `<title>` real
  (pendência antiga, pausada em 25/07).

## 9. Otimizações de keyword aplicadas (19/08/2026)

Investigação aprofundada usando o GSC já conectado (query+página, não só por página) sobre as duas
oportunidades sinalizadas na seção 5. Commit `e09f95c`, deploy confirmado ao vivo via `curl`.

### `/entenda-exames`
Causa raiz identificada: **~46 impressões vêm de um cluster específico** ("diferença entre ultrassom e raio-x"
e variações, incluindo tomografia), posições 10-16, **0 cliques**. O conteúdo já respondia a pergunta — o
title/H1/meta description eram genéricos ("Entenda a Diferença entre Exames de Imagem") e não repetiam a frase
literal buscada.

| | Antes | Depois |
|---|---|---|
| Title | "Entenda a Diferença entre Exames de Imagem \| Clínica Franco - Nova Andradina - MS" | "Diferença entre Ultrassom, Raio-X e Tomografia \| Clínica Franco - Nova Andradina - MS" |
| H1 | "Entenda a Diferença entre Exames de Imagem" | "Qual a Diferença entre Ultrassom, Raio-X e Tomografia?" |
| Meta description | (citava os 4 exames, sem repetir "diferença") | Abre com "Qual a diferença entre ultrassom e raio-x, e entre ultrassom e tomografia?" |

Arquivo: `components/ExamsComparisonPage.tsx`. Conteúdo do corpo da página não foi alterado — só o rótulo.

### `/exame/espirometria`
Causa raiz identificada: **~55 impressões vêm do cluster "para que serve [o exame de] espirometria"**,
posições 59-68. Confirmado via URL Inspection API (`gsc_inspect.py`) que **não é problema técnico** — página
indexada normalmente, canonical correto. É competição genuína numa busca nacional genérica (contra grandes
portais de saúde) — o campo que responde essa pergunta (`purpose`) era curto demais pra competir.

| | Antes | Depois |
|---|---|---|
| `purpose` (texto sob "Para que serve e quando é indicado?") | "Quantificar obstruções brônquicas e avaliar a capacidade pulmonar total." | "A espirometria serve para diagnosticar e acompanhar o tratamento de doenças respiratórias crônicas como asma, bronquite crônica e DPOC (enfisema pulmonar), além de quantificar obstruções brônquicas, medir a capacidade pulmonar total e avaliar o risco respiratório antes de cirurgias de médio e grande porte." |

Arquivo: `examsData.ts`, entrada `id: 'espirometria'`.

**Expectativa realista comunicada ao Rodrigo:** a mudança deve ajudar a posição a subir, mas não é razoável
esperar 1ª página do Google pra um termo nacional genérico competindo com grandes portais de saúde — o objetivo
é sair da posição ~54-90 (essencialmente invisível), não necessariamente virar #1.

**Reconferir em 2-3 semanas** (ver item correspondente na seção 8) — mudança de ranking/CTR não é imediata.

## 10. Segunda rodada — cobertura, GEO e decisão sobre o blog (19/08/2026)

Relatório visual completo: https://claude.ai/code/artifact/b6fc366a-0350-422a-af04-0067a31fb2c7

### Cobertura real (36/36 páginas do sitemap, inspecionadas individualmente via URL Inspection API)
**28/36 (77,8%) indexadas normalmente.** As 8 restantes, todas tecnicamente saudáveis (canonical/links internos
confirmados ok em amostra) — não é bug, é tempo/prioridade de rastreamento do Google:

| Página | Status | Nota |
|---|---|---|
| `/blog` | Descoberta, não indexada | ver decisão abaixo |
| `/equipe` | Descoberta, não indexada | **achado novo**, página importante |
| `/servicos` | Descoberta, não indexada | **achado novo**, página importante |
| `/exame/articulacao_cotovelo` | Descoberta, não indexada | destoa dos outros exames de articulação (todos ok) |
| `/politica-de-privacidade.html` | Descoberta, não indexada | provável reflexo do canonical errado, corrigido ontem |
| `/exame/eletrocardiograma` | Desconhecida ao Google | esperado, página nova de anteontem |
| `/medico/tiago-wizenfad` | Desconhecida ao Google | chama atenção — no ar há +1 semana, outros médicos já indexados |
| `/termos-de-uso.html` | Desconhecida ao Google | mesmo caso da política de privacidade |

**Ação recomendada:** pedir indexação manual via Search Console (não dá pra automatizar por API — a Indexing
API só vale pra JobPosting) pelo menos nas 3 mais importantes. Links diretos:
- `/equipe`: https://search.google.com/search-console/inspect?resource_id=sc-domain%3Aajudamediko.com.br&id=https%3A%2F%2Fajudamediko.com.br%2Fequipe
- `/servicos`: https://search.google.com/search-console/inspect?resource_id=sc-domain%3Aajudamediko.com.br&id=https%3A%2F%2Fajudamediko.com.br%2Fservicos
- Dr. Tiago: https://search.google.com/search-console/inspect?resource_id=sc-domain%3Aajudamediko.com.br&id=https%3A%2F%2Fajudamediko.com.br%2Fmedico%2Ftiago-wizenfad

### Bing
Reconfirmado 0 backlinks (mesmo número de ontem). **Achado novo:** IndexNow (protocolo gratuito Bing/Yandex)
não está configurado — nenhuma chave publicada. Oportunidade de baixo esforço pra acelerar indexação no Bing.

### GEO/IA — reauditado, score ~70/100 (antes: 61/100)
- ✅ **Confirmado resolvido**: bug crítico de 18/08 (MAPA/Espirometria invisíveis a robôs em
  `/exames-cardiorespiratorios`) — testado hoje com fetch sem JS e com JS sem simular clique, as 3 abas chegam
  completas.
- 🔴 **Achado novo:** markdown não renderizado — `**texto**` aparecendo com asteriscos literais em vez de
  negrito, em `components/ExamsComparisonPage.tsx` e `components/GuidelineFirstTrimesterPage.tsx` (4 ocorrências),
  exatamente nas frases mais centrais de cada página (ex.: "o ultrassom não utiliza radiação ionizante").
- 🟡 Oportunidade: `/entenda-exames` sem schema FAQPage/MedicalWebPage.
- 🟢 Confirmado: `llms.txt` continua um diferencial real, bem formado.

### O `/blog` está sendo captado? — decisão fechada
Confirmado: `/blog` segue "Descoberta, não indexada". Mas a investigação do componente mudou a recomendação:
**`/blog` só tem curadoria de notícias de terceiros** (cada item linka pra fora, "leia a matéria completa em
[outro site]") — conteúdo derivado, baixo valor de indexação mesmo com URL própria por item.

**Os 3 artigos originais assinados pelos médicos** (Ecocardiograma Fetal, Translucência Nucal, Espirometria —
`articlesData.ts`, renderizados em `components/HealthNewsWidget.tsx`) **não ficam no `/blog` nenhum** — vivem
só como bloco de texto na home, sem URL própria em lugar nenhum do site.

**Recomendação: não vale a pena mexer no `/blog` de curadoria. Vale a pena dar URL própria aos 3 artigos
originais** — é conteúdo único, assinado, com CRM, exatamente o que mais reforça E-E-A-T e citabilidade por IA.
Hoje competem por atenção dentro da home genérica e não acumulam nenhum sinal de página própria. Apontado pela
reauditoria de GEO como a maior oportunidade de autoridade perdida no site.

Volume de busca real (Search Console, 90 dias): "ecocardiograma fetal" já traz 7-10 impressões/mês em posição
2-3 (via a home). "Translucência nucal" não aparece nas 200 buscas mais frequentes — demanda de busca clássica
baixa por enquanto. Ou seja: o ganho principal não é volume de busca no Google, é citabilidade por IA e reforço
de autoridade médica, que ajuda indiretamente as páginas de exame relacionadas.

Esforço técnico (verificado no código): baixo/médio — `articlesData.ts` já tem `id` único e
`relatedExamId` por artigo, a estrutura já está pronta pra virar rota `/blog/{id}`, seguindo o mesmo padrão já
usado 20+ vezes pras páginas de exame (`App.tsx`, `prerender.mjs`, `useSEO`, `sitemap.xml`).

## 11. Execução do plano de ação (19/08/2026)

A pedido do Rodrigo, todos os itens acionáveis da seção 10 foram implementados no mesmo dia (exceto os que só
ele pode clicar, e 1 item descartado por regra do skill de SEO). Build local + `prerender.mjs` rodados com
sucesso antes do commit; deploy segue o padrão já aprovado (push direto na `main`).

### 11.1 Markdown não renderizado — corrigido
As 4 ocorrências de `**texto**` em `components/ExamsComparisonPage.tsx` (linha 83) e
`components/GuidelineFirstTrimesterPage.tsx` (linhas 133, 144, 159) viraram `<strong>texto</strong>` real.
Confirmado por grep: zero ocorrências de `**` restantes nos dois arquivos.

### 11.2 Artigos originais com URL própria — implementado (o item principal)
Os 3 artigos de `articlesData.ts` (Ecocardiograma Fetal, Translucência Nucal, Espirometria) agora têm página
própria em `/blog/{id}`, seguindo exatamente o padrão já usado em `/exame/{id}`:

- **`components/ArticleDetailPage.tsx`** (novo): página com título, autor+CRM, data de publicação, corpo
  completo, disclaimer, e — quando o artigo tem `relatedExamId` — um CTA linkando pro exame relacionado.
  `useSEO` + JSON-LD `MedicalWebPage`/`BreadcrumbList` próprios por artigo.
- **`App.tsx`**: nova rota `/blog/{id}` (bloco `startsWith('/blog/')`, antes do bloco exato `/blog`).
- **`components/BlogPage.tsx`**: nova seção "Artigos da Clínica Franco" no topo da página, listando todos os
  itens de `articlesData` com link pra `/blog/{id}` — **qualquer artigo novo que entrar em `articlesData.ts`
  aparece aqui automaticamente**, cumprindo o pedido de "link pra cada reportagem nova".
- **`components/HealthNewsWidget.tsx`** (vitrine na home): cada artigo agora mostra só o primeiro parágrafo +
  link "Ler artigo completo" pra `/blog/{id}`, em vez do corpo inteiro sem link (evita conteúdo duplicado
  entre a home e a página própria, e dá à home um link indexável pro artigo).
- **`prerender.mjs`**: novo array `ARTICLE_IDS` (cópia fixa dos ids de `articlesData.ts`, mesmo padrão de
  `EXAM_IDS`/`DOCTOR_IDS` — o script roda com `node` puro, sem loader de TS, então não dá pra importar o `.ts`
  diretamente) gerando os 3 `dist/blog/{id}/index.html`, confirmados no build local com conteúdo completo.
- **`public/sitemap.xml`**: 3 novas entradas `/blog/{id}`, `lastmod` = data de publicação de cada artigo.

**Processo para os próximos artigos** (documentado também no `HANDOFF.md`): adicionar a entrada em
`articlesData.ts` **e** o `id` em `ARTICLE_IDS` (`prerender.mjs`) **e** uma linha em `public/sitemap.xml` — a
página, a rota e o link em `/blog` saem de graça por lerem `articlesData.ts` direto, só esses 2 arquivos extra
precisam de edição manual por causa da limitação de import do prerender.

### 11.3 IndexNow (Bing/Yandex) — configurado
- Chave gerada e publicada em `public/f2be5e2de7124bde9447a9e12edea79b.txt` (conteúdo = a própria chave, vira
  `https://ajudamediko.com.br/f2be5e2de7124bde9447a9e12edea79b.txt` após o deploy).
- `scripts/indexnow-submit.mjs` (novo): lê todas as URLs de `public/sitemap.xml` e faz POST pra
  `https://api.indexnow.org/indexnow`. Uso manual, depois de cada deploy que adiciona/muda página relevante:
  `node scripts/indexnow-submit.mjs`.
- **Não integrado à pipeline automática de deploy nesta rodada** — decisão deliberada, pra não arriscar o
  fluxo de deploy existente sem testar o script isolado primeiro. Rodar manualmente após este deploy pra
  validar a resposta HTTP da API antes de considerar automatizar.

### 11.4 Schema FAQPage/MedicalWebPage em `/entenda-exames` — descartado
O skill de SEO usado nesta sessão (`references atualizadas`) sinaliza que o **Google aposentou o rich result
de FAQ pra todos os sites em 07/05/2026** — não há mais benefício de SERP confirmado, e a orientação é não
recomendar novo FAQPage visando esse benefício (só QAPage pra Q&A genuína de usuário). Como esse item do
relatório foi registrado antes dessa mudança, foi descartado em vez de implementado. Se o Rodrigo quiser
mesmo assim por razões de semântica/GEO (não de rich result no Google), é possível reabrir.
