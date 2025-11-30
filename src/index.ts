const countriesGeoJson = await Bun.file("data/ne_50m_admin_0_countries.json").json()

// for (const feature of countriesGeoJson) {
//     console.log(`${feature.properties["ISO_A2_EH"]} - ${feature.properties["NAME"]}`)
// }


Bun.serve({
    routes: {
        "/ping": new Response("pong"),
        "/cc": (req) => {
            const url = new URL(req.url).searchParams
            const lat = parseFloat(url.get("lat")!)
            const lon = parseFloat(url.get("lon")!)
            if (isNaN(lat) || isNaN(lon)) {
                return new Response("invalid params", {status: 400})
            }
            console.log(`${lat}, ${lon}`)
            // const code = findCountry()
            const resp = {
                "cc": "IN"
            }
            return Response.json(resp)
        }
    }
})
