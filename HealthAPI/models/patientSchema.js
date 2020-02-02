//import required libraries and modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//define new schema
var patientSchema = new Schema({
    first: String,
    last: String,
    dob: String,
    cardnum: String,
    version: String,
    exp: String,
    bloodType: String,
    allergies: String,
    famHis: String,
    chronicDisease: String,
    vaccines: String,
    treatments: String,
    prescriptions: String,
    notes: String
});

//create new model user and export for specified database
var collectionName = "patients";

const Patient = mongoose.model('patientModel', patientSchema, collectionName);
module.exports = Patient;