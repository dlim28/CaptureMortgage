const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/:status', (req, res) => {
    //Get the total amount of lead for the current month
    const { status } = req.params;
    let returnObj = {}

    getTotalMortgages(status)
    .then(resultObject => { 

        getTotalAmount(resultObject)
        .then(totalAmount => {
            returnObj.totalRecordsForMonth = Object.keys(resultObject).length
            returnObj.totalAmountForMonth = totalAmount
        })

        getTotalMortgagesYTD(status)
        .then(resultObjectYTD => {
        
            getTotalAmountYTD(resultObjectYTD)
            .then(totalAmountYTD => {
                returnObj.totalRecordsYTD = Object.keys(resultObjectYTD).length
                returnObj.totalAmountYTD = totalAmountYTD
                console.log(returnObj)
                res.send(returnObj)
            })
        })
    })
    
    
    
})

async function getTotalMortgages(status) {
    /*This function will get all records of current month 
    depending on the status query that is passed through*/
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();//Month Starts at 0
    const currentYear = currentDate.getFullYear();

    let result = await mortgage.find(
            { 
                $and: 
                [
                    {"dateOfLead":{"$gte": `${currentYear}-0${currentMonth+1}-01`, 
                    "$lte": `${currentYear}-${currentMonth + 1}-${currentDay}`}},
                    // , "$lte": `${currentYear}-${currentMonth + 1}-${currentDay}`}
                    {"status":status}
                ]
            }
        )

    return result
}

async function getTotalAmount(recordsQueriedObject) {
    /*This function will get the total amount of money of all records that were queried
    The parameter that is passed through will be an object of all the queried records that was previous completed*/
    let totalAmount = 0;

    for (const key in recordsQueriedObject) {
        if (recordsQueriedObject.hasOwnProperty(key)) {
            if(recordsQueriedObject[key].amount === null) 
            {
                totalAmount += 101
            }
            else
            {
                totalAmount += recordsQueriedObject[key].amount
            }
        }
    }

    return totalAmount;
}

async function getTotalMortgagesYTD(status) {
    //30th June EOFY
    const currentDate = new Date();
    // const currentMonth = currentDate.getMonth(); //Month starts at 0 - January
    const currentYear = currentDate.getFullYear(); 

    let result = await mortgage.find(
            { 
                $and:
                [
                    {"dateOfLead":{"$gte": `${currentYear - 1}-06-01`, "$lte":`${currentYear}-06-31`}},
                    {"status":status}
                ]
            }
        )

    return result
}

async function getTotalAmountYTD(recordsQueriedObject) {
    let totalAmount = 0;

    for (const key in recordsQueriedObject) {
        if (recordsQueriedObject.hasOwnProperty(key)) {
            if(recordsQueriedObject[key].amount === null) 
            {
                totalAmount += 101
            }
            else
            {
                totalAmount += recordsQueriedObject[key].amount
            }
        }
    }

    return totalAmount;
}

module.exports = router;