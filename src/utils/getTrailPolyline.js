export async function getTrailPolyline(query) {
    console.log(
        `api call: https://nominatim.openstreetmap.org/?format=json&polygon_geojson=1&dedupe=0&addressdetails=1&q=${encodeURIComponent(
            query
        )}`
    );

    return await fetch(
        `https://nominatim.openstreetmap.org/?format=json&polygon_geojson=1&dedupe=0&addressdetails=1&q=${encodeURIComponent(
            query
        )}`
    )
        .then((res) => res.json())
        .then((res) => {
            let output = [];
            res[0]['geojson']['coordinates'].map((coord) => {
                output.push([coord[1], coord[0]]);
            });
            return output;
        });
}
