require('dotenv').config();
const mysql = require('mysql');
module.exports = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PSWD,
  database : process.env.DB
});