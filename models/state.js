const mongoose = require("mongoose");
const Schema = mongoose.Schema;



var StateSchema = new mongoose.Schema({
  statename: String,
});




module.exports = mongoose.model('States', StateSchema);