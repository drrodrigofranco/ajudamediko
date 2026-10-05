
import React from 'react';
import LogoMark from './LogoMark';
import {
  Instagram,
  Facebook,
  Youtube
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
  handleNavClick,
  scrollToSection
}) => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      {/* Top Bar com Redes Sociais */}
      <div className="bg-ink text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-8">
          {/* Instagram */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-xs font-medium text-brand-light">
              Siga-nos!
            </span>
            <a
              href="https://www.instagram.com/clinicafrancoo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga a Clínica Franco no Instagram"
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-white hover:text-brand-pale transition-colors"
            >
              <Instagram size={20} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
          <a href="https://www.facebook.com/profile.php?id=61584404454201" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Clínica Franco" className="hover:text-brand-pale transition-colors flex items-center gap-2 text-xs font-medium tracking-wide">
            <Facebook size={20} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a href="https://www.youtube.com/@Dr.Francos" target="_blank" rel="noopener noreferrer" aria-label="YouTube da Clínica Franco" className="hover:text-brand-pale transition-colors flex items-center gap-2 text-xs font-medium tracking-wide">
            <Youtube size={20} />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          <a href="https://www.tiktok.com/@dr.rodrigofranco" target="_blank" rel="noopener noreferrer" aria-label="TikTok da Clínica Franco" className="hover:text-brand-pale transition-colors flex items-center gap-2 text-xs font-medium tracking-wide">
            <svg size={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="hidden sm:inline">TikTok</span>
          </a>
        </div>
      </div>

      {/* Navegação — sempre visível, sem depender de clique em hambúrguer */}
      <nav className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 py-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="flex-shrink-0 whitespace-nowrap px-3 py-1.5 text-[11px] font-semibold tracking-wide text-ink border-b-2 border-transparent hover:border-brand hover:text-brand transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 md:gap-x-4 py-3 md:py-4">
          <LogoMark
            className="col-start-1 row-start-1 md:row-span-2 h-9 md:h-14 w-auto text-ink cursor-pointer"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          />
          <p className="col-start-2 row-start-1 md:self-end text-xl md:text-2xl font-serif font-semibold text-ink leading-tight tracking-tight">
            Clínica Franco
          </p>
          <div className="col-span-3 row-start-2 mt-2 md:mt-0 md:col-span-1 md:col-start-2 flex flex-col gap-0.5">
            <span className="text-[11px] md:text-xs font-medium text-gray-600 leading-snug">
              Dr. Rodrigo (CRM 10087) | Dr. Lucas (CRM 7462) | Dr. Guilherme (CRM 6347) | Dr. Tiago (CRM 16149) | Dra. Giovanna (CRM 14686)
            </span>
            <span className="text-[10px] md:text-[11px] text-gray-600 font-medium tracking-wide leading-snug">
              ULTRASSOM MORFOLÓGICO, DOPPLER E 3D, SAÚDE DO IDOSO, SAÚDE MENTAL, SAÚDE NEUROLÓGICA
            </span>
          </div>
          <button
            onClick={() => scrollToSection('contato')}
            className="col-start-3 row-start-1 md:row-span-2 inline-flex bg-brand text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-hover transition-colors whitespace-nowrap"
          >
            Agendar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
