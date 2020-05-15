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
