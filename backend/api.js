const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config();

//Start Express
const app = new express();
const port = 5000; //This port can be configurable

//Connect MongoDB
// mongoose.connect('mongodb://localhost:27017/CaptureMortgagePlus');
mongoose.connect(process.env.DB_URL); //mlab

mongoose.connection.on('connected', () => {
    console.log('Connected to mongod');
  });
  
mongoose.connection.on('error', () => {
    console.log('Failed to connect to mongod');
  });

app.use(cors());
app.use(express.json())
app.use(require('./controllers'));

app.listen(port, () => console.log(`Listening on port:${port}`));
