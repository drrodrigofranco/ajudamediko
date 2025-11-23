
import { ChatMessage, HealthNews } from '../types';

/**
 * Sends a prompt to the secure backend API and gets a grounded response.
 * @param prompt The user's prompt.
 * @returns A ChatMessage object with the model's response and sources.
 */
export const getGroundedResponse = async (prompt: string): Promise<ChatMessage> => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Erro de comunicação com o servidor.");
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Ocorreu um erro ao buscar a resposta.');
    }

    return data as ChatMessage;

  } catch (error) {
    console.error('Error fetching grounded response:', error);
    const errorMessage = error instanceof Error ? error.message : 'Não foi possível conectar ao servidor.';
    return {
      role: 'model',
      text: errorMessage,
    };
  }
};

/**
 * Fetches recent health news articles from the secure backend API.
 * Uses a robust fallback mechanism to ensure the UI never breaks.
 * @returns An array of HealthNews objects.
 */
export const getHealthNews = async (): Promise<HealthNews[]> => {
  const fallbackNews: HealthNews[] = [
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

  try {
    const response = await fetch('/api/news');
    
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
         const data = await response.json();
         // Check if data is an array and has items
         if (Array.isArray(data) && data.length > 0) {
             return data as HealthNews[];
         } else if (data && data.title) {
             // Handle legacy single object return by wrapping in array
             return [data] as HealthNews[];
         }
    }
    
    console.warn("Invalid news format received, using fallback.");
    return fallbackNews;

  } catch (error) {
    console.error("Error fetching health news (using fallback):", error);
    return fallbackNews;
  }
};
