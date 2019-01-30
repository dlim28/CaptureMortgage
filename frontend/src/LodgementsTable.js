import React, { Component } from 'react';
import './tablestyles/globalTableStyles.css';
import './tablestyles/lodgements.css';
import Navbar from '../Navbar'
import FiscalYear from '../FiscalYear';
// change file names


class LodgementsTable extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="lodgements_table">
          <h1 class="header_lodgements header">LODGEMENTS</h1>
          <div class="CMP_lodgements">
            <h3>CaptureMortgage+ Lodgements Board</h3><span> </span>
            <h3><FiscalYear /></h3>
          </div>
          <table id="myTable">
            <tr class="table_header_lodgements">
              <th>ID</th>
              <th>Moved to Lodgements</th>
              <th>Customer Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>WIP</th>
              <th>Employee</th>
            </tr>
            <tr>
              <td>1</td>
              <td>01/01/2019</td>
              <td>Craig David</td>
              <td>Home Loan</td>
              <td>$200,000</td>
              <td>3 Days</td>
              <td>Sarah Smith</td>
            </tr>
            <tr>
              <td>2</td>
              <td>01/01/2019</td>
              <td>James Dean</td>
              <td>Home Loan</td>
              <td>$40,000</td>
              <td>7 Days</td>
              <td>Louise Lilly</td>
            </tr>
            <tr>
              <td>3</td>
              <td>02/04/2018</td>
              <td>Billy Joel</td>
              <td>Home Loan</td>
              <td>$475,000</td>
              <td>1 Day</td>
              <td>Katherine Kale</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default LodgementsTable;


