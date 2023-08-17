const model = require("../models/master_add_edit.model");
const helper = require("../helper/function.helper.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.subject =  async(req,res)=>{
  //Validate request
  if (!req.body.name || req.body.name == "") {
    res.status(400).send({status : false, message: "Please Enter Subject Name!", statuscode : 0});
    return;
  }
  if (!req.body.code || req.body.code == "") {
    res.status(400).send({status : false, message: "Please Enter Subject code!", statuscode : 0});
    return;
  }
  if (!req.body.is_active || req.body.is_active == "") {
    res.status(400).send({status : false, message: "Please Enter Subject Status!", statuscode : 0});
    return;
  }
  //res.status(400).send(req.body);

  // const data = await helper.create_patient_object2(req);

  model.subject(req)
  .then( (register_data) => { 
    
      res.status(200).send(register_data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });

}