const { Pool } = require("pg");

const getDatabaseConn = () => {
  const conn = new Pool({
    user: "turing",
    host: "localhost",
    database: "gikgate",
    password: "gotham",
    port: 5432, // Replace with your PostgreSQL port if different
  });
  return conn;
};

module.exports = getDatabaseConn();
