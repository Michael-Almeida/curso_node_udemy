const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "nodemysql",
  
});

module.exports = pool;
