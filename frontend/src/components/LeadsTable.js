import React, { Component } from 'react';
import '../styles/globaltablestyles.css';
import '../styles/leads.css';
import Navbar from './Navbar'
import FiscalYear from './FiscalYear';

class LeadsTable extends Component {
    render() {
        return (
            <div>
                <Navbar />  

                <div class="leads_table">
                    <h1 class="header_leads header">LEADS</h1>
                    <div class="CMP_leads">
                        <h3>CaptureMortgage+ Leads Board</h3><span> </span>
                        <h3><FiscalYear /></h3>
                    </div>
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
            </div>
                
        );
    }
}

export default LeadsTable;


