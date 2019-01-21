const express = require('express');
const mongoose = require('mongoose')


const mortgage = mongoose.connect('mongodb://localhost:27017/mortgage-collection');

function findMortgage(paramID) {
    //paramID is the ID that is from 
    const mortgageObj = mortgage.findOne({id: paramID});

    return mortgageObj;
}

// GETTERS
{
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
}
// GETTERS

// SETTERS

// SETTERS