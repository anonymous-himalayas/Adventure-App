import { useState } from 'react';
import { getTrailSuggestionGemini } from '../utils/getTrailSuggestionGemini';

export function useTrailSuggestionGemini() {
    const [suggestion, setSuggestion] = useState('');

    async function getTrailSuggestionInput(input) {
        setSuggestion('');
        const result = await getTrailSuggestionGemini(input);
        for await (const chunk of result.stream) {
            setSuggestion((e) => e + chunk.text());
        }
    }

    return { suggestion, getTrailSuggestionGemini: getTrailSuggestionInput };
}
