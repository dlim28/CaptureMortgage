const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

router.get('/total/:status', (req, res) => {
    //Get the total amount of lead for the current month
    const { status } = req.params;

    const queriedRecords = getTotalMortgages(status); //The returned response will be an array of objects (queried records)

    const totalAmount = getTotalAmount(queriedRecords);

    return [
        {totalRecords:queriedRecords.length()},
        {totalMoney:totalAmount}
    ]
        
    
})

function getTotalMortgages(status) {
    /*This function will get all records of current month 
    depending on the status query that is passed through*/

    const currentDate = new Date();
    // const currentMonth = currentDate.getMonth() + 1
    //0 is january, add 1 as system time starts the month at 1
    mortgage.find().and(
        [
            { status },
            //date of lead month equals to currentMonth
            {dateOfLead: 
                {$lte: currentDate}
            }
        ]
    )
    .then(resp => {
        return resp;
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
                    const parsedAmt = queriedObject[key].parseInt();
                    totalAmount += parsedAmt;
                }
                
            }
        }
    });

    return totalAmount;
    
}

function getTotalMortgagesYTD(status) {
    //30th June EOFY
    const currrentDate = new Date();
    const currentMonth = currentDate.getMonth(); //Month starts at 0 - January
    const currentYear = currentDate.getFullYear();

    mortgage.find({
        "dateOfLead":{"$gte": new Date(currentYear, 5, 30), "$lte": new Date((currentYear + 1), 5, 30)}

    })
}

function getTotalAmountYTD(recordsQueriedArray) {

}





module.exports = router;