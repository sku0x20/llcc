import {expect, test} from "bun:test"
import {baseUrl} from "./setup.ts";

test("ping", async () => {
    const resp = await fetch(`${baseUrl}/ping`)
    const body = await resp.text()
    expect(body).toBe("pong")
})

test("404", async () => {
    const resp = await fetch(`${baseUrl}/404`)
    expect(resp.status).toBe(404)
})

