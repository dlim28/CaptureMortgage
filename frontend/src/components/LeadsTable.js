import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';
import FormUpdate from './FormUpdate'
// import ReactTable from "react-table";


class LeadsTable extends Component {
    state = { 
        leads: [],
        update: false,
        updatePerson: null
    }

    handleUpdateClick(lead) {
        this.setState({
            update: true,
            updatePerson: lead
            
        });
    }
    
    componentDidMount() {
        axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/all')
            .then(resp => {
                console.log(resp.data)
                this.setState({ leads: resp.data })
            })
        }

    render() {
        const { leads } = this.state;
        if (this.state.update === false) {
            return (
                <div>
                    <div class="center">
                        <h1 class="header leads">LEADS</h1>
                        <div class="leads">
                            <h3>CaptureMortgage+ Leads Board</h3><span> </span>
                            <h3><FiscalYear /></h3>
                        </div>
                        <table id="myTable">
                                <thead>
                                <tr class="leads-back">
                                    <th>ID</th>
                                    <th>Entered as Lead</th>
                                    <th>Customer Name</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Referrer</th>
                                    <th>Employee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead, i) => {
                                    return (
                                    <tr key={i} onClick={() => this.handleUpdateClick(lead)}>
                                        <td>{lead.id}</td>
                                        <td>{lead.dateOfLead}</td>
                                        <td><a href="#">{lead.customerName}</a></td>
                                        <td>{lead.category}</td>
                                        <td>${Intl.NumberFormat().format(lead.amount)}</td>
                                        <td>{lead.referrer}</td>
                                        <td>{lead.employee}</td>
                                    </tr>
                                    
                                )})}
                            </tbody>
                            <button  
                                    className="updateButton"  > 
                                        Update Status
                                </button>
                        </table>
                    </div>

                </div>
                    
            );
        }
        else {
            return (
               <FormUpdate customerData={this.state.updatePerson}/>
            )
        }
    }
}

export default LeadsTable;

//set state UPDATE to true from false {onclick}
// will render thanks to if/else function update form
//update form will be automatically populated using endpoints

