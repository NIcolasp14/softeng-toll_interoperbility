// ------------------------------------------------------------------------------------------------------
// ROUTES
// A route is a section of Express code that associates an HTTP verb ( GET , POST , PUT , DELETE , etc.), 
// a URL path/pattern, and a function that is called to handle that pattern. 
// ------------------------------------------------------------------------------------------------------
const express = require('express');
const operationalController = require('../controllers/operational');
/**
 * ROUTERS  
 * A router is a JavaScript object that maps URLs to functions. 
 * The router calls a function based on the URL.
 */
const operationalrouter = new express.Router();

//-------------------------------------------------------------------------------------------------------------------------                                         
// Note: hover over the endpoints' names in the end of the operationalrouter's get calls, to read info about the endpoints.
//-------------------------------------------------------------------------------------------------------------------------
                                                                                                                     // hover here
operationalrouter.get('/interoperability/api/PassesPerStation/:stationID/:date_from/:date_to', operationalController.getPassesPerStation);
                                                                                                                        // hover here
operationalrouter.get('/interoperability/api/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to', operationalController.getPassesAnalysis);
                                                                                                                    // hover here
operationalrouter.get('/interoperability/api/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to', operationalController.getPassesCost);
                                                                                                           // hover here
operationalrouter.get('/interoperability/api/ChargesBy/:op_ID/:date_from/:date_to', operationalController.getChargesBy);


operationalrouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

// use case endpoint: debt settlements between operators                                                                // hover here
operationalrouter.get('/interoperability/api/DebtSettlement/:op1_ID/:op2_ID/:date_from/:date_to', operationalController.getDebtSettlement);
                                                                                                           // hover here
operationalrouter.get('/interoperability/api/allChargesBy/:date_from/:date_to', operationalController.allChargesBy);

module.exports = operationalrouter;