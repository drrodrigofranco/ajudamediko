# Relatório SEO — Outubro/2026 (Clínica Franco · Nova Andradina - MS)

**Data:** 07/10/2026 · **Site:** https://ajudamediko.com.br · **Alvo:** "ultrassom em Nova Andradina" e variações
(morfológico, obstétrico, Doppler, abdome, tireoide etc.) + cidades vizinhas (Batayporã, Ivinhema, Anaurilândia,
Deodápolis, Angélica, Rosana-SP).

> Dados de ferramentas: o Semrush retornou "sem créditos de API" e a PageSpeed API retornou "cota diária
> excedida" nesta sessão; Search Console/Bing ficam na máquina local do Rodrigo (ver `HANDOFF-SEOTOOLS.md`).
> Por isso **nenhum número de volume de busca, posição ou tráfego aparece aqui** — só o que foi medido direto no
> HTML de produção.

---

## 1. Diagnóstico rápido

- **Base técnica boa:** HTTPS + HSTS, `robots.txt` liberado, sitemap com 53 URLs (todas respondem 200), todas as
  páginas pré-renderizadas com title, description, canonical, 1 H1 e JSON-LD. Nenhuma imagem sem `alt`.
- **Erro de localização (corrigido):** a coordenada do site (`-22.2333, -53.3444`) era o centro genérico da
  cidade — **~2,3 km longe** do pino real da clínica no Google Maps (`-22.2533183, -53.3517322`). Para busca local
  e para os agentes de IA que agora "ligam/agendam" pelo usuário, endereço e coordenadas precisam bater com o
  Google Business Profile.
- **18 dos 22 exames tinham só 2 links internos** (home e /servicos). A lateral "Veja também" de toda página de
  exame apontava sempre para os mesmos 3 exames obstétricos (corrigido).
- **Páginas de exame não declaravam o exame em si** nos dados estruturados — só FAQ e breadcrumb (corrigido).
- **Títulos longos:** 30 de 53 páginas passavam de 65 caracteres e eram cortadas com "…" no Google (corrigido
  nas páginas de exame, médicos e páginas fixas; as matérias de notícia ficam para decisão — item 6).
- **Conteúdo raso:** 6 matérias de curadoria têm entre 124 e 181 palavras e só 1 link interno cada (item 6).

---

## 2. O que mudou no Google, Bing e Apple (2026) e o que significa para a clínica

### Google
- **Core update de março/2026** (concluído em 08/04): saúde foi um dos setores mais afetados, sobretudo sites com
  páginas "de modelo" por cidade sem conteúdo único. → Não criar páginas copiadas "Ultrassom em Batayporã",
  "Ultrassom em Ivinhema" com o mesmo texto trocando o nome da cidade.
- **Core update de maio/2026** (anunciado 21/05, junto do Google I/O) e **4 spam updates** no ano (março, junho,
  agosto e o de **24/09/2026**, ainda em andamento). Nada no site se enquadra em spam; vale acompanhar o Search
  Console até meados de outubro.
- **Modo IA (AI Mode)** em português no Brasil e **AI Overviews**: respostas geradas citam poucas fontes. O Google
  passou a usar agentes que **ligam e agendam em nome do usuário** — dependem de horário, endereço, telefone e
  lista de serviços consistentes (Perfil da Empresa + `LocalBusiness`/`OpeningHoursSpecification`/`OfferCatalog`
  no site — o site já tem os três).
- **Rich result de FAQ foi descontinuado (07/05/2026)**: as perguntas expansíveis não aparecem mais no resultado do
  Google. O `FAQPage` do site **pode e deve ficar** (não prejudica e ajuda IA a entender o conteúdo), mas não
  espere mais o "acordeão" na busca.
- **Perfil da Empresa (Google Business Profile)** segue sendo o fator nº 1 do "pacote de mapas". Em 2026 o peso da
  **frequência de avaliações novas** (recência) cresceu mais que o total acumulado.

### Bing / Microsoft
- **AI Performance no Bing Webmaster Tools** (prévia pública, fev/2026): mostra quantas vezes o site é **citado no
  Copilot** e nos resumos com IA do Bing, por URL e por "frase de busca". O índice do Bing também alimenta o
  ChatGPT Search e o Copilot do Windows.
