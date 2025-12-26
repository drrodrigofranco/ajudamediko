import { GoogleGenAI } from "@google/genai";
import { ChatMessage, HealthNews } from '../types';

/**
 * Conecta diretamente ao SDK do Gemini para fornecer suporte médico grounded.
 */
export const getGroundedResponse = async (prompt: string): Promise<ChatMessage> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Modelo otimizado para suporte médico rápido
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: 'Você é o AJUDAMEDIKO, assistente especialista para médicos brasileiros. Forneça respostas técnicas, baseadas em evidências, estruturadas com markdown (tópicos, negrito). Sempre cite fontes científicas e diretrizes (ex: SBC, Febrasgo, WHO) quando disponíveis.',
      },
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => ({
        uri: chunk.web?.uri || '',
        title: chunk.web?.title || 'Fonte de Pesquisa'
    })).filter(s => s.uri !== '') || [];

    return {
      role: 'model',
      text: response.text || "Não foi possível gerar uma resposta agora.",
      sources: sources
    };

  } catch (error) {
    console.error('Gemini Service Error:', error);
    return {
      role: 'model',
      text: "Ocorreu um erro ao processar sua dúvida médica. Verifique sua conexão e tente novamente.",
    };
  }
};

export const getHealthNews = async (): Promise<HealthNews[]> => {
    // Retorna a lista de links fornecida pelo usuário como padrão fixo para garantir estabilidade
    return [
        {
          title: "Por que contratar um Perito Médico?",
          summary: "Descubra o papel fundamental do assistente técnico em processos judiciais e como a expertise médica contribui para decisões assertivas e justas.",
          url: "https://www.jpaservicosmedicos.com.br/porque-contratar-um-perito"
        },
        {
          title: "Ecocardiograma Fetal: Quando e por que fazer?",
          summary: "Entenda a importância deste exame fundamental na avaliação da saúde do bebê ainda durante a gestação e quando ele é indicado.",
          url: "https://hospitalsanmichele.com.br/2025/02/21/ecocardiograma-fetal-quando-e-por-que-fazer-a-importancia-do-exame-na-avaliacao-da-saude-do-bebe/"
        },
        {
          title: "Tudo sobre Espirometria",
          summary: "Resumo completo sobre definição, indicações, técnica e análise dos resultados deste exame de função pulmonar.",
          url: "https://sanarmed.com/resumo-de-espirometria-definicao-indicacoes-tecnica-e-analise-do-resultados/"
        },
        {
          title: "Entenda a Translucência Nucal",
          summary: "Saiba a importância da medição da nuca do feto no primeiro trimestre para o rastreamento de condições genéticas.",
          url: "https://eigierdiagnosticos.com.br/blog/o-que-e-translucencia-nucal/"
        },
        {
          title: "Tudo sobre o Ultrassom de Abdome Total",
          summary: "Saiba como é feito e para que serve o ultrassom de abdome total, um dos exames mais solicitados para avaliação de órgãos internos.",
          url: "https://nav.dasa.com.br/blog/ultrassom-de-abdome-total"
        },
        {
          title: "O Ultrassom Abdominal pode salvar vidas",
          summary: "A prevenção é o melhor remédio. Descubra como a ultrassonografia abdominal auxilia no diagnóstico precoce de diversas condições.",
          url: "https://clinicalucidioportella.com.br/voce-sabia-que-o-ultrassom-abdominal-pode-salvar-vidas/"
        }
    ];
};