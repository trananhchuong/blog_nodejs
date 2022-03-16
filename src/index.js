const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const port = 3004;

// config encode param if user pass by form
app.use(express.urlencoded({
  extended: true
}));

// config encode param if user pass by js: axios, httpRequest
app.use(express.json());

app.use(morgan("combined"));

// Register `hbs.engine` with the Express app.
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/view"));

// config static path
app.use(express.static(path.join(__dirname, "public")));

// route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  console.log("🚀 ~ file: index.js ~ line 29 ~ app.get ~ req", req.query )
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log("🚀 ~ file: index.js ~ line 38 ~ app.post ~ req", req.body)
  res.send("search");
});

app.get("/tin-tuc", (req, res) => {
  // res.send("Tin tuc!");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ a: 1, b: 2 }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
