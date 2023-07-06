const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const db = require("../database");

express.urlencoded({ extended: true });
express.json();

async function auth(req, res, next) {
  const token = req.cookies.gikToken;

  if (!token) {
    return next();
  }

  try {
    const user = await jwt.verify(
      token,
      "473929yr79c57n428oo8sr429840238nchfhdhdfhe@&#&8uner2#nef3"
    );
    res.locals.username = user.username;
    return next();
  } catch (err) {
    console.log("error");
    res.clearCookie("gikToken");
    return next();
  }
}

module.exports = {
  auth,
};
