const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const port = 3004;

app.use(morgan("combined"));

// Register `hbs.engine` with the Express app.
app.engine("hbs", handlebars.engine({
  extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/view"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/tin-tuc", (req, res) => {
  // res.send("Tin tuc!");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ a: 1, b: 2 }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
