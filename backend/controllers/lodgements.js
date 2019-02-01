const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/', (req,res) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();

    mortgage.find(
        {
            $and: 
            [
                {"status":"lodgement"},
                {"dateOfLead": {"$gte": `01/07/${currentYear - 1}`, "$lte": `30/06/${currentYear}`}}
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