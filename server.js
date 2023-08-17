require('dotenv').config()

//use path module
const path = require('path');
//use express module
const express = require('express');
//use bodyParser middleware
const bodyParser = require('body-parser');
const port = process.env.APP_PORT;
const app = express();

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

 //route for APIs
const router = require('./routes/router.js');
 app.use('/api',router);


//route for homepage
app.get('/',(req, res) => {return res.send('<h1>welcome to Exmanation API</h1>.');});


//server listening
app.listen(port, () => {console.log(`Server is running at port ${port}`);});

const sql = require("./config/dbconn.js");

