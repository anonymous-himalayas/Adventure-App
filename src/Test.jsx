import { getTrailPolyline } from './utils/getTrailPolyline';

export function Test() {
    return (
        <button
            className="w-96 h-96"
            onClick={() => {
                console.log(getTrailPolyline());
            }}
        >
            hi
        </button>
    );
}
