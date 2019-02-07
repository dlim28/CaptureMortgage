import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";
import axios from 'axios';

class LeadsTable extends Component {

  state = { leads: [] }
    
  componentDidMount() {
    const config = { headers: {
        token: sessionStorage.getItem('token')
    }}
    
      axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/leads/all', config)
          .then(resp => {
              console.log(resp.data)
              this.setState({ leads: resp.data })
          })
      }

  render() {

    let data = []
    let obj = {}

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
        <h1 className="header leads">LEADS</h1>
            <h3>CaptureMortgage+ Leads Board</h3><span> </span>
            <h3><FiscalYear /></h3>
            </div>

        {this.state.leads.map((element, i) => {
            if (element !== undefined) {
                // console.log(element)

                obj =  {
                    id: element.id,
                    leads: element.dateOfLead,
                    name: element.customerName,
                    category: element.category,
                    amount: Intl.NumberFormat().format(element.amount),
                    referrer: element.referrer,
                    employee: element.employee
                }

                data.push(obj)
            } 
            else {
            }
        })}
        
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