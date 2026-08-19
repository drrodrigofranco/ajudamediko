# 🤝 HANDOFF — ajudamediko (site da Clínica Franco)

> **PARA A IA / AGENTE QUE ESTÁ LENDO ISTO:**
> ⚠️ **Isto NÃO é um "app"** — é o **site institucional da Clínica Franco** (ajudamediko.com.br).
> Nome da marca é só **"Clínica Franco"** — o "+ Associados" foi removido do site de propósito
> (commit `468bb27`, rebranding), não usar mais em textos novos. É tecnicamente implementado como uma SPA React, mas na prática é uma página web
> pública, não uma aplicação com usuários/contas/área logada. Trate como site.
> Este é o arquivo de **continuidade entre sessões** sobre o **site** (código, deploy, estrutura). LEIA-O
> INTEIRO antes de começar.
> **Existe um handoff SEPARADO só sobre a ferramentaria de SEO** (credenciais GSC/Bing, scripts, relatórios):
> `seo-reports/HANDOFF-SEOTOOLS.md`. Não confundir os dois — este arquivo é sobre o site em si.
> **AO TERMINAR (ou quando os tokens estiverem acabando), ATUALIZE este arquivo:**
> 1. Atualize a data e o "Status atual" no topo.
> 2. Mova o que concluiu de "🔜 Próximos passos" para "✅ Histórico".
> 3. Anote decisões novas, caminhos e armadilhas em "⚠️ Armadilhas conhecidas".
> 4. Seja específico: caminhos absolutos, comandos exatos, nomes de arquivo.
> Este arquivo é a **única fonte de verdade** sobre o estado operacional do site.

---

## 📅 Última atualização
- **Data:** 2026-08-19
- **Status atual:** 🟢 Em produção, estável. Auditoria SEO completa feita em 18/08, 3 achados críticos
  corrigidos e deployados no mesmo dia. Página de Eletrocardiograma (ECG) adicionada. Ver
  `seo-reports/RELATORIO-SEO-2026-08.md` para o relatório completo de SEO (achados, correções, dados de
  Search Console).

---

## 🎯 O que é e pra que serve
Site institucional da **Clínica Franco** (Nova Andradina - MS): ultrassonografia (Dr. Rodrigo
Franco), saúde do idoso/clínica geral (Dr. Lucas Franco), avaliação neurológica (Dr. Guilherme Zandoná),
pediatria (Dr. Tiago Wizenfad).

**Objetivo de negócio (não é só "ter um site"):** divulgar a clínica na internet e trazer mais pacientes de
verdade pros atendimentos — o site é ferramenta de captação, não vitrine institucional passiva. Visibilidade
nas buscas locais ("ultrassom em Nova Andradina" e afins) é o meio; agendamento real via WhatsApp é o fim. Toda
decisão de SEO/conteúdo/UX deste projeto deve ser avaliada por essa lente: isso ajuda a trazer mais pacientes?
Ver `seo-reports/` para todo o trabalho de SEO nessa direção.

Tem calculadora gestacional integrada, blog/curadoria de notícias, e uma página dedicada por exame
(`/exame/{id}`) e por médico (`/medico/{id}`).

**Stack:** React 18 + Vite 6 (SPA, sem router de terceiros — roteamento manual em `App.tsx` via
`window.history.pushState`/`popstate`), Tailwind CSS, TypeScript. Hospedado na **Vercel**, deploy automático a
cada push na `main`.

---

## 🗂️ Caminhos e arquivos críticos
- **Raiz do site (código-fonte, caminho atual/canônico):**
  `D:\Workspaces\Claude VS Code\01 - Projetos Ativos\ajudamediko`
  (⚠️ HANDOFFs antigos ou memórias externas podem citar `C:\Users\...\Desktop\Claude VS Code\...` — esse
  caminho está **desatualizado**, o projeto foi migrado pro HD D: em 2026-07-21/2026-07-12.)
- **Configuração:** `package.json`, `vite.config.ts`, `postcss.config.mjs`, `tailwind.config.js`, `vercel.json`
- **Pontos de entrada:**
  - `index.html` — HTML estático servido, contém meta tags/JSON-LD base + snippet do Google Tag (ver
    armadilhas abaixo)
  - `index.tsx` — entrada do React
  - `App.tsx` — layout + roteamento manual por `window.location.pathname` (não usa React Router)
