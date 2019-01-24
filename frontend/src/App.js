import React, { Component } from 'react';
import './App.css';
import Leaderboard from './tables/LeaderboardTable';
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/LodgementsTable'
import ApprovalsTable from './tables/ApprovalsTable'
import SettlementsTable from './tables/SettlementsTable'
import CRM from './tables/crmTable'
import Form from './Form'


class mainPage extends Component {
  render() {
    return (
      <div>

        <div class="temp-nav">
        <ul class="nav-ver1">
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#">Leads Table</a></li>
          <li><a href="#">Lodgements Table</a></li>
          <li><a href="#">Approvals Table</a></li>
          <li><a href="#">Settlements Table</a></li>
          <li><a href="#">CRM</a></li>
        </ul>
        </div>

        <div class="all-tables">

          <Leaderboard />
          <LeadsTable />
          <LodgementsTable />
          <ApprovalsTable />
          <SettlementsTable />
          <CRM />
          <Form/>

        </div>

      </div>
    );
  }
}

export default mainPage;