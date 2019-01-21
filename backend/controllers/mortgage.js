const express = require('express');
const mongoose = require('mongoose')


const mortgage = mongoose.connect('mongodb://localhost:27017/mortgage-collection');

function findMortgage(paramID) {
    //paramID is the ID that is from 
    const mortgageObj = mortgage.findOne({id: paramID});
    
}