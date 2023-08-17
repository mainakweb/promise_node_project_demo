
const sql = require("../config/dbconn.js");

var model = {};
//declere a blank object variable named model.

model.fetch_data_from_table = (table_name) => {
    return new Promise((resolve, reject) => {

      let qry = `SELECT * FROM ${process.env.DB_NAME}.`+table_name; 

      sql.query(qry, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
           resolve(res);   
        }
      });
    });
  };

  model.table_name_field_name_unique_id = (data) => {
    return new Promise((resolve, reject) => {

      let qry = `SELECT * FROM ${data.table_name} WHERE ${data.field_name} = ${data.unique_id}`; 

      sql.query(qry, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
           resolve(res);   
        }
      });
    });
  };


module.exports = model;