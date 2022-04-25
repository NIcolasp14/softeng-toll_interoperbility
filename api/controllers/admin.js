/************************************** admin's controllers requirements **************************************/
// csvtojson module is a comprehensive nodejs csv parser to convert csv to json or column arrays
const tojson = require("csvtojson");

// in order to handle dates in the required format
const date = require("moment");

// models and csvs
const Stations = require("../../backend/models/Stations")
//const stations_csv = "stations.csv";

const Vehicles = require("../../backend/models/Vehicles")
//const vehicles_csv = "vehicles.csv";

var Passes = require("../../backend/models/Passes")
//const passes_csv = "passes.csv";

// make sure database is connected
const { connected } = require("../../backend/MongoDB/connect-verify");
const { deleteOne } = require("../../backend/models/Stations");
/********************************** end of admin's controllers requirements **********************************/


/**  
 * HEALTHCHECK
 * ______________________________________________________________________________________________________ 
 * 
 * Goal:  
 * ______________________________________________________________________________________________________ 
 * Confirms end-to-end connectivity between the user and the database.
 * 
 * Endpoint:   
 * ______________________________________________________________________________________________________ 
 * {baseURL}/admin/healthcheck
 * https://localhost:9103/interoperability/api/admin/healthcheck
 * 
 * Functionality:    
 * ______________________________________________________________________________________________________ 
 * If connected, backend returns:  
 * "status": "OK", "dbconnection": "mongodb://127.0.0.1:27017/databaseSoftEng"
 * 
 * If not connected, backend returns:  
 * "status": "failed", "dbconnection": "mongodb://127.0.0.1:27017/databaseSoftEng"
 */
exports.getHealthcheck = (req, res) => {
    if (connected() == 1) {
        return res.status(200).json({ "status": "OK", "dbconnection": "mongodb://127.0.0.1:27017/databaseSoftEng" })
    }
    if (connected() == 0) {
        return res.status(500).json({ "status": "failed", "dbconnection": "mongodb://127.0.0.1:27017/databaseSoftEng" })
    }
};


/** 
 * UPDATE PASSES
 * ______________________________________________________________________________________________________ 
 * 
 * Goal:  
 * ______________________________________________________________________________________________________ 
 * Updates the database table dedicated to the events of passes through the operators' tolls.
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________ 
 * {baseURL}/admin/updatepasses
 * https://localhost:9103/interoperability/api/admin/updatepasses
 * 
 * Functionality:  
 * ______________________________________________________________________________________________________ 
 * Inserts the events of passes through the operators' tolls to the collection named passes.
 * Input is a csv named passes.csv which is required by the admin.js file(current file).  
 * Also, the csvtojson module is required in order to convert the input csv file to 
 * json format and make us able to parse data with the help of colParser, in their required format.
 * We don't want timestamp and charge to be added as strings but as dates and floats.
 * 
 * Error handling: 
 * ______________________________________________________________________________________________________  
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error) 
 */