- **Componentes:** `components/`
- **Dados centralizados (fonte única, não duplicar):**
  - `examsData.ts` — conteúdo completo de cada exame (usado por `/exame/{id}` via `ExamDetailPage.tsx`)
  - `ultrasoundExamsData.ts` — catálogo mestre resumido dos exames (usado por `Services.tsx`, `ServicesPage.tsx`,
    formulário de contato) — **⚠️ `components/ExamsDrawer.tsx` tem uma lista local duplicada, não importada
    daqui** — ao adicionar/editar exame, atualizar os dois lugares.
  - `doctorsData.ts` — dados da equipe médica
  - `articlesData.ts` — artigos originais assinados pelos médicos, cada um com página própria em
    `/blog/{id}` (`components/ArticleDetailPage.tsx`) desde 2026-08-19. **Ao publicar um artigo novo, editar
    3 lugares:** (1) adicionar o objeto em `articlesData.ts`, (2) adicionar o `id` no array `ARTICLE_IDS` em
    `prerender.mjs` (não dá pra importar o `.ts` direto — mesma razão de `EXAM_IDS`/`DOCTOR_IDS`), (3) adicionar
    a entrada em `public/sitemap.xml`. A página, a rota (`App.tsx`) e o link em `/blog` (`BlogPage.tsx`) e na
    home (`HealthNewsWidget.tsx`) já leem `articlesData.ts` direto, não precisam de edição.
  - `curatedNewsData.ts` — curadoria de notícias externas (blog, seção secundária, sem página própria)
- **Páginas legais (arquivos HTML estáticos isolados, fora do React/prerender):**
  `public/politica-de-privacidade.html`, `public/termos-de-uso.html` — reescritas em 2026-08-18 (ver
  Armadilhas).
- **Rascunhos de conteúdo médico aguardando revisão:** `content-drafts/` (ver Armadilhas — nunca publicar
  conteúdo clínico sem aprovação do médico correspondente).
- **Pré-render:** `prerender.mjs`, roda como `postbuild` (Puppeteer/`puppeteer-core`+`@sparticuz/chromium` no
  ambiente Vercel). Gera HTML estático por rota em `dist/` pra SEO/crawlers. `EXAM_IDS`/`DOCTOR_IDS` no topo do
  arquivo listam as rotas geradas dinamicamente.

---

## 🔑 Acesso (ambiente LOCAL/PROD)
- **URLs:**
  - Local: `http://localhost:3000` (ou `3001` se a porta padrão estiver ocupada)
  - Produção: `https://ajudamediko.com.br`
- **Repo:** `github.com/drrodrigofranco/ajudamediko`, branch `main` = produção (push dispara deploy Vercel
  automático; push de outra branch gera preview)
