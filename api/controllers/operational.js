const date = require("moment");//
const Stations = require("../../backend/models/Stations")//
const Vehicles = require("../../backend/models/Vehicles")//
const Passes = require("../../backend/models/Passes")//

var csv = require('csv-express');
//const { notify } = require("../../backend/app");



/**  
 * PASSES PER STATION  
 * ______________________________________________________________________________________________________    
 * 
 * Goal:  
 * ______________________________________________________________________________________________________      
 * Returns a list containing the analysis of passes through a toll station,
 * during a given period of time. 
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________    
 * {baseURL}/PassesPerStation/:stationID/:date_from/:date_to  
 * https://localhost:9103/interoperability/api/PassesPerStation/:stationID/:date_from/:date_to  
 * 
 * e.g.   
 *      To show results in json format
 *      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404  
 *      To export results to csv  
 *      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404?format=csv  
 *      To export results to json file(always exports json except if csv is requested)  
 *      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404?format=json   
 * 
 * Functionality:   
 * ______________________________________________________________________________________________________    
 * Parses data from URL which define the user's request. These data are used
 * to perform the right query to retrieve the requested data from the database, 
 * which are then stored in "filtered". Then, the data are transfered to the list
 * "passes", which contains the correct names of the requested domains(names of columns).   
 * Afterwards, the extra data needed are calculated and added to the result.  
 * If the results aren't requested to be returned in a file, the endpoint returns
 * a json object, which contains a list of json objects.  
 * If the results are requested to be returned in csv file format, then an auxiliary
 * array is used, "passesArr", in order to be able to organise the data in columns
 * in the csv file. Else, if any other type of file is requested, a json file is
 * returned, which contains a json object which contains a list of json objects.  
 * The instruction return is used so that the function is exited and new requests can
 * be made.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________    
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
exports.getPassesPerStation = (req, res) => {
    // https://localhost:9103/interoperability/api/PassesPerStation/:stationID/:date_from/:date_to  
    try {
        const stationID = req.params.stationID;
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;
        const format = req.query.format;

        // parse date correctly
        datefrom = date(date_from, 'YYYY-MM-DD')
        dateto = date(date_to, 'YYYY-MM-DD')

        // print url data 
        // console.log(stationID, date_from, date_to)

        Passes.find({
            stationRef: stationID,
            timestamp: {
                $gte: datefrom,
                $lte: dateto
            }
        })
            .then(filtered => {
                // res.status(200).json({"Passes:": filtered})
                if (filtered.length == 0) {
                    return res.status(402).json({ message: "No data found!" })
                }

                let passes = []; //PassesList
                var passes_el;
                var i = 1;

                // here we rename the domains/columns to their requested names
                filtered.forEach(pass => {
                    passes_el = {
                        PassIndex: i,  // name: pass.domain/onomasia: pass.pedio
                        PassID: pass.passID,
                        PassTimeStamp: pass.timestamp,
                        VehicleID: pass.vehicleRef,
                        TagProvider: pass.tagAbbr,
                        PassType: pass.originStatus,
                        PassCharge: pass.charge
                    }
                    i++;
                    passes.push(passes_el);
                })
                if (format == 'csv') { // csv format
                    var updatedPass;
                    var passesArr = []; // new json

                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    passes.forEach(pass => {
                        updatedPass = {
                            StationID: stationID,
                            StationOperator: stationID.slice(0, 2),
                            RequestTimestamp: new Date(),
                            PeriodFrom: datefrom,
                            PeriodTo: dateto,
                            NumberOfPasses: passes.length,
                            ...pass //next
                        }
                        passesArr.push(updatedPass);
                    })
                    // |return| so that the function is exited and new requests can be made
                    return res.csv(passesArr, 200); //json to csv 
                }
                else { // json format/any format
                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    return res.status(200).json({
                        Station: stationID,
                        StationOperator: stationID.slice(0, 2),
                        RequestTimestamp: new Date(),
                        PeriodFrom: datefrom,
                        PeriodTo: dateto,
                        NumberOfPasses: passes.length,
                        PassesList: passes
                    })
                }
                return;
            });

    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};


/**  
 * PASSES ANALYSIS
 * ______________________________________________________________________________________________________    
 * 
 * Goal:  
 * ______________________________________________________________________________________________________      
 * Returns list containing the analysis of the passes that happened with the operator's 2 tags at the 
 * toll stations of operator 1, during a given period of time.
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________    
 * {baseURL}/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to
 * https://localhost:9103/interoperability/api/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to
 * 
 * e.g.   
 *      To show results in json format  
 *      https://localhost:9103/interoperability/api/PassesAnalysis/AO/OO/20200404/20210404 
 *      To export results to csv  
 *      https://localhost:9103/interoperability/api/PassesAnalysis/AO/OO/20200404/20210404?format=csv  
 *      To export results to json file(always exports json except if csv is requested)  
 *      https://localhost:9103/interoperability/api/PassesAnalysis/AO/OO/20200404/20210404?format=json  
 * 
 * Functionality:   
 * ______________________________________________________________________________________________________    
 * Parses data from URL which define the user's request. These data are used
 * to perform the right query to retrieve the requested data from the database, 
 * which are then stored in "filtered". Then, the data are transfered to the list
 * "passes", which contains the correct names of the requested domains(names of columns).
 * Afterwards, the extra data needed are calculated and added to the result.  
 * If the results aren't requested to be returned in a file, the endpoint returns
 * a json object which contains a list of json objects.   
 * If the results are requested to be returned in csv file format, then an auxiliary
 * array is used, "passesArr", in order to be able to organise the data in columns
 * in the csv file. Else, if any other type of file is requested, a json file is
 * returned, which contains a json obect which contains a list of json objects.  
 * The instruction return is used so that the function is exited and new requests can
 * be made.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________    
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
exports.getPassesAnalysis = (req, res) => {
    // https://localhost:9103/interoperability/api/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to
    try {
        const op1_ID = req.params.op1_ID;
        const op2_ID = req.params.op2_ID;
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;
        const format = req.query.format;

        // parse date correctly
        datefrom = date(date_from, 'YYYY-MM-DD')
        dateto = date(date_to, 'YYYY-MM-DD')

        // print url data 
        // console.log(op1_ID, op2_ID, date_from, date_to)

        Passes.find({
            stationOperator: op1_ID,
            tagAbbr: op2_ID,
            originStatus: "visitor",
            timestamp: {
                $gte: datefrom,
                $lte: dateto
            }
        })
            .then(filtered => {
                if (filtered.length == 0) {
                    return res.status(402).json({ message: "No data found!" })
                }

                let passes = []; //PassesList
                var passes_el;
                var i = 1;

                // here we rename the domains/columns to the requested names
                filtered.forEach(pass => {
                    passes_el = {
                        PassIndex: i,  // name: pass.domain/onomasia: pass.pedio
                        PassID: pass.passID,
                        StationID: pass.stationRef,
                        TimeStamp: pass.timestamp,
                        VehicleID: pass.vehicleRef,
                        Charge: pass.charge
                    }
                    i++;
                    passes.push(passes_el);
                })
                if (format == 'csv') { // csv format
                    var updatedPass;
                    var passesArr = []; //new json

                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    passes.forEach(pass => {
                        updatedPass = {
                            op1_ID: op1_ID,
                            op2_ID: op2_ID,
                            RequestTimestamp: new Date(),
                            PeriodFrom: datefrom,
                            PeriodTo: dateto,
                            NumberOfPasses: passes.length,
                            ...pass //next
                        }
                        passesArr.push(updatedPass);
                    })
                    return res.csv(passesArr, 200); //json to csv
                }
                else { // json format/any format
                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    return res.status(200).json({
                        op1_ID: op1_ID,
                        op2_ID: op2_ID,
                        RequestTimestamp: new Date(),
                        PeriodFrom: datefrom,
                        PeriodTo: dateto,
                        NumberOfPasses: passes.length,
                        PassesList: passes
                    })
                }
                return;
            });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};


/**  
 * PASSES COST
 * ______________________________________________________________________________________________________    
 * 
 * Goal:  
 * ______________________________________________________________________________________________________      
 * Returns the number of passes with the operator's 2 tags at the operator's 1 toll stations, and also 
 * their cost. Their cost is the amount that the operator 2 owes to the operator 1, for the given period 
 * of time.
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________    
 * {baseURL}/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to
 * https://localhost:9103/interoperability/api/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to
 * 
 * e.g.   
 *      To show results in json format  
 *      https://localhost:9103/interoperability/api/PassesCost/AO/OO/20200404/20210404  
 *      To export results to csv  
 *      https://localhost:9103/interoperability/api/PassesCost/AO/OO/20200404/20210404?format=csv  
 *      To export results to json file(always exports json except if csv is requested)  
 *      https://localhost:9103/interoperability/api/PassesCost/AO/OO/20200404/20210404?format=json  
 * 
 * Functionality:   
 * ______________________________________________________________________________________________________    
 * Parses data from URL which define the user's request. These data are used
 * to perform the right query to retrieve the requested data from the database, 
 * which are then stored in "filtered". Then the extra data needed are calculated 
 * and added to the result.  
 * If the results aren't requested to be returned in a file, the endpoint returns
 * a json object.  
 * If the results are requested to be returned in csv file format, then an auxiliary
 * array is used, "passesArr", in order to be able to organise the data in columns
 * in the csv file. Else, if any other type of file is requested, a json file is
 * returned, which contains a json object.   
 * The instruction return is used so that the function is exited and new requests can
 * be made.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________    
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
exports.getPassesCost = (req, res, next) => {
    // https://localhost:9103/interoperability/api/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to
    // op1_ID = stationRef | op2_ID = tagAbbr | date_from = | date_to =
    try {
        const op1_ID = req.params.op1_ID;
        const op2_ID = req.params.op2_ID;
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;
        const format = req.query.format;

        //find correct date
        datefrom = date(date_from, 'YYYY-MM-DD')
        dateto = date(date_to, 'YYYY-MM-DD')

        // print url data
        // console.log(op1_ID, op2_ID, date_from, date_to)

        Passes.find({
            stationOperator: String(op1_ID),
            tagAbbr: String(op2_ID),
            timestamp: {
                $gte: datefrom,
                $lte: dateto
            }
        }
        )
            .then(filtered => {
                if (filtered.length == 0) {
                    return res.status(402).json({ message: "No data found!" })
                }

                let cost = 0;
                let numberofpasses = filtered.length;
                var i = 1;
                filtered.forEach(pass => {
                    cost = cost + pass.charge;
                })
                cost = cost.toFixed(2);
                if (format == 'csv') { // csv format
                    var updatedPass;
                    var passesArr = []; //new json

                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    updatedPass = {
                        op1_ID: op1_ID,  // name: pass.domain/onomasia: pass.pedio
                        op2_ID: op2_ID,
                        RequestTimestamp: new Date(),
                        PeriodFrom: datefrom,
                        PeriodTo: dateto,
                        NumberOfPasses: numberofpasses,
                        PassesCost: cost,
                    }
                    passesArr.push(updatedPass);
                    return res.csv(passesArr, 200); //json to csv
                    //return res.csv(updatedPass, 200); nope
                }
                else { // json format/any format
                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    return res.status(200).json({
                        op1_ID: op1_ID,
                        op2_ID: op2_ID,
                        RequestTimestamp: new Date(),
                        PeriodFrom: datefrom,
                        PeriodTo: dateto,
                        NumberOfPasses: numberofpasses,
                        PassesCost: cost
                    })
                }
                return;
            });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};


/**  
 * CHARGES BY 
 * ______________________________________________________________________________________________________    
 * 
 * Goal:  
 * ______________________________________________________________________________________________________      
 * Returns the number of passes that happened at the toll stations of one specific operator, by the tags 
 * of every other toll operator, as well as the cost of those passes. The cost is the amount that each
 * operator owes to the operator that owns those toll stations, for the given period of time.
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________    
 * {baseURL}/ChargesBy/:op_ID/:date_from/:date_to   
 * https://localhost:9103/interoperability/api//ChargesBy/:op_ID/:date_from/:date_to   
 * 
 * e.g.   
 *      To show results in json format  
 *      https://localhost:9103/interoperability/api/ChargesBy/KO/20201001/20201031    
 *      To export results to csv   
 *      https://localhost:9103/interoperability/api/ChargesBy/KO/20201001/20201031?format=csv  
 *      To export results to json file(always exports json except if csv is requested)  
 *      https://localhost:9103/interoperability/api/ChargesBy/KO/20201001/20201031?format=json      
 * 
 * Functionality:   
 * ______________________________________________________________________________________________________    
 * Parses data from URL which define the user's request. These data are used
 * to perform the right query to retrieve the requested data from the database, 
 * which are then stored in "filtered".   
 * Afterwards the extra data needed are calculated and added to the result.   
 * If the results aren't requested to be returned in a file, the endpoint returns
 * a json object, which contains a list of json objects.    
 * If the results are requested to be returned in csv file format, then an auxiliary
 * array is used, "passesArr", in order to be able to organise the data in columns
 * in the csv file. Else, if any other type of file is requested, a json file is
 * returned, which contains a json object which contains a list of json objects.  
 * The instruction return is used so that the function is exited and new requests can
 * be made.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________    
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
exports.getChargesBy = (req, res) => {
    // https://localhost:9103/interoperability/api/ChargesBy/:op_ID/:date_from/:date_to
    try {
        const op_ID = req.params.op_ID
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;
        const format = req.query.format;

        // parse date correctly
        datefrom = date(date_from, 'YYYY-MM-DD')
        dateto = date(date_to, 'YYYY-MM-DD')

        // new definition of dates in order for them to be used in the aggregate query
        datefrom = new Date(datefrom);
        dateto = new Date(dateto);

        // print url data 
        // console.log(op_ID, date_from, date_to)

        Passes.aggregate([
            {
                $match: {
                    timestamp: {
                        $gte: datefrom,
                        $lte: dateto
                    },
                    originStatus: { $eq: 'visitor' },
                    stationOperator: String(op_ID)
                }
            },
            {
                $group: {
                    _id: "$tagAbbr",
                    PassesCost: { $sum: "$charge" },
                    NumberOfPasses: { $sum: 1 }

                }
            },
            {
                $project: {
                    _id: 0,
                    VisitingOperator: "$_id",
                    //VisitingOperator: 0,
                    PassesCost: { $round: ["$PassesCost", 4] },
                    NumberOfPasses: { $toInt: "$NumberOfPasses" }
                }
            }

        ])
            .then(filtered => {
                // console.log(filtered);
                if (filtered.length == 0) {
                    return res.status(402).json({ message: "No data found!" })
                }

                //let cost = 0;
                //let numberofpasses = filtered.length;
                //var i = 1;;
                //console.log(cost)
                if (format == 'csv') { // csv format
                    var updatedPass;
                    var passesArr = []; //new json

                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    filtered.forEach(pass => {
                        updatedPass = {
                            op_ID: op_ID,
                            RequestTimestamp: new Date(),
                            PeriodFrom: datefrom,
                            PeriodTo: dateto,
                            // !!!! Don't forget
                            // The requested data are returned via the aggregate query
                            // PPOList: filtered, // only 1 json instead of one for each iteration
                            // json supports list of objects and displays data correctly
                            //NumberOfPasses: passes.length,
                            //PassesCost: cost,
                            VisitingOperator: pass.tagAbbr,
                            ...pass //next
                        }
                        
                        passesArr.push(updatedPass);

                    })
                    return res.csv(passesArr, 200); //json to csv
                }
                else { // json format/any format
                    // the query returned some if the domains/columns that the endpoint should return
                    // then we add the extra domains/columns that the endpoint should return
                    return res.status(200).json({
                        op_ID: op_ID,
                        RequestTimestamp: new Date(),
                        PeriodFrom: datefrom,
                        PeriodTo: dateto,
                        VisitingOperator: filtered.tagAbbr,
                        //PassesCost: cost,
                        PPOList: filtered
                    })
                }
                return;
            });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};



// Auxiliary function to round result to two decimals
// It is used by the following endpoint
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
/**  
 * DEBT SETTLEMENT
 * ______________________________________________________________________________________________________    
 * 
 * Goal:  
 * ______________________________________________________________________________________________________      
 * Calculate debt settlement between two operators:  
 * How much does op1_ID owe to or is owed to by op2_ID
 * 
 * Endpoint:  
 * ______________________________________________________________________________________________________    
 * {baseURL}/DebtSettlement/:op1_ID/:op2_ID/:date_from/:date_to
 * https://localhost:9103/interoperability/api/DebtSettlement/:op1_ID/:op2_ID/:date_from/:date_to
 * 
 * e.g.   
 *      To show results in json format  
 *      https://localhost:9103/interoperability/api/DebtSettlement/OO/AO/20201001/20201101 
 *      To export results to csv   
 *      https://localhost:9103/interoperability/api/DebtSettlement/OO/AO/20201001/20201101?format=csv  
 *      To export results to json file(always exports json except if csv is requested)  
 *      hhttps://localhost:9103/interoperability/api/DebtSettlement/OO/AO/20201001/20201101?format=json      
 * 
 * Functionality:   
 * ______________________________________________________________________________________________________    
 * Similar to the rest of the endpoints. Two queries are performed to find how much does op2_ID owes to 
 * op1_ID and the opposite. The debt settlement is calculated and returned. The result is how much does 
 * operator 1 owes to/is owed to by operator 2. Thus, a negative result means that operator 1 owes to 
 * operator 2, while a positive result that the operator 1 is owed to by the operator 2. Also, this 
 * endpoint returns the number of passes of the operator's 2 tags (through the operator's 1 toll 
 * stations), and the opposite.
 * 
 * Error handling:  
 * ______________________________________________________________________________________________________    
 * if successful, it returns:     
 * "status": "OK" 
 * if unsuccessful, it returns:  
 * "status": "failed", "error": err  
 * (err is the description of the error)
 */
