import React, { Component } from 'react';
import '../styles/NavbarCM.css';
import logo from '../assets/CMP_FullLogo.png'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios';

class Navbar extends Component {

    state = { 
        navbars: [] 
    }

    fetchData = () => {
        const config = { headers: {
            token: sessionStorage.getItem('token')
        }}
        // console.log('fetching data')
        axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/navbar', config)
        .then(resp => {
            // console.log(resp.data)
            this.setState({ navbars: resp.data })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchData();
        this.setState({refresh: setInterval(this.fetchData, 15000)});
    }
    
    componentWillUnmount() {
        clearInterval(this.state.refresh)
    }

    clearSessionStorage() {
        sessionStorage.clear()
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
                        <Link to="/leads" className="lined">
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
                        </Link>
                        <NavLink to="/lodgements" className="lined">LODGEMENTS</NavLink>
                        <NavLink to="/approvals" className="lined">APPROVALS</NavLink>
                        <NavLink to="/settlements" className="lined">SETTLEMENTS</NavLink>
                        <NavLink to="/crm" className="lined">CRM</NavLink>
                        <NavLink to="/login" className="lined" onClick={this.clearSessionStorage}>LOGOUT</NavLink>
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