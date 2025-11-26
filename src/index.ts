Bun.serve({
    routes: {
        "/ping": new Response("pong")
    }
})
