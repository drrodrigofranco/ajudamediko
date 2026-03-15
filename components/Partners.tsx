
import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Amena Saúde e Benefícios',
      logo: 'https://cdn-fnkbo.nitrocdn.com/EoNJkCKeBGIgfRutXoQwKESLKzAAVJAj/assets/images/optimized/wp-content/uploads/2024/06/f02a3dfac65af8ae5956fc4a1270d832.1-7.png',
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
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
