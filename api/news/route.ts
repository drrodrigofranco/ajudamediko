
// /api/news/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function GET() {
  // Fallback content in case of any API/Key/Model failure
  const fallbackNews = {
    title: "A Importância do Ecocardiograma Fetal",
    summary: "O ecocardiograma fetal é um exame fundamental que permite avaliar o coração do bebê ainda no útero, detectando precocemente cardiopatias congênitas e permitindo um planejamento seguro para o parto.",
    url: "https://www.sbc.org.br"
  };

  if (!process.env.API_KEY) {
    console.warn("API Key not found, returning fallback news.");
    return NextResponse.json(fallbackNews);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash';
    
    const prompt = `Atue como um especialista em Medicina Fetal.
    Gere uma pequena nota informativa ou curiosidade científica sobre Ultrassonografia, Ecocardiograma Fetal ou Saúde da Gestante.
    Deve ser educativo e passar credibilidade.
    
    Responda APENAS com um JSON válido no seguinte formato, sem markdown:
    {
      "title": "Título curto e interessante",
      "summary": "Texto de 2 a 3 frases explicando o tópico.",
      "url": "https://www.febrasgo.org.br"
    }`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    let jsonText = response.text;
    
    // Limpeza defensiva
    if (jsonText) {
        jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();
    }

    try {
        const newsData = JSON.parse(jsonText);
        // Validação básica
        if (newsData.title && newsData.summary) {
            return NextResponse.json(newsData);
        }
    } catch (e) {
        console.error("Failed to parse AI response:", e);
    }

    // Se falhar o parse ou a validação, retorna fallback
    return NextResponse.json(fallbackNews);

  } catch (error: any) {
    console.error("Error in API route /api/news:", error);
    // Em caso de erro fatal (quota, network, etc), retorna fallback com sucesso (200) para não quebrar o front
    return NextResponse.json(fallbackNews);
  }
}
