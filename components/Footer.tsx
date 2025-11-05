import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-screen-2xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center">
          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AJUDAMEDIKO por Rodrigo Duarte Franco. Todos os direitos reservados.</p>
            <p className="mt-1">
              Aviso: Esta ferramenta de IA é um suporte e não substitui o julgamento clínico profissional.
            </p>
          </div>
          <nav className="mt-4 sm:mt-0 flex space-x-4" aria-label="Footer">
            <a href="/politica-de-privacidade.html" className="text-sm text-gray-500 hover:text-gray-700">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso.html" className="text-sm text-gray-500 hover:text-gray-700">
              Termos de Uso
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;