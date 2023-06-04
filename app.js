const express = require("express");
const ejs = require("ejs");

const app = express();

const api = require("./api/api");
const { auth } = require("./api/routes/middlewares");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/api", api);

app.get("/", auth, (req, res, next) => {
  if (res.locals.username) {
    res.render("index");
  } else {
    res.redirect("/api/login");
  }
});

module.exports = app;
