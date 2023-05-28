const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const path = require('path');

// Initialize Express app
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Set up connect-flash middleware
app.use(flash());

// Initialize bcrypt
const saltRounds = 10;

// Initialize pg pool
const pool = new Pool({
  user: 'gikiadmin',
  host: 'localhost',
  database: 'gatesystem',
  password: 'giki-admin-123',
  port: 5432 // Replace with your PostgreSQL port if different
});

// Serve static files from the "public" folder
app.use(express.static('public'));

// Example route
app.get('/', (req, res) => {
    res.sendFile('front-end/index.html'); // Use path.join to construct the absolute path
  });

// Example bcrypt usage
const password = 'myPassword';

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
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

app.get('/api/dailylog', (req, res) => {

    pool.query('select * from dailylog;', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
          } else {
            res.json({message: 'success', data: result.rows});
        }
    })
});



// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});