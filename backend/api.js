const express = require('express')
const axios = require('axios');
const mongoose = require('mongoose')
const cors = require('cors')

//Start Express
const app = new express();
const port = 5000; //This port can be configurable

//Connect MongoDB
const mortgage = mongoose.connect('mongodb://localhost:27017/mortgage-collection'); //This is configurable to any service
const employees = mongoose.connect('mongodb://localhost:27017/users')

mongoose.connection.on('connected', () => {
    console.log('Connected to mongod');
  });
  
mongoose.connection.on('error', () => {
    console.log('Failed to connect to mongod');
  });

app.use(cors())
// app.use(require('./controllers'));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
