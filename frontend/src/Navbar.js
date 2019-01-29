import React from 'react';
import './NavbarCM.css';
import logo from './assets/CMP_Logo_White.png'


const Navbar = () => {
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
                    <a href="#dashboard" class="lined">DASHBOARD</a>
                    <a href="#leads" class="lined">
                        <div class="dropdown">
                            <button class="dropbtn">LEADS<span> </span>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">New Lead</a>
                                <a href="#">Employee Leaderboard</a>
                                <a href="#">Referrer Leaderboard</a>
                            </div>
                        </div>
                    </a>
                    <a href="#lodgements" class="lined">LODGEMENTS</a>
                    <a href="#approvals" class="lined">APPROVALS</a>
                    <a href="#settlements" class="lined">SETTLEMENTS</a>
                    <a href="#crm" class="lined">CRM</a>
                    <a href="#logout" class="lined">LOGOUT</a>
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
    );
  }

  export default Navbar;