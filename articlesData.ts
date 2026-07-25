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
  disclaimer: string;
}

export const articlesData: OriginalArticle[] = [
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
      'O exame é indolor e semelhante a um ultrassom obstétrico comum, feito por via abdominal. Na Clínica Franco, ele é realizado com foco exclusivo na anatomia e função cardíaca do bebê.',
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
    disclaimer: 'Este conteúdo é educativo e não substitui uma consulta médica. A indicação e a interpretação da espirometria devem ser feitas por um médico.',
  },
];
