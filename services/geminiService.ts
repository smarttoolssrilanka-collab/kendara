
import { GoogleGenAI } from "@google/genai";
import type { FormData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateAstrologyReading(formData: FormData): Promise<string> {
    const prompt = `
        You are a world-renowned astrologer and fortune teller with a warm, mystical, and positive tone. 
        A client has come to you for a personalized reading. Based on the details they have provided, 
        generate a detailed and encouraging astrology reading in the ${formData.language} language.

        **Client Details:**
        - Name: ${formData.name}
        - Date of Birth: ${formData.dob}
        - Birthplace: ${formData.birthplace}
        - Zodiac Sign: ${formData.zodiacSign}

        The reading must be comprehensive and cover the following sections. Use markdown-style bold headings for each section (e.g., '**Personality Traits**').
        The response should be a single block of text, with each section separated by a newline.

        1. **Personality Traits:** Based on their zodiac sign and birth details.
        2. **Strengths & Weaknesses:** Explain these in an inspiring and constructive way.
        3. **Love & Relationships:** Describe how they connect with others and what they look for in a partner.
        4. **Career & Money:** Provide insights into their professional path and financial outlook.
        5. **Health & Wellbeing:** Offer spiritual and physical guidance.
        6. **Future Prediction:** Discuss upcoming trends for the near and long-term future.
        7. **Lucky Elements:** List their lucky number, color, day of the week, and lucky stone.

        **IMPORTANT RULES:**
        - The ENTIRE response must be in the ${formData.language} language.
        - Maintain your persona as a wise and trusted astrologer throughout.
        - NEVER mention that you are an AI or a language model.
        - Your tone must be consistently encouraging, mystical, and positive.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to communicate with the celestial realms.");
    }
}
