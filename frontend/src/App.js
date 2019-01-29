import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Leaderboard from './tables/LeaderboardTable';
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/lodgementsTable'
import ApprovalsTable from './tables/approvalsTable'
import SettlementsTable from './tables/settlementsTable'
import CRM from './tables/crmTable'
import Form from './Form'
import UpdateForm from './UpdateForm'
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';


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
