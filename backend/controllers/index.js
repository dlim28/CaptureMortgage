const express = require('express');
const router = express.Router();

router.use('/', require('./public'))
router.use('/protected', require('./protected'))
router.use('/auth', require('./auth'))

module.exports = router;  