- **Login:** sem área administrativa autenticada.
- **Credenciais de ferramentas de SEO (GSC/Bing):** ver `seo-reports/HANDOFF-SEOTOOLS.md` — não ficam neste
  repositório, ficam em `C:\Users\fisio.000\.config\claude-seo\` (fora do controle de versão).

---

## ▶️ Como subir o sistema
```bash
cd "D:\Workspaces\Claude VS Code\01 - Projetos Ativos\ajudamediko"
npm install   # node_modules já existe hoje; rodar só se faltar ou após npm ci limpo
npm run dev
npm run build # dispara TypeScript check + Vite build + prerender.mjs (gera dist/ completo, ~35 páginas)
```

---

## ✅ Histórico (resumo — detalhes completos em `seo-reports/RELATORIO-SEO-2026-08.md` e na memória do projeto)
- **2026-07-12:** Migração pro caminho atual em `01 - Projetos Ativos`.
- **2026-07-11 a 2026-07-25:** Fase 1 (404 de robots/sitemap corrigido, pré-render implantado), Fase 2 (páginas
  por exame), correções de schema/performance/visual/conteúdo, 3 primeiros artigos do blog publicados.
- **2026-08-18:** Auditoria SEO completa (score 69/100) + 3 correções críticas deployadas no mesmo dia
  (canonical das páginas legais, conteúdo de MAPA/Espirometria invisível a crawlers, script Google Tag
  duplicado) + página de Eletrocardiograma (ECG) adicionada.
- **2026-08-19:** Google Search Console conectado via API (service account + OAuth). Relatório de palavras-chave
  reais gerado. Bing Webmaster Tools — ver status em `seo-reports/HANDOFF-SEOTOOLS.md`. Segunda rodada de
  análise (cobertura 36/36 URLs, GEO reauditado, decisão sobre o blog). Execução do plano de ação: markdown
  quebrado corrigido, artigos originais com página própria (`/blog/{id}`), IndexNow configurado — ver
  `seo-reports/RELATORIO-SEO-2026-08.md` seção 11.

---

## 🔜 Próximos passos
Ver seção "Pendências em aberto" em `seo-reports/RELATORIO-SEO-2026-08.md` — é a lista viva e mais atual, não
duplicar aqui.

**Achado ao organizar o repositório em 2026-08-19 — 5 branches de blog nunca mergeadas na `main`:**
Existe uma rotina automatizada que gera posts de blog em branches próprias (`blog-update-YYYY-MM-DD`). Checado
via `git log HEAD..origin/main` que **nenhuma delas está na produção** — ficaram paradas, provavelmente
aguardando revisão/aprovação do Rodrigo que nunca aconteceu:
- `origin/blog-update-2026-08-04` — matéria sobre aprovação do ultrassom morfológico obrigatório no SUS
- `origin/blog-update-2026-08-07` — só merge de `main`, sem conteúdo próprio novo (provavelmente pode ser
  descartada)
- `origin/blog-update-2026-08-10` — 2 matérias curadas (PNS 2026, InfoGripe SRAG)
- `origin/blog-update-2026-08-16` — só merge de `main`, sem conteúdo próprio novo (idem acima)
- `origin/blog-update-2026-08-19` — matéria sobre iniciativa HEARTS 2.0 (OPAS/OMS)
- `origin/claude/site-access-up3heu` — parece ser uma versão anterior/duplicada do post de ecocardiograma fetal
  que já foi mergeado por outro caminho (commit `3f8c39b`) — candidata a descarte, mas confirmar antes.

Não mergeei nenhuma sem aprovação do Rodrigo (conteúdo de saúde/curadoria médica). Próxima sessão: revisar com
ele quais aprovar e mergear, e apagar as branches obsoletas/vazias pra limpar o repositório.

---

## ⚠️ Armadilhas conhecidas (NÃO repetir erros)
- **🚨 REGRA DO PROJETO — publicidade médica, nunca declarar especialidade sem RQE:** o CFM proíbe um médico
  anunciar/se apresentar como especialista numa área sem ter o **RQE (Registro de Qualificação de Especialista)**
  registrado — mesmo em texto oculto ou em campos "invisíveis" como `medicalSpecialty` do schema.org (o Google
  pode exibir isso, e conta como declaração pública de especialidade). Vale pra qualquer lugar do site: texto
  visível, meta tags, JSON-LD, `focusAreas`, título de página, etc. **Antes de anunciar/reforçar qualquer
  especialidade pra qualquer médico da equipe, confirmar explicitamente com o Rodrigo se aquele médico tem o
  RQE correspondente registrado no CFM.** Sem essa confirmação, não implementar — mesmo que pedido diretamente.
  Precedente já registrado (2026-07-25): pedido de reforçar "Geriatria" (Dr. Lucas) e "Neurologia" (Dr.
  Guilherme) via schema foi recusado por falta dessa confirmação; ainda pendente.
- **Porta em uso:** Vite pode subir na `3001` se a `3000` estiver ocupada.
- **Título/description da home tem DOIS lugares:** `index.html` (estático) e o hook `useSEO({...path:'/'...})`
  dentro de `App.tsx` (sobrescreve via JS **depois** que o React monta — e é esse valor que fica gravado no
  HTML pré-renderizado, já que o `prerender.mjs` tira o snapshot depois da hidratação). Editar title/description
  da home sem editar os dois lugares causa divergência entre o que o robô vê e o `index.html` cru.
- **`prerender.mjs` roda em ambiente sem input real de usuário** — qualquer coisa que dependa de
  `requestIdleCallback`/timers/eventos do usuário pode disparar *durante a própria automação* e ficar congelada
  no HTML estático (foi a causa do bug do script duplicado do Google Tag, corrigido em 2026-08-18 — ver o
  comentário no próprio `prerender.mjs` antes da linha que tira o snapshot).
- **`components/ExamsDrawer.tsx` tem uma lista de exames duplicada**, não importada de `ultrasoundExamsData.ts`.
  Ao adicionar um exame novo, atualizar os dois lugares (mais `examsData.ts`, `prerender.mjs` `EXAM_IDS`,
  `public/sitemap.xml`, `OfferCatalog` em `index.html`).
- **Páginas legais (`public/politica-de-privacidade.html`, `termos-de-uso.html`) são HTML estático isolado**,
  fora do pipeline React/prerender — editar diretamente esses arquivos, não `App.tsx`.
- **Não fabricar conteúdo clínico definitivo sem revisão médica** — vale pra artigos do blog e pra qualquer
  texto de preparo/indicação de exame novo (ex.: o ECG adicionado em 18/08 ainda aguarda essa revisão).
- **Nunca commitar credenciais de API** (GSC, Bing, etc.) — ficam em `C:\Users\fisio.000\.config\claude-seo\`,
  fora deste repositório.

---

## 🧠 Docs relacionados
- `README.md`
- `seo-reports/HANDOFF-SEOTOOLS.md` — continuidade específica da ferramentaria de SEO (credenciais, scripts)
- `seo-reports/RELATORIO-SEO-2026-08.md` — relatório vivo de SEO (achados, correções, dados, pendências)
- Memória do projeto (fora do repo): `project_ajudamediko_seo.md` no sistema de memória do Claude Code
