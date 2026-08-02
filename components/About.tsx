
import React from 'react';
import { CheckCircle2, Baby } from 'lucide-react';

const About: React.FC = () => {
  const generalServices = ['Consultas Médicas', 'Perícias Médicas', 'Espirometria', 'Holter', 'MAPA'];

  const imagingExams = [
    'Ultrassom Geral',
    'Articulações',
    'Abdome',
    'Próstata',
    'Vias Urinárias',
    'Tireoide',
    'Mamas',
    'Vascular e Carótidas (com e sem Doppler)',
  ];

  const maternalFetalExams = [
    'Ultrassom Obstétrico',
    'Morfológico (1º e 2º trimestre)',
    '3D/4D',
    'Ecocardiograma Fetal',
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest">Quem Somos</h2>
          <div className="h-0.5 w-8 bg-teal-200 mx-auto mt-2 mb-6"></div>
          <h3 className="text-3xl font-serif font-bold text-[#0e4843] mb-6">Sobre a Clínica Franco</h3>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A Clínica Franco é o centro de diagnóstico por imagem de referência em Nova Andradina - MS, equipado com ultrassom de última geração e uma equipe dedicada a um atendimento humanizado. Além da ampla variedade de exames de ultrassonografia — com destaque para os morfológicos e os exames com Doppler — também oferecemos consultas de clínica geral, com atenção especial à saúde do idoso e à saúde neurológica, além do serviço de laudos periciais médicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-[#0e4843] mb-2">Cuidado em Todas as Fases da Vida</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Oferecemos cuidado especial em todas as fases da vida, com destaque para a saúde da gestante e do idoso.
            </p>
            <ul className="space-y-3">
              {generalServices.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#14b8a6] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-[#0e4843] mb-2">Diagnóstico por Imagem</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Realizamos uma ampla variedade de exames de ultrassonografia para toda a família.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {imagingExams.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#14b8a6] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#0e4843] rounded-3xl p-6 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="bg-[#1c5d57] p-5 rounded-2xl text-[#5eead4] shrink-0">
            <Baby className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Destaque para o Setor Materno-Fetal</h4>
            <div className="flex flex-wrap gap-3">
              {maternalFetalExams.map((item) => (
                <span key={item} className="text-xs font-semibold text-teal-50 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
