const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "krystian",
  password: "1234",
  database: "notification-system",
});

module.exports = db;
