const express = require('express');
const router = express.Router();

const db = require("../database")

router.get("/", (req, res, next) => {
    db.query(`select d.regno as id, i.name, d."Time" as "time", flag from dailylog d inner join info i on d.regno=i.regno order by d."Time" desc limit 50;`, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
});

router.get("/:id", (req, res, next) => {
    res.status(200).send("only");
});

router.post("/", (req, res, next) => {
    res.send("posting")
});

module.exports = router;