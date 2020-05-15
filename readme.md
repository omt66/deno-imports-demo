# Info

Idea is to combine all imports in a single file in order to control them with their versions, etc. and export them with generic names so that they can be used throughout the project.

```ts
export * as server from "https://deno.land/std@0.50.0/http/server.ts"
export * as uuid from "https://deno.land/std/uuid/mod.ts"

```

Here is how to use it:

```ts
import { server } from "./imports.ts"
import { uuid } from "./imports.ts"

const { serve } = server
const { v4 } = uuid
const portNo = 3300
const s = serve({ port: portNo })

console.log("--- Deno Imports Demo (14 May 2020/Thr) ---")
console.log(`Deno server is starting at ${portNo}`)

for await (const req of s) {
  console.log("Got request on " + new Date().toISOString())
  req.respond({ body: "uuid-> " + v4.generate() })
}

```

Not sure this is a good approach but at least I am able to control all the dependencies in one file.

Feel free to provide your feedback as you see fit.
