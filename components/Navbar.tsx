
import React from 'react';
import { 
  Instagram,
  Facebook,
  Youtube,
  HeartPulse,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  navItems: string[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (item: string) => void;
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  navItems, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  handleNavClick, 
  scrollToSection 
}) => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      {/* Top Bar com Redes Sociais */}
      <div className="bg-[#0e4843] text-white py-3 border-b border-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-8">
          {/* Instagram — CTA em destaque para ganhar seguidores */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[11px] font-bold tracking-widest uppercase text-[#14b8a6]">
              Siga-nos!
            </span>
            <ArrowRight className="hidden md:block h-5 w-5 text-[#14b8a6] animate-nudge-right" />
            <a
              href="https://www.instagram.com/clinicafrancoo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga a Clínica Franco no Instagram"
              className="animate-insta-glow flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-md transition-transform hover:brightness-110"
            >
              <Instagram size={26} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
          <a href="https://www.facebook.com/profile.php?id=61584404454201" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
            <Facebook size={20} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a href="https://www.youtube.com/@Dr.Francos" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
            <Youtube size={20} />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          <a href="https://www.tiktok.com/@dr.rodrigofranco" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
            <svg size={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="hidden sm:inline">TikTok</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-28">
          <div className="flex items-center cursor-pointer min-w-0 md:flex-shrink-0 mr-4" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="hidden sm:block bg-[#14b8a6] p-2 rounded-lg mr-3 md:mr-4 shadow-sm flex-shrink-0">
              <HeartPulse className="text-white h-5 w-5 md:h-7 md:w-7" />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-xl md:text-2xl font-serif font-bold text-[#0e4843] leading-tight tracking-tight whitespace-nowrap">
                Clínica Franco + Associados
              </p>
              <div className="mt-0.5 flex flex-col">
                <span className="text-[8px] md:text-[10px] font-bold text-[#14b8a6] uppercase tracking-wider md:whitespace-nowrap">
                  Dr. Rodrigo (CRM 10087) | Dr. Lucas (CRM 7462) | Dr. Guilherme (CRM 6347)
                </span>
                <span className="text-[7px] md:text-[8px] lg:text-[9px] text-[#14b8a6] font-bold uppercase tracking-widest mt-0.5 opacity-80 leading-tight md:max-w-none max-w-[180px]">
                  ULTRASSOM MORFOLÓGICO, DOPPLER E 3D, SAÚDE DO IDOSO, SAÚDE MENTAL, SAÚDE NEUROLÓGICA
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => scrollToSection('contato')}
              className="hidden sm:inline-flex bg-[#14b8a6] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#0d9488] transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Agendar
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
              className="text-[#0e4843] p-2 hover:text-[#14b8a6] transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-lg absolute w-full z-40">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item)} 
              className="block w-full text-left py-4 px-2 text-[#0e4843] font-bold text-xs border-b border-gray-50"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contato')} 
            className="w-full bg-[#14b8a6] text-white py-4 rounded-xl font-bold text-sm"
          >
            AGENDAR AGORA
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
