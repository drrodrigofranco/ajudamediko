
import React from 'react';
import { HeartPulse } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="col-span-1">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center">
                        <div className="bg-teal-600 p-1.5 rounded mr-2">
                             <HeartPulse className="text-white h-5 w-5" />
                        </div>
                        <span className="text-xl font-serif font-bold text-white">Dr. Rodrigo Duarte Franco</span>
                    </div>
                    <span className="text-sm text-teal-400 font-medium mt-1 ml-9">CRM-MS 10087</span>
                </div>
                <p className="text-sm leading-relaxed">
                    Dedicado à Medicina, Ultrassonografia e diagnósticos precisos. Atendimento especializado em Nova Andradina e região.
                </p>
            </div>

            {/* Links */}
            <div className="col-span-1">
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Rápidos</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-teal-400 transition-colors">Início</a></li>
                    <li><a href="#serviços" className="hover:text-teal-400 transition-colors">Exames</a></li>
                    <li><a href="#currículo" className="hover:text-teal-400 transition-colors">Currículo</a></li>
                    <li><a href="#contato" className="hover:text-teal-400 transition-colors">Agendamento</a></li>
                </ul>
            </div>

            {/* Contact Info Mini */}
            <div className="col-span-1">
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Atendimentos</h3>
                <ul className="space-y-2 text-sm">
                    <li>Ecocardiograma Fetal & Obstétrico</li>
                    <li>Ultrassom Vascular (Doppler)</li>
                    <li>Ultrassom Musculoesquelético</li>
                    <li>Abdome, Próstata e Pélvico</li>
                    <li>Perícia Médica</li>
                </ul>
            </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. Rodrigo Duarte Franco. Todos os direitos reservados.</p>
            <p className="mt-2 text-gray-500">Médico - CRM-MS 10087 - Nova Andradina - MS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;