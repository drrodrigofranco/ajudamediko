
import React from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';

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
    <section className="bg-[#0e4843] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1c5d57] text-[#5eead4] text-[10px] font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 bg-[#4ade80] rounded-full inline-block mr-2"></span>
              Diagnóstico e Atendimentos
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-8">
              Ultrassonografia, <br/>
              Geriatria, <br/>
              Clínica Geral e <br/>
              Perícias Médicas
            </h2>
            <p className="text-lg text-teal-50/70 mb-10 leading-relaxed max-w-xl">
              Cuidado multigeracional com tecnologia de ponta. Dr. Rodrigo Franco e Dr. Lucas Franco unindo experiência e dedicação para a saúde da sua família em Nova Andradina-MS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('contato')} className="bg-[#14b8a6] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#0d9488] transition-all transform hover:-translate-y-1">
                Agendar Consulta
              </button>
              <button onClick={() => scrollToSection('servicos')} className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Ver Exames
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] group">
              <div className="absolute inset-0 border-2 border-teal-400/20 rounded-3xl animate-pulse group-hover:animate-none group-hover:scale-105 transition-transform duration-500"></div>
              <img 
                src={doctorImgSrc} 
                alt="Clínica Franco - Dr. Rodrigo e Dr. Lucas" 
                className="w-full h-full object-cover rounded-3xl border-4 border-teal-500/20 shadow-2xl transition-all duration-500 group-hover:rounded-2xl" 
              />
            </div>

            {/* Mapa de Localização ao lado da foto */}
            <div className="bg-white p-1.5 rounded-2xl shadow-2xl max-w-[240px] border border-white/10 hidden sm:block transform hover:rotate-2 transition-transform">
              <div className="relative rounded-xl overflow-hidden bg-white group cursor-pointer">
                <div 
                  className="absolute inset-0 z-10 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300"
                  onClick={() => setIsMapModalOpen(true)}
                >
                  <Maximize2 className="text-white drop-shadow-lg" size={32} />
                </div>
                <img 
                  src={mapImgSrc} 
                  alt="Localização" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  onClick={() => setIsMapModalOpen(true)}
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 p-3 z-20">
                  <p className="text-[10px] font-bold text-white mb-1 tracking-tight">Rua Melvin Jones, 1243</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] text-teal-300">Sala 3 (Antigo H. Sta Helena)</p>
                    <a 
                      href={googleMapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[9px] bg-teal-600 text-white px-2 py-1 rounded flex items-center gap-1 hover:bg-teal-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      VER MAPA <ExternalLink size={8} />
                    </a>
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

export default Hero;