//
exports.getDebtSettlement = (req, res) => {
    // https://localhost:9103/interoperability/api/DebtSettlement/:op1_ID/:op2_ID/:date_from/:date_to
    try {
        const op1_ID = req.params.op1_ID;
        const op2_ID = req.params.op2_ID;
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;
        const format = req.query.format;

        //console.log(req.params);
        // parse date correctly
        datefrom = date(date_from, 'YYYY-MM-DD')
        dateto = date(date_to, 'YYYY-MM-DD')

        // new definition of dates in order for them to be used in the aggregate query
        datefrom = new Date(datefrom);
        dateto = new Date(dateto);

        let all_charges = [];
        Passes.aggregate([
            {
                $match: {
                    timestamp: {
                        $gte: datefrom,
                        $lte: dateto
                    },
                    //    originStatus: { $eq: 'visitor' },
                    stationOperator: op1_ID,
                    tagAbbr: op2_ID,
                }
            },
            {
                $group: {
                    _id: "$tagAbbr",
                    PassesCost: { $sum: "$charge" },
                    NumberOfPasses: { $sum: 1 }

                }
            },
            {
                $project: {
                    _id: 0,
                    HomeOperator: op1_ID,
                    VisitingOperator: "$_id",
                    PassesCost: { $round: ["$PassesCost", 4] },
                    NumberOfPasses: { $toInt: "$NumberOfPasses" }
                }
            }

        ])
            .then(filtered2 => {
                //console.log(filtered2);
                Passes.aggregate([
                    {
                        $match: {
                            timestamp: {
                                $gte: datefrom,
                                $lte: dateto
                            },
                            stationOperator: op2_ID,
                            tagAbbr: op1_ID,
                        }
                    },
                    {
                        $group: {
                            _id: "$tagAbbr",
                            PassesCost: { $sum: "$charge" },
                            NumberOfPasses: { $sum: 1 }

                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            HomeOperator: op2_ID,
                            VisitingOperator: "$_id",
                            PassesCost: { $round: ["$PassesCost", 4] },//roundToTwo("$PassesCost"),//
                            NumberOfPasses: { $toInt: "$NumberOfPasses" }
                        }
                    }

                ])
                    .then(filtered3 => {
                        //console.log(filtered3)
                        var help;

                        if (filtered2.length > 0 && filtered3.length > 0) {
                            filtered2.forEach(pass => {
                                var passes_op_1 = pass.NumberOfPasses;
                                // console.log(passes_op_1)

                                filtered3.forEach(pass2 => {
                                    var passes_op_2 = pass2.NumberOfPasses;
                                    //console.log(passes_op_2)
                                    var debt_settlement = pass.PassesCost - pass2.PassesCost;

                                  
                                    
                                    help = {
                                        RequestTimestamp: new Date(),
                                        PeriodFrom: datefrom,//+(24 * 60 * 60 * 1000),
                                        PeriodTo: dateto,
                                        checkingOperator1: op1_ID,
                                        withOperator2: op2_ID,
                                        passes_through_op1_tolls: passes_op_1,
                                        passes_through_op2_tolls: passes_op_2,
                                        money_owed_by1_or_to1: roundToTwo(debt_settlement)
                                    }

                                })
                            })
                        }
                        // if one query doesn't return anything as a result,
                        // the app doesn't print any result, so we should
                        // handle this case.
                        if (filtered2.length > 0 && filtered3.length == 0) {
                            filtered2.forEach(pass => {
                                var debt_settlement = pass.PassesCost;
                                var passes_op_1 = pass.NumberOfPasses;
                                var passes_op_2 = 0;
  
                            
                                help = {
                                    RequestTimestamp: new Date(),
                                    PeriodFrom: datefrom,
                                    PeriodTo: dateto,
                                    checkingOperator1: op1_ID,
                                    withOperator2: op2_ID,
                                    passes_through_op1_tolls: passes_op_1,
                                    passes_through_op2_tolls: passes_op_2,
                                    money_owed_by1_or_to1: roundToTwo(debt_settlement)
                                }
                            })
                        }
                        // if one query doesn't return anything as a result,
                        // the app doesn't print any result, so we should
                        // handle this case.
                        if (filtered2.length == 0 && filtered3.length > 0) {
                            filtered2.forEach(pass => {
                                var debt_settlement = -pass2.PassesCost;
                                var passes_op_1 = 0;
                                var passes_op_2 = pass2.NumberOfPasses;
                        

                                help = {
                                    RequestTimestamp: new Date(),
                                    PeriodFrom: datefrom,
                                    PeriodTo: dateto,
                                    checkingOperator1: op1_ID,
                                    withOperator2: op2_ID,
                                    passes_through_op1_tolls: passes_op_1,
                                    passes_through_op2_tolls: passes_op_2,
                                    money_owed_by1_or_to1: roundToTwo(debt_settlement)
                                }
                            })
                        }
                        // if both queries don't return anything as a result,
                        // the app doesn't print any result, so we should
                        // handle this case.
                        if (filtered2.length == 0 && filtered3.length == 0) {
                            filtered2.forEach(pass => {
                                var debt_settlement = 0;
                                var passes_op_1 = 0;
                                var passes_op_2 = 0;
                         

                                help = {
                                    RequestTimestamp: new Date(),
                                    PeriodFrom: datefrom,
                                    PeriodTo: dateto,
                                    checkingOperator1: op1_ID,
                                    withOperator2: op2_ID,
                                    passes_through_op1_tolls: passes_op_1,
                                    passes_through_op2_tolls: passes_op_2,
                                    money_owed_by1_or_to1: roundToTwo(debt_settlement)
                                }
                            })
                        }
                        
                        //console.log(help)
                        var result;

                        if (format == 'csv') { // csv format
                            var updatedArr = []; //new json
                            updatedArr.push(help);
                            return res.csv(updatedArr, 200); //json to csv
                        }
                        // stringify can be used to print pretty json
                        // but that is not of big importance right now,
                        // because we can export results to csv
                        //json = JSON.stringify(help, undefined, 2);
                        return res.status(200).json({
                            DebtSettlement: help
                        })
                    })
            });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};







/** 
* Was supposed to make all calculations for the debt settlements at once, once a month,
* when the debt settlements are supposed to take place. We decided to not use it but it might 
* prove useful in future versions. Instead, we decided to calculate the debt settlements on demand,
* when a frontend request is made for a specific operator duo. With the second approach we
* are able to genrate results, between any dates given by the user.   
* In conclusion, the following is an  auxiliary endpoint that calculates and isolates 
* all charges_by (4rth endpoint's) results.
*/
exports.allChargesBy = (req, res) => {
    // https://localhost:9103/interoperability/api/allChargesBy/:date_from/:date_to
    try {
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;
        const format = req.query.format;

        // parse date correctly
        datefrom = date(date_from, 'YYYY-MM-DD')
        dateto = date(date_to, 'YYYY-MM-DD')

        // new definition of dates in order for them to be used in the aggregate query
        datefrom = new Date(datefrom);
        dateto = new Date(dateto);

        // print url data 
        // console.log(op_ID, date_from, date_to)
        let debts;
        const collection = new Map();
        Passes.distinct("stationOperator") // find every operator
            .then(filtered => {
                // console.log(filtered);
                if (filtered.length == 0) {
                    return res.status(402).json({ message: "No data found!" })
                }
                console.log(filtered)
                let all_charges = [];
                filtered.forEach(pass => { // for each operator
                    console.log(pass)
                    Passes.aggregate([
                        // {
                        //     $facet: {
                        //         first: [ { $match: { "_": true } } ], // your first query
                        //         second: [ { $match: { "_": false } } ], // your second query
                        //     }
                        // },
                        {
                            $match: {
                                timestamp: {
                                    $gte: datefrom,
                                    $lte: dateto
                                },
                                originStatus: { $eq: 'visitor' },
                                stationOperator: String(pass)
                            }
                        },
                        {
                            $group: {
                                _id: "$tagAbbr",
                                PassesCost: { $sum: "$charge" },
                                NumberOfPasses: { $sum: 1 }

                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                VisitingOperator: "$_id",
                                PassesCost: { $round: ["$PassesCost", 4] },
                                NumberOfPasses: { $toInt: "$NumberOfPasses" }
                            }
                        }

                    ])
                        .then(filtered2 => {
                            console.log(filtered2)
                            //console.log(filtered2)
                            //all_charges.push(filtered2);
                            //filtered2.forEach(pass2 => {
                            //    all_charges.push(pass2);

                            //obj[[filtered2.VisitingOperator, pass]] = filtered2.PassesCost;
                            /*if(pass2.VisitingOperator + pass)
                                collection.set(operator_pair, filtered2.PassesCost);
                            
                            if(pass + pass2.VisitingOperator)
                                
                            else 
                            operator_pair = parseInt(pass + pass2.VisitingOperator )
                            console.log(operator_pair)
                            collection.set(operator_pair, filtered2.PassesCost);*/

                            // })
                            //console.log(filtered2.PassesCost)
                            //debts = debts + filtered2;

                        })


                })
                return res.status(200).json({ "status": "OK" });
                //console.log(all_charges)

                //console.log(debts)

                /*
                                if (format == 'csv') { // csv format
                                    var updatedPass;
                                    var passesArr = []; //new json
                
                                    // the query returned some if the domains/columns that the endpoint should return
                                    // then we add the extra domains/columns that the endpoint should return
                                    filtered.forEach(pass => {
                                        updatedPass = {
                                            op_ID: op_ID,
                                            RequestTimestamp: new Date(),
                                            PeriodFrom: datefrom,
                                            PeriodTo: dateto,
                                            // !!!! Don't forget
                                            // The requested data are returned via the aggregate query
                                            // PPOList: filtered, // only 1 json instead of one for each iteration
                                                                  // json supports list of objects and displays data correctly
                                            //NumberOfPasses: passes.length,
                                            //PassesCost: cost,
                                            VisitingOperator: pass.tagAbbr,
                                            ...pass //next
                                        }
                                        passesArr.push(updatedPass);
                
                                    })
                                    return res.csv(passesArr, 200); //json to csv
                                }
                                else { // json format/any format
                                    // the query returned some if the domains/columns that the endpoint should return
                                    // then we add the extra domains/columns that the endpoint should return
                                    return res.status(200).json({
                                        op_ID: op_ID,
                                        RequestTimestamp: new Date(),
                                        PeriodFrom: datefrom,
                                        PeriodTo: dateto,
                                        VisitingOperator: pass.tagAbbr,
                                        //PassesCost: cost,
                                        PPOList: filtered
                                    })
                                }*/

                //return;
            });
    } catch (err) {
        return res.status(500).json({ "status": "failed", "error": err });
    }
};
