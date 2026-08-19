# 🤝 HANDOFF — Ferramentaria de SEO do ajudamediko

> **PARA A IA / AGENTE QUE ESTÁ LENDO ISTO:**
> Este handoff é **separado do handoff do site** (`../HANDOFF.md`). Este aqui é só sobre a
> **infraestrutura de SEO conectada** neste ambiente local (Google Search Console, Bing Webmaster, credenciais,
> scripts da skill `seo`) — não sobre o código do site. Leia os dois se for trabalhar em SEO; só este se for só
> mexer no código do site.
> **AO TERMINAR, atualize:** data no topo, status de cada ferramenta, e mova pendências resolvidas pra
> "Histórico".

---

## 📅 Última atualização
**Data:** 2026-08-19 · **Status:** Google Search Console e Bing Webmaster Tools **conectados e funcionando.**

---

## 1. Google Search Console — ✅ Conectado

**Propriedade:** `sc-domain:ajudamediko.com.br` (tipo Domínio) — **já estava verificada** antes desta sessão
(dados desde maio/2026), só faltava a conexão via API.

**O que foi feito:**
- Projeto Google Cloud: **"seo ajudamediko"** (`project_id: bustling-sunset-506013-f5`)
- 5 APIs ativadas: Search Console API, PageSpeed Insights API, Chrome UX Report API, Web Search Indexing API,
  Google Analytics Data API
- API key criada, restrita a PageSpeed Insights + CrUX
- Service account criada: `seo-tools@bustling-sunset-506013-f5.iam.gserviceaccount.com`
- Service account adicionada como usuário na propriedade do Search Console, nível **Completo** (`siteFullUser`)

**Onde ficam as credenciais (fora do repositório do site, NUNCA commitar):**
- `C:\Users\fisio.000\.config\claude-seo\google-api.json` — `api_key`, `service_account_path`,
  `default_property: "sc-domain:ajudamediko.com.br"`
- `C:\Users\fisio.000\.config\claude-seo\service-account.json` — chave privada da service account (JSON
  completo baixado do Google Cloud)

**Como verificar que está funcionando:**
```bash
"$HOME/.claude/skills/seo/bin/claude-seo" run google_auth.py --check
# esperado: Search Console API, PageSpeed, CrUX, Indexing API todos [OK]
# GA4 fica [MISSING] até adicionar "ga4_property_id" ao google-api.json (não configurado ainda — ver Pendências)

"$HOME/.claude/skills/seo/bin/claude-seo" run gsc_query.py sites
# esperado: sc-domain:ajudamediko.com.br (siteFullUser)
```

**Scripts disponíveis e já testados:**
- `gsc_query.py [query|sitemaps|sites]` — Search Analytics (cliques/impressões/CTR/posição), status de
  sitemaps, propriedades verificadas
- `gsc_inspect.py <url>` — URL Inspection API (status de indexação real, canonical, rich results)

**⚠️ Indexing API — NÃO usar pra URLs comuns.** Testado e bloqueado de propósito: essa API é só pra
`JobPosting`/`BroadcastEvent`. Usar pra páginas normais viola os termos do Google e arrisca perder o acesso.
Também exigiria subir a permissão da service account pra "Proprietário" — não vale a pena só por isso. Pra
rastreamento de página nova, confiar no sitemap + crawl natural do Google (funcionou bem pro Holter, indexado
em poucos dias).

---

## 2. Bing Webmaster Tools — ✅ Conectado

**O que foi feito:**
- Site `ajudamediko.com.br` verificado no Bing Webmaster Tools (conta Microsoft do Rodrigo).
- API key gerada em Configurações > Acesso à API.
- Salva em `C:\Users\fisio.000\.config\claude-seo\backlinks-api.json`:
  ```json
  {
    "bing_api_key": "aea12efd...cd1736",
    "bing_verified_sites": ["ajudamediko.com.br"]
  }
  ```

