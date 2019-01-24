import React from 'react';
import './NavbarCM.scss';

const Navbar = () => {
    return (
        <div class="nav-container">
            <nav class="navbar">
                    <div class="logo-box">
                        <a href="#left" class="logo">LEFTY</a>
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
        </div>
    );
  }

  export default Navbar;