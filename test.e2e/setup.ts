import {afterAll, beforeAll} from "bun:test";


let proc: Bun.Subprocess
const serverBaseUrl = "http://localhost:3000"

beforeAll(async () => {
    proc = Bun.spawn(["bun", "run", "start"])
    await waitUntilServerReady()
    console.log("server started")
})

afterAll(async () => {
    proc.kill("SIGTERM")
    await proc.exited
    console.log("server stopped")
})

const waitUntilServerReady = async () => {
    try {
        const resp = await fetch(`${serverBaseUrl}/ping`)
        if (!resp.ok) throw new Error(`server responded with ${resp.status}`)
        const body = await resp.text()
        if (body !== "pong") throw new Error(`server responded with ${body}`)
    } catch (e) {
        await new Promise(resolve => setTimeout(resolve, 50))
        return waitUntilServerReady()
    }
}