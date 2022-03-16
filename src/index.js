const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");

const route = require("./routes");
const port = 3004;

// config encode param if user pass by form
app.use(express.urlencoded({
  extended: true
}));

// config encode param if user pass by js: axios
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

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
