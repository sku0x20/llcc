import {afterAll, beforeAll} from "bun:test";


let proc: Bun.Subprocess

beforeAll(async () => {
    proc = Bun.spawn(["bun", "run", "start"])
    console.log("server started")
})

afterAll(async () => {
    proc.kill("SIGTERM")
    await proc.exited
    console.log("server stopped")
})
