const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

//Get all mortgages
router.get('/', (req, res) => {
       res.send("Welcome to the leads homepage");
})

router.get('/all',(req, res) => {
    mortgage.find({"status":"lead"})
    .then(resp => {
        res.send(resp)
    })
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
                    _id: {Month: "$referrer"},
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

router.post('/new-lead', (req, res) => {

    mortgage.countDocuments({}).then(length => {
        
        const newLead = 
        {
            "id": length + 1,
            "status": req.body.status,
            "statusDate": req.body.statusDate,
            "referrer": req.body.referrer,
            "source": req.body.source,
            "category": req.body.category,
            "customerName": req.body.customerName,
            "amount": req.body.amount,
            "dateOfLead": req.body.dateOfLead,
            "lender": req.body.lender,
            "employee": req.body.employee
        }
        
        let data = new mortgage(newLead)
        data.history.push(setHistory(data.history))

        data.save()
        .then(resp => {
            console.log(resp)
            res.send("Item saved to database")
        })
        .catch(err => {
            console.log(err)
            res.status(400).send("unable to save to database");
        })
    })    
})

router.patch('/:id/edit', (req, res) => {
    const { id } = req.params
    const changes = req.body;
    console.log(changes)

    mortgage.findOneAndUpdate({id}, changes)
    .then(doc => {
        doc.history.push(setHistory(doc.history,changes,doc))
        doc.save()
        .then(resp => {
            res.send("Successful")
        })
    })
    .catch(err => {
        return err;
    })
})

function setHistory(historyArray, reqBody = null, originalObj = null) {

    let historyChanges = {};

    const timestamp = new Date();
    const timestampDay = timestamp.getDate();
    const timestampMonth = timestamp.getMonth();
    const timestampYear = timestamp.getFullYear();

    

    if(historyArray.length <= 0) {
        let stringDate = `${timestampYear}-${timestampMonth}-${timestampDay}`
        historyChanges[stringDate] = "Creation date"
    }
    else {

        let changeIndex = 0;
        let stringDate = `${timestampYear}-${timestampMonth}-${timestampDay}`

        for (const key in reqBody) {
            if (reqBody.hasOwnProperty(key)) {
                changeIndex++;
                updateMsg = `Change: ${changeIndex}| ` + stringDate
                historyChanges[updateMsg] = `${key} has been changed from ${originalObj[key]} to ${reqBody[key]}`
            }
        }
    }
    return historyChanges;
}
module.exports = router;