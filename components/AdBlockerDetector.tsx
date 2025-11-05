import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface AdBlockerDetectorProps {
  detected: boolean;
}

const AdBlockerDetector: React.FC<AdBlockerDetectorProps> = ({ detected }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (detected) {
      setIsVisible(true);
    }
  }, [detected]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-yellow-100 border-b border-yellow-300 text-yellow-800 p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-3" />
          <p className="text-sm font-medium">
            <strong>Bloqueador de Anúncios Detectado.</strong> O AJUDAMEDIKO é mantido pelos anúncios que você vê aqui. Por favor, considere desativar seu bloqueador para este site para nos apoiar.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Fechar aviso"
          className="p-1 rounded-md hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AdBlockerDetector;