import { Elysia, t } from "elysia";

new Elysia()
  .post("/register", ({ body }) => {
    return {
      message: `Halo ${body.name}, umur kamu ${body.age} tahun.`,
    };
  }, {
    body: t.Object({
      name: t.String(),
      age: t.Number({ minimum: 1 })
    })
  })
  .listen(3000);

console.log("Server running di http://localhost:3000");