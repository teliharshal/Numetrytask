const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Change if needed
  password: 'root',  // Change if needed
  database: 'userdb',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
