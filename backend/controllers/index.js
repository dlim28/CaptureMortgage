const express = require('express');
const router = express.Router();

// GET root
// router.use('/', require(''));

//  GET mortgages
router.use('/leads', require('./mortgage.js'));

//Get navbar dashboard data
router.use('/navbar', require('./navbar'))

//Get Leads Data

//Get Lodgement Data

//Get Approval Data

//Get Settlement Data

module.exports = router;