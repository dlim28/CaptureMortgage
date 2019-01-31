import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import LeadsTable from './components/LeadsTable'
import EmployeeLeaderboard from './components/EmployeeLeaderboardTable'
import ReferrerLeaderboard from './components/ReferrerLeaderboardTable'
import LodgementsTable from './components/LodgementsTable'
import ApprovalsTable from './components/ApprovalsTable'
import SettlementsTable from './components/SettlementsTable'
import CRM from './components/CrmTable'
import Form from './components/Form'
import Login from './components/Login'
import AppRouter from './components/AppRouter'

class App extends Component {
  render() {

    const { pathname } = window.location;
    const params = pathname.substr(1);

    if (params === 'dashboard') {
      return <Dashboard />
    } else if (params === 'leads') {
      return <LeadsTable />
    } else if (params === 'leads/new') {
      return <Form />
    }  else if (params === 'leads/employeeleaderboard') {
      return <EmployeeLeaderboard />
    } else if (params === 'leads/referrerleaderboard') {
      return <ReferrerLeaderboard />
    } else if (params === 'lodgements') {
      return <LodgementsTable />
    } else if (params === 'approvals') {
      return <ApprovalsTable />
    } else if (params === 'settlements') {
      return <SettlementsTable />
    } else if (params === 'crm') {
      return <CRM />
    } else if (params === 'login') {
      return <Login />
    }

    return (
      <div>
        <Navbar />
        <AppRouter />

      </div>
    );

  }
}

export default App;
