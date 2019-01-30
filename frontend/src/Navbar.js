import React, { Component } from 'react';
import './NavbarCM.css';
import logo from './assets/CMP_Logo_White.png'
import axios from 'axios'

    class Navbar extends Component {
        state = {}

        componentDidMount() {
            const status0 = axios.get('http://localhost:5000/navbar/getdata/0')
            const status1 = axios.get('http://localhost:5000/navbar/getdata/1')
            const status2 = axios.get('http://localhost:5000/navbar/getdata/2')
            const status3 = axios.get('http://localhost:5000/navbar/getdata/3')
            Promise.all([status0, status1, status2, status3])
                .then((res) => {
                    this.setState({status0: res[0].data.length})
                    this.setState({status1: res[1].data.length})
                    this.setState({status2: res[2].data.length})
                    this.setState({status3: res[3].data.length})
                })
        }
        
        render() {
            const { status0, status1, status2, status3 } = this.state
            if (status3) {
            return (
        <div class="nav-container">

            <div class="logo-box">
                <div class="logo-img-box">
                    <img src={logo} alt={"logo"}/>
                </div>
                <div class="logo-text">
                    <h1><span class="white">Capture</span><span class="orange">Mortgage+</span></h1>
                </div>
                <div class="logo-subtext">
                    <h4 class="small">CRM System</h4>
                </div>
            </div>
    
            <div class="nav-box">
                <nav class="navbar">
                    <a href="/dashboard" class="lined">DASHBOARD</a>
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
                    <a href="/lodgements" class="lined">LODGEMENTS</a>
                    <a href="/approvals" class="lined">APPROVALS</a>
                    <a href="/settlements" class="lined">SETTLEMENTS</a>
                    <a href="/crm" class="lined">CRM</a>
                    <a href="/logout" class="lined">LOGOUT</a>
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
                            <td></td>
                            <td>-</td>
                            <td>{status0}</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td class="firstcolumn">LODGEMENTS</td>
                            <td></td>
                            <td>$5,580,000</td>
                            <td>{status1}</td>
                            <td>$7,900,000</td>
                        </tr>
                        <tr>
                            <td class="firstcolumn">APPROVALS</td>
                            <td></td>
                            <td>$1,200,000</td>
                            <td>{status2}</td>
                            <td>$1,900,000</td>
                        </tr>
                        <tr>
                            <td class="firstcolumn">SETTLEMENTS</td>
                            <td></td>
                            <td>$900,000</td>
                            <td>{status3}</td>
                            <td>$1,250,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
    );
         } else {
             return "null"
         }
    }
}

export default Navbar;