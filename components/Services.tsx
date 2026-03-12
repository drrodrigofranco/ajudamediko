
import React, { useState } from 'react';
import { Baby, FileText, Scale, Search, LucideIcon } from 'lucide-react';

interface Exam {
  name: string;
  Icon: LucideIcon;
  desc: string;
}

interface ServicesProps {
  ultrasoundExams: Exam[];
}

const Services: React.FC<ServicesProps> = ({ ultrasoundExams }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = ultrasoundExams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="servicos" className="py-24 max-w-6xl mx-auto px-4 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Atendimento e Exames com atenção e humanidade</h2>
        <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
          A ultrassonografia é uma ferramenta essencial na medicina moderna, permitindo a visualização não invasiva de estruturas internas do corpo em tempo real. Utilizamos equipamentos de alta resolução para garantir a precisão necessária em cada laudo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-xl transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Especialidade</span>
          </div>
          <div className="bg-[#f0fdfa] p-5 rounded-2xl mb-8 group-hover:bg-[#14b8a6] group-hover:text-white transition-all duration-300">
            <Baby className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#0e4843] mb-4">Ecocardiograma Fetal</h3>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Exame detalhado do coração do bebê ainda no útero. Fundamental para detectar precocemente cardiopatias congênitas e planejar o melhor acompanhamento. A detecção precoce pode salvar vidas e preparar a equipe médica para o nascimento.
          </p>
          <a href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14598.htm" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#14b8a6] text-[10px] font-bold border border-[#ccfbf1] px-4 py-2 rounded-lg hover:bg-[#14b8a6] hover:text-white transition-all">
            <Scale size={14} className="mr-2" /> Lei do Ecocardiograma Fetal
          </a>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-xl transition-all group">
          <div className="bg-[#f0fdfa] p-5 rounded-2xl mb-8 group-hover:bg-[#14b8a6] group-hover:text-white transition-all duration-300">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#0e4843] mb-4">Perícia Médica</h3>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Perícia Médica para fins judiciais e trabalhistas, com ética e atualização científica. Assistência técnica qualificada para advogados e empresas que buscam laudos imparciais e fundamentados.
          </p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-[#0e4843] mb-4">Catálogo de Exames</h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
          Confira abaixo a lista completa de procedimentos realizados em nossa clínica. Para exames específicos não listados, entre em contato para verificar disponibilidade.
        </p>
        
        {/* Barra de Busca de Exames */}
        <div className="max-w-md mx-auto relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar exame (ex: Abdome, Doppler...)" 
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {filteredExams.length > 0 ? (
          filteredExams.map((ex, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-50 shadow-sm flex flex-col items-center text-center hover:border-[#14b8a6]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-[#14b8a6] mb-4 group-hover:scale-110 transition-transform"><ex.Icon size={28} /></div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">{ex.name}</h4>
              <p className="text-[10px] text-gray-400 font-medium">{ex.desc}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-400">
            Nenhum exame encontrado para "{searchTerm}"
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
