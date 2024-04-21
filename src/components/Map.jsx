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
import startTrailinfo from '../assets/start_traildata';
import demoTrailinfo from '../assets/demo_traildata';

function ChangeBounds({ bounds }) {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(bounds);
    }, [bounds]);
}

export function Map({
    marker = startTrailinfo.center, // format: [11.00, 11.00] (set to undefined for no marker)
    polyline = demoTrailinfo.coords, // format: list[center, center]
}) {
    const [bounds, setBounds] = useState(
        L.polyline(polyline).getBounds()
    );

    useEffect(() => {
        let bounds = L.polyline(polyline).getBounds().extend(marker);
        setBounds(bounds);
    }, [polyline, marker]);

    const squirrelIcon = new Icon({
        iconUrl:
            'https://raw.githubusercontent.com/anonymous-himalayas/Adventure-App/main/src/assets/squirrel.png',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const deerIcon = new Icon({
        iconUrl:
            'https://raw.githubusercontent.com/anonymous-himalayas/Adventure-App/main/src/assets/deer.png',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const lionIcon = new Icon({
        iconUrl:
            'https://raw.githubusercontent.com/anonymous-himalayas/Adventure-App/main/src/assets/lion.png',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const raccoonIcon = new Icon({
        iconUrl:
            'https://raw.githubusercontent.com/anonymous-himalayas/Adventure-App/main/src/assets/rac.png',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    return (
        <>
            <MapContainer
                className="w-full h-full rounded-3xl z-0"
                scrollWheelZoom={true}
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
                        Mule deer can reach speeds of up to 45 miles per hour.
                    </Popup>
                </Marker>
                <Marker position={[33.890591, -117.692927]} icon={lionIcon}>
                    <Popup>
                        Mountain lions have powerful hind legs that can jump as
                        far as 40 to 45 feet.
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
