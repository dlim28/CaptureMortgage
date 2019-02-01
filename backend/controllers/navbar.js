const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/', (req,res) => {
    // res.send(`
    // /navbar/{status number}

    // STATUS NUMBER
    // -3 = approval withdrawn
    // -2 = lodgement declined
    // -1 = lead lost
    // 0 = LEAD
    // 1 = LODGEMENT
    // 2 = APPROVAL
    // 3 = SETTLEMENT
    // `)
    let returnArr = []

    for (let index = 0; index < 4; index++) {

        switch (index) {
            case 0:
                const str = "lead"
                const status = getData(str);
                returnArr.push(status)
            break;

            case 1:
                const str1 = "lodgement"
                const status1 = getData(str1);
                returnArr.push(status1)
            break;

            case 2:
                const str2 = "approval"
                const status2 = getData(str2);
                returnArr.push(status2)
            break;

            case 3:
                const str3 = "settlement"
                const status3 = getData(str3);
                returnArr.push(status3)
            break
            default:

            break;
        }
    }

    Promise.all(returnArr).then(data => {
        res.send(data)
    })
})

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

function getData(status)
{
    return new Promise((resolve, reject) => {
            getTotalMortgages(status)
                .then(resultObject => { 
                let returnObj = {};
                console.log(resultObject)
                getTotalAmount(resultObject)
                .then(totalAmount => {
                    returnObj.statusName = status
                    returnObj.totalRecordsForMonth = Object.keys(resultObject).length
                    returnObj.totalAmountForMonth = totalAmount
                })

                getTotalMortgagesYTD(status)
                .then(resultObjectYTD => {
                
                    getTotalAmountYTD(resultObjectYTD)
                    .then(totalAmountYTD => {
                        returnObj.totalRecordsYTD = Object.keys(resultObjectYTD).length
                        returnObj.totalAmountYTD = totalAmountYTD
                        resolve(returnObj)
                    })
                })
            })
        }
    )
}

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
                    {
                        dateOfLead:{$gte: `01/${currentMonth + 1}/${currentYear}`,
                        $lte: `${currentDay}/${currentMonth + 1}/${currentYear}`},
                        status:status
                    }
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
                    {"dateOfLead":{"$gte": `01-07-${currentYear - 1}`, "$lte":`30-06-${currentYear}`}},
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