import { useState } from 'react';
import { Map } from './components/Map';
import { useTrailLocation } from './hooks/useTrailLocation';

export function Test() {
    const trailLocation = useTrailLocation();
    const [search, setSearch] = useState();

    return (
        <>
            <input
                type="text"
                className="text-sm rounded-lg block w-full p-2.5"
                placeholder="enter query ex 'west observatory trail'"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                value={search}
            />

            <button
                className="w-1/2 h-10 bg-gray-500 text-white rounded-md"
                onClick={() => trailLocation.getTrailPolylineFromName(search)}
            >
                submit query to nominatim and try to find on the map
            </button>

            <div className="w-full h-96">
                <Map marker={null} polyline={trailLocation?.polyline} />
            </div>
        </>
    );
}
