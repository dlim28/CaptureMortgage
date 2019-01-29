import React, { Component } from 'react';
import './App.css'
import Navbar from './Navbar'
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/LodgementsTable'
import ApprovalsTable from './tables/ApprovalsTable'
import SettlementsTable from './tables/SettlementsTable'


class Dashboard extends Component {
  render() {
    
    return (
      <div>

        <Navbar />
        
        <div class="all-tables">
          <LeadsTable />
          <LodgementsTable />
          <ApprovalsTable />
          <SettlementsTable />
        </div>

      </div>
    );
  }
}

export default Dashboard;
