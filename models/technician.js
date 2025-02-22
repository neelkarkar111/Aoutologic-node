const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
  fname : {
    type : String,
    required : true
  },
  lname : {
    type : String,
    required : true
  },
  contact : {
    type : Number,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  }
});

let TECHNICIAN = mongoose.model('technician',technicianSchema)

module.exports = TECHNICIAN