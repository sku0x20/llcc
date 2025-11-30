const countriesGeoJson = await Bun.file("data/ne_50m_admin_0_countries.json").json()

// for (const feature of countriesGeoJson) {
//     console.log(`${feature.properties["ISO_A2_EH"]} - ${feature.properties["NAME"]}`)
// }

export const findCountry = (lat: number, lon: number): string => {
    return "IN"
}
