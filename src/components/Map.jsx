import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { trailinfo } from '../assets/sample_traildata';

export function Map({
    center = trailinfo.center,
    polyline = trailinfo.coords,
}) {
    return (
        <>
            <MapContainer
                className="w-full h-full rounded-xl"
                center={center}
                zoom={11}
                scrollWheelZoom={false}
                preferCanvas={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={polyline} />
            </MapContainer>
        </>
    );
}
