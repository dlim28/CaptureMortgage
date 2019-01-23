const express = require('express');
const router = express.Router();

// GET root
router.use('/', require(''));

//  GET mortgages
router.use('/leads', require('./mortgage'));

// GET particular mortgage
router.use('/leads/:id', require('./leads/new'))


//Get navbar dashboard data

//Get Leads Data

//Get Lodgement Data

//Get Approval Data

//Get Settlement Data

module.exports = router;