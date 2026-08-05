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
    id: 'camara-ultrassom-morfologico-sus-2026',
    title: 'Câmara dos Deputados aprova projeto que torna obrigatório o ultrassom morfológico no pré-natal do SUS',
    summary: 'A Comissão de Defesa dos Direitos da Mulher da Câmara dos Deputados deu um passo importante para ampliar o acesso das gestantes brasileiras a um dos exames mais relevantes do acompanhamento pré-natal: o ultrassom morfológico. O colegiado aprovou um Projeto de Lei que prevê a realização obrigatória desse exame na rede pública de saúde, determinando que o Sistema Único de Saúde (SUS) ofereça, no mínimo, dois exames desse tipo a cada gestante ao longo da gravidez.\n\nAtualmente, o ultrassom morfológico não integra a tabela de procedimentos padrão oferecidos pelo Ministério da Saúde na rotina do pré-natal - o que faz com que, em muitos municípios, gestantes atendidas pelo SUS não tenham acesso gratuito a esse exame, mesmo sendo ele fundamental para o acompanhamento detalhado da formação do bebê.\n\nO movimento em direção à universalização já vem ganhando força em algumas regiões do país. O Paraná, por exemplo, tornou-se referência nacional ao garantir, desde abril de 2026, que 100% das gestantes atendidas pelo SUS nos 399 municípios do estado tenham direito ao exame de forma gratuita - um investimento estadual que reforça a importância crescente atribuída a esse tipo de avaliação dentro do pré-natal.\n\nO ultrassom morfológico é considerado um dos exames mais completos da gestação, pois permite avaliar detalhadamente a anatomia e o desenvolvimento do bebê: órgãos, membros, coluna, face, coração, placenta, cordão umbilical e quantidade de líquido amniótico, auxiliando na identificação precoce de possíveis alterações fetais. Por isso, especialistas recomendam a realização de pelo menos dois exames morfológicos durante a gravidez - um no primeiro trimestre e outro no segundo trimestre - cada um com objetivos específicos de avaliação conforme a fase de desenvolvimento do bebê.\n\nNa Clínica Franco, em Nova Andradina, realizamos ultrassom morfológico de primeiro e segundo trimestre, além de exames 3D/4D para acompanhamento completo da sua gestação.\n\nReferências: Febrasgo - Câmara aprova inclusão da ultrassonografia morfológica no pré-natal do SUS, 13 de julho de 2026. Governo do Estado do Paraná (Casa Civil) - Ultrassom morfológico passa a ser ofertado a 100% das gestantes atendidas no Paraná, 7 de abril de 2026. São Cristóvão Saúde - US Morfológico, 31 de julho de 2026.',
    sourceName: 'Febrasgo',
    sourceUrl: 'https://febrasgo.org.br/pt/noticias/item/2231-camara-aprova-inclusao-da-ultrassonografia-morfologica-no-pre-natal-do-sus',
    publishedOn: '2026-08-05',
  },
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
