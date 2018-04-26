const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var dock_rSchema = new mongoose.Schema({
  createdAt: { type: Date },
  Client: [{
    type: Schema.Types.ObjectId,
    ref: 'Clients'
  }],
  Consignee: [{
    type: Schema.Types.ObjectId,
    ref: 'Consignees'
  }],
  BookingConfirmation: [{
    type: Schema.Types.ObjectId,
    ref: 'BookingConfirmation'
  }],
  Cargo: [{
    type: Schema.Types.ObjectId,
    ref: 'Cargo'
  }],
  n_name: String,
  n_address: String,
  n_country: String,
  n_pnum: String,
  seal_num: String,
  demurrage: String,
  container_num: String,
  aes_num: String,
  originals_tobe_released: String,
  cleint_is_agent: String,
  fowarding_agent_ref: String,
  description_of_charges: String,
  co_loaded_with: String,
  total_pre_paid: String,
  total_collected: String,
  destination_agent: String,
  containerlized: String,
  bill_of_lading_status: String,
  bill_of_lading_date: Date

});



module.exports = mongoose.model('Dock_R', dock_rSchema);
