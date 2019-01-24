import React, { Component } from 'react';
import './App.css';
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/LodgementsTable'
import ApprovalsTable from './tables/ApprovalsTable'
import SettlementsTable from './tables/SettlementsTable'
import CRM from './tables/crmTable'
import Form from './Form'
import Leaderboard from './tables/LeaderboardTable';


class mainPage extends Component {
  render() {
    return (
      <div>

        <div class="temp-nav">

          Leaderboard
          Leads Table
          Lodgements Table
          Approvals Table
          Settlements Table
          CRM

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
