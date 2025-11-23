
import React, { useState, useEffect } from 'react';
import { Calendar, Calculator, Clock, ArrowRight, Baby } from 'lucide-react';

const GestationalCalculator: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dum' | 'usg' | 'converter'>('dum');

    // Estados DUM
    const [dumDate, setDumDate] = useState('');
    const [dumResult, setDumResult] = useState<{ weeks: number; days: number; dpp: string } | null>(null);

    // Estados USG
    const [usgDate, setUsgDate] = useState('');
    const [usgWeeks, setUsgWeeks] = useState('');
    const [usgDays, setUsgDays] = useState('');
    const [usgResult, setUsgResult] = useState<{ weeks: number; days: number; dpp: string } | null>(null);

    // Estados Conversor
    const [convertWeeks, setConvertWeeks] = useState('');
    const [convertResult, setConvertResult] = useState<string | null>(null);

    // Utilitários de Data
    const addDays = (date: Date, days: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR');
    };

    // Lógica DUM
    const calculateDum = () => {
        if (!dumDate) return;
        const start = new Date(dumDate + 'T00:00:00'); // Fix timezone issue
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);

        if (start > today) {
            alert("A data da DUM não pode ser futura.");
            return;
        }

        const diffTime = Math.abs(today.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;
        const dpp = addDays(start, 280); // 40 semanas

        setDumResult({ weeks, days, dpp: formatDate(dpp) });
    };

    // Lógica USG
    const calculateUsg = () => {
        if (!usgDate || !usgWeeks) return;
        
        const examDate = new Date(usgDate + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        examDate.setHours(0, 0, 0, 0);

        if (examDate > today) {
            alert("A data do exame não pode ser futura.");
            return;
        }

        // Dias passados desde o exame
        const diffTime = Math.abs(today.getTime() - examDate.getTime());
        const daysPassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Idade gestacional no dia do exame em dias totais
        const initialDays = (parseInt(usgWeeks) * 7) + (parseInt(usgDays) || 0);
        
        // Idade atual em dias
        const totalCurrentDays = initialDays + daysPassed;

        const currentWeeks = Math.floor(totalCurrentDays / 7);
        const currentDaysRemainder = totalCurrentDays % 7;
        
        // DPP = Data do Exame + (280 dias - Idade no Exame em dias)
        const daysRemainingTo40Weeks = 280 - initialDays;
        const dpp = addDays(examDate, daysRemainingTo40Weeks);

        setUsgResult({ weeks: currentWeeks, days: currentDaysRemainder, dpp: formatDate(dpp) });
    };

    // Lógica Conversor
    const calculateConverter = () => {
        const w = parseInt(convertWeeks);
        if (isNaN(w)) return;

        let text = "";
        if (w < 1) text = "Menos de 1 mês";
        else if (w <= 4) text = "1º Mês";
        else if (w <= 8) text = "2º Mês";
        else if (w <= 12) text = "3º Mês";
        else if (w <= 16) text = "4º Mês";
        else if (w <= 21) text = "5º Mês";
        else if (w <= 26) text = "6º Mês";
        else if (w <= 30) text = "7º Mês";
        else if (w <= 35) text = "8º Mês";
        else if (w <= 40) text = "9º Mês";
        else text = "Pós-termo (9+ Meses)";

        setConvertResult(text);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden">
            <div className="bg-teal-700 p-6 text-white">
                <div className="flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-teal-300" />
                    <h3 className="text-xl font-serif font-bold">Calculadora Gestacional</h3>
                </div>
                <p className="text-teal-100 text-sm mt-1">Ferramenta de apoio para estimativa de idade gestacional.</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 bg-gray-50">
                <button 
                    onClick={() => setActiveTab('dum')}
                    className={`flex-1 py-4 text-sm font-bold text-center transition-colors ${activeTab === 'dum' ? 'bg-white text-teal-700 border-t-2 border-teal-600' : 'text-gray-500 hover:text-teal-600'}`}
                >
                    Por DUM
                </button>
                <button 
                    onClick={() => setActiveTab('usg')}
                    className={`flex-1 py-4 text-sm font-bold text-center transition-colors ${activeTab === 'usg' ? 'bg-white text-teal-700 border-t-2 border-teal-600' : 'text-gray-500 hover:text-teal-600'}`}
                >
                    Por Ultrassom
                </button>
                <button 
                    onClick={() => setActiveTab('converter')}
                    className={`flex-1 py-4 text-sm font-bold text-center transition-colors ${activeTab === 'converter' ? 'bg-white text-teal-700 border-t-2 border-teal-600' : 'text-gray-500 hover:text-teal-600'}`}
                >
                    Conversor
                </button>
            </div>

            <div className="p-6">
                {/* Calculadora DUM */}
                {activeTab === 'dum' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Data da Última Menstruação (DUM)</label>
                            <input 
                                type="date" 
                                value={dumDate}
                                onChange={(e) => setDumDate(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                            />
                        </div>
                        <button 
                            onClick={calculateDum}
                            className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                        >
                            Calcular
                        </button>

                        {dumResult && (
                            <div className="mt-4 bg-teal-50 p-4 rounded-lg border border-teal-100 animate-fade-in">
                                <h4 className="text-teal-900 font-bold text-center border-b border-teal-200 pb-2 mb-2">Resultado Estimado</h4>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <span className="block text-xs text-teal-600 uppercase font-bold">Idade Gestacional</span>
                                        <span className="text-xl font-bold text-gray-800">{dumResult.weeks} sem {dumResult.days} dias</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-teal-600 uppercase font-bold">Data Provável (DPP)</span>
                                        <span className="text-xl font-bold text-gray-800">{dumResult.dpp}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Calculadora USG */}
                {activeTab === 'usg' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Data do Exame Anterior</label>
                            <input 
                                type="date" 
                                value={usgDate}
                                onChange={(e) => setUsgDate(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Semanas no Exame</label>
                                <input 
                                    type="number" 
                                    placeholder="Ex: 12"
                                    value={usgWeeks}
                                    onChange={(e) => setUsgWeeks(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Dias no Exame</label>
                                <input 
                                    type="number" 
                                    placeholder="Ex: 3"
                                    max="6"
                                    value={usgDays}
                                    onChange={(e) => setUsgDays(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                                />
                            </div>
                        </div>
                        <button 
                            onClick={calculateUsg}
                            className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                        >
                            Calcular Idade Atual
                        </button>

                        {usgResult && (
                            <div className="mt-4 bg-teal-50 p-4 rounded-lg border border-teal-100 animate-fade-in">
                                <h4 className="text-teal-900 font-bold text-center border-b border-teal-200 pb-2 mb-2">Hoje você está com:</h4>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <span className="block text-xs text-teal-600 uppercase font-bold">Idade Gestacional</span>
                                        <span className="text-xl font-bold text-gray-800">{usgResult.weeks} sem {usgResult.days} dias</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-teal-600 uppercase font-bold">Nova DPP Estimada</span>
                                        <span className="text-xl font-bold text-gray-800">{usgResult.dpp}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Conversor */}
                {activeTab === 'converter' && (
                    <div className="space-y-6">
                        <div className="bg-teal-50 p-4 rounded-lg text-sm text-teal-800 mb-4 border border-teal-100">
                            <p>Converta o tempo de gestação de semanas para a correspondência aproximada em meses.</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Semanas</label>
                                <input 
                                    type="number" 
                                    placeholder="20"
                                    value={convertWeeks}
                                    onChange={(e) => setConvertWeeks(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50 text-center text-xl font-bold"
                                />
                            </div>
                            <div className="pt-6">
                                <ArrowRight className="text-gray-400" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Meses</label>
                                <div className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-center text-xl font-bold text-teal-700 h-[54px] flex items-center justify-center">
                                    {convertResult || "-"}
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={calculateConverter}
                            className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                        >
                            Converter
                        </button>
                        
                        {convertResult && (
                            <div className="text-center text-xs text-gray-500 mt-2">
                                *Baseado na tabela de referência obstétrica padrão.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GestationalCalculator;
