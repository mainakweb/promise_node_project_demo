const dotenv = require('dotenv');
// Set path to .env file
dotenv.config({ path: './.env' });

const router = require('express').Router();
const { check } = require('express-validator');
// const {JWT_validation} = require('../middleware/JWT_validation.middleware');
// const validation = require('../validation/validate.validation');

// const {getUser} = require('../controllers/getUserController.controller');
const master_add_edit = require('../controllers/master_add_edit.controller');
router.post('/subject_add_edit', master_add_edit.subject);

const axios = require("axios");
const name = process.env.APP_NAME;

router.get('/',(req, res) => {res.send(name);});
   
// const {getdata} = require('../controllers/relation_master_getdata');
// router.get('/relation_master', getdata);

// const {fetch_patient_data} = require('../controllers/fetch_patient_data.controller');
// router.get('/fetch_patient_data', fetch_patient_data);

//const {patient_registration} = require('../controllers/patient_registration.controller');
// router.post('/patient_registration', patient_registration);

// const {user_verification} = require('../controllers/user_verification.controller'); //patient_login
// router.post('/UserCheckPatientDb', company_hospital.get_patient_info_from_patient_app_db);
// router.post('/UserVerification', validate_getPatientInfoByMobileNoFromHisDb, company_hospital.get_patient_info_by_mobile_no_from_his_db);
// router.post('/patientRegistration', validation.validate_Patient_registration, company_hospital.patient_registration);
// router.post('/login', company_hospital.patient_login);
// router.post('/FamilyMemberRegistration', JWT_validation, company_hospital.family_member_registration);


// const {find_m_pin} = require('../controllers/find_m_pin.controller');
// //router.post('/login', find_m_pin);

// const {insert_m_pin} = require('../controllers/insert_m_pin.controller');
// router.post('/SignUp', insert_m_pin);

// //family_member_listings.controller
// // here we use mideeleware jwt_validation and getuser as an array///////
// const {family_member_listings} = require('../controllers/family_member_listings.controller');
// router.get('/FamilyMemberListings', [JWT_validation, getUser], family_member_listings);

// //family_member_registration
// const {family_member_registration} = require('../controllers/family_member_registration.controller');
// router.post('/FamilyMemberRegistration', JWT_validation, family_member_registration);

// const {find_his_contact_no} = require('../controllers/find_his_contact_no.controller');
// router.post('/findHisContactNo', JWT_validation, find_his_contact_no);

// const {family_member_sync} = require('../controllers/family_member_sync.controller');
// router.get('/familyMemberSync', [JWT_validation, getUser], family_member_sync);

// const {get_his_speciality} = require('../controllers/get_his_speciality.controller');
// router.get('/getHisSpeciality',  get_his_speciality);

// const cronjob_get_his_data = require('../controllers/cronjob_get_his_data.controller');
// router.get('/synce_speciality_doctor', cronjob_get_his_data.synce_speciality_doctor);
// router.get('/synce_speciality', cronjob_get_his_data.synce_speciality);
// router.get('/synce_doctor', cronjob_get_his_data.synce_doctor);

const fetch_data = require('../controllers/fetch_data_from_table.controller');
router.get('/fetch_data_from_table/:table_name', fetch_data.fetch_data_from_table);
// ////////// http://localhost:2000/api/fetch_data_from_table/company_master ////////
// router.get('/fetch_data_from_table/:table_name/:field_name/:unique_id', fetch_data.table_name_field_name_unique_id);
// //////// http://localhost:2000/api/fetch_data_from_table/hospital_master/company_id/5 //////////


// router.get('/getInfoCompanyHspital', company_hospital.get_info_company_hospital);
// router.post('/getPatientInfoByMobileNoFromHisDb', validate_getPatientInfoByMobileNoFromHisDb, company_hospital.get_patient_info_by_mobile_no_from_his_db);


// ///// test jwt tokent validation and user data from decode token ///////
// router.get('/secret-route', [JWT_validation, getUser], (req, res, next) => {
//   console.log(req.body.userData);
//   res.send(req.body.userData);
// });
// ///// test jwt tokent validation and user data from decode token ///////

// /////////// fetch a third party apis data using axios ///////////////
// const url = "https://archive.org/metadata/TheAdventuresOfTomSawyer_201303";
// router.get("/async", async (req, res) => {
// 	try {
// 		const response = await axios({
// 			url: url,
// 			method: "get",
// 		});
// 		res.status(200).json(response.data.files[4].name);
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });
/////////// fetch a third party apis data using axios ///////////////

module.exports = router;