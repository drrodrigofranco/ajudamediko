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
    id: 'ms-sarampo-vacinacao-sp-2026',
    title: 'Ministério da Saúde amplia recomendação de vacina contra sarampo em cidades de SP',
    summary: 'Diante de 17 casos confirmados de sarampo no Brasil em 2026 - a maioria em acompanhamento em São Paulo, Guarulhos e São Bernardo do Campo -, o Ministério da Saúde ampliou a recomendação de vacinação contra a doença para toda a população de 6 meses a 59 anos nesses municípios. A medida ocorre durante a Campanha Nacional de Multivacinação (3 de agosto a 1º de setembro), com Dia D marcado para 22 de agosto. Manter a caderneta de vacinação em dia continua sendo a principal forma de evitar a reintrodução do sarampo no país.',
    sourceName: 'Ministério da Saúde (gov.br)',
    sourceUrl: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/julho/ministerio-da-saude-amplia-recomendacao-de-vacinacao-contra-o-sarampo-em-tres-municipios-de-sao-paulo',
    publishedOn: '2026-08-04',
  },
  {
    id: 'fiocruz-agosto-dourado-aleitamento-2026',
    title: 'Agosto Dourado: Fiocruz reforça a importância da amamentação e da doação de leite humano',
    summary: 'Na campanha Agosto Dourado, a Fiocruz destacou os benefícios do aleitamento materno, recomendando início na primeira hora de vida, exclusividade até os 6 meses e continuidade até os 2 anos ou mais, já que o leite humano protege contra infecções respiratórias e diarreias. A instituição também reforçou o pedido de doação de leite humano e de frascos de vidro para bancos de leite, que sustentam o cuidado de recém-nascidos prematuros internados em UTI neonatal.',
    sourceName: 'Fiocruz',
    sourceUrl: 'https://fiocruz.br/noticia/2026/07/agosto-dourado-fiocruz-reforca-importancia-da-amamentacao-e-doacao-de-leite-humano',
    publishedOn: '2026-08-04',
  },
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
