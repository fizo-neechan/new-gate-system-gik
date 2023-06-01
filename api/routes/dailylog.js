const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.status(200).send("all");
});

router.get("/:id", (req, res, next) => {
    res.status(200).send("only");
});

router.post("/", (req, res, next) => {
    res.send("posting")
});

module.exports = router;