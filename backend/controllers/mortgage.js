const express = require('express');
const mongoose = require('mongoose')


const mortgage = mongoose.connect('mongodb://localhost:27017/mortgage-collection');

let currentState = findMortgage(); // This variable will be the object that the changes will be applied to

const previousState = currentState; //This variable will hold all the previous data of the object



function findMortgage(paramID) {
    //finds a particular mortgage from the database
    //paramID is the ID that is from 
    const mortgageObj = mortgage.findOne({id: paramID});

    return mortgageObj;
}

// GETTERS
function getCustomerName(obj) {
    return obj.customerName;
}

function getStatus(obj) {
    return obj.status;
}

function getReferrer(obj) {
    return obj.referrer;
}

function getSource(obj) {
    return obj.source;
}

function getCategory(obj) {
    return obj.category;
}

function getLender(obj) {
    return obj.lender;
}

function getHistory(obj) {
    return obj.history;
}

function getDateOfLead(obj) {
    return obj.dateOfLead;
}

function getIsActive(obj) {
    return obj.isActive;
}

function getAmount(obj) {
    return obj.amount;
}

function getEmployee(obj) {
    return obj.employee;
}
// GETTERS

// SETTERS
{
    function setClientName(paramCustomerName, currentObj) {
        currentObj.customerName = paramCustomerName;
        // Save to database after each set
    }

    function setStatus(paramStatusID, currentObj) {
        currentObj.status = paramStatusID;
    }

    function setReferrer(paramReferrer, currentObj) {
        currentObj.referrer = paramReferrer;
    }

    function setSource(paramSource, currentObj) {
        currentObj.source = paramSource;
    }

    function setCategory(paramCategory, currentObj) {
        currentObj.category = paramCategory;
    }

    function setLender(paramLender, currentObj) {
        currentObj.lender = paramLender;
    }

    function setDateOfLead(paramLeadDate, currentObj) {
        currentObj.dateOfLead = paramLeadDate;
    }

    function setIsActive(paramIsActive, currentObj) {
        currentObj.isActive = paramIsActive;
    }

    function setAmount(paramAmount, currentObj) {
        currentObj.amount = paramAmount;
    }

    function setHistory(prevObj, currentObj) {
        //Use the previous object and compare it with the current object
        //Iterate through the prevObj and compare the value with the currentObj
        //Set the value of the history changes (another object) to the history key
        let historyChanges = {};

        for (var key in prevObj) {
            if (prevObj.hasOwnProperty(key)) {
                // console.log(key + " -> " + prevObj[key]);
                if(prevObj[key] != currentObj[key]) {
                    //push the prevObj key and currentObj key into another variable
                    historyChanges.key = `${key}:${prevObj[key]} changed to ${key}:${currentObj[key]}`
                }
            }
        }
    }
}
// SETTERS

module.exports = mortgage;