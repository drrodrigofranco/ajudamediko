// Artigos originais assinados pelos médicos da clínica (substituem, na home, a antiga
// "curadoria de notícias" que só linkava para fontes externas). Cada publicação passou
// pela revisão/aprovação do médico autor antes de entrar aqui - ver
// content-rascunhos-blog-2026-07-25.md para o histórico de rascunhos e revisão.

export interface OriginalArticle {
  id: string;
  title: string;
  authorName: string;
  authorCrm: string;
  publishedOn: string; // YYYY-MM-DD
  relatedExamId?: string; // referencia a examsData.ts, se aplicavel
  body: string[]; // paragrafos
  // Subtitulos opcionais, alinhados por indice com `body` - o item i vira um
  // <h2> logo antes do paragrafo i (null/undefined = paragrafo continua sem
  // subtitulo novo, sob o heading anterior). Mesmo padrao ja usado em
  // curatedNewsData.ts/NewsDetailPage.tsx - aplicado aqui pra corrigir a
  // ausencia total de H2 nos 5 artigos originais (achado da auditoria).
  sectionHeadings?: (string | null)[];
  // Bibliografia opcional - cada item vira um link clicavel no rodape. So incluir
  // estudos reais e verificados (ex: conferidos no PubMed), nunca inventados.
  references?: { label: string; url: string }[];
  // Opcionais: sobrescrevem title/meta description gerados automaticamente (que
  // truncam o titulo/1o paragrafo). Titulo final <= ~60 chars, descricao <= 155.
  seoTitle?: string;
  seoDescription?: string;
  disclaimer: string;
}

