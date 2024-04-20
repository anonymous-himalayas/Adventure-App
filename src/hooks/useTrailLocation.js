import { useState, useEffect } from 'react';
import { getTrailPolyline } from '../utils/getTrailPolyline';

export function useTrailLocation() {
    const [coords, setCoords] = useState(undefined);

    useEffect(() => {
        if (coords) {
            console.log(`Nominatim coords: ${coords}`);
        }
    }, [coords]);

    async function getTrailPolylineFromName(name) {
        setCoords(await getTrailPolyline(name));
    }

    return { polyline: coords, getTrailPolylineFromName };
}