- **IndexNow** continua sendo o jeito mais rápido de avisar o Bing sobre páginas novas — o site já tem a chave e o
  script `scripts/indexnow-submit.mjs`.

### Apple
- **Apple Business Connect virou "Apple Business"** (lançado em 14/04/2026, mais de 200 países, com página oficial
  em português da Apple Brasil). Controla como a clínica aparece no **Apple Mapas, Siri, Spotlight, Safari e
  CarPlay**. Quem usa iPhone e pergunta à Siri "ultrassom perto de mim" vê dados do Apple Business, não do Google.
- **Anúncios no Apple Mapas** existem só nos EUA e Canadá por enquanto — não se aplica ao Brasil.

---

## 3. Correções feitas no código nesta sessão

| # | O quê | Arquivo |
|---|-------|---------|
| 1 | Coordenadas da clínica trocadas pelas do pino real do Google Maps (meta `geo.position`, `ICBM` e JSON-LD `geo`) | `index.html` |
| 2 | Endereço no JSON-LD com bairro, igual ao Google Maps: "Rua Melvin Jones, 1243 - Centro" | `index.html` |
| 3 | `hasMap` (link fixo do Google Maps pela CID da ficha) e `logo` no `MedicalBusiness` | `index.html` |
| 4 | Cada página de exame agora declara `MedicalWebPage` → `about: MedicalTest` (nome, descrição, finalidade) ligado à clínica como `provider` | `components/ExamDetailPage.tsx` |
| 5 | Imagem de compartilhamento (WhatsApp/Facebook) de cada exame passa a ser a foto do próprio exame, não a foto da equipe | `components/ExamDetailPage.tsx` |
| 6 | Título do exame se adapta ao tamanho (≤ 65 caracteres) sem perder "Nova Andradina" | `components/ExamDetailPage.tsx` |
| 7 | "Veja também" mostra exames do **mesmo grupo** (obstétricos, abdome/pelve, tireoide/mama/vascular, articulações, cardiorrespiratórios) — os 18 exames que tinham 2 links internos passam a receber links das páginas irmãs | `components/ExamDetailPage.tsx` |
| 8 | Títulos dos 5 médicos encurtados (≤ 65), mantendo só termos já presentes no texto visível de cada um (regra do CFM/RQE do `HANDOFF.md`) | `doctorsData.ts` |
| 9 | Títulos de /exames-cardiorespiratorios, /entenda-exames e /diretriz-primeiro-trimestre encurtados | `components/*.tsx` |

Verificado: `npx tsc --noEmit` e `npm run build` (com pré-render das 51 páginas) sem erros; HTML gerado conferido
(title, og:image, JSON-LD e links) em amostra de páginas de exame, médico e home.

**Depois do deploy:** rodar `node scripts/indexnow-submit.mjs` (avisa o Bing) e pedir reindexação da home e de 2–3
exames no Search Console.

---

## 4. Ações fora do site (só o Rodrigo/Grazi podem fazer) — por prioridade

### 4.1 Google Business Profile (maior impacto)
1. Conferir que nome, endereço ("R. Melvin Jones, 1243 - Centro"), telefone e **horário** do perfil são
   **idênticos** ao site. O site declara **segunda a sábado, 06:00–22:00** — se o horário real de recepção for
   outro, me avise para ajustar o site (a IA do Google usa isso para "ligar e agendar").
2. Categoria principal: a mais próxima de "Clínica de ultrassonografia"/"Centro de diagnóstico por imagem";
   categorias secundárias para as outras áreas (clínica médica, pediatria).
3. Cadastrar **cada exame como "Serviço"** no perfil (mesmos nomes do site) com link para a página
   `/exame/...` correspondente.
4. **Avaliações:** meta de constância (ex.: 4–8 novas por mês) em vez de mutirão. Mandar o link de avaliação pelo
   WhatsApp depois da entrega do laudo. Responder todas, sem citar dados clínicos do paciente.
5. Postar 1 atualização por semana (foto real da clínica, exame em destaque, horário especial).
6. Fotos reais: fachada, recepção, sala do aparelho (sem pacientes) — também resolve a pendência das imagens
   ilustrativas.

