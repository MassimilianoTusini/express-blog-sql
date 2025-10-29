// Import di express
const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/posts");

// Middleware per leggere JSON
app.use(express.json());

// Middleware per file statici
app.use(express.static("public"));

// Rotta base
app.get("/", (req, res) => {
  res.send("<h1>I nostri prodotti</h1>");
});

app.use("/posts", postRouter);
console.log("✅ Router montato su /posts");

// Middleware per rotte non trovate
const notFound = require("./middlewares/notFound");
app.use(notFound);

// Avvio del server
app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});

