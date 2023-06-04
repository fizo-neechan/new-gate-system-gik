const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { auth } = require("./middlewares");
const db = require("../database");
const router = express.Router();

router.use(express.static("../../public"));
router.use(express.json());
router.use(cookieParser());
// router.set("view engine", "ejs");

router.get("/", auth, (req, res) => {
  if (res.locals.username) res.redirect("/");
  res.render("login");
});

router.post("/", auth, async (req, res, next) => {
  const { username, password } = req.body;

  try {
    let { rows: user } = await db.query(
      `select * from login where username = '${username}' and password = '${password}'`
    );
    user = user[0];

    if (!user)
      return res.status(404).send({ error: "Invalid username or password" });

    const token = jwt.sign(
      { username: user.username },
      "473929yr79c57n428oo8sr429840238nchfhdhdfhe@&#&8uner2#nef3"
    );
    res.cookie("gikToken", token, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });
    return res.status(200).send({ path: "/" });
  } catch (err) {
    if (err === "Logged in") res.redirect("/");
    console.error(err);
  }
});

module.exports = router;
