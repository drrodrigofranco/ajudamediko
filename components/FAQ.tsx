
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useJsonLd } from '../hooks/useJsonLd';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg bg-white overflow-hidden mb-3 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0e4843] text-sm md:text-base">{question}</span>
        {isOpen ? <ChevronUp className="text-[#14b8a6] w-5 h-5" /> : <ChevronDown className="text-gray-300 w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50 mt-2 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

// Fonte unica das perguntas gerais da home: usada tanto pra renderizar os
// FAQItem quanto pra montar o JSON-LD FAQPage (ver useJsonLd abaixo). Antes
// esse mesmo conteudo tambem vivia hard-coded, em duplicidade, num script
// FAQPage fixo em index.html - alem de dessincronizar fácil, esse schema
// global acabava indo pra TODA pagina do site (inclusive /exame/* e /medico/*,
// que mostram um FAQ diferente ou nenhum), o que o Google trata como dado
// estruturado que nao reflete o conteudo visivel da pagina.
export const homeFaqs = [
  {
    question: 'Quais exames exigem preparo especial?',
    answer: 'Cada exame de ultrassom tem um preparo específico. O abdome total exige jejum de 6 a 8 horas para reduzir gases intestinais e melhorar a visualização dos órgãos. Exames pélvicos e de próstata exigem bexiga cheia (beber água e segurar a urina antes do exame). Já o Holter e o MAPA pedem banho tomado antes da colocação do aparelho e roupas confortáveis, já que o equipamento fica no corpo por 24 horas. Ao agendar, a Clínica Franco informa o preparo exato do seu exame.',
  },
  {
    question: 'É necessário jejum para realizar o Ultrassom de Abdome Total?',
    answer: 'Sim. Recomendamos jejum de 6 a 8 horas para adultos antes do ultrassom de abdome total. O jejum reduz a quantidade de gases no intestino, que atrapalham a passagem do som e prejudicam a qualidade da imagem, principalmente na avaliação do fígado, vesícula biliar e pâncreas.',
  },
  {
    question: 'O que é o Ecocardiograma Fetal e quando devo fazer?',
    answer: 'O ecocardiograma fetal é um ultrassom especializado que avalia detalhadamente a estrutura e o funcionamento do coração do bebê ainda na gestação, permitindo identificar precocemente cardiopatias congênitas. É indicado idealmente entre a 24ª e a 28ª semana de gestação, e pode ser solicitado por gestantes de risco habitual ou com fatores de risco específicos (histórico familiar, diabetes, uso de certos medicamentos).',
  },
  {
    question: 'Quando realizar o Morfológico de 1º Trimestre?',
    answer: 'O ultrassom morfológico de 1º trimestre é indicado entre a 11ª e a 14ª semana de gestação. Nessa janela é possível medir a translucência nucal e outros marcadores que ajudam a avaliar o risco de alterações genéticas (como síndrome de Down) e malformações precoces, além de confirmar a idade gestacional com maior precisão.',
  },
  {
    question: 'Qual a diferença entre Ultrassom Pélvico e Transvaginal?',
    answer: "O ultrassom pélvico é feito por via abdominal, com a bexiga cheia servindo de 'janela acústica' para visualizar útero, ovários e bexiga. Já o transvaginal é feito por via interna, com um transdutor específico, e não exige bexiga cheia - por estar mais próximo dos órgãos, costuma fornecer imagens mais detalhadas do endométrio e dos ovários. O médico indica qual é o mais adequado conforme a queixa e se a paciente já teve relações sexuais.",
  },
  {
    question: 'Quais convênios a Clínica Franco aceita?',
    answer: 'Atendemos particular e os convênios/planos de desconto Prover Saúde, Oeste Saúde, MaterDei, PAX e AMENA. Para outros convênios não listados aqui, entre em contato pelo WhatsApp antes de agendar para confirmarmos a cobertura do seu plano.',
  },
  {
    question: 'Como funciona a Perícia Médica?',
    answer: 'A Clínica Franco atua como assistente técnico em processos judiciais, elaborando quesitos e acompanhando perícias oficiais em varas cíveis, previdenciárias e trabalhistas. O Dr. Rodrigo Franco é perito judicial nomeado pelo fórum de Batayporã desde 2021, prestando esse serviço tanto para partes quanto por nomeação judicial em Nova Andradina e região.',
  },
];

const FAQ: React.FC = () => {
  useJsonLd('faq-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  });

  return (
    <section id="duvidas" className="py-24 bg-white max-w-4xl mx-auto px-4 scroll-mt-24">
      <h2 className="text-4xl font-serif font-bold text-[#0e4843] text-center mb-16 underline decoration-[#14b8a6] underline-offset-8 decoration-2">Dúvidas Frequentes</h2>
      {homeFaqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQ;
