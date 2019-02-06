import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';

class ReferrerLeaderboard extends Component {
    state = { leads: [] }

    fetchData() {
        axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/referrer-leaderboard')
        .then(resp => {
            console.log(resp.data)
            this.setState({ leads: resp.data })
        })
    }

    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 15000);
    }

    createMonths = (leads) => {
        console.log(leads)
        // const arrLeads = Object.values(leads)
        // console.log(arrLeads)
        // let newObj = {}
        // let newArr = []
        // arrLeads.forEach((obj, index) => {
        //     console.log(obj)  
        // })
        Object.keys(leads).forEach((key) => {
            // console.log(key, leads[key])
            if (key === 'Month 0') {
                leads[key].month = 'January'
            }
            if (key === 'Month 1') {
                leads[key].month = 'Febuary'
            }
            if (key === 'Month 2') {
                leads[key].month = 'March'
            }
            if (key === 'Month 3') {
                leads[key].month = 'April'
            }
            if (key === 'Month 4') {
                leads[key].month = 'May'
            }
            if (key === 'Month 5') {
                leads[key].month = 'June'
            }
            if (key === 'Month 6') {
                leads[key].month = 'July'
            }
            if (key === 'Month 7') {
                leads[key].month = 'August'
            }
            if (key === 'Month 8') {
                leads[key].month = 'September'
            }
            if (key === 'Month 9') {
                leads[key].month = 'October'
            }
            if (key === 'Month 10') {
                leads[key].month = 'November'
            }
            if (key === 'Month 11') {
                leads[key].month = 'December'
            }
        })
        return leads
    }

    render() {
        const { leads } = this.state;
        const data = this.createMonths(leads)
        // console.log(data["Month 0"])
        return (
            <div>

                <div className="center">
                    <h1 className="header leads">REFERRER LEADERBOARD</h1>
                    <div className="leads">
                        <h3>CaptureMortgage+ Leaderboard by Referrer</h3><span> </span>
                        <h3><FiscalYear /></h3>
                    </div>
                    <table id="myTable">
                        <thead>
                            <tr className="leads-back">
                                <th>Month</th>
                                <th>LP Staff</th>
                                <th>SP Staff</th>
                                <th>Marketing Campaigns</th>
                                <th>BDM Staff</th>
                                <th>TFC</th>
                                <th>Others</th>
                                <th>Totals</th>
                                <th>%</th> 
                                </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((key, i) => {
                                // console.log(data[key])
                                return (
                                <tr key={i}>
                                    <td>{data[key].month}</td>
                                    <td>{leads[key].referrerid0}</td>
                                    <td>{leads[key].referrerid1}</td>
                                    <td>{leads[key].referrerid2}</td>
                                    <td>{leads[key].referrerid3}</td>
                                    <td>{leads[key].referrerid4}</td>
                                    <td>{leads[key].referrerid5}</td>
                                    <td>{leads[key].referrerid0 + leads[key].referrerid1 + leads[key].referrerid2 + leads[key].referrerid3 + leads[key].referrerid4 + leads[key].referrerid5}</td>
                                    <td></td>
                                </tr>
                            )})}
                        </tbody>

                    </table>
                </div>      
            </div>
        );
    }
}

export default ReferrerLeaderboard;


