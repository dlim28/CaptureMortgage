import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import EmployeeLeaderboard from './tables/EmployeeLeaderboardTable';
import ReferrerLeaderboard from './tables/ReferrerLeaderboardTable';
import LeadsTable from './tables/LeadsTable'
import LodgementsTable from './tables/lodgementsTable'
import ApprovalsTable from './tables/approvalsTable'
import SettlementsTable from './tables/settlementsTable'
import CRM from './tables/crmTable'
import Form from './Form'
import UpdateForm from './UpdateForm'
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import axios from 'axios'




class App extends Component {

//   state = {}
//   componentDidMount() {
//     const status0 = axios.get('http://localhost:5000/navbar/getdata/0')
//     const status1 = axios.get('http://localhost:5000/navbar/getdata/1')
//     const status2 = axios.get('http://localhost:5000/navbar/getdata/2')
//     const status3 = axios.get('http://localhost:5000/navbar/getdata/3')
//     Promise.all([status0, status1, status2, status3])
//         .then((res) => {
//             // this.setState({status0: res[0].data.length})
//             // this.setState({status1: res[1].data.length})
//             // this.setState({status2: res[2].data.length})
//             // this.setState({status3: res[3].data.length})
//             console.log(res)
//         })
// }


  render() {
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
          <CRM />
        </div>

        <Form/>

      </div>
    );
  }
}

export default App;
