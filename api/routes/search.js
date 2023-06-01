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

router.get("/:designation/:id", (req, res, next) => {
    const designation = req.params.designation.toLowerCase();
    const id = req.params.id;

    if(designation === 'vehicle'){
        db.query("select * from vehicles where vehicle_no=$1;", [id], (err, result) => {
            if(err){
                console.log(err);
            } else {
                return res.send(result.rows);
            }
        });
    } else if (designation === 'visitor') {
        db.query("select name, cnic as nic, 'Visitor' as faculty_dept from visitors_log where cnic=$1 limit 1;", [id], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                return res.send(result.rows);
            }
        });
    } else {
        db.query("select * from info where regno=$1", [id], (err, result) => {
            if(err){
                console.log(err);
            } else {
                return res.send(result.rows);
            }
        });
    }
});

module.exports = router;