import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import EmployeeLeaderboard from './tables/EmployeeLeaderboardTable';
import ReferrerLeaderboard from './tables/ReferrerLeaderboardTable';
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/LodgementsTable'
import ApprovalsTable from './tables/ApprovalsTable'
import SettlementsTable from './tables/SettlementsTable'
import CRM from './tables/CrmTable'
import Form from './Form'


class mainPage extends Component {
  render() {
    return (
      <div>

        <Navbar />

        <div class="all-tables">
          <LeadsTable />
          <EmployeeLeaderboard />
          <ReferrerLeaderboard />
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
