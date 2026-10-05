
import React from 'react';
import { CheckCircle2, Baby } from 'lucide-react';

const About: React.FC = () => {
  const generalServices = ['Consultas Médicas', 'Perícias Médicas', 'Espirometria', 'Holter', 'MAPA', 'Eletrocardiograma (ECG)'];

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
    <section id="sobre" className="py-20 lg:py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-14 mb-14">
          <div className="lg:col-span-4">
          <h2 className="text-sm font-semibold text-brand mb-3">Quem Somos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-ink leading-tight">Sobre a Clínica Franco</h3>
          </div>
          <p className="lg:col-span-8 text-gray-600 leading-relaxed">
            A Clínica Franco é o centro de diagnóstico por imagem de referência em Nova Andradina - MS, equipado com ultrassom de última geração e uma equipe dedicada a um atendimento humanizado. Além da ampla variedade de exames de ultrassonografia — com destaque para os morfológicos e os exames com Doppler — também oferecemos consultas de clínica geral, com atenção especial à saúde do idoso e à saúde neurológica, além do serviço de laudos periciais médicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-14">
          <div className="border-t-2 border-ink pt-6">
            <h4 className="text-xl font-bold text-ink mb-2">Cuidado em Todas as Fases da Vida</h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Oferecemos cuidado especial em todas as fases da vida, com destaque para a saúde da gestante e do idoso.
            </p>
            <ul className="space-y-3">
              {generalServices.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t-2 border-ink pt-6">
            <h4 className="text-xl font-bold text-ink mb-2">Diagnóstico por Imagem</h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Realizamos uma ampla variedade de exames de ultrassonografia para toda a família.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {imagingExams.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-ink rounded-lg p-6 md:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="bg-ink-3 p-4 rounded-lg text-brand-pale shrink-0">
            <Baby className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-3">Destaque para o Setor Materno-Fetal</h4>
            <div className="flex flex-wrap gap-3">
              {maternalFetalExams.map((item) => (
                <span key={item} className="text-xs font-medium text-teal-50 bg-white/10 border border-white/20 px-3 py-1.5 rounded-md">
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
