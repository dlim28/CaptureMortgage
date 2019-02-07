const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/', (req, res) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    let from = new Date(`${currentYear - 1}-07-01`)
    let until = new Date(`${currentYear}-06-30`)
    // search date of settlements between 1st July last year and 30th June this year
    mortgage.find(
        {
            $and:
            [
                {status:"settlement"},
                {dateOfLead: {$gte: from, $lte: until}}
            ]
        }
    )
    .sort(
        {id:1}
    )
    .then((resp) => {
        res.send(resp)
    })
    .catch(err => {
        return err
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params;
    mortgage.findOne({ id })
    .then((resp) => {
        res.send(resp);
    })
    .catch(err => {
        return err
    })
})

module.exports = router;