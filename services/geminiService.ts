
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
 * Fetches a recent health news article from the secure backend API.
 * Uses a robust fallback mechanism to ensure the UI never breaks.
 * @returns A HealthNews object.
 */
export const getHealthNews = async (): Promise<HealthNews> => {
  const fallbackNews: HealthNews = {
    title: "Ultrassonografia: Segurança e Precisão",
    summary: "A ultrassonografia é um método diagnóstico seguro, não invasivo e essencial para o acompanhamento da saúde fetal e diagnósticos ginecológicos precisos.",
    url: "https://www.febrasgo.org.br"
  };

  try {
    const response = await fetch('/api/news');
    
    // Check content type specifically
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
         const data = await response.json();
         if (data && data.title && data.summary) {
             return data as HealthNews;
         }
    }
    
    console.warn("Invalid news format received, using fallback.");
    return fallbackNews;

  } catch (error) {
    console.error("Error fetching health news (using fallback):", error);
    return fallbackNews;
  }
};
