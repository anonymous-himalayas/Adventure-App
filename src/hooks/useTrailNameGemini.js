import { useState, useEffect } from 'react';
import { getTrailNameGemini } from '../utils/getTrailNameGemini';

export function useTrailNameGemini() {
    const [trailNames, setTrailNames] = useState([]);

    useEffect(() => {
        if (trailNames.length !== 0) {
            console.log(`Gemini trails: ${trailNames}`);
        }
    }, [trailNames]);

    async function getTrailNameInput(input) {
        setTrailNames(await getTrailNameGemini(input));
    }

    return { trailNames, getTrailNameGemini: getTrailNameInput };
}
