module.exports.valls2 = async function (req) { 
    console.log(req);
    const res = await req.map(myFunction);
    return res;
};

module.exports.create_patient_object =  (req) => { 
    let rval =  {
        "app_id": null,
        "contact_no": req.PINF000_CONPHONE,
        "FN": req.PINF000_FNAME,
        "MN": req.PINF000_MNAME,
        "LN": req.PINF000_LNAME,
        "DOB": req.PINF000_DOB,
        "AGE": req.PINF000_AGE,
        "Gender": req.PINF000_SEX,
        "Email": req.PINF000_EMAIL,
        "patient_id": req.PINF000_REGNO,
        "relation": null,
        "relation_contact_no": null
    }
    //console.log(rval);
    return rval;
}

module.exports.create_patient_object2 =  (req) => { 
    let patient =  {
    app_id: req.body.app_id,
    contact_no: req.body.contact_no,
    FN: req.body.FN,
    MN: req.body.MN,
    LN: req.body.LN,
    DOB: req.body.DOB,
    Gender: req.body.Gender,
    Email: req.body.Email,
    App_Reg_Date: req.body.App_Reg_Date,
    patient_id: req.body.patient_id,
    relation: req.body.relation,
    relation_contact_no: req.body.relation_contact_no
    }
    //console.log(rval);
    return patient;
}
// create_patient_object_for_his_patient_id_info_table

module.exports.create_patient_object_for_his_patient_id_info_table =  (req,patient_registration_insertId) => { 
    var data = {
            company_id : req.body.company_id,
            hospital_id : req.body.hospital_id,
            his_patient_id : req.body.patient_id,
            app_patient_id : patient_registration_insertId,
            mobile_no:req.body.contact_no,
            relation_mobile_no:req.body.relation_contact_no,
          };
    //console.log(rval);
    return data;
}
