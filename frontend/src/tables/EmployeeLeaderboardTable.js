import React, { Component } from 'react';
import './tablestyles/globalTableStyles.css';
import './tablestyles/leaderboard.css';
import FiscalYear from '../FiscalYear';

class EmployeeLeaderboard extends Component {
  render() {
    return (
      <div class="leaderboard_table">
        <h1 class="header_leaderboard header">EMPLOYEE LEADERBOARD</h1>
        <div class="CMP_leaderboard">
            <h3 class="second-header">CaptureMortgage+ Leaderboard by Employee</h3><span> </span>
            <h3 class="second-header"><FiscalYear/></h3>
        </div>
        <table id="myTable">
            <tr class="table_header_leaderboard">
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
                <td>01/03/2019</td>
                <td>Alicia Keys</td>
                <td>Re-finance</td>
                <td>$400,000</td>
                <td>LP Staff</td>
                <td>Sarah Smith</td>
            </tr>
            <tr>
                <td>2</td>
                <td>01/02/2019</td>
                <td>Beyonce</td>
                <td>Home Loan</td>
                <td>$260,000</td>
                <td>LP Staff</td>
                <td>Louise Lilly</td>
            </tr>
            <tr>
                <td>3</td>
                <td>01/01/2019</td>
                <td>Craig David</td>
                <td>Re-finance</td>
                <td>$110,000</td>
                <td>LP Staff</td>
                <td>Katherine Kale</td>
            </tr>
        </table>
    </div>
    );
  }
}

export default EmployeeLeaderboard;


