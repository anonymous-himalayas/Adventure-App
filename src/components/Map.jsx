import { useState, useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Polyline,
    Marker,
    Popup,
    useMap,
} from 'react-leaflet';
import L, { Icon } from 'leaflet';
import { trailinfo } from '../assets/demo_traildata';
import deer from '../assets/deer.png';
import raccoon from '../assets/rac.png';
import lion from '../assets/lion.png';
import squirrel from '../assets/squirrel.png';

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

    const squirrelIcon = new Icon({
        iconUrl: { squirrel },
        iconSize: [30, 30], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const deerIcon = new Icon({
        iconUrl: { deer },
        iconSize: [30, 30], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const lionIcon = new Icon({
        iconUrl: { lion },
        iconSize: [30, 30], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const raccoonIcon = new Icon({
        iconUrl: { raccoon },
        iconSize: [30, 30], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    return (
        <>
            <MapContainer
                className="w-full h-full rounded-3xl z-0"
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
                {marker != null && <Marker position={marker} />}

                {/* custom icons */}
                <Marker position={[33.891729, -117.691425]} icon={squirrelIcon}>
                    <Popup>
                        Squirrels can find food buried beneath a foot of snow.
                    </Popup>
                </Marker>
                <Marker position={[33.890101, -117.691167]} icon={deerIcon}>
                    <Popup>
                        Mule Deer can reach speeds of up to 45 miles per hour.
                    </Popup>
                </Marker>
                <Marker position={[33.890591, -117.692927]} icon={lionIcon}>
                    <Popup>
                        Mountain Lions have powerful hind legs enable them to
                        jump as far as 40 to 45 feet.
                    </Popup>
                </Marker>
                <Marker position={[33.893352, -117.693785]} icon={raccoonIcon}>
                    <Popup>Raccoon's masks are anti-glare devices.</Popup>
                </Marker>

                <ChangeBounds bounds={bounds} />
            </MapContainer>
        </>
    );
}
