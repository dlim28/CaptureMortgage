import React, { Component } from 'react';
import '../styles/NavbarCM.css';
import logo from '../assets/CMP_FullLogo.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

class Navbar extends Component {
    state = { 
        navbars: [] 
    }

    componentDidMount() {
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/navbar')
        .then(resp => {
            console.log(resp.data)
            this.setState({ navbars: resp.data })
        })
    }

    
    render() {
        const { navbars } = this.state;

        return (
            
            <div className="nav-container">

                <div className="logo-box">
                    <div className="logo-img-box">
                        <img src={logo} alt={"logo"}/>
                    </div>
                </div>

                <div className="nav-box">
                    <nav className="navbar">
                        
                        <NavLink to="/dashboard" className="lined">DASHBOARD</NavLink>
                        <a href="/leads" className="lined">
                            <div className="dropdown">
                                <button className="dropbtn">LEADS<span> </span>
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <NavLink to="/new">New Lead</NavLink>
                                    <NavLink to="/employeeleaderboard">Employee Leaderboard</NavLink>
                                    <NavLink to="/referrerleaderboard">Referrer Leaderboard</NavLink>
                                </div>
                            </div>
                        </a>
                        <NavLink to="/lodgements" className="lined">LODGEMENTS</NavLink>
                        <NavLink to="/approvals" className="lined">APPROVALS</NavLink>
                        <NavLink to="/settlements" className="lined">SETTLEMENTS</NavLink>
                        <NavLink to="/crm" className="lined">CRM</NavLink>
                        <NavLink to="/login" className="lined">LOGIN</NavLink>
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
                            {navbars.map((navbar, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="firstcolumn">{navbar.statusName}s</td>
                                        <td>{navbar.totalRecordsForMonth}</td>
                                        <td>${Intl.NumberFormat().format(navbar.totalAmountForMonth)}</td>
                                        <td>{navbar.totalRecordsYTD}</td>
                                        <td>${Intl.NumberFormat().format(navbar.totalAmountYTD)}</td>
                                    </tr>
                                )})}
                        </tbody>
                    </table>
                </div>
        
            </div>

        );
    }
}

export default Navbar;