import {afterAll, beforeAll} from "bun:test";


let proc: Bun.Subprocess
export const baseUrl = "http://localhost:3000"

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
        await fetch(`${baseUrl}`)
    } catch (e) {
        await new Promise(resolve => setTimeout(resolve, 50))
        return waitUntilServerReady()
    }
}