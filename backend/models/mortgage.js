const mongoose = require('mongoose');

const mortgageSchema = new mongoose.Schema({
    id: String,
    createdAt: Date,
    customerName: String,
    status: String,
    referrer: String,
    source: String,
    category: String,
    lender: String,
    history: [Object],
    dateOfLead: Date,
    isActive: Boolean,
    amount: Number,
    employee: String
  }, {collection: 'mortgageCollection'});
  
  module.exports = mongoose.model('mortgage', mortgageSchema);