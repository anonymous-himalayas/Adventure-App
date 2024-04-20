import { useState } from 'react';
import { getTrailPolyline } from '../utils/getTrailPolyline';

export function useTrailLocation() {
    const [coords, setCoords] = useState(undefined);

    function getTrailPolylineFromName(name) {
        setCoords(getTrailPolyline(name))
    }

    return {polyline: coords, getTrailPolylineFromName}
}
