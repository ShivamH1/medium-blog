import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/user/signup", async (c) => {
  c.text("signup");
});

app.post("/api/v1/user/signin", async (c) => {
  c.text("signin");
});

app.post("/api/v1/blog", async (c) => c.text("blog add"));

app.put("/api/v1/blog", async (c) => c.text("blog update"));

app.get("/api/v1/blog/:id", async (c) => c.text("blog get"));

app.get("/api/v1/blog/bulk", async (c) => c.text("blog bulk get"));

export default app;
