import { Elysia, t } from "elysia";

new Elysia()
  // Guard pertama
  .guard({
    query: t.Object({
      api_key: t.String()
    })
  })
  .get("/hello", ({ query }) => `Hello! API key: ${query.api_key}`)

  // Guard kedua override guard sebelumnya (karena defaultnya override)
  .guard({
    query: t.Object({
      token: t.String()
    })
  })
  .get("/secure", ({ query }) => `Secure access with token: ${query.token}`)

  .listen(3000);

console.log("Server running di http://localhost:3000");
