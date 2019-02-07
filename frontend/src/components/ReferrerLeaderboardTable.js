import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';

class ReferrerLeaderboard extends Component {

    state = { leads: [] }

    fetchData = () => {
        const config = { headers: {
            token: sessionStorage.getItem('token')
        }}

        axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/leads/referrer-leaderboard', config)
        .then(resp => {
            // console.log(resp.data)
            this.setState({ leads: resp.data })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchData();
        this.setState({refresh: setInterval(this.fetchData, 15000)});
    }
    
    componentWillUnmount() {
        clearInterval(this.state.refresh)
    }

    createMonths = (leads) => {
        Object.keys(leads).forEach((year) => {
            // console.log(leads[key])
            // leads.currentYear['Month1'].month = "January"
            // console.log(leads.currentYear['Month1'])
            Object.keys(leads[year]).forEach((month) => {
                if (month === 'Month0') {
                    leads[year][month].month = 'January'
                }
                if (month === 'Month1') {
                    leads[year][month].month = 'Febuary'
                }
                if (month === 'Month2') {
                    leads[year][month].month = 'March'
                }
                if (month === 'Month3') {
                    leads[year][month].month = 'April'
                }
                if (month === 'Month4') {
                    leads[year][month].month = 'May'
                }
                if (month === 'Month5') {
                    leads[year][month].month = 'June'
                }
                if (month === 'Month6') {
                    leads[year][month].month = 'July'
                }
                if (month === 'Month7') {
                    leads[year][month].month = 'August'
                }
                if (month === 'Month8') {
                    leads[year][month].month = 'September'
                }
                if (month === 'Month9') {
                    leads[year][month].month = 'October'
                }
                if (month === 'Month10') {
                    leads[year][month].month = 'November'
                }
                if (month === 'Month11') {
                    leads[year][month].month = 'December'
                }
            })
        })
        // console.log(leads)
        return leads
    }

    render() {
        const { leads } = this.state;
        const data = this.createMonths(leads)
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
                            {
                            Object.keys(data).map((key) => {
                            return (
                                    Object.keys(data[key]).map((key2, j) => {
                                    console.log(key, data[key][key2])
                                    return(
                                        <tr key={j}>
                                            <td>{data[key][key2].month}</td>
                                            <td>{data[key][key2].referrerid0}</td>
                                            <td>{data[key][key2].referrerid1}</td>
                                            <td>{data[key][key2].referrerid2}</td>
                                            <td>{data[key][key2].referrerid3}</td>
                                            <td>{data[key][key2].referrerid4}</td>
                                            <td>{data[key][key2].referrerid5}</td>
                                            <td>{data[key][key2].totalLeads}</td>
                                            <td>{data[key][key2]['%']}</td>
                                        </tr>
                                        
                                    )
                                })
                            )
                        })
                        }
                        </tbody>

                    </table>
                </div>      
            </div>
        );
    }
}

export default ReferrerLeaderboard;