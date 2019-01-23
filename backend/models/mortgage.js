const mongoose = require('mongoose');

const mortgageSchema = new mongoose.Schema({
    id: Number,
    createdAt: Date,
    customerName: String,
    status: Number,
    referrer: Number,
    source: Number,
    category: Number,
    lender: Number,
    history: [Object],
    dateOfLead: Date,
    isActive: Boolean,
    amount: Number,
    employee: Number
  });
  
  module.exports = mongoose.model('mortgage-collection', mortgageSchema);