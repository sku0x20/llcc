import {expect, test} from "bun:test"

test("ping", async () => {
    const resp = await fetch("http://localhost:3000/ping")
    const body = await resp.text()
    expect(body).toBe("pong")
})
