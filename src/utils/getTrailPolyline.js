export async function getTrailPolyline(query) {
    return await fetch(
        `https://nominatim.openstreetmap.org/?format=json&polygon_geojson=1&dedupe=0&addressdetails=1&q=${encodeURIComponent(query)}`
    )
        .then((res) => res.json())
        .then((res) => {
            return res[0]['geojson']['coordinates'];
        });
}
