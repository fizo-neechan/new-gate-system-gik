const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { auth } = require("./middlewares");
const router = express.Router();

const db = require("../database");

router.use(cookieParser());

router.get("/:key", auth, async (req, res, next) => {
  const key = req.params.key;
  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    const result = await db.query(`
        select 
        cast(regno as varchar) as id, 
        name,
        Designation 
        from info 
        where lower(name) like '%${key}%' or cast(regno as varchar) like '${key}%' 
        union  
        select 
        cnic as id,
        name,
        'Visitor' as Designation 
        from visitors_log 
        where lower(name) like '%${key}%' or cnic like '${key}%' 
        union 
        select    
        vehicle_no as id,
        'None' as name,
        'Vehicle' as Designation 
        from vehicles 
        where lower(vehicle_no) like '${key}%' 
        ;`);

    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    res.status(404).send([]);
  }
});

router.get("/:designation/:id", auth, async (req, res, next) => {
  const designation = req.params.designation.toLowerCase();
  const id = req.params.id;

  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    let result;
    if (designation === "vehicle") {
      result = await db.query("select * from vehicles where vehicle_no=$1;", [
        id,
      ]);
    } else if (designation === "visitor") {
      result = await db.query(
        "select name, cnic as nic, 'Visitor' as faculty_dept from visitors_log where cnic=$1 limit 1;",
        [id]
      );
    } else {
      result = await db.query("select * from info where regno=$1", [id]);
    }

    res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
