import trail from './demo_trailcoords';

let coords = [];

const center = [34.070591, -118.446806];

trail[0]['geojson']['coordinates'].map((coord) => {
    coords.push([coord[1], coord[0]]);
});

export default { coords, center };
