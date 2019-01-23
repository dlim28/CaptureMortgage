import React, { Component } from 'react';
import './App.css';
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

        <LeadsTable />
        <LodgementsTable />
        <ApprovalsTable />
        <SettlementsTable />
        <CRM />

      <Form/>

      </div>
    );
  }
}

export default mainPage;
