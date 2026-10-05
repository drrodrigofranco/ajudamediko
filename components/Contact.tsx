
import React from 'react';
import { MapPin, Phone, CheckCircle, Globe } from 'lucide-react';

interface ContactProps {
  formName: string;
  setFormName: (val: string) => void;
  formPhone: string;
  setFormPhone: (val: string) => void;
  formExam: string;
  setFormExam: (val: string) => void;
  ultrasoundExams: { name: string }[];
  handleScheduleClick: () => void;
}

const Contact: React.FC<ContactProps> = ({
  formName,
  setFormName,
  formPhone,
  setFormPhone,
  formExam,
  setFormExam,
  ultrasoundExams,
  handleScheduleClick
}) => {
  const [error, setError] = React.useState('');

  const validateAndSchedule = () => {
    if (!formName.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }
    if (formPhone.replace(/\D/g, '').length < 10) {
      setError('Por favor, informe um telefone válido.');
      return;
    }
    setError('');
    handleScheduleClick();
  };

  return (
    <section id="contato" className="bg-ink-2 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 flex flex-col md:flex-row gap-14 md:gap-16">
        <div className="md:w-5/12 text-white text-left flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-5">Agende seu Exame</h2>
          <p className="text-white/70 mb-10 text-sm leading-relaxed">Entre em contato para marcar sua consulta ou tirar dúvidas sobre procedimentos médicos e periciais.</p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-ink-3 p-3 rounded-lg h-fit"><MapPin className="text-brand-pale" /></div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Endereço</h3>
                <p className="text-xs text-white/70">Rua Melvin Jones, 1243<br/>Nova Andradina - MS, 79750-000</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-ink-3 p-3 rounded-lg h-fit"><Phone className="text-brand-pale" /></div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Contato</h3>
                <p className="text-xs text-white/70">
                  <a href="https://wa.me/5567998446674" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">
                    (67) 99844-6674
                  </a>
                  <br/>Atendimento com agendamento, Segunda a Sábado, das 6h às 22h
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-ink-3 p-3 rounded-lg h-fit"><CheckCircle className="text-brand-pale" /></div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Atendimentos</h3>
                <p className="text-xs text-white/70">PROVER, Oeste Saúde, MaterDei, PAX, AMENA e Particular</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-ink-3 p-3 rounded-lg h-fit"><Globe className="text-brand-pale" /></div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Região de Atendimento</h3>
                <p className="text-xs text-white/70">Pacientes de Nova Andradina, Rosana (SP), Ivinhema, Anaurilândia, Batayporã, Deodápolis, Angélica e região.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-7/12 text-left">
          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md text-xs font-semibold border border-red-200 animate-shake">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-white/80 mb-2 block">Nome Completo</label>
              <input
                id="contact-name"
                value={formName}
                onChange={e => setFormName(e.target.value)} 
                className="w-full bg-white text-ink border border-gray-300 p-4 rounded-md outline-none focus:ring-2 focus:ring-brand-pale transition-all text-sm" 
                placeholder="Seu nome" 
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="text-sm font-medium text-white/80 mb-2 block">Telefone / WhatsApp</label>
              <input
                id="contact-phone"
                value={formPhone}
                onChange={e => setFormPhone(e.target.value)} 
                className="w-full bg-white text-ink border border-gray-300 p-4 rounded-md outline-none focus:ring-2 focus:ring-brand-pale transition-all text-sm" 
                placeholder="(67) 99844-6674" 
              />
            </div>
            <div>
              <label htmlFor="contact-exam" className="text-sm font-medium text-white/80 mb-2 block">Tipo de Exame</label>
              <select
                id="contact-exam"
                value={formExam}
                onChange={e => setFormExam(e.target.value)} 
                className="w-full bg-white text-ink border border-gray-300 p-4 rounded-md outline-none focus:ring-2 focus:ring-brand-pale transition-all text-sm appearance-none"
              >
                <option value="">Selecione uma opção</option>
                {ultrasoundExams.map((ex, i) => (<option key={i} value={ex.name}>{ex.name}</option>))}
              </select>
            </div>
            <button 
              onClick={validateAndSchedule} 
              className="w-full bg-brand text-white py-4 rounded-md font-semibold hover:bg-brand-hover transition-colors text-sm"
            >
              Solicitar Agendamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
