import React, { Component } from 'react';
import './App.css'
import Dashboard from './components/Dashboard'
import EmployeeLeaderboard from './components/EmployeeLeaderboard'
import ReferrerLeaderboard from './components/ReferrerLeaderboardTable'
import LeadsTable from './components/LeadsTable'
import LodgementsTable from './components/LodgementsTable'
import ApprovalsTable from './components/ApprovalsTable'
import SettlementsTable from './components/SettlementsTable'
import CRM from './components/CrmTable'
import Form from './components/Form'
import Login from './components/Login'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
        
        <BrowserRouter>
            <div>
                <Route path='/dashboard' component={Dashboard} />
                <Route exact path='/leads' component={LeadsTable} />
                <Route path='/leads/:id' component={LeadsTable} />
                <Route path='/leads/new' component={Form} />
                <Route path='/leads/employeeleaderboard' component={EmployeeLeaderboard} />
                <Route path='/leads/referrerleaderboard' component={ReferrerLeaderboard} />
                <Route exact path='/lodgements' component={LodgementsTable} />
                <Route exact path='/approvals' component={ApprovalsTable} />
                <Route exact path='/settlements' component={SettlementsTable} />
                <Route path='/crm' component={CRM} />
                <Route path='/login' component={Login} />
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
