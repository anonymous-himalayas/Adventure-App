import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import { trailinfo } from '../assets/sample_traildata';

export function Map({
    marker = trailinfo.center, // format: [11.00, 11.00]
    polyline = trailinfo.coords, // format: list[center, center]
}) {
    const [bounds, setBounds] = useState(
        L.polyline(polyline).getBounds().extend(marker)
    );

    useEffect(() => {
        setBounds(L.polyline(polyline).getBounds().extend(marker));
    }, [polyline]);

    return (
        <>
            <MapContainer
                className="w-full h-full"
                zoom={11}
                scrollWheelZoom={false}
                preferCanvas={true}
                bounds={bounds}
                boundsOptions={{ padding: [50, 50] }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={polyline} />
                <Marker position={marker} />
            </MapContainer>
        </>
    );
}
