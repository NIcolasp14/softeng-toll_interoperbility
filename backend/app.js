/************************************** application's requirements 2 **************************************/
const express = require('express');
const bodyParser = require('body-parser');

// requiremnet of routes and therefore controllers, 
// which implement the application's logic 
const adminRoutes = require('../api/routes/admin');
const operationalRoutes = require('../api/routes/operational');
/**********************************************************************************************************/

// use of the express application framework
const app = express();

// body-parser extracts the entire body portion of an incoming request stream 
// and exposes it on req. body. This body-parser module parses the JSON, buffer, 
// string and URL encoded data submitted using HTTP POST request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use of routes and therefore controllers, 
// which implement the application's logic 
app.use(adminRoutes);
app.use(operationalRoutes);

// in case an endpoint does not exist
app.use((req, res, next) => { res.status(404).json({message: 'Endpoint not found!'}); })

// exported to be used in the index.js file
module.exports = app;

