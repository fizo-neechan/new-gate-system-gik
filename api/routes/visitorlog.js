const express = require('express');
const router = express.Router();

const db = require("../database")

router.get("/", (req, res, next) => {
    db.query(`select cnic as id, name, "Time", flag from visitors_log order by "Time" desc limit 50;`, (err, result) => {
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