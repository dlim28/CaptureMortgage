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

                <div class="center">
                    <h1 class="header leads">REFERRER LEADERBOARD</h1>
                    <div class="leads">
                        <h3>CaptureMortgage+ Leaderboard by Referrer</h3><span> </span>
                        <h3><FiscalYear /></h3>
                    </div>
                    <table id="myTable">
                        <thead>
                            <tr class="leads-back">
                                <th>Month</th>
                                <th>LP Staff</th>
                                <th>SPP Staff</th>
                                <th>Marketing Campaigns</th>
                                <th>BDM Staff</th>
                                <th>TFC</th>
                                <th>Others</th>
                                <th>Totals</th>
                                <th>%</th>
                            </tr>`
                        </thead>
                        <tbody>
                            {leads.map((lead, i) => {
                                return (
                                    <tr key={i}>
                                    <td>{lead.id}</td>
                                    <td>{lead.referrer}</td>
                                    <td>{lead.total}</td>
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


