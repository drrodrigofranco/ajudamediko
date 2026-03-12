
import React from 'react';
import { MapPin, Phone, CheckCircle } from 'lucide-react';

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
    <section id="contato" className="py-24 max-w-6xl mx-auto px-4 mb-24 scroll-mt-24">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-50">
        <div className="md:w-5/12 bg-[#0e4843] text-white p-14 text-left flex flex-col justify-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Agende seu Exame</h2>
          <p className="text-teal-100/60 mb-14 text-sm leading-relaxed">Entre em contato para marcar sua consulta ou tirar dúvidas sobre procedimentos médicos e periciais.</p>
          
          <div className="space-y-12">
            <div className="flex gap-5">
              <div className="bg-[#1c5d57] p-3.5 rounded-2xl"><MapPin className="text-[#14b8a6]" /></div>
              <div>
                <h4 className="font-bold mb-1 text-base">Endereço</h4>
                <p className="text-[11px] text-teal-100/70">Rua Melvin Jones, 1243<br/>Nova Andradina - MS, 79750-000</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#1c5d57] p-3.5 rounded-2xl"><Phone className="text-[#14b8a6]" /></div>
              <div>
                <h4 className="font-bold mb-1 text-base">Contato</h4>
                <p className="text-[11px] text-teal-100/70">(67) 99844-6674<br/>Atendimento somente com agendamento após as 17h</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#1c5d57] p-3.5 rounded-2xl"><CheckCircle className="text-[#14b8a6]" /></div>
              <div>
                <h4 className="font-bold mb-1 text-base">Convênios</h4>
                <p className="text-[11px] text-teal-100/70">PROVER e Particular</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-7/12 p-14 text-left bg-white">
          <div className="space-y-7">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold border border-red-100 animate-shake">
                {error}
              </div>
            )}
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase mb-3 block tracking-widest">Nome Completo</label>
              <input 
                value={formName} 
                onChange={e => setFormName(e.target.value)} 
                className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm" 
                placeholder="Seu nome" 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase mb-3 block tracking-widest">Telefone / WhatsApp</label>
              <input 
                value={formPhone} 
                onChange={e => setFormPhone(e.target.value)} 
                className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm" 
                placeholder="(67) 99844-6674" 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase mb-3 block tracking-widest">Tipo de Exame</label>
              <select 
                value={formExam} 
                onChange={e => setFormExam(e.target.value)} 
                className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#14b8a6]/20 transition-all text-sm text-gray-500 appearance-none"
              >
                <option value="">Selecione uma opção</option>
                {ultrasoundExams.map((ex, i) => (<option key={i} value={ex.name}>{ex.name}</option>))}
              </select>
            </div>
            <button 
              onClick={validateAndSchedule} 
              className="w-full bg-[#14b8a6] text-white py-5 rounded-2xl font-bold shadow-lg hover:bg-[#0f766e] transition-all transform active:scale-95 text-sm uppercase tracking-wider"
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
