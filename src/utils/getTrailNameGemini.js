import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDbDmGSBYOCZNkjUoXM2mOWTvs0khrnHi0');
const model = genAI.getGenerativeModel({
    model: 'gemini-1.0-pro',
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
                    text: "You are to receive information that pertains to a specific hiking trail. It is your job to find at least 1 hiking trail with a similar name and if there are many similar names you will choose the top 5 that are most similar. In addition, you are aware that the information given may not actually be a hiking trail and it is your job to realize that and return Invalid Query. Otherwise if the name is similar to at least 1 or more trails then you will list all of them up to 5 trails. In addition, the trails names have to be able to put into Google Maps. Finally you won't put numbers or special characters in front of each trail and just put the exact name of the trail with nothing in the front.",
                },
            ],
        },
        {
            role: 'model',
            parts: [
                {
                    text: "I am about to receive information that pertains to a specific hiking trail. It is my job to find at least 1 hiking trail with a similar name and if there are many similar names I will choose the top 5 that are most similar. In addition, you are aware that the information given may not actually be a hiking trail and it is my job to realize that and return Invalid Query. Otherwise if the name is similar to atleast 1 or more trails then I will list all of them up to 5 trails. In addition, the trail names have to be put into Google Maps. Finally I won't put numbers or special characters in front of each trail and just put the exact name of the trail with nothing in the front.",
                },
            ],
        },
    ],
});

if (typeof require !== 'undefined' && require.main === module) {
    const result = await chat.sendMessage('Bonelli Park');
    const response = result.response.text();
    console.log(response);
}

//You are about to receive information that will pertain to what a user wants in a hiking trail.  You want to give an accurate hiking trail that is best described by the information such as length of trail, terrain difficulty, and facilities onsite. However not all that information may be provided to you and you will give an accurate trail that fits well. You will provide a single hiking trail that is somewhere close to where the user specifies and most accurately fits with the information that the user provided or if no location is given, base it off of a trail that is most accurate to the information provided and closest to the current location of the user. You will only give the trail name and it has to be trail that can be put into Google Maps.

//I am about to receive information that will pertain to what a user wants in a hiking trail. I want to give an accurate hiking trail that is best described by the information such as length of trail, terrain difficulty, and facilities onsite. I realize not all the information may be provided to me and I will give an accurate trail that fits well. I will provide a single hiking trail that is somewhere close to where the user specifies and most accurately fits with the information that the user provided or if no location is given, base it off of a trail that is most accurate to the information provided and closest to the current location of the user. I will only give the trail name that can be put into google maps.

export async function getTrailNameGemini(input) {
    const result = await chat.sendMessage(input);
    return result.response
        .text()
        .trim()
        .split(/\r?\n/)
        .map((response) => {
            return response.trim().replace(/[^a-zA-Z ]/g, "");
        });
}
