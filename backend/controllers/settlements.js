const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/', (req, res) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    mortgage.find(
        {
            $and:
            [
                {"status":"settlement"},
                {"dateOfLead": {"$gte": `01/07/${currentYear - 1}`, "$lte": `30/06/${currentYear}`}}
            ]
        }
    )
    .sort(
        {"id":1}
    )
    .then((resp) => {
        res.send(resp)
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params;
    mortgage.findOne({ id })
    .then((resp) => {
        res.send(resp);
    })
})

module.exports = router;
