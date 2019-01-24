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
            </nav>

            <table>
                <tr>
                    <th></th>
                    <th>Current Month</th>
                    <th>Current Month $</th>
                    <th>Total</th>
                    <th>Total $</th>
                </tr>
                <td>
                    <td>a</td>
                    <td>e</td>
                    <td>i</td>
                    <td>o</td>
                    <td>u</td>
                    <td>y</td>
                </td>
            </table>
        </div>
    );
  }

  export default Navbar;