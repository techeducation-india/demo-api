const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "Welcome@123",
  database: "testdb"
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;

