import React, { Component } from 'react';
import './tablestyles/globalTableStyles.css';
import './tablestyles/leaderboard.css';

class ReferrerLeaderboard extends Component {
  render() {
    return (
      <div class="leaderboard_table">
        <h1 class="header_leaderboard header">REFERRER LEADERBOARD</h1>
        <h3 class="CMP_leaderboard">CaptureMortgage+ Leader Board by Referrer 2018/2019</h3>
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


