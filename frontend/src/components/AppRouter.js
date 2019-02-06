import React, { Component } from 'react';
import Dashboard from './Dashboard'
import EmployeeLeaderboard from './EmployeeLeaderboardTable'
import ReferrerLeaderboard from './ReferrerLeaderboardTable'
import LeadsTable from './LeadsTable'
import LodgementsTable from './LodgementsTable'
import ApprovalsTable from './ApprovalsTable'
import SettlementsTable from './SettlementsTable'
import CRM from './CrmTable'
import FormNew from './FormNew'
import Login from './Login'
import { Route } from 'react-router-dom'


class AppRouter extends Component {
  render() {
    return (
        <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/leads' component={LeadsTable} />
            <Route path='/leads/:id' component={LeadsTable} />
            <Route exact path='/new' component={FormNew} />
            <Route exact path='/employeeleaderboard' component={EmployeeLeaderboard} />
            <Route exact path='/referrerleaderboard' component={ReferrerLeaderboard} />
            <Route exact path='/lodgements' component={LodgementsTable} />
            <Route exact path='/approvals' component={ApprovalsTable} />
            <Route exact path='/settlements' component={SettlementsTable} />
            <Route exact path='/crm' component={CRM} />
        </div>

    );
  }
}

export default AppRouter;
