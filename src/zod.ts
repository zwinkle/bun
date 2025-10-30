import { Elysia } from "elysia";
import { z } from "zod";

new Elysia()
  .post("/login", ({ body }) => {
    return {
      status: "berhasil login",
      username: body.username,
    };
  }, {
    body: z.object({
      username: z.string().min(3),
      password: z.string().min(6)
    })
  })
  .listen(3000);

console.log("Server running di http://localhost:3000");
