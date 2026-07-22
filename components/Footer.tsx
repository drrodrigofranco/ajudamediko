
import React from 'react';
import { HeartPulse, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center">
                        <div className="bg-teal-600 p-1.5 rounded mr-2">
                             <HeartPulse className="text-white h-5 w-5" />
                        </div>
                        <span className="text-xl font-serif font-bold text-white">Clínica Franco + Associados</span>
                    </div>
                    <div className="flex flex-col text-xs text-teal-400 font-medium mt-1 ml-9">
                        <span>Dr. Rodrigo Franco - CRM-MS 10087</span>
                        <span>Dr. Lucas Franco - CRM-MS 7462</span>
                        <span>Dr. Guilherme Zandoná - CRM-MS 6347</span>
                    </div>
                </div>
                 <p className="text-sm leading-relaxed mb-6">
                    Dedicados ao Ultrassom Morfológico, Doppler e 3D, Saúde do Idoso, Saúde Mental e Saúde Neurológica. Atendimento humanizado e diagnósticos precisos em Nova Andradina, atendendo também pacientes de Batayporã, Ivinhema, Anaurilândia, Angélica, Deodápolis e Rosana (SP).
                </p>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/clinicafrancoo/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                        <Instagram size={22} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61584404454201" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                        <Facebook size={22} />
                    </a>
                    <a href="https://www.youtube.com/@Dr.Francos" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                        <Youtube size={22} />
                    </a>
                    <a href="https://www.tiktok.com/@dr.rodrigofranco" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                        <svg size={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Links */}
            <div className="col-span-1">
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Rápidos</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-teal-400 transition-colors">Início</a></li>
                    <li><a href="#serviços" className="hover:text-teal-400 transition-colors">Exames</a></li>
                    <li><a href="http://lattes.cnpq.br/2901086695714310" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Currículo</a></li>
                    <li><a href="#contato" className="hover:text-teal-400 transition-colors">Agendamento</a></li>
                    <li>
                      <a 
                        href="/entenda-exames" 
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/entenda-exames');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="hover:text-teal-400 transition-colors"
                      >
                        Entenda os Exames
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/diretriz-primeiro-trimestre" 
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/diretriz-primeiro-trimestre');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="hover:text-teal-400 transition-colors"
                      >
                        Diretriz AMB: 1º Trimestre
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/exames-cardiorespiratorios" 
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/exames-cardiorespiratorios');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="hover:text-teal-400 transition-colors"
                      >
                        Exames Cardiorrespiratórios
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/dicas-gestantes" 
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/dicas-gestantes');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="hover:text-teal-400 transition-colors"
                      >
                        Guia da Gestante
                      </a>
                    </li>
                    <li className="pt-2 border-t border-gray-800 mt-2">
                        <a href="/politica-de-privacidade.html" className="text-xs hover:text-teal-400 transition-colors block py-1">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="/termos-de-uso.html" className="text-xs hover:text-teal-400 transition-colors block py-1">Termos de Uso</a>
                    </li>
                </ul>
            </div>

            {/* Contact Info Mini */}
            <div className="col-span-1">
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Atendimentos</h3>
                <ul className="space-y-2 text-sm">
                    <li>Ecocardiograma Fetal</li>
                    <li>Obstétrico com e sem Doppler</li>
                    <li>Morfológico de 1º Trimestre</li>
                    <li>Morfológico de 2º Trimestre</li>
                    <li>Ultrassom Vascular (Doppler)</li>
                    <li>Ultrassom Musculoesquelético</li>
                    <li>Abdome, Próstata e Pélvico</li>
                    <li>Espirometria</li>
                    <li>Perícia Médica</li>
                </ul>
            </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Clínica Franco + Associados. Todos os direitos reservados.</p>
            <p className="mt-2 text-gray-500">Nova Andradina - MS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
