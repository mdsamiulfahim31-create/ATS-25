
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateAdScript = async (productName: string, targetAudience: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Create a professional 30-second video advertisement script in Bengali for the product/business: "${productName}". The target audience is: "${targetAudience}". Focus on being catchy and persuasive. Output the script clearly with sections for Visuals and Audio (Voiceover).`,
    config: {
      temperature: 0.8,
      topP: 0.95,
      topK: 40,
    },
  });

  return response.text;
};
