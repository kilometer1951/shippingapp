const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var CompanySchema = new mongoose.Schema({
   fmcotino: String,
   companyname: String,
   address: String,
   City: {
      type: Schema.Types.ObjectId,
      ref: 'Cities'
   },
   State: {
      type: Schema.Types.ObjectId,
      ref: 'States'
   },
   zipcode: String,
   phonenumber: String,
   fax: String,
   email: String,
   photo: String,
   hasEnteredDetails: Boolean
});



module.exports = mongoose.model('Company', CompanySchema);
