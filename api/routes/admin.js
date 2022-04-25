// ------------------------------------------------------------------------------------------------------
// ROUTES
// A route is a section of Express code that associates an HTTP verb ( GET , POST , PUT , DELETE , etc.), 
// a URL path/pattern, and a function that is called to handle that pattern. 
// ------------------------------------------------------------------------------------------------------
const express = require('express');
const adminController = require('../controllers/admin');
/**
 * ROUTERS  
 * A router is a JavaScript object that maps URLs to functions. 
 * The router calls a function based on the URL.
 */
const adminrouter = new express.Router();

//-------------------------------------------------------------------------------------------------------------------------                                         
// Note: hover over the endpoints' names in the end of the operationalrouter's get calls, to read info about the endpoints.
//-------------------------------------------------------------------------------------------------------------------------
                                      // hover here
adminrouter.get('/interoperability/api/admin/healthcheck', adminController.getHealthcheck);
                                                                              // hover here
adminrouter.post('/interoperability/api/admin/resetpasses', adminController.postResetPasses);
                                                                              // hover here
adminrouter.post('/interoperability/api/admin/updatepasses', adminController.postUpdatePasses);
                                                                              // hover here
adminrouter.post('/interoperability/api/admin/resetstations', adminController.postResetStations);
                                                                              // hover here
adminrouter.post('/interoperability/api/admin/resetvehicles', adminController.postResetVehicles);

module.exports = adminrouter;

