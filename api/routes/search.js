const express = require('express');
const router = express.Router();

const db = require("../database");

router.get("/:key", (req, res, next) => {

    const key = req.params.key;

    db.query(`
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
    ;`, (err, result) => {
    // console.log(result.rows);
    if(err){
        console.log(err);
        return [];
    } else {
        res.send(result.rows);
    }

})
});

module.exports = router;