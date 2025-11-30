import {expect, test} from "bun:test";
import {baseUrl} from "./setup.ts";


test("coordinateResidesInside", async () => {
    let resp = await fetch(`${baseUrl}/cc?lat=12.98&lon=78.64`)
    let body: any = await resp.json()
    expect(body.cc).toBe("IN")

    resp = await fetch(`${baseUrl}/cc?lat=25.15&lon=55.25`)
    body = await resp.json()
    expect(body.cc).toBe("AE")
})

test("coordinatesResidesNear", async () => {
    let resp = await fetch(`${baseUrl}/cc?lat=9.8806&lon=76.2417`)
    let body: any = await resp.json()
    expect(body.cc).toBe("IN")

    resp = await fetch(`${baseUrl}/cc?lat=25.0340&lon=54.9814`)
    body = await resp.json()
    expect(body.cc).toBe("AE")
})
