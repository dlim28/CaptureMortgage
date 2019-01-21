const express = require('express');
const router = express.Router();

router.use('/', require(''));
// GET root

router.use('/leads', require('./mortgage'));
//  GET mortgages

// GET particular mortgage

//Get navbar dashboard data

//Get Leads Data

//Get Lodgement Data

//Get Approval Data

//Get Settlement Data

module.exports = router;