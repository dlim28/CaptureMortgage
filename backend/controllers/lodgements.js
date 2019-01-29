const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/', (req,res) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();

    mortgage.find(
        // search date of lodgements between 1st January last year and 31st December this year
        {
            $and: 
            [
                {"status":"1"},
                {"dateOfLead": {"$gte": `${currentYear - 1}-01-01`, "$lte": `${currentYear}-12-31`}}
            ]
        }
    ).sort(
        {"id": 1}
    )
    .then((resp) => {
        res.send(resp);
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router;