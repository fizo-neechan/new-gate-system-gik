const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { auth } = require("./middlewares");
const router = express.Router();

const db = require("../database");

router.use(cookieParser());

router.get("/", auth, async (req, res, next) => {
  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    const result = await db.query(
      `select cnic as id, name, "Time", flag from visitors_log order by "Time" desc limit 50;`
    );

    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res.status(400).send([]);
  }
});

router.get("/:id", auth, (req, res, next) => {
  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    res.status(200).send("only");
  } catch (err) {
    console.error(err);
  }
});

router.post("/", auth, (req, res, next) => {
  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    res.send("posting");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
