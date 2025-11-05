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
    return {
      role: 'model',
      text: 'Desculpe, ocorreu um erro ao processar sua solicitação. Verifique sua conexão e a chave de API e tente novamente.',
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
    return null;
  }
};