
import React from 'react';
import { 
  GraduationCap, 
  HeartPulse, 
  Stethoscope, 
  Activity, 
  CheckCircle 
} from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section id="curriculo" className="py-24 max-w-7xl mx-auto px-4 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#0e4843] mb-4">Nossos Profissionais</h2>
        <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
      </div>

      <div className="space-y-24">
        {/* Dr. Rodrigo */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-12 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-3 transition-transform">
                <img 
                  src="https://i.postimg.cc/3R41Y9xs/Chat-GPT-Image-18-de-fev-de-2026-09-48-23.png" 
                  alt="Dr. Rodrigo Franco"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#14b8a6] text-white p-3 rounded-xl shadow-lg">
                <HeartPulse size={24} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-serif font-bold text-[#0e4843] mb-2">Dr. Rodrigo Franco</h3>
              <p className="text-[#14b8a6] font-bold uppercase tracking-widest text-sm mb-4">CRM-MS 10087</p>
              <p className="text-gray-500 max-w-xl leading-relaxed">
                Atendimento com ampla experiência em diagnóstico por imagem e perícia médica. Dedicado a oferecer um atendimento humanizado e preciso para toda a família.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[#0e4843] flex items-center">
                <GraduationCap className="w-10 h-10 mr-4" />
                <h2 className="text-3xl font-serif font-bold">Formação Acadêmica</h2>
              </div>
            </div>
            <div className="border-l-2 border-[#ccfbf1] ml-5 pl-12 space-y-12">
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-[#14b8a6] rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-gray-900 text-xl">Cursos de Ultrassom - FATESA</h4>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  Ultrassom medicina interna, ultrassom de tireoide, ultrassom de mamas, ultrassom vascular, ultrassom obstétrico, ultrassom endovaginal, ultrassom ecocardiograma fetal, ultrassom musculoesquelético.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                <h4 className="font-bold text-gray-900 text-xl">Graduação em Medicina</h4>
                <span className="text-[#14b8a6] font-bold text-sm block mt-1">2018</span>
                <p className="text-gray-500 text-sm mt-1">UNEMAT - Universidade Estadual do Mato Grosso - Cáceres - MT</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Perícia Médica</h4>
                <span className="text-[#14b8a6] font-bold text-sm block mt-1">2023</span>
              </div>
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Auditoria Hospitalar</h4>
                <span className="text-[#14b8a6] font-bold text-sm block mt-1">2022</span>
              </div>
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Acupuntura</h4>
                <span className="text-[#14b8a6] font-bold text-sm block mt-1">2005</span>
              </div>
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                <h4 className="font-bold text-gray-900 text-xl">Outras Graduações</h4>
                <p className="text-gray-500 text-sm mt-1">Fisioterapia (UNOESTE - 2004) e Educação Física (FIFASUL - 2002)</p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[#0e4843] flex items-center">
                <Stethoscope className="w-10 h-10 mr-4" />
                <h2 className="text-3xl font-serif font-bold">Trajetória Profissional</h2>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="mb-10">
                <h4 className="font-bold text-gray-900 mb-6">Experiência Atual (Nova Andradina e Região):</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2018);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Diretor clínico e técnico - Médico plantonista no Hospital Municipal de Taquarussu (2020);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Médico plantonista no UPA de Batayporã;</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Perito judicial do fórum de Batayporã nomeado desde 2021.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-6">Experiência Prévia:</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professor de Educação Física contratado da SEDUC - MS - Anaurilândia - MS (2 anos);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fisioterapeuta concursado da secretaria de saúde do Município de Canarana - MT (8 anos);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professor universitário na Faculdade do Pantanal - FAPAN - Cáceres - MT (4,5 anos);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Médico plantonista no Hospital Cassems de Nova Andradina (5 anos);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Médico plantonista no Hospital Regional de Nova Andradina - MS (5 anos).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Lucas */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-12 mt-24 pt-16 border-t border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:-rotate-3 transition-transform">
                <img 
                  src="https://i.postimg.cc/tTYS7p2c/Whats-App-Image-2026-02-21-at-10-33-13.jpg" 
                  alt="Dr. Lucas Franco"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#14b8a6] text-white p-3 rounded-xl shadow-lg">
                <Stethoscope size={24} />
              </div>
            </div>
            <div className="text-center md:text-right flex-grow">
              <h3 className="text-4xl font-serif font-bold text-[#0e4843] mb-2">Dr. Lucas Franco</h3>
              <p className="text-[#14b8a6] font-bold uppercase tracking-widest text-sm mb-4">CRM-MS 7462</p>
              <p className="text-gray-500 max-w-xl ml-auto leading-relaxed">
                Médico dedicado ao atendimento integral, com vasta experiência em medicina de urgência, emergência e cuidados intensivos. Focado no envelhecimento saudável e na resolução clínica de seus pacientes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[#0e4843] flex items-center">
                <GraduationCap className="w-10 h-10 mr-4" />
                <h2 className="text-3xl font-serif font-bold">Formação Acadêmica</h2>
              </div>
            </div>
            <div className="border-l-2 border-[#ccfbf1] ml-5 pl-12 space-y-12">
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-[#14b8a6] rounded-full border-4 border-white shadow-sm"></div>
                <h4 className="font-bold text-gray-900 text-xl">Graduação em Medicina</h4>
                <span className="text-[#14b8a6] font-bold text-sm block mt-1">Turma de 2013</span>
                <p className="text-gray-500 text-sm mt-1">Famepp (UNOESTE) - Faculdade de Medicina de Presidente Prudente</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-gray-200 rounded-full border-4 border-white"></div>
                <h4 className="font-bold text-gray-900 text-xl">Pós-graduação em Medicina Intensiva</h4>
                <p className="text-gray-500 text-sm mt-1">AMIB - Associação de Medicina Intensiva Brasileira (Incompleta)</p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[#0e4843] flex items-center">
                <Activity className="w-10 h-10 mr-4" />
                <h2 className="text-3xl font-serif font-bold">Trajetória e Atuação</h2>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="mb-10">
                <h4 className="font-bold text-gray-900 mb-6">Experiência Profissional:</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Atendimento em Unidades de Emergência (desde 2014);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Atuação em UTI - Unidade de Terapia Intensiva (desde 2016);</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Médico ESF Prefeitura Municipal Nova Andradina - MS - concursado (desde 2019).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                <h4 className="text-[#0e4843] font-bold text-lg mb-4">Foco de Atendimento:</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#14b8a6]" />
                    <span>Geriatria e Envelhecimento Saudável</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#14b8a6]" />
                    <span>Clínica Geral e Check-up</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#14b8a6]" />
                    <span>Pequenos Procedimentos Cirúrgicos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
