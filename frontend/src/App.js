import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
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

        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="all-tables">
          <Leaderboard />
          <LeadsTable />
          <LodgementsTable />
          <ApprovalsTable />
          <SettlementsTable />
          <CRM />
        </div>

        <Form/>

      </div>
    );
  }
}

export default mainPage;
