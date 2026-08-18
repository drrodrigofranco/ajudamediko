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
  references?: { label: string; url: string }[]; // bibliografia opcional (reportagens que citam varios estudos) - cada item vira um link clicavel no rodape do card. So incluir estudos reais e verificados, nunca inventados.
}

export const curatedNews: CuratedNewsItem[] = [
  {
    id: 'ecocardiograma-fetal-lei-14598-estudos-2026',
    title: 'Ecocardiograma fetal: o que diz a lei brasileira e o que mostram os estudos sobre detecção de cardiopatias congênitas',
    summary: 'Desde 2023, o ecocardiograma fetal deixou de ser apenas uma recomendação médica no Brasil e passou a ter respaldo em lei federal. A Lei nº 14.598, sancionada pelo presidente Luiz Inácio Lula da Silva em 14 de junho daquele ano, determina que a rede pública de saúde inclua no protocolo de assistência às gestantes a realização do ecocardiograma fetal durante o pré-natal, além de pelo menos dois exames de ultrassonografia transvaginal ao longo do primeiro quadrimestre da gestação - sempre respeitada a disponibilidade orçamentária de cada gestor de saúde. A lei também determina que, ao constatar qualquer alteração que coloque a gestação em risco, o médico encaminhe a gestante para o tratamento adequado, "a fim de salvaguardar a vida".\n\nA aprovação não foi unânime entre os especialistas. A Federação Brasileira das Associações de Ginecologia e Obstetrícia (Febrasgo) chegou a criticar publicamente a forma como a lei foi construída, afirmando que não houve discussão suficiente com a categoria médica antes da sanção e que definir exames obrigatórios por lei - em vez de por diretriz clínica - nem sempre acompanha as evidências científicas mais recentes. Em parte por essa discussão, a Comissão de Defesa dos Direitos da Mulher da Câmara dos Deputados já aprovou, mais recentemente, um projeto que propõe substituir listas fixas de exames obrigatórios por protocolos clínicos definidos pelas autoridades de saúde - uma tentativa de equilibrar o acesso garantido por lei com a indicação médica individualizada de cada caso.\n\nNa prática, o ecocardiograma fetal é um ultrassom especializado que avalia detalhadamente a anatomia e o funcionamento do coração do bebê ainda dentro do útero, permitindo identificar desde arritmias até malformações estruturais complexas. O Departamento de Imagem Cardiovascular da Sociedade Brasileira de Cardiologia (SBC), em parceria com sociedades latino-americanas de imagem cardiovascular, publicou em 2020 um posicionamento oficial com as principais indicações do exame. Entre as situações de indicação mais forte estão: diabetes pré-gestacional na mãe, cardiopatia congênita em parente de primeiro grau, translucência nucal acima do percentil 95 no ultrassom do primeiro trimestre, gestação gemelar monocoriônica, arritmias fetais já identificadas em exames de rotina, uso materno de determinados medicamentos (como inibidores da ECA ou ácido retinoico), infecção materna por rubéola, presença de anticorpos maternos anti-SSA/SSB, anomalias extracardíacas ou alterações cromossômicas no feto, e hidropisia fetal.\n\nSobre a real capacidade do exame de detectar problemas, a maior revisão sistemática já publicada sobre o tema - conduzida por pesquisadores chineses e publicada na revista Medicine em 2015 - reuniu 50 estudos e mais de 308 mil fetos avaliados ao redor do mundo. O resultado aponta uma especificidade de 99,8% (ou seja, o exame quase não gera falsos positivos) e uma sensibilidade média de 68,5% para a detecção de cardiopatias congênitas. Essa sensibilidade sobe para mais de 80% quando o protocolo do exame inclui a avaliação das vias de saída dos grandes vasos e do plano dos três vasos e traqueia, e quando é realizado por profissionais com treinamento específico em ecocardiografia fetal - reforçando que a experiência de quem realiza o exame faz diferença real no resultado.\n\nA relevância desses números fica mais clara à luz dos dados brasileiros. Segundo o Ministério da Saúde, cerca de 30 mil bebês nascem por ano no Brasil com algum tipo de cardiopatia congênita - uma incidência de aproximadamente 10 casos a cada mil nascidos vivos -, e essas malformações estão entre as principais causas de morte no primeiro ano de vida. Cerca de 40% dos bebês diagnosticados precisam de cirurgia cardíaca ainda nos primeiros doze meses. Quando a cardiopatia é identificada antes do nascimento, a equipe médica pode planejar com antecedência um parto em hospital com suporte cardiológico e neonatal adequado, reduzindo o intervalo entre o nascimento e o início do tratamento - fator que impacta diretamente o prognóstico do bebê.\n\nNa nossa avaliação, esse conjunto de evidências - a lei federal, o posicionamento das sociedades médicas e os estudos internacionais - aponta na mesma direção: o ecocardiograma fetal é uma ferramenta valiosa, mas seu maior benefício aparece quando é bem indicado, segundo os critérios de risco já estabelecidos, e realizado por quem tem experiência específica no exame. Não é um exame que precise ser feito por toda gestante em toda gravidez, mas é um recurso importante diante de qualquer fator de risco identificado - e a boa notícia é que, no Brasil, ele já tem respaldo legal para chegar também a quem depende exclusivamente do SUS.\n\nAqui na Clínica Franco, em Nova Andradina, o ecocardiograma fetal já faz parte do nosso catálogo de exames de imagem, com avaliação detalhada da anatomia cardíaca do bebê e orientação sobre os achados diretamente com o médico responsável.\n\nO texto da lei, o posicionamento da Sociedade Brasileira de Cardiologia e a revisão sistemática internacional citados nesta matéria estão detalhados nas referências abaixo, com links diretos para as publicações originais.',
    sourceName: 'Lei 14.598/2023 (Diário Oficial da União)',
    sourceUrl: 'https://www2.camara.leg.br/legin/fed/lei/2023/lei-14598-14-junho-2023-794300-publicacaooriginal-168074-pl.html',
    publishedOn: '2026-08-18',
    references: [
      {
        label: 'BRASIL. Lei nº 14.598, de 14 de junho de 2023. Dispõe sobre a realização de exames em gestantes. Diário Oficial da União.',
        url: 'https://www2.camara.leg.br/legin/fed/lei/2023/lei-14598-14-junho-2023-794300-publicacaooriginal-168074-pl.html',
      },
      {
        label: 'Morhy SS, Barberato SH, Rochitte CE, Vieira MLC, et al. Posicionamento sobre Indicações da Ecocardiografia em Cardiologia Fetal, Pediátrica e Cardiopatias Congênitas do Adulto – 2020. Arq Bras Cardiol. 2020;115(5):987-1005.',
        url: 'https://doi.org/10.36660/abc.20201122',
      },
      {
        label: 'Zhang YF, Zeng XL, Zhao EF, Lu HW. Diagnostic Value of Fetal Echocardiography for Congenital Heart Disease: A Systematic Review and Meta-Analysis. Medicine (Baltimore). 2015;94(42):e1759.',
        url: 'https://doi.org/10.1097/MD.0000000000001759',
      },
    ],
  },
  {
    id: 'ultrassom-morfologico-estudos-cientificos-2026',
    title: 'O que a ciência diz sobre o ultrassom morfológico: precisão, limites e por que fazer em dois trimestres',
    summary: 'O ultrassom morfológico é um dos exames mais importantes do acompanhamento pré-natal, e a ciência internacional continua avaliando e atualizando o quanto ele realmente consegue identificar. Em 2022, a Sociedade Internacional de Ultrassom em Obstetrícia e Ginecologia (ISUOG) publicou a atualização de suas diretrizes oficiais para o exame morfológico de segundo trimestre, reunindo o consenso de especialistas de vários países sobre como e quando o exame deve ser realizado.\n\nSegundo a ISUOG, o exame morfológico de rotina deve ser oferecido a todas as gestantes, idealmente entre a 18ª e a 24ª semana de gestação, e deve avaliar estruturas como o crânio e o cérebro fetal, a face, o coração (incluindo as vias de saída dos grandes vasos), o abdome, os rins e a bexiga, a coluna vertebral, os membros e a placenta. A diretriz reforça que, mesmo com os melhores equipamentos e os profissionais mais experientes, algumas alterações só se tornam visíveis mais tarde na gestação - por isso o acompanhamento contínuo é tão importante quanto o exame em si.\n\nQuanto à precisão do exame, um estudo brasileiro conduzido no Instituto de Medicina Integral Professor Fernando Figueira (IMIP), em Pernambuco, acompanhou 457 gestantes de alto risco e comparou os achados do ultrassom morfológico com o diagnóstico confirmado após o nascimento. O resultado: sensibilidade de 96% e especificidade de 79% para a detecção de anomalias congênitas, com desempenho especialmente alto para o sistema nervoso central (99% de sensibilidade) e para alterações da parede abdominal e do sistema cardiovascular (100% de sensibilidade nesses grupos). O próprio estudo destaca que esses números variam bastante entre serviços, dependendo da experiência do examinador e da complexidade de cada caso.\n\nUma revisão sistemática mais recente, publicada em 2024 na revista Ultrasound in Obstetrics & Gynecology, reuniu 52 estudos e mais de 527 mil fetos para avaliar especificamente o ultrassom morfológico de primeiro trimestre (entre 11 e 14 semanas). Os pesquisadores encontraram taxas de detecção muito altas para algumas condições - acrania (98%), gastrosquise (96%) e onfalocele (95%) -, mas taxas bem mais baixas para outras, como fissura labial isolada (14%) e pé torto (11%). A conclusão prática é que nenhum exame isolado detecta tudo: por isso a combinação do morfológico de primeiro trimestre com o de segundo trimestre aumenta significativamente a chance de identificar alterações precocemente, já que cada exame tem pontos fortes diferentes.\n\nNa prática, isso reforça por que recomendamos os dois exames - morfológico de primeiro e de segundo trimestre - como parte do acompanhamento pré-natal completo, e não apenas um deles isoladamente. Nenhum exame de imagem substitui o acompanhamento médico contínuo, mas a literatura mostra que a combinação de exames bem indicados, feitos no momento certo da gestação, é o que realmente aumenta a chance de um diagnóstico precoce.\n\nAs diretrizes completas da ISUOG, o estudo do IMIP e a revisão sistemática de 2024 estão detalhados nas referências ao final desta matéria, com links diretos para as publicações originais.',
    sourceName: 'ISUOG (Ultrasound in Obstetrics & Gynecology)',
    sourceUrl: 'https://doi.org/10.1002/uog.24888',
    publishedOn: '2026-08-11',
    references: [
      {
        label: 'Salomon LJ, Alfirevic Z, Berghella V, et al. ISUOG Practice Guidelines (updated): performance of the routine mid-trimester fetal ultrasound scan. Ultrasound Obstet Gynecol. 2022;59(6):840-856.',
        url: 'https://doi.org/10.1002/uog.24888',
      },
      {
        label: 'Karim JN, Bradburn E, Roberts N, Papageorghiou AT. Detection of non-cardiac fetal abnormalities on ultrasound at 11-14 weeks: systematic review and meta-analysis. Ultrasound Obstet Gynecol. 2024;64(1):15-27.',
        url: 'https://doi.org/10.1002/uog.27649',
      },
      {
        label: 'Noronha Neto C, Souza ASR, Moraes Filho OB, Noronha AMB. Validação do diagnóstico ultrassonográfico de anomalias fetais em centro de referência. Rev Assoc Med Bras. 2009;55(5):541-546.',
        url: 'https://www.scielo.br/j/ramb/a/TZbLG7Hq6nhXWNt9j9MxXsd/?lang=pt',
      },
    ],
  },
  {
    id: 'fiocruz-infogripe-srag-agosto-2026',
    title: 'Boletim InfoGripe da Fiocruz mostra queda de casos de síndrome respiratória grave no Brasil, mas 14 estados seguem em alerta',
    summary: 'A Fiocruz divulgou, no dia 6 de agosto, uma nova edição do boletim InfoGripe, elaborado em parceria com a rede de vigilância de vírus respiratórios do país. O levantamento, referente à semana epidemiológica de 26 de julho a 1º de agosto de 2026, mostra que o número de casos de Síndrome Respiratória Aguda Grave (SRAG) segue em queda no cenário nacional, ainda que a situação varie bastante entre os estados.\n\nSegundo o boletim, 14 unidades da federação apresentaram incidência em nível de alerta, risco ou alto risco nas duas últimas semanas: Acre, Amazonas, Bahia, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Paraná, Rio Grande do Sul, Rio de Janeiro, Roraima, Santa Catarina e Sergipe. Entre as capitais, Belém e Porto Velho aparecem com alto risco e tendência de crescimento, enquanto outras 15 capitais têm incidência elevada, mas ainda sem sinal de aumento contínuo.\n\nSobre os vírus circulantes, o vírus sincicial respiratório (VSR) segue predominante, respondendo por 54,1% dos casos positivos nas últimas quatro semanas, seguido do rinovírus (26,1%), influenza B (9,3%), influenza A (7,3%) e Covid-19 (1,8%). No acumulado de 2026, já foram notificados mais de 130 mil casos de SRAG no país, com cerca de 54% de resultados positivos para algum vírus respiratório.\n\nEsse tipo de monitoramento ajuda pacientes e famílias a entenderem o momento epidemiológico da região onde vivem - inclusive aqui em Nova Andradina, já que Mato Grosso do Sul está entre os estados citados em nível de alerta pelo boletim. Manter a vacinação em dia, redobrar a higiene das mãos, evitar aglomerações em períodos de sintomas e buscar avaliação médica diante de febre persistente ou falta de ar continuam sendo as medidas mais eficazes de prevenção.\n\nAs informações completas, com dados por faixa etária e por vírus, estão disponíveis no Boletim InfoGripe divulgado pela Fiocruz.',
    sourceName: 'Fiocruz',
    sourceUrl: 'https://fiocruz.br/noticia/2026/08/infogripe-numero-de-casos-de-srag-mantem-tendencia-de-queda-em-grande-parte-do-pais',
    publishedOn: '2026-08-06',
  },
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
