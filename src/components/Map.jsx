import { useState, useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Polyline,
    Marker,
    useMap,
} from 'react-leaflet';
import L from 'leaflet';
import { trailinfo } from '../assets/sample_traildata';

function ChangeBounds({ bounds }) {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(bounds);
    }, [bounds]);
}

export function Map({
    marker = trailinfo.center, // format: [11.00, 11.00] (set to undefined for no marker)
    polyline = trailinfo.coords, // format: list[center, center]
}) {
    const [bounds, setBounds] = useState(
        L.polyline(polyline).getBounds().extend(marker)
    );

    useEffect(() => {
        let bounds = L.polyline(polyline).getBounds().extend(marker);
        setBounds(bounds);
    }, [polyline, marker]);

    return (
        <>
            <MapContainer
                className="w-full h-full rounded-3xl"
                zoom={11}
                scrollWheelZoom={false}
                preferCanvas={true}
                bounds={bounds}
                boundsOptions={{ padding: [20, 20] }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={polyline} />
                {marker != null && <Marker position={marker} />}
                <ChangeBounds bounds={bounds} />
            </MapContainer>
            <button
                type="button"
                className=" absolute bottom-8 right-8 border-3 rounded-lg w-28 h-10 bg-[#686CF1] text-[#FEFEFE]"
            >
                Create Post
            </button>
        </>
    );
}
