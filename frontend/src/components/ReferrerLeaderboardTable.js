import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';

class ReferrerLeaderboard extends Component {
    state = { leads: [] }

    componentDidMount() {
        
      axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/referrer-leaderboard')
        .then(resp => {
            console.log(resp.data)
            this.setState({ leads: resp.data })
            
        })
      }

    render() {
        const { leads } = this.state;

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
                            {Object.keys(leads).map((lead, i) => {
                                console.log(lead)
                                return (
                                <tr key={i}>
                                    <td></td>
                                    <td>{leads[lead].referrerid0}</td>
                                    <td>{leads[lead].referrerid1}</td>
                                    <td>{leads[lead].referrerid2}</td>
                                    <td>{leads[lead].referrerid3}</td>
                                    <td>{leads[lead].referrerid4}</td>
                                    <td>{leads[lead].referrerid5}</td>
                                    <td>{leads[lead].referrerid0 + leads[lead].referrerid1 + leads[lead].referrerid2 + leads[lead].referrerid3 + leads[lead].referrerid4 + leads[lead].referrerid5}</td>
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


