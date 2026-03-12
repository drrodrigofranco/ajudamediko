
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! O Dr. Rodrigo foi muito atencioso durante o meu ecocardiograma fetal, me explicou tudo com muita calma.",
      role: "Paciente"
    },
    {
      name: "João Pereira",
      text: "Clínica muito bem equipada e profissionais de altíssimo nível. Fiz meu check-up geral e me senti muito seguro com as orientações do Dr. Lucas.",
      role: "Paciente"
    },
    {
      name: "Ana Costa",
      text: "O melhor lugar para exames de imagem em Nova Andradina. Rapidez no agendamento e laudos muito precisos.",
      role: "Paciente"
    }
  ];

  return (
    <section className="py-24 bg-teal-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#0e4843] mb-4">O que dizem nossos pacientes</h2>
          <div className="h-1 w-16 bg-[#14b8a6] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-8 text-teal-100 w-12 h-12 -z-0" />
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-[#0e4843]">{t.name}</h4>
                  <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
