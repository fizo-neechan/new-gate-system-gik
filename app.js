const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const path = require("path");

// Initialize Express app
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up express-session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Set up connect-flash middleware
app.use(flash());

// Initialize bcrypt
const saltRounds = 10;

// Initialize pg pool
const pool = new Pool({
  user: "turing",
  host: "localhost",
  database: "GIK Gate",
  password: "gotham",
  port: 5432, // Replace with your PostgreSQL port if different
});

// Serve static files from the "public" folder
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/images")));
app.use(express.static(path.join(__dirname, "/public/stylesheets")));

// Example route
app.get("/", (req, res) => {
  res.render("index"); // Use path.join to construct the absolute path
});

// Example bcrypt usage
const password = "myPassword";

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    return hash;
  }
});

// Example PostgreSQL query
// pool.query('SELECT * FROM info', (err, result) => {
//   if (err) {
//     console.error('Error executing query:', err);
//   } else {
//     console.log('Query result:', result.rows);

//     // Process the query result as needed
//   }
// });

app.get("/api/dailylog", async (req, res) => {
  try {
    const data = await pool.query(
      `select * from dailylog inner join info on info.regno = dailylog.regno`
    );
    console.log(data.rows);
    res.status(200).send(data.rows);
  } catch (err) {
    console.error(err);
  }
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
