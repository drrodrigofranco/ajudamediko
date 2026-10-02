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
- **2026-10-02 (aprovada e publicada pelo Dr. Rodrigo):** novo artigo assinado
  `ecocardiograma-fetal-diagnostico-antes-do-nascimento-estudos` (articlesData.ts) com 5 estudos reais conferidos no
  PubMed e links DOI. `OriginalArticle` ganhou os campos opcionais `references` (renderizado em ArticleDetailPage e
  usado em `citation` no JSON-LD), `seoTitle` e `seoDescription`. Id também em `prerender.mjs` (ARTICLE_IDS) e
  `public/sitemap.xml`. Ao criar novos artigos assinados, usar esses campos para título ≤ 60 e descrição ≤ 155.
- **Data:** 2026-09-28
- **Status atual:** 🟢 Em produção, estável. 5ª médica adicionada à equipe: **Dra. Giovanna Cristina Silva e
  Silva** (CRM-MS 14686, `id: giovanna-silva`), atendimento voltado à saúde da pele/cabelos/unhas. **RQE não
  confirmado** (tem pós-graduação lato sensu em Dermatologia Clínica pelo IPEMED-AFYA, mas sem confirmação de
  Registro de Qualificação de Especialista no CFM) — por isso, ao contrário dos outros 4 médicos, ela **não**
  tem `medicalSpecialty`/`jsonLdDescription` preenchidos em `doctorsData.ts`, e nenhum texto visível usa
  "Dermatologista"/"Dermatologia" como especialidade declarada (só aparece como nome factual do curso de
  pós-graduação em "Formação Acadêmica"). Se o Rodrigo confirmar o RQE dela no futuro, seguir o checklist da
  entrada "🚨 REGRA DO PROJETO" abaixo antes de reforçar a especialidade em qualquer lugar. Novo `iconName:
  'Sparkles'` adicionado ao union type e aos 3 mapas de ícones (`Curriculum.tsx`, `TeamPage.tsx`,
  `DoctorDetailPage.tsx`) — primeira vez que um 5º ícone foi necessário.
  - **2ª rodada (mesmo dia):** o Rodrigo notou que a primeira rodada só cobriu os lugares *data-driven*
    (`doctorsData.ts`) — faltavam os lugares **hardcoded** da home/site que citam os médicos manualmente,
    fora de `doctorsData.ts`. Corrigido: `Navbar.tsx` (linha de créditos no cabeçalho), `Footer.tsx` (lista de
    CRMs no rodapé real do site), `Services.tsx`/`ServicesPage.tsx` (novo card "Saúde da Pele, Cabelos e
    Unhas" no catálogo de tipos de consulta da home e de `/servicos` — **essa era a lacuna de SEO mais
    relevante**, a clínica tinha uma área de atuação nova sem nenhum card/CTA pra ela), e `public/llms.txt`
    (seção "Equipe médica" — também aproveitado pra corrigir uma lacuna **pré-existente**, o Dr. Tiago já
    estava faltando lá desde a publicação dele). Ver checklist ampliado logo abaixo, em "Caminhos e arquivos
    críticos", com a lista completa de **9 lugares** a editar ao adicionar médico novo (5 data-driven + 4
    hardcoded). `medicalSpecialty`/`knowsAbout`/`hasOfferCatalog` do JSON-LD em `index.html` também não
    foram alterados (mesma regra de RQE, e `hasOfferCatalog` é só pra `MedicalTest`, não pra consultas).
  - **3ª rodada (mesmo dia, sessão seguinte):** o Rodrigo mandou uma foto de grupo nova com os 5 médicos (a
    Giovanna já fisicamente incluída), resolvendo a pendência do `Hero.tsx`/`equipe-clinica-franco.jpg`
    acima. Ver detalhes em "Resolvido em 2026-09-28" na seção "Próximos passos" abaixo.
  - Anterior: Auditoria SEO completa (todas as páginas, foco em médicos e exames) entregue e parcialmente
  implementada: breadcrumb de exame corrigido, links internos exame↔artigo e médico↔card de consulta
  adicionados (PRs #39, #40), e — a pedido explícito do Rodrigo — `medicalSpecialty`/`jsonLdDescription` no
  JSON-LD dos 4 médicos anteriores (PRs #41, #42, #43). Ver a entrada correspondente em "⚠️ Armadilhas
  conhecidas" abaixo — **é a norma oficial pra reforçar área médica de um médico novo daqui pra frente**, ler
  antes de repetir esse tipo de pedido.

---

## 🎯 O que é e pra que serve
Site institucional da **Clínica Franco** (Nova Andradina - MS): ultrassonografia (Dr. Rodrigo
Franco), saúde do idoso/clínica geral (Dr. Lucas Franco), avaliação neurológica (Dr. Guilherme Zandoná),
pediatria (Dr. Tiago Wizenfad), saúde da pele/cabelos/unhas (Dra. Giovanna Silva e Silva).

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
  `G:\Meu Drive\VS CODE\01 - Projetos Ativos\ajudamediko`
  (⚠️ HANDOFFs antigos ou memórias externas podem citar `D:\Workspaces\Claude VS Code\...` ou
  `C:\Users\...\Desktop\Claude VS Code\...` — ambos **desatualizados**. O projeto está hoje no Google Drive
  local (`G:\`), confirmado e corrigido em 2026-09-28 — ver regra geral de workspace na memória do Claude
  Code, `workspace_g_drive_vs_code.md`.)
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
  - `doctorsData.ts` — dados da equipe médica. **Ao adicionar um médico novo, editar 9 lugares** (5
    data-driven/estruturais + 4 hardcoded de conteúdo — checklist consolidado em 2026-09-28 depois de uma
    2ª rodada ter sido necessária pra cobrir os hardcoded que a 1ª rodada não pegou):
    - **Data-driven/estruturais (sem isso a página/rota não existe ou não é indexada):**
      1. Adicionar o objeto em `doctorsData.ts` (seguir a interface `DoctorData` — ver campos
         `medicalSpecialty`/`jsonLdDescription` e a regra de RQE em "⚠️ Armadilhas conhecidas" antes de
         preencher `specialtyLabel`/`focusAreas`/`longBio`);
      2. Salvar a foto em `public/images/dr-{nome}.jpg` (mesmo padrão pra médicas também — ex.:
         `dr-giovanna-silva.jpg`) e registrar `photoWidth`/`photoHeight` reais;
      3. Adicionar o `id` no array `DOCTOR_IDS` em `prerender.mjs` (mesma razão de
         `EXAM_IDS`/`ARTICLE_IDS`/`NEWS_IDS` — Node roda o script direto, sem importar o `.ts`);
      4. Adicionar a entrada em `public/sitemap.xml`;
      5. Adicionar o médico ao bloco `employee[]` do JSON-LD `MedicalBusiness` em `index.html` (**não** é
         gerado a partir de `doctorsData.ts`).
    - **Conteúdo hardcoded da home/site (não é gerado a partir de `doctorsData.ts` — fácil de esquecer,
      já esqueceu uma vez):**
      6. `components/Navbar.tsx` — linha de créditos no cabeçalho (`Dr. X (CRM ...) | Dr. Y (CRM ...)`),
         aparece em toda página;
      7. `components/Footer.tsx` — lista de `<span>` com nome+CRM no rodapé real do site (diferente do
         footer *dentro* de `DoctorDetailPage.tsx`, que já é data-driven), aparece em toda página;
      8. `components/Services.tsx` **e** `components/ServicesPage.tsx` — se o médico novo tiver uma área de
         atuação/tipo de consulta que ainda não tem card no catálogo de serviços (era o caso da Giovanna:
         "Saúde da Pele, Cabelos e Unhas" não existia até 28/09), adicionar um card novo em **ambos** os
         arquivos (comentário em `ServicesPage.tsx:19-23` já avisa sobre a duplicação); se a área já é
         coberta por um card existente (ex.: um 2º médico geriatra somando ao card "Saúde do Idoso"), talvez
         baste adicionar um link a mais, avaliar caso a caso;
      9. `public/llms.txt` — seção "Equipe médica" (arquivo de descoberta pra LLMs/buscadores generativos).
    - Se o `iconName` do médico novo não estiver entre os já existentes (`HeartPulse`, `Stethoscope`, `Brain`,
      `Baby`, `Sparkles`), adicionar o ícone novo ao union type em `doctorsData.ts` **e** aos 3 mapas
      `BADGE_ICONS`/`ICONS` locais em `Curriculum.tsx`, `TeamPage.tsx` e `DoctorDetailPage.tsx` (não há um
      único lugar centralizado pra isso) — e ao import de `lucide-react` em `Services.tsx` se for usado lá
      também.
    - **NÃO precisam de edição** (já leem `doctorsData.ts` direto): a Home (`Curriculum.tsx`), `/equipe`
      (`TeamPage.tsx`), a página `/medico/{id}` (`DoctorDetailPage.tsx`) e o bloco "Conheça a Equipe"/footer
      *dentro* dela.
    - **Avaliar caso a caso, não editar por padrão:** `components/Hero.tsx` (texto + `alt` da foto de capa,
      `doctorImgSrc` em `App.tsx`) — só citar o médico novo aqui se ele estiver fisicamente na foto de grupo
      usada; `medicalSpecialty`/`knowsAbout` do JSON-LD em `index.html` — só com confirmação explícita de RQE
      pelo Rodrigo, mesma regra de sempre.
  - `articlesData.ts` — artigos originais assinados pelos médicos, cada um com página própria em
    `/blog/{id}` (`components/ArticleDetailPage.tsx`) desde 2026-08-19. **Ao publicar um artigo novo, editar
    3 lugares:** (1) adicionar o objeto em `articlesData.ts`, (2) adicionar o `id` no array `ARTICLE_IDS` em
    `prerender.mjs` (não dá pra importar o `.ts` direto — mesma razão de `EXAM_IDS`/`DOCTOR_IDS`), (3) adicionar
    a entrada em `public/sitemap.xml`. A página, a rota (`App.tsx`) e o link em `/blog` (`BlogPage.tsx`) e na
    home (`HealthNewsWidget.tsx`) já leem `articlesData.ts` direto, não precisam de edição.
  - `curatedNewsData.ts` — curadoria de notícias externas (fonte, resumo em vários parágrafos, referências
    bibliográficas opcionais), cada matéria com página própria em `/blog/{id}` (`components/NewsDetailPage.tsx`)
    desde 2026-09-02, a pedido do Rodrigo ("quero sempre agora uma página para cada reportagem" — antes o
    conteúdo completo ficava só num bloco dentro de `/blog`). Toda página de matéria também mostra uma caixa de
    "Curadoria e revisão médica" com foto + nome + CRM do Dr. Rodrigo (`public/images/dr-rodrigo-franco-byline.jpg`).
    **Ao publicar uma matéria nova, editar 3 lugares:** (1) adicionar o objeto em `curatedNewsData.ts`, (2)
    adicionar o `id` no array `NEWS_IDS` em `prerender.mjs`, (3) adicionar a entrada em `public/sitemap.xml` —
    mesmo processo já usado para `articlesData.ts`/`ARTICLE_IDS`. A rota `/blog/{id}` (`App.tsx`) decide entre
    `ArticleDetailPage` e `NewsDetailPage` checando em qual dos dois arrays o `id` existe; o link em `/blog`
    (`BlogPage.tsx`) já lê `curatedNewsData.ts` direto, não precisa de edição.
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
cd "G:\Meu Drive\VS CODE\01 - Projetos Ativos\ajudamediko"
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
- **2026-09-04:** Auditoria externa de SEO local (geriatria/neurologia/pediatria) e publicação do 5º artigo
  original (`/blog/sinais-de-alerta-na-infancia-quando-procurar-o-pediatra`, Dr. Tiago) — ver
  `seo-reports/RELATORIO-SEO-2026-08.md` seção 12.
- **2026-09-05:** Auditoria SEO completa (todas as páginas, foco em `/medico/:id` e `/exame/:id`) +
  correção do bug de breadcrumb `#servicos` (PR #39) + links internos exame↔artigo/notícia (PR #39) e
  médico↔card de consulta (PR #40) + `medicalSpecialty`/`jsonLdDescription` no JSON-LD dos 4 médicos, a pedido
  explícito do Rodrigo e com o aviso de risco registrado (PRs #41, #42, #43) — ver a norma completa em
  "Armadilhas conhecidas".
- **2026-09-28:** 5ª médica adicionada — Dra. Giovanna Cristina Silva e Silva (CRM-MS 14686, `id:
  giovanna-silva`), atendimento à saúde da pele/cabelos/unhas. Local reconciliado com produção antes de editar
  (`git pull origin main --ff-only`, estava 17 commits atrasado). RQE de especialidade **não confirmado** —
  `medicalSpecialty`/`jsonLdDescription` deixados de fora por padrão (diferente dos outros 4 médicos), nenhum
  texto visível usa "Dermatologista"/"Dermatologia" como especialidade declarada. Ícone novo `Sparkles`
  adicionado (union type + 3 mapas de ícones). `npx tsc --noEmit` e `npm run build` (com prerender) rodados
  sem erros antes do commit; conferido via grep que "Dermatolog*" só aparece como nome do curso de
  pós-graduação em "Formação Acadêmica", não como especialidade declarada em title/description/JSON-LD.
- **2026-09-28 (2ª rodada, mesmo dia):** cobertos os lugares **hardcoded** que a 1ª rodada deixou de fora —
  `Navbar.tsx`, `Footer.tsx`, novo card "Saúde da Pele, Cabelos e Unhas" em `Services.tsx`/`ServicesPage.tsx`,
  `public/llms.txt` (+ Tiago, que já estava faltando lá antes). Ver checklist completo de 9 itens em "Caminhos
  e arquivos críticos" e o resumo em "Status atual" no topo. `Hero.tsx` deixado de propósito sem citar a
  Giovanna (foto de grupo real, sem ela) — pendência registrada abaixo.

---

## 🔜 Próximos passos
Ver seção "Pendências em aberto" (8) e a seção 12.5 em `seo-reports/RELATORIO-SEO-2026-08.md` — é a lista viva
e mais atual, não duplicar aqui. Destaque: rascunhos de geriatria e neurologia (`content-drafts/`) ainda
aguardando revisão de Lucas e Guilherme — mesmo processo que já publicou o de pediatria hoje, só falta a
aprovação médica pra seguir o mesmo caminho (adicionar em `articlesData.ts` + `ARTICLE_IDS` +
`sitemap.xml`).

**Resolvido em 2026-09-28 (mesmo dia) — foto de grupo da equipe atualizada:** o Rodrigo mandou uma foto de
grupo nova com os 5 (a Dra. Giovanna já fisicamente incluída). `public/images/equipe-clinica-franco.jpg`
substituída (recorte/resize pra manter o aspect ratio 900x502 exigido por `Hero.tsx`, praticamente sem corte
já que a foto original já vinha em proporção quase idêntica). `Hero.tsx` atualizado: `alt` da imagem, o
parágrafo com os 5 nomes, e a linha de áreas de atendimento (acrescentado "Saúde da Pele, Cabelos e Unhas").

**Pendente desde 2026-09-28 — RQE da Dra. Giovanna:** se/quando o Rodrigo confirmar o RQE de Dermatologia
dela no CFM, aplicar o mesmo tratamento já dado a Lucas/Guilherme/Tiago: preencher `medicalSpecialty`/
`jsonLdDescription` em `doctorsData.ts` (avisando sobre o trade-off de `medicalSpecialty` não ser
garantidamente invisível, mesma conversa já documentada em "Armadilhas conhecidas"), e só então liberar usar
"Dermatologista"/"Dermatologia" como especialidade declarada em texto visível.

**Achado ao organizar o repositório em 2026-08-19 — branches de blog nunca mergeadas na `main`:**
Existe uma rotina automatizada que gera posts de blog em branches próprias (`blog-update-YYYY-MM-DD`). Checado
via `git log HEAD..origin/main` que **nenhuma delas está na produção** — ficaram paradas, provavelmente
aguardando revisão/aprovação do Rodrigo que nunca aconteceu:
- `origin/blog-update-2026-08-04` — matéria sobre aprovação do ultrassom morfológico obrigatório no SUS
- `origin/blog-update-2026-08-07` — só merge de `main`, sem conteúdo próprio novo (provavelmente pode ser
  descartada)
- `origin/blog-update-2026-08-10` — 2 matérias curadas (PNS 2026, InfoGripe SRAG)
- `origin/blog-update-2026-08-16` — só merge de `main`, sem conteúdo próprio novo (idem acima)
- `origin/blog-update-2026-08-19` — matéria sobre iniciativa HEARTS 2.0 (OPAS/OMS)
- `origin/blog-update-2026-08-25` — **achado novo em 2026-09-04**, não listada nas rodadas anteriores; à
  primeira vista parece uma reestruturação grande do blog (mexe em 14 arquivos, remove `NewsDetailPage.tsx` e
  imagens que hoje existem em produção) — **não investigada a fundo, provavelmente obsoleta/superada por
  trabalho posterior já em `main`**. Confirmar antes de mergear ou descartar.
- `origin/claude/site-access-up3heu` — parece ser uma versão anterior/duplicada do post de ecocardiograma fetal
  que já foi mergeado por outro caminho (commit `3f8c39b`) — candidata a descarte, mas confirmar antes.

Não mergeei nenhuma sem aprovação do Rodrigo (conteúdo de saúde/curadoria médica). Próxima sessão: revisar com
ele quais aprovar e mergear, e apagar as branches obsoletas/vazias pra limpar o repositório.

**Também pendente desde 04/09:** a branch `content-draft-pediatria-2026-09-04` (só o rascunho de texto +
atualizações de documentação, anterior à publicação real) ficou no GitHub e não foi mergeada nem apagada —
pode ser descartada, já que o conteúdo dela foi superado pela publicação real em `main` (commit `4080c41`).

---

## ⚠️ Armadilhas conhecidas (NÃO repetir erros)
- **🚨 REGRA DO PROJETO — publicidade médica, nunca declarar especialidade sem RQE (texto visível):** o CFM
  proíbe um médico anunciar/se apresentar como especialista numa área sem ter o **RQE (Registro de Qualificação
  de Especialista)** registrado. Isso vale de forma absoluta pra qualquer **texto visível** do site: badge da
  página do médico (`specialtyLabel`), `longBio`/`shortBio`, `focusAreas`, título de página (`seoTitle`), meta
  description visível ao usuário, atributo `alt` de imagem, etc. **Nunca** escrever "especialista em X" nesses
  campos sem confirmação explícita do Rodrigo de que o médico tem o RQE correspondente registrado no CFM.
  - **Atualização 2026-09-05 — dado estruturado (JSON-LD) é uma zona cinzenta, não uma proibição igual:** o
    Rodrigo (dono da clínica) pediu explicitamente para reforçar área de atuação de 3 médicos **só no JSON-LD**
    (`medicalSpecialty` do schema.org `Physician` + o campo `description` do mesmo bloco), sem tocar em nenhum
    texto visível. Fui transparente com ele: expliquei que `medicalSpecialty` não é garantidamente invisível (o
    Google pode exibir esse dado estruturado em rich results/painéis), diferente de uma meta tag `keywords`
    (essa sim nunca aparece em lugar nenhum, mas o Google a ignora pra ranking desde ~2009). Também levantei que
    a Resolução CFM nº 2.336/2023 define "publicidade médica" de forma ampla ("qualquer meio de divulgação"),
    então uma leitura mais rígida pode alcançar até metadado invisível — não achei norma do CFM que trate
    especificamente de dado estruturado/JSON-LD/metadados, então essa ambiguidade não está resolvida por norma
    nenhuma. Rodrigo decidiu prosseguir ciente do risco (decisão dele sobre o próprio negócio, registrada aqui
    pra transparência, não uma isenção geral de responsabilidade minha em pedidos futuros parecidos).
  - **Implementado (PRs #41, #42, #43, branch `claude/site-access-up3heu` → `main`)**: `doctorsData.ts` tem 2
    campos pensados exatamente pra isso, mantendo o texto visível intocado:
    - `medicalSpecialty?: string | string[]` — vai direto pro campo `medicalSpecialty` do JSON-LD Physician em
      `DoctorDetailPage.tsx`. Hoje: Lucas="Geriatria", Guilherme="Neurologia", Tiago="Pediatria",
      Rodrigo=["Ultrassonografia","Perícia Médica"].
    - `jsonLdDescription?: string` — sobrescreve *só* o `description` do JSON-LD (por padrão esse campo usa
      `specialtyLabel`, que **também** é renderizado visivelmente — badge sob a foto + `alt` da imagem; por
      isso não dá pra editar `specialtyLabel` direto quando a intenção é só metadado). Hoje: Lucas="Atendimento
      Clínico ao Adulto e Geriatria", Guilherme="Clínica Médica e Neurologia". Rodrigo e Tiago não precisaram
      desse campo porque o próprio `specialtyLabel` deles já continha a palavra exata ("Pediatria Clínica",
      "Ultrassonografia Diagnóstica e Perícia Médica").
  - **Precedente 2026-09-28 — RQE não confirmado (5ª médica, Dra. Giovanna Silva e Silva):** ao contrário do
    precedente acima (Lucas/Guilherme/Tiago, que tinham confirmação explícita do Rodrigo), a Dra. Giovanna
    entrou com pós-graduação em Dermatologia Clínica mas **sem** confirmação de RQE registrado no CFM. Segui a
    regra à risca: `medicalSpecialty`/`jsonLdDescription` ficaram **de fora** de `doctorsData.ts` pra ela, e
    `specialtyLabel`/`focusAreas`/`seoTitle`/`longBio` usam só linguagem descritiva de atendimento ("saúde da
    pele, cabelos e unhas"), nunca "Dermatologista"/"Dermatologia" como especialidade. A pós-graduação
    aparece normalmente em "Formação Acadêmica" (fato objetivo, não é declaração de especialidade). Se o
    Rodrigo confirmar o RQE dela no futuro, aplicar o mesmo checklist abaixo pra reforçar a especialidade.
  - **Norma pra médico novo (deixar como checklist pronto):**
    1. Nunca preencher `specialtyLabel`/`longBio`/`focusAreas`/`seoTitle` com "especialista em X" sem RQE
       confirmado pelo Rodrigo — como sempre.
    2. Se o Rodrigo pedir reforço de área médica só nos metadados: perguntar primeiro se ele quer o mecanismo
       mais seguro (`<meta name="keywords">`, nunca exibido, mas com efeito de SEO ~nulo) ou `medicalSpecialty`
       no JSON-LD (não garantidamente invisível, avisar sobre rich results e a Res. CFM 2.336/2023 antes de
       implementar). Não decidir por conta própria — ele escolhe ciente do trade-off.
    3. Usar `medicalSpecialty` (área) e `jsonLdDescription` (só se `specialtyLabel` não tiver a palavra exata)
       em `doctorsData.ts`, nunca editar `specialtyLabel` pra isso.
    4. Rodar `npx tsc --noEmit` + `npm run build`, e conferir via `grep`/script Python que a palavra nova
       aparece no JSON-LD (`dist/medico/{id}/index.html`) e **não** aparece em nenhum texto visível/`alt` novo
       (comparar antes/depois).
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
