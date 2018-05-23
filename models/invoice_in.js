const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var invoice_independent_rSchema = new mongoose.Schema({
  createdAt: { type: Date },
  Client: [{
    type: Schema.Types.ObjectId,
    ref: 'Clients'
  }],



  booking_num: String,
  container_num: String,
  port_of_dis: String,
  port_of_loading: String,
  ocean_freight: String,
  truck: String,
  ectn_becs: String,
  extra_charges: String,
  invoice_total: String,
  balance_due: String,
  more_invoice_fields: String,
  point_and_contry_of_origin: String,
  for_transhipment_to: String,
  label_charge3: String,

  more_invoice_fields_3: String,
  label_charge4: String,

  more_invoice_fields_2: String,
  label_charge2: String,


  label_charge1: String,




});



module.exports = mongoose.model('Invoice_In', invoice_independent_rSchema);
