import React, { Component } from 'react';
import './tablestyles/globalTableStyles.css';
import './tablestyles/leads.css';

class LeadsTable extends Component {
  render() {
    return (
      <div class="leads_table">
        <h1 class="header_leads header">LEADS</h1>
        <h3 class="CMP_leads">CaptureMortgage+ Leads Board *insert js*</h3>
        <table id="myTable">
            <tr class="table_header_leads">
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
    </div>
    );
  }
}

export default LeadsTable;


