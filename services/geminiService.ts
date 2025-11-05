import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage, Source, HealthNews } from '../types';

const newsSchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "O título do artigo de notícia.",
        },
        summary: {
            type: Type.STRING,
            description: "Um resumo conciso do artigo em 2-3 frases.",
        },
        url: {
            type: Type.STRING,
            description: "O URL direto para o artigo de notícia original.",
        },
    },
    required: ["title", "summary", "url"],
};

export const getHealthNews = async (): Promise<HealthNews | null> => {
    try {
        // FIX: Use `process.env.API_KEY` as per the coding guidelines.
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            // FIX: Simplified `contents` to a string for a single-turn prompt.
            contents: "Encontre uma notícia de saúde recente e de alto impacto para profissionais médicos no Brasil. O foco DEVE ser estritamente em doenças, novos tratamentos ou estudos científicos relevantes. Forneça o título, um resumo curto e o URL do artigo original.",
            config: {
                responseMimeType: "application/json",
                responseSchema: newsSchema,
            },
        });
        
        const jsonText = response.text.trim();
        let newsData;
        try {
            newsData = JSON.parse(jsonText);
        } catch (parseError) {
             console.error("Error parsing JSON from Gemini API:", parseError, "Raw text:", jsonText);
             return null;
        }

        if (newsData.title && newsData.summary && newsData.url) {
            return newsData as HealthNews;
        }
        return null;

    } catch (error) {
        console.error("Error fetching health news from Gemini API:", error);
        return null;
    }
};


export const getGroundedResponse = async (prompt: string): Promise<ChatMessage> => {
  try {
    // FIX: Use `process.env.API_KEY` as per the coding guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      // FIX: Simplified `contents` to pass the prompt string directly.
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Você é um assistente de IA especializado para profissionais médicos. Seu objetivo principal é fornecer respostas precisas, concisas e úteis para questões clínicas. Fundamente suas respostas em evidências científicas confiáveis. Ao responder, cite suas fontes claramente, limitando-se a no máximo 4 links que mais embasaram a resposta. Priorize fontes de alta credibilidade, como sites de sociedades médicas, hospitais de referência, artigos científicos (PubMed, Scielo) e diretrizes clínicas oficiais. Evite citar fontes não especializadas como blogs de saúde genéricos e a Wikipédia. Seja profissional e formal. Para listas e tópicos, use traços (-) em vez de asteriscos (*). Quando questionado sobre doenças, estruture sua resposta em tópicos objetivos, incluindo: - Sintomas; - Exames confirmatórios; - Condutas com exemplos práticos (ex: dosagens de medicamentos, se aplicável); - Critérios diagnósticos ou de estadiamento relevantes. Quando questionado sobre uma medicação, a prioridade máxima é ser resumido e direto. Forneça apenas a informação essencial (dose, nome comercial) e não inclua explicações ou detalhes adicionais, a menos que o usuário peça explicitamente. Inclua nomes comerciais comuns no Brasil (ex: Azitromicina (Astro)). Para doses pediátricas, forneça um exemplo claro e prático baseado em peso, como: 'Para uma criança de 10kg: 2,5ml uma vez ao dia, por 5 dias (a dose pode variar conforme a doença)'. Mantenha as informações sobre apresentações (oral, injetável) e doses para adultos igualmente diretas. Para apresentações endovenosas (EV) ou intramusculares (IM), a dose DEVE ser especificada em mililitros (ml) por dose, de forma direta e curta (ex: 'EV: 5ml por dose').",
      },
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    let sources: Source[] = [];
    if (groundingChunks) {
        sources = groundingChunks
            .map((chunk: any) => ({
                uri: chunk.web?.uri,
                title: chunk.web?.title,
            }))
            .filter((source: any) => source.uri && source.title)
            // Deduplicate sources
            .filter((value, index, self) => 
                index === self.findIndex((t) => (
                    t.uri === value.uri
                ))
            )
            .slice(0, 4); // Hard limit to 4 sources
    }

    return {
      role: 'model',
      text,
      sources,
    };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    let errorMessage = "Ocorreu um erro desconhecido ao contatar a IA.";
    if (error instanceof Error) {
        errorMessage = `Falha ao obter resposta da IA: ${error.message}`;
    }
    return {
        role: 'model',
        text: `Erro: ${errorMessage}`
    };
  }
};
