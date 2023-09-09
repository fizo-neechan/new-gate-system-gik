const { Pool } = require("pg");

const getDatabaseConn = () => {
  const conn = new Pool({
    user: "gikiadmin",
    host: "localhost",
    database: "gate_system",
    password: "giki-admin-123",
    port: 5432, // Replace with your PostgreSQL port if different
  });
  return conn;
};

module.exports = getDatabaseConn();
