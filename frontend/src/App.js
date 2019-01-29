import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import EmployeeLeaderboard from './tables/EmployeeLeaderboardTable';
import ReferrerLeaderboard from './tables/ReferrerLeaderboardTable';
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/lodgementsTable'
import ApprovalsTable from './tables/approvalsTable'
import SettlementsTable from './tables/settlementsTable'
import CRM from './tables/crmTable'
import Form from './Form'
import UpdateForm from './UpdateForm'
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import axios from 'axios'

// derp


class App extends Component {

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

export default App;
