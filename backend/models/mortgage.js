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


// {
//   "id": "2",
//   "createdAt": "2019-03-04",
//   "customerName": "John Doe",
//   "status": "Lodgement",
//   "referrer": "Marketing Campaigns",
//   "source": "App",
//   "category": "Purchase",
//   "lender": "CBA",
//   "history": [],
//   "dateOfLead": "2019-01-02",
//   "isActive": true,
//   "statusDate": "2019-01-04",
//   "amount": 7541890.00,
//   "employee": "Katherine"
// }