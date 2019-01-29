import React, { Component } from 'react';
import './App.css'
import Dashboard from './Dashboard'
import EmployeeLeaderboard from './tables/EmployeeLeaderboardTable'
import ReferrerLeaderboard from './tables/ReferrerLeaderboardTable'
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/LodgementsTable'
import ApprovalsTable from './tables/ApprovalsTable'
import SettlementsTable from './tables/SettlementsTable'
import CRM from './tables/CrmTable'
import Form from './Form'
import { BrowserRouter, Route } from 'react-router-dom'


class AppRouter extends Component {
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
            </div>
        </BrowserRouter>

    );
  }
}

export default AppRouter;
