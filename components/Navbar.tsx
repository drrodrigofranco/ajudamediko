
import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  HeartPulse, 
  Menu, 
  X 
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
          <a href="https://www.instagram.com/franco.clinica/" target="_blank" rel="noopener noreferrer" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
            <Instagram size={20} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
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
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-[#14b8a6] p-2.5 rounded-lg mr-4 shadow-sm">
              <HeartPulse className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-[#0e4843] leading-none tracking-tight">
                Clínica Franco
              </h1>
              <div className="mt-1.5 flex flex-col">
                <span className="text-[10px] font-bold text-[#14b8a6] uppercase tracking-wider">
                  Dr. Rodrigo (CRM 10087) | Dr. Lucas (CRM 7462)
                </span>
                <span className="text-[9px] text-[#14b8a6] font-bold uppercase tracking-widest mt-0.5">
                  ULTRASSONOGRAFIA, GERIATRIA, CLÍNICA GERAL E PERÍCIAS MÉDICAS
                </span>
              </div>
            </div>
          </div>
          
          <nav className="hidden xl:flex space-x-10 items-center">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)} 
                className="text-gray-500 hover:text-[#14b8a6] font-bold text-[11px] tracking-widest transition-colors uppercase"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-[#14b8a6] text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-[#0d9488] transition-all shadow-md active:scale-95"
            >
              Agendar
            </button>
          </nav>

          <div className="xl:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0e4843] p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-lg absolute w-full z-40">
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
