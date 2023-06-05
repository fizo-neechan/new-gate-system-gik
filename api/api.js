const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { auth } = require("./routes/middlewares");
const db = require("./database");

// const productRoutes = require('./routes/products');
const dailyLogRoute = require("./routes/dailylogRoutes");
const visitorLogRoute = require("./routes/visitorlogRoutes");
const searchRoute = require("./routes/searchRoutes");
const loginRoute = require("./routes/loginRoutes");

router.use(morgan("dev"));
router.use(express.json());
router.use(cookieParser());
router.use("/dailyLog", dailyLogRoute);
router.use("/visitorLog", visitorLogRoute);
router.use("/search", searchRoute);
router.use("/login", loginRoute);
router.use(bodyParser.urlencoded({ extended: true }));

// router.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });

// router.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// Routes which should handle requests
router.get("/", (req, res, next) => {
  res.status(200).redirect("/");
});

router.post("/add_new_user", auth, async (req, res, next) => {
  const { data } = req.body;

  if (!data.vehicle_no) {
    data.vehicle_no = "NULL";
    data.status = "IN";
  }

  const query = `
      INSERT INTO info (
        RegNo, Name, FatherName, NIC, Designation, Faculty_Dept,
        DOB, PermanentAddress, Contact_number, EmergencyContactName,
        EmergencyContactNumber, IdentificationMark, BloodGroup, Vehicle_no, status
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
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
    data.vehicle_no,
    data.status,
  ];

  try {
    if (!res.locals.username) throw new Error("Not Authorized");
    const result = await db.query(query, values);

    console.log("Data inserted successfully");
    res.status(200).redirect("/");
  } catch (err) {
    if (err.code === "23505")
      return res
        .status(403)
        .send({ error: "Registration number already exists" });
    console.error("Error inserting data", err);
    res.status(500).redirect("/");
  }
});

module.exports = router;
