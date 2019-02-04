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
        {
            $and: 
            [
                {"status":"lead"},
                {"dateOfLead": {"$gte": `01/07/${currentYear - 1}`, "$lte": `30/06/${currentYear}`}}
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
                {"status":"lead"},
                {"dateOfLead": {"$gte": `01/07/${currentYear - 1}`, "$lte": `30/06/${currentYear}`}}
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
    let counter = 0;

    mortgage.find(
        {
            $and:
            [
                {status:"lead"},
                {"dateOfLead":{"$gte": `01/07/${currentYear - 1}`, "$lte": `30/06/${currentYear}`}}
            ]
        }
    )
    .sort(
        {"dateOfLead": 1}
    )
    .lean()
    .then(resp => {
        // let lpArray = []
        // let spArray = []
        // let marketingArray = []
        // let bdmArray = []
        // let tfcArray = []
        // let otherArray = [] 
        
        let arrayByMonth = []
        let data = {}

        //sets the month in the response object
        for (let index = 0; index < resp.length; index++) {

            const dateStr = resp[index].dateOfLead;
            const dateStrMod = dateStr.split("/")
            const currentDate = new Date(`${dateStrMod[2]}-${dateStrMod[1]}-${dateStrMod[0]}`)
            const currentMonth = currentDate.getMonth();

            resp[index].month = currentMonth

            if(resp[index].month === 0){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }

            else if(resp[index].month === 1){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }

            else if(resp[index].month === 2){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }

            else if(resp[index].month === 3){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 4){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 5){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 6){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 7){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 8){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 9){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            
            else if(resp[index].month === 10){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }

            else if(resp[index].month === 11){
                arrayByMonth = sortReferrer(arrayByMonth,resp[index])
            }
            else {
                console.log("No month available")
            }
        };

        data = addTotalReferrers(arrayByMonth)
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
    // [month1 = [{}, {}],month2 = [],[]]
    
})

function addTotalReferrers(monthArray) {

    let returnObj = {}
    let totalReferrer = {}
    for (let month = 0;  month < monthArray.length; month++) {
        if (monthArray[month] === undefined) {
            // console.log("Undefined")
        } else {
            for (let referrerID = 0; referrerID < monthArray[month].length; referrerID++) {
                // console.log(monthArray[month][referrerID])
                if (monthArray[month][referrerID] === undefined) {
                    console.log(`ReferrerID:${referrer} is undefined`)
                }
                else {
                    let monthStr = `Month ${month}`
                    console.log(`ReferrerID:${referrerID}`, monthArray[month][referrerID].length)
                    totalReferrer[`ReferrerID:${referrerID}`] = monthArray[month][referrerID].length
                    returnObj[monthStr] = totalReferrer
                }
            }
        }
    }
    return returnObj
}

function sortReferrer(monthArray, queriedDataObj) {

    let returnArray = monthArray;

    if (returnArray[queriedDataObj.month] === undefined) {

        if (queriedDataObj.referrer === "LP Staff") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[0].push(queriedDataObj)
            returnArray[queriedDataObj.month] = referrerArray
        }
        else if (queriedDataObj.referrer === "SP Staff") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[1].push(queriedDataObj)
            returnArray[queriedDataObj.month] = referrerArray
        }
        else if (queriedDataObj.referrer === "Marketing Campaigns") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[2].push(queriedDataObj)
            returnArray[queriedDataObj.month] = referrerArray
        }
        else if (queriedDataObj.referrer === "BDM Staff") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[3].push(queriedDataObj)
            returnArray[queriedDataObj.month] = referrerArray
        }
        else if (queriedDataObj.referrer === "TFC") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[4].push(queriedDataObj)
            returnArray[queriedDataObj.month] = referrerArray
        }
        else {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[5].push(queriedDataObj)
            returnArray[queriedDataObj.month] = referrerArray
        }
    }
    else {
        if (queriedDataObj.referrer === "LP Staff") {
            returnArray[queriedDataObj.month][0].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "SP Staff") {
            returnArray[queriedDataObj.month][1].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "Marketing Campaigns") {
            returnArray[queriedDataObj.month][2].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "BDM Staff") {
            returnArray[queriedDataObj.month][3].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "TFC") {
            returnArray[queriedDataObj.month][4].push(queriedDataObj)
        }
        else {
            returnArray[queriedDataObj.month][5].push(queriedDataObj)
        }
    
    }
    // console.log("Outside if/else statement", returnArray)
    return returnArray;
}


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
    
    for (const key in changes) {
        if (changes.hasOwnProperty(key)) {
            if (key === "status") {
                
            }
            else
            {
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
            }
        }
    }
})

function setHistory(historyArray, reqBody = null, originalObj = null) {

    let historyChanges = {};

    const timestamp = new Date();
    const timestampDay = timestamp.getDate();
    const timestampMonth = timestamp.getMonth();
    const timestampYear = timestamp.getFullYear();

    

    if(historyArray.length <= 0) {
        let stringDate = `${timestampDay}/${timestampMonth}/${timestampYear}`
        historyChanges[stringDate] = "Creation date"
    }
    else {

        let changeIndex = 0;
        let stringDate = `${timestampDay}/${timestampMonth}/${timestampYear}`

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