**Como verificar que está funcionando:**
```bash
"$HOME/.claude/skills/seo/bin/claude-seo" run backlinks_auth.py --check
# esperado: [OK] Bing Webmaster Tools API — Verified sites: ajudamediko.com.br

"$HOME/.claude/skills/seo/bin/claude-seo" run bing_webmaster.py counts "https://ajudamediko.com.br"
# consulta real (não só checagem de credencial) — confirma que a chave tem acesso de verdade
```
**⚠️ Nota sobre `backlinks_auth.py --tier`:** continua reportando "Tier 0 -- Basic" mesmo com o Bing
configurado e funcionando — esse script trata o Bing como um upgrade que exige o Moz (Tier 1) configurado
primeiro, então o rótulo de tier não sobe sozinho. Não é sinal de erro; usar `--check` (não `--tier`) pra
confirmar o Bing.

**Scripts disponíveis:** `bing_webmaster.py [links|counts|compare] <url>` — links de entrada, totais, e
comparação com concorrente (`compare <url> <url-concorrente>`).

**Achado da primeira consulta real (19/08/2026):** `counts` retornou **0 links de entrada** pro domínio no
índice do Bing. Site foi verificado agora — pode ser que o Bing ainda não tenha terminado de rastrear os
backlinks, ou pode ser real (bate com o gap já conhecido de baixa presença em diretórios externos, ex.
Doctoralia). **Reconferir em 1-2 semanas** pra ver se o número muda.

**Common Crawl (Tier 0):** já funcionava sem credencial nenhuma antes desta sessão — sempre disponível.

---

## 2.1 IndexNow (Bing/Yandex) — ✅ Configurado (19/08/2026)

Protocolo gratuito que avisa Bing/Yandex imediatamente sobre URLs novas/alteradas, sem esperar o crawl natural.

- **Chave:** publicada em `public/f2be5e2de7124bde9447a9e12edea79b.txt` no repositório do site (fica acessível
  em `https://ajudamediko.com.br/f2be5e2de7124bde9447a9e12edea79b.txt` depois do deploy).
- **Script de envio:** `scripts/indexnow-submit.mjs` (no repositório do site, não aqui) — lê todas as URLs de
  `public/sitemap.xml` e faz POST pra `https://api.indexnow.org/indexnow`.
- **Uso:** manual por enquanto, depois de qualquer deploy que adicione/altere página relevante:
  ```bash
  cd "D:\Workspaces\Claude VS Code\01 - Projetos Ativos\ajudamediko"
  node scripts/indexnow-submit.mjs
  ```
- **Não integrado à pipeline automática de deploy** — decisão deliberada (19/08) pra não arriscar o fluxo de
  deploy existente sem validar o script isolado primeiro.

---

## 3. Outras credenciais de SEO (não configuradas, fora de escopo por ora)
- **Moz API** (Tier 1 de backlinks) — não configurada. Free tier disponível se precisar de Domain
  Authority/Page Authority no futuro.
- **GA4 Data API** — a API já está ativada no projeto Google Cloud (passo 1), mas falta o `ga4_property_id` no
  `google-api.json` pra funcionar. Precisa localizar o Property ID do GA4 do site (Analytics > Admin > Detalhes
  da propriedade) e adicionar.
- **DataForSEO** (extensão paga) — não instalada.
- **Semrush** — já conectado via MCP do ambiente (não depende deste setup local); usado pra pesquisa de
  keywords.

---

## 4. Relatórios gerados usando esses dados
Ver `RELATORIO-SEO-2026-08.md` (mesma pasta) — seções 4 e 5 têm os dados reais puxados via essas conexões
(status de indexação de `/blog`, `/exame/eletrocardiograma`, relatório de palavras-chave dos últimos 90 dias).

---

## 🔜 Pendências desta ferramentaria
- [ ] Reconferir `bing_webmaster.py counts` em 1-2 semanas (0 backlinks na primeira consulta — confirmar se é
  real ou só falta de rastreamento do Bing ainda).
- [ ] Adicionar `ga4_property_id` ao `google-api.json` se quiser dados de tráfego/comportamento via GA4.
- [ ] Considerar Moz API se precisar de métricas de autoridade de domínio no futuro.
