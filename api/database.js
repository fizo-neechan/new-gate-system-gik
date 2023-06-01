const { Pool } = require("pg");


const getDatabaseConn = () => {
    const conn = new Pool({
        connectionString: 
        process.env.DATABASE_URL || "postgres://gikiadmin:giki-admin-123@localhost:5432/gatesystem",
    });
    return conn;
}

module.exports = getDatabaseConn();