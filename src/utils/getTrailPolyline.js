export async function getTrailPolyline() {
    return (coordinates = await fetch(
        'https://nominatim.openstreetmap.org/?format=json&polygon_geojson=1&dedupe=0&addressdetails=1&q=west%20observatory%20trail'
    )
        .then((res) => res.json())
        .then((res) => {
            return res[0]['geojson']['coordinates'];
        }));
}
