const express = require('express');
const router = express.Router();

// GET root
// router.use('/', require(''));

//  GET mortgages
router.use('/leads', require('./leads.js'));
router.use('/lodgements', require('./lodgements.js'))
router.use('/approvals', require('./approvals.js'))
//Get navbar dashboard data
router.use('/navbar', require('./navbar.js'))

module.exports = router;