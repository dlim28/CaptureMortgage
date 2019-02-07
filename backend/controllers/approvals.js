const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/', (req, res) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    let from = new Date(`${currentYear - 1}-07-01`)
    let until = new Date(`${currentYear}-06-30`)

    mortgage.find(
    // search date of approvals between 1st July last year and 30th June this year
        {
            $and:
            [
                {status:"approval"},
                {dateOfLead: {$gte: from, $lte: until}}
            ]
        }
    )
    .sort(
        {dateOfLead:1}
    )
    .lean()
    .then((resp => {

        for (let index = 0; index < resp.length; index++) {
            const dateStr = resp[index].statusDate;
            const currentDate = new Date();

            const timeDiff = Math.abs(currentDate.getTime() - dateStr.getTime())
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
            resp[index].WIP = diffDays
        }

        res.send(resp)
    }))
    .catch(err => {
        res.send(err)
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