import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage, HealthNews, Source } from '../types';

/**
 * Gets a grounded response from the Gemini model using Google Search.
 * @param prompt The user's prompt.
 * @returns A ChatMessage object with the model's response and sources.
 */
export const getGroundedResponse = async (prompt: string): Promise<ChatMessage> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: 'You are a helpful AI assistant for medical professionals called AJUDAMEDIKO. Provide clear, concise, and evidence-based information. When answering questions about diseases, always include suggestions for clinical conduct, covering both hospital and outpatient settings. Always cite your sources. Your responses should be in Brazilian Portuguese.',
      },
    });

    const text = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

    const sources: Source[] = [];
    if (groundingMetadata?.groundingChunks) {
      for (const chunk of groundingMetadata.groundingChunks) {
        if (chunk.web && chunk.web.uri && chunk.web.title) {
          // Avoid duplicate sources
          if (!sources.some(s => s.uri === chunk.web.uri)) {
            sources.push({
              uri: chunk.web.uri,
              title: chunk.web.title,
            });
          }
        }
      }
    }

    return {
      role: 'model',
      text: text,
      sources: sources,
    };
  } catch (error) {
    console.error('Error getting grounded response:', error);
    
    let detailedErrorMessage = 'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.';

    if (error && typeof error === 'object' && 'message' in error) {
      const errorMessage = String(error.message).toLowerCase();

      if (errorMessage.includes('api key not valid') || errorMessage.includes('api_key_invalid') || errorMessage.includes('permission denied')) {
        detailedErrorMessage = 'A chave de API configurada não é válida, expirou ou não tem as permissões necessárias. Por favor, verifique se a chave de API está correta e tente novamente.';
      } else if (errorMessage.includes('429') || errorMessage.includes('quota')) {
        detailedErrorMessage = 'A cota da API foi excedida. Por favor, tente novamente mais tarde ou verifique seu plano de faturamento.';
      } else if (errorMessage.includes('network') || errorMessage.includes('fetch') || errorMessage.includes('failed to fetch')) {
        detailedErrorMessage = 'Ocorreu um erro de rede. Por favor, verifique sua conexão com a internet e tente novamente.';
      } else if (errorMessage.includes('candidate was blocked due to safety')) {
          detailedErrorMessage = 'A resposta foi bloqueada por motivos de segurança. Por favor, ajuste sua pergunta e tente novamente.';
      }
    }

    return {
      role: 'model',
      text: detailedErrorMessage,
    };
  }
};

/**
 * Fetches a recent health news article using the Gemini model.
 * @returns A HealthNews object or null if an error occurs.
 */
export const getHealthNews = async (): Promise<HealthNews | null> => {
  const model = 'gemini-2.5-flash';
  const prompt = 'Encontre uma notícia recente e importante sobre saúde ou medicina em português. Forneça o título, um resumo conciso e o URL da fonte.';

  const newsSchema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "O título da notícia." },
      summary: { type: Type.STRING, description: "Um resumo conciso da notícia." },
      url: { type: Type.STRING, description: "O URL da fonte original da notícia." },
    },
    required: ['title', 'summary', 'url'],
  };

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: newsSchema,
      },
    });

    const jsonText = response.text.trim();
    const newsData = JSON.parse(jsonText);

    if (newsData.title && newsData.summary && newsData.url) {
      return newsData as HealthNews;
    }

    return null;
  } catch (error) {
    console.error("Error fetching health news:", error);
    if (error && typeof error === 'object' && 'message' in error) {
        const errorMessage = String(error.message).toLowerCase();
        if (errorMessage.includes('api key not valid')) {
            throw new Error('A chave de API para notícias não é válida. Verifique a configuração.');
        } else if (errorMessage.includes('quota')) {
            throw new Error('A cota da API para notícias foi excedida.');
        }
    }
    throw new Error("Não foi possível carregar a notícia devido a um erro.");
  }
};