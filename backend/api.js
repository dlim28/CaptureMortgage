const express = require('express')
const axios = require('axios');
const mongoose = require('mongoose')
const cors = require('cors')
const mortgage = require('./models/mortgage');

//Start Express
const app = new express();
const port = 5000; //This port can be configurable

//Connect MongoDB
mongoose.connect('mongodb://localhost:27017/CaptureMortgagePlus'); //This is configurable to any service

mongoose.connection.on('connected', () => {
    console.log('Connected to mongod');
  });
  
mongoose.connection.on('error', () => {
    console.log('Failed to connect to mongod');
  });

app.use(cors())
app.use(express.json())
app.use(require('./controllers'));

// app.get('/', (req, res) => {
//   mortgage.find({})
//   .then((resp) => {
//     res.send(resp);
//   })
// })

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
