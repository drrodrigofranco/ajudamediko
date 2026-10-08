# Relatório SEO — Outubro/2026 (Clínica Franco · Nova Andradina - MS)

**Início:** 07/10/2026 · **Última atualização:** 08/10/2026 (2ª rodada) · **Site:** https://ajudamediko.com.br
**Alvo:** "ultrassom em Nova Andradina" e variações (morfológico, obstétrico, Doppler, abdome, tireoide etc.),
consultas, e as cidades vizinhas (Batayporã, Ivinhema, Anaurilândia, Deodápolis, Angélica, Rosana-SP).

> **Dados de ferramentas:** nesta rodada o Semrush respondeu "sem créditos de API" e a PageSpeed API respondeu
> "cota diária excedida". O Search Console e o Bing Webmaster ficam na máquina local do Rodrigo (ver
> `HANDOFF-SEOTOOLS.md`). Por isso **este relatório não traz nenhum número de volume de busca, posição ou
> tráfego**. Tudo o que está aqui foi medido direto no HTML de produção.

---

## 0. Resumo do que foi feito (07–08/10/2026)

| PR | Data | O que entrou no ar |
|----|------|--------------------|
| [#58](https://github.com/drrodrigofranco/ajudamediko/pull/58) | 07/10 | Coordenadas reais da clínica, endereço com bairro, `hasMap`/`logo`, exames com `MedicalTest`, imagem própria por exame, títulos ≤ 65 caracteres, "Veja também" por grupo de exames |
| [#59](https://github.com/drrodrigofranco/ajudamediko/pull/59) | 07/10 | 4 matérias curtas e fora do tema foram retiradas (redirect 301 → `/blog`) |
| [#60](https://github.com/drrodrigofranco/ajudamediko/pull/60) | 07/10 | Foto do Dr. Rodrigo maior na página dele e em `/equipe` (visual, sem efeito de SEO) |
| [#61](https://github.com/drrodrigofranco/ajudamediko/pull/61) | 07/10 | SEO on-page: exames, serviços e equipe com a cidade; subtítulos por exame; bloco "Onde fazer"; médicos como `IndividualPhysician`; consultas no catálogo; `og:locale`; ícone do iPhone; imagens no sitemap; exames no `llms.txt` |

**IndexNow (Bing/Yandex):** enviado 3 vezes, todas com HTTP 200: depois do #58 e do #59 (49 URLs + as 4 URLs
retiradas) e depois do #61 (49 URLs).

**Estado atual:** do lado do código, o site está **completo para SEO local**. O que ainda falta depende de ações
fora do site (seção 5) e de conteúdo novo com revisão médica (seção 6).

---

## 1. Diagnóstico inicial (07/10) e situação hoje

| Achado em 07/10 | Situação hoje |
|---|---|
| Coordenada do site era o centro genérico da cidade (`-22.2333, -53.3444`), **~2,3 km** do pino real (`-22.2533183, -53.3517322`) | ✅ Corrigido (#58) |
| 18 dos 22 exames tinham só 2 links internos | ✅ Corrigido (#58), com "Veja também" por grupo |
| Páginas de exame não declaravam o exame nos dados estruturados | ✅ Corrigido (#58), com `MedicalWebPage` → `MedicalTest` |
| 30 de 53 páginas com título > 65 caracteres (cortado com "…") | ✅ Exames, médicos e páginas fixas corrigidos. ⏳ Os títulos das matérias de notícia continuam longos (seção 7) |
| 4 matérias de curadoria com 124–181 palavras, fora do tema (o relatório de 07/10 dizia "6" por engano) | ✅ Retiradas (#59) |
| H1 dos exames sem a cidade, subtítulos genéricos ("O que é este exame?") e em nível H3 | ✅ Corrigido (#61) |
| H1 genéricos em `/servicos` ("Nossos Serviços") e `/equipe` ("Nossa Equipe") | ✅ Corrigido (#61) |
| Médicos como `Physician` sem endereço (no schema.org, `Physician` representa um estabelecimento) | ✅ Agora `IndividualPhysician` + `practicesAt` + endereço/telefone (#61) |
| Consultas fora do catálogo de serviços nos dados estruturados | ✅ Incluídas como `Service`, só com nomes já visíveis (#61) |
| Sem `og:locale` e sem ícone para iPhone | ✅ Corrigido (#61) |

**O que já estava bom e não mudou:**
- HTTPS + HSTS, e http/www redirecionam para o domínio principal.
- 404 verdadeiro para páginas que não existem.
- `robots.txt` liberado para todos os robôs (Googlebot, Bingbot, Applebot e IAs).
- Todas as páginas pré-renderizadas, com canonical e 1 H1.
- Nenhuma imagem sem `alt`.
- JS da home com ~120 KB compactado.
- Home com "Nova Andradina" 24 vezes e todas as cidades da região no texto visível.

---

## 2. Novidades das plataformas (pesquisa de 07–08/10) e impacto no site

Conferido no registro oficial do Google Search Central (julho–outubro/2026), nas regras do Bing e na página do
Applebot. **Conclusão: nenhuma novidade exige mudança obrigatória no site.** O site já segue as regras atuais.

### Google
| Data | Novidade | Impacto |
|---|---|---|
| Mar/2026 | Core update; saúde e "páginas de modelo por cidade" foram afetadas | Não criar páginas copiadas por cidade |
| 21/05/2026 | Core update de maio | Sem ação |
| 07/05/2026 | Rich result de FAQ descontinuado | O `FAQPage` fica no site (ajuda IA e não prejudica). Sem ação |
| Mar–Set/2026 | 4 spam updates (o último começou em 24/09) | Nada no site se enquadra. Acompanhar no Search Console |
| 2026 | Modo IA em português; agentes que ligam e agendam | O site já tem `OpeningHoursSpecification`, `OfferCatalog` e NAP consistentes |
| 28/08/2026 | Lista oficial de formatos de favicon | SVG está na lista. Sem ação |
| Set/2026 | Quadros de "agregador/fornecedor" para negócios locais | **Só na Europa (EEA)**. Não afeta o Brasil |
| 16/09/2026 | Selo de "perfil na Busca" para sites | É só um link, não ajuda no ranking. Não adotado |
| 01/10/2026 | Orientação sobre conteúdo feito com IA atualizada | A marcação IPTC de imagem por IA só é obrigatória em e-commerce. As ilustrações dos exames não violam nada, mas fotos reais pesam mais em saúde (seção 6) |

### Bing / Microsoft
- **AI Performance** no Bing Webmaster Tools (prévia, fev/2026): mostra citações do site no Copilot.
- As regras reescritas para o Copilot dizem que **os dados estruturados precisam bater com o conteúdo visível**.
  Por isso as consultas no `OfferCatalog` usam só nomes que aparecem em `/servicos`.
- IndexNow segue recomendado e está em uso.

### Apple
- **Apple Business** (antigo Business Connect), desde 14/04/2026, inclusive no Brasil. É o cadastro que alimenta
  Apple Mapas, Siri, Spotlight e Safari.
- **Applebot** (página atualizada em 04/09/2026) também alimenta as respostas da Siri com IA. O site libera o
  Applebot. **Não** bloquear o `Applebot-Extended`: ele só tira o site do treino da IA da Apple e não traz
  ganho na busca.
- Anúncios no Apple Mapas existem só nos EUA e no Canadá.

---

## 3. Correções da 1ª rodada — PR #58 (07/10)

| # | O quê | Arquivo |
|---|-------|---------|
| 1 | Coordenadas do pino real do Google Maps (`geo.position`, `ICBM`, JSON-LD `geo`) | `index.html` |
| 2 | Endereço com bairro: "Rua Melvin Jones, 1243 - Centro" | `index.html` |
| 3 | `hasMap` (CID 13553900120423430324) e `logo` no `MedicalBusiness` | `index.html` |
| 4 | Cada exame declara `MedicalWebPage` → `about: MedicalTest`, com a clínica como `provider` | `components/ExamDetailPage.tsx` |
| 5 | Imagem de compartilhamento (WhatsApp/Facebook) = foto do próprio exame | `components/ExamDetailPage.tsx` |
| 6 | Título do exame adaptável (≤ 65 caracteres), mantendo "Nova Andradina" | `components/ExamDetailPage.tsx` |
| 7 | "Veja também" com exames do mesmo grupo (`EXAM_GROUPS`) | `components/ExamDetailPage.tsx` |
| 8 | `seoTitle` curtos nos 5 médicos (só termos já visíveis, regra CFM/RQE) | `doctorsData.ts` |
| 9 | Títulos de /exames-cardiorespiratorios, /entenda-exames e /diretriz-primeiro-trimestre encurtados | `components/*.tsx` |

## 4. Correções da 2ª rodada — PRs #59 e #61 (07/10)

**#59 — matérias retiradas:** `ms-sarampo-vacinacao-sp-2026`, `fiocruz-agosto-dourado-aleitamento-2026`,
`fiocruz-julho-amarelo-hepatites-2026` e `oms-sus-referencia-mundial-2026` saíram de `curatedNewsData.ts`,
`NEWS_IDS` (`prerender.mjs`) e `sitemap.xml`. As URLs antigas redirecionam para `/blog` via `vercel.json`.

**#61 — SEO on-page (itens 1 a 5 da análise de 07/10):**

| # | O quê | Arquivo |
|---|-------|---------|
| 1a | H1 de todo exame com "em Nova Andradina - MS" (2ª linha) | `components/ExamDetailPage.tsx` |
| 1b | Subtítulos H2 com o nome do exame: "O que é o ultrassom de abdome total?", "Como é feito/feita…", "Para que serve…", "Quando fazer…", "Dúvidas frequentes sobre…". Campo novo `searchName` em cada exame | `examsData.ts`, `components/ExamDetailPage.tsx` |
| 1c | Bloco visível "Onde fazer … em Nova Andradina": endereço, horário, WhatsApp, cidades atendidas e link do Maps | `components/ExamDetailPage.tsx` |
| 1d | `alt` da imagem: "Ilustração do exame … - Clínica Franco, Nova Andradina - MS" | `components/ExamDetailPage.tsx` |
| 1e | Nomes "Morfológico 1º/2º Trimestre" → "Ultrassom Morfológico do 1º/2º Trimestre" (página e `OfferCatalog`) | `examsData.ts`, `index.html` |
| 2 | `/servicos`: H1 "Exames de Ultrassom e Consultas em Nova Andradina - MS" e title novo. `/equipe`: H1 "Equipe Médica da Clínica Franco em Nova Andradina" e title novo | `components/ServicesPage.tsx`, `components/TeamPage.tsx` |
| 3a | Médicos como `IndividualPhysician` com `practicesAt`, endereço e telefone | `index.html`, `components/DoctorDetailPage.tsx` |
| 3b | Consultas no `hasOfferCatalog` como `Service`: Consulta Médica (Clínica Geral), Saúde do Idoso, Saúde Neurológica, Pediatria, Saúde da Pele/Cabelos/Unhas, Perícia Médica | `index.html` |
| 4 | `og:locale` pt_BR e `apple-touch-icon.png` 180×180 | `index.html`, `public/apple-touch-icon.png` |
| 5 | Sitemap com imagens dos 22 exames e dos 5 médicos (`image:image`) e lastmod 07/10. `llms.txt` com a lista dos 22 exames | `public/sitemap.xml`, `public/llms.txt` |

Os textos médicos dos exames (descrição, preparo, FAQ) **não foram alterados**.

**Verificação em todas as rodadas:**
- `npx tsc --noEmit` e `npm run build` (pré-render de 47 páginas) sem erros.
- HTML gerado conferido (title, H1/H2, alt, JSON-LD, links).
- Capturas de tela no computador e no celular.
- Conferência em produção antes de cada envio ao IndexNow.

---

## 5. Ações fora do site (só o Rodrigo/Grazi podem fazer)

### 5.1 Logo após as mudanças
- [ ] **Search Console → Inspeção de URL → "Solicitar indexação"** em `/`, `/servicos`, `/exame/morfologico2`,
  `/exame/abdometotal` e `/exame/obstetrico_doppler`. O IndexNow não avisa o Google.
- [ ] Acompanhar o Search Console nas próximas 2–4 semanas: impressões das páginas de exame e o relatório
  "Dados estruturados" (médicos e exames).
- [ ] Bing Webmaster → **AI Performance**: ver se o site já aparece citado no Copilot.

### 5.2 Perfil da Empresa no Google, Apple Business e Bing Places
1. Nome, endereço ("R. Melvin Jones, 1243 - Centro"), telefone e horário **idênticos** ao site. O horário de
   **segunda a sábado, 06:00–22:00** foi confirmado pelo Rodrigo em 07/10.
2. Cadastrar cada exame como "Serviço", com os mesmos nomes do site e link para `/exame/...`.
3. Apple Business (business.apple.com) e Bing Places com os mesmos dados.
4. Avaliações: frequência constante. O Rodrigo já sabe como conduzir essa parte.

### 5.3 Diretórios
Doctoralia, BoaConsulta, catalogo.med.br, Solutudo e as listas dos convênios, sempre com o mesmo nome, endereço e
telefone.

---

## 6. Conteúdo a criar (precisa de revisão médica)

1. **Fotos reais da clínica** (fachada, recepção, sala do aparelho, sem pacientes) para substituir as ilustrações
   geradas dos exames. É a principal melhoria restante, reforçada pela orientação do Google de 01/10/2026.
2. Ampliar as páginas de exame mais buscadas (morfológico 1º/2º trimestre, obstétrico com Doppler, abdome total,
   tireoide) com seções como "O que o laudo traz", "Quanto tempo para o resultado" e "Precisa de pedido médico?".
3. Artigos assinados com dúvidas reais de pacientes, por exemplo "Morfológico do 2º trimestre: quando agendar",
   "Ultrassom de tireoide: preciso de jejum?", "Doppler de carótidas: quem deve fazer", e ultrassom de abdome e
   fígado (aproveitando o tema da matéria de hepatites retirada).
4. Não criar páginas copiadas por cidade. A área de atendimento já está coberta pelo bloco "Onde fazer" de cada
   exame e pela home.

---

## 6.1 Auditoria com o SEO Audit Kit + Semrush (08/10/2026)

**Método:** 10 páginas amostradas por modelo de página, achados com evidência e top 5. Semrush Domain Overview
(desktop, BR) em PDF enviado pelo Rodrigo.

**Base técnica: sem problemas que bloqueiem a indexação.**
- Todas as páginas respondem 200, com `index, follow` e canonical próprio.
- `http` e `www` fazem 1 redirecionamento só.
- Tudo vem no HTML pré-renderizado.
- O modelo de exame tem cerca de 63% de texto único.

**Semrush (estimativa, só desktop):**
- 71 visitas/mês (+1083%) e 57 palavras no ranking.
- **0 no top 3**: 4 entre 4–10 e 47 da 21ª posição para baixo.
- **Backlinks: nenhum.**
- Concorrente local: novaultraimagem.com.br.
- Principais palavras: "dr franco" (pacote local), "espirometria" (26ª, nacional, não é o alvo) e "quantas
  ultrassom a gestante tem direito pelo sus" (6ª).

| ID | Achado | Situação |
|---|---|---|
| DATA-1 | Nenhum link de outros sites | Lista de trabalho em `CITACOES-LOCAIS-2026-10.md`. **Ação do Rodrigo** |
| DATA-3 | Busca do SUS na 6ª posição | ✅ Artigo novo `/blog/quantos-ultrassons-gestante-tem-direito-sus` |
| CNT-1 / SD-1 | Exames sem médico revisor visível | ✅ Linha "Conteúdo revisado por Dr. Rodrigo Franco · 08/10/2026" + `reviewedBy`/`lastReviewed` (os 22 revisados, confirmado pelo Rodrigo) |
| SD-2 | `paymentAccepted` listava convênios | ✅ Dinheiro, Pix, cartão de crédito e de débito |
| ONP-1 | Link "Início" do rodapé com `href="#"` | ✅ Aponta para `/` |
| CRW-1 | `/servicos/` (com barra final) respondia 200 | ✅ `trailingSlash: false` (redirect para a versão sem barra) |
| CNT-2 | Exames sem prazo de laudo, pedido médico, convênios por exame e valor | ⏳ O Rodrigo decidiu "não por enquanto" |
| CNT-3 / ONP-2 | Ilustrações geradas e artigos sem imagem | ⏳ Depende das fotos reais |
| DATA-2 | Buscas locais de serviço fora do top | ⏳ Esperar 2–4 semanas o efeito das mudanças de 07/10 |

## 7. Decisões pendentes para o Rodrigo

1. ~~Matérias de curadoria muito curtas~~ — **resolvido em 07/10** (#59).
2. ~~Horário 06:00–22:00~~ — **confirmado em 07/10**.
3. **Títulos das matérias de notícia** (98–141 caracteres): posso criar um `seoTitle` curto para cada uma, como
   já existe nos artigos.
4. **RQE da Dra. Giovanna** (pendente desde 28/09): só depois da confirmação dá para reforçar a área dela nos
   dados estruturados.

---

## Fontes
- [Registro oficial de atualizações do Google Search Central](https://developers.google.com/search/updates)
- [Orientação do Google sobre conteúdo com IA (atualizada em 01/10/2026)](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Core update de maio/2026 (Search Engine Journal)](https://www.searchenginejournal.com/seo-pulse-google-launches-core-update-amid-i-o-ai-search-overhaul/575676/)
- [Core update de março/2026 e serviços locais (Scorpion)](https://www.scorpion.co/articles/news/industry-trends-news/googles-march-2026-core-update-what-local-servic/)
- [Spam update de setembro/2026 (Search Engine Journal)](https://www.searchenginejournal.com/google-september-2026-spam-update/590828/)
- [Fim do rich result de FAQ (maio/2026)](https://www.getpassionfruit.com/blog/what-changed-with-google-drops-faq-rich-results-and-what-to-do-now)
- [Quadros de agregador/fornecedor só na Europa (SEJ)](https://www.searchenginejournal.com/google-adds-local-businesses-to-eea-search-result-units/589955/)
- [Quadros de agregador/fornecedor e negócios locais (SERoundtable)](https://www.seroundtable.com/google-local-business-query-units-42115.html)
- [Modo IA em português no Brasil (CNN Brasil)](https://www.cnnbrasil.com.br/tecnologia/google-lanca-modo-ia-em-portugues-para-buscas-veja-como-funciona/)
- [Regras do Bing para sites](http://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [AI Performance no Bing Webmaster Tools (Bing Blog)](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Sobre o Applebot (Apple, 04/09/2026)](https://support.apple.com/en-us/119829)
- [Apple apresenta o Apple Business (Apple Newsroom Brasil)](https://www.apple.com/br/newsroom/2026/03/introducing-apple-business/)
- [Apple Business — anúncios no Mapas só EUA/Canadá (Apple Newsroom)](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
- [schema.org — IndividualPhysician](https://schema.org/IndividualPhysician)
- [Perfil da Empresa para clínicas em 2026](https://practicegrowthco.com/blog/google-business-profile-medical-practices)
