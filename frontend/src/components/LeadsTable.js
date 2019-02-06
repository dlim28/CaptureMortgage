import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";
import axios from 'axios';

class LeadsTable extends Component {

  state = { leads: [] }
    
  componentDidMount() {
      axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/all')
          .then(resp => {
              console.log(resp.data)
              this.setState({ leads: resp.data })
          })
      }

  render() {

    const { leads } = this.state;

console.log(leads)

    const data = [
      {
        id: leads.id,
        leads: leads.dateOfLead,
        name: leads.customerName,
        category: leads.category,
        amount: Intl.NumberFormat().format(leads.amount),
        referrer: leads.referrer,
        employee: leads.employee
      }
   ]
  console.log(data)
  
      const columns = [{
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Entered as Lead',
        accessor: 'leads'
      },
      {
        Header: 'Customer Name',
        accessor: 'name'
      },
      {
        Header: 'Category',
        accessor: 'category'
      },
      {
        Header: 'Amount',
        accessor: 'amount'
      },
      {
        Header: 'Referrer',
        accessor: 'referrer'
      },
      {
        Header: 'Employee',
        accessor: 'employee'
      }
    ]
  
    return (
        <div>

        <div class="leads header">
            <h3>CaptureMortgage+ Leads Board</h3><span> </span>
            <h3><FiscalYear /></h3>
            </div>
        
                      <ReactTable
                        data={data}
                        columns={columns}
                        defaultPageSize = {10}
                        pageSizeOptions = {[10, 20, 50]}
                      />
                  </div>      
            )
        
          }
        }
        
        export default LeadsTable;