export const articlesData: OriginalArticle[] = [
  {
    id: 'ecocardiograma-fetal-diagnostico-antes-do-nascimento-estudos',
    title: 'Ecocardiograma fetal: o que cinco estudos mostram sobre descobrir uma cardiopatia antes do nascimento',
    authorName: 'Dr. Rodrigo Franco',
    authorCrm: 'CRM-MS 10087',
    publishedOn: '2026-10-02',
    relatedExamId: 'ecofetal',
    seoTitle: 'Ecocardiograma fetal: o que dizem 5 estudos | Clínica Franco',
    seoDescription: 'Cinco estudos reais, com link, mostram o que muda quando uma cardiopatia congênita é descoberta antes do nascimento. Clínica Franco, Nova Andradina.',
    body: [
      'Uma pergunta orienta a pesquisa em cardiologia fetal há mais de duas décadas: saber, ainda durante a gestação, que o bebê tem uma cardiopatia congênita muda o desfecho dele depois do nascimento? Para responder, reunimos aqui cinco publicações científicas reais, todas indexadas no PubMed, com o link para você ler cada uma na íntegra. Resumimos o que elas encontraram, e também o que elas não conseguem provar.',
      'O ecocardiograma fetal é um ultrassom dedicado ao coração do bebê. A declaração científica da American Heart Association (AHA), publicada em 2014 na revista Circulation, descreve em detalhe os componentes do exame — avaliação da anatomia cardíaca, da função do coração e do ritmo —, as indicações e o momento de encaminhamento, a experiência recomendada de quem realiza e interpreta o exame e as estratégias de planejamento do parto quando há cardiopatia. O documento também revisa os estudos que avaliam o benefício do diagnóstico pré-natal para os bebês com cardiopatia congênita, e é a base para vários dos trabalhos citados a seguir.',
      'Um dos estudos mais citados sobre o tema foi publicado em 1999, também na Circulation, por uma equipe do Hospital Necker, em Paris. Os pesquisadores compararam 68 recém-nascidos com transposição das grandes artérias diagnosticada antes do nascimento com 250 que tiveram o diagnóstico só depois, ao longo de dez anos. O grupo diagnosticado na gestação chegou à unidade de cardiologia pediátrica em média 2 horas após o nascimento, contra 73 horas no outro grupo, e chegou em melhores condições clínicas, com menos acidose metabólica e falência de múltiplos órgãos. Nenhum dos 68 bebês morreu antes da cirurgia, contra 15 dos 250 (6%) no grupo diagnosticado depois do parto, e não houve mortes após a cirurgia no primeiro grupo (0 de 68), contra 20 de 235 no segundo. Os autores concluíram que o diagnóstico pré-natal reduz mortalidade e morbidade nesse tipo de cardiopatia.',
      'Resultado parecido apareceu em um estudo de 2001, publicado na Circulation por uma equipe da Universidade da Califórnia em São Francisco, com a síndrome do coração esquerdo hipoplásico, uma das cardiopatias mais graves. Entre os 52 bebês que chegaram a ser operados, todos os que tinham diagnóstico pré-natal sobreviveram, contra 25 de 38 entre os diagnosticados depois do nascimento. Os bebês diagnosticados antes do parto também chegaram à cirurgia com menos acidose, menos insuficiência da valva tricúspide e menos disfunção do ventrículo. Vale a ressalva dos próprios dados: foi uma revisão retrospectiva de um único centro, e no grupo diagnosticado na gestação houve interrupções de gravidez e famílias que optaram por não tratar, o que dificulta comparações diretas.',
      'Para reduzir o peso de estudos isolados, uma meta-análise publicada em 2015 na revista Ultrasound in Obstetrics & Gynecology reuniu oito estudos que comparavam bebês com cardiopatia congênita crítica diagnosticada antes e depois do nascimento. Nos casos de anatomia comparável, risco padrão e famílias que desejavam o tratamento, o diagnóstico pré-natal foi associado a uma chance significativamente menor de morte antes da cirurgia programada (razão de chances de 0,26, com intervalo de confiança de 95% entre 0,08 e 0,84). Note que o intervalo de confiança é amplo e que o resultado vale para esse grupo específico de bebês, não para todas as cardiopatias.',
      'Há, porém, um ponto que atrapalha tudo isso: muitas cardiopatias ainda passam despercebidas. Um estudo de 2009 na revista The Journal of Pediatrics acompanhou, durante um ano, bebês com cardiopatia congênita maior em três centros de referência do norte da Califórnia. Dos 309 bebês, 98 tiveram diagnóstico pré-natal (36%, contando 27 interrupções de gestação). Entre as 185 famílias que responderam a um questionário, 99% fizeram ultrassom no pré-natal, mas apenas 28% receberam o diagnóstico antes do parto. A detecção foi menor em doenças como a transposição das grandes artérias (19%) e as lesões obstrutivas do coração esquerdo (23%), e maior na heterotaxia (82%), no ventrículo único (64%) e no coração esquerdo hipoplásico (61%). Os bebês diagnosticados antes do nascimento precisaram menos de ventilação mecânica e de prostaglandina.',
      'Na nossa leitura, esses estudos apontam na mesma direção, com cautela: saber antes permite planejar onde e como o bebê vai nascer, e há evidências de que isso pode reduzir complicações antes da cirurgia em casos bem selecionados. Mas são, em sua maioria, estudos observacionais, e nenhum deles afirma que o ecocardiograma fetal deva ser feito em toda gestante ou que ele detecte todas as cardiopatias. A decisão de realizar o exame cabe ao obstetra, com base nos fatores de risco de cada gestação, e o resultado depende também de quem realiza e interpreta o exame.',
      'Aqui na Clínica Franco, em Nova Andradina, realizamos o [ecocardiograma fetal](/exame/ecofetal), com avaliação detalhada da anatomia cardíaca do bebê e conversa sobre os achados com o médico responsável. As cinco publicações citadas nesta matéria estão nas referências abaixo, com links diretos para os originais.',
    ],
    sectionHeadings: [
      'A pergunta que a ciência tenta responder',
      'O que o ecocardiograma fetal avalia, segundo a AHA',
      'Transposição das grandes artérias: o estudo francês',
      'Síndrome do coração esquerdo hipoplásico: o estudo norte-americano',
      'O que diz a meta-análise',
      'O limite: muitas cardiopatias ainda passam despercebidas',
      'Nossa leitura',
      'Na Clínica Franco',
    ],
    references: [
      {
        label: 'Donofrio MT, Moon-Grady AJ, Hornberger LK, Copel JA, Sklansky MS, Abuhamad A, et al. Diagnosis and treatment of fetal cardiac disease: a scientific statement from the American Heart Association. Circulation. 2014;129(21):2183-2242.',
        url: 'https://doi.org/10.1161/01.cir.0000437597.44550.5d',
      },
      {
        label: 'Bonnet D, Coltri A, Butera G, Fermont L, Le Bidois J, Kachaner J, Sidi D. Detection of transposition of the great arteries in fetuses reduces neonatal morbidity and mortality. Circulation. 1999;99(7):916-918.',
        url: 'https://doi.org/10.1161/01.cir.99.7.916',
      },
      {
        label: 'Tworetzky W, McElhinney DB, Reddy VM, Brook MM, Hanley FL, Silverman NH. Improved surgical outcome after fetal diagnosis of hypoplastic left heart syndrome. Circulation. 2001;103(9):1269-1273.',
        url: 'https://doi.org/10.1161/01.cir.103.9.1269',
      },
      {
        label: 'Holland BJ, Myers JA, Woods CR. Prenatal diagnosis of critical congenital heart disease reduces risk of death from cardiovascular compromise prior to planned neonatal cardiac surgery: a meta-analysis. Ultrasound Obstet Gynecol. 2015;45(6):631-638.',
        url: 'https://doi.org/10.1002/uog.14882',
      },
      {
        label: 'Friedberg MK, Silverman NH, Moon-Grady AJ, Tong E, Nourse J, Sorenson B, Lee J, Hornberger LK. Prenatal detection of congenital heart disease. J Pediatr. 2009;155(1):26-31.',
        url: 'https://doi.org/10.1016/j.jpeds.2009.01.050',
      },
    ],
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. A indicação do ecocardiograma fetal deve ser avaliada pelo seu obstetra, de acordo com os fatores de risco de cada gestação.',
  },
  {
    id: 'ecocardiograma-fetal-quando-fazer',
    title: 'Ecocardiograma Fetal: quando e por que fazer',
    authorName: 'Dr. Rodrigo Franco',
    authorCrm: 'CRM-MS 10087',
    publishedOn: '2026-07-25',
    relatedExamId: 'ecofetal',
    body: [
      'O ecocardiograma fetal é um exame de ultrassom dedicado a avaliar em detalhe a estrutura e o funcionamento do coração do bebê ainda durante a gestação. Diferente do ultrassom obstétrico de rotina, que já observa o coração de forma geral, o ecocardiograma fetal aprofunda essa avaliação, analisando câmaras, válvulas e o fluxo sanguíneo com o auxílio do Doppler.',
      'Costuma ser indicado entre a 24ª e a 28ª semana de gestação, período em que o coração fetal já está suficientemente desenvolvido para uma análise detalhada. Algumas situações aumentam a recomendação do exame: histórico familiar de cardiopatia congênita, diabetes materno, alterações identificadas em exames anteriores, ou uso de determinados medicamentos durante a gravidez — mas também pode ser solicitado por tranquilidade, mesmo sem fator de risco específico.',
      'O exame é indolor e semelhante a um ultrassom obstétrico comum, feito por via abdominal. Na Clínica Franco, ele é realizado com foco exclusivo na anatomia e função cardíaca do bebê. Para ver o que a pesquisa científica mostra sobre descobrir uma cardiopatia antes do nascimento, leia [nossa reportagem com cinco estudos](/blog/ecocardiograma-fetal-diagnostico-antes-do-nascimento-estudos).',
    ],
    sectionHeadings: [
      'O que é o ecocardiograma fetal',
      'Quando fazer e quem deve priorizar o exame',
      'Como é feito na Clínica Franco',
    ],
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. Converse com seu obstetra sobre a necessidade e o momento ideal do exame no seu caso.',
  },
  {
    id: 'translucencia-nucal-o-que-e',
    title: 'Translucência Nucal: o que é e por que é medida no 1º trimestre',
    authorName: 'Dr. Rodrigo Franco',
    authorCrm: 'CRM-MS 10087',
    publishedOn: '2026-07-25',
    relatedExamId: 'morfologico1',
    body: [
      'A translucência nucal é a medida de uma pequena região de líquido na parte posterior do pescoço do feto, avaliada por ultrassom entre a 11ª e a 14ª semana de gestação — janela que faz parte do Ultrassom Morfológico de 1º Trimestre. Todo feto tem essa camada de líquido; o que se avalia é a espessura dela.',
      'Medidas dentro da faixa esperada para a idade gestacional são um bom sinal. Medidas aumentadas não significam um diagnóstico fechado, mas indicam a necessidade de investigação complementar — por isso a translucência nucal é sempre interpretada em conjunto com outros marcadores (idade materna, exames de sangue, outras medidas ultrassonográficas), nunca isoladamente.',
      'Esse é um dos motivos pelos quais o momento do exame importa tanto: fora da janela da 11ª à 14ª semana, a medida perde parte do seu valor de rastreamento.',
    ],
    sectionHeadings: [
      'O que é a translucência nucal',
      'Como interpretar o resultado',
      'Por que o momento do exame importa',
    ],
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. O resultado da translucência nucal deve sempre ser interpretado pelo seu médico, junto com o restante do pré-natal.',
  },
  {
    id: 'espirometria-para-que-serve',
    title: 'Espirometria: para que serve e quem deve fazer',
    authorName: 'Dr. Rodrigo Franco',
    authorCrm: 'CRM-MS 10087',
    publishedOn: '2026-07-25',
    relatedExamId: 'espirometria',
    body: [
      'A espirometria é o exame de referência para avaliar a função pulmonar. Durante o teste, o paciente respira em um bocal conectado a um aparelho que mede volumes e velocidades de ar inspirado e expirado, permitindo identificar padrões obstrutivos (como na asma e na DPOC) ou restritivos de funcionamento dos pulmões.',
      'É um exame simples, não invasivo, e costuma ser indicado em situações como: falta de ar persistente, tosse crônica, chiado no peito, histórico de tabagismo, acompanhamento de doenças respiratórias já diagnosticadas, ou avaliação pré-operatória.',
      'Alguns cuidados simples antes do exame ajudam no resultado: evitar refeições pesadas e uso de broncodilatador nas horas anteriores (conforme orientação recebida no agendamento), e usar roupas confortáveis que não restrinjam a respiração.',
    ],
    sectionHeadings: [
      'O que é e como funciona a espirometria',
      'Quando o exame é indicado',
      'Cuidados antes do exame',
    ],
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. A indicação e a interpretação da espirometria devem ser feitas por um médico.',
  },
  {
    id: 'ultrassons-na-gestacao-quais-e-quando-fazer',
    title: 'Ultrassons na Gestação: quais são, quando fazer e o que avaliam',
    authorName: 'Dr. Rodrigo Franco',
    authorCrm: 'CRM-MS 10087',
    publishedOn: '2026-08-23',
    relatedExamId: 'obstetrico_doppler',
    body: [
      'Veja quais ultrassons são feitos durante a gestação, quando fazer cada um e o que avaliam — do exame inicial ao Doppler do terceiro trimestre. Cada exame tem uma janela ideal, e fazer no momento certo é o que garante seu valor diagnóstico. Veja abaixo o calendário na ordem em que costuma acontecer.',
      'O primeiro é o Ultrassom Inicial (Datador), feito por via transvaginal entre a 6ª e a 9ª semana. Ele confirma que a gravidez está implantada no útero, verifica os batimentos cardíacos fetais e data com a maior precisão possível a idade gestacional — referência usada para todo o resto do pré-natal.',
      'Entre a 11ª e a 13ª semana e 6 dias vem o [Ultrassom Morfológico de 1º Trimestre](/exame/morfologico1), um dos mais importantes da gestação. Ele mede a translucência nucal, avalia a presença do osso nasal e o fluxo do ducto venoso, permitindo o rastreamento precoce de síndromes genéticas (como a Síndrome de Down) e de malformações.',
      'Da 20ª à 24ª semana é feito o [Ultrassom Morfológico de 2º Trimestre](/exame/morfologico2), que mapeia detalhadamente a anatomia do bebê — órgãos, membros, placenta e quantidade de líquido amniótico — em busca de alterações estruturais.',
      'A partir da 24ª semana pode ser indicado o [Ecocardiograma Fetal](/exame/ecofetal), uma avaliação especializada da estrutura e do funcionamento do coração do bebê, mais aprofundada do que a observação cardíaca já feita nos ultrassons de rotina.',
      'Já a partir da 28ª semana, o acompanhamento do terceiro trimestre costuma incluir o [Ultrassom Obstétrico com Doppler](/exame/obstetrico_doppler), que avalia crescimento e peso estimado do bebê, quantidade de líquido amniótico e o fluxo sanguíneo entre a placenta e o bebê — indicando se a oxigenação e a nutrição estão adequadas.',
    ],
    sectionHeadings: [
      'O calendário de ultrassons na gestação',
      'Ultrassom Inicial (Datador) — 6ª a 9ª semana',
      'Morfológico de 1º Trimestre — 11ª a 14ª semana',
      'Morfológico de 2º Trimestre — 20ª a 24ª semana',
      'Ecocardiograma Fetal — a partir da 24ª semana',
      'Ultrassom Obstétrico com Doppler — a partir da 28ª semana',
    ],
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. O calendário exato de exames de cada gestante deve ser definido pelo obstetra, de acordo com o caso individual.',
  },
  {
    id: 'sinais-de-alerta-na-infancia-quando-procurar-o-pediatra',
    title: 'Sinais de Alerta na Infância: Quando Levar Seu Filho ao Pediatra',
    authorName: 'Dr. Tiago Dantas Wizenfad',
    authorCrm: 'CRM-MS 16149',
    publishedOn: '2026-09-04',
    body: [
      'Algumas situações merecem uma consulta pediátrica sem demora: febre em recém-nascidos e bebês pequenos, dificuldade para respirar ou respiração muito rápida, recusa persistente em se alimentar, vômitos ou diarreia que não melhoram, manchas na pele que se espalham rapidamente, ou qualquer mudança brusca no comportamento habitual da criança (sonolência excessiva, irritabilidade fora do comum).',
      'Fora dessas situações mais agudas, o acompanhamento pediátrico regular — a puericultura — tem um papel igualmente importante: consultas periódicas para acompanhar o crescimento e o desenvolvimento, atualizar o calendário vacinal, orientar sobre alimentação e introdução alimentar, e esclarecer dúvidas dos pais em cada fase, do recém-nascido à adolescência.',
      'Queixas respiratórias (tosse, resfriados, rinite), otalgias, questões gastrointestinais e alergias ou alterações de pele são motivos frequentes de consulta na infância — na maioria das vezes de resolução simples quando avaliadas cedo, mas que merecem olhar médico para descartar algo mais sério.',
    ],
    sectionHeadings: [
      'Sinais que pedem consulta pediátrica sem demora',
      'A importância do acompanhamento pediátrico regular',
      'Queixas comuns que merecem avaliação médica',
    ],
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. Febre em bebês com menos de 3 meses, dificuldade respiratória, ou qualquer sinal de piora rápida são urgência pediátrica — procure atendimento imediato nesses casos.',
  },
];
