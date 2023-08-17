
const sql = require("../config/dbconn.js");

var model = {};
//declere a blank object variable named model.

model.subject = (req) => {
  return new Promise((resolve, reject) => {

    const insert_qry = `INSERT INTO subject SET ?`;
    const update_qry = 'UPDATE `subject` ' + 'SET `name` = ?, `code` = ? , `is_active` = ?' + 'WHERE `subject_id` = ?';

    const qry = (req.body.subject_id === 0) ? insert_qry : update_qry;
    const values = (req.body.subject_id === 0) ? req.body : [req.body.name, req.body.code, req.body.is_active, req.body.subject_id];
//resolve(req.body);
    sql.query(qry, values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        if (res.insertId === 0) {
          resolve({ message: "subject data Updated.", statuscode: 1 });
        } else {
          resolve({ message: "subject data inserted.", statuscode: 1 });
        }
      }
    });
  });
};

module.exports = model;