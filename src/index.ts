import {findCountryCode} from "./cc_locator.ts";

Bun.serve({
    routes: {
        "/ping": new Response("pong"),
        "/cc": (req) => {
            const url = new URL(req.url).searchParams
            const lat = Number(url.get("lat")!)
            const lon = Number(url.get("lon")!)
            if (isNaN(lat) || isNaN(lon)) {
                return new Response("invalid params", {status: 400})
            }
            const code = findCountryCode(Number(lat.toFixed(4)), Number(lon.toFixed(4)))
            const resp = {
                "cc": code
            }
            return Response.json(resp)
        }
    }
})


