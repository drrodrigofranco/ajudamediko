// /api/generate/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

// Redefinindo tipos para evitar problemas de importação no ambiente serverless
interface Source {
  uri: string;
  title: string;
}

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

export async function POST(request: Request) {
  if (!process.env.API_KEY) {
    return NextResponse.json({ error: 'A chave de API do Gemini não está configurada no servidor.' }, { status: 500 });
  }

  try {
    const { prompt } = await request.json();
    if (!prompt) {
        return NextResponse.json({ error: 'O prompt é obrigatório.' }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: 'You are AJUDAMEDIKO, a specialist AI assistant for medical professionals. Your answers must be in Brazilian Portuguese. Provide clear, concise, and evidence-based information, structured using markdown for readability (headings, lists, bold text). When discussing diseases, include suggestions for clinical conduct in both hospital and outpatient settings. Always cite your sources from the provided search results.',
      },
    });

    const text = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

    const sources: Source[] = [];
    if (groundingMetadata?.groundingChunks) {
      for (const chunk of groundingMetadata.groundingChunks) {
        if (chunk.web && chunk.web.uri && chunk.web.title) {
          if (!sources.some(s => s.uri === chunk.web.uri)) {
            sources.push({
              uri: chunk.web.uri,
              title: chunk.web.title,
            });
          }
        }
      }
    }

    const chatResponse: ChatMessage = {
      role: 'model',
      text: text,
      sources: sources,
    };
    
    return NextResponse.json(chatResponse);

  } catch (error: any) {
    console.error('Error in API route /api/generate:', error);
    
    let detailedErrorMessage = 'Desculpe, ocorreu um erro no servidor ao processar sua solicitação.';
    const errorMessage = String(error.message).toLowerCase();

    if (errorMessage.includes('api key not valid') || errorMessage.includes('api_key_invalid') || errorMessage.includes('permission denied')) {
        detailedErrorMessage = 'A chave de API configurada no servidor não é válida, expirou ou não tem as permissões necessárias. Verifique as variáveis de ambiente do seu projeto.';
    } else if (errorMessage.includes('429') || errorMessage.includes('quota')) {
        detailedErrorMessage = 'A cota da API foi excedida. Por favor, verifique seu plano de faturamento.';
    } else if (errorMessage.includes('candidate was blocked due to safety')) {
        detailedErrorMessage = 'A resposta foi bloqueada por motivos de segurança. Por favor, ajuste sua pergunta e tente novamente.';
    }
    
    return NextResponse.json({ error: detailedErrorMessage }, { status: 500 });
  }
}