const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-server',
  user: 'root',
  password: 'Welcome@123',
  database: 'testdb',
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('Welcome@123') // Ensure this matches the actual password
  }
});

module.exports = connection;

