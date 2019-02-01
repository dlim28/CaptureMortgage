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

    // const enumIndex = {}
    // enumIndex.Enum('LEADS', 'LODGEMENTS', 'APPROVALS', 'SETTLEMENTS')

    
    render() {
        const { navbars } = this.state;



        return (
            
            <div class="nav-container">

                <div class="logo-box">
                    <div class="logo-img-box">
                        <img src={logo} alt={"logo"}/>
                    </div>
                </div>

                <div class="nav-box">
                    <nav class="navbar">
                        
                        <NavLink to="/dashboard" class="lined">DASHBOARD</NavLink>
                        <a href="/leads" class="lined">
                            <div class="dropdown">
                                <button class="dropbtn">LEADS<span> </span>
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <NavLink to="/new">New Lead</NavLink>
                                    <NavLink to="/employeeleaderboard">Employee Leaderboard</NavLink>
                                    <NavLink to="/referrerleaderboard">Referrer Leaderboard</NavLink>
                                </div>
                            </div>
                        </a>
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
                            {navbars.map((navbar, i) => {
                                // switch (i) {
                                //     case 0: return i = "LEADS";
                                //     case 1: return i =  "LODGEMENTS";
                                //     case 2: return i =  "APPROVALS";
                                //     case 3: return i =  "SETTLEMENTS";
                                // }
                                return (
                                    <tr key={i}>
                                        <td class="firstcolumn">{i}</td>
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