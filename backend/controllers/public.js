const express = require('express');
const router = express.Router();

// GET root
router.get('/', (req,res) => {
    res.send("Welcome to capture mortgage plus root page")
});

module.exports = router;  