
import React from 'react';
import {
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Brain,
  Baby,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { doctorsData } from '../doctorsData';

interface CurriculumProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

const BADGE_ICONS = {
  HeartPulse,
  Stethoscope,
  Brain,
  Baby,
};

// Componente unico por medico, data-driven a partir de doctorsData.ts. Antes cada
// medico tinha seu bloco de JSX escrito a mao aqui, duplicando o que ja existia em
// doctorsData.ts (usado por /medico/:id) - isso foi a causa raiz do card do Dr.
// Lucas ficar desatualizado numa sessao anterior. Com um unico template lendo os
// mesmos dados, os dois lugares nunca mais dessincronizam.
const Curriculum: React.FC<CurriculumProps> = ({ navigateTo }) => {
  return (
    <section id="curriculo" className="py-24 max-w-7xl mx-auto px-4 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#0e4843] mb-4">Nossos Profissionais</h2>
        <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
      </div>

      <div className="space-y-24">
        {doctorsData.map((doctor, index) => {
          const BadgeIcon = BADGE_ICONS[doctor.iconName];
          const reversed = index % 2 === 1;
          const topFocusAreas = doctor.focusAreas.slice(0, 3);

          return (
            <div key={doctor.id} className={index > 0 ? 'mt-24 pt-16 border-t border-gray-100' : ''}>
              {/* Card de destaque */}
              <div className="bg-white rounded-[40px] p-6 md:p-12 shadow-sm border border-gray-100 mb-12 hover:shadow-md transition-shadow">
                <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                  <div className="relative">
                    <div className={`w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform ${reversed ? 'hover:-rotate-3' : 'hover:rotate-3'} transition-transform`}>
                      <img
                        src={doctor.photo}
                        alt={`${doctor.name} - ${doctor.specialtyLabel} - ${doctor.crm}`}
                        className={`w-full h-full object-cover ${doctor.photoObjectPosition === 'top' ? 'object-top' : ''}`}
                        referrerPolicy="no-referrer"
                        width={doctor.photoWidth}
                        height={doctor.photoHeight}
                        loading="lazy"
                      />
                    </div>
                    <div className={`absolute -bottom-4 ${reversed ? '-left-4' : '-right-4'} bg-[#14b8a6] text-white p-3 rounded-xl shadow-lg`}>
                      <BadgeIcon size={24} />
                    </div>
                  </div>
                  <div className={`text-center ${reversed ? 'md:text-right flex-grow' : 'md:text-left'}`}>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0e4843] mb-2">{doctor.name}</h3>
                    <p className="text-[#0f766e] font-bold uppercase tracking-widest text-sm mb-4">{doctor.crm}</p>
                    <p className={`text-gray-500 max-w-xl leading-relaxed ${reversed ? 'ml-auto' : ''}`}>
                      {doctor.shortBio}
                    </p>
                    <a
                      href={`/medico/${doctor.id}`}
                      onClick={(e) => navigateTo(`/medico/${doctor.id}`, e)}
                      className={`inline-flex items-center gap-1 text-[#0f766e] hover:text-[#0d9488] font-bold text-sm mt-4 transition-colors ${reversed ? 'md:ml-auto md:justify-end w-full' : ''}`}
                    >
                      Ver perfil completo
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Formacao e Trajetoria */}
              <div className="grid lg:grid-cols-2 gap-20">
                <div className="text-left">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="text-[#0e4843] flex items-center">
                      <GraduationCap className="w-10 h-10 mr-4" />
                      <h3 className="text-3xl font-serif font-bold">Formação Acadêmica</h3>
                    </div>
                  </div>
                  <div className="border-l-2 border-[#ccfbf1] ml-5 pl-12 space-y-12">
                    {doctor.education.map((edu, i) => (
                      <div key={i} className="relative">
                        <div className={`absolute -left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-white ${i === 0 ? 'bg-[#14b8a6] shadow-sm' : 'bg-gray-200'}`}></div>
                        <h4 className="font-bold text-gray-900 text-xl">{edu.title}</h4>
                        {edu.year && <span className="text-[#0f766e] font-bold text-sm block mt-1">{edu.year}</span>}
                        {edu.institution && <p className="text-gray-500 text-sm mt-1">{edu.institution}</p>}
                        {edu.description && <p className="text-gray-500 text-sm mt-3 leading-relaxed">{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                  {doctor.lattesUrl && (
                    <a href={doctor.lattesUrl} target="_blank" rel="noopener noreferrer" className="text-[#0f766e] hover:underline text-xl font-bold mt-8 ml-12 block italic">
                      Acesse currículo completo clicando aqui
                    </a>
                  )}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="text-[#0e4843] flex items-center">
                      <Stethoscope className="w-10 h-10 mr-4" />
                      <h3 className="text-3xl font-serif font-bold">Trajetória Profissional</h3>
                    </div>
                  </div>
                  <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                    <div className="mb-10 last:mb-0">
                      {doctor.experience.map((group, i) => (
                        <div key={i} className={i > 0 ? 'mt-10' : ''}>
                          <h4 className="font-bold text-gray-900 mb-6">{group.label}</h4>
                          <ul className="space-y-4 text-sm text-gray-600">
                            {group.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-4">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${i === 0 ? 'bg-[#14b8a6]' : 'bg-gray-200'}`}></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                      <h4 className="text-[#0e4843] font-bold text-lg mb-4">Foco de Atendimento:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {topFocusAreas.map((area) => (
                          <div key={area} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle size={18} className="text-[#14b8a6]" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Curriculum;
