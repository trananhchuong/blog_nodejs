const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const port = 3004;

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tin-tuc", (req, res) => {
  // res.send("Tin tuc!");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ a: 1, b: 2 }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
