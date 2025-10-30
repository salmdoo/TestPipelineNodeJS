import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Sample Node.js App!" });
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "Hello from Node.js v22!" });
});

app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
