import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// NOTA (2026-07-25): tentamos usar hydrateRoot aqui para reaproveitar o HTML
// que o prerender.mjs deixa em #root (evitando o remonte completo que causa
// o LCP alto medido na auditoria). Testado com Puppeteer real: gera erros de
// hidratacao (React #418/#423/#425) em toda rota, porque a pagina tem
// widgets com conteudo dependente do momento da renderizacao (ex.: noticias
// buscadas ao vivo, indicador de horario "aberto agora" no rodape) que
// sempre vao divergir entre o snapshot do prerender e o carregamento real do
// usuario. Quando isso acontece o React descarta a arvore e remonta do zero
// de qualquer forma - ou seja, sem ganho de performance e com erros a mais
// no console. Se algum dia esses widgets pararem de depender do horario/de
// fetch ao montar (ou passarem a usar suppressHydrationWarning
// deliberadamente), hydrateRoot pode ser reavaliado.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);