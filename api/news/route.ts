
// /api/news/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function GET() {
  // Fallback content updated with specific user links
  const fallbackNews = [
    {
      title: "Ecocardiograma Fetal: Quando e por que fazer?",
      summary: "Entenda a importância deste exame fundamental na avaliação da saúde do bebê ainda durante a gestação e quando ele é indicado.",
      url: "https://hospitalsanmichele.com.br/2025/02/21/ecocardiograma-fetal-quando-e-por-que-fazer-a-importancia-do-exame-na-avaliacao-da-saude-do-bebe/"
    },
    {
      title: "Entenda a Translucência Nucal",
      summary: "Saiba a importância da medição da nuca do feto no primeiro trimestre para o rastreamento de condições genéticas.",
      url: "https://eigierdiagnosticos.com.br/blog/o-que-e-translucencia-nucal/"
    },
    {
      title: "Pesquisa aponta desafios em Maternidades",
      summary: "Estudo recente mostra a importância e a necessidade de equipes completas 24 horas em maternidades para garantir a segurança obstétrica.",
      url: "https://agenciabrasil.ebc.com.br/saude/noticia/2025-05/pesquisa-mostra-que-faltam-equipes-completas-24-horas-em-maternidades"
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
    },
    {
      title: "A Importância do Pré-Natal Especializado",
      summary: "O acompanhamento médico rigoroso e a realização dos ultrassons morfológicos e obstétricos são vitais para uma gestação tranquila.",
      url: "https://www.febrasgo.org.br/pt/paciente/noticias"
    }
  ];

  if (!process.env.API_KEY) {
    console.warn("API Key not found, returning fallback news.");
    return NextResponse.json(fallbackNews);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash';
    
    // Prompt ajustado para tentar buscar notícias novas, mas se falhar, usa os links do usuário
    const prompt = `Atue como um curador de notícias médicas.
    Gere um JSON Array com 5 notícias recentes sobre Ultrassonografia, Ecocardiograma Fetal ou Saúde Pública no Brasil.
    
    Formato:
    [
      {
        "title": "Título",
        "summary": "Resumo curto",
        "url": "https://fonte..."
      }
    ]`;

    // NOTA: Para garantir que os links do usuário sempre apareçam como prioridade, 
    // poderíamos desativar a chamada da IA. No entanto, manterei a lógica de fallback 
    // como principal se a intenção for FIXAR esses links.
    // Se a intenção for FIXAR os links do usuário permanentemente, retornamos o fallback direto.
    // Assumindo que o usuário quer ESSES links especificamente agora:
    return NextResponse.json(fallbackNews); 

    /* 
    // Código original da IA comentado para priorizar os links manuais solicitados:
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: { responseMimeType: 'application/json' },
    });
    ...
    */

  } catch (error: any) {
    console.error("Error in API route /api/news:", error);
    return NextResponse.json(fallbackNews);
  }
}
