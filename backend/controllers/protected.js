const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user'); 

const isAuthenticated = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(403).send('Not authenticated')
    }
    const decoded = jwt.verify (token, 'cmp-key', (err, decoded) => {
        if (err) {
            return res.status(403).send('Not authenticated')
        }
        next()
    });
}

// Below routes run throguh isAuthenticated middleware
router.use(isAuthenticated)

// POST and GET protected
router.post('/', (req, res) => {
    return res.send('authenticated')
})

//  GET mortgages
router.use('/leads', require('./leads.js'));
router.use('/lodgements', require('./lodgements.js'))
router.use('/approvals', require('./approvals.js'))
router.use('/settlements', require('./settlements.js'))

// GET navbar dashboard data
router.use('/navbar', require('./navbar.js'))

module.exports = router;  