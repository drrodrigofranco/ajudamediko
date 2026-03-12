
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
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

const FAQ: React.FC = () => {
  return (
    <section id="duvidas" className="py-24 bg-white max-w-4xl mx-auto px-4 scroll-mt-24">
      <h2 className="text-4xl font-serif font-bold text-[#0e4843] text-center mb-16 underline decoration-[#14b8a6] underline-offset-8 decoration-2">Dúvidas Frequentes</h2>
      <FAQItem question="Quais exames exigem preparo especial?" answer="Abdome exige jejum de 6-8h; pélvico e próstata exigem bexiga cheia; exames como Holter e MAPA exigem banho prévio e roupas confortáveis." />
      <FAQItem question="É necessário jejum para realizar o Ultrassom de Abdome Total?" answer="Sim, jejum de 6 a 8 horas para adultos para reduzir gases e permitir melhor visualização." />
      <FAQItem question="O que é o Ecocardiograma Fetal e quando devo fazer?" answer="Exame detalhado do coração fetal, indicado idealmente entre 24ª e 28ª semana de gestação." />
      <FAQItem question="Quando realizar o Morfológico de 1º Trimestre?" answer="Indicado entre a 11ª e 14ª semana de gestação para avaliar o risco de alterações genéticas e malformações precoces." />
      <FAQItem question="Qual a diferença entre Ultrassom Pélvico e Transvaginal?" answer="O pélvico é via abdominal (bexiga cheia) e o transvaginal é via interna (imagens mais detalhadas)." />
      <FAQItem question="Aceitam convênios médicos?" answer="Sim, atendemos PROVER e Particular. Entre em contato para outros convênios." />
      <FAQItem question="Como funciona a Perícia Médica?" answer="Atuamos como assistentes técnicos em processos judiciais, elaborando quesitos e acompanhando perícias oficiais." />
    </section>
  );
};

export default FAQ;
