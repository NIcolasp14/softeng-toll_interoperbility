const mongoose = require("mongoose");//

const Schema = mongoose.Schema;//

const vehicleSchema = new Schema({//
  vehicleID: {//
    type: String,//
    required: true//
  },//
  tagID: {//
    type: String,//
    required: true//
  },//
  tagProvider: {//
    type: String,//
    required: true//
  },//
  providerAbbr: {//
    type: String,//
    required: true//
  },//
  licenseYear: {//
    type: Number,//
    required: true//
  }//
});//

module.exports = mongoose.model("Vehicles", vehicleSchema);//

