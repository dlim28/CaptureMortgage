import React, { Component } from 'react';
import './tablestyles/globalTableStyles.css';
import './tablestyles/leaderboard.css';
import FiscalYear from '../FiscalYear';

class ReferrerLeaderboard extends Component {
  render() {
    return (
      <div class="leaderboard_table">
        <h1 class="header_leaderboard header">REFERRER LEADERBOARD</h1>
        <div class="CMP_leaderboard">
            <h3 class="second-header">CaptureMortgage+ Leaderboard by Referrer</h3><span> </span>
            <h3 class="second-header"><FiscalYear /></h3>
        </div>
        <table id="myTable">
            <tr class="table_header_leaderboard">
                <th>Month</th>
                <th>LP Staff</th>
                <th>SPP Staff</th>
                <th>Marketing Campaigns</th>
                <th>BDM Staff</th>
                <th>TFC</th>
                <th>Others</th>
                <th>Totals</th>
                <th>%</th>
            </tr>
            <tr>
                <td>January</td>
                <td>2</td>
                <td>13</td>
                <td>12</td>
                <td>4</td>
                <td>31</td>
                <td>4</td>
                <td>0</td>
                <td>45%</td>
            </tr>
            <tr>
                <td>December</td>
                <td>2</td>
                <td>13</td>
                <td>5</td>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>0</td>
                <td>16%</td>
            </tr>
            <tr>
                <td>November</td>
                <td>2</td>
                <td>13</td>
                <td>0</td>
                <td>9</td>
                <td>31</td>
                <td>4</td>
                <td>10</td>
                <td>57%</td>
            </tr>
        </table>
    </div>
    );
  }
}

export default ReferrerLeaderboard;


