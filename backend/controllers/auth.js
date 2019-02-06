const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user'); 

const generateToken = (user) => {
    const token = jwt.sign(
        { username: user.username },
        ('cmp-key'), 
        { expiresIn: '5h' }
    );
    console.log(user);
    return token;
}

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username) {
        User.findOne({ username })
            .then(doc => {
                if (!doc) {
                    return res.status(403).send('Incorrect username, please try again');
                }
            if (doc.password !== password) {
                return res.status(403).send('Incorrect password, please try again');
            }
            const token = generateToken(doc);
            return res.send({ token })
        });
    } else {
        return res.status(403).send('Incorrect login or password, please try again')
    }
});


module.exports = router;  