import React from 'react';
import './NavbarCM.css';
import logo from './assets/CMP_Logo_White.png'


const Navbar = () => {
    return (
        <div class="nav-container">
            <nav class="navbar">
                    <div class="logo-box">
                        <a href="#left" class="logo"><img src={logo} alt={"logo"} width='100'/>
                            <p class='logo-text'><span class='white'>Capture</span><span class='orange'>Mortgage+</span></p>
                            <p class='white-small'>CRM System</p>
                        </a>
                        
                        <div>
                        </div>
                    </div>
                    <div class="nav-box">
                        <a href="#dashboard">DASHBOARD</a>
                    <div class="dropdown">
                        <button class="dropbtn">LEADS
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">New Lead</a>
                            <a href="#">Employee Leader Board</a>
                            <a href="#">Referrer Leader Board</a>
                        </div>
                    </div>
                    <a href="#lodgements">LODGEMENTS</a>
                    <a href="#approvals">APPROVALS</a>
                    <a href="#settlements">SETTLEMENTS</a>
                    <a href="#crm">CRM</a>
                    <a href="#logout">LOGOUT</a>  
                </div> 

                <div class="nav-table">
                    <table>
                        <thead class="table-header">
                            <tr>
                                <th></th>
                                <th>Current Month</th>
                                <th>Current Month $</th>
                                <th>Total</th>
                                <th>Total $</th>
                            </tr>
                        </thead>
                        <tbody class="table-content">
                            <tr>
                                <td>Leads</td>
                                <td>9</td>
                                <td>-</td>
                                <td>11</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Lodgements</td>
                                <td>18</td>
                                <td>$5,580,000</td>
                                <td>25</td>
                                <td>$7,900,000</td>
                            </tr>
                            <tr>
                                <td>Approvals</td>
                                <td>7</td>
                                <td>$1,200,000</td>
                                <td>9</td>
                                <td>$1,900,000</td>
                            </tr>
                            <tr>
                                <td>Settlements</td>
                                <td>12</td>
                                <td>$900,000</td>
                                <td>15</td>
                                <td>$1,250,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </nav>


        </div>
    );
  }

  export default Navbar;