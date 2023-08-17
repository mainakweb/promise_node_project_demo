const jwt = require('jsonwebtoken');

exports.JWT_validation = async (req,res,next) => {
    
    try{
        if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer') || !req.headers.authorization.split(' ')[1]) {
            return res.status(422).json({error: true, statuscode: 0, message: "Please provide the token",});
        }
        const theToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
        if(decoded.app_id > 0) {
            req.body.userData = decoded;
            next();
            //return res.send({ error: false, statuscode: 0, message: decoded });
        } else {
            return res.send({ error: true, statuscode: 0, message: decoded });
        }
    }
    catch(err) {
        return res.send({ error: true, statuscode: 0, data: err });
    }
}
// 
const validate = (value)=> {
    return {status : false, message: "Please enter77 "+value, statuscode : 0};
}
exports.validate_getPatientInfoByMobileNoFromHisDb = async (req,res,next) => {
    
    try{
        if (!req.body.mobile_no) {
            res.status(400).send({status : false, message: "Please enter mobile no!", statuscode : 0});
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