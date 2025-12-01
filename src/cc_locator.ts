import {pointToPolygonDistance} from '@turf/point-to-polygon-distance'
import GeoJSON from "geojson"

const countriesGeoJson = await Bun.file("data/ne_50m_admin_0_countries.json").json() as Array<GeoJSON.Feature>

// for (const feature of countriesGeoJson) {
//     console.log(`${feature.properties["ISO_A2_EH"]} - ${feature.properties["NAME"]}`)
// }

export const findCountryCode = (lat: number, lon: number): string => {
    const point: GeoJSON.Position = [lon, lat]
    const candidates = countriesGeoJson

    let nearestCountry = null
    let minDistance = Infinity

    for (const feature of candidates) {
        const distance = pointToPolygonDistance(point, feature.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon, {
            units: "kilometers",
            method: "geodesic"
        })
        if (distance < 0) {
            // point is inside the polygon/country
            return feature.properties!["ISO_A2_EH"]
        }
        if (distance < minDistance) {
            minDistance = distance
            nearestCountry = feature.properties!["ISO_A2_EH"]
        }
    }
    if (nearestCountry) return nearestCountry
    return "-99"
}
