import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.get("/hello/:name", ({ params }) => {
  return { message: `Hello, ${params.name}!` };
});

app.listen(3000);