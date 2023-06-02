const express = require("express");
const ejs = require("ejs");

const app = express();

const api = require("./api/api");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use('/api', api);

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;

