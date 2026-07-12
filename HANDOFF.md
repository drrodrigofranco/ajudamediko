# 🤝 HANDOFF — ajudamediko

> **PARA A IA / AGENTE QUE ESTÁ LENDO ISTO:**
> Este é o arquivo de **continuidade entre sessões**. LEIA-O INTEIRO antes de começar.
> **AO TERMINAR (ou quando os tokens estiverem acabando), ATUALIZE este arquivo:**
> 1. Atualize a data e o "Status atual" no topo.
> 2. Mova o que concluuiu de "🔜 Próximos passos" para "✅ Histórico".
> 3. Anote decisões novas, senhas, caminhos e armadilhas em "⚠️ Armadilhas conhecidas".
> 4. Seja específico: caminhos absolutos, comandos exatos, nomes de arquivo.
> Este arquivo é a **única fonte de verdade** sobre o estado operacional do projeto.

---

## 📅 Última atualização
- **Data:** 2026-07-12
- **Atualizado por:** Antigravity (Gemini 3.5 Flash)
- **Status atual:** 🟢 Projeto migrado com sucesso para os Projetos Ativos (`01 - Projetos Ativos/ajudamediko`). As dependências (`node_modules`) foram omitidas na cópia para fins de otimização de espaço e velocidade, e devem ser instaladas no novo local.

---

## 🎯 O que é o projeto
Website institucional dinâmico da **Clínica Franco + Associados** (Nova Andradina - MS), focado em serviços médicos de Ultrassonografia (Dr. Rodrigo Franco) e Saúde Mental/Neurologia (Dr. Lucas Franco).
Possui uma calculadora gestacional integrada, widget de notícias e páginas de destino específicas para exames críticos.

**Stack:** React 18, Vite 6, Tailwind CSS 4, Lucide React, TypeScript.

---

## 🗂️ Caminhos e arquivos críticos
- **Raiz do projeto:** `c:\Users\fisio.000\Desktop\Claude VS Code\01 - Projetos Ativos\ajudamediko`
- **Configuração:** `package.json`, `vite.config.ts`, `postcss.config.mjs`, `tailwind.config.js`
- **Pontos de entrada:** 
  - `index.html` (página HTML principal com mapeamentos importmap)
  - `index.tsx` (ponto de entrada do React)
  - `App.tsx` (layout do aplicativo e rotas internas baseadas em seções)
- **Componentes:** Localizados em `c:\Users\fisio.000\Desktop\Claude VS Code\01 - Projetos Ativos\ajudamediko\components/`
- **Páginas Adicionais (Landing Pages de Exames):**
  - `ecocardiograma-fetal.html`
  - `morfologico-trimestre.html`
  - `ultrassom-obstetrico.html`

---

## 🔑 Acesso (ambiente LOCAL/PROD)
- **URLs:** 
  - Local: `http://localhost:3000` (ou `http://localhost:3001` dependendo de portas ocupadas)
  - Produção: `https://ajudamediko.com.br`
- **Login:** Sem autenticação de área administrativa.
- **Chaves/segredos:** Opcional chave `GEMINI_API_KEY` em `.env.local` caso queira alimentar recursos interativos da IA Studio.

---

## ▶️ Como subir o sistema
```bash
# Navegue até a pasta do projeto ativo
cd "c:\Users\fisio.000\Desktop\Claude VS Code\01 - Projetos Ativos\ajudamediko"

# Instale as dependências (já mapeadas no package.json)
npm install

# Suba o servidor de desenvolvimento do Vite
npm run dev
```

---

## ✅ Histórico (concluído)
- **2026-07-12 (Antigravity):** Migração estrutural dos arquivos do projeto do caminho antigo (`Desktop\Claude VS Code\ajudamediko`) para o diretório de projetos ativos (`Desktop\Claude VS Code\01 - Projetos Ativos\ajudamediko`). Exclusão do diretório pesado `node_modules` durante a cópia para agilidade na transferência. Criação do arquivo de handover inicial.

---

## 🔜 Próximos passos (em ordem)
1. Rodar `npm install` na pasta `c:\Users\fisio.000\Desktop\Claude VS Code\01 - Projetos Ativos\ajudamediko` para recriar a pasta `node_modules`.
2. Rodar `npm run dev` para validar o comportamento e verificar se todas as seções e landing pages funcionam perfeitamente.
3. Prosseguir com as solicitações pendentes de conteúdo/estilo do usuário.

---

## ⚠️ Armadilhas conhecidas (NÃO repetir erros)
- **Porta em uso:** O Vite pode iniciar na porta `3001` caso a porta padrão `3000` esteja ocupada por outro processo. Verifique o terminal para o link local exato.
- **Evitar alterações diretas no desktop:** Sempre edite o código na pasta dentro de `01 - Projetos Ativos`.

---

## 🧠 Memória / docs relacionados
- `README.md`
