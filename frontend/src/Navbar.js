import React, { Component } from 'react';
import './NavbarCM.css';
import logo from './assets/CMP_Logo_White.png'
import axios from 'axios'

    class Navbar extends Component {
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
        <div className="nav-container">

            <div className="logo-box">
                <div className="logo-img-box">
                    <img src={logo} alt={"logo"}/>
                </div>
                <div className="logo-text">
                    <h1><span className="white">Capture</span><span className="orange">Mortgage+</span></h1>
                </div>
                <div className="logo-subtext">
                    <h4 className="small">CRM System</h4>
                </div>
            </div>
    
            <div className="nav-box">
                <nav className="navbar">
                    <a href="/dashboard" className="lined">DASHBOARD</a>
                    <a href="/leads" className="lined">
                        <div className="dropdown">
                            <button className="dropbtn">LEADS<span> </span>
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="/leads/new">New Lead</a>
                                <a href="/leads/employeeleaderboard">Employee Leaderboard</a>
                                <a href="/leads/referrerleaderboard">Referrer Leaderboard</a>
                            </div>
                        </div>
                    </a>
                    <a href="/lodgements" className="lined">LODGEMENTS</a>
                    <a href="/approvals" className="lined">APPROVALS</a>
                    <a href="/settlements" className="lined">SETTLEMENTS</a>
                    <a href="/crm" className="lined">CRM</a>
                    <a href="/login" className="lined">LOGOUT</a>
                </nav>
            </div>
    
            <div className="nav-table">
                <table>
                    <thead className="table-header">
                        <tr>
                            <th></th>
                            <th>Current Month</th>
                            <th>Current Month $</th>
                            <th>Total YTD</th>
                            <th>Total YTD $</th>
                        </tr>
                    </thead>
                    <tbody className="table-content">
                        <tr>
                            <td className="firstcolumn">LEADS</td>
                            <td></td>
                            <td>-</td>
                            <td>{status0}</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td className="firstcolumn">LODGEMENTS</td>
                            <td></td>
                            <td>$5,580,000</td>
                            <td>{status1}</td>
                            <td>$7,900,000</td>
                        </tr>
                        <tr>
                            <td className="firstcolumn">APPROVALS</td>
                            <td></td>
                            <td>$1,200,000</td>
                            <td>{status2}</td>
                            <td>$1,900,000</td>
                        </tr>
                        <tr>
                            <td className="firstcolumn">SETTLEMENTS</td>
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
             return "Not working"
         }
    }
}

export default Navbar;