### 4.2 Apple Business (novo — antigo Business Connect)
1. Entrar em **business.apple.com** com o Apple ID da clínica e reivindicar "Clínica Franco".
2. Mesmos NAP, horário, categoria, logo e fotos do Google.
3. Adicionar ação "Agendar" apontando para o WhatsApp (`https://wa.me/5567998446674`) e o site.

### 4.3 Bing Places + Bing Webmaster Tools
1. **Bing Places for Business:** importar a ficha do Google (há botão de importação) — leva 5 minutos.
2. No Bing Webmaster Tools, abrir o novo relatório **AI Performance** e ver se o site já é citado no Copilot e
   por quais frases. Reconferir backlinks (estavam em 0 em agosto).

### 4.4 Diretórios e citações locais
Doctoralia, BoaConsulta, catalogo.med.br, Solutudo, listas dos convênios (Prover, Oeste Saúde, MaterDei, PAX,
AMENA) e site da Prefeitura/ACINA se houver guia comercial — sempre com o **mesmo** nome, endereço e telefone.
Um concorrente local (Ultraimagem) já aparece em diretórios na busca por "ultrassom Nova Andradina".

---

## 5. Conteúdo a criar (sem páginas "copia e cola" por cidade)

1. **Página "Como chegar"** (ou bloco na home) com referências reais de quem vem de Batayporã, Ivinhema,
   Anaurilândia, Deodápolis, Angélica e Rosana-SP (tempo de estrada, estacionamento, ponto de referência "antigo
   Hospital Santa Helena"). Conteúdo único, útil, que justifica a área de atendimento.
2. Aumentar as páginas de exame mais buscadas (morfológico 1º/2º tri, obstétrico com Doppler, abdome total,
   tireoide) com seções reais: "O que o laudo traz", "Quanto tempo para o resultado", "Precisa de pedido médico?".
   **Precisa de revisão do Dr. Rodrigo antes de publicar.**
3. Artigos de dúvida real de paciente, assinados: "Morfológico do 2º trimestre: quando agendar", "Ultrassom de
   tireoide: preciso de jejum?", "Doppler de carótidas: quem deve fazer".

---

## 6. Decisões pendentes para o Rodrigo

1. **Matérias de curadoria muito curtas** (`ms-sarampo-vacinacao-sp-2026`, `fiocruz-agosto-dourado-aleitamento-2026`,
   `fiocruz-julho-amarelo-hepatites-2026`, `oms-sus-referencia-mundial-2026`, 124–181 palavras): ou ampliar com
   comentário médico próprio, ou marcar como `noindex`. Páginas rasas sobre temas fora do foco (ultrassom) podem
   pesar contra o site depois dos core updates de 2026.
2. **Títulos das matérias** (98–141 caracteres): posso criar um `seoTitle` curto para cada uma, como já existe
   nos artigos.
3. **Horário 06:00–22:00** está correto para o público? (ver 4.1).

---

## Fontes
- [Google lança core update de maio/2026 (Search Engine Journal)](https://www.searchenginejournal.com/seo-pulse-google-launches-core-update-amid-i-o-ai-search-overhaul/575676/)
- [Core update de março/2026 e serviços locais (Scorpion)](https://www.scorpion.co/articles/news/industry-trends-news/googles-march-2026-core-update-what-local-servic/)
- [Spam update de setembro/2026 (Search Engine Journal)](https://www.searchenginejournal.com/google-september-2026-spam-update/590828/)
- [Fim do rich result de FAQ (maio/2026)](https://www.getpassionfruit.com/blog/what-changed-with-google-drops-faq-rich-results-and-what-to-do-now)
- [Modo IA em português no Brasil (CNN Brasil)](https://www.cnnbrasil.com.br/tecnologia/google-lanca-modo-ia-em-portugues-para-buscas-veja-como-funciona/)
- [AI Performance no Bing Webmaster Tools (Bing Blog)](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Apple apresenta o Apple Business (Apple Newsroom Brasil)](https://www.apple.com/br/newsroom/2026/03/introducing-apple-business/)
- [Apple Business — anúncios no Mapas só EUA/Canadá (Apple Newsroom)](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
- [Fatores de ranqueamento do Perfil da Empresa para clínicas em 2026](https://practicegrowthco.com/blog/google-business-profile-medical-practices)
