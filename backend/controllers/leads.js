const express = require('express');
const router = express.Router();
const mortgage = require('../models/mortgage');

//Get all mortgages
router.get('/', (req, res) => {
    res.send("Welcome to the leads homepage");
})

router.get('/all',(req, res) => {
    mortgage.find({status:"lead"})
    .then(resp => {
        res.send(resp)
    })
    .catch(err => {
        return err
    })
})
//Get one mortgage based on parameter
router.get('/select/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    mortgage.findOne({ id })
    .then((resp) => {
        res.send(resp);
    })
    .catch(err => {
        return err
    })
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
                {status:"lead"},
                {dateOfLead: {$gte: new Date(`${currentYear - 1}-07-01`), $lte: new Date(`${currentYear}-06-30`)}}
            ]
        }
    ).sort(
        {dateOfLead: 1}
    )
    .then((resp) => {
        res.send(resp);
    })
    .catch(err => {
        return err
    })
})

router.get('/employee-leaderboard', (req, res) => {
    //Show all the leads YTD by employee
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();

    mortgage.find(
        {
            $and: 
            [
                {status:"lead"},
                {dateOfLead: {$gte: new Date(`${currentYear - 1}-07-01`), $lte: new Date(`${currentYear}-06-30`)}}

            ]
        }
    ).sort(
        { employee: 1 , dateOfLead: 1}
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
                {dateOfLead: {$gte: new Date(`${currentYear - 1}-07-01`), $lte: new Date(`${currentYear}-06-30`)}}
            ]
        }
    )
    .sort(
        {dateOfLead: 1}
    )
    .lean()
    .then(resp => {
        
        let arrayByMonthPrevYear = []
        let arrayByMonthCurrentYear = []
        let data = {}

        //sets the month in the response object
        for (let index = 0; index < resp.length; index++) {

            const dateObj = resp[index].dateOfLead;
            const currentDate = new Date;

            if (dateObj.getFullYear() === currentDate.getFullYear() - 1) {

                if(dateObj.getMonth() === 0){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 1){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 2){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 3){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 4){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 5){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 6){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 7){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 8){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 9){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 10){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 11){
                    arrayByMonthPrevYear = sortReferrer(arrayByMonthPrevYear,resp[index])
                }
                else {
                    console.log("No month available")
                }
            } else {
                if(dateObj.getMonth() === 0){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 1){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 2){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 3){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 4){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 5){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 6){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 7){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 8){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 9){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                
                else if(dateObj.getMonth() === 10){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
    
                else if(dateObj.getMonth() === 11){
                    arrayByMonthCurrentYear = sortReferrer(arrayByMonthCurrentYear,resp[index])
                }
                else {
                    console.log("No month available")
                }
            }
        };

        data.currentYear = addTotalReferrers(arrayByMonthCurrentYear)
        data.previousYear = addTotalReferrers(arrayByMonthPrevYear)
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })    
})

function addTotalReferrers(monthArray) {

    let returnObj = {}

    // mortgage.find({
    //     $or:
    //     [
    //         {status:"lead lost"},
    //         {status:"lodgement declined"},
    //         {status:"approval withdrawn"}
    //     ]
    // })
    // .lean()
    // .then(data => {
        
    // })
    for (let month = monthArray.length;  month >= 0; month--) {
        for (let index = 0; index < monthArray.length; index++) {
            let totalReferrer = {}
            if (monthArray[month] === undefined) {
                //Do nothing
            } else {
                let totalCounter = 0
                for (let referrerID = 0; referrerID < monthArray[month].length; referrerID++) {
                    let monthStr = `Month${month}`
                    totalReferrer[`referrerid${referrerID}`] = monthArray[month][referrerID].length
                    totalCounter += monthArray[month][referrerID].length
                    returnObj[monthStr] = totalReferrer

                    if (referrerID === 5) {
                        returnObj[monthStr].totalLeads = totalCounter
                        returnObj[monthStr]['%'] = (totalCounter / (5)) * 100.00
                    }
                }                 
            }
        }
    }
    
    return returnObj
}

function sortReferrer(monthArray, queriedDataObj) {

    let returnArray = monthArray;

    if (returnArray[queriedDataObj.dateOfLead.getMonth()] === undefined) {

        if (queriedDataObj.referrer === "LP Staff") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[0].push(queriedDataObj)
            returnArray[queriedDataObj.dateOfLead.getMonth()] = referrerArray
        }
        else if (queriedDataObj.referrer === "SP Staff") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[1].push(queriedDataObj)
            returnArray[queriedDataObj.dateOfLead.getMonth()] = referrerArray
        }
        else if (queriedDataObj.referrer === "Marketing Campaigns") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[2].push(queriedDataObj)
            returnArray[queriedDataObj.dateOfLead.getMonth()] = referrerArray
        }
        else if (queriedDataObj.referrer === "BDM Staff") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[3].push(queriedDataObj)
            returnArray[queriedDataObj.dateOfLead.getMonth()] = referrerArray
        }
        else if (queriedDataObj.referrer === "TFC") {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[4].push(queriedDataObj)
            returnArray[queriedDataObj.dateOfLead.getMonth()] = referrerArray
        }
        else {
            let referrerArray = []
            for (let index = 0; index < 6; index++) {
                referrerArray[index] = []
            }
            referrerArray[5].push(queriedDataObj)
            returnArray[queriedDataObj.dateOfLead.getMonth()] = referrerArray
        }
    }
    else {
        if (queriedDataObj.referrer === "LP Staff") {
            returnArray[queriedDataObj.dateOfLead.getMonth()][0].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "SP Staff") {
            returnArray[queriedDataObj.dateOfLead.getMonth()][1].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "Marketing Campaigns") {
            returnArray[queriedDataObj.dateOfLead.getMonth()][2].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "BDM Staff") {
            returnArray[queriedDataObj.dateOfLead.getMonth()][3].push(queriedDataObj)
        }
        else if (queriedDataObj.referrer === "TFC") {
            returnArray[queriedDataObj.dateOfLead.getMonth()][4].push(queriedDataObj)
        }
        else {
            returnArray[queriedDataObj.dateOfLead.getMonth()][5].push(queriedDataObj)
        }
    }
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
            res.send("Item saved to database")
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
    }) 
    .catch(err => {
        return err
    })   
})

router.patch('/:id/edit', (req, res) => {
    const { id } = req.params
    let changes = req.body;
    
    for (const key in changes) {
        if (changes.hasOwnProperty(key)) {
            if (key === "status") {
                let statusDate = new Date();
                statusDate.setHours(0,0,0,0)
                statusDate.setUTCHours(0)
                changes.statusDate = statusDate

                mortgage.findOneAndUpdate({id}, changes)
                .then(doc => {
                    doc.history.push(setHistory(doc.history,changes,doc))
                    doc.save()
                .then(resp => {
                    res.send(resp)
                    })
                    .catch(err => {
                        return err
                    })
                })
                .catch(err => {
                    return err;
                })
            }
            else
            {
                mortgage.findOneAndUpdate({id}, changes)
                .then(doc => {
                    doc.history.push(setHistory(doc.history,changes,doc))
                    doc.save()
                .then(resp => {
                    res.send(resp)
                    })
                    .catch(err => {
                        return err
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
    const timestampMonth = timestamp.getMonth() + 1;
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