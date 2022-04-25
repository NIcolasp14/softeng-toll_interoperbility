const mongoose = require("mongoose");//

const Schema = mongoose.Schema;//

const stationSchema = new Schema({//
  stationID: {//
    type: String,//
    required: true//
  },//
  stationProvider: {//
    type: String,//
    required: true//
  },//
  stationName: {//
    type: String,//
    required: true//
  }//
});//

module.exports = mongoose.model("Stations", stationSchema);//