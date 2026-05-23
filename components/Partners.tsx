
import React from 'react';
import { Tag } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Planos de Descontos',
      isCustom: true,
    },
    {
      name: 'Prover Saúde',
      logo: 'http://proversaude.com.br/wp-content/uploads/2018/02/logo_prover.png',
    },
    {
      name: 'Oeste Saúde',
      logo: 'https://cdn.afpesp.org.br/images/paginas/beneficios/saude/logo-corp-e-oeste.png',
    },
  ];

  return (
    <section id="convenios" className="bg-white py-12 border-b border-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest">Convênios</h2>
          <div className="h-0.5 w-8 bg-teal-200 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
              {partner.isCustom ? (
                <div className="flex items-center gap-2.5 px-4 py-2 border border-gray-200 rounded-xl bg-gray-50/50 shadow-xs">
                  <Tag className="text-[#14b8a6] w-5 h-5" />
                  <span className="font-sans font-bold text-gray-700 text-xs md:text-sm uppercase tracking-wider whitespace-nowrap">
                    Planos de Descontos
                  </span>
                </div>
              ) : (
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 md:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
