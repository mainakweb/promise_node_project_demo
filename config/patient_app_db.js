const dynamic_db = require("./dynamic_dbconn");
let db_name = "patient_app";
let connection = dynamic_db.connection(db_name);

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log(`Connected to the ${db_name} server.`);
  });

  module.exports = connection;