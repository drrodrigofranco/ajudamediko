
import React from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';
import { trackGetDirections } from '../gtag';

interface HeroProps {
  scrollToSection: (id: string) => void;
  setIsMapModalOpen: (open: boolean) => void;
  doctorImgSrc: string;
  mapImgSrc: string;
  googleMapsLink: string;
}

const Hero: React.FC<HeroProps> = ({
  scrollToSection,
  setIsMapModalOpen,
  doctorImgSrc,
  mapImgSrc,
  googleMapsLink
}) => {
  return (
    <section className="bg-ink text-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-10 lg:gap-14">
          <div className="lg:col-span-5 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-semibold leading-[1.08] mb-5">
              Ultrassom em Nova Andradina — Clínica Franco
            </h1>
            <p className="text-base sm:text-lg text-brand-pale font-medium mb-5 max-w-xl leading-snug">
              Ultrassom morfológico, Doppler e 3D, saúde do idoso, saúde mental, saúde neurológica, pediatria e saúde da pele, cabelos e unhas.
            </p>
            <p className="text-base text-white/70 mb-9 leading-relaxed max-w-xl">
              Referência em ultrassom em Nova Andradina e região. Dr. Rodrigo Franco, Dr. Lucas Duarte Franco, Dr. Guilherme Zandoná, Dr. Tiago Dantas Wizenfad e Dra. Giovanna Silva e Silva — cuidado multigeracional com precisão diagnóstica para toda a família.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => scrollToSection('contato')} className="bg-brand text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-hover transition-colors">
                Agendar Consulta
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-white border border-white/30 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Exames
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[900/502]">
              <img
                src={doctorImgSrc}
                alt="Clínica Franco - Ultrassom em Nova Andradina - Dr. Guilherme Zandoná, Dr. Tiago Dantas Wizenfad, Dr. Lucas Duarte Franco, Dr. Rodrigo Franco e Dra. Giovanna Silva e Silva"
                className="w-full h-full object-cover rounded-lg"
                width={900}
                height={502}
                fetchPriority="high"
                loading="eager"
              />
            </div>

            {/* Mapa de localização, em faixa discreta sob a foto */}
            <div className="mt-4 flex items-stretch gap-4 border-t border-white/15 pt-4">
              <div
                className="relative w-36 sm:w-44 flex-shrink-0 overflow-hidden rounded-md cursor-pointer group"
                onClick={() => setIsMapModalOpen(true)}
              >
                <div className="absolute inset-0 z-10 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="text-white" size={22} />
                </div>
                <img
                  src={mapImgSrc}
                  alt="Localização Clínica Franco - Rua Melvin Jones 1243 Centro Nova Andradina MS"
                  className="w-full h-full object-cover"
                  width={600}
                  height={336}
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <p className="text-sm font-semibold text-white">Rua Melvin Jones, 1243</p>
                <p className="text-xs text-white/60 mt-0.5">Sala 3 (Antigo H. Sta Helena)</p>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-pale hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackGetDirections();
                  }}
                >
                  VER MAPA <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
