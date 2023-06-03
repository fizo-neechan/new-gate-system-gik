const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const morgan = require('morgan');

// const productRoutes = require('./routes/products');
const dailyLogRoute = require('./routes/dailylog');
const searchRoute = require('./routes/search');

const db = require("./database");

router.use(morgan('dev'));
router.use('/dailyLog', dailyLogRoute);
router.use('/search', searchRoute);
router.use(bodyParser.urlencoded({ extended: true }));

// Routes which should handle requests
router.get('/', (req, res, next) => {
    res.status(200).redirect("/");
});

router.post("/addnewuser", (req, res, next) => {
    const data = req.body;
    if(!data.vehicle_no){
        data.vehicle_no = "NULL";
    }

    const query = `
      INSERT INTO info (
        RegNo, Name, FatherName, NIC, Designation, Faculty_Dept,
        DOB, PermanentAddress, Contact_number, EmergencyContactName,
        EmergencyContactNumber, IdentificationMark, BloodGroup, Vehicle_no
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
      )`;
  
    const values = [
      data.regno,
      data.name,
      data.fathername,
      data.cnic,
      data.designation,
      data.faculty_dept,
      data.dob,
      data.permanentaddress,
      data.contactno,
      data.emergencycontactname,
      data.emergencycontactnumber,
      data.identificationmark,
      data.bloodgroup,
      data.vehicle_no
    ];
  
    db.query(query, values, (error, result) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).redirect('/');
      } else {
        console.log('Data inserted successfully');
        res.status(200).redirect('/');
      }
    });


})

router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = router;