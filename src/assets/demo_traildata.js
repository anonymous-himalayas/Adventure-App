import trail from './demo_trailcoords';

let coords = [];

const center = [33.8946257, -117.6939622];

trail[0]['geojson']['coordinates'].map((coord) => {
    coords.push([coord[1], coord[0]]);
});

export const trailinfo = { coords, center };
