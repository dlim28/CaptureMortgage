import React from 'react';
import './NavbarCM.scss';

const Navbar = () => {
    return (
        <div class="nav-container">
            <nav>
            <ul id="main-nav">
                <li><a href="#">DASHBOARD</a></li>
                <li><a href="#">LEADS</a>
                    <ul class="dropdown">
                        <div>
                        <li><a href="#">New Leads</a></li>
                        <li><a href="#">Employee Leader Board</a></li>
                        <li><a href="#">Referrer Leader Board</a></li>
                        </div>
                    </ul>
                </li>
                <li><a href="#">LODGEMENT</a></li>
                <li><a href="#">APPROVALS</a></li>
                <li><a href="#">SETTLEMENTS</a></li>
                <li><a href="#">CRM</a></li>
                <li><a href="#">LOGOUT</a></li>
                <div id="marker"></div>
            </ul>
            </nav>




        </div>
    );
  }

  export default Navbar;