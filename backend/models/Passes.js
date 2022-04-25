const mongoose = require("mongoose");//

const Schema = mongoose.Schema;//

const passSchema = new Schema({//
  passID: {//
    type: String,//
    required: true//
  },
  timestamp: {//
    type: Date,//
    required: true//
  },
  stationRef: {//
    type: String,//
    required: true//
  },
  vehicleRef: {//
    type: String,//
    required: true//
  },
  charge: {//
    type: Number,//
    required: true,//
    //default: 0
  },
  tagAbbr: {//
    type: String,//
    required: true//
  },
  originStatus: {
    type: String,//
    required: true//
  },//
  stationOperator: {//
    type: String,//
    required: true//
  }
});//

module.exports = mongoose.model("Passes", passSchema);//

