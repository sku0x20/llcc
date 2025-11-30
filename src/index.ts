import {findCountry} from "./countryFinder.ts";

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
            const code = findCountry(lat, lon)
            const resp = {
                "cc": code
            }
            return Response.json(resp)
        }
    }
})


