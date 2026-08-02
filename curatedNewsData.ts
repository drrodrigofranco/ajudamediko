// Materias curadas de saude a partir de fontes externas confiaveis (Fiocruz,
// Ministerio da Saude, OMS/Agencia Brasil, PubMed/LILACS/BIREME e veiculos de
// saude equivalentes). Cada item e uma materia completa (varios paragrafos),
// sempre reescrita/parafraseada por nos e citando a fonte por nome no texto -
// nunca copiamos o texto integral de terceiros (direito autoral). Pensado
// para ser alimentado por uma rotina agendada que busca e escreve materias
// novas a cada poucos dias; novos itens entram no topo do array.

export interface CuratedNewsItem {
  id: string; // slug unico
  title: string;
  summary: string; // materia completa em varios paragrafos (separados por \n\n), parafraseada por nos e citando a fonte no texto - nunca copiada da fonte
  sourceName: string; // nome do veiculo/instituicao
  sourceUrl: string;
  publishedOn: string; // YYYY-MM-DD (data da materia original ou da curadoria)
}

export const curatedNews: CuratedNewsItem[] = [
  {
    id: 'fiocruz-julho-amarelo-hepatites-2026',
    title: 'Julho Amarelo: Fiocruz alerta para a prevenção das hepatites virais',
    summary: 'A Fiocruz reforçou, na campanha Julho Amarelo, a importância do diagnóstico precoce e da vacinação contra as hepatites virais, que muitas vezes não apresentam sintomas claros nas fases iniciais. A instituição destaca o rastreamento em grupos de maior risco e o acompanhamento médico regular como principais ferramentas de prevenção.',
    sourceName: 'Fiocruz',
    sourceUrl: 'https://fiocruz.br/noticia/2026/07/julho-amarelo-fiocruz-alerta-para-prevencao-de-hepatites-virais',
    publishedOn: '2026-07-28',
  },
  {
    id: 'oms-sus-referencia-mundial-2026',
    title: 'Diretor da OMS destaca o SUS como referência mundial em saúde pública',
    summary: 'O diretor-geral da Organização Mundial da Saúde (OMS) afirmou que o Sistema Único de Saúde (SUS) é um exemplo mundial por garantir cobertura universal a mais de 200 milhões de pessoas. A declaração ocorreu durante um evento sobre eliminação da transmissão vertical da hepatite B no Brasil, reforçando o papel da atenção básica e do acompanhamento contínuo na saúde da população.',
    sourceName: 'Agência Brasil (EBC)',
    sourceUrl: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-07/diretor-da-oms-diz-que-brasil-e-exemplo-mundial-por-sistema-de-saude',
    publishedOn: '2026-07-28',
  },
];
