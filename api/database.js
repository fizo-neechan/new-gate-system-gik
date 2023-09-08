const { Pool } = require("pg");

const getDatabaseConn = () => {
  const conn = new Pool({
    user: "admin",
    host: "localhost",
    database: "gatesystem",
    password: "admin123",
    port: 5432, // Replace with your PostgreSQL port if different
  });
  return conn;
};

module.exports = getDatabaseConn();
