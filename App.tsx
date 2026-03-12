import React, { useState } from 'react';
import HealthNewsWidget from './components/HealthNewsWidget';
import Footer from './components/Footer';
import GestationalCalculator from './components/GestationalCalculator';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Curriculum from './components/Curriculum';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MapModal from './components/MapModal';
import ExamsDrawer from './components/ExamsDrawer';
import { 
    Baby, 
    ScanLine, 
    User, 
    Dumbbell, 
    Aperture, 
    Activity, 
    Clock, 
    HeartPulse, 
    Wind, 
    Stethoscope,
    Waves
} from 'lucide-react';

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [formName, setFormName] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formExam, setFormExam] = useState('');

    const doctorImgSrc = "https://i.postimg.cc/kXysy26g/Chat-GPT-Image-21-de-fev-de-2026-10-12-59.png";
    const mapImgSrc = "https://i.postimg.cc/28hbWxS9/Captura-de-tela-2025-12-26-144512.jpg";
    const googleMapsLink = "https://maps.app.goo.gl/aMkRNzPYtTe6jwQJ8";

    const navItems = ['SERVIÇOS', 'CALCULADORAS', 'CURRÍCULO', 'LOCALIZAÇÃO', 'DÚVIDAS', 'NOTÍCIAS', 'CONTATO'];

    const normalizeId = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const handleNavClick = (item: string) => {
        if (item === 'LOCALIZAÇÃO') {
            window.open(googleMapsLink, '_blank');
            setIsMobileMenuOpen(false);
        } else {
            scrollToSection(normalizeId(item));
        }
    };

    const handleScheduleClick = () => {
        const phone = "5567998446674";
        const message = `Olá Clínica Franco, gostaria de solicitar um agendamento pelo site.\n\n*Paciente:* ${formName || 'Não informado'}\n*Contato:* ${formPhone || 'Não informado'}\n*Serviço/Exame Desejado:* ${formExam || 'Não selecionado'}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const ultrasoundExams = [
        { id: 'obstetrico_doppler', name: "Obstétrico com Doppler", Icon: Baby, desc: "Avaliação da circulação fetal" },
        { id: 'obstetrico_sem_doppler', name: "Obstétrico sem Doppler", Icon: Baby, desc: "Acompanhamento de rotina" },
        { id: 'morfologico1', name: "Morfológico 1º Trimestre", Icon: Baby, desc: "Rastreamento de malformações" },
        { id: 'morfologico2', name: "Morfológico 2º Trimestre", Icon: Baby, desc: "Avaliação detalhada da anatomia" },
        { id: 'abdometotal', name: "Abdome Total", Icon: ScanLine, desc: "Avaliação de órgãos internos" },
        { id: 'pelvico', name: "Pélvico", Icon: ScanLine, desc: "Útero, ovários e bexiga" },
        { id: 'prostata', name: "Próstata", Icon: User, desc: "Via abdominal" },
        { id: 'tireoide', name: "Tireoide (com e sem Doppler)", Icon: Aperture, desc: "Avaliação de nódulos e cistos" },
        { id: 'carotidas', name: "Carótidas", Icon: Waves, desc: "Avaliação das artérias do pescoço" },
        { id: 'mama', name: "Mama", Icon: Activity, desc: "Prevenção e diagnóstico" },
        { id: 'articulacao_ombro', name: "Articulação: Ombro", Icon: Dumbbell, desc: "Tendões e ligamentos" },
        { id: 'articulacao_cotovelo', name: "Articulação: Cotovelo", Icon: Dumbbell, desc: "Epicondilites e traumas" },
        { id: 'articulacao_punho', name: "Articulação: Punho", Icon: Dumbbell, desc: "Túnel do carpo e cistos" },
        { id: 'articulacao_joelho', name: "Articulação: Joelho", Icon: Dumbbell, desc: "Meniscos e tendões" },
        { id: 'articulacao_tornozelo', name: "Articulação: Tornozelo", Icon: Dumbbell, desc: "Entorses e Aquiles" },
        { id: 'vascular', name: "Vascular", Icon: Waves, desc: "Doppler colorido" },
        { id: 'espirometria', name: "Espirometria", Icon: Wind, desc: "Prova de função pulmonar" },
        { id: 'holter', name: "Holter 24h", Icon: HeartPulse, desc: "Eletrocardiograma contínuo" },
        { id: 'mapa', name: "MAPA", Icon: Clock, desc: "Monitoramento de pressão 24h" },
        { id: 'ecofetal', name: "Ecocardiograma Fetal", Icon: HeartPulse, desc: "Avaliação cardíaca fetal" },
        { id: 'transvaginal', name: "Transvaginal", Icon: ScanLine, desc: "Avaliação detalhada interna" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
            <MapModal 
                isOpen={isMapModalOpen} 
                onClose={() => setIsMapModalOpen(false)} 
                mapImgSrc={mapImgSrc} 
                googleMapsLink={googleMapsLink} 
            />

            <Navbar 
                navItems={navItems} 
                isMobileMenuOpen={isMobileMenuOpen} 
                setIsMobileMenuOpen={setIsMobileMenuOpen} 
                handleNavClick={handleNavClick} 
                scrollToSection={scrollToSection} 
            />

            <main className="flex-grow">
                <Hero 
                    scrollToSection={scrollToSection} 
                    setIsMapModalOpen={setIsMapModalOpen} 
                    doctorImgSrc={doctorImgSrc} 
                    mapImgSrc={mapImgSrc} 
                    googleMapsLink={googleMapsLink} 
                />

                <Services ultrasoundExams={ultrasoundExams} />

                <section id="calculadoras" className="py-24 bg-gray-50 scroll-mt-24">
                    <div className="max-w-4xl mx-auto px-4">
                        <GestationalCalculator />
                    </div>
                </section>

                <Curriculum />

                <FAQ />

                <section id="noticias" className="py-24 max-w-5xl mx-auto px-4 scroll-mt-24">
                    <div className="bg-[#0e4843] rounded-3xl overflow-hidden shadow-2xl">
                        <HealthNewsWidget />
                    </div>
                </section>

                <Contact 
                    formName={formName} 
                    setFormName={setFormName} 
                    formPhone={formPhone} 
                    setFormPhone={setFormPhone} 
                    formExam={formExam} 
                    setFormExam={setFormExam} 
                    ultrasoundExams={ultrasoundExams} 
                    handleScheduleClick={handleScheduleClick} 
                />
            </main>

            <Footer />

            <ExamsDrawer />
            
            <a href="https://wa.me/5567998446674" target="_blank" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            </a>
        </div>
    );
};

export default App;
