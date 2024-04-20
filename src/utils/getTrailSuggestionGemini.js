import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

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
                    text: 'You are about to receive a trail as information. Within that information if there is a comma everything before the comma is a trail and everything after the trail is information the user wants in their travel plans. Your job is to give the user suggestions on what to do while at that trail/park. If they specified they want to do a specific thing it is your job to incorporate that into suggestions on what to do while at that trail/park. You want to be very open and want to sell the idea of going to that place to them. Your response should be 1-2 sentences that accurately summarizes the best things to do while at that park/trail and to also include the activity that the user specified, if they did.',
                },
            ],
        },
        {
            role: 'model',
            parts: [
                {
                    text: 'I am about to receive a trail as information. Within that information if there is a comma everything before the comma is a trail and everything after the trail is information the user wants in their travel plans. My job is to give the user suggestions on what to do while at that trail/park. If they specified they want to do a specific thing it is my job to incoporate that into suggestions on what to do while at that trail/park. I want ot be very open and want to sell the idea of going to that place to them. My response should be 1-2 sentences that accurately summarizes the best things to do while at that park/trail and to also include the activity that the user specified, if the did.',
                },
            ],
        },
    ],
});

const result = await chat.sendMessage(
    'I want to have a picnic at Eaton Canyon Road'
);

const response = result.response.text();
console.log(response);


if (typeof require !== 'undefined' && require.main === module) {
    const result = await chat.sendMessage(
        'I want to have a picnic at Eaton Canyon Road'
    );

    const response = result.response.text();
    console.log(response);
}

export async function getTrailSuggestionGemini(input) {
    return await chat.sendMessageStream(input);
}
