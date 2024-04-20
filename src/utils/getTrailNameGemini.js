import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

import 'dotenv/config.js';

const genAI = new GoogleGenerativeAI('AIzaSyDbDmGSBYOCZNkjUoXM2mOWTvs0khrnHi0');
const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro-latest',
});

const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 0.95,
    maxOutputTokens: 2048,
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];

const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
        {
            role: 'user',
            parts: [
                {
                    text: 'You are about to receive information that will pertain to what a user wants in a hiking trail.  You want to give an accurate hiking trail that is best described by the information such as length of trail, terrain difficulty, and facilities onsite. However not all that information may be provided to you and you will give an accurate trail that fits well. You will provide a single hiking trail that is somewhere close to where the user specifies and most accurately fits with the information that the user provided or if no location is given, base it off of a trail that is most accurate to the information provided and closest to the current location of the user. You will only give the trail name and it has to be trail that can be put into Google Maps.',
                },
            ],
        },
        {
            role: 'model',
            parts: [
                {
                    text: 'I am about to receive information that will pertain to what a user wants in a hiking trail. I want to give an accurate hiking trail that is best described by the information such as length of trail, terrain difficulty, and facilities onsite. I realize not all the information may be provided to me and I will give an accurate trail that fits well. I will provide a single hiking trail that is somewhere close to where the user specifies and most accurately fits with the information that the user provided or if no location is given, base it off of a trail that is most accurate to the information provided and closest to the current location of the user. I will only give the trail name that can be put into google maps.',
                },
            ],
        },
    ],
});

const result = await chat.sendMessage(
    'I want to go on a hike close to San Dimas'
);
const response = result.response.text();
console.log(response);
