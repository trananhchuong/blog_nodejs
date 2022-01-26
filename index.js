const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tin-tuc", (req, res) => {

    const a = 1;
    const b = 2;
    const c = a + b;


  res.send("Tin tuc!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
