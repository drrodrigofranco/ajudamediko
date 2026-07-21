import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/exame/prostata"
  // Quando false, o hook nao mexe no <head>. Usado pelo App.tsx para o caso da
  // home: o hook e chamado sempre (regra dos hooks), mas so deve agir quando a
  // rota atual e mesmo a home - caso contrario ele rodaria depois do efeito da
  // subpagina (ExamDetailPage etc.) e sobrescreveria o title/description dela.
  enabled?: boolean;
}

const SITE_URL = 'https://ajudamediko.com.br';

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Atualiza title/description/canonical/OG/Twitter em runtime, por rota.
// O prerender.mjs so tira o snapshot do HTML depois que o React monta,
// entao essa mudanca fica gravada no HTML estatico de cada pagina gerada.
export function useSEO({ title, description, path, enabled = true }: SEOData) {
  useEffect(() => {
    if (!enabled) return;
    const url = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = title;
    setMetaByName('description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);

    // index.html declara as tags do Twitter com atributo `property` (nao `name`),
    // entao seguimos o mesmo seletor para atualizar as existentes em vez de duplicar.
    setMetaByProperty('twitter:title', title);
    setMetaByProperty('twitter:description', description);
    setMetaByProperty('twitter:url', url);
  }, [title, description, path, enabled]);
}
