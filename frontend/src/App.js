import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class leadsPage extends Component {
  render() {
    return (
      <body>
<h1 class="header">LEADS</h1>
<h3 class="CMP">CaptureMortgage+ Leads Board *insert js*</h3>
<table id="myTable">
  <tr class="table_header">
    <th>ID</th>
    <th>Entered as Lead</th>
    <th>Customer Name</th>
    <th>Category</th>
    <th>Amount</th>
    <th>Referrer</th>
    <th>Employee</th>
  </tr>
  <tr>
    <td>1</td>
    <td>01/01/2019</td>
    <td>Craig David</td>
    <td>Home Loan</td>
    <td>$200,000</td>
    <td>LP Staff</td>
    <td>Sarah Smith</td>
  </tr>
    <tr>
    <td>2</td>
    <td>01/01/2019</td>
    <td>James Dean</td>
    <td>Home Loan</td>
    <td>$40,000</td>
    <td>LP Staff</td>
    <td>Louise Lilly</td>
  </tr>
    <tr>
    <td>3</td>
    <td>02/04/2018</td>
    <td>Billy Joel</td>
    <td>Home Loan</td>
    <td>$475,000</td>
    <td>LP Staff</td>
    <td>Katherine Kale</td>
  </tr>
</table>
    
</body>
    );
  }
}

export default leadsPage;
