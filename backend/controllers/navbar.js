const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/total/:status', (req, res) => {
    //Get the total amount of lead for the current month
    const { status } = req.params;

    const queriedRecords = getTotalMortgages(status); 
    //The returned response will be an array of objects (queried records)

    const totalAmount = getTotalAmount(queriedRecords);

    const queriedRecordsYTD = getTotalMortgagesYTD(status);
    const totalAmountYTD = getTotalAmountYTD(queriedRecordsYTD);

    return [
        {totalRecords:queriedRecords.length()},
        {totalMoney:totalAmount},
        {totalRecordsYTD:queriedRecordsYTD.length()},
        {totalMoneyYTD:totalAmountYTD}
    ]
})

function getTotalMortgages(status) {
    /*This function will get all records of current month 
    depending on the status query that is passed through*/

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = cuentDate.getFullYear();
    //0 is january, add 1 as system time starts the month at 1
    mortgage.find({ $and: [
        {"dateOfLead":{"$gte": new Date(currentYear,currentMonth,1), "$lte": currentDate}},
        {"status":status}
    ]})
    .then(resp => {
        if (typeof resp === null) {
            return "No response"
        } else {
            return resp;
        }
        
    })   
}

function getTotalAmount(recordsQueriedArray) {
    /*This function will get the total amount of money of all records that were queried
    The parameter that is passed through will be an object of all the queried records that was previous completed*/

    let totalAmount = 0;

    recordsQueriedArray.forEach(queriedObject => {
        for (const key in queriedObject) {
            if (queriedObject.hasOwnProperty(key)) {
                if (key === "amount") {
                    const parsedAmount = queriedObject[key].parseInt();
                    totalAmount += parsedAmount;
                }
            }
        }
    });
    return totalAmount;
}

function getTotalMortgagesYTD(status) {
    //30th June EOFY
    const currrentDate = new Date();
    // const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear(); //Month starts at 0 - January
    mortgage.find({ $and:[
        {"dateOfLead":{"$gte": new Date(currentYear, 5, 30), "$lte": new Date((currentYear + 1), 5, 30)}},{"status":status}
    ]})
    .then(resp => {
        if (typeof resp === null) {
            return "No response"
        } else {
            return resp;
        }
    })
}

function getTotalAmountYTD(recordsQueriedArray) {

    let totalAmount = 0;

    recordsQueriedArray.forEach(queriedObject => {
        for (const key in queriedObject) {
            if (queriedObject.hasOwnProperty(key)) {
                if (key === "amount") {
                    const parsedAmount = queriedObject[key].parseInt();
                    totalAmount += parsedAmount
                }
                
            }
        }
    });
    return totalAmount;
}

module.exports = router;