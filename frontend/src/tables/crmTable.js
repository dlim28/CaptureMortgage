import React, { Component } from 'react';
import './tablestyles/globalTableStyles.css';
import './tablestyles/crm.css';
import Navbar from '../Navbar'

class CRM extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 class="header_crm header">CRM</h1>
        <select class='input-box' name="Category" id="username">          
          <option value="0">--select activity status--</option>
          <option value="1">Active Customers</option> 
          <option value="2">In-Active Customers</option>
          <option value="3">All Customers</option>
        </select> 
              <br></br>
        <input type="search" class="crm-search" data-table="order-table" placeholder="Search Name"></input>
        <br></br>
        <button className='search-button'>Search</button>
        <table id="myTable">
          <tr class="table_header_crm">
            <th>NO.</th>
            <th>Name</th>
            <th>Status</th>
            <th>Status Date</th>
            <th>Category</th>
          </tr>
          <tr>
            <td>1</td>
            <td>01/01/2019</td>
            <td>Craig David</td>
            <td>Home Loan</td>
            <td>$200,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>01/01/2019</td>
            <td>James Dean</td>
            <td>Home Loan</td>
            <td>$40,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>02/04/2018</td>
            <td>Billy Joel</td>
            <td>Home Loan</td>
            <td>$475,000</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CRM;


