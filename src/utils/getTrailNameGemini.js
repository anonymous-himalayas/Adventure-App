import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    
} from '@google/generative-ai';

import "dotenv/config.js"


    const genAI = new GoogleGenerativeAI(
        process.env.VITE_GEMINI_API_KEY
    );
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro-latest",
    });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 0.95,
        maxOutputTokens: 2048,
    };
