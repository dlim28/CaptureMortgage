import React from 'react';
import '../styles/NavbarCM.css';
import logo from '../assets/CMP_Logo_White.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    state = {}

    componentDidMount() {
        const status0 = axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/navbar/0')
        const status1 = axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/navbar/1')
        const status2 = axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/navbar/2')
        const status3 = axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/navbar/3')
        Promise.all([status0, status1, status2, status3])
            .then((res) => {
                this.setState({status0: res[0].totalRecordsForMonth})
                this.setState({status1: res[1].data.length})
                this.setState({status2: res[2].data.length})
                this.setState({status3: res[3].totalRecordsForMonth})
                console.log(res)
            })
        // status0.then(resp => {console.log(resp)})
    }
    // xoxox
    render() {
        const { status0, status1, status2, status3 } = this.state
        console.log(status3)
        if (status3) {

            
    return (
        <div>
            <div class="nav-container">

                <div class="logo-box">
                    <div class="logo-img-box">
                        <img src={logo} alt={"logo"}/>
                    </div>
                    <div class="logo-text">
                        <h1>
                            <span class="white">Capture</span>
                            <span class="orange">Mortgage+</span>
                        </h1>
                    </div>
                    <div class="logo-subtext">
                        <h4 class="small">CRM System</h4>
                    </div>
                </div>

                <div class="nav-box">
                    <nav class="navbar">
                        
                        {/* <a href="/dashboard" class="lined">DASHBOARD</a> */}
                        <NavLink to="/dashboard" class="lined">DASHBOARD</NavLink>
                        <a href="/leads" class="lined">
                            <div class="dropdown">
                                <button class="dropbtn">LEADS<span> </span>
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="/leads/new">New Lead</a>
                                    <a href="/leads/employeeleaderboard">Employee Leaderboard</a>
                                    <a href="/leads/referrerleaderboard">Referrer Leaderboard</a>
                                </div>
                            </div>
                        </a>
                        {/* <NavLink to="/lodgement">LODGEMENTS</NavLink> */}
                        {/* <a href="/lodgements" class="lined">LODGEMENTS</a>
                        <a href="/approvals" class="lined">APPROVALS</a> */}
                        {/* <a href="/settlements" class="lined">SETTLEMENTS</a> */}
                        {/* <a href="/crm" class="lined">CRM</a>
                        <a href="/login" class="lined">LOGOUT</a> */}
                        <NavLink to="/lodgements" class="lined">LODGEMENTS</NavLink>
                        <NavLink to="/approvals" class="lined">APPROVALS</NavLink>
                        <NavLink to="/settlements" class="lined">SETTLEMENTS</NavLink>
                        <NavLink to="/crm" class="lined">CRM</NavLink>
                        <NavLink to="/login" class="lined">LOGIN</NavLink>
                    </nav>
                </div>
        
                <div class="nav-table">
                    <table>
                        <thead class="table-header">
                            <tr>
                                <th></th>
                                <th>Current Month</th>
                                <th>Current Month $</th>
                                <th>Total YTD</th>
                                <th>Total YTD $</th>
                            </tr>
                        </thead>
                        <tbody class="table-content">
                            <tr>
                                <td class="firstcolumn">LEADS</td>
                                <td>9</td>
                                <td>-</td>
                                <td>11</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td class="firstcolumn">LODGEMENTS</td>
                                <td>18</td>
                                <td>$5,580,000</td>
                                <td>25</td>
                                <td>$7,900,000</td>
                            </tr>
                            <tr>
                                <td class="firstcolumn">APPROVALS</td>
                                <td>7</td>
                                <td>$1,200,000</td>
                                <td>9</td>
                                <td>$1,900,000</td>
                            </tr>
                            <tr>
                                <td class="firstcolumn">SETTLEMENTS</td>
                                <td>12</td>
                                <td>$900,000</td>
                                <td>15</td>
                                <td>$1,250,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
        </div>
        </div>
    );
  }

  export default Navbar;