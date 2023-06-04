const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { auth } = require("./middlewares");

const db = require("../database");

router.use(cookieParser());

router.get("/", auth, async (req, res, next) => {
  try {
    if (!res.locals.username) throw new Error("Not authorized");
    const result = await db.query(
      `select d.regno as id, i.name, d."Time" as "time", flag from dailylog d inner join info i on d.regno=i.regno order by d."Time" desc limit 50;`
    );
    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", auth, (req, res, next) => {
  try {
    if (!res.locals.username) throw new Error("Not authorized");
    res.status(200).send("only");
  } catch (err) {
    console.error(err);
  }
});

router.post("/", auth, (req, res, next) => {
  try {
    if (!res.locals.username) throw new Error("Not authorized");
    res.send("posting");
  } catch (err) {
    console.error(err);
  }
});

router.put("/", auth, async (req, res, next) => {
  const { regNo } = req.body;
  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    let { rows: user } = await db.query(
      `select * from info where regNo = ${regNo}`
    );
    user = user[0];

    if (user.status === "IN") {
      await db.query(`update info set status = 'OUT' where regNo = ${regNo};`);
      await db.query(
        `INSERT INTO dailylog (RegNo, "Time", Vehicle_no, flag) VALUES (${regNo}, NOW(), NULL, 'OUT');`
      );
    } else {
      await db.query(`update info set status = 'IN' where regNo = ${regNo}`);
      await db.query(
        `INSERT INTO dailylog (RegNo, "Time", Vehicle_no, flag) VALUES (${regNo}, NOW(), NULL, 'IN');`
      );
    }

    res.status(200).send({ msg: "commit succesful" });
  } catch (err) {
    res.status(404).send({ error: "Could not commit change" });
    console.log(err);
  }
});

module.exports = router;
