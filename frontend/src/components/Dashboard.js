import React, { Component } from 'react';
import '../App.css'
import LeadsTable from './LeadsTable'
import LodgementsTable from './LodgementsTable'
import ApprovalsTable from './ApprovalsTable'
import SettlementsTable from './SettlementsTable'


class Dashboard extends Component {
  render() {
    
    return (
      <div>
        
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
