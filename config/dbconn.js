const dynamic_db = require("./dynamic_dbconn");

let connection = dynamic_db.connection();

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log(`connected to the ${process.env.DB_NAME} database.`);
  });
  module.exports = connection;