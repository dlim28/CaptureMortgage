const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

//Get all mortgages
router.get('/', (req, res) => {

    mortgage.find({})
    .then((resp) => {
       res.send(resp);
    })
    console.log("Finished Root route")
})

//Get one mortgage based on parameter
router.get('/select/:id', (req, res) => {
    const { id } = req.params;
    mortgage.findOne({ id })
    .then((resp) => {
        res.send(resp);
    })
    console.log("Finished id route")
})

router.get('/overview', (req, res) => {
    //Sort by dateOfLead
    //Query by Lead status
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    
    mortgage.find(
        // search date of lead between 1st January last year and 31st December this year
        {
            $and: 
            [
                {"status":"0"},
                {"dateOfLead": {"$gte": `${currentYear - 1}-01-01`, "$lte": `${currentYear}-12-31`}}
            ]
        }
    ).sort(
        { "dateOfLead": 1}
    )
    .then((resp) => {
        res.send(resp);
    })
})

router.get('/employee-leaderboard', (req, res) => {
    //Show all the leads YTD by employee
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();

    mortgage.find(
        // search date of lead between 1st January last year and 31st December this year
        {
            $and: 
            [
                {"status":"0"},
                {"dateOfLead": {"$gte": `${currentYear - 1}-01-01`, "$lte": `${currentYear}-12-31`}}
            ]
        }
    ).sort(
        { "employee": 1 , "dateOfLead": 1}
    )
    .then((resp) => {
        res.send(resp);
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/referrer-leaderboard', (req, res) => {
    // This route will get all the referrers and tally them
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();

    mortgage.aggregate(
        [
            {$match: {"status":"0", "dateOfLead":{"$gte": `${currentYear - 1}-01-01`, "$lte": `${currentYear}-12-31`}}},
            {
                $group: {
                    _id: {Referrer: "$referrer"},
                    // month: { },
                    total: {$sum: 1}
                }
            }
        ]
    )
    .sort(
        {_id: 1}
    )
    .then(resp => {
        res.send(resp)
    })
    .catch(err => {
        res.send(err)
    })
})


// GETTERS
function getCustomerName() {
    return currentState.customerName;
}

function getStatus() {
    return currentState.status;
}

function getReferrer() {
    return currentState.referrer;
}

function getSource() {
    return currentState.source;
}

function getCategory() {
    return currentState.category;
}

function getLender() {
    return currentState.lender;
}

function getHistory() {
    return currentState.history; //returns array of objects
}

function getDateOfLead() {
    return currentState.dateOfLead;
}

function getIsActive() {
    return currentState.isActive;
}

function getAmount() {
    return currentState.amount;
}

function getEmployee() {
    return currentState.employee;
}
// GETTERS

// SETTERS

function setClientName(paramCustomerName) {
    currentState.customerName = paramCustomerName;
    // Save to database after each set
}

function setStatus(paramStatusID) {
    currentState.status = paramStatusID;
}

function setReferrer(paramReferrer) {
    currentState.referrer = paramReferrer;
}

function setSource(paramSource) {
    currentState.source = paramSource;
}

function setCategory(paramCategory) {
    currentState.category = paramCategory;
}

function setLender(paramLender) {
    currentState.lender = paramLender;
}

function setDateOfLead(paramLeadDate) {
    currentState.dateOfLead = paramLeadDate;
}

function setIsActive(paramIsActive) {
    currentState.isActive = paramIsActive;
}

function setAmount(paramAmount) {
    currentState.amount = paramAmount;
}

function setHistory() {
    //Use the previous object and compare it with the current object
    //Iterate through the prevObj and compare the value with the currentObj
    //Set the value of the history changes (another object) to the history key
    let historyChanges = {};

    for (var key in previousState) {
        if (previousState.hasOwnProperty(key)) {
            // console.log(key + " -> " + prevObj[key]);
            if(key != 'history') {
                if(previousState[key] != currentState[key]) {
                    //push the prevObj key/value and currentObj key/value into another variable
                    const timeStamp = new Date(); //This will be the key
                    historyChanges.timeStamp = `${key}` + ':' + `${previousState[key]}` + 'changed to' + `${key}` + ':' + `${currentState[key]}` //This will be the value
                }
            }
        }
    }

    currentState.history.push(historyChanges); //Push the history into the array
    currentState.save();

}

module.exports = router;