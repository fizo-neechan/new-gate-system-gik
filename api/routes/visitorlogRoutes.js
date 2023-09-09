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

router.post("/add", auth, async (req, res, next) => {
  const { name, cnic, vehicle } = req.body;
  const pattern = /^[a-zA-Z0-9]+$/;
  const pattern2 = /^[a-zA-Z]+$/;
  const pattern3 = /^[0-9]+$/;

  try {
    if (!res.locals.username) throw new Error("Not Authorized");

    if (!pattern.test(vehicle) && pattern2.test(name) && pattern3.test(cnic))
      throw new Error("Invalid properties");

    const addedVisitor = await db.query(
      `insert into visitors_log (Name, Cnic, Vehicle_no, flag) values ('${name}', '${cnic}', '${vehicle}') returning *`
    );

    res.status(200).send({ success: "visitor added" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
