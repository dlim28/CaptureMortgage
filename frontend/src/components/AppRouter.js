import React, { Component } from 'react';
import '../App.css'
import Dashboard from './Dashboard'
import EmployeeLeaderboard from './EmployeeLeaderboardTable'
import ReferrerLeaderboard from './ReferrerLeaderboardTable'
import LeadsTable from './LeadsTable'
import LodgementsTable from './LodgementsTable'
import ApprovalsTable from './ApprovalsTable'
import SettlementsTable from './SettlementsTable'
import CRM from './CrmTable'
import Form from './Form'
import Login from './Login'
import App from '../App'
import { Route } from 'react-router-dom'


class AppRouter extends Component {
  render() {
    return (
    
        <div>
            <Route exact path='/' component={App} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/leads' component={LeadsTable} />
            <Route exact path='/leads/:id' component={LeadsTable} />
            <Route exact path='/leads/new' component={Form} />
            <Route exact path='/leads/employeeleaderboard' component={EmployeeLeaderboard} />
            <Route exact path='/leads/referrerleaderboard' component={ReferrerLeaderboard} />
            <Route path='/lodgements' component={LodgementsTable} />
            <Route path='/approvals' component={ApprovalsTable} />
            <Route path='/settlements' component={SettlementsTable} />
            <Route path='/crm' component={CRM} />
            <Route path='/login' component={Login} />
        </div>

    );
  }
}

export default AppRouter;
