import { useState } from 'react';

export function useLocation() {
    const [latitude, setLatitude] = useState(undefined);
    const [longitude, setLongitude] = useState(undefined);

    async function getLocation () {
        await navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            err => console.log(err)
        );
    }

    return { latitude, longitude, getLocation };
}
