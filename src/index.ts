Bun.serve({
    routes: {
        "/ping": new Response("pong"),
        "/cc": (req) => {
            const resp = {
                "cc": "IN"
            }
            return Response.json(resp)
        }
    }
})
