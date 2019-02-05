const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user'); 

const isAuthenticated = (req, res, next) => {
    const { token } = req.headers;
    const decoded = jwt.verify ( token, 'cmp-key');
    console.log(decoded)
    next();

    const { username, password } = req.body;
    if (username) {
        User.findOne({ username })
            .then(doc => {
                if (!doc) {
                    return res.status(403).send('Bad username');
                }
            if (doc.password !== password) {
                return res.status(403).send('Bad password');
            }
            next();
        });
    } else {
        return res.status(403).send('Bad credentials')
    }
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