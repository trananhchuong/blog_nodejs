const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3004;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tin-tuc", (req, res) => {
  res.send("Tin tuc!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
