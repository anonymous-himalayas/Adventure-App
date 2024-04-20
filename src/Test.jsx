import { Map } from './components/Map';
import { useTrailLocation } from './hooks/useTrailLocation';

export function Test() {
    const trailLocation = useTrailLocation();

    return (
        <>
            <button
                className="w-96 h-96"
                // onClick={() =>
                //     trailLocation.getTrailPolylineFromName(
                //         'west observatory trail'
                //     )
                // }
            >
                hi
            </button>
            <div className="w-full h-96">
                <Map polyline={trailLocation.polyline} />
            </div>
        </>
    );
}
