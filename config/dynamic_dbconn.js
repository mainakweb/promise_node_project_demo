require('dotenv').config()

//use mysql database
const mysql = require('mysql');
const dynamic_db = {};

dynamic_db.connection = () => {
  //console.log(id);
  let connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      dateStrings:true,
      database: process.env.DB_NAME
  });
  return connection;
};

module.exports = dynamic_db;