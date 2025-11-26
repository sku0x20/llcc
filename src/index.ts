

Bun.serve({
    fetch: (req: Request) => new Response("hi from bun")
})
