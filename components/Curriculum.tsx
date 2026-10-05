
import React from 'react';
import { GraduationCap, Stethoscope, CheckCircle, ChevronRight } from 'lucide-react';
import { doctorsData } from '../doctorsData';

interface CurriculumProps {
  navigateTo: (path: string, e: React.MouseEvent) => void;
}

// Componente unico por medico, data-driven a partir de doctorsData.ts. Antes cada
// medico tinha seu bloco de JSX escrito a mao aqui, duplicando o que ja existia em
// doctorsData.ts (usado por /medico/:id) - isso foi a causa raiz do card do Dr.
// Lucas ficar desatualizado numa sessao anterior. Com um unico template lendo os
// mesmos dados, os dois lugares nunca mais dessincronizam.
const Curriculum: React.FC<CurriculumProps> = ({ navigateTo }) => {
  return (
    <section id="curriculo" className="bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="mb-14 lg:mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink mb-4">Nossos Profissionais em Nova Andradina - MS</h2>
        <a
          href="/equipe"
          onClick={(e) => navigateTo('/equipe', e)}
          className="inline-flex items-center gap-1.5 text-brand-hover hover:text-ink font-semibold text-sm transition-colors"
        >
          Ver página completa da equipe
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div>
        {doctorsData.map((doctor, index) => {
          const reversed = index % 2 === 1;
          const topFocusAreas = doctor.focusAreas.slice(0, 3);

          return (
            <div key={doctor.id} className={index > 0 ? 'mt-20 pt-16 border-t border-gray-300' : ''}>
              {/* Apresentação: foto e texto lado a lado, sem cartão */}
              <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-14 mb-14`}>
                <div className="w-44 h-44 md:w-56 md:h-56 flex-shrink-0 overflow-hidden rounded-lg">
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
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-serif font-semibold text-ink mb-2">{doctor.name}</h3>
                  <p className="text-brand-hover font-semibold text-sm tracking-wide mb-1">{doctor.crm}</p>
                  <p className="text-gray-700 font-medium text-sm mb-4">{doctor.specialtyLabel}</p>
                  <p className="text-gray-600 max-w-xl leading-relaxed">
                    {doctor.shortBio}
                  </p>
                  <a
                    href={`/medico/${doctor.id}`}
                    onClick={(e) => navigateTo(`/medico/${doctor.id}`, e)}
                    className="inline-flex items-center gap-1 text-brand-hover hover:text-ink font-semibold text-sm mt-4 transition-colors"
                  >
                    Ver perfil completo
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Formacao e Trajetoria */}
              <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-8 text-ink">
                    <GraduationCap className="w-7 h-7" />
                    <h3 className="text-2xl font-serif font-semibold">Formação Acadêmica</h3>
                  </div>
                  <div className="border-l border-gray-300 ml-3 pl-8 space-y-8">
                    {doctor.education.map((edu, i) => (
                      <div key={i} className="relative">
                        <div className={`absolute -left-[37px] top-2 w-3 h-3 rounded-full border-2 border-gray-50 ${i === 0 ? 'bg-brand' : 'bg-gray-300'}`}></div>
                        <h4 className="font-semibold text-gray-900 text-lg">{edu.title}</h4>
                        {edu.year && <span className="text-brand-hover font-semibold text-sm block mt-1">{edu.year}</span>}
                        {edu.institution && <p className="text-gray-600 text-sm mt-1">{edu.institution}</p>}
                        {edu.description && <p className="text-gray-600 text-sm mt-3 leading-relaxed">{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                  {doctor.lattesUrl && (
                    <a href={doctor.lattesUrl} target="_blank" rel="noopener noreferrer" className="text-brand-hover hover:underline text-base font-semibold mt-8 ml-11 block">
                      Acesse currículo completo clicando aqui
                    </a>
                  )}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-3 mb-8 text-ink">
                    <Stethoscope className="w-7 h-7" />
                    <h3 className="text-2xl font-serif font-semibold">Trajetória Profissional</h3>
                  </div>
                  <div>
                    <div className="mb-8 last:mb-0">
                      {doctor.experience.map((group, i) => (
                        <div key={i} className={i > 0 ? 'mt-8' : ''}>
                          <h4 className="font-semibold text-gray-900 mb-4">{group.label}</h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            {group.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${i === 0 ? 'bg-brand' : 'bg-gray-300'}`}></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-300 pt-6">
                      <h4 className="text-ink font-semibold text-lg mb-4">Foco de Atendimento:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {topFocusAreas.map((area) => (
                          <div key={area} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle size={18} className="text-brand" />
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
      </div>
    </section>
  );
};

export default Curriculum;
