
import React from 'react';
import { X, MapPin, ExternalLink } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  mapImgSrc: string;
  googleMapsLink: string;
}

const MapModal: React.FC<MapModalProps> = ({ 
  isOpen, 
  onClose, 
  mapImgSrc, 
  googleMapsLink 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors"
        onClick={onClose}
      >
        <X size={40} />
      </button>
      <div className="max-w-5xl w-full relative" onClick={e => e.stopPropagation()}>
        <img 
          src={mapImgSrc} 
          alt="Mapa Localização Ampliado" 
          className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
        />
        <div className="mt-6 flex justify-center">
          <a 
            href={googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#14b8a6] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#0d9488] transition-all shadow-xl"
          >
            <MapPin size={20} />
            ABRIR NO GOOGLE MAPS
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