exports.postUpdatePasses = async (req, res) => {
    const passes_csv = "passes.csv";
    try {
        const passes_model = await tojson({
            colParser: {
                timestamp:
                    function string_to_date(data) {
                        return date(data, "DD-MM-YYYY HH:mm");
                    },
                charge:
                    function string_to_float(data) {
                        return parseFloat(data);
                    },
            },
        }).fromFile(passes_csv);
        await Passes.insertMany(passes_model).then(function () {
            console.log("Data inserted"); // Success
        }).catch(function (error) {
            console.log(error); // Failure
        });
        return res.status(200).json({ "status": "OK" });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};



/** 
 * RESET PASSES
 * ______________________________________________________________________________________________________ 
 * 
 * Goal:  
 * ______________________________________________________________________________________________________ 
 * Deletes every element in the database table dedicated to the events of passes through the operators' tolls.
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________ 
 * {baseURL}/admin/resetpasses
 * https://localhost:9103/interoperability/api/admin/resetpasses  
 * 
 * Functionality:  
 * ______________________________________________________________________________________________________ 
 * Deletes the events of passes through the operators' tolls of the collection named passes.    
 * Gives the following warning,    
 * "WARNING: Going to delete all passes data in 10s.  
 *          Hit Ctrl-C if you have changed your mind!"     
 * before it deletes all data regarding passes.  
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________ 
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error) 
 */
exports.postResetPasses = async (req, res) => {
    const passes_csv = "passes.csv";
    try {
        console.log("WARNING: Going to delete all passes data in 10s.")
        console.log("         Hit Ctrl-C if you have changed your mind!")

        // sleep(10000); added to give 10s to cancel the request in case it was accidental.
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        await sleep(10000);

        Passes.deleteMany({}).then(function () {
            console.log("Data deleted"); // Success
        }).catch(function (error) {
            console.log(error); // Failure
        });
        return res.status(200).json({ "status": "OK" });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};


/**  
 * RESET STATIONS
 * ______________________________________________________________________________________________________ 
 * 
 * Goal:  
 * ______________________________________________________________________________________________________ 
 * Resets the database table dedicated to the operators' stations.
 * 
 * Endpoint:
 * ______________________________________________________________________________________________________   
 * {baseURL}/admin/resetstations
 * https://localhost:9103/interoperability/api/admin/resetstations  
 *  
 * Functionality:  
 * ______________________________________________________________________________________________________ 
 * Deletes old station data and inserts the new station data to the collection named stations.
 * inserting the new. Input is a csv named stations.csv which is required by the admin.js file(current file).  
 * Also, the csvtojson module is required in order to convert the input csv file to
 * json format and make us able to parse data with the help of colParser, in their required format.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________   
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
exports.postResetStations = async (req, res) => {
    const stations_csv = "stations.csv";

    try {
        Stations.count(function (err, count) {
            if (!err && count == 0) {
                    Stations.deleteMany({}).then(function () {
                    console.log("Data deleted and"); // Success
                }).catch(function (error) {
                    console.log(error); // Failure
                });
            }
        });
        

        const stations_model = await tojson().fromFile(stations_csv);
        await Stations.insertMany(stations_model).then(function () {
            console.log("data inserted"); // Success
            console.log("=>Data reseted");
        }).catch(function (error) {
            console.log(error); // Failure
        });
        return res.status(200).json({ "status": "OK" });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};


/**  
 * RESET VEHICLES
 * ______________________________________________________________________________________________________ 
 * 
 * Goal:  
 * ______________________________________________________________________________________________________    
 * Resets the database table dedicated to the registered vehicles. 
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________ 
 * {baseURL}/admin/resetvehices
 * https://localhost:9103/interoperability/api/admin/resetvehicles
 *  
 * 
 * Functionality:  
 * ______________________________________________________________________________________________________ 
 * Deletes old vehicle data and inserts the new registered vehicles to the collection named vehicles.
 * Input is a csv named stations.csv which is required by the admin.js file(current file).
 * Also, the csvtojson module is required in order to convert the input csv file to
 * json format and make us able to parse data with the help of colParser, in their required format.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________ 
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
exports.postResetVehicles = async (req, res) => {
    // const vehicles_csv = "vehicles.csv";
    // try {
    //     // Create vehicles array from csv file
    //     const csvFilePath = "vehicles.csv";
    //     const jsonArray = await csv().fromFile(csvFilePath);
    
    //     // Empty collection
    //     await Vehicle.deleteMany({});
        
    //     // Insert new vehicles from array
    //     await Vehicle.insertMany(jsonArray);
    
    //     res.status(200).send({ status: "OK" });
    //   } catch (e) {
    //     res.status(500).send({ status: "failed" });
    //   }
    const vehicles_csv = "vehicles.csv";
    try {
        console.log(1)
        Vehicles.count(function (err, count) {
            if (!err && count == 0) {
                Vehicles.deleteMany({}).then(function () {
                    console.log("Data deleted and"); // Success
                }).catch(function (error) {
                    console.log(error); // Failure
                });
            }
        });
        console.log(2)
        const vehicles_model = await tojson().fromFile(vehicles_csv);
        console.log(3)
        await Vehicles.insertMany(vehicles_model).then(function () {
            console.log(4)
            console.log("data inserted"); // Success
            console.log("=>Data reseted");
        }).catch(function (error) {
            console.log(error); // Failure
        });
        return res.status(200).json({ "status": "OK" });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};





