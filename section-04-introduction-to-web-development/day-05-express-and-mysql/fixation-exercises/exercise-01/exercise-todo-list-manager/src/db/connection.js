const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'root',
  database: 'todolistdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


module.exports = connection;