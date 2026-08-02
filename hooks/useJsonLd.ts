import { useEffect } from 'react';

// Injeta/atualiza um <script type="application/ld+json"> pelo id, reaproveitando
// o script existente em vez de criar outro. Sem essa checagem, toda pagina que
// injeta JSON-LD via useEffect acaba duplicada: o prerender.mjs tira o snapshot
// ja com o script inserido, e como index.tsx usa createRoot (nao hydrateRoot),
// o efeito roda de novo no navegador real por cima do HTML estatico - o <head>
// fica fora da arvore que o createRoot recria, entao o script antigo nunca some.
export function useJsonLd(id: string, data: object | null) {
  useEffect(() => {
    if (!data) return;
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(data);
  }, [id, data]);
}
