const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

// const mortgageConnect = mongoose.connect('mongodb://localhost:27017/mortgage-collection'); //Connection to mongoDB 

// let currentState = mortgage.find({}) // This variable will be the object that the changes will be applied to

// const previousState = currentState; //This variable will hold all the previous data of the object

router.get('/', (req, res) => {
    mortgage.find({})
    .then((resp) => {
    res.send(resp);
  })
})

function findMortgage(paramID) {
    //finds a particular mortgage from the database
    //paramID is the ID that is from the webpage
    const mortgageObj = mortgage.findOne({id: paramID});

    return mortgageObj;
}

function findAllMortgage() {
    //finds a particular mortgage from the database
    //paramID is the ID that is from the webpage
    const mortgageObj = mortgage.find({});
    // console.log(mortgageObj);
    return mortgageObj;
}

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

// module.exports = mortgage;
module.exports = router;