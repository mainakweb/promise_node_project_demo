
exports.validate_Patient_registration = async (req,res,next) => {
    
    try{
        if (!req.body.contact_no) {
            res.status(400).send({status : false, message: "Please enter contact no!", statuscode : 0});
            return;
          }
          
          if (!req.body.company_relation_id) {
            res.status(400).send({status : false, message: "Please enter company_relation_id!", statuscode : 0});
            return;
          }
          if(req.body.company_relation_id === 3) {
            if (!req.body.company_id) {
              res.status(400).send({status : false, message: "Please enter company_id!", statuscode : 0});
              return;
            }
          } else {
            if (!req.body.company_id) {
              res.status(400).send({status : false, message: "Please enter company_id!", statuscode : 0});
              return;
            }
            if (!req.body.hospital_id) {
              res.status(400).send({status : false, message: "Please enter hospital_id!", statuscode : 0});
              return;
            }
          }
            next();
        
    }
    catch(err) {
        return res.send({ error: true, statuscode: 0, data: err });
    }
}