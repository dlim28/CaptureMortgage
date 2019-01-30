import React, { Component } from 'react';
import '../App.css'
import Navbar from './Navbar'
import LeadsTable from './LeadsTable'
import LodgementsTable from './LodgementsTable'
import ApprovalsTable from './ApprovalsTable'
import SettlementsTable from './SettlementsTable'


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
