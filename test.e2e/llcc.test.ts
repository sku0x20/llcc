import {expect, test} from "bun:test";
import {baseUrl} from "./setup.ts";


test("coordinateResidesInside", async () => {
    let resp = await fetch(`${baseUrl}/cc?lat=12.98&lon=78.64`)
    let body: any = await resp.json()
    expect(body.cc).toBe("IN")

    resp = await fetch(`${baseUrl}/cc?lat=25.15&lon=55.25`)
    body = await resp.json()
    expect(body.cc).toBe("AE")

    resp = await fetch(`${baseUrl}/cc?lat=51.5074&lon=-0.1278`)
    body = await resp.json()
    expect(body.cc).toBe("GB") // London (inside UK)
})

test("coordinatesResidesNear", async () => {
    let resp = await fetch(`${baseUrl}/cc?lat=9.8806&lon=76.2417`)
    let body: any = await resp.json()
    expect(body.cc).toBe("IN")

    resp = await fetch(`${baseUrl}/cc?lat=25.0340&lon=54.9814`)
    body = await resp.json()
    expect(body.cc).toBe("AE")

    resp = await fetch(`${baseUrl}/cc?lat=-5.0&lon=-170.0`)
    body = await resp.json()
    expect(body.cc).toBe("KI") // Pacific Ocean (near Kiribati)
})
