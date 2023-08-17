
const model = require("../models/fetch_data_from_table.model");

exports.fetch_data_from_table = (req,res)=>{
    console.log(req.headers.authorization);
  let table_name = req.params.table_name;
  model.fetch_data_from_table(table_name)
    .then((result) => {
        console.log(result);
        res.status(200).send({ status : true, message: "fetch data.", statuscode : 1, data : result});
    })
    .catch((err) => {
        console.log(err);
        res.status(200).send({ status : false, message: "data not fetch.", statuscode : 0, data : err});
    });
}
// table_name_field_name_unique_id

exports.table_name_field_name_unique_id = (req,res)=>{
    // res.send("ryufhekhf,hgj");
    let data = {
        table_name : req.params.table_name,
        field_name : req.params.field_name,
        unique_id : req.params.unique_id
    }
   

   model.table_name_field_name_unique_id(data)
     .then((result) => {
         console.log(result);
         res.status(200).send({ status : true, message: "fetch data.", statuscode : 1, data : result});
     })
     .catch((err) => {
         console.log(err);
         res.status(200).send({ status : false, message: "data not fetch.", statuscode : 0, data : err});
     });
}