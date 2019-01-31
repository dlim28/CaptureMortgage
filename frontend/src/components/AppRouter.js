import React, { Component } from 'react';
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
import { Route } from 'react-router-dom'


class AppRouter extends Component {
  render() {
    return (
    
        <div>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/leads' component={LeadsTable} />
            <Route path='/leads/:id' component={LeadsTable} />
            <Route path='/new' component={Form} />
            <Route path='/employeeleaderboard' component={EmployeeLeaderboard} />
            <Route path='/referrerleaderboard' component={ReferrerLeaderboard} />
            <Route path='/lodgements' component={LodgementsTable} />
            <Route path='/approvals' component={ApprovalsTable} />
            <Route path='/settlements' component={SettlementsTable} />
            <Route path='/crm' component={CRM} />
        </div>

    );
  }
}

export default AppRouter;
