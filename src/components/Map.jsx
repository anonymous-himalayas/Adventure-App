import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import { trailinfo } from '../assets/sample_traildata';

export function Map({
    center = trailinfo.center,
    polyline = trailinfo.coords,
}) {
    // const map = useMap();
    useEffect(() => {}, [polyline]);

    let pl = L.polyline(
        coordinates
    );

    return (
        <>
            <MapContainer
                className="w-full h-full"
                center={center}
                zoom={11}
                scrollWheelZoom={false}
                preferCanvas={true}
                // bounds={this.getBounds()}
                // boundsOptions={{ padding: [50, 50] }}
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
