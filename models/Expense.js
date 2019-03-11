const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var expenseSchema = new mongoose.Schema({
    createdAt: { type: Date },
    expense: String,
    amount: String

});



module.exports = mongoose.model('Expense', expenseSchema);
