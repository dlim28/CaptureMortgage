import React, { Component } from 'react';
import './App.css'
import Navbar from './Navbar'
// import Dashboard from './Dashboard'
import EmployeeLeaderboard from './tables/EmployeeLeaderboardTable'
import ReferrerLeaderboard from './tables/ReferrerLeaderboardTable'
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/LodgementsTable'
import ApprovalsTable from './tables/ApprovalsTable'
import SettlementsTable from './tables/SettlementsTable'
// import CRM from './tables/CrmTable'
// import Form from './Form'
// import { BrowserRouter, Route } from 'react-router-dom'


class mainPage extends Component {
  render() {
    // const { pathname } = window.location;
    // const params = pathname.substr(1);

    // if (params === 'dashboard') {
    //   return <Dashboard />
    // } else if (params === 'leads') {
    //   return <LeadsTable />
    // } else if (params === 'leads/new') {
    //   return <Form />
    // }  else if (params === 'leads/employeeleaderboard') {
    //   return <EmployeeLeaderboard />
    // } else if (params === 'leads/referrerleaderboard') {
    //   return <ReferrerLeaderboard />
    // } else if (params === 'lodgements') {
    //   return <LodgementsTable />
    // } else if (params === 'approvals') {
    //   return <ApprovalsTable />
    // } else if (params === 'settlements') {
    //   return <SettlementsTable />
    // } else if (params === 'crm') {
    //   return <CRM />
    // } 

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
        </div>

      </div>
    );
  }
}

export default mainPage;
