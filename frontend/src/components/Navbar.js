import React from 'react';
import '../styles/NavbarCM.css';
import logo from '../assets/CMP_FullLogo